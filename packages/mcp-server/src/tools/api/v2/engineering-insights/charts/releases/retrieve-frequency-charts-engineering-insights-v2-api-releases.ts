// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.charts.releases',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_frequency_charts_engineering_insights_v2_api_releases',
  description:
    'Get release frequency chart data. Engineering insights displays release frequency data in the [release frequency metric view](https://launchdarkly.com/docs/home/observability/releases).',
  inputSchema: {
    type: 'object',
    properties: {
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
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
      expand: {
        type: 'string',
        description: 'Options: `metrics`',
      },
      from: {
        type: 'string',
        description: 'Unix timestamp in milliseconds. Default value is 7 days ago.',
        format: 'date-time',
      },
      global: {
        type: 'string',
        description:
          'Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude`',
      },
      groupBy: {
        type: 'string',
        description: 'Property to group results by. Options: `impact`',
      },
      hasExperiments: {
        type: 'boolean',
        description:
          'Filter events to those associated with an experiment (`true`) or without an experiment (`false`)',
      },
      to: {
        type: 'string',
        description: 'Unix timestamp in milliseconds. Default value is now.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.engineeringInsights.charts.releases.retrieveFrequency(body);
};

export default { metadata, tool, handler };
