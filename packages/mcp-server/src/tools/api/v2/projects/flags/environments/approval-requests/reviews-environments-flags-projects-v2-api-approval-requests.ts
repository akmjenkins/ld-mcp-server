// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.approval_requests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'reviews_environments_flags_projects_v2_api_approval_requests',
  description: 'Review an approval request by approving or denying changes.',
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
      kind: {
        type: 'string',
        description: 'The type of review for this approval request',
        enum: ['approve', 'comment', 'decline'],
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.projects.flags.environments.approvalRequests.reviews(id, body);
};

export default { metadata, tool, handler };
