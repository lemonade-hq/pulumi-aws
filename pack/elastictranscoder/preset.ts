// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Preset
        extends fabric.Resource implements PresetArgs {
    public /*out*/ readonly arn: fabric.Property<string>;
    public readonly audio?: fabric.Property<{ audioPackingMode?: string, bitRate?: string, channels?: string, codec?: string, sampleRate?: string }[]>;
    public readonly audioCodecOptions?: fabric.Property<{ bitDepth?: string, bitOrder?: string, profile?: string, signed?: string }[]>;
    public readonly container: fabric.Property<string>;
    public readonly description?: fabric.Property<string>;
    public readonly name: fabric.Property<string>;
    public readonly thumbnails?: fabric.Property<{ aspectRatio?: string, format?: string, interval?: string, maxHeight?: string, maxWidth?: string, paddingPolicy?: string, resolution?: string, sizingPolicy?: string }[]>;
    public readonly type: fabric.Property<string>;
    public readonly video?: fabric.Property<{ aspectRatio?: string, bitRate?: string, codec?: string, displayAspectRatio?: string, fixedGop?: string, frameRate?: string, keyframesMaxDist?: string, maxFrameRate?: string, maxHeight?: string, maxWidth?: string, paddingPolicy?: string, resolution?: string, sizingPolicy?: string }[]>;
    public readonly videoCodecOptions?: fabric.Property<{[key: string]: any}>;
    public readonly videoWatermarks?: fabric.Property<{ horizontalAlign?: string, horizontalOffset?: string, id?: string, maxHeight?: string, maxWidth?: string, opacity?: string, sizingPolicy?: string, target?: string, verticalAlign?: string, verticalOffset?: string }[]>;

    constructor(urnName: string, args: PresetArgs) {
        if (args.container === undefined) {
            throw new Error("Missing required property 'container'");
        }
        super("aws:elastictranscoder/preset:Preset", urnName, {
            "audio": args.audio,
            "audioCodecOptions": args.audioCodecOptions,
            "container": args.container,
            "description": args.description,
            "name": args.name,
            "thumbnails": args.thumbnails,
            "type": args.type,
            "video": args.video,
            "videoCodecOptions": args.videoCodecOptions,
            "videoWatermarks": args.videoWatermarks,
        });
    }
}

export interface PresetArgs {
    readonly audio?: fabric.PropertyValue<{ audioPackingMode?: string, bitRate?: string, channels?: string, codec?: string, sampleRate?: string }[]>;
    readonly audioCodecOptions?: fabric.PropertyValue<{ bitDepth?: string, bitOrder?: string, profile?: string, signed?: string }[]>;
    readonly container: fabric.PropertyValue<string>;
    readonly description?: fabric.PropertyValue<string>;
    readonly name?: fabric.PropertyValue<string>;
    readonly thumbnails?: fabric.PropertyValue<{ aspectRatio?: string, format?: string, interval?: string, maxHeight?: string, maxWidth?: string, paddingPolicy?: string, resolution?: string, sizingPolicy?: string }[]>;
    readonly type?: fabric.PropertyValue<string>;
    readonly video?: fabric.PropertyValue<{ aspectRatio?: string, bitRate?: string, codec?: string, displayAspectRatio?: string, fixedGop?: string, frameRate?: string, keyframesMaxDist?: string, maxFrameRate?: string, maxHeight?: string, maxWidth?: string, paddingPolicy?: string, resolution?: string, sizingPolicy?: string }[]>;
    readonly videoCodecOptions?: fabric.PropertyValue<{[key: string]: any}>;
    readonly videoWatermarks?: fabric.PropertyValue<{ horizontalAlign?: string, horizontalOffset?: string, id?: string, maxHeight?: string, maxWidth?: string, opacity?: string, sizingPolicy?: string, target?: string, verticalAlign?: string, verticalOffset?: string }[]>;
}
