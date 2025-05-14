// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users.expiring_user_targets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_users_v2_api_expiring_user_targets',
  description: 'Get a list of flags for which the given user is scheduled for removal.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      userKey: {
        type: 'string',
        description: 'The user key',
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
  return client.api.v2.users.expiringUserTargets.retrieve(environmentKey, body);
};

export default { metadata, tool, handler };
