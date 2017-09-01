// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class NatGateway
        extends fabric.Resource implements NatGatewayArgs {
    public readonly allocationId: fabric.Property<string>;
    public readonly networkInterfaceId: fabric.Property<string>;
    public readonly privateIp: fabric.Property<string>;
    public readonly publicIp: fabric.Property<string>;
    public readonly subnetId: fabric.Property<string>;

    constructor(urnName: string, args: NatGatewayArgs) {
        if (args.allocationId === undefined) {
            throw new Error("Missing required property 'allocationId'");
        }
        if (args.subnetId === undefined) {
            throw new Error("Missing required property 'subnetId'");
        }
        super("aws:ec2/natGateway:NatGateway", urnName, {
            "allocationId": args.allocationId,
            "networkInterfaceId": args.networkInterfaceId,
            "privateIp": args.privateIp,
            "publicIp": args.publicIp,
            "subnetId": args.subnetId,
        });
    }
}

export interface NatGatewayArgs {
    readonly allocationId: fabric.PropertyValue<string>;
    readonly networkInterfaceId?: fabric.PropertyValue<string>;
    readonly privateIp?: fabric.PropertyValue<string>;
    readonly publicIp?: fabric.PropertyValue<string>;
    readonly subnetId: fabric.PropertyValue<string>;
}
