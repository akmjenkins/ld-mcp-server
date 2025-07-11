// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.destinations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/destinations',
  operationId: 'getDestinations',
};

export const tool: Tool = {
  name: 'list_v2_api_destinations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of Data Export destinations configured across all projects and environments.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    items: {\n      type: 'array',\n      description: 'An array of Data Export destinations',\n      items: {\n        $ref: '#/$defs/destination'\n      }\n    }\n  },\n  required: [],\n  $defs: {\n    destination: {\n      type: 'object',\n      properties: {\n        _access: {\n          $ref: '#/$defs/access'\n        },\n        _id: {\n          type: 'string',\n          description: 'The ID of this Data Export destination'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        config: {\n          type: 'object',\n          description: 'An object with the configuration parameters required for the destination type'\n        },\n        kind: {\n          type: 'string',\n          description: 'The type of Data Export destination',\n          enum: [            'google-pubsub',\n            'kinesis',\n            'mparticle',\n            'segment',\n            'azure-event-hubs',\n            'snowflake-v2'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'A human-readable name for your Data Export destination'\n        },\n        on: {\n          type: 'boolean',\n          description: 'Whether the export is on, that is, the status of the integration'\n        },\n        version: {\n          type: 'number'\n        }\n      },\n      required: []\n    },\n    access: {\n      type: 'object',\n      properties: {\n        allowed: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        },\n        denied: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        }\n      },\n      required: [        'allowed',\n        'denied'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.destinations.list()));
};

export default { metadata, tool, handler };
