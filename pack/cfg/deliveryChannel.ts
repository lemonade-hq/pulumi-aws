// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class DeliveryChannel extends fabric.Resource {
    public readonly name: fabric.Property<string>;
    public readonly s3BucketName: fabric.Property<string>;
    public readonly s3KeyPrefix?: fabric.Property<string>;
    public readonly snapshotDeliveryProperties?: fabric.Property<{ deliveryFrequency?: string }[]>;
    public readonly snsTopicArn?: fabric.Property<string>;

    constructor(urnName: string, args: DeliveryChannelArgs) {
        if (args.s3BucketName === undefined) {
            throw new Error("Missing required property 's3BucketName'");
        }
        super("aws:cfg/deliveryChannel:DeliveryChannel", urnName, {
            "name": args.name,
            "s3BucketName": args.s3BucketName,
            "s3KeyPrefix": args.s3KeyPrefix,
            "snapshotDeliveryProperties": args.snapshotDeliveryProperties,
            "snsTopicArn": args.snsTopicArn,
        });
    }
}

export interface DeliveryChannelArgs {
    readonly name?: fabric.PropertyValue<string>;
    readonly s3BucketName: fabric.PropertyValue<string>;
    readonly s3KeyPrefix?: fabric.PropertyValue<string>;
    readonly snapshotDeliveryProperties?: fabric.PropertyValue<{ deliveryFrequency?: fabric.PropertyValue<string> }>[];
    readonly snsTopicArn?: fabric.PropertyValue<string>;
}

