// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ListenerRule
        extends fabric.Resource implements ListenerRuleArgs {
    public readonly action: fabric.Property<{ targetGroupArn: string, type: string }[]>;
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly condition: fabric.Property<{ field?: string, values?: string[] }[]>;
    public readonly listenerArn: fabric.Property<string>;
    public readonly priority: fabric.Property<number>;

    constructor(urnName: string, args: ListenerRuleArgs) {
        if (args.action === undefined) {
            throw new Error("Missing required property 'action'");
        }
        if (args.condition === undefined) {
            throw new Error("Missing required property 'condition'");
        }
        if (args.listenerArn === undefined) {
            throw new Error("Missing required property 'listenerArn'");
        }
        if (args.priority === undefined) {
            throw new Error("Missing required property 'priority'");
        }
        super("aws:elasticloadbalancingv2/listenerRule:ListenerRule", urnName, {
            "action": args.action,
            "condition": args.condition,
            "listenerArn": args.listenerArn,
            "priority": args.priority,
        });
    }
}

export interface ListenerRuleArgs {
    readonly action: fabric.PropertyValue<{ targetGroupArn: string, type: string }[]>;
    readonly condition: fabric.PropertyValue<{ field?: string, values?: string[] }[]>;
    readonly listenerArn: fabric.PropertyValue<string>;
    readonly priority: fabric.PropertyValue<number>;
}
