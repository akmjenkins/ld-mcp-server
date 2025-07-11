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
  httpPath: '/api/v2/engineering-insights/insights/groups',
  operationId: 'getInsightGroups',
};

export const tool: Tool = {
  name: 'list_insights_engineering_insights_v2_api_groups',
  description:
    'When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you\'re sure you don\'t need the data.\n\nList groups for which you are collecting insights\n\n### Expanding the insight groups collection response\n\nLaunchDarkly supports expanding the insight groups collection response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `scores` includes details on all of the scores used in the engineering insights metrics views for each group\n* `environment` includes details on each environment associated with each group\n* `metadata` includes counts of the number of insight groups with particular indicators, such as "excellent," "good," "fair," and so on.\n\nFor example, use `?expand=scores` to include the `scores` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      expand: {
        type: 'string',
        description: 'Options: `scores`, `environment`, `metadata`',
      },
      limit: {
        type: 'integer',
        description:
          'The number of insight groups to return. Default is 20. Must be between 1 and 20 inclusive.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      query: {
        type: 'string',
        description: 'Filter list of insights groups by name.',
      },
      sort: {
        type: 'string',
        description:
          'Sort flag list by field. Prefix field with <code>-</code> to sort in descending order. Allowed fields: name',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.engineeringInsights.insights.groups.list(body));
};

export default { metadata, tool, handler };
