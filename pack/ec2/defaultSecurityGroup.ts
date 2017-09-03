// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DefaultSecurityGroup extends fabric.Resource {
    public readonly egress?: fabric.Property<{ cidrBlocks?: string[], fromPort: number, ipv6CidrBlocks?: string[], prefixListIds?: string[], protocol: string, securityGroups?: string[], self?: boolean, toPort: number }[]>;
    public readonly ingress?: fabric.Property<{ cidrBlocks?: string[], fromPort: number, ipv6CidrBlocks?: string[], protocol: string, securityGroups?: string[], self?: boolean, toPort: number }[]>;
    public /*out*/ readonly name: fabric.Property<string>;
    public /*out*/ readonly ownerId: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public readonly vpcId: fabric.Property<string>;

    constructor(urnName: string, args: DefaultSecurityGroupArgs) {
        super("aws:ec2/defaultSecurityGroup:DefaultSecurityGroup", urnName, {
            "egress": args.egress,
            "ingress": args.ingress,
            "tags": args.tags,
            "vpcId": args.vpcId,
        });
    }
}

export interface DefaultSecurityGroupArgs {
    readonly egress?: fabric.PropertyValue<{ cidrBlocks?: fabric.PropertyValue<fabric.PropertyValue<string>>[], fromPort: fabric.PropertyValue<number>, ipv6CidrBlocks?: fabric.PropertyValue<fabric.PropertyValue<string>>[], prefixListIds?: fabric.PropertyValue<fabric.PropertyValue<string>>[], protocol: fabric.PropertyValue<string>, securityGroups?: fabric.PropertyValue<fabric.PropertyValue<string>>[], self?: fabric.PropertyValue<boolean>, toPort: fabric.PropertyValue<number> }>[];
    readonly ingress?: fabric.PropertyValue<{ cidrBlocks?: fabric.PropertyValue<fabric.PropertyValue<string>>[], fromPort: fabric.PropertyValue<number>, ipv6CidrBlocks?: fabric.PropertyValue<fabric.PropertyValue<string>>[], protocol: fabric.PropertyValue<string>, securityGroups?: fabric.PropertyValue<fabric.PropertyValue<string>>[], self?: fabric.PropertyValue<boolean>, toPort: fabric.PropertyValue<number> }>[];
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
    readonly vpcId?: fabric.PropertyValue<string>;
}

