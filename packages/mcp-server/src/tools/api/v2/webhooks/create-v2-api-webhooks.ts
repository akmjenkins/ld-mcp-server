// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.webhooks',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v2_api_webhooks',
  description: 'Create a new webhook.',
  inputSchema: {
    type: 'object',
    properties: {
      on: {
        type: 'boolean',
        description: 'Whether or not this webhook is enabled.',
      },
      sign: {
        type: 'boolean',
        description:
          'If sign is false, the webhook does not include a signature header, and the secret can be omitted.',
      },
      url: {
        type: 'string',
        description: 'The URL of the remote webhook',
      },
      name: {
        type: 'string',
        description: 'A human-readable name for your webhook',
      },
      secret: {
        type: 'string',
        description:
          'If sign is true, and the secret attribute is omitted, LaunchDarkly automatically generates a secret for you.',
      },
      statements: {
        type: 'array',
        description:
          'Represents a Custom role policy, defining a resource kinds filter the webhook should respond to.',
        items: {
          $ref: '#/$defs/statement_post',
        },
      },
      tags: {
        type: 'array',
        description: 'List of tags for this webhook',
        items: {
          type: 'string',
        },
      },
    },
    $defs: {
      statement_post: {
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
              'Targeted actions are the actions NOT in this list. The <code>actions</code> field must be empty to use this field.',
            items: {
              type: 'string',
            },
          },
          notResources: {
            type: 'array',
            description:
              'Targeted resources are the resources NOT in this list. The <code>resources</code> field must be empty to use this field.',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.webhooks.create(body);
};

export default { metadata, tool, handler };
