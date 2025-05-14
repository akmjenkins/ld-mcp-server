// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.teams',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_v2_api_teams',
  description:
    'Delete a team by key. To learn more, read [Deleting teams](https://launchdarkly.com/docs/home/account/delete-teams).',
  inputSchema: {
    type: 'object',
    properties: {
      teamKey: {
        type: 'string',
        description: 'The team key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { teamKey, ...body } = args as any;
  return client.api.v2.teams.delete(teamKey);
};

export default { metadata, tool, handler };
