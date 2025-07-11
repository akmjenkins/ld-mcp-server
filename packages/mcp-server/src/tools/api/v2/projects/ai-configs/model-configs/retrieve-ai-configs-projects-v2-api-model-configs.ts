// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.model_configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}',
  operationId: 'getModelConfig',
};

export const tool: Tool = {
  name: 'retrieve_ai_configs_projects_v2_api_model_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet an AI model config by key.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/model_config',\n  $defs: {\n    model_config: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identifier for the model, for use with third party providers'\n        },\n        global: {\n          type: 'boolean',\n          description: 'Whether the model is global'\n        },\n        isRestricted: {\n          type: 'boolean',\n          description: 'Whether the model is restricted'\n        },\n        key: {\n          type: 'string',\n          description: 'Unique key for the model'\n        },\n        name: {\n          type: 'string',\n          description: 'Human readable name of the model'\n        },\n        tags: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        version: {\n          type: 'integer'\n        },\n        _access: {\n          $ref: '#/$defs/ai_configs_access'\n        },\n        costPerInputToken: {\n          type: 'number',\n          description: 'Cost per input token in USD'\n        },\n        costPerOutputToken: {\n          type: 'number',\n          description: 'Cost per output token in USD'\n        },\n        customParams: {\n          type: 'object'\n        },\n        icon: {\n          type: 'string',\n          description: 'Icon for the model'\n        },\n        params: {\n          type: 'object'\n        },\n        provider: {\n          type: 'string',\n          description: 'Provider for the model'\n        }\n      },\n      required: [        'id',\n        'global',\n        'isRestricted',\n        'key',\n        'name',\n        'tags',\n        'version'\n      ]\n    },\n    ai_configs_access: {\n      type: 'object',\n      properties: {\n        allowed: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        },\n        denied: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        }\n      },\n      required: [        'allowed',\n        'denied'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      modelConfigKey: {
        type: 'string',
      },
      'LD-API-Version': {
        type: 'string',
        enum: ['beta'],
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
  const { modelConfigKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.api.v2.projects.aiConfigs.modelConfigs.retrieve(modelConfigKey, body),
    ),
  );
};

export default { metadata, tool, handler };
