// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.roles',
  operation: 'write',
  tags: [],
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { customRoleKey, ...body } = args as any;
  return client.api.v2.roles.delete(customRoleKey);
};

export default { metadata, tool, handler };
