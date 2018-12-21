# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities, tables

class RouteTableAssociation(pulumi.CustomResource):
    """
    Manages an EC2 Transit Gateway Route Table association.
    """
    def __init__(__self__, __name__, __opts__=None, transit_gateway_attachment_id=None, transit_gateway_route_table_id=None):
        """Create a RouteTableAssociation resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, str):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not transit_gateway_attachment_id:
            raise TypeError('Missing required property transit_gateway_attachment_id')
        __props__['transit_gateway_attachment_id'] = transit_gateway_attachment_id

        if not transit_gateway_route_table_id:
            raise TypeError('Missing required property transit_gateway_route_table_id')
        __props__['transit_gateway_route_table_id'] = transit_gateway_route_table_id

        __props__['resource_id'] = None
        __props__['resource_type'] = None

        super(RouteTableAssociation, __self__).__init__(
            'aws:ec2transitgateway/routeTableAssociation:RouteTableAssociation',
            __name__,
            __props__,
            __opts__)


    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop
