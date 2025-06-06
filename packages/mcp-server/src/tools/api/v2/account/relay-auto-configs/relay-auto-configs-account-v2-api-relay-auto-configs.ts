// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.account.relay_auto_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/account/relay-auto-configs',
  operationId: 'postRelayAutoConfig',
};

export const tool: Tool = {
  name: 'relay_auto_configs_account_v2_api_relay_auto_configs',
  description: 'Create a Relay Proxy config.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'A human-friendly name for the Relay Proxy configuration',
      },
      policy: {
        type: 'array',
        description:
          'A description of what environments and projects the Relay Proxy should include or exclude. To learn more, read [Write an inline policy](https://launchdarkly.com/docs/sdk/relay-proxy/automatic-configuration#write-an-inline-policy).',
        items: {
          $ref: '#/$defs/statement',
        },
      },
    },
    $defs: {
      statement: {
        type: 'object',
        properties: {
          effect: {
            type: 'string',
            description: 'Whether this statement should allow or deny actions on the resources.',
            enum: ['allow', 'deny'],
          },
          actions: {
            type: 'array',
            description: 'Actions to perform on a resource',
            items: {
              type: 'string',
            },
          },
          notActions: {
            type: 'array',
            description:
              'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',
            items: {
              type: 'string',
            },
          },
          notResources: {
            type: 'array',
            description:
              'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',
            items: {
              type: 'string',
            },
          },
          resources: {
            type: 'array',
            description: 'Resource specifier strings',
            items: {
              type: 'string',
            },
          },
        },
        required: ['effect'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.account.relayAutoConfigs.relayAutoConfigs(body));
};

export default { metadata, tool, handler };
