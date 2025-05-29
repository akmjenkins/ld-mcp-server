// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users.flags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}',
  operationId: 'getUserFlagSetting',
};

export const tool: Tool = {
  name: 'retrieve_users_v2_api_flags',
  description:
    "Get a single flag setting for a user by flag key. <br /><br />The `_value` is the flag variation that the user receives. The `setting` indicates whether you've explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled.",
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
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  return client.api.v2.users.flags.retrieve(featureFlagKey, body);
};

export default { metadata, tool, handler };
