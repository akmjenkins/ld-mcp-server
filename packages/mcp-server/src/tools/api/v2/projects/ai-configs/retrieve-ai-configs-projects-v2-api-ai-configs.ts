// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs',
  operationId: 'getAIConfigs',
};

export const tool: Tool = {
  name: 'retrieve_ai_configs_projects_v2_api_ai_configs',
  description: 'Get a list of all AI Configs in the given project.',
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
      filter: {
        type: 'string',
        description: 'A filter to apply to the list of AI Configs.',
      },
      limit: {
        type: 'integer',
        description: 'The number of AI Configs to return.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      sort: {
        type: 'string',
        description: 'A sort to apply to the list of AI Configs.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.aiConfigs.retrieveAIConfigs(projectKey, body));
};

export default { metadata, tool, handler };
