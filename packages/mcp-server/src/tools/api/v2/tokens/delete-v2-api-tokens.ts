// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/tokens/{id}',
  operationId: 'deleteToken',
};

export const tool: Tool = {
  name: 'delete_v2_api_tokens',
  description: 'Delete an access token by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the access token to update',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.tokens.delete(id);
};

export default { metadata, tool, handler };
