# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class VpcPeeringConnection(pulumi.CustomResource):
    accept_status: pulumi.Output[str]
    """
    The status of the VPC Peering Connection request.
    """
    accepter: pulumi.Output[dict]
    """
    An optional configuration block that allows for [VPC Peering Connection]
    (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
    the peering connection (a maximum of one).
    """
    auto_accept: pulumi.Output[bool]
    """
    Accept the peering (both VPCs need to be in the same AWS account).
    """
    peer_owner_id: pulumi.Output[str]
    """
    The AWS account ID of the owner of the peer VPC.
    Defaults to the account ID the [AWS provider][1] is currently connected to.
    """
    peer_region: pulumi.Output[str]
    """
    The region of the accepter VPC of the [VPC Peering Connection]. `auto_accept` must be `false`,
    and use the `aws_vpc_peering_connection_accepter` to manage the accepter side.
    """
    peer_vpc_id: pulumi.Output[str]
    """
    The ID of the VPC with which you are creating the VPC Peering Connection.
    """
    requester: pulumi.Output[dict]
    """
    A optional configuration block that allows for [VPC Peering Connection]
    (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
    the peering connection (a maximum of one).
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the resource.
    """
    vpc_id: pulumi.Output[str]
    """
    The ID of the requester VPC.
    """
    def __init__(__self__, resource_name, opts=None, accepter=None, auto_accept=None, peer_owner_id=None, peer_region=None, peer_vpc_id=None, requester=None, tags=None, vpc_id=None, __name__=None, __opts__=None):
        """
        Provides a resource to manage a VPC peering connection.
        
        > **NOTE on VPC Peering Connections and VPC Peering Connection Options:** Terraform provides
        both a standalone VPC Peering Connection Options and a VPC Peering Connection
        resource with `accepter` and `requester` attributes. Do not manage options for the same VPC peering
        connection in both a VPC Peering Connection resource and a VPC Peering Connection Options resource.
        Doing so will cause a conflict of options and will overwrite the options.
        Using a VPC Peering Connection Options resource decouples management of the connection options from
        management of the VPC Peering Connection and allows options to be set correctly in cross-account scenarios.
        
        > **Note:** For cross-account (requester's AWS account differs from the accepter's AWS account) or inter-region
        VPC Peering Connections use the `aws_vpc_peering_connection` resource to manage the requester's side of the
        connection and use the `aws_vpc_peering_connection_accepter` resource to manage the accepter's side of the connection.
        
        ## Notes
        
        If both VPCs are not in the same AWS account do not enable the `auto_accept` attribute.
        The accepter can manage its side of the connection using the `aws_vpc_peering_connection_accepter` resource
        or accept the connection manually using the AWS Management Console, AWS CLI, through SDKs, etc.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[dict] accepter: An optional configuration block that allows for [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that accepts
               the peering connection (a maximum of one).
        :param pulumi.Input[bool] auto_accept: Accept the peering (both VPCs need to be in the same AWS account).
        :param pulumi.Input[str] peer_owner_id: The AWS account ID of the owner of the peer VPC.
               Defaults to the account ID the [AWS provider][1] is currently connected to.
        :param pulumi.Input[str] peer_region: The region of the accepter VPC of the [VPC Peering Connection]. `auto_accept` must be `false`,
               and use the `aws_vpc_peering_connection_accepter` to manage the accepter side.
        :param pulumi.Input[str] peer_vpc_id: The ID of the VPC with which you are creating the VPC Peering Connection.
        :param pulumi.Input[dict] requester: A optional configuration block that allows for [VPC Peering Connection]
               (http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide) options to be set for the VPC that requests
               the peering connection (a maximum of one).
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the resource.
        :param pulumi.Input[str] vpc_id: The ID of the requester VPC.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if not resource_name:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(resource_name, str):
            raise TypeError('Expected resource name to be a string')
        if opts and not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        __props__['accepter'] = accepter

        __props__['auto_accept'] = auto_accept

        __props__['peer_owner_id'] = peer_owner_id

        __props__['peer_region'] = peer_region

        if peer_vpc_id is None:
            raise TypeError('Missing required property peer_vpc_id')
        __props__['peer_vpc_id'] = peer_vpc_id

        __props__['requester'] = requester

        __props__['tags'] = tags

        if vpc_id is None:
            raise TypeError('Missing required property vpc_id')
        __props__['vpc_id'] = vpc_id

        __props__['accept_status'] = None

        super(VpcPeeringConnection, __self__).__init__(
            'aws:ec2/vpcPeeringConnection:VpcPeeringConnection',
            resource_name,
            __props__,
            opts)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

