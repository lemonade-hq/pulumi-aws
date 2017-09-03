// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class ParameterGroup extends fabric.Resource {
    public readonly description?: fabric.Property<string>;
    public readonly family: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly parameter?: fabric.Property<{ name: string, value: string }[]>;

    constructor(urnName: string, args: ParameterGroupArgs) {
        if (args.family === undefined) {
            throw new Error("Missing required property 'family'");
        }
        super("aws:redshift/parameterGroup:ParameterGroup", urnName, {
            "description": args.description,
            "family": args.family,
            "name": args.name,
            "parameter": args.parameter,
        });
    }
}

export interface ParameterGroupArgs {
    readonly description?: fabric.PropertyValue<string>;
    readonly family: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly parameter?: fabric.PropertyValue<{ name: fabric.PropertyValue<string>, value: fabric.PropertyValue<string> }>[];
}

