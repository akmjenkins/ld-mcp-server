// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/users/{projectKey}/{environmentKey}/{userKey}',
  operationId: 'deleteUser',
};

export const tool: Tool = {
  name: 'delete_v2_api_users',
  description:
    '> ### Use contexts instead\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Delete context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/delete-context-instances) instead of this endpoint.\n\nDelete a user by key.\n',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { userKey, ...body } = args as any;
  await client.api.v2.users.delete(userKey, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
