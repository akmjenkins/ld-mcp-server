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
  httpMethod: 'patch',
  httpPath: '/api/v2/oauth/clients/{clientId}',
  operationId: 'patchOAuthClient',
};

export const tool: Tool = {
  name: 'update_oauth_v2_api_clients',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatch an existing OAuth 2.0 client by client ID. Updating an OAuth2 client uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates). Only `name`, `description`, and `redirectUri` may be patched.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/client',\n  $defs: {\n    client: {\n      type: 'object',\n      properties: {\n        _accountId: {\n          type: 'string',\n          description: 'The account ID the client is registered under'\n        },\n        _clientId: {\n          type: 'string',\n          description: 'The client\\'s unique ID'\n        },\n        _creationDate: {\n          type: 'integer',\n          description: 'Timestamp of client creation date'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        name: {\n          type: 'string',\n          description: 'Client name'\n        },\n        redirectUri: {\n          type: 'string',\n          description: 'The client\\'s redirect URI'\n        },\n        _clientSecret: {\n          type: 'string',\n          description: 'The client secret. This will only be shown upon creation.'\n        },\n        description: {\n          type: 'string',\n          description: 'Client description'\n        }\n      },\n      required: [        '_accountId',\n        '_clientId',\n        '_creationDate',\n        '_links',\n        'name',\n        'redirectUri'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      clientId: {
        type: 'string',
        description: 'The client ID',
      },
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      patch_operation: {
        type: 'object',
        properties: {
          op: {
            type: 'string',
            description: 'The type of operation to perform',
          },
          path: {
            type: 'string',
            description: 'A JSON Pointer string specifying the part of the document to operate on',
          },
          value: {
            type: 'object',
            description: 'A JSON value used in "add", "replace", and "test" operations',
          },
        },
        required: ['op', 'path'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { clientId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.oauth.clients.update(clientId, body)),
  );
};

export default { metadata, tool, handler };
