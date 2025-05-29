// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.account.relay_auto_configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/account/relay-auto-configs/{id}',
  operationId: 'getRelayProxyConfig',
};

export const tool: Tool = {
  name: 'retrieve_account_v2_api_relay_auto_configs',
  description: 'Get a single Relay Proxy auto config by ID.',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.account.relayAutoConfigs.retrieve(id);
};

export default { metadata, tool, handler };
