// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Queue extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly contentBasedDeduplication?: fabric.Property<boolean>;
    public readonly delaySeconds?: fabric.Property<number>;
    public readonly fifoQueue?: fabric.Property<boolean>;
    public readonly kmsDataKeyReusePeriodSeconds: fabric.Property<number>;
    public readonly kmsMasterKeyId?: fabric.Property<string>;
    public readonly maxMessageSize?: fabric.Property<number>;
    public readonly messageRetentionSeconds?: fabric.Property<number>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix?: fabric.Property<string>;
    public readonly policy: fabric.Property<string>;
    public readonly receiveWaitTimeSeconds?: fabric.Property<number>;
    public readonly redrivePolicy?: fabric.Property<string>;
    public readonly visibilityTimeoutSeconds?: fabric.Property<number>;

    constructor(urnName: string, args: QueueArgs) {
        super("aws:sqs/queue:Queue", urnName, {
            "contentBasedDeduplication": args.contentBasedDeduplication,
            "delaySeconds": args.delaySeconds,
            "fifoQueue": args.fifoQueue,
            "kmsDataKeyReusePeriodSeconds": args.kmsDataKeyReusePeriodSeconds,
            "kmsMasterKeyId": args.kmsMasterKeyId,
            "maxMessageSize": args.maxMessageSize,
            "messageRetentionSeconds": args.messageRetentionSeconds,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "policy": args.policy,
            "receiveWaitTimeSeconds": args.receiveWaitTimeSeconds,
            "redrivePolicy": args.redrivePolicy,
            "visibilityTimeoutSeconds": args.visibilityTimeoutSeconds,
        });
    }
}

export interface QueueArgs {
    readonly contentBasedDeduplication?: fabric.PropertyValue<boolean>;
    readonly delaySeconds?: fabric.PropertyValue<number>;
    readonly fifoQueue?: fabric.PropertyValue<boolean>;
    readonly kmsDataKeyReusePeriodSeconds?: fabric.PropertyValue<number>;
    readonly kmsMasterKeyId?: fabric.PropertyValue<string>;
    readonly maxMessageSize?: fabric.PropertyValue<number>;
    readonly messageRetentionSeconds?: fabric.PropertyValue<number>;
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly policy?: fabric.PropertyValue<string>;
    readonly receiveWaitTimeSeconds?: fabric.PropertyValue<number>;
    readonly redrivePolicy?: fabric.PropertyValue<string>;
    readonly visibilityTimeoutSeconds?: fabric.PropertyValue<number>;
}

