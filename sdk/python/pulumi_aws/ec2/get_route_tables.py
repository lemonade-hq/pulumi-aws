# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from .. import utilities, tables

class GetRouteTablesResult:
    """
    A collection of values returned by getRouteTables.
    """
    def __init__(__self__, ids=None, tags=None, id=None):
        if ids and not isinstance(ids, list):
            raise TypeError('Expected argument ids to be a list')
        __self__.ids = ids
        """
        A list of all the route table ids found. This data source will fail if none are found.
        """
        if tags and not isinstance(tags, dict):
            raise TypeError('Expected argument tags to be a dict')
        __self__.tags = tags
        if id and not isinstance(id, str):
            raise TypeError('Expected argument id to be a str')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

async def get_route_tables(filters=None,tags=None,vpc_id=None,opts=None):
    """
    This resource can be useful for getting back a list of route table ids to be referenced elsewhere.
    """
    __args__ = dict()

    __args__['filters'] = filters
    __args__['tags'] = tags
    __args__['vpcId'] = vpc_id
    __ret__ = await pulumi.runtime.invoke('aws:ec2/getRouteTables:getRouteTables', __args__, opts=opts)

    return GetRouteTablesResult(
        ids=__ret__.get('ids'),
        tags=__ret__.get('tags'),
        id=__ret__.get('id'))
