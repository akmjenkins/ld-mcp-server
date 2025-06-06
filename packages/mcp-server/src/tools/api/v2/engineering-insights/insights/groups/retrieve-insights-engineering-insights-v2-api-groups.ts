// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.insights.groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/insights/groups/{insightGroupKey}',
  operationId: 'getInsightGroup',
};

export const tool: Tool = {
  name: 'retrieve_insights_engineering_insights_v2_api_groups',
  description:
    'Get insight group\n\n### Expanding the insight group response\n\nLaunchDarkly supports expanding the insight group response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `scores` includes details on all of the scores used in the engineering insights metrics views for this group\n* `environment` includes details on each environment associated with this group\n\nFor example, use `?expand=scores` to include the `scores` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      insightGroupKey: {
        type: 'string',
        description: 'The insight group key',
      },
      expand: {
        type: 'string',
        description: 'Options: `scores`, `environment`',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { insightGroupKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.engineeringInsights.insights.groups.retrieve(insightGroupKey, body),
  );
};

export default { metadata, tool, handler };
