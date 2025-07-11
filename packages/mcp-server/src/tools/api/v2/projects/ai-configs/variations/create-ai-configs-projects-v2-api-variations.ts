// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.variations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations',
  operationId: 'postAIConfigVariation',
};

export const tool: Tool = {
  name: 'create_ai_configs_projects_v2_api_variations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new variation for a given AI Config.\n\nThe <code>model</code> in the request body requires a <code>modelName</code> and <code>parameters</code>, for example:\n\n```\n  \"model\": {\n    \"modelName\": \"claude-3-opus-20240229\",\n    \"parameters\": {\n      \"max_tokens\": 1024\n    }\n  }\n```\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ai_config_variation',\n  $defs: {\n    ai_config_variation: {\n      type: 'object',\n      properties: {\n        createdAt: {\n          type: 'integer'\n        },\n        key: {\n          type: 'string'\n        },\n        messages: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/message'\n          }\n        },\n        model: {\n          type: 'object'\n        },\n        name: {\n          type: 'string'\n        },\n        version: {\n          type: 'integer'\n        },\n        _archivedAt: {\n          type: 'integer'\n        },\n        _links: {\n          type: 'object',\n          properties: {\n            parent: {\n              $ref: '#/$defs/core_link'\n            }\n          },\n          required: [            'parent'\n          ]\n        },\n        _publishedAt: {\n          type: 'integer'\n        },\n        color: {\n          type: 'string'\n        },\n        comment: {\n          type: 'string'\n        },\n        modelConfigKey: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        }\n      },\n      required: [        'createdAt',\n        'key',\n        'messages',\n        'model',\n        'name',\n        'version'\n      ]\n    },\n    message: {\n      type: 'object',\n      properties: {\n        content: {\n          type: 'string'\n        },\n        role: {\n          type: 'string'\n        }\n      },\n      required: [        'content',\n        'role'\n      ]\n    },\n    core_link: {\n      type: 'object',\n      properties: {\n        href: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        }\n      },\n      required: [        'href',\n        'type'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      configKey: {
        type: 'string',
      },
      key: {
        type: 'string',
      },
      messages: {
        type: 'array',
        items: {
          $ref: '#/$defs/message',
        },
      },
      model: {
        type: 'object',
      },
      name: {
        type: 'string',
      },
      'LD-API-Version': {
        type: 'string',
        enum: ['beta'],
      },
      comment: {
        type: 'string',
        description: 'Human-readable description of this variation',
      },
      modelConfigKey: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      message: {
        type: 'object',
        properties: {
          content: {
            type: 'string',
          },
          role: {
            type: 'string',
          },
        },
        required: ['content', 'role'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { configKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.aiConfigs.variations.create(configKey, body)),
  );
};

export default { metadata, tool, handler };
