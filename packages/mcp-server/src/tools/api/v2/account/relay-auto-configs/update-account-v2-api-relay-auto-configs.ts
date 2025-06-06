// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.account.relay_auto_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/account/relay-auto-configs/{id}',
  operationId: 'patchRelayAutoConfig',
};

export const tool: Tool = {
  name: 'update_account_v2_api_relay_auto_configs',
  description:
    'Update a Relay Proxy configuration. Updating a configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The relay auto config id',
      },
      patch: {
        type: 'array',
        description: 'A JSON patch representation of the change to make',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
      comment: {
        type: 'string',
        description: 'Optional comment',
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
  const { id, ...body } = args as any;
  return asTextContentResult(await client.api.v2.account.relayAutoConfigs.update(id, body));
};

export default { metadata, tool, handler };
