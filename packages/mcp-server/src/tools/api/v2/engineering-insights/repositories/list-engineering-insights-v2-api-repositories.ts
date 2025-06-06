// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.repositories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/repositories',
  operationId: 'getInsightsRepositories',
};

export const tool: Tool = {
  name: 'list_engineering_insights_v2_api_repositories',
  description:
    'Get a list of repositories\n\n### Expanding the repository collection response\n\nLaunchDarkly supports expanding the repository collection response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `projects` includes details on all of the LaunchDarkly projects associated with each repository\n\nFor example, use `?expand=projects` to include the `projects` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      expand: {
        type: 'string',
        description: 'Expand properties in response. Options: `projects`',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.engineeringInsights.repositories.list(body));
};

export default { metadata, tool, handler };
