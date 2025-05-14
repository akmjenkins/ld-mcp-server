// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'ai_configs_projects_v2_api_ai_configs',
  description: 'Create a new AI Config within the given project.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      key: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      'LD-API-Version': {
        type: 'string',
        enum: ['beta'],
      },
      description: {
        type: 'string',
      },
      maintainerId: {
        type: 'string',
      },
      maintainerTeamKey: {
        type: 'string',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.aiConfigs.aiConfigs(projectKey, body);
};

export default { metadata, tool, handler };
