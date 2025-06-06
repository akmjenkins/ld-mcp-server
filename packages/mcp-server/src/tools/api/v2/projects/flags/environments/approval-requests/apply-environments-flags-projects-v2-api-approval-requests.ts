// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.approval_requests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply',
  operationId: 'postApprovalRequestApplyForFlag',
};

export const tool: Tool = {
  name: 'apply_environments_flags_projects_v2_api_approval_requests',
  description:
    'Apply an approval request that has been approved. This endpoint requires a feature flag key, and can only be used for applying approval requests on flags.',
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
      comment: {
        type: 'string',
        description: 'Optional comment about the approval request',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.flags.environments.approvalRequests.apply(id, body),
  );
};

export default { metadata, tool, handler };
