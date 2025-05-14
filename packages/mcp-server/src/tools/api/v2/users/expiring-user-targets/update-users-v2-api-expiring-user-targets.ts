// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users.expiring_user_targets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_users_v2_api_expiring_user_targets',
  description:
    "Schedule the specified user for removal from individual targeting on one or more flags. The user must already be individually targeted for each flag.\n\nYou can add, update, or remove a scheduled removal date. You can only schedule a user for removal on a single variation per flag.\n\nUpdating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring user targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>\n\n#### addExpireUserTargetDate\n\nAdds a date and time that LaunchDarkly will remove the user from the flag's individual targeting.\n\n##### Parameters\n\n* `flagKey`: The flag key\n* `variationId`: ID of a variation on the flag\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag.\n\n#### updateExpireUserTargetDate\n\nUpdates the date and time that LaunchDarkly will remove the user from the flag's individual targeting.\n\n##### Parameters\n\n* `flagKey`: The flag key\n* `variationId`: ID of a variation on the flag\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag.\n* `version`: The version of the expiring user target to update. If included, update will fail if version doesn't match current version of the expiring user target.\n\n#### removeExpireUserTargetDate\n\nRemoves the scheduled removal of the user from the flag's individual targeting. The user will remain part of the flag's individual targeting until explicitly removed, or until another removal is scheduled.\n\n##### Parameters\n\n* `flagKey`: The flag key\n* `variationId`: ID of a variation on the flag\n\n</details>\n",
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
      instructions: {
        type: 'array',
        description: 'The instructions to perform when updating',
        items: {
          type: 'object',
          properties: {
            flagKey: {
              type: 'string',
              description: 'The flag key',
            },
            kind: {
              type: 'string',
              description:
                'The type of change to make to the removal date for this user from individual targeting for this flag.',
              enum: ['addExpireUserTargetDate', 'updateExpireUserTargetDate', 'removeExpireUserTargetDate'],
            },
            variationId: {
              type: 'string',
              description: 'ID of a variation on the flag',
            },
            value: {
              type: 'integer',
              description:
                'The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag. Required if <code>kind</code> is <code>addExpireUserTargetDate</code> or <code>updateExpireUserTargetDate</code>.',
            },
            version: {
              type: 'integer',
              description:
                "The version of the expiring user target to update. Optional and only used if <code>kind</code> is <code>updateExpireUserTargetDate</code>. If included, update will fail if version doesn't match current version of the expiring user target.",
            },
          },
          required: ['flagKey', 'kind', 'variationId'],
        },
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the change',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.users.expiringUserTargets.update(environmentKey, body);
};

export default { metadata, tool, handler };
