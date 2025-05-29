// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.members',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/members/{id}',
  operationId: 'getMember',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_members',
  description:
    'Get a single account member by member ID.\n\n`me` is a reserved value for the `id` parameter that returns the caller\'s member information.\n\n### Expanding the member response\nLaunchDarkly supports one field for expanding the "Get member" response. By default, this field is **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n* `roleAttributes` includes a list of the role attributes that you have assigned to the member.\n\nFor example, `expand=roleAttributes` includes `roleAttributes` field in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The member ID',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.members.retrieve(id, body);
};

export default { metadata, tool, handler };
