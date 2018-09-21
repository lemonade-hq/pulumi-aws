// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as pulumi from "@pulumi/pulumi";
import * as crypto from "crypto";

import * as arn from "../arn";
import * as iam from "../iam";
import * as utils from "../utils";

import { Function as LambdaFunction, FunctionArgs } from "./function";
import * as permission from "./permission";
import * as runtime from "./runtimes";

/**
 * Context is the shape of the context object passed to a Function callback.  For more information,
 * see: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 */
export interface Context {
    /**
     * The default value is true. This property is useful only to modify the default behavior of the
     * callback. By default, the callback will wait until the event loop is empty before freezing
     * the process and returning the results to the caller. You can set this property to false to
     * request AWS Lambda to freeze the process soon after the callback is called, even if there are
     * events in the event loop. AWS Lambda will freeze the process, any state data and the events
     * in the event loop (any remaining events in the event loop processed when the Lambda function
     * is called next and if AWS Lambda chooses to use the frozen process).
     */
    callbackWaitsForEmptyEventLoop: boolean;

    /**
     * Name of the Lambda function that is executing.
     */
    readonly functionName: string;

    /**
     * The Lambda function version that is executing. If an alias is used to invoke the function,
     * then function_version will be the version the alias points to.
     */
    readonly functionVersion: string;

    /**
     * The ARN used to invoke this function. It can be a function ARN or an alias ARN. An
     * unqualified ARN executes the $LATEST version and aliases execute the function version it is
     * pointing to.
     */
    readonly invokedFunctionArn: string;

    /**
     * Memory limit, in MB, you configured for the Lambda function. You set the memory limit at the
     * time you create a Lambda function and you can change it later.
     */
    readonly memoryLimitInMB: string;

    /**
     * AWS request ID associated with the request. This is the ID returned to the client that called
     * the invoke method.
     *
     * If AWS Lambda retries the invocation (for example, in a situation where the Lambda function
     * that is processing Kinesis records throws an exception), the request ID remains the same.
     */
    readonly awsRequestId: string;

    /**
     * The name of the CloudWatch log group where you can find logs written by your Lambda function.
     */
    readonly logGroupName: string;

    /**
     * The name of the CloudWatch log group where you can find logs written by your Lambda function.
     * The log stream may or may not change for each invocation of the Lambda function.
     *
     * The value is null if your Lambda function is unable to create a log stream, which can happen
     * if the execution role that grants necessary permissions to the Lambda function does not
     * include permissions for the CloudWatch actions.
     */
    readonly logStreamName: string;

    /**
     * Information about the Amazon Cognito identity provider when invoked through the AWS Mobile
     * SDK. It can be null.
     */
    readonly identity: any;

    /**
     * Information about the client application and device when invoked through the AWS Mobile SDK.
     * It can be null.
     */
    readonly clientContext: any;

    /**
     * Returns the approximate remaining execution time (before timeout occurs) of the Lambda
     * function that is currently executing. The timeout is one of the Lambda function
     * configuration. When the timeout reaches, AWS Lambda terminates your Lambda function.
     *
     * You can use this method to check the remaining time during your function execution and take
     * appropriate corrective action at run time.
     */
    getRemainingTimeInMillis(): string;
}

/**
 * EntryPoint is the signature for a serverless function that will be invoked each time the AWS
 * Lambda is invoked.
 *
 * This function can be synchronous or asynchronous function, though async is only supported with an
 * AWS Lambda runtime of 8.10 or higher.  On those runtimes a Promise can be returned, 'callback'
 * parameter can be ignored, and AWS will appropriately handle things. For AWS lambda pre-8.10, a
 * synchronous function must be provided.  The synchronous function should return nothing, and
 * should instead invoke 'callback' when complete.
 */
export type EntryPoint<E, R> = (event: E, context: Context, callback: (error: any, result: R) => void) => Promise<R> | void;

/**
 * EntryPointFactory is the signature for a function that will be called once to produce the
 * serverless function that AWS Lambda will invoke.  It can be used to initialize expensive state
 * once that can then be used across all invocations of the Lambda (as long as the Lambda is using
 * the same warm node instance).
 */
