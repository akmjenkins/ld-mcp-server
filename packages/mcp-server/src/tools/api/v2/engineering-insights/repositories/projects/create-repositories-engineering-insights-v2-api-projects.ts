// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.repositories.projects',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_repositories_engineering_insights_v2_api_projects',
  description: 'Associate repositories with projects',
  inputSchema: {
    type: 'object',
    properties: {
      mappings: {
        type: 'array',
        items: {
          $ref: '#/$defs/insights_repository_project',
        },
      },
    },
    $defs: {
      insights_repository_project: {
        type: 'object',
        properties: {
          projectKey: {
            type: 'string',
            description: 'The project key',
          },
          repositoryKey: {
            type: 'string',
            description: 'The repository key',
          },
        },
        required: ['projectKey', 'repositoryKey'],
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.engineeringInsights.repositories.projects.create(body);
};

export default { metadata, tool, handler };
