// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.approval_requests',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/approval-requests/{id}/reviews',
  operationId: 'postApprovalRequestReview',
};

export const tool: Tool = {
  name: 'reviews_v2_api_approval_requests',
  description: 'Review an approval request by approving or denying changes.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The approval request ID',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.api.v2.approvalRequests.reviews(id, body));
};

export default { metadata, tool, handler };
