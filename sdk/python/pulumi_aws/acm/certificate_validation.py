# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class CertificateValidation(pulumi.CustomResource):
    """
    This resource represents a successful validation of an ACM certificate in concert
    with other resources.
    
    Most commonly, this resource is used together with [`aws_route53_record`](route53_record.html) and
    [`aws_acm_certificate`](acm_certificate.html) to request a DNS validated certificate,
    deploy the required validation records and wait for validation to complete.
    
    ~> **WARNING:** This resource implements a part of the validation workflow. It does not represent a real-world entity in AWS, therefore changing or deleting this resource on its own has no immediate effect.
    
    """
    def __init__(__self__, __name__, __opts__=None, certificate_arn=None, validation_record_fqdns=None):
        """Create a CertificateValidation resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not certificate_arn:
            raise TypeError('Missing required property certificate_arn')
        elif not isinstance(certificate_arn, basestring):
            raise TypeError('Expected property certificate_arn to be a basestring')
        __self__.certificate_arn = certificate_arn
        """
        The ARN of the certificate that is being validated.
        """
        __props__['certificateArn'] = certificate_arn

        if validation_record_fqdns and not isinstance(validation_record_fqdns, list):
            raise TypeError('Expected property validation_record_fqdns to be a list')
        __self__.validation_record_fqdns = validation_record_fqdns
        """
        List of FQDNs that implement the validation. Only valid for DNS validation method ACM certificates. If this is set, the resource can implement additional sanity checks and has an explicit dependency on the resource that is implementing the validation
        """
        __props__['validationRecordFqdns'] = validation_record_fqdns

        super(CertificateValidation, __self__).__init__(
            'aws:acm/certificateValidation:CertificateValidation',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'certificateArn' in outs:
            self.certificate_arn = outs['certificateArn']
        if 'validationRecordFqdns' in outs:
            self.validation_record_fqdns = outs['validationRecordFqdns']
