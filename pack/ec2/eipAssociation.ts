// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class EipAssociation extends fabric.Resource {
    public readonly allocationId: fabric.Property<string>;
    public readonly allowReassociation?: fabric.Property<boolean>;
    public readonly instanceId: fabric.Property<string>;
    public readonly networkInterfaceId: fabric.Property<string>;
    public readonly privateIpAddress: fabric.Property<string>;
    public readonly publicIp: fabric.Property<string>;

    constructor(urnName: string, args: EipAssociationArgs) {
        super("aws:ec2/eipAssociation:EipAssociation", urnName, {
            "allocationId": args.allocationId,
            "allowReassociation": args.allowReassociation,
            "instanceId": args.instanceId,
            "networkInterfaceId": args.networkInterfaceId,
            "privateIpAddress": args.privateIpAddress,
            "publicIp": args.publicIp,
        });
    }
}

export interface EipAssociationArgs {
    readonly allocationId?: fabric.PropertyValue<string>;
    readonly allowReassociation?: fabric.PropertyValue<boolean>;
    readonly instanceId?: fabric.PropertyValue<string>;
    readonly networkInterfaceId?: fabric.PropertyValue<string>;
    readonly privateIpAddress?: fabric.PropertyValue<string>;
    readonly publicIp?: fabric.PropertyValue<string>;
}

