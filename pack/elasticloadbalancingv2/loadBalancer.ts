// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class LoadBalancer extends fabric.Resource {
    public readonly accessLogs?: fabric.Property<{ bucket: string, enabled?: boolean, prefix?: string }[]>;
    public /*out*/ readonly arn: fabric.Property<string>;
    public /*out*/ readonly arnSuffix: fabric.Property<string>;
    public /*out*/ readonly dnsName: fabric.Property<string>;
    public readonly enableDeletionProtection?: fabric.Property<boolean>;
    public readonly idleTimeout?: fabric.Property<number>;
    public readonly internal: fabric.Property<boolean>;
    public readonly ipAddressType: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix?: fabric.Property<string>;
    public readonly securityGroups: fabric.Property<string[]>;
    public readonly subnets: fabric.Property<string[]>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public /*out*/ readonly vpcId: fabric.Property<string>;
    public /*out*/ readonly zoneId: fabric.Property<string>;

    constructor(urnName: string, args: LoadBalancerArgs) {
        if (args.subnets === undefined) {
            throw new Error("Missing required property 'subnets'");
        }
        super("aws:elasticloadbalancingv2/loadBalancer:LoadBalancer", urnName, {
            "accessLogs": args.accessLogs,
            "enableDeletionProtection": args.enableDeletionProtection,
            "idleTimeout": args.idleTimeout,
            "internal": args.internal,
            "ipAddressType": args.ipAddressType,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "securityGroups": args.securityGroups,
            "subnets": args.subnets,
            "tags": args.tags,
        });
    }
}

export interface LoadBalancerArgs {
    readonly accessLogs?: fabric.PropertyValue<{ bucket: fabric.PropertyValue<string>, enabled?: fabric.PropertyValue<boolean>, prefix?: fabric.PropertyValue<string> }>[];
    readonly enableDeletionProtection?: fabric.PropertyValue<boolean>;
    readonly idleTimeout?: fabric.PropertyValue<number>;
    readonly internal?: fabric.PropertyValue<boolean>;
    readonly ipAddressType?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly securityGroups?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly subnets: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

