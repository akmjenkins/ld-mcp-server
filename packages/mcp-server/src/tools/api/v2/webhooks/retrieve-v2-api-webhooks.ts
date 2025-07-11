// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.webhooks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/webhooks/{id}',
  operationId: 'getWebhook',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_webhooks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single webhook by ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/webhook',\n  $defs: {\n    webhook: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this webhook'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        on: {\n          type: 'boolean',\n          description: 'Whether or not this webhook is enabled'\n        },\n        tags: {\n          type: 'array',\n          description: 'List of tags for this webhook',\n          items: {\n            type: 'string'\n          }\n        },\n        url: {\n          type: 'string',\n          description: 'The URL to which LaunchDarkly sends an HTTP POST payload for this webhook'\n        },\n        _access: {\n          $ref: '#/$defs/access'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-readable name for this webhook'\n        },\n        secret: {\n          type: 'string',\n          description: 'The secret for this webhook'\n        },\n        statements: {\n          type: 'array',\n          description: 'Represents a Custom role policy, defining a resource kinds filter the webhook responds to.',\n          items: {\n            $ref: '#/$defs/statement'\n          }\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'on',\n        'tags',\n        'url'\n      ]\n    },\n    access: {\n      type: 'object',\n      properties: {\n        allowed: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        },\n        denied: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        }\n      },\n      required: [        'allowed',\n        'denied'\n      ]\n    },\n    statement: {\n      type: 'object',\n      properties: {\n        effect: {\n          type: 'string',\n          description: 'Whether this statement should allow or deny actions on the resources.',\n          enum: [            'allow',\n            'deny'\n          ]\n        },\n        actions: {\n          type: 'array',\n          description: 'Actions to perform on a resource',\n          items: {\n            type: 'string'\n          }\n        },\n        notActions: {\n          type: 'array',\n          description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n          items: {\n            type: 'string'\n          }\n        },\n        notResources: {\n          type: 'array',\n          description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n          items: {\n            type: 'string'\n          }\n        },\n        resources: {\n          type: 'array',\n          description: 'Resource specifier strings',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'effect'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the webhook',
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
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.webhooks.retrieve(id)));
};

export default { metadata, tool, handler };
