# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class EventSourceMapping(pulumi.CustomResource):
    """
    Provides a Lambda event source mapping. This allows Lambda functions to get events from Kinesis, DynamoDB and SQS
    
    For information about Lambda and how to use it, see [What is AWS Lambda?][1]
    For information about event source mappings, see [CreateEventSourceMapping][2] in the API docs.
    """
    def __init__(__self__, __name__, __opts__=None, batch_size=None, enabled=None, event_source_arn=None, function_name=None, starting_position=None):
        """Create a EventSourceMapping resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if batch_size and not isinstance(batch_size, int):
            raise TypeError('Expected property batch_size to be a int')
        __self__.batch_size = batch_size
        """
        The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100`.
        """
        __props__['batchSize'] = batch_size

        if enabled and not isinstance(enabled, bool):
            raise TypeError('Expected property enabled to be a bool')
        __self__.enabled = enabled
        """
        Determines if the mapping will be enabled on creation. Defaults to `true`.
        """
        __props__['enabled'] = enabled

        if not event_source_arn:
            raise TypeError('Missing required property event_source_arn')
        elif not isinstance(event_source_arn, basestring):
            raise TypeError('Expected property event_source_arn to be a basestring')
        __self__.event_source_arn = event_source_arn
        """
        The event source ARN - can either be a Kinesis or DynamoDB stream.
        """
        __props__['eventSourceArn'] = event_source_arn

        if not function_name:
            raise TypeError('Missing required property function_name')
        elif not isinstance(function_name, basestring):
            raise TypeError('Expected property function_name to be a basestring')
        __self__.function_name = function_name
        """
        The name or the ARN of the Lambda function that will be subscribing to events.
        """
        __props__['functionName'] = function_name

        if starting_position and not isinstance(starting_position, basestring):
            raise TypeError('Expected property starting_position to be a basestring')
        __self__.starting_position = starting_position
        """
        The position in the stream where AWS Lambda should start reading. Must be one of either `TRIM_HORIZON` or `LATEST` if getting events from Kinesis or DynamoDB.  Must not be provided if getting events from SQS.
        """
        __props__['startingPosition'] = starting_position

        __self__.function_arn = pulumi.runtime.UNKNOWN
        """
        The the ARN of the Lambda function the event source mapping is sending events to. (Note: this is a computed value that differs from `function_name` above.)
        """
        __self__.last_modified = pulumi.runtime.UNKNOWN
        """
        The date this resource was last modified.
        """
        __self__.last_processing_result = pulumi.runtime.UNKNOWN
        """
        The result of the last AWS Lambda invocation of your Lambda function.
        """
        __self__.state = pulumi.runtime.UNKNOWN
        """
        The state of the event source mapping.
        """
        __self__.state_transition_reason = pulumi.runtime.UNKNOWN
        """
        The reason the event source mapping is in its current state.
        """
        __self__.uuid = pulumi.runtime.UNKNOWN
        """
        The UUID of the created event source mapping.
        """

        super(EventSourceMapping, __self__).__init__(
            'aws:lambda/eventSourceMapping:EventSourceMapping',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'batchSize' in outs:
            self.batch_size = outs['batchSize']
        if 'enabled' in outs:
            self.enabled = outs['enabled']
        if 'eventSourceArn' in outs:
            self.event_source_arn = outs['eventSourceArn']
        if 'functionArn' in outs:
            self.function_arn = outs['functionArn']
        if 'functionName' in outs:
            self.function_name = outs['functionName']
        if 'lastModified' in outs:
            self.last_modified = outs['lastModified']
        if 'lastProcessingResult' in outs:
            self.last_processing_result = outs['lastProcessingResult']
        if 'startingPosition' in outs:
            self.starting_position = outs['startingPosition']
        if 'state' in outs:
            self.state = outs['state']
        if 'stateTransitionReason' in outs:
            self.state_transition_reason = outs['stateTransitionReason']
        if 'uuid' in outs:
            self.uuid = outs['uuid']
