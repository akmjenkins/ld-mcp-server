// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.metric_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}',
  operationId: 'getMetricGroup',
};

export const tool: Tool = {
  name: 'retrieve_projects_v2_api_metric_groups',
  description:
    'Get information for a single metric group from the specific project.\n\n### Expanding the metric group response\nLaunchDarkly supports two fields for expanding the "Get metric group" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with either or both of the following fields:\n\n- `experiments` includes all experiments from the specific project that use the metric group\n- `experimentCount` includes the number of experiments from the specific project that use the metric group\n\nFor example, `expand=experiments` includes the `experiments` field in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      metricGroupKey: {
        type: 'string',
        description: 'The metric group key',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { metricGroupKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.metricGroups.retrieve(metricGroupKey, body));
};

export default { metadata, tool, handler };
