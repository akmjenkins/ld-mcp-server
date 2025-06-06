// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.charts.deployments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/charts/deployments/frequency',
  operationId: 'getDeploymentFrequencyChart',
};

export const tool: Tool = {
  name: 'retrieve_frequency_charts_engineering_insights_v2_api_deployments',
  description:
    'Get deployment frequency chart data. Engineering insights displays deployment frequency data in the [deployment frequency metric view](https://launchdarkly.com/docs/home/observability/deployments).\n\n### Expanding the chart response\n\nLaunchDarkly supports expanding the chart response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `metrics` includes details on the metrics related to deployment frequency\n\nFor example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
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
        description: 'Options: `metrics`',
      },
      from: {
        type: 'string',
        description: 'Unix timestamp in milliseconds. Default value is 7 days ago.',
        format: 'date-time',
      },
      groupBy: {
        type: 'string',
        description: 'Options: `application`, `kind`',
      },
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      to: {
        type: 'string',
        description: 'Unix timestamp in milliseconds. Default value is now.',
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await client.api.v2.engineeringInsights.charts.deployments.retrieveFrequency(body),
  );
};

export default { metadata, tool, handler };
