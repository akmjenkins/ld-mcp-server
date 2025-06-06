// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.approval_requests',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}',
  operationId: 'deleteApprovalRequestForFlag',
};

export const tool: Tool = {
  name: 'delete_environments_flags_projects_v2_api_approval_requests',
  description: 'Delete an approval request for a feature flag.',
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
        description: 'The feature flag approval request ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.api.v2.projects.flags.environments.approvalRequests.delete(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
