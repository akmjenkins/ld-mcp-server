// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.experimentation_settings',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_experimentation_settings_projects_v2_api_experimentation_settings',
  description: 'Get current experimentation settings for the given project',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.experimentationSettings.retrieveExperimentationSettings(projectKey);
};

export default { metadata, tool, handler };
