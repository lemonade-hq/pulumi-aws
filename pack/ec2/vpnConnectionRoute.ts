// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class VpnConnectionRoute
        extends fabric.Resource implements VpnConnectionRouteArgs {
    public readonly destinationCidrBlock: fabric.Property<string>;
    public readonly vpnConnectionId: fabric.Property<string>;

    constructor(urnName: string, args: VpnConnectionRouteArgs) {
        if (args.destinationCidrBlock === undefined) {
            throw new Error("Missing required property 'destinationCidrBlock'");
        }
        if (args.vpnConnectionId === undefined) {
            throw new Error("Missing required property 'vpnConnectionId'");
        }
        super("aws:ec2/vpnConnectionRoute:VpnConnectionRoute", urnName, {
            "destinationCidrBlock": args.destinationCidrBlock,
            "vpnConnectionId": args.vpnConnectionId,
        });
    }
}

export interface VpnConnectionRouteArgs {
    readonly destinationCidrBlock: fabric.PropertyValue<string>;
    readonly vpnConnectionId: fabric.PropertyValue<string>;
}
