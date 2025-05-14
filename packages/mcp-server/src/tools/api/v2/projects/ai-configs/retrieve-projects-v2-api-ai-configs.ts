// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_projects_v2_api_ai_configs',
  description: 'Retrieve a specific AI Config by its key.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      configKey: {
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
  const { configKey, ...body } = args as any;
  return client.api.v2.projects.aiConfigs.retrieve(configKey, body);
};

export default { metadata, tool, handler };
