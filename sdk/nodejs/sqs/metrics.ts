// Copyright 2016-2018, Pulumi Corporation.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as pulumi from "@pulumi/pulumi";

import * as cloudwatch from "../cloudwatch";

import { Queue } from "./queue";

export module metrics {
    export type SqsMetricName =
        "ApproximateAgeOfOldestMessage" | "ApproximateNumberOfMessagesDelayed" |
        "ApproximateNumberOfMessagesNotVisible" | "ApproximateNumberOfMessagesVisible" |
        "NumberOfEmptyReceives" | "NumberOfMessagesDeleted" |
        "NumberOfMessagesReceived" | "NumberOfMessagesSent" | "SentMessageSize";

    /**
     * Creates an AWS/SQS metric with the requested [metricName]. See
     * https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-monitoring-using-cloudwatch.html
     * for list of all metric-names.
     *
     * Note, individual metrics can easily be obtained without supplying the name using the other
     * [metricXXX] functions.
     *
     * Amazon SQS and Amazon CloudWatch are integrated so you can use CloudWatch to view and analyze
     * metrics for your Amazon SQS queues. You can view and analyze your queues' metrics from the
     * Amazon SQS console, the CloudWatch console, using the AWS CLI, or using the CloudWatch API.
     * You can also set CloudWatch alarms for Amazon SQS metrics.
     *
     * CloudWatch metrics for your Amazon SQS queues are automatically collected and pushed to
     * CloudWatch every five minutes. These metrics are gathered on all queues that meet the
     * CloudWatch guidelines for being active. CloudWatch considers a queue to be active for up to
     * six hours if it contains any messages or if any action accesses it.
     *
     * The only dimension that Amazon SQS sends to CloudWatch is "QueueName"
     */
    function metric(metricName: SqsMetricName, change: cloudwatch.MetricChange = {}) {
        return new cloudwatch.Metric({
            namespace: "AWS/SQS",
            name: metricName,
            ...change,
        });
    }

    /**
     * The approximate age of the oldest non-deleted message in the queue.
     *
     * Note: For dead-letter queues, the value of ApproximateAgeOfOldestMessage is the longest time
     * that a message has been in the queue.
     *
     * Units: Seconds
     *
     * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
     * the Amazon SQS console)
     */
    export function approximateAgeOfOldestMessage(change: cloudwatch.MetricChange = {}) {
        return metric("ApproximateAgeOfOldestMessage", { unit: "Seconds", ...change });
    }

    /**
     * The number of messages in the queue that are delayed and not available for reading
     * immediately. This can happen when the queue is configured as a delay queue or when a message
     * has been sent with a delay parameter.
     *
     * Units: Count
     *
     * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
     * the Amazon SQS console)
     */
    export function approximateNumberOfMessagesDelayed(change: cloudwatch.MetricChange = {}) {
        return metric("ApproximateNumberOfMessagesDelayed", { unit: "Count", ...change });
    }

    /**
     * The number of messages that are in flight. Messages are considered to be in flight if they
     * have been sent to a client but have not yet been deleted or have not yet reached the end of
     * their visibility window.
     *
     * Units: Count
     *
     * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
     * the Amazon SQS console)
     */
    export function approximateNumberOfMessagesNotVisible(change: cloudwatch.MetricChange = {}) {
        return metric("ApproximateNumberOfMessagesNotVisible", { unit: "Count", ...change });
    }

    /**
     * The number of messages available for retrieval from the queue.
     *
     * Units: Count
     *
     * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
     * the Amazon SQS console)
     */
    export function approximateNumberOfMessagesVisible(change: cloudwatch.MetricChange = {}) {
        return metric("ApproximateNumberOfMessagesVisible", { unit: "Count", ...change });
    }

    /**
     * The number of ReceiveMessage API calls that did not return a message.
     *
     * Units: Count
     *
     * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
     * the Amazon SQS console)
     */
    export function numberOfEmptyReceives(change: cloudwatch.MetricChange = {}) {
        return metric("NumberOfEmptyReceives", { unit: "Count", ...change });
    }

    /**
     * The number of messages deleted from the queue.
     *
     * Amazon SQS emits the NumberOfMessagesDeleted metric for every successful deletion operation
     * that uses a valid receipt handle, including duplicate deletions. The following scenarios
     * might cause the value of the NumberOfMessagesDeleted metric to be higher than expected:
     *
     * * Calling the DeleteMessage action on different receipt handles that belong to the same
     *   message: If the message is not processed before the visibility timeout expires, the message
     *   becomes available to other consumers that can process it and delete it again, increasing
     *   the value of the NumberOfMessagesDeleted metric.
     *
     * * Calling the DeleteMessage action on the same receipt handle: If the message is processed
     *   and deleted but you call the DeleteMessage action again using the same receipt handle, a
     *   success status is returned, increasing the value of the NumberOfMessagesDeleted metric.
     *
     * Units: Count
     *
     * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
     * the Amazon SQS console)
     */
    export function numberOfMessagesDeleted(change: cloudwatch.MetricChange = {}) {
        return metric("NumberOfMessagesDeleted", { unit: "Count", ...change });
    }

