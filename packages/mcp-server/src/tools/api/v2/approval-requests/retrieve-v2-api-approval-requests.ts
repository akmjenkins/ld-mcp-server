// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.approval_requests',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v2_api_approval_requests',
  description:
    'Get an approval request by approval request ID.\n\n### Expanding approval response\n\nLaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:\n\n- `environments` includes the environments the approval request relates to\n- `flag` includes the flag the approval request belongs to\n- `project` includes the project the approval request belongs to\n- `resource` includes details on the resource (flag or segment) the approval request relates to\n\nFor example, `expand=project,flag` includes the `project` and `flag` fields in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The approval request ID',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of fields to expand in the response. Supported fields are explained above.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.approvalRequests.retrieve(id, body);
};

export default { metadata, tool, handler };
