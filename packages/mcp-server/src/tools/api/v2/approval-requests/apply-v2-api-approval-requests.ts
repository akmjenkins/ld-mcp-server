// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.approval_requests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'apply_v2_api_approval_requests',
  description:
    'Apply an approval request that has been approved. This endpoint works with approval requests for either flag or segment changes.',
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
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.approvalRequests.apply(id, body);
};

export default { metadata, tool, handler };