export type EntryPointFactory<E, R> = () => EntryPoint<E, R>;

/**
 * An EventHandler is either a JavaScript Function instance or an aws.lambda.Function that can be
 * used to handle an event triggered by some resource.  If just a JavaScript function is provided
 * the AWS Lambda will be created by calling [createFunction] on it.  If more control over the
 * resultant AWS Lambda is required, clients can call [createFunction] directly and pass the result
 * of that to any code that needs an EventHandler.
 */
export type EventHandler<E, R> = EntryPoint<E, R> | LambdaFunction;

/**
 * FunctionOptions provides configuration options for the serverless Function.  It is effectively
 * equivalent to [aws.lambda.FunctionArgs] except with a few important differences documented at the
 * property level.  For example, [role] is an actual iam.Role instance, and not an ARN. Properties
 * like [runtime] are now optional.  And some properties (like [code]) are entirely disallowed.
 */
export type FunctionOptions<E, R> = utils.Overwrite<FunctionArgs, {
    /**
     * Not allowed when creating an aws.serverless.Function.  The [code] will be generated from the
     * passed in JavaScript callback.
     */
    code?: never;

    /**
     * Not allowed when creating an aws.serverless.Function.  The [code] will be generated from the
     * passed in JavaScript callback.
     */
    handler?: never;

    /**
     * The Javascript function instance to use as the entrypoint for the AWS Lambda out of.  Either
     * [entryPoint] or [entryPointFactory] must be provided.
     */
    entryPoint?: EntryPoint<E, R>;

    /**
     * The Javascript function instance that will be called to produce the function that is the
     * entrypoint for the AWS Lambda. Either [entryPoint] or [entryPointFactory] must be provided.
     *
     * This form is useful when there is expensive initialization work that should only be executed
     * once.  The factory-function will be invoked once when the final AWS Lambda module is loaded.
     * It can run whatever code it needs, and will end by returning the actual function that Lambda
     * will call into each time the Lambda is invoked.
     */
    entryPointFactory?: EntryPointFactory<E, R>;

    /**
     * A pre-created role to use for the Function. If not provided, [policies] will be used.
     */
    role?: iam.Role;

    /**
     * A list of IAM policy ARNs to attach to the Function.  Will be used if [role] is not provide.
     * If neither [role] nor [policies] is provided, a default policy of [iam.AWSLambdaFullAccess]
     * will be used instead.
     */
    policies?: arn.ARN[];

    /**
     * The Lambda runtime to use.  If not provided, will default to [NodeJS8d10Runtime]
     */
    runtime?: runtime.Runtime;

    /**
     * Options to control which paths/packages should be included or excluded in the zip file containing
     * the code for the AWS lambda.
     */
    codePathOptions?: pulumi.runtime.CodePathOptions;
}>;

/**
 * Base type for all subscription types.  An event subscription represents a connection between some
 * AWS resource an an AWS lambda that will be triggered when something happens to that resource.
 */
export class EventSubscription extends pulumi.ComponentResource {
    public permission: permission.Permission;
    public func: LambdaFunction;

    public constructor(
        type: string, name: string, props: Record<string, any>, opts?: pulumi.ResourceOptions) {

        super(type, name, props, opts);
    }
}

/* @internal */ export function createFunctionFromEventHandler<E, R>(
    name: string, handler: EventHandler<E, R>, opts?: pulumi.ResourceOptions): LambdaFunction {

    if (handler instanceof Function) {
        return createFunction(name, { entryPoint: handler } , opts);
    }
    else {
        return handler;
    }
}

/**
 * Creates an AWS Lambda out of the provider options.func or options.factoryFunc.  Configuration of
 * this lambda can be provided through [options].
 */
