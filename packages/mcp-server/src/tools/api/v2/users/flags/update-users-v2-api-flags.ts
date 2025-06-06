// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users.flags',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}',
  operationId: 'putFlagSetting',
};

export const tool: Tool = {
  name: 'update_users_v2_api_flags',
  description:
    "Enable or disable a feature flag for a user based on their key.\n\nOmitting the `setting` attribute from the request body, or including a `setting` of `null`, erases the current setting for a user.\n\nIf you previously patched the flag, and the patch included the user's data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user's key before, it calculates the flag values based on the user key alone.\n",
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
      comment: {
        type: 'string',
        description: 'Optional comment describing the change',
      },
      setting: {
        type: 'object',
        description: "The variation value to set for the context. Must match the flag's variation type.",
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  await client.api.v2.users.flags.update(featureFlagKey, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
