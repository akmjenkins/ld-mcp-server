// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.insights.groups',
  operation: 'write',
  tags: [],
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { insightGroupKey, ...body } = args as any;
  return client.api.v2.engineeringInsights.insights.groups.delete(insightGroupKey);
};

export default { metadata, tool, handler };
