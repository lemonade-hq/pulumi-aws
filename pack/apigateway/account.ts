// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Account extends fabric.Resource {
    public readonly cloudwatchRoleArn?: fabric.Property<string>;
    public /*out*/ readonly throttleSettings: fabric.Property<{ burstLimit: number, rateLimit: number }[]>;

    constructor(urnName: string, args: AccountArgs) {
        super("aws:apigateway/account:Account", urnName, {
            "cloudwatchRoleArn": args.cloudwatchRoleArn,
        });
    }
}

export interface AccountArgs {
    readonly cloudwatchRoleArn?: fabric.PropertyValue<string>;
}

