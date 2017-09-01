// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ConfigurationTemplate
        extends fabric.Resource implements ConfigurationTemplateArgs {
    public readonly application: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly environmentId?: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly setting: fabric.Property<{ name: string, namespace: string, resource?: string, value: string }[]>;
    public readonly solutionStackName?: fabric.Property<string>;

    constructor(urnName: string, args: ConfigurationTemplateArgs) {
        if (args.application === undefined) {
            throw new Error("Missing required property 'application'");
        }
        super("aws:elasticbeanstalk/configurationTemplate:ConfigurationTemplate", urnName, {
            "application": args.application,
            "description": args.description,
            "environmentId": args.environmentId,
            "name": args.name,
            "setting": args.setting,
            "solutionStackName": args.solutionStackName,
        });
    }
}

export interface ConfigurationTemplateArgs {
    readonly application: fabric.PropertyValue<string>;
    readonly description?: fabric.PropertyValue<string>;
    readonly environmentId?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly setting?: fabric.PropertyValue<{ name: string, namespace: string, resource?: string, value: string }[]>;
    readonly solutionStackName?: fabric.PropertyValue<string>;
}
