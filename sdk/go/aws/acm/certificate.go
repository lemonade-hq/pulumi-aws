// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package acm

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// The ACM certificate resource allows requesting and management of certificates
// from the Amazon Certificate Manager.
// 
// It deals with requesting certificates and managing their attributes and life-cycle.
// This resource does not deal with validation of a certificate but can provide inputs
// for other resources implementing the validation. It does not wait for a certificate to be issued.
// Use a [`aws_acm_certificate_validation`](acm_certificate_validation.html) resource for this.
// 
// Most commonly, this resource is used to together with [`aws_route53_record`](route53_record.html) and
// [`aws_acm_certificate_validation`](acm_certificate_validation.html) to request a DNS validated certificate,
// deploy the required validation records and wait for validation to complete.
// 
// Domain validation through E-Mail is also supported but should be avoided as it requires a manual step outside
// of Terraform.
// 
// It's recommended to specify `create_before_destroy = true` in a [lifecycle][1] block to replace a certificate
// which is currently in use (eg, by [`aws_lb_listener`](lb_listener.html)).
type Certificate struct {
	s *pulumi.ResourceState
}

// NewCertificate registers a new resource with the given unique name, arguments, and options.
func NewCertificate(ctx *pulumi.Context,
	name string, args *CertificateArgs, opts ...pulumi.ResourceOpt) (*Certificate, error) {
	if args == nil || args.DomainName == nil {
		return nil, errors.New("missing required argument 'DomainName'")
	}
	if args == nil || args.ValidationMethod == nil {
		return nil, errors.New("missing required argument 'ValidationMethod'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["domainName"] = nil
		inputs["subjectAlternativeNames"] = nil
		inputs["tags"] = nil
		inputs["validationMethod"] = nil
	} else {
		inputs["domainName"] = args.DomainName
		inputs["subjectAlternativeNames"] = args.SubjectAlternativeNames
		inputs["tags"] = args.Tags
		inputs["validationMethod"] = args.ValidationMethod
	}
	inputs["arn"] = nil
	inputs["domainValidationOptions"] = nil
	inputs["validationEmails"] = nil
	s, err := ctx.RegisterResource("aws:acm/certificate:Certificate", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Certificate{s: s}, nil
}

// GetCertificate gets an existing Certificate resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCertificate(ctx *pulumi.Context,
	name string, id pulumi.ID, state *CertificateState, opts ...pulumi.ResourceOpt) (*Certificate, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["arn"] = state.Arn
		inputs["domainName"] = state.DomainName
		inputs["domainValidationOptions"] = state.DomainValidationOptions
		inputs["subjectAlternativeNames"] = state.SubjectAlternativeNames
		inputs["tags"] = state.Tags
		inputs["validationEmails"] = state.ValidationEmails
		inputs["validationMethod"] = state.ValidationMethod
	}
	s, err := ctx.ReadResource("aws:acm/certificate:Certificate", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Certificate{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Certificate) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Certificate) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The ARN of the certificate
func (r *Certificate) Arn() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["arn"])
}

// A domain name for which the certificate should be issued
func (r *Certificate) DomainName() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["domainName"])
}

// A list of attributes to feed into other resources to complete certificate validation. Can have more than one element, e.g. if SANs are defined. Only set if `DNS`-validation was used.
func (r *Certificate) DomainValidationOptions() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["domainValidationOptions"])
}

// A list of domains that should be SANs in the issued certificate
func (r *Certificate) SubjectAlternativeNames() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["subjectAlternativeNames"])
}

// A mapping of tags to assign to the resource.
func (r *Certificate) Tags() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["tags"])
}

// A list of addresses that received a validation E-Mail. Only set if `EMAIL`-validation was used.
func (r *Certificate) ValidationEmails() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["validationEmails"])
}

// Which method to use for validation. `DNS` or `EMAIL` are valid, `NONE` can be used for certificates that were imported into ACM and then into Terraform.
func (r *Certificate) ValidationMethod() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["validationMethod"])
}

// Input properties used for looking up and filtering Certificate resources.
type CertificateState struct {
	// The ARN of the certificate
	Arn interface{}
	// A domain name for which the certificate should be issued
	DomainName interface{}
	// A list of attributes to feed into other resources to complete certificate validation. Can have more than one element, e.g. if SANs are defined. Only set if `DNS`-validation was used.
	DomainValidationOptions interface{}
	// A list of domains that should be SANs in the issued certificate
	SubjectAlternativeNames interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// A list of addresses that received a validation E-Mail. Only set if `EMAIL`-validation was used.
	ValidationEmails interface{}
	// Which method to use for validation. `DNS` or `EMAIL` are valid, `NONE` can be used for certificates that were imported into ACM and then into Terraform.
	ValidationMethod interface{}
}

// The set of arguments for constructing a Certificate resource.
type CertificateArgs struct {
	// A domain name for which the certificate should be issued
	DomainName interface{}
	// A list of domains that should be SANs in the issued certificate
	SubjectAlternativeNames interface{}
	// A mapping of tags to assign to the resource.
	Tags interface{}
	// Which method to use for validation. `DNS` or `EMAIL` are valid, `NONE` can be used for certificates that were imported into ACM and then into Terraform.
	ValidationMethod interface{}
}
