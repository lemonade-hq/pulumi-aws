// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Rule extends fabric.Resource {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly inputParameters?: fabric.Property<string>;
    public readonly maximumExecutionFrequency?: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public /*out*/ readonly ruleId: fabric.Property<string>;
    public readonly scope?: fabric.Property<{ complianceResourceId?: string, complianceResourceTypes?: string[], tagKey?: string, tagValue?: string }[]>;
    public readonly source: fabric.Property<{ owner: string, sourceDetail?: { eventSource?: string, maximumExecutionFrequency?: string, messageType?: string }[], sourceIdentifier: string }[]>;

    constructor(urnName: string, args: RuleArgs) {
        if (args.source === undefined) {
            throw new Error("Missing required property 'source'");
        }
        super("aws:cfg/rule:Rule", urnName, {
            "description": args.description,
            "inputParameters": args.inputParameters,
            "maximumExecutionFrequency": args.maximumExecutionFrequency,
            "name": args.name,
            "scope": args.scope,
            "source": args.source,
        });
    }
}

export interface RuleArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly inputParameters?: fabric.PropertyValue<string>;
    readonly maximumExecutionFrequency?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly scope?: fabric.PropertyValue<{ complianceResourceId?: fabric.PropertyValue<string>, complianceResourceTypes?: fabric.PropertyValue<fabric.PropertyValue<string>>[], tagKey?: fabric.PropertyValue<string>, tagValue?: fabric.PropertyValue<string> }>[];
    readonly source: fabric.PropertyValue<{ owner: fabric.PropertyValue<string>, sourceDetail?: fabric.PropertyValue<{ eventSource?: fabric.PropertyValue<string>, maximumExecutionFrequency?: fabric.PropertyValue<string>, messageType?: fabric.PropertyValue<string> }>[], sourceIdentifier: fabric.PropertyValue<string> }>[];
}

