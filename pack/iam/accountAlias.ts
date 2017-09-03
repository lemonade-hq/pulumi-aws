// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class AccountAlias extends fabric.Resource {
    public readonly accountAlias: fabric.Property<string>;

    constructor(urnName: string, args: AccountAliasArgs) {
        if (args.accountAlias === undefined) {
            throw new Error("Missing required property 'accountAlias'");
        }
        super("aws:iam/accountAlias:AccountAlias", urnName, {
            "accountAlias": args.accountAlias,
        });
    }
}

export interface AccountAliasArgs {
    readonly accountAlias: fabric.PropertyValue<string>;
}

