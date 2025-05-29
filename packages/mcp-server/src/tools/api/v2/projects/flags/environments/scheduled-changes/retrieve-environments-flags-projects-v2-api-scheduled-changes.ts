// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.scheduled_changes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}',
  operationId: 'getFeatureFlagScheduledChange',
};

export const tool: Tool = {
  name: 'retrieve_environments_flags_projects_v2_api_scheduled_changes',
  description: 'Get a scheduled change that will be applied to the feature flag by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      id: {
        type: 'string',
        description: 'The scheduled change id',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.projects.flags.environments.scheduledChanges.retrieve(id, body);
};

export default { metadata, tool, handler };
