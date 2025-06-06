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
  httpPath: '/api/v2/tokens',
  operationId: 'getTokens',
};

export const tool: Tool = {
  name: 'list_v2_api_tokens',
  description: 'Fetch a list of all access tokens.',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of access tokens to return in the response. Defaults to 25.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      showAll: {
        type: 'boolean',
        description:
          "If set to true, and the authentication access token has the 'Admin' role, personal access tokens for all members will be retrieved.",
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.tokens.list(body));
};

export default { metadata, tool, handler };
