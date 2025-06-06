// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.variations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}',
  operationId: 'patchAIConfigVariation',
};

export const tool: Tool = {
  name: 'update_ai_configs_projects_v2_api_variations',
  description:
    'Edit an existing variation of an AI Config. This creates a new version of the variation.\n\nThe request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.\n\nHere\'s an example:\n```\n  {\n    "messages": [\n      {\n        "role": "system",\n        "content": "The new message"\n      }\n    ]\n  }\n```\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      configKey: {
        type: 'string',
      },
      variationKey: {
        type: 'string',
      },
      'LD-API-Version': {
        type: 'string',
        enum: ['beta'],
      },
      comment: {
        type: 'string',
        description: 'Human-readable description of what this patch changes',
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
      modelConfigKey: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      published: {
        type: 'boolean',
      },
      state: {
        type: 'string',
        description: "One of 'archived', 'published'",
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
  const { variationKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.aiConfigs.variations.update(variationKey, body));
};

export default { metadata, tool, handler };
