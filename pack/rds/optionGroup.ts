// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class OptionGroup
        extends fabric.Resource implements OptionGroupArgs {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly engineName: fabric.Property<string>;
    public readonly majorEngineVersion: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly namePrefix: fabric.Property<string>;
    public readonly option?: fabric.Property<{ dbSecurityGroupMemberships?: string[], optionName: string, optionSettings?: { name: string, value: string }[], port?: number, vpcSecurityGroupMemberships?: string[] }[]>;
    public readonly optionGroupDescription?: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: OptionGroupArgs) {
        if (args.engineName === undefined) {
            throw new Error("Missing required property 'engineName'");
        }
        if (args.majorEngineVersion === undefined) {
            throw new Error("Missing required property 'majorEngineVersion'");
        }
        super("aws:rds/optionGroup:OptionGroup", urnName, {
            "engineName": args.engineName,
            "majorEngineVersion": args.majorEngineVersion,
            "name": args.name,
            "namePrefix": args.namePrefix,
            "option": args.option,
            "optionGroupDescription": args.optionGroupDescription,
            "tags": args.tags,
        });
    }
}

export interface OptionGroupArgs {
    readonly engineName: fabric.PropertyValue<string>;
    readonly majorEngineVersion: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly namePrefix?: fabric.PropertyValue<string>;
    readonly option?: fabric.PropertyValue<{ dbSecurityGroupMemberships?: string[], optionName: string, optionSettings?: { name: string, value: string }[], port?: number, vpcSecurityGroupMemberships?: string[] }[]>;
    readonly optionGroupDescription?: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}
