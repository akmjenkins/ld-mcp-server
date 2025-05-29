// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.approval_requests',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/approval-requests',
  operationId: 'getApprovalRequests',
};

export const tool: Tool = {
  name: 'retrieve_approval_requests_v2_api_approval_requests',
  description:
    'Get all approval requests.\n\n### Filtering approvals\n\nLaunchDarkly supports the `filter` query param for filtering, with the following fields:\n\n- `notifyMemberIds` filters for only approvals that are assigned to a member in the specified list. For example: `filter=notifyMemberIds anyOf ["memberId1", "memberId2"]`.\n- `requestorId` filters for only approvals that correspond to the ID of the member who requested the approval. For example: `filter=requestorId equals 457034721476302714390214`.\n- `resourceId` filters for only approvals that correspond to the the specified resource identifier. For example: `filter=resourceId equals proj/my-project:env/my-environment:flag/my-flag`.\n- `resourceKind` filters for only approvals that correspond to the specified resource kind. For example: `filter=resourceKind equals flag`. Currently, `flag` and `segment` resource kinds are supported.\n- `reviewStatus` filters for only approvals which correspond to the review status in the specified list. The possible values are `approved`, `declined`, and `pending`. For example: `filter=reviewStatus anyOf ["pending", "approved"]`.\n- `status` filters for only approvals which correspond to the status in the specified list. The possible values are `pending`, `scheduled`, `failed`, and `completed`. For example: `filter=status anyOf ["pending", "scheduled"]`.\n\nYou can also apply multiple filters at once. For example, setting `filter=projectKey equals my-project, reviewStatus anyOf ["pending","approved"]` matches approval requests which correspond to the `my-project` project key, and a review status of either `pending` or `approved`.\n\n### Expanding approval response\n\nLaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:\n\n- `flag` includes the flag the approval request belongs to\n- `project` includes the project the approval request belongs to\n- `environments` includes the environments the approval request relates to\n\nFor example, `expand=project,flag` includes the `project` and `flag` fields in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      expand: {
        type: 'string',
        description:
          'A comma-separated list of fields to expand in the response. Supported fields are explained above.',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above.',
      },
      limit: {
        type: 'integer',
        description: 'The number of approvals to return. Defaults to 20. Maximum limit is 200.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.approvalRequests.retrieveApprovalRequests(body);
};

export default { metadata, tool, handler };
