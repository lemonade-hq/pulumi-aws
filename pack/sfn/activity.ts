// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Activity extends fabric.Resource {
    public /*out*/ readonly creationDate: fabric.Property<string>;
    public readonly name: fabric.Property<string>;

    constructor(urnName: string, args: ActivityArgs) {
        super("aws:sfn/activity:Activity", urnName, {
            "name": args.name,
        });
    }
}

export interface ActivityArgs {
    readonly name?: fabric.PropertyValue<string>;
}

