// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class EventRule extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly eventPattern?: fabric.Property<string>;
    public readonly isEnabled?: fabric.Property<boolean>;
    public readonly name: fabric.Property<string>;
    public readonly roleArn?: fabric.Property<string>;
    public readonly scheduleExpression?: fabric.Property<string>;

    constructor(urnName: string, args: EventRuleArgs) {
        super("aws:cloudwatch/eventRule:EventRule", urnName, {
            "description": args.description,
            "eventPattern": args.eventPattern,
            "isEnabled": args.isEnabled,
            "name": args.name,
            "roleArn": args.roleArn,
            "scheduleExpression": args.scheduleExpression,
        });
    }
}

export interface EventRuleArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly eventPattern?: fabric.PropertyValue<string>;
    readonly isEnabled?: fabric.PropertyValue<boolean>;
    readonly name?: fabric.PropertyValue<string>;
    readonly roleArn?: fabric.PropertyValue<string>;
    readonly scheduleExpression?: fabric.PropertyValue<string>;
}

