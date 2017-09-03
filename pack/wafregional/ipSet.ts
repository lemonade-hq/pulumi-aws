// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class IpSet extends fabric.Resource {
    public readonly ipSetDescriptor?: fabric.Property<{ type: string, value: string }[]>;
    public readonly name: fabric.Property<string>;

    constructor(urnName: string, args: IpSetArgs) {
        super("aws:wafregional/ipSet:IpSet", urnName, {
            "ipSetDescriptor": args.ipSetDescriptor,
            "name": args.name,
        });
    }
}

export interface IpSetArgs {
    readonly ipSetDescriptor?: fabric.PropertyValue<{ type: fabric.PropertyValue<string>, value: fabric.PropertyValue<string> }>[];
    readonly name?: fabric.PropertyValue<string>;
}

