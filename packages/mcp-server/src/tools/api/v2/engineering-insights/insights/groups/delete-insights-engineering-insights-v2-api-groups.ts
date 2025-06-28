// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.insights.groups',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/engineering-insights/insights/groups/{insightGroupKey}',
  operationId: 'deleteInsightGroup',
};

export const tool: Tool = {
  name: 'delete_insights_engineering_insights_v2_api_groups',
  description: 'Delete insight group',
  inputSchema: {
    type: 'object',
    properties: {
      insightGroupKey: {
        type: 'string',
        description: 'The insight group key',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { insightGroupKey, ...body } = args as any;
  const response = await client.api.v2.engineeringInsights.insights.groups
    .delete(insightGroupKey)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
