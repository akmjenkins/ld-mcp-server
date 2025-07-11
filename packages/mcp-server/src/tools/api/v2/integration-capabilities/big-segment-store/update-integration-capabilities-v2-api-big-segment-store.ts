// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.big_segment_store',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath:
    '/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}',
  operationId: 'patchBigSegmentStoreIntegration',
};

export const tool: Tool = {
  name: 'update_integration_capabilities_v2_api_big_segment_store',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a big segment store integration. Updating a big segment store requires a [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/big_segment_store_integration',\n  $defs: {\n    big_segment_store_integration: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The integration ID'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources',\n          properties: {\n            environment: {\n              $ref: '#/$defs/link'\n            },\n            parent: {\n              $ref: '#/$defs/link'\n            },\n            project: {\n              $ref: '#/$defs/link'\n            },\n            self: {\n              $ref: '#/$defs/link'\n            }\n          },\n          required: [            'environment',\n            'parent',\n            'project',\n            'self'\n          ]\n        },\n        _status: {\n          type: 'object',\n          description: 'Details on the connection status of the persistent store integration',\n          properties: {\n            available: {\n              type: 'boolean',\n              description: 'Whether the persistent store integration is fully synchronized with the LaunchDarkly environment, and the <code>lastSync</code> occurred within a few minutes'\n            },\n            errors: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  message: {\n                    type: 'string'\n                  },\n                  statusCode: {\n                    type: 'integer'\n                  },\n                  timestamp: {\n                    type: 'integer'\n                  }\n                },\n                required: []\n              }\n            },\n            lastError: {\n              type: 'integer',\n              description: 'Timestamp of when the most recent synchronization error occurred, if any'\n            },\n            lastSync: {\n              type: 'integer',\n              description: 'Timestamp of when the most recent successful sync occurred between the persistent store integration and the LaunchDarkly environment.'\n            },\n            potentiallyStale: {\n              type: 'boolean',\n              description: 'Whether the persistent store integration may not be fully synchronized with the LaunchDarkly environment. <code>true</code> if the integration could be stale.'\n            }\n          },\n          required: []\n        },\n        config: {\n          type: 'object',\n          description: 'The delivery configuration for the given integration provider. Only included when requesting a single integration by ID. Refer to the <code>formVariables</code> field in the corresponding <code>manifest.json</code> for a full list of fields for each integration.'\n        },\n        environmentKey: {\n          type: 'string',\n          description: 'The environment key'\n        },\n        integrationKey: {\n          type: 'string',\n          description: 'The integration key',\n          enum: [            'redis',\n            'dynamodb'\n          ]\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the configuration'\n        },\n        on: {\n          type: 'boolean',\n          description: 'Whether the configuration is turned on'\n        },\n        projectKey: {\n          type: 'string',\n          description: 'The project key'\n        },\n        tags: {\n          type: 'array',\n          description: 'List of tags for this configuration',\n          items: {\n            type: 'string'\n          }\n        },\n        version: {\n          type: 'integer',\n          description: 'Version of the current configuration'\n        },\n        _access: {\n          $ref: '#/$defs/access'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        '_status',\n        'config',\n        'environmentKey',\n        'integrationKey',\n        'name',\n        'on',\n        'projectKey',\n        'tags',\n        'version'\n      ]\n    },\n    link: {\n      type: 'object',\n      properties: {\n        href: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    access: {\n      type: 'object',\n      properties: {\n        allowed: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        },\n        denied: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        }\n      },\n      required: [        'allowed',\n        'denied'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      integrationKey: {
        type: 'string',
        description: 'The integration key, either `redis` or `dynamodb`',
      },
      integrationId: {
        type: 'string',
        description: 'The integration ID',
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
  const { integrationId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.api.v2.integrationCapabilities.bigSegmentStore.update(integrationId, body),
    ),
  );
};

export default { metadata, tool, handler };
