// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Role} from "./role";

export class InstanceProfile
        extends fabric.Resource implements InstanceProfileArgs {
    public /*out*/ readonly arn: fabric.Property<string>;
    public /*out*/ readonly createDate: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix?: fabric.Property<string>;
    public readonly path?: fabric.Property<string>;
    public readonly role: fabric.Property<Role>;
    public readonly roles: fabric.Property<Role[]>;
    public /*out*/ readonly uniqueId: fabric.Property<string>;

    constructor(urnName: string, args: InstanceProfileArgs) {
        super("aws:iam/instanceProfile:InstanceProfile", urnName, {
            "name": args.name,
            "namePrefix": args.namePrefix,
            "path": args.path,
            "role": args.role,
            "roles": args.roles,
        });
    }
}

export interface InstanceProfileArgs {
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly path?: fabric.PropertyValue<string>;
    readonly role?: fabric.PropertyValue<Role>;
    readonly roles?: fabric.PropertyValue<Role[]>;
}
