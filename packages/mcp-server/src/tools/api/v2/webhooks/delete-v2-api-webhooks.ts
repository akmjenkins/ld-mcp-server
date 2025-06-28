// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.webhooks',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/webhooks/{id}',
  operationId: 'deleteWebhook',
};

export const tool: Tool = {
  name: 'delete_v2_api_webhooks',
  description: 'Delete a webhook by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the webhook to delete',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.v2.webhooks.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
