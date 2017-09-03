// *** WARNING: this file was generated by the Pulumi Terraform Bridge (TFGEN) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as fabric from "@pulumi/pulumi-fabric";

export class RailsAppLayer extends fabric.Resource {
    public readonly appServer?: fabric.Property<string>;
    public readonly autoAssignElasticIps?: fabric.Property<boolean>;
    public readonly autoAssignPublicIps?: fabric.Property<boolean>;
    public readonly autoHealing?: fabric.Property<boolean>;
    public readonly bundlerVersion?: fabric.Property<string>;
    public readonly customConfigureRecipes?: fabric.Property<string[]>;
    public readonly customDeployRecipes?: fabric.Property<string[]>;
    public readonly customInstanceProfileArn?: fabric.Property<string>;
    public readonly customJson?: fabric.Property<string>;
    public readonly customSecurityGroupIds?: fabric.Property<string[]>;
    public readonly customSetupRecipes?: fabric.Property<string[]>;
    public readonly customShutdownRecipes?: fabric.Property<string[]>;
    public readonly customUndeployRecipes?: fabric.Property<string[]>;
    public readonly drainElbOnShutdown?: fabric.Property<boolean>;
    public readonly ebsVolume?: fabric.Property<{ iops?: number, mountPoint: string, numberOfDisks: number, raidLevel?: string, size: number, type?: string }[]>;
    public readonly elasticLoadBalancer?: fabric.Property<string>;
    public /*out*/ readonly layerId: fabric.Property<string>;
    public readonly installUpdatesOnBoot?: fabric.Property<boolean>;
    public readonly instanceShutdownTimeout?: fabric.Property<number>;
    public readonly manageBundler?: fabric.Property<boolean>;
    public readonly name: fabric.Property<string>;
    public readonly passengerVersion?: fabric.Property<string>;
    public readonly rubyVersion?: fabric.Property<string>;
    public readonly rubygemsVersion?: fabric.Property<string>;
    public readonly stackId: fabric.Property<string>;
    public readonly systemPackages?: fabric.Property<string[]>;
    public readonly useEbsOptimizedInstances?: fabric.Property<boolean>;

    constructor(urnName: string, args: RailsAppLayerArgs) {
        if (args.stackId === undefined) {
            throw new Error("Missing required property 'stackId'");
        }
        super("aws:opsworks/railsAppLayer:RailsAppLayer", urnName, {
            "appServer": args.appServer,
            "autoAssignElasticIps": args.autoAssignElasticIps,
            "autoAssignPublicIps": args.autoAssignPublicIps,
            "autoHealing": args.autoHealing,
            "bundlerVersion": args.bundlerVersion,
            "customConfigureRecipes": args.customConfigureRecipes,
            "customDeployRecipes": args.customDeployRecipes,
            "customInstanceProfileArn": args.customInstanceProfileArn,
            "customJson": args.customJson,
            "customSecurityGroupIds": args.customSecurityGroupIds,
            "customSetupRecipes": args.customSetupRecipes,
            "customShutdownRecipes": args.customShutdownRecipes,
            "customUndeployRecipes": args.customUndeployRecipes,
            "drainElbOnShutdown": args.drainElbOnShutdown,
            "ebsVolume": args.ebsVolume,
            "elasticLoadBalancer": args.elasticLoadBalancer,
            "installUpdatesOnBoot": args.installUpdatesOnBoot,
            "instanceShutdownTimeout": args.instanceShutdownTimeout,
            "manageBundler": args.manageBundler,
            "name": args.name,
            "passengerVersion": args.passengerVersion,
            "rubyVersion": args.rubyVersion,
            "rubygemsVersion": args.rubygemsVersion,
            "stackId": args.stackId,
            "systemPackages": args.systemPackages,
            "useEbsOptimizedInstances": args.useEbsOptimizedInstances,
        });
    }
}

export interface RailsAppLayerArgs {
    readonly appServer?: fabric.PropertyValue<string>;
    readonly autoAssignElasticIps?: fabric.PropertyValue<boolean>;
    readonly autoAssignPublicIps?: fabric.PropertyValue<boolean>;
    readonly autoHealing?: fabric.PropertyValue<boolean>;
    readonly bundlerVersion?: fabric.PropertyValue<string>;
    readonly customConfigureRecipes?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly customDeployRecipes?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly customInstanceProfileArn?: fabric.PropertyValue<string>;
    readonly customJson?: fabric.PropertyValue<string>;
    readonly customSecurityGroupIds?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly customSetupRecipes?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly customShutdownRecipes?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly customUndeployRecipes?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly drainElbOnShutdown?: fabric.PropertyValue<boolean>;
    readonly ebsVolume?: fabric.PropertyValue<{ iops?: fabric.PropertyValue<number>, mountPoint: fabric.PropertyValue<string>, numberOfDisks: fabric.PropertyValue<number>, raidLevel?: fabric.PropertyValue<string>, size: fabric.PropertyValue<number>, type?: fabric.PropertyValue<string> }>[];
    readonly elasticLoadBalancer?: fabric.PropertyValue<string>;
    readonly installUpdatesOnBoot?: fabric.PropertyValue<boolean>;
    readonly instanceShutdownTimeout?: fabric.PropertyValue<number>;
    readonly manageBundler?: fabric.PropertyValue<boolean>;
    readonly name?: fabric.PropertyValue<string>;
    readonly passengerVersion?: fabric.PropertyValue<string>;
    readonly rubyVersion?: fabric.PropertyValue<string>;
    readonly rubygemsVersion?: fabric.PropertyValue<string>;
    readonly stackId: fabric.PropertyValue<string>;
    readonly systemPackages?: fabric.PropertyValue<fabric.PropertyValue<string>>[];
    readonly useEbsOptimizedInstances?: fabric.PropertyValue<boolean>;
}

