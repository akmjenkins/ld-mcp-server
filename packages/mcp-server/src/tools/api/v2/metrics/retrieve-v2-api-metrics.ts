// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/metrics/{projectKey}/{metricKey}',
  operationId: 'getMetric',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_metrics',
  description:
    'Get information for a single metric from the specific project.\n\n### Expanding the metric response\nLaunchDarkly supports four fields for expanding the "Get metric" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n- `experiments` includes all experiments from the specific project that use the metric\n- `experimentCount` includes the number of experiments from the specific project that use the metric\n- `metricGroups` includes all metric groups from the specific project that use the metric\n- `metricGroupCount` includes the number of metric groups from the specific project that use the metric\n\nFor example, `expand=experiments` includes the `experiments` field in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      metricKey: {
        type: 'string',
        description: 'The metric key',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
      versionId: {
        type: 'string',
        description: 'The specific version ID of the metric',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { metricKey, ...body } = args as any;
  return client.api.v2.metrics.retrieve(metricKey, body);
};

export default { metadata, tool, handler };
