// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.insights',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/engineering-insights/insights/group',
  operationId: 'createInsightGroup',
};

export const tool: Tool = {
  name: 'group_engineering_insights_v2_api_insights',
  description: 'Create insight group',
  inputSchema: {
    type: 'object',
    properties: {
      environmentKey: {
        type: 'string',
        description: 'The environmentKey to be associated with the insight group',
      },
      key: {
        type: 'string',
        description: 'The key of the insight group',
      },
      name: {
        type: 'string',
        description: 'The name of the insight group',
      },
      projectKey: {
        type: 'string',
        description: 'The projectKey to be associated with the insight group',
      },
      applicationKeys: {
        type: 'array',
        description:
          'The application keys to associate with the insight group. If not provided, the insight group will include data from all applications.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.engineeringInsights.insights.group(body));
};

export default { metadata, tool, handler };
