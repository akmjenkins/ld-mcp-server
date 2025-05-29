// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.experimentation_settings',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/projects/{projectKey}/experimentation-settings',
  operationId: 'putExperimentationSettings',
};

export const tool: Tool = {
  name: 'update_experimentation_settings_projects_v2_api_experimentation_settings',
  description: 'Update experimentation settings for the given project',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      randomizationUnits: {
        type: 'array',
        description: 'An array of randomization units allowed for this project.',
        items: {
          type: 'object',
          properties: {
            randomizationUnit: {
              type: 'string',
              description:
                'The unit of randomization. Must match the key of an existing context kind in this project.',
            },
            standardRandomizationUnit: {
              type: 'string',
              description: "One of LaunchDarkly's fixed set of standard randomization units.",
              enum: ['guest', 'guestTime', 'organization', 'request', 'user', 'userTime'],
            },
            default: {
              type: 'boolean',
              description:
                'If true, any experiment iterations created within this project will default to using this randomization unit. A project can only have one default randomization unit.',
            },
          },
          required: ['randomizationUnit', 'standardRandomizationUnit'],
        },
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.experimentationSettings.updateExperimentationSettings(projectKey, body);
};

export default { metadata, tool, handler };
