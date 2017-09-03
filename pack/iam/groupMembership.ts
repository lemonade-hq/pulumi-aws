// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class GroupMembership extends fabric.Resource {
    public readonly group: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly users: fabric.Property<string[]>;

    constructor(urnName: string, args: GroupMembershipArgs) {
        if (args.group === undefined) {
            throw new Error("Missing required property 'group'");
        }
        if (args.users === undefined) {
            throw new Error("Missing required property 'users'");
        }
        super("aws:iam/groupMembership:GroupMembership", urnName, {
            "group": args.group,
            "name": args.name,
            "users": args.users,
        });
    }
}

export interface GroupMembershipArgs {
    readonly group: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly users: fabric.PropertyValue<fabric.PropertyValue<string>>[];
}

