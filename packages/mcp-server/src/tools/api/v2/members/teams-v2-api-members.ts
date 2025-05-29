// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.members',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/members/{id}/teams',
  operationId: 'postMemberTeams',
};

export const tool: Tool = {
  name: 'teams_v2_api_members',
  description: 'Add one member to one or more teams.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The member ID',
      },
      teamKeys: {
        type: 'array',
        description: 'List of team keys',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.members.teams(id, body);
};

export default { metadata, tool, handler };
