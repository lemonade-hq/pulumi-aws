// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {RestApi} from "./restApi";

export class MethodResponse
        extends fabric.Resource implements MethodResponseArgs {
    public readonly httpMethod: fabric.Property<string>;
    public readonly resourceId: fabric.Property<string>;
    public readonly responseModels?: fabric.Property<{[key: string]: string}>;
    public readonly responseParameters?: fabric.Property<{[key: string]: boolean}>;
    public readonly responseParametersInJson?: fabric.Property<string>;
    public readonly restApi: fabric.Property<RestApi>;
    public readonly statusCode: fabric.Property<string>;

    constructor(urnName: string, args: MethodResponseArgs) {
        if (args.httpMethod === undefined) {
            throw new Error("Missing required property 'httpMethod'");
        }
        if (args.resourceId === undefined) {
            throw new Error("Missing required property 'resourceId'");
        }
        if (args.restApi === undefined) {
            throw new Error("Missing required property 'restApi'");
        }
        if (args.statusCode === undefined) {
            throw new Error("Missing required property 'statusCode'");
        }
        super("aws:apigateway/methodResponse:MethodResponse", urnName, {
            "httpMethod": args.httpMethod,
            "resourceId": args.resourceId,
            "responseModels": args.responseModels,
            "responseParameters": args.responseParameters,
            "responseParametersInJson": args.responseParametersInJson,
            "restApi": args.restApi,
            "statusCode": args.statusCode,
        });
    }
}

export interface MethodResponseArgs {
    readonly httpMethod: fabric.PropertyValue<string>;
    readonly resourceId: fabric.PropertyValue<string>;
    readonly responseModels?: fabric.PropertyValue<{[key: string]: string}>;
    readonly responseParameters?: fabric.PropertyValue<{[key: string]: boolean}>;
    readonly responseParametersInJson?: fabric.PropertyValue<string>;
    readonly restApi: fabric.PropertyValue<RestApi>;
    readonly statusCode: fabric.PropertyValue<string>;
}
