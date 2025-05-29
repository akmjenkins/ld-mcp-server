// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Get an AI model config by key.',
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
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { modelConfigKey, ...body } = args as any;
  return client.api.v2.projects.aiConfigs.modelConfigs.retrieve(modelConfigKey, body);
};

export default { metadata, tool, handler };
