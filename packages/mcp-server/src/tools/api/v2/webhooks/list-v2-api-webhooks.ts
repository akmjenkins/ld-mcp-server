// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/webhooks',
  operationId: 'getAllWebhooks',
};

export const tool: Tool = {
  name: 'list_v2_api_webhooks',
  description: 'Fetch a list of all webhooks.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.api.v2.webhooks.list());
};

export default { metadata, tool, handler };
