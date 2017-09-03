// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DefaultSubnet extends fabric.Resource {
    public /*out*/ readonly assignIpv6AddressOnCreation: fabric.Property<boolean>;
    public readonly availabilityZone: fabric.Property<string>;
    public /*out*/ readonly cidrBlock: fabric.Property<string>;
    public /*out*/ readonly ipv6CidrBlock: fabric.Property<string>;
    public /*out*/ readonly ipv6CidrBlockAssociationId: fabric.Property<string>;
    public /*out*/ readonly mapPublicIpOnLaunch: fabric.Property<boolean>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public /*out*/ readonly vpcId: fabric.Property<string>;

    constructor(urnName: string, args: DefaultSubnetArgs) {
        if (args.availabilityZone === undefined) {
            throw new Error("Missing required property 'availabilityZone'");
        }
        super("aws:ec2/defaultSubnet:DefaultSubnet", urnName, {
            "availabilityZone": args.availabilityZone,
            "tags": args.tags,
        });
    }
}

export interface DefaultSubnetArgs {
    readonly availabilityZone: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

