// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    'Create a new variation for a given AI Config.\n\nThe <code>model</code> in the request body requires a <code>modelName</code> and <code>parameters</code>, for example:\n\n```\n  "model": {\n    "modelName": "claude-3-opus-20240229",\n    "parameters": {\n      "max_tokens": 1024\n    }\n  }\n```\n',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { configKey, ...body } = args as any;
  return client.api.v2.projects.aiConfigs.variations.create(configKey, body);
};

export default { metadata, tool, handler };
