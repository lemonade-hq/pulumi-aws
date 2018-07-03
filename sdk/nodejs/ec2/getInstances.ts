// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Use this data source to get IDs or IPs of Amazon EC2 instances to be referenced elsewhere,
 * e.g. to allow easier migration from another management solution
 * or to make it easier for an operator to connect through bastion host(s).
 * 
 * -> **Note:** It's a best practice to expose instance details via [outputs](https://www.terraform.io/docs/configuration/outputs.html)
 * and [remote state](https://www.terraform.io/docs/state/remote.html) and
 * **use [`terraform_remote_state`](https://www.terraform.io/docs/providers/terraform/d/remote_state.html)
 * data source instead** if you manage referenced instances via Terraform.
 * 
 * ~> **Note:** It's strongly discouraged to use this data source for querying ephemeral
 * instances (e.g. managed via autoscaling group), as the output may change at any time
 * and you'd need to re-run `apply` every time an instance comes up or dies.
 */
export function getInstances(args?: GetInstancesArgs): Promise<GetInstancesResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:ec2/getInstances:getInstances", {
        "filters": args.filters,
        "instanceTags": args.instanceTags,
    });
}

/**
 * A collection of arguments for invoking getInstances.
 */
export interface GetInstancesArgs {
    /**
     * One or more name/value pairs to use as filters. There are
     * several valid keys, for a full reference, check out
     * [describe-instances in the AWS CLI reference][1].
     */
    readonly filters?: pulumi.Input<{ name: pulumi.Input<string>, values: pulumi.Input<pulumi.Input<string>[]> }[]>;
    /**
     * A mapping of tags, each pair of which must
     * exactly match a pair on desired instances.
     */
    readonly instanceTags?: pulumi.Input<{[key: string]: any}>;
}

/**
 * A collection of values returned by getInstances.
 */
export interface GetInstancesResult {
    /**
     * IDs of instances found through the filter
     */
    readonly ids: string[];
    readonly instanceTags: {[key: string]: any};
    /**
     * Private IP addresses of instances found through the filter
     */
    readonly privateIps: string[];
    /**
     * Public IP addresses of instances found through the filter
     */
    readonly publicIps: string[];
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
