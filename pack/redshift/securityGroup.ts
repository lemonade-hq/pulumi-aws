// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class SecurityGroup extends fabric.Resource {
    public readonly description?: fabric.Property<string>;
    public readonly ingress: fabric.Property<{ cidr?: string, securityGroupName: string, securityGroupOwnerId: string }[]>;
    public readonly name: fabric.Property<string>;

    constructor(urnName: string, args: SecurityGroupArgs) {
        if (args.ingress === undefined) {
            throw new Error("Missing required property 'ingress'");
        }
        super("aws:redshift/securityGroup:SecurityGroup", urnName, {
            "description": args.description,
            "ingress": args.ingress,
            "name": args.name,
        });
    }
}

export interface SecurityGroupArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly ingress: fabric.PropertyValue<{ cidr?: fabric.PropertyValue<string>, securityGroupName?: fabric.PropertyValue<string>, securityGroupOwnerId?: fabric.PropertyValue<string> }>[];
    readonly name?: fabric.PropertyValue<string>;
}

