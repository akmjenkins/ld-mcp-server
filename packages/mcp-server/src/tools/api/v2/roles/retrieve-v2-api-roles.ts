// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.roles',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v2_api_roles',
  description: 'Get a single custom role by key or ID',
  inputSchema: {
    type: 'object',
    properties: {
      customRoleKey: {
        type: 'string',
        description: 'The custom role key or ID',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { customRoleKey, ...body } = args as any;
  return client.api.v2.roles.retrieve(customRoleKey);
};

export default { metadata, tool, handler };
