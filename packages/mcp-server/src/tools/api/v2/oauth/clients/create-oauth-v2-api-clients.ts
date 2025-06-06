// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.oauth.clients',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/oauth/clients',
  operationId: 'createOAuth2Client',
};

export const tool: Tool = {
  name: 'create_oauth_v2_api_clients',
  description:
    'Create (register) a LaunchDarkly OAuth2 client. OAuth2 clients allow you to build custom integrations using LaunchDarkly as your identity provider.',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        description: 'Description of your OAuth 2.0 client.',
      },
      name: {
        type: 'string',
        description: 'The name of your new LaunchDarkly OAuth 2.0 client.',
      },
      redirectUri: {
        type: 'string',
        description:
          'The redirect URI for your new OAuth 2.0 application. This should be an absolute URL conforming with the standard HTTPS protocol.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.oauth.clients.create(body));
};

export default { metadata, tool, handler };
