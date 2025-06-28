// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.variations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}',
  operationId: 'deleteAIConfigVariation',
};

export const tool: Tool = {
  name: 'delete_ai_configs_projects_v2_api_variations',
  description: 'Delete a specific variation of an AI Config by config key and variation key.',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { variationKey, ...body } = args as any;
  const response = await client.api.v2.projects.aiConfigs.variations.delete(variationKey, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
