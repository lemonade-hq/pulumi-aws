// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * -> **Note:** To prevent a race condition during service deletion, make sure to set `depends_on` to the related `aws_iam_role_policy`; otherwise, the policy may be destroyed too soon and the ECS service will then get stuck in the `DRAINING` state.
 * 
 * Provides an ECS service - effectively a task that is expected to run until an error occurs or a user terminates it (typically a webserver or a database).
 * 
 * See [ECS Services section in AWS developer guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
 */
export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState): Service {
        return new Service(name, <any>state, { id });
    }

    /**
     * ARN of an ECS cluster
     */
    public readonly cluster: pulumi.Output<string>;
    /**
     * The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
     */
    public readonly deploymentMaximumPercent: pulumi.Output<number | undefined>;
    /**
     * The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
     */
    public readonly deploymentMinimumHealthyPercent: pulumi.Output<number | undefined>;
    /**
     * The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
     */
    public readonly desiredCount: pulumi.Output<number | undefined>;
    /**
     * Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 7200. Only valid for services configured to use load balancers.
     */
    public readonly healthCheckGracePeriodSeconds: pulumi.Output<number | undefined>;
    /**
     * ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
     */
    public readonly iamRole: pulumi.Output<string>;
    /**
     * The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
     */
    public readonly launchType: pulumi.Output<string | undefined>;
    /**
     * A load balancer block. Load balancers documented below.
     */
    public readonly loadBalancers: pulumi.Output<{ containerName: string, containerPort: number, elbName?: string, targetGroupArn?: string }[] | undefined>;
    /**
     * The name of the service (up to 255 letters, numbers, hyphens, and underscores)
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
     */
    public readonly networkConfiguration: pulumi.Output<{ assignPublicIp?: boolean, securityGroups?: string[], subnets: string[] } | undefined>;
    /**
     * Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
     */
    public readonly orderedPlacementStrategies: pulumi.Output<{ field?: string, type: string }[] | undefined>;
    /**
     * rules that are taken into consideration during task placement. Maximum number of
     * `placement_constraints` is `10`. Defined below.
     */
    public readonly placementConstraints: pulumi.Output<{ expression?: string, type: string }[] | undefined>;
    /**
     * **Deprecated**, use `ordered_placement_strategy` instead.
     */
    public readonly placementStrategies: pulumi.Output<{ field?: string, type: string }[] | undefined>;
    /**
     * The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
     */
    public readonly schedulingStrategy: pulumi.Output<string | undefined>;
    /**
     * The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
     */
    public readonly serviceRegistries: pulumi.Output<{ containerName?: string, containerPort?: number, port?: number, registryArn: string } | undefined>;
    /**
     * The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
     */
    public readonly taskDefinition: pulumi.Output<string>;
    /**
     * If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
     */
    public readonly waitForSteadyState: pulumi.Output<boolean | undefined>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: ServiceArgs | ServiceState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: ServiceState = argsOrState as ServiceState | undefined;
            inputs["cluster"] = state ? state.cluster : undefined;
            inputs["deploymentMaximumPercent"] = state ? state.deploymentMaximumPercent : undefined;
            inputs["deploymentMinimumHealthyPercent"] = state ? state.deploymentMinimumHealthyPercent : undefined;
            inputs["desiredCount"] = state ? state.desiredCount : undefined;
            inputs["healthCheckGracePeriodSeconds"] = state ? state.healthCheckGracePeriodSeconds : undefined;
            inputs["iamRole"] = state ? state.iamRole : undefined;
            inputs["launchType"] = state ? state.launchType : undefined;
            inputs["loadBalancers"] = state ? state.loadBalancers : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkConfiguration"] = state ? state.networkConfiguration : undefined;
            inputs["orderedPlacementStrategies"] = state ? state.orderedPlacementStrategies : undefined;
            inputs["placementConstraints"] = state ? state.placementConstraints : undefined;
            inputs["placementStrategies"] = state ? state.placementStrategies : undefined;
            inputs["schedulingStrategy"] = state ? state.schedulingStrategy : undefined;
            inputs["serviceRegistries"] = state ? state.serviceRegistries : undefined;
            inputs["taskDefinition"] = state ? state.taskDefinition : undefined;
            inputs["waitForSteadyState"] = state ? state.waitForSteadyState : undefined;
        } else {
            const args = argsOrState as ServiceArgs | undefined;
            if (!args || args.taskDefinition === undefined) {
                throw new Error("Missing required property 'taskDefinition'");
            }
            inputs["cluster"] = args ? args.cluster : undefined;
            inputs["deploymentMaximumPercent"] = args ? args.deploymentMaximumPercent : undefined;
            inputs["deploymentMinimumHealthyPercent"] = args ? args.deploymentMinimumHealthyPercent : undefined;
            inputs["desiredCount"] = args ? args.desiredCount : undefined;
            inputs["healthCheckGracePeriodSeconds"] = args ? args.healthCheckGracePeriodSeconds : undefined;
            inputs["iamRole"] = args ? args.iamRole : undefined;
            inputs["launchType"] = args ? args.launchType : undefined;
            inputs["loadBalancers"] = args ? args.loadBalancers : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkConfiguration"] = args ? args.networkConfiguration : undefined;
            inputs["orderedPlacementStrategies"] = args ? args.orderedPlacementStrategies : undefined;
            inputs["placementConstraints"] = args ? args.placementConstraints : undefined;
            inputs["placementStrategies"] = args ? args.placementStrategies : undefined;
            inputs["schedulingStrategy"] = args ? args.schedulingStrategy : undefined;
            inputs["serviceRegistries"] = args ? args.serviceRegistries : undefined;
            inputs["taskDefinition"] = args ? args.taskDefinition : undefined;
            inputs["waitForSteadyState"] = args ? args.waitForSteadyState : undefined;
        }
        super("aws:ecs/service:Service", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    /**
     * ARN of an ECS cluster
     */
    readonly cluster?: pulumi.Input<string>;
    /**
     * The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
     */
    readonly deploymentMaximumPercent?: pulumi.Input<number>;
    /**
     * The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
     */
    readonly deploymentMinimumHealthyPercent?: pulumi.Input<number>;
    /**
     * The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
     */
    readonly desiredCount?: pulumi.Input<number>;
    /**
     * Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 7200. Only valid for services configured to use load balancers.
     */
    readonly healthCheckGracePeriodSeconds?: pulumi.Input<number>;
    /**
     * ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
     */
    readonly iamRole?: pulumi.Input<string>;
    /**
     * The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
     */
    readonly launchType?: pulumi.Input<string>;
    /**
     * A load balancer block. Load balancers documented below.
     */
    readonly loadBalancers?: pulumi.Input<{ containerName: pulumi.Input<string>, containerPort: pulumi.Input<number>, elbName?: pulumi.Input<string>, targetGroupArn?: pulumi.Input<string> }[]>;
    /**
     * The name of the service (up to 255 letters, numbers, hyphens, and underscores)
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
     */
    readonly networkConfiguration?: pulumi.Input<{ assignPublicIp?: pulumi.Input<boolean>, securityGroups?: pulumi.Input<pulumi.Input<string>[]>, subnets: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
     */
    readonly orderedPlacementStrategies?: pulumi.Input<{ field?: pulumi.Input<string>, type: pulumi.Input<string> }[]>;
    /**
     * rules that are taken into consideration during task placement. Maximum number of
     * `placement_constraints` is `10`. Defined below.
     */
    readonly placementConstraints?: pulumi.Input<{ expression?: pulumi.Input<string>, type: pulumi.Input<string> }[]>;
    /**
     * **Deprecated**, use `ordered_placement_strategy` instead.
     */
    readonly placementStrategies?: pulumi.Input<{ field?: pulumi.Input<string>, type: pulumi.Input<string> }[]>;
    /**
     * The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
     */
    readonly schedulingStrategy?: pulumi.Input<string>;
    /**
     * The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
     */
    readonly serviceRegistries?: pulumi.Input<{ containerName?: pulumi.Input<string>, containerPort?: pulumi.Input<number>, port?: pulumi.Input<number>, registryArn: pulumi.Input<string> }>;
    /**
     * The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
     */
    readonly taskDefinition?: pulumi.Input<string>;
    /**
     * If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
     */
    readonly waitForSteadyState?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    /**
     * ARN of an ECS cluster
     */
    readonly cluster?: pulumi.Input<string>;
    /**
     * The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
     */
    readonly deploymentMaximumPercent?: pulumi.Input<number>;
    /**
     * The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
     */
    readonly deploymentMinimumHealthyPercent?: pulumi.Input<number>;
    /**
     * The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
     */
    readonly desiredCount?: pulumi.Input<number>;
    /**
     * Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 7200. Only valid for services configured to use load balancers.
     */
    readonly healthCheckGracePeriodSeconds?: pulumi.Input<number>;
    /**
     * ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
     */
    readonly iamRole?: pulumi.Input<string>;
    /**
     * The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
     */
    readonly launchType?: pulumi.Input<string>;
    /**
     * A load balancer block. Load balancers documented below.
     */
    readonly loadBalancers?: pulumi.Input<{ containerName: pulumi.Input<string>, containerPort: pulumi.Input<number>, elbName?: pulumi.Input<string>, targetGroupArn?: pulumi.Input<string> }[]>;
    /**
     * The name of the service (up to 255 letters, numbers, hyphens, and underscores)
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
     */
    readonly networkConfiguration?: pulumi.Input<{ assignPublicIp?: pulumi.Input<boolean>, securityGroups?: pulumi.Input<pulumi.Input<string>[]>, subnets: pulumi.Input<pulumi.Input<string>[]> }>;
    /**
     * Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
     */
    readonly orderedPlacementStrategies?: pulumi.Input<{ field?: pulumi.Input<string>, type: pulumi.Input<string> }[]>;
    /**
     * rules that are taken into consideration during task placement. Maximum number of
     * `placement_constraints` is `10`. Defined below.
     */
    readonly placementConstraints?: pulumi.Input<{ expression?: pulumi.Input<string>, type: pulumi.Input<string> }[]>;
    /**
     * **Deprecated**, use `ordered_placement_strategy` instead.
     */
    readonly placementStrategies?: pulumi.Input<{ field?: pulumi.Input<string>, type: pulumi.Input<string> }[]>;
    /**
     * The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
     */
    readonly schedulingStrategy?: pulumi.Input<string>;
    /**
     * The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
     */
    readonly serviceRegistries?: pulumi.Input<{ containerName?: pulumi.Input<string>, containerPort?: pulumi.Input<number>, port?: pulumi.Input<number>, registryArn: pulumi.Input<string> }>;
    /**
     * The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
     */
    readonly taskDefinition: pulumi.Input<string>;
    /**
     * If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
     */
    readonly waitForSteadyState?: pulumi.Input<boolean>;
}
