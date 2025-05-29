// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.model_configs.restricted',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/model-configs/restricted',
  operationId: 'postRestrictedModels',
};

export const tool: Tool = {
  name: 'create_model_configs_ai_configs_projects_v2_api_restricted',
  description:
    'Add AI models, by key, to the restricted list. Keys are included in the response from the [List AI model configs](https://launchdarkly.com/docs/api/ai-configs-beta/list-model-configs) endpoint.',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.aiConfigs.modelConfigs.restricted.create(projectKey, body);
};

export default { metadata, tool, handler };
