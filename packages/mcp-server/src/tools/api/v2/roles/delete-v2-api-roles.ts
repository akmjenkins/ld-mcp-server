// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/roles/{customRoleKey}',
  operationId: 'deleteCustomRole',
};

export const tool: Tool = {
  name: 'delete_v2_api_roles',
  description: 'Delete a custom role by key',
  inputSchema: {
    type: 'object',
    properties: {
      customRoleKey: {
        type: 'string',
        description: 'The custom role key',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { customRoleKey, ...body } = args as any;
  await client.api.v2.roles.delete(customRoleKey);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
