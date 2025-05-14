// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.workflows',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_environments_flags_projects_v2_api_workflows',
  description: 'Get a specific workflow by ID.',
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
      workflowId: {
        type: 'string',
        description: 'The workflow ID',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { workflowId, ...body } = args as any;
  return client.api.v2.projects.flags.environments.workflows.retrieve(workflowId, body);
};

export default { metadata, tool, handler };
