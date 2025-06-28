// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.metric_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}',
  operationId: 'deleteMetricGroup',
};

export const tool: Tool = {
  name: 'delete_projects_v2_api_metric_groups',
  description: 'Delete a metric group by key.',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { metricGroupKey, ...body } = args as any;
  const response = await client.api.v2.projects.metricGroups.delete(metricGroupKey, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
