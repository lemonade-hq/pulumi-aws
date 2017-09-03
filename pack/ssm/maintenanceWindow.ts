// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class MaintenanceWindow extends fabric.Resource {
    public readonly allowUnassociatedTargets?: fabric.Property<boolean>;
    public readonly cutoff: fabric.Property<number>;
    public readonly duration: fabric.Property<number>;
    public readonly enabled?: fabric.Property<boolean>;
    public readonly name: fabric.Property<string>;
    public readonly schedule: fabric.Property<string>;

    constructor(urnName: string, args: MaintenanceWindowArgs) {
        if (args.cutoff === undefined) {
            throw new Error("Missing required property 'cutoff'");
        }
        if (args.duration === undefined) {
            throw new Error("Missing required property 'duration'");
        }
        if (args.schedule === undefined) {
            throw new Error("Missing required property 'schedule'");
        }
        super("aws:ssm/maintenanceWindow:MaintenanceWindow", urnName, {
            "allowUnassociatedTargets": args.allowUnassociatedTargets,
            "cutoff": args.cutoff,
            "duration": args.duration,
            "enabled": args.enabled,
            "name": args.name,
            "schedule": args.schedule,
        });
    }
}

export interface MaintenanceWindowArgs {
    readonly allowUnassociatedTargets?: fabric.PropertyValue<boolean>;
    readonly cutoff: fabric.PropertyValue<number>;
    readonly duration: fabric.PropertyValue<number>;
    readonly enabled?: fabric.PropertyValue<boolean>;
    readonly name?: fabric.PropertyValue<string>;
    readonly schedule: fabric.PropertyValue<string>;
}

