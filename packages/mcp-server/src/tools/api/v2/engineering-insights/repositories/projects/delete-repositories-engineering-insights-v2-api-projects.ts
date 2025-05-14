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
  name: 'delete_repositories_engineering_insights_v2_api_projects',
  description: 'Remove repository project association',
  inputSchema: {
    type: 'object',
    properties: {
      repositoryKey: {
        type: 'string',
        description: 'The repository key',
      },
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.engineeringInsights.repositories.projects.delete(projectKey, body);
};

export default { metadata, tool, handler };