    /**
     * The number of messages returned by calls to the ReceiveMessage action.
     */
    export function numberOfMessagesReceived(change: cloudwatch.MetricChange = {}) {
        return metric("NumberOfMessagesReceived", { unit: "Count", ...change });
    }

    /**
     * The number of messages added to a queue.
     *
     * Units: Count
     *
     * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
     * the Amazon SQS console)
     */
    export function numberOfMessagesSent(change: cloudwatch.MetricChange = {}) {
        return metric("NumberOfMessagesSent", { unit: "Count", ...change });
    }

    /**
     * The size of messages added to a queue.
     *
     * Units: Bytes
     *
     * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
     * the Amazon SQS console)
     */
    export function sentMessageSize(change: cloudwatch.MetricChange = {}) {
        return metric("SentMessageSize", { unit: "Bytes", ...change });
    }
}

declare module "./queue" {
    interface Queue {
        /**
         * Direct access to create metrics for this specific [sqs.Queue].
         */
        metrics: {
            /**
             * The approximate age of the oldest non-deleted message in the queue.
             *
             * Note: For dead-letter queues, the value of ApproximateAgeOfOldestMessage is the longest time
             * that a message has been in the queue.
             *
             * Units: Seconds
             *
             * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
             * the Amazon SQS console)
             */
            approximateAgeOfOldestMessage(change?: cloudwatch.MetricChange): cloudwatch.Metric;

            /**
             * The number of messages in the queue that are delayed and not available for reading
             * immediately. This can happen when the queue is configured as a delay queue or when a message
             * has been sent with a delay parameter.
             *
             * Units: Count
             *
             * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
             * the Amazon SQS console)
             */
            approximateNumberOfMessagesDelayed(change?: cloudwatch.MetricChange): cloudwatch.Metric;

            /**
             * The number of messages that are in flight. Messages are considered to be in flight if they
             * have been sent to a client but have not yet been deleted or have not yet reached the end of
             * their visibility window.
             *
             * Units: Count
             *
             * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
             * the Amazon SQS console)
             */
            approximateNumberOfMessagesNotVisible(change?: cloudwatch.MetricChange): cloudwatch.Metric;

            /**
             * The number of messages available for retrieval from the queue.
             *
             * Units: Count
             *
             * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
             * the Amazon SQS console)
             */
            approximateNumberOfMessagesVisible(change?: cloudwatch.MetricChange): cloudwatch.Metric;

            /**
             * The number of ReceiveMessage API calls that did not return a message.
             *
             * Units: Count
             *
             * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
             * the Amazon SQS console)
             */
            numberOfEmptyReceives(change?: cloudwatch.MetricChange): cloudwatch.Metric;

            /**
             * The number of messages deleted from the queue.
             *
             * Amazon SQS emits the NumberOfMessagesDeleted metric for every successful deletion operation
             * that uses a valid receipt handle, including duplicate deletions. The following scenarios
             * might cause the value of the NumberOfMessagesDeleted metric to be higher than expected:
             *
             * * Calling the DeleteMessage action on different receipt handles that belong to the same
             *   message: If the message is not processed before the visibility timeout expires, the message
             *   becomes available to other consumers that can process it and delete it again, increasing
             *   the value of the NumberOfMessagesDeleted metric.
             *
             * * Calling the DeleteMessage action on the same receipt handle: If the message is processed
             *   and deleted but you call the DeleteMessage action again using the same receipt handle, a
             *   success status is returned, increasing the value of the NumberOfMessagesDeleted metric.
             *
             * Units: Count
             *
             * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
             * the Amazon SQS console)
             */
            numberOfMessagesDeleted(change?: cloudwatch.MetricChange): cloudwatch.Metric;

            /**
             * The number of messages returned by calls to the ReceiveMessage action.
             */
            numberOfMessagesReceived(change?: cloudwatch.MetricChange): cloudwatch.Metric;

            /**
             * The number of messages added to a queue.
             *
             * Units: Count
             *
             * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
             * the Amazon SQS console)
             */
            numberOfMessagesSent(change?: cloudwatch.MetricChange): cloudwatch.Metric;

            /**
             * The size of messages added to a queue.
             *
             * Units: Bytes
             *
             * Valid Statistics: Average, Minimum, Maximum, Sum, Data Samples (displays as Sample Count in
             * the Amazon SQS console)
             */
            sentMessageSize(change?: cloudwatch.MetricChange): cloudwatch.Metric;
        }
    }
}

// All instance metrics just make a normal AWS/SQS metric, except with the QueueName
// dimension set to this Queue's name.

Object.defineProperty(Queue.prototype, "metrics", {
    get: function (this: Queue) {
        const dimensions = { dimensions: { QueueName: this.name } };

        const result = {};
        for (const name in metrics) {
            result[name] = (change: cloudwatch.MetricChange) => metrics[name](dimensions).with(change);
        }
        return result;
    }
});
