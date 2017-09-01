// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class AmiFromInstance
        extends fabric.Resource implements AmiFromInstanceArgs {
    public /*out*/ readonly architecture: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly ebsBlockDevice: fabric.Property<{ deleteOnTermination: boolean, deviceName: string, encrypted: boolean, iops: number, snapshotId: string, volumeSize: number, volumeType: string }[]>;
    public readonly ephemeralBlockDevice: fabric.Property<{ deviceName: string, virtualName: string }[]>;
    public /*out*/ readonly amiId: fabric.Property<string>;
    public /*out*/ readonly imageLocation: fabric.Property<string>;
    public /*out*/ readonly kernelId: fabric.Property<string>;
    public /*out*/ readonly manageEbsSnapshots: fabric.Property<boolean>;
    public readonly name: fabric.Property<string>;
    public /*out*/ readonly ramdiskId: fabric.Property<string>;
    public /*out*/ readonly rootDeviceName: fabric.Property<string>;
    public readonly snapshotWithoutReboot?: fabric.Property<boolean>;
    public readonly sourceInstanceId: fabric.Property<string>;
    public /*out*/ readonly sriovNetSupport: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;
    public /*out*/ readonly virtualizationType: fabric.Property<string>;

    constructor(urnName: string, args: AmiFromInstanceArgs) {
        if (args.sourceInstanceId === undefined) {
            throw new Error("Missing required property 'sourceInstanceId'");
        }
        super("aws:ec2/amiFromInstance:AmiFromInstance", urnName, {
            "description": args.description,
            "ebsBlockDevice": args.ebsBlockDevice,
            "ephemeralBlockDevice": args.ephemeralBlockDevice,
            "name": args.name,
            "snapshotWithoutReboot": args.snapshotWithoutReboot,
            "sourceInstanceId": args.sourceInstanceId,
            "tags": args.tags,
        });
    }
}

export interface AmiFromInstanceArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly ebsBlockDevice?: fabric.PropertyValue<{ deleteOnTermination?: boolean, deviceName?: string, encrypted?: boolean, iops?: number, snapshotId?: string, volumeSize?: number, volumeType?: string }[]>;
    readonly ephemeralBlockDevice?: fabric.PropertyValue<{ deviceName?: string, virtualName?: string }[]>;
    readonly name?: fabric.PropertyValue<string>;
    readonly snapshotWithoutReboot?: fabric.PropertyValue<boolean>;
    readonly sourceInstanceId: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}
