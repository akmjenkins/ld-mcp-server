// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.model_configs.restricted',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/model-configs/restricted',
  operationId: 'deleteRestrictedModels',
};

export const tool: Tool = {
  name: 'delete_all_model_configs_ai_configs_projects_v2_api_restricted',
  description: 'Remove AI models, by key, from the restricted list.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      keys: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      'LD-API-Version': {
        type: 'string',
        enum: ['beta'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  const response = await client.api.v2.projects.aiConfigs.modelConfigs.restricted
    .deleteAll(projectKey, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
