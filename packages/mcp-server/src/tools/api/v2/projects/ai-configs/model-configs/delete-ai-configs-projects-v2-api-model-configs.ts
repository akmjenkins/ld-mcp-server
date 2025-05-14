// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.model_configs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_ai_configs_projects_v2_api_model_configs',
  description: 'Delete an AI model config.',
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
  return client.api.v2.projects.aiConfigs.modelConfigs.delete(modelConfigKey, body);
};

export default { metadata, tool, handler };
