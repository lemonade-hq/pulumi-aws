// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class Service
        extends fabric.Resource implements ServiceArgs {
    public readonly cluster: fabric.Property<string>;
    public readonly deploymentMaximumPercent?: fabric.Property<number>;
    public readonly deploymentMinimumHealthyPercent?: fabric.Property<number>;
    public readonly desiredCount?: fabric.Property<number>;
    public readonly iamRole?: fabric.Property<string>;
    public readonly loadBalancer?: fabric.Property<{ containerName: string, containerPort: number, elbName?: string, targetGroupArn?: string }[]>;
    public readonly name: fabric.Property<string>;
    public readonly placementConstraints?: fabric.Property<{ expression?: string, type: string }[]>;
    public readonly placementStrategy?: fabric.Property<{ field?: string, type: string }[]>;
    public readonly taskDefinition: fabric.Property<string>;

    constructor(urnName: string, args: ServiceArgs) {
        if (args.taskDefinition === undefined) {
            throw new Error("Missing required property 'taskDefinition'");
        }
        super("aws:ecs/service:Service", urnName, {
            "cluster": args.cluster,
            "deploymentMaximumPercent": args.deploymentMaximumPercent,
            "deploymentMinimumHealthyPercent": args.deploymentMinimumHealthyPercent,
            "desiredCount": args.desiredCount,
            "iamRole": args.iamRole,
            "loadBalancer": args.loadBalancer,
            "name": args.name,
            "placementConstraints": args.placementConstraints,
            "placementStrategy": args.placementStrategy,
            "taskDefinition": args.taskDefinition,
        });
    }
}

export interface ServiceArgs {
    readonly cluster?: fabric.PropertyValue<string>;
    readonly deploymentMaximumPercent?: fabric.PropertyValue<number>;
    readonly deploymentMinimumHealthyPercent?: fabric.PropertyValue<number>;
    readonly desiredCount?: fabric.PropertyValue<number>;
    readonly iamRole?: fabric.PropertyValue<string>;
    readonly loadBalancer?: fabric.PropertyValue<{ containerName: string, containerPort: number, elbName?: string, targetGroupArn?: string }[]>;
    readonly name?: fabric.PropertyValue<string>;
    readonly placementConstraints?: fabric.PropertyValue<{ expression?: string, type: string }[]>;
    readonly placementStrategy?: fabric.PropertyValue<{ field?: string, type: string }[]>;
    readonly taskDefinition: fabric.PropertyValue<string>;
}
