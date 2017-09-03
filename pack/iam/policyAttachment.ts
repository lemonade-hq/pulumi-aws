// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

import {ARN} from "../index";
import {Group} from "./group";
import {Role} from "./role";
import {User} from "./user";

export class PolicyAttachment extends fabric.Resource {
    public readonly groups?: fabric.Property<Group[]>;
    public readonly name: fabric.Property<string>;
    public readonly policyArn: fabric.Property<ARN>;
    public readonly roles?: fabric.Property<Role[]>;
    public readonly users?: fabric.Property<User[]>;

    constructor(urnName: string, args: PolicyAttachmentArgs) {
        if (args.policyArn === undefined) {
            throw new Error("Missing required property 'policyArn'");
        }
        super("aws:iam/policyAttachment:PolicyAttachment", urnName, {
            "groups": args.groups,
            "name": args.name,
            "policyArn": args.policyArn,
            "roles": args.roles,
            "users": args.users,
        });
    }
}

export interface PolicyAttachmentArgs {
    readonly groups?: fabric.PropertyValue<fabric.PropertyValue<Group>>[];
    readonly name?: fabric.PropertyValue<string>;
    readonly policyArn: fabric.PropertyValue<ARN>;
    readonly roles?: fabric.PropertyValue<fabric.PropertyValue<Role>>[];
    readonly users?: fabric.PropertyValue<fabric.PropertyValue<User>>[];
}

