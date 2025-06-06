// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/tokens/{id}/reset',
  operationId: 'resetToken',
};

export const tool: Tool = {
  name: 'reset_v2_api_tokens',
  description: "Reset an access token's secret key with an optional expiry time for the old key.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the access token to update',
      },
      expiry: {
        type: 'integer',
        description:
          'An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.api.v2.tokens.reset(id, body));
};

export default { metadata, tool, handler };