export function createFunction<E, R>(
    name: string, options: FunctionOptions<E, R>, opts?: pulumi.ResourceOptions): LambdaFunction {

    if (!name) {
        throw new Error("Missing required resource name");
    }

    if (options.entryPoint && options.entryPointFactory) {
        throw new pulumi.RunError("Cannot provide both [options.entryPoint] and [options.entryPointFactory]");
    }

    const func = options.entryPoint || options.entryPointFactory;
    if (!func) {
        throw new Error("One of [entryPoint] or [entryPointFactory] must be provided.");
    }

    let role: iam.Role;
    if (options.role) {
        role = options.role;
    } else {
        // Attach a role and then, if there are policies, attach those too.
        role = new iam.Role(name, {
            assumeRolePolicy: JSON.stringify(lambdaRolePolicy),
        }, opts);

        if (!options.policies) {
            // Provides wide access to "serverless" services (Dynamo, S3, etc.)
            options.policies = [iam.AWSLambdaFullAccess];
        }

        for (let policy of options.policies) {
            // RolePolicyAttachment objects don't have a physical identity, and create/deletes are processed
            // structurally based on the `role` and `policyArn`.  So we need to make sure our Pulumi name matches the
            // structural identity by using a name that includes the role name and policyArn.
            let attachment = new iam.RolePolicyAttachment(`${name}-${sha1hash(policy)}`, {
                role: role,
                policyArn: policy,
            }, opts);
        }
    }

    // Now compile the function text into an asset we can use to create the lambda. Note: to
    // prevent a circularity/deadlock, we list this Function object as something that the
    // serialized closure cannot reference.
    const handlerName = "handler";
    const serializedFileNameNoExtension = "__index";

    const closure = pulumi.runtime.serializeFunction(func, {
        serialize: _ => true,
        exportName: handlerName,
        isFactoryFunction: !!options.entryPointFactory,
    });

    const codePaths = computeCodePaths(
        closure, serializedFileNameNoExtension, options.codePathOptions);

    // Copy over all option values into the function args.  Then overwrite anything we care
    // about with our own values.  This ensures that clients can pass future supported
    // lambda options without us having to know about it.
    const copy = {
        ...options,
        code: new pulumi.asset.AssetArchive(codePaths),
        handler: serializedFileNameNoExtension + "." + handlerName,
        runtime: options.runtime || runtime.NodeJS8d10Runtime,
        role: role.arn,
        timeout: options.timeout === undefined ? 180 : options.timeout,
    };

    // Create the Lambda Function.
    const lambda = new LambdaFunction(name, copy, opts);
    lambda.roleInstance = role;
    return lambda;
}

// computeCodePaths calculates an AssetMap of files to include in the Lambda package.
async function computeCodePaths(
        closure: Promise<pulumi.runtime.SerializedFunction>,
        serializedFileNameNoExtension: string,
        codePathOptions: pulumi.runtime.CodePathOptions | undefined): Promise<pulumi.asset.AssetMap> {

    const serializedFunction = await closure;

    // Construct the set of paths to include in the archive for upload.
    let codePaths: pulumi.asset.AssetMap = {
        // Always include the serialized function.
        [serializedFileNameNoExtension + ".js"]: new pulumi.asset.StringAsset(serializedFunction.text),
    };

    // AWS Lambda always provides `aws-sdk`, so skip this.  Do this before processing user-provided
    // extraIncludePackages so that users can force aws-sdk to be included (if they need a specific
    // version).
    codePathOptions = codePathOptions || {};
    codePathOptions.extraExcludePackages = codePathOptions.extraExcludePackages || [];
    codePathOptions.extraExcludePackages.push("aws-sdk");

    const modulePaths = await pulumi.runtime.computeCodePaths(codePathOptions);

    for (const [path, asset] of modulePaths) {
        codePaths[path] = asset;
    }

    return codePaths;
}

const lambdaRolePolicy = {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": "sts:AssumeRole",
            "Principal": {
                "Service": "lambda.amazonaws.com",
            },
            "Effect": "Allow",
            "Sid": "",
        },
    ],
};

// sha1hash returns a partial SHA1 hash of the input string.
function sha1hash(s: string): string {
    const shasum: crypto.Hash = crypto.createHash("sha1");
    shasum.update(s);
    return shasum.digest("hex").substring(0, 8);
}

// Mixin the Role we potentially create into the Function instances we return.

declare module "./function" {
    interface Function {
        // Actual Role instance value for this Function.  Will only be set if this function
        // was created from [createFunction]
        roleInstance?: iam.Role;
    }
}
