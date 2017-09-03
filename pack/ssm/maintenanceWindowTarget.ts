// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class MaintenanceWindowTarget extends fabric.Resource {
    public readonly ownerInformation?: fabric.Property<string>;
    public readonly resourceType: fabric.Property<string>;
    public readonly targets: fabric.Property<{ key: string, values: string[] }[]>;
    public readonly windowId: fabric.Property<string>;

    constructor(urnName: string, args: MaintenanceWindowTargetArgs) {
        if (args.resourceType === undefined) {
            throw new Error("Missing required property 'resourceType'");
        }
        if (args.targets === undefined) {
            throw new Error("Missing required property 'targets'");
        }
        if (args.windowId === undefined) {
            throw new Error("Missing required property 'windowId'");
        }
        super("aws:ssm/maintenanceWindowTarget:MaintenanceWindowTarget", urnName, {
            "ownerInformation": args.ownerInformation,
            "resourceType": args.resourceType,
            "targets": args.targets,
            "windowId": args.windowId,
        });
    }
}

export interface MaintenanceWindowTargetArgs {
    readonly ownerInformation?: fabric.PropertyValue<string>;
    readonly resourceType: fabric.PropertyValue<string>;
    readonly targets: fabric.PropertyValue<{ key: fabric.PropertyValue<string>, values: fabric.PropertyValue<fabric.PropertyValue<string>>[] }>[];
    readonly windowId: fabric.PropertyValue<string>;
}

