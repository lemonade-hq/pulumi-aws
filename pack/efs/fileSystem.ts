// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class FileSystem extends fabric.Resource {
    public readonly creationToken: fabric.Property<string>;
    public readonly performanceMode: fabric.Property<string>;
    public readonly referenceName: fabric.Property<string>;
    public readonly tags?: fabric.Property<{[key: string]: any}>;

    constructor(urnName: string, args: FileSystemArgs) {
        super("aws:efs/fileSystem:FileSystem", urnName, {
            "creationToken": args.creationToken,
            "performanceMode": args.performanceMode,
            "referenceName": args.referenceName,
            "tags": args.tags,
        });
    }
}

export interface FileSystemArgs {
    readonly creationToken?: fabric.PropertyValue<string>;
    readonly performanceMode?: fabric.PropertyValue<string>;
    readonly referenceName?: fabric.PropertyValue<string>;
    readonly tags?: fabric.PropertyValue<{[key: string]: any}>;
}

