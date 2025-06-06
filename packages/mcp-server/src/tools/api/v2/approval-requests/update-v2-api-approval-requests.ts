// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.approval_requests',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/approval-requests/{id}',
  operationId: 'patchApprovalRequest',
};

export const tool: Tool = {
  name: 'update_v2_api_approval_requests',
  description:
    'Perform a partial update to an approval request. Updating an approval request uses the semantic patch format. This endpoint works with approval requests for either flag or segment changes.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instruction for updating an approval request.\n\n#### addReviewers\n\nAdds the specified members and teams to the existing list of reviewers. You must include at least one of `notifyMemberIds` and `notifyTeamKeys`.\n\n##### Parameters\n\n- `notifyMemberIds`: (Optional) List of member IDs.\n- `notifyTeamKeys`: (Optional) List of team keys.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "addReviewers",\n    "notifyMemberIds": [ "user-key-123abc", "user-key-456def" ],\n    "notifyTeamKeys": [ "team-key-789abc"]\n  }]\n}\n```\n',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The approval ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.api.v2.approvalRequests.update(id));
};

export default { metadata, tool, handler };
