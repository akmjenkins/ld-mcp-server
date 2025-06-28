// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.workflows',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}',
  operationId: 'deleteWorkflow',
};

export const tool: Tool = {
  name: 'delete_environments_flags_projects_v2_api_workflows',
  description: 'Delete a workflow from a feature flag.',
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
        description: 'The workflow id',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { workflowId, ...body } = args as any;
  const response = await client.api.v2.projects.flags.environments.workflows
    .delete(workflowId, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
