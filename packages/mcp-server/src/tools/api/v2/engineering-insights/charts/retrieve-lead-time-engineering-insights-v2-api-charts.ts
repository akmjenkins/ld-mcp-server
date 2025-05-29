// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.charts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/charts/lead-time',
  operationId: 'getLeadTimeChart',
};

export const tool: Tool = {
  name: 'retrieve_lead_time_engineering_insights_v2_api_charts',
  description:
    'Get lead time chart data. The engineering insights UI displays lead time data in the [lead time metric view](https://launchdarkly.com/docs/home/observability/lead-time).',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      applicationKey: {
        type: 'string',
        description: 'Comma separated list of application keys',
      },
      bucketMs: {
        type: 'integer',
        description:
          'Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds).',
      },
      bucketType: {
        type: 'string',
        description: 'Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`.',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      expand: {
        type: 'string',
        description: 'Options: `metrics`, `percentiles`.',
      },
      from: {
        type: 'integer',
        description: 'Unix timestamp in milliseconds. Default value is 7 days ago.',
      },
      groupBy: {
        type: 'string',
        description: 'Options: `application`, `stage`. Default: `stage`.',
      },
      to: {
        type: 'integer',
        description: 'Unix timestamp in milliseconds. Default value is now.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.engineeringInsights.charts.retrieveLeadTime(body);
};

export default { metadata, tool, handler };
