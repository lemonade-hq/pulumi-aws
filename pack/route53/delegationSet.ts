// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DelegationSet extends fabric.Resource {
    public /*out*/ readonly nameServers: fabric.Property<string[]>;
    public readonly referenceName?: fabric.Property<string>;

    constructor(urnName: string, args: DelegationSetArgs) {
        super("aws:route53/delegationSet:DelegationSet", urnName, {
            "referenceName": args.referenceName,
        });
    }
}

export interface DelegationSetArgs {
    readonly referenceName?: fabric.PropertyValue<string>;
}

