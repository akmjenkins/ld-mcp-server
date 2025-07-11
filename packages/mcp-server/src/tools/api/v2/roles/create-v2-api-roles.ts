// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/roles',
  operationId: 'postCustomRole',
};

export const tool: Tool = {
  name: 'create_v2_api_roles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new custom role",
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'The custom role key',
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the custom role',
      },
      policy: {
        type: 'array',
        description: 'Resource statements for custom role',
        items: {
          $ref: '#/$defs/statement_post',
        },
      },
      basePermissions: {
        type: 'string',
        description:
          'Base permissions to use for this role. Only applicable to roles created prior to October 2024.',
        enum: ['reader', 'no_access'],
      },
      description: {
        type: 'string',
        description: 'Description of custom role',
      },
      resourceCategory: {
        type: 'string',
        description:
          'The category of resources this role is intended to manage. Can be <code>organization</code>, <code>project</code>, or <code>any</code>. This field is immutable.',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.roles.create(body));
};

export default { metadata, tool, handler };
