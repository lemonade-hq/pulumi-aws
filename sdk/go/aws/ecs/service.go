// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ecs

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// -> **Note:** To prevent a race condition during service deletion, make sure to set `depends_on` to the related `aws_iam_role_policy`; otherwise, the policy may be destroyed too soon and the ECS service will then get stuck in the `DRAINING` state.
// 
// Provides an ECS service - effectively a task that is expected to run until an error occurs or a user terminates it (typically a webserver or a database).
// 
// See [ECS Services section in AWS developer guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
type Service struct {
	s *pulumi.ResourceState
}

// NewService registers a new resource with the given unique name, arguments, and options.
func NewService(ctx *pulumi.Context,
	name string, args *ServiceArgs, opts ...pulumi.ResourceOpt) (*Service, error) {
	if args == nil || args.TaskDefinition == nil {
		return nil, errors.New("missing required argument 'TaskDefinition'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["cluster"] = nil
		inputs["deploymentMaximumPercent"] = nil
		inputs["deploymentMinimumHealthyPercent"] = nil
		inputs["desiredCount"] = nil
		inputs["healthCheckGracePeriodSeconds"] = nil
		inputs["iamRole"] = nil
		inputs["launchType"] = nil
		inputs["loadBalancers"] = nil
		inputs["name"] = nil
		inputs["networkConfiguration"] = nil
		inputs["orderedPlacementStrategies"] = nil
		inputs["placementConstraints"] = nil
		inputs["placementStrategies"] = nil
		inputs["schedulingStrategy"] = nil
		inputs["serviceRegistries"] = nil
		inputs["taskDefinition"] = nil
		inputs["waitForSteadyState"] = nil
	} else {
		inputs["cluster"] = args.Cluster
		inputs["deploymentMaximumPercent"] = args.DeploymentMaximumPercent
		inputs["deploymentMinimumHealthyPercent"] = args.DeploymentMinimumHealthyPercent
		inputs["desiredCount"] = args.DesiredCount
		inputs["healthCheckGracePeriodSeconds"] = args.HealthCheckGracePeriodSeconds
		inputs["iamRole"] = args.IamRole
		inputs["launchType"] = args.LaunchType
		inputs["loadBalancers"] = args.LoadBalancers
		inputs["name"] = args.Name
		inputs["networkConfiguration"] = args.NetworkConfiguration
		inputs["orderedPlacementStrategies"] = args.OrderedPlacementStrategies
		inputs["placementConstraints"] = args.PlacementConstraints
		inputs["placementStrategies"] = args.PlacementStrategies
		inputs["schedulingStrategy"] = args.SchedulingStrategy
		inputs["serviceRegistries"] = args.ServiceRegistries
		inputs["taskDefinition"] = args.TaskDefinition
		inputs["waitForSteadyState"] = args.WaitForSteadyState
	}
	s, err := ctx.RegisterResource("aws:ecs/service:Service", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// GetService gets an existing Service resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetService(ctx *pulumi.Context,
	name string, id pulumi.ID, state *ServiceState, opts ...pulumi.ResourceOpt) (*Service, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["cluster"] = state.Cluster
		inputs["deploymentMaximumPercent"] = state.DeploymentMaximumPercent
		inputs["deploymentMinimumHealthyPercent"] = state.DeploymentMinimumHealthyPercent
		inputs["desiredCount"] = state.DesiredCount
		inputs["healthCheckGracePeriodSeconds"] = state.HealthCheckGracePeriodSeconds
		inputs["iamRole"] = state.IamRole
		inputs["launchType"] = state.LaunchType
		inputs["loadBalancers"] = state.LoadBalancers
		inputs["name"] = state.Name
		inputs["networkConfiguration"] = state.NetworkConfiguration
		inputs["orderedPlacementStrategies"] = state.OrderedPlacementStrategies
		inputs["placementConstraints"] = state.PlacementConstraints
		inputs["placementStrategies"] = state.PlacementStrategies
		inputs["schedulingStrategy"] = state.SchedulingStrategy
		inputs["serviceRegistries"] = state.ServiceRegistries
		inputs["taskDefinition"] = state.TaskDefinition
		inputs["waitForSteadyState"] = state.WaitForSteadyState
	}
	s, err := ctx.ReadResource("aws:ecs/service:Service", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Service{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Service) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Service) ID() *pulumi.IDOutput {
	return r.s.ID
}

// ARN of an ECS cluster
func (r *Service) Cluster() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["cluster"])
}

// The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
func (r *Service) DeploymentMaximumPercent() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["deploymentMaximumPercent"])
}

