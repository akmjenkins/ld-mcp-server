// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey}',
  operationId: 'getSegmentMembershipForUser',
};

export const tool: Tool = {
  name: 'retrieve_segments_v2_api_users',
  description:
    '> ### Contexts are now available\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).\n\nGet the membership status (included/excluded) for a given user in this big segment. This operation does not support standard segments.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      segmentKey: {
        type: 'string',
        description: 'The segment key',
      },
      userKey: {
        type: 'string',
        description: 'The user key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { userKey, ...body } = args as any;
  return client.api.v2.segments.users.retrieve(userKey, body);
};

export default { metadata, tool, handler };
