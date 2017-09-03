// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {RestApi} from "./restApi";

export class Method extends fabric.Resource {
    public readonly apiKeyRequired?: fabric.Property<boolean>;
    public readonly authorization: fabric.Property<string>;
    public readonly authorizerId?: fabric.Property<string>;
    public readonly httpMethod: fabric.Property<string>;
    public readonly requestModels?: fabric.Property<{[key: string]: string}>;
    public readonly requestParameters?: fabric.Property<{[key: string]: boolean}>;
    public readonly requestParametersInJson?: fabric.Property<string>;
    public readonly requestValidatorId?: fabric.Property<string>;
    public readonly resourceId: fabric.Property<string>;
    public readonly restApi: fabric.Property<RestApi>;

    constructor(urnName: string, args: MethodArgs) {
        if (args.authorization === undefined) {
            throw new Error("Missing required property 'authorization'");
        }
        if (args.httpMethod === undefined) {
            throw new Error("Missing required property 'httpMethod'");
        }
        if (args.resourceId === undefined) {
            throw new Error("Missing required property 'resourceId'");
        }
        if (args.restApi === undefined) {
            throw new Error("Missing required property 'restApi'");
        }
        super("aws:apigateway/method:Method", urnName, {
            "apiKeyRequired": args.apiKeyRequired,
            "authorization": args.authorization,
            "authorizerId": args.authorizerId,
            "httpMethod": args.httpMethod,
            "requestModels": args.requestModels,
            "requestParameters": args.requestParameters,
            "requestParametersInJson": args.requestParametersInJson,
            "requestValidatorId": args.requestValidatorId,
            "resourceId": args.resourceId,
            "restApi": args.restApi,
        });
    }
}

export interface MethodArgs {
    readonly apiKeyRequired?: fabric.PropertyValue<boolean>;
    readonly authorization: fabric.PropertyValue<string>;
    readonly authorizerId?: fabric.PropertyValue<string>;
    readonly httpMethod: fabric.PropertyValue<string>;
    readonly requestModels?: fabric.PropertyValue<{[key: string]: fabric.PropertyValue<string>}>;
    readonly requestParameters?: fabric.PropertyValue<{[key: string]: fabric.PropertyValue<boolean>}>;
    readonly requestParametersInJson?: fabric.PropertyValue<string>;
    readonly requestValidatorId?: fabric.PropertyValue<string>;
    readonly resourceId: fabric.PropertyValue<string>;
    readonly restApi: fabric.PropertyValue<RestApi>;
}

