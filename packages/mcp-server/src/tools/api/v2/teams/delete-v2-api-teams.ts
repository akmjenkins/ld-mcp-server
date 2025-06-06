// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.teams',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/teams/{teamKey}',
  operationId: 'deleteTeam',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { teamKey, ...body } = args as any;
  await client.api.v2.teams.delete(teamKey);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
