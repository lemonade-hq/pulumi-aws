// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class SecurityGroup extends fabric.Resource {
    public readonly description?: fabric.Property<string>;
    public readonly egress: fabric.Property<{ cidrBlocks?: string[], fromPort: number, ipv6CidrBlocks?: string[], prefixListIds?: string[], protocol: string, securityGroups?: string[], self?: boolean, toPort: number }[]>;
    public readonly ingress: fabric.Property<{ cidrBlocks?: string[], fromPort: number, ipv6CidrBlocks?: string[], protocol: string, securityGroups?: string[], self?: boolean, toPort: number }[]>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix?: fabric.Property<string>;
    public /*out*/ readonly ownerId: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public readonly vpcId: fabric.Property<string>;

    constructor(urnName: string, args: SecurityGroupArgs) {
        super("aws:ec2/securityGroup:SecurityGroup", urnName, {
            "description": args.description,
            "egress": args.egress,
            "ingress": args.ingress,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "tags": args.tags,
            "vpcId": args.vpcId,
        });
    }
}

export interface SecurityGroupArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly egress?: fabric.PropertyValue<{ cidrBlocks?: fabric.PropertyValue<fabric.PropertyValue<string>>[], fromPort: fabric.PropertyValue<number>, ipv6CidrBlocks?: fabric.PropertyValue<fabric.PropertyValue<string>>[], prefixListIds?: fabric.PropertyValue<fabric.PropertyValue<string>>[], protocol: fabric.PropertyValue<string>, securityGroups?: fabric.PropertyValue<fabric.PropertyValue<string>>[], self?: fabric.PropertyValue<boolean>, toPort: fabric.PropertyValue<number> }>[];
    readonly ingress?: fabric.PropertyValue<{ cidrBlocks?: fabric.PropertyValue<fabric.PropertyValue<string>>[], fromPort: fabric.PropertyValue<number>, ipv6CidrBlocks?: fabric.PropertyValue<fabric.PropertyValue<string>>[], protocol: fabric.PropertyValue<string>, securityGroups?: fabric.PropertyValue<fabric.PropertyValue<string>>[], self?: fabric.PropertyValue<boolean>, toPort: fabric.PropertyValue<number> }>[];
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
    readonly vpcId?: fabric.PropertyValue<string>;
}

