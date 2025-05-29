// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/{configKey}',
  operationId: 'patchAIConfig',
};

export const tool: Tool = {
  name: 'update_projects_v2_api_ai_configs',
  description:
    'Edit an existing AI Config.\n\nThe request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.\n\nHere\'s an example:\n  ```\n    {\n      "description": "Example updated description",\n      "tags": ["new-tag"]\n    }\n  ```\n',
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
      description: {
        type: 'string',
      },
      maintainerId: {
        type: 'string',
      },
      maintainerTeamKey: {
        type: 'string',
      },
      name: {
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
  const { configKey, ...body } = args as any;
  return client.api.v2.projects.aiConfigs.update(configKey, body);
};

export default { metadata, tool, handler };
