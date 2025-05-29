// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.expiring_user_targets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}',
  operationId: 'getExpiringUserTargets',
};

export const tool: Tool = {
  name: 'retrieve_flags_v2_api_expiring_user_targets',
  description:
    '\n> ### Contexts are now available\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring context targets for feature flag](https://launchdarkly.com/docs/api/feature-flags/get-expiring-context-targets) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).\n\nGet a list of user targets on a feature flag that are scheduled for removal.\n',
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
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.flags.expiringUserTargets.retrieve(environmentKey, body);
};

export default { metadata, tool, handler };
