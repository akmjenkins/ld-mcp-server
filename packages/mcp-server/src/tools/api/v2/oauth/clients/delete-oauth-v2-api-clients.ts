// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.oauth.clients',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/oauth/clients/{clientId}',
  operationId: 'deleteOAuthClient',
};

export const tool: Tool = {
  name: 'delete_oauth_v2_api_clients',
  description: 'Delete an existing OAuth 2.0 client by unique client ID.',
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
  return client.api.v2.oauth.clients.delete(clientId);
};

export default { metadata, tool, handler };
