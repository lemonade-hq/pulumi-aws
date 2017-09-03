// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class InternetGateway extends fabric.Resource {
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public readonly vpcId?: fabric.Property<string>;

    constructor(urnName: string, args: InternetGatewayArgs) {
        super("aws:ec2/internetGateway:InternetGateway", urnName, {
            "tags": args.tags,
            "vpcId": args.vpcId,
        });
    }
}

export interface InternetGatewayArgs {
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
    readonly vpcId?: fabric.PropertyValue<string>;
}