// The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
func (r *Service) DeploymentMinimumHealthyPercent() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["deploymentMinimumHealthyPercent"])
}

// The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
func (r *Service) DesiredCount() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["desiredCount"])
}

// Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 7200. Only valid for services configured to use load balancers.
func (r *Service) HealthCheckGracePeriodSeconds() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["healthCheckGracePeriodSeconds"])
}

// ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
func (r *Service) IamRole() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["iamRole"])
}

// The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
func (r *Service) LaunchType() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["launchType"])
}

// A load balancer block. Load balancers documented below.
func (r *Service) LoadBalancers() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["loadBalancers"])
}

// The name of the service (up to 255 letters, numbers, hyphens, and underscores)
func (r *Service) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
func (r *Service) NetworkConfiguration() *pulumi.Output {
	return r.s.State["networkConfiguration"]
}

// Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
func (r *Service) OrderedPlacementStrategies() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["orderedPlacementStrategies"])
}

// rules that are taken into consideration during task placement. Maximum number of
// `placement_constraints` is `10`. Defined below.
func (r *Service) PlacementConstraints() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["placementConstraints"])
}

// **Deprecated**, use `ordered_placement_strategy` instead.
func (r *Service) PlacementStrategies() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["placementStrategies"])
}

// The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
func (r *Service) SchedulingStrategy() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["schedulingStrategy"])
}

// The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
func (r *Service) ServiceRegistries() *pulumi.Output {
	return r.s.State["serviceRegistries"]
}

// The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
func (r *Service) TaskDefinition() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["taskDefinition"])
}

// If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
func (r *Service) WaitForSteadyState() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["waitForSteadyState"])
}

// Input properties used for looking up and filtering Service resources.
type ServiceState struct {
	// ARN of an ECS cluster
	Cluster interface{}
	// The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
	DeploymentMaximumPercent interface{}
	// The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
	DeploymentMinimumHealthyPercent interface{}
	// The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
	DesiredCount interface{}
	// Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 7200. Only valid for services configured to use load balancers.
	HealthCheckGracePeriodSeconds interface{}
	// ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
	IamRole interface{}
	// The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
	LaunchType interface{}
	// A load balancer block. Load balancers documented below.
	LoadBalancers interface{}
	// The name of the service (up to 255 letters, numbers, hyphens, and underscores)
	Name interface{}
	// The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
	NetworkConfiguration interface{}
	// Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
	OrderedPlacementStrategies interface{}
	// rules that are taken into consideration during task placement. Maximum number of
	// `placement_constraints` is `10`. Defined below.
	PlacementConstraints interface{}
	// **Deprecated**, use `ordered_placement_strategy` instead.
	PlacementStrategies interface{}
	// The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
	SchedulingStrategy interface{}
	// The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
	ServiceRegistries interface{}
	// The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
	TaskDefinition interface{}
	// If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
	WaitForSteadyState interface{}
}

// The set of arguments for constructing a Service resource.
type ServiceArgs struct {
	// ARN of an ECS cluster
	Cluster interface{}
	// The upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
	DeploymentMaximumPercent interface{}
	// The lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
	DeploymentMinimumHealthyPercent interface{}
	// The number of instances of the task definition to place and keep running. Defaults to 0. Do not specify if using the `DAEMON` scheduling strategy.
	DesiredCount interface{}
	// Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 7200. Only valid for services configured to use load balancers.
	HealthCheckGracePeriodSeconds interface{}
	// ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
	IamRole interface{}
	// The launch type on which to run your service. The valid values are `EC2` and `FARGATE`. Defaults to `EC2`.
	LaunchType interface{}
	// A load balancer block. Load balancers documented below.
	LoadBalancers interface{}
	// The name of the service (up to 255 letters, numbers, hyphens, and underscores)
	Name interface{}
	// The network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes.
	NetworkConfiguration interface{}
	// Service level strategy rules that are taken into consideration during task placement. List from top to bottom in order of precedence. The maximum number of `ordered_placement_strategy` blocks is `5`. Defined below.
	OrderedPlacementStrategies interface{}
	// rules that are taken into consideration during task placement. Maximum number of
	// `placement_constraints` is `10`. Defined below.
	PlacementConstraints interface{}
	// **Deprecated**, use `ordered_placement_strategy` instead.
	PlacementStrategies interface{}
	// The scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Fargate tasks do not support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html).
	SchedulingStrategy interface{}
	// The service discovery registries for the service. The maximum number of `service_registries` blocks is `1`.
	ServiceRegistries interface{}
	// The family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service.
	TaskDefinition interface{}
	// If `true`, Terraform will wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
	WaitForSteadyState interface{}
}
