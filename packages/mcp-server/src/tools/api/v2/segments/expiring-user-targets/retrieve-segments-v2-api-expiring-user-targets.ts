// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.expiring_user_targets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}',
  operationId: 'getExpiringUserTargetsForSegment',
};

export const tool: Tool = {
  name: 'retrieve_segments_v2_api_expiring_user_targets',
  description:
    "> ### Contexts are now available\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).\n\nGet a list of a segment's user targets that are scheduled for removal.\n",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      segmentKey: {
        type: 'string',
        description: 'The segment key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.segments.expiringUserTargets.retrieve(environmentKey, body);
};

export default { metadata, tool, handler };
