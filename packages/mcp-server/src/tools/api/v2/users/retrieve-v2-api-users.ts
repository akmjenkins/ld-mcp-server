// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v2_api_users',
  description:
    '> ### Use contexts instead\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/get-context-instances) instead of this endpoint.\n\nGet a user by key. The `user` object contains all attributes sent in `variation` calls for that key.\n',
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
      userKey: {
        type: 'string',
        description: 'The user key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { userKey, ...body } = args as any;
  return client.api.v2.users.retrieve(userKey, body);
};

export default { metadata, tool, handler };
