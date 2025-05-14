// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.insights',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_scores_engineering_insights_v2_api_insights',
  description:
    'Return insights scores, based on the given parameters. This data is also used in engineering insights metrics views.',
  inputSchema: {
    type: 'object',
    properties: {
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      applicationKey: {
        type: 'string',
        description: 'Comma separated list of application keys',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.engineeringInsights.insights.retrieveScores(body);
};

export default { metadata, tool, handler };
