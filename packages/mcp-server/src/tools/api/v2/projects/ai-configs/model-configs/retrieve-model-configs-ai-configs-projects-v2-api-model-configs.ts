// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.model_configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/model-configs',
  operationId: 'listModelConfigs',
};

export const tool: Tool = {
  name: 'retrieve_model_configs_ai_configs_projects_v2_api_model_configs',
  description: 'Get all AI model configs for a project.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      'LD-API-Version': {
        type: 'string',
        enum: ['beta'],
      },
      restricted: {
        type: 'boolean',
        description: 'Whether to return only restricted models',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.aiConfigs.modelConfigs.retrieveModelConfigs(projectKey, body);
};

export default { metadata, tool, handler };
