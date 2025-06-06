// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.members',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/members/{id}',
  operationId: 'deleteMember',
};

export const tool: Tool = {
  name: 'delete_v2_api_members',
  description:
    'Delete a single account member by ID. Requests to delete account members will not work if SCIM is enabled for the account.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The member ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.api.v2.members.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
