// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {Function} from "./function";

export class Permission extends fabric.Resource {
    public readonly action: fabric.Property<string>;
    public readonly function: fabric.Property<Function>;
    public readonly principal: fabric.Property<string>;
    public readonly qualifier?: fabric.Property<string>;
    public readonly sourceAccount?: fabric.Property<string>;
    public readonly sourceArn?: fabric.Property<string>;
    public readonly statementId: fabric.Property<string>;

    constructor(urnName: string, args: PermissionArgs) {
        if (args.action === undefined) {
            throw new Error("Missing required property 'action'");
        }
        if (args.function === undefined) {
            throw new Error("Missing required property 'function'");
        }
        if (args.principal === undefined) {
            throw new Error("Missing required property 'principal'");
        }
        super("aws:lambda/permission:Permission", urnName, {
            "action": args.action,
            "function": args.function,
            "principal": args.principal,
            "qualifier": args.qualifier,
            "sourceAccount": args.sourceAccount,
            "sourceArn": args.sourceArn,
            "statementId": args.statementId,
        });
    }
}

export interface PermissionArgs {
    readonly action: fabric.PropertyValue<string>;
    readonly function: fabric.PropertyValue<Function>;
    readonly principal: fabric.PropertyValue<string>;
    readonly qualifier?: fabric.PropertyValue<string>;
    readonly sourceAccount?: fabric.PropertyValue<string>;
    readonly sourceArn?: fabric.PropertyValue<string>;
    readonly statementId?: fabric.PropertyValue<string>;
}

