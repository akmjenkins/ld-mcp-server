// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate (register) a LaunchDarkly OAuth2 client. OAuth2 clients allow you to build custom integrations using LaunchDarkly as your identity provider.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/client',\n  $defs: {\n    client: {\n      type: 'object',\n      properties: {\n        _accountId: {\n          type: 'string',\n          description: 'The account ID the client is registered under'\n        },\n        _clientId: {\n          type: 'string',\n          description: 'The client\\'s unique ID'\n        },\n        _creationDate: {\n          type: 'integer',\n          description: 'Timestamp of client creation date'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        name: {\n          type: 'string',\n          description: 'Client name'\n        },\n        redirectUri: {\n          type: 'string',\n          description: 'The client\\'s redirect URI'\n        },\n        _clientSecret: {\n          type: 'string',\n          description: 'The client secret. This will only be shown upon creation.'\n        },\n        description: {\n          type: 'string',\n          description: 'Client description'\n        }\n      },\n      required: [        '_accountId',\n        '_clientId',\n        '_creationDate',\n        '_links',\n        'name',\n        'redirectUri'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.oauth.clients.create(body)));
};

export default { metadata, tool, handler };
