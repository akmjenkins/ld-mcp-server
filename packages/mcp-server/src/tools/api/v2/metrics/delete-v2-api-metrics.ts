// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.metrics',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/metrics/{projectKey}/{metricKey}',
  operationId: 'deleteMetric',
};

export const tool: Tool = {
  name: 'delete_v2_api_metrics',
  description: 'Delete a metric by key.',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { metricKey, ...body } = args as any;
  await client.api.v2.metrics.delete(metricKey, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
