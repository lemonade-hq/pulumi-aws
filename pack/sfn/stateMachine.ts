// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class StateMachine extends fabric.Resource {
    public /*out*/ readonly creationDate: fabric.Property<string>;
    public readonly definition: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly roleArn: fabric.Property<string>;
    public /*out*/ readonly status: fabric.Property<string>;

    constructor(urnName: string, args: StateMachineArgs) {
        if (args.definition === undefined) {
            throw new Error("Missing required property 'definition'");
        }
        if (args.roleArn === undefined) {
            throw new Error("Missing required property 'roleArn'");
        }
        super("aws:sfn/stateMachine:StateMachine", urnName, {
            "definition": args.definition,
            "name": args.name,
            "roleArn": args.roleArn,
        });
    }
}

export interface StateMachineArgs {
    readonly definition: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly roleArn: fabric.PropertyValue<string>;
}

