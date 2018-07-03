# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Certificate(pulumi.CustomResource):
    """
    The ACM certificate resource allows requesting and management of certificates
    from the Amazon Certificate Manager.
    
    It deals with requesting certificates and managing their attributes and life-cycle.
    This resource does not deal with validation of a certificate but can provide inputs
    for other resources implementing the validation. It does not wait for a certificate to be issued.
    Use a [`aws_acm_certificate_validation`](acm_certificate_validation.html) resource for this.
    
    Most commonly, this resource is used to together with [`aws_route53_record`](route53_record.html) and
    [`aws_acm_certificate_validation`](acm_certificate_validation.html) to request a DNS validated certificate,
    deploy the required validation records and wait for validation to complete.
    
    Domain validation through E-Mail is also supported but should be avoided as it requires a manual step outside
    of Terraform.
    
    It's recommended to specify `create_before_destroy = true` in a [lifecycle][1] block to replace a certificate
    which is currently in use (eg, by [`aws_lb_listener`](lb_listener.html)).
    """
    def __init__(__self__, __name__, __opts__=None, domain_name=None, subject_alternative_names=None, tags=None, validation_method=None):
        """Create a Certificate resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not domain_name:
            raise TypeError('Missing required property domain_name')
        elif not isinstance(domain_name, basestring):
            raise TypeError('Expected property domain_name to be a basestring')
        __self__.domain_name = domain_name
        """
        A domain name for which the certificate should be issued
        """
        __props__['domainName'] = domain_name

        if subject_alternative_names and not isinstance(subject_alternative_names, list):
            raise TypeError('Expected property subject_alternative_names to be a list')
        __self__.subject_alternative_names = subject_alternative_names
        """
        A list of domains that should be SANs in the issued certificate
        """
        __props__['subjectAlternativeNames'] = subject_alternative_names

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource.
        """
        __props__['tags'] = tags

        if not validation_method:
            raise TypeError('Missing required property validation_method')
        elif not isinstance(validation_method, basestring):
            raise TypeError('Expected property validation_method to be a basestring')
        __self__.validation_method = validation_method
        """
        Which method to use for validation. `DNS` or `EMAIL` are valid, `NONE` can be used for certificates that were imported into ACM and then into Terraform.
        """
        __props__['validationMethod'] = validation_method

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        The ARN of the certificate
        """
        __self__.domain_validation_options = pulumi.runtime.UNKNOWN
        """
        A list of attributes to feed into other resources to complete certificate validation. Can have more than one element, e.g. if SANs are defined. Only set if `DNS`-validation was used.
        """
        __self__.validation_emails = pulumi.runtime.UNKNOWN
        """
        A list of addresses that received a validation E-Mail. Only set if `EMAIL`-validation was used.
        """

        super(Certificate, __self__).__init__(
            'aws:acm/certificate:Certificate',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'domainName' in outs:
            self.domain_name = outs['domainName']
        if 'domainValidationOptions' in outs:
            self.domain_validation_options = outs['domainValidationOptions']
        if 'subjectAlternativeNames' in outs:
            self.subject_alternative_names = outs['subjectAlternativeNames']
        if 'tags' in outs:
            self.tags = outs['tags']
        if 'validationEmails' in outs:
            self.validation_emails = outs['validationEmails']
        if 'validationMethod' in outs:
            self.validation_method = outs['validationMethod']
