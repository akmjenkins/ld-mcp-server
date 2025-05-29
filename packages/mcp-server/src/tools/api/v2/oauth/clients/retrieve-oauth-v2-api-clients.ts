// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.oauth.clients',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/oauth/clients/{clientId}',
  operationId: 'getOAuthClientById',
};

export const tool: Tool = {
  name: 'retrieve_oauth_v2_api_clients',
  description: 'Get a registered OAuth 2.0 client by unique client ID.',
  inputSchema: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'The client ID',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { clientId, ...body } = args as any;
  return client.api.v2.oauth.clients.retrieve(clientId);
};

export default { metadata, tool, handler };
