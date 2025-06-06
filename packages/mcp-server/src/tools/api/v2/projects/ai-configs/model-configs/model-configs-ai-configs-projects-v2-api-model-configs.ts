// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.model_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/model-configs',
  operationId: 'postModelConfig',
};

export const tool: Tool = {
  name: 'model_configs_ai_configs_projects_v2_api_model_configs',
  description:
    'Create an AI model config. You can use this in any variation for any AI Config in your project.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      id: {
        type: 'string',
        description: 'Identifier for the model, for use with third party providers',
      },
      key: {
        type: 'string',
        description: 'Unique key for the model',
      },
      name: {
        type: 'string',
        description: 'Human readable name of the model',
      },
      'LD-API-Version': {
        type: 'string',
        enum: ['beta'],
      },
      costPerInputToken: {
        type: 'number',
        description: 'Cost per input token in USD',
      },
      costPerOutputToken: {
        type: 'number',
        description: 'Cost per output token in USD',
      },
      customParams: {
        type: 'object',
      },
      icon: {
        type: 'string',
        description: 'Icon for the model',
      },
      params: {
        type: 'object',
      },
      provider: {
        type: 'string',
        description: 'Provider for the model',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.aiConfigs.modelConfigs.modelConfigs(projectKey, body),
  );
};

export default { metadata, tool, handler };
