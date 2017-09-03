// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class InstanceGroup extends fabric.Resource {
    public readonly clusterId: fabric.Property<string>;
    public readonly ebsConfig?: fabric.Property<{ iops?: number, size: number, type: string, volumesPerInstance?: number }[]>;
    public readonly ebsOptimized?: fabric.Property<boolean>;
    public readonly instanceCount?: fabric.Property<number>;
    public readonly instanceType: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public /*out*/ readonly runningInstanceCount: fabric.Property<number>;
    public /*out*/ readonly status: fabric.Property<string>;

    constructor(urnName: string, args: InstanceGroupArgs) {
        if (args.clusterId === undefined) {
            throw new Error("Missing required property 'clusterId'");
        }
        if (args.instanceType === undefined) {
            throw new Error("Missing required property 'instanceType'");
        }
        super("aws:emr/instanceGroup:InstanceGroup", urnName, {
            "clusterId": args.clusterId,
            "ebsConfig": args.ebsConfig,
            "ebsOptimized": args.ebsOptimized,
            "instanceCount": args.instanceCount,
            "instanceType": args.instanceType,
            "name": args.name,
        });
    }
}

export interface InstanceGroupArgs {
    readonly clusterId: fabric.PropertyValue<string>;
    readonly ebsConfig?: fabric.PropertyValue<{ iops?: fabric.PropertyValue<number>, size: fabric.PropertyValue<number>, type: fabric.PropertyValue<string>, volumesPerInstance?: fabric.PropertyValue<number> }>[];
    readonly ebsOptimized?: fabric.PropertyValue<boolean>;
    readonly instanceCount?: fabric.PropertyValue<number>;
    readonly instanceType: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
}

