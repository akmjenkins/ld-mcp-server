// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.variations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}',
  operationId: 'getAIConfigVariation',
};

export const tool: Tool = {
  name: 'retrieve_ai_configs_projects_v2_api_variations',
  description:
    'Get an AI Config variation by key. The response includes all variation versions for the given variation key.',
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
  return asTextContentResult(await client.api.v2.projects.aiConfigs.variations.retrieve(variationKey, body));
};

export default { metadata, tool, handler };
