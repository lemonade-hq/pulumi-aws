# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Webhook(pulumi.CustomResource):
    """
    Provides a CodeBuild Webhook resource.
    """
    def __init__(__self__, __name__, __opts__=None, branch_filter=None, project_name=None):
        """Create a Webhook resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if branch_filter and not isinstance(branch_filter, basestring):
            raise TypeError('Expected property branch_filter to be a basestring')
        __self__.branch_filter = branch_filter
        """
        A regular expression used to determine which branches get built. Default is all branches are built.
        """
        __props__['branchFilter'] = branch_filter

        if not project_name:
            raise TypeError('Missing required property project_name')
        elif not isinstance(project_name, basestring):
            raise TypeError('Expected property project_name to be a basestring')
        __self__.project_name = project_name
        """
        The name of the build project.
        """
        __props__['projectName'] = project_name

        __self__.payload_url = pulumi.runtime.UNKNOWN
        """
        The CodeBuild endpoint where webhook events are sent.
        """
        __self__.secret = pulumi.runtime.UNKNOWN
        """
        The secret token of the associated repository. Not returned for all source types.
        """
        __self__.url = pulumi.runtime.UNKNOWN
        """
        The URL to the webhook.
        """

        super(Webhook, __self__).__init__(
            'aws:codebuild/webhook:Webhook',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'branchFilter' in outs:
            self.branch_filter = outs['branchFilter']
        if 'payloadUrl' in outs:
            self.payload_url = outs['payloadUrl']
        if 'projectName' in outs:
            self.project_name = outs['projectName']
        if 'secret' in outs:
            self.secret = outs['secret']
        if 'url' in outs:
            self.url = outs['url']
