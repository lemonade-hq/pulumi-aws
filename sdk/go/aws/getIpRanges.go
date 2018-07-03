// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package aws

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Use this data source to get the [IP ranges][1] of various AWS products and services.
func LookupIpRanges(ctx *pulumi.Context, args *GetIpRangesArgs) (*GetIpRangesResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["regions"] = args.Regions
		inputs["services"] = args.Services
	}
	outputs, err := ctx.Invoke("aws:index/getIpRanges:getIpRanges", inputs)
	if err != nil {
		return nil, err
	}
	return &GetIpRangesResult{
		CidrBlocks: outputs["cidrBlocks"],
		CreateDate: outputs["createDate"],
		SyncToken: outputs["syncToken"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getIpRanges.
type GetIpRangesArgs struct {
	// Filter IP ranges by regions (or include all regions, if
	// omitted). Valid items are `global` (for `cloudfront`) as well as all AWS regions
	// (e.g. `eu-central-1`)
	Regions interface{}
	// Filter IP ranges by services. Valid items are `amazon`
	// (for amazon.com), `cloudfront`, `codebuild`, `ec2`, `route53`, `route53_healthchecks` and `S3`.
	Services interface{}
}

// A collection of values returned by getIpRanges.
type GetIpRangesResult struct {
	// The lexically ordered list of CIDR blocks.
	CidrBlocks interface{}
	// The publication time of the IP ranges (e.g. `2016-08-03-23-46-05`).
	CreateDate interface{}
	// The publication time of the IP ranges, in Unix epoch time format
	// (e.g. `1470267965`).
	SyncToken interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
