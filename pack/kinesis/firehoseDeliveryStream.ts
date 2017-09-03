// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class FirehoseDeliveryStream extends fabric.Resource {
    public readonly arn: fabric.Property<string>;
    public readonly destination: fabric.Property<string>;
    public readonly destinationId: fabric.Property<string>;
    public readonly elasticsearchConfiguration?: fabric.Property<{ bufferingInterval?: number, bufferingSize?: number, cloudwatchLoggingOptions: { enabled?: boolean, logGroupName?: string, logStreamName?: string }[], domainArn: string, indexName: string, indexRotationPeriod?: string, retryDuration?: number, roleArn: string, s3BackupMode?: string, typeName?: string }[]>;
    public readonly name: fabric.Property<string>;
    public readonly redshiftConfiguration?: fabric.Property<{ cloudwatchLoggingOptions: { enabled?: boolean, logGroupName?: string, logStreamName?: string }[], clusterJdbcurl: string, copyOptions?: string, dataTableColumns?: string, dataTableName: string, password: string, retryDuration?: number, roleArn: string, username: string }[]>;
    public readonly s3Configuration: fabric.Property<{ bucketArn: string, bufferInterval?: number, bufferSize?: number, cloudwatchLoggingOptions: { enabled?: boolean, logGroupName?: string, logStreamName?: string }[], compressionFormat?: string, kmsKeyArn?: string, prefix?: string, roleArn: string }[]>;
    public readonly versionId: fabric.Property<string>;

    constructor(urnName: string, args: FirehoseDeliveryStreamArgs) {
        if (args.destination === undefined) {
            throw new Error("Missing required property 'destination'");
        }
        if (args.s3Configuration === undefined) {
            throw new Error("Missing required property 's3Configuration'");
        }
        super("aws:kinesis/firehoseDeliveryStream:FirehoseDeliveryStream", urnName, {
            "arn": args.arn,
            "destination": args.destination,
            "destinationId": args.destinationId,
            "elasticsearchConfiguration": args.elasticsearchConfiguration,
            "name": args.name,
            "redshiftConfiguration": args.redshiftConfiguration,
            "s3Configuration": args.s3Configuration,
            "versionId": args.versionId,
        });
    }
}

export interface FirehoseDeliveryStreamArgs {
    readonly arn?: fabric.PropertyValue<string>;
    readonly destination: fabric.PropertyValue<string>;
    readonly destinationId?: fabric.PropertyValue<string>;
    readonly elasticsearchConfiguration?: fabric.PropertyValue<{ bufferingInterval?: fabric.PropertyValue<number>, bufferingSize?: fabric.PropertyValue<number>, cloudwatchLoggingOptions?: fabric.PropertyValue<{ enabled?: fabric.PropertyValue<boolean>, logGroupName?: fabric.PropertyValue<string>, logStreamName?: fabric.PropertyValue<string> }>[], domainArn: fabric.PropertyValue<string>, indexName: fabric.PropertyValue<string>, indexRotationPeriod?: fabric.PropertyValue<string>, retryDuration?: fabric.PropertyValue<number>, roleArn: fabric.PropertyValue<string>, s3BackupMode?: fabric.PropertyValue<string>, typeName?: fabric.PropertyValue<string> }>[];
    readonly name?: fabric.PropertyValue<string>;
    readonly redshiftConfiguration?: fabric.PropertyValue<{ cloudwatchLoggingOptions?: fabric.PropertyValue<{ enabled?: fabric.PropertyValue<boolean>, logGroupName?: fabric.PropertyValue<string>, logStreamName?: fabric.PropertyValue<string> }>[], clusterJdbcurl: fabric.PropertyValue<string>, copyOptions?: fabric.PropertyValue<string>, dataTableColumns?: fabric.PropertyValue<string>, dataTableName: fabric.PropertyValue<string>, password: fabric.PropertyValue<string>, retryDuration?: fabric.PropertyValue<number>, roleArn: fabric.PropertyValue<string>, username: fabric.PropertyValue<string> }>[];
    readonly s3Configuration: fabric.PropertyValue<{ bucketArn: fabric.PropertyValue<string>, bufferInterval?: fabric.PropertyValue<number>, bufferSize?: fabric.PropertyValue<number>, cloudwatchLoggingOptions?: fabric.PropertyValue<{ enabled?: fabric.PropertyValue<boolean>, logGroupName?: fabric.PropertyValue<string>, logStreamName?: fabric.PropertyValue<string> }>[], compressionFormat?: fabric.PropertyValue<string>, kmsKeyArn?: fabric.PropertyValue<string>, prefix?: fabric.PropertyValue<string>, roleArn: fabric.PropertyValue<string> }>[];
    readonly versionId?: fabric.PropertyValue<string>;
}

