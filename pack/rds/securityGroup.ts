// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class SecurityGroup
        extends fabric.Resource implements SecurityGroupArgs {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly ingress: fabric.Property<{ cidr?: string, securityGroupId: string, securityGroupName: string, securityGroupOwnerId: string }[]>;
    public readonly name: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: SecurityGroupArgs) {
        if (args.ingress === undefined) {
            throw new Error("Missing required property 'ingress'");
        }
        super("aws:rds/securityGroup:SecurityGroup", urnName, {
            "description": args.description,
            "ingress": args.ingress,
            "name": args.name,
            "tags": args.tags,
        });
    }
}

export interface SecurityGroupArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly ingress: fabric.PropertyValue<{ cidr?: string, securityGroupId?: string, securityGroupName?: string, securityGroupOwnerId?: string }[]>;
    readonly name?: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}
