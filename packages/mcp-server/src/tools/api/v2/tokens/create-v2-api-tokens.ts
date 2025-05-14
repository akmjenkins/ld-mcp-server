// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.tokens',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v2_api_tokens',
  description: 'Create a new access token.',
  inputSchema: {
    type: 'object',
    properties: {
      customRoleIds: {
        type: 'array',
        description: 'A list of custom role IDs to use as access limits for the access token',
        items: {
          type: 'string',
        },
      },
      defaultApiVersion: {
        type: 'integer',
        description: 'The default API version for this token',
      },
      description: {
        type: 'string',
        description: 'A description for the access token',
      },
      inlineRole: {
        type: 'array',
        description:
          'A JSON array of statements represented as JSON objects with three attributes: effect, resources, actions. May be used in place of a built-in or custom role.',
        items: {
          $ref: '#/$defs/statement_post',
        },
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the access token',
      },
      role: {
        type: 'string',
        description: 'Built-in role for the token',
        enum: ['reader', 'writer', 'admin'],
      },
      serviceToken: {
        type: 'boolean',
        description: 'Whether the token is a service token',
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
  return client.api.v2.tokens.create(body);
};

export default { metadata, tool, handler };
