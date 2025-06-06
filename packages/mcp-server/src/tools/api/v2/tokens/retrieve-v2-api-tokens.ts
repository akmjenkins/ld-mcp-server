// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.tokens',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/tokens/{id}',
  operationId: 'getToken',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_tokens',
  description: 'Get a single access token by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the access token',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.api.v2.tokens.retrieve(id));
};

export default { metadata, tool, handler };
