// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.account.relay_auto_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/account/relay-auto-configs/{id}',
  operationId: 'deleteRelayAutoConfig',
};

export const tool: Tool = {
  name: 'delete_account_v2_api_relay_auto_configs',
  description: 'Delete a Relay Proxy config.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The relay auto config id',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.api.v2.account.relayAutoConfigs.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
