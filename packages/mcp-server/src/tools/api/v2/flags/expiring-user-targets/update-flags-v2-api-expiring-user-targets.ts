// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.expiring_user_targets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}',
  operationId: 'patchExpiringUserTargets',
};

export const tool: Tool = {
  name: 'update_flags_v2_api_expiring_user_targets',
  description:
    "> ### Contexts are now available\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring context targets on feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-expiring-targets) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).\n\nSchedule a target for removal from individual targeting on a feature flag. The flag must already serve a variation to specific targets based on their key.\n\nYou can add, update, or remove a scheduled removal date. You can only schedule a target for removal on a single variation per flag.\n\nUpdating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring user targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>\n\n#### addExpireUserTargetDate\n\nAdds a date and time that LaunchDarkly will remove the user from the flag's individual targeting.\n\n##### Parameters\n\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag\n* `variationId`: ID of a variation on the flag\n* `userKey`: The user key for the user to remove from individual targeting\n\n#### updateExpireUserTargetDate\n\nUpdates the date and time that LaunchDarkly will remove the user from the flag's individual targeting.\n\n##### Parameters\n\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag\n* `variationId`: ID of a variation on the flag\n* `userKey`: The user key for the user to remove from individual targeting\n* `version`: (Optional) The version of the expiring user target to update. If included, update will fail if version doesn't match current version of the expiring user target.\n\n#### removeExpireUserTargetDate\n\nRemoves the scheduled removal of the user from the flag's individual targeting. The user will remain part of the flag's individual targeting until you explicitly remove them, or until you schedule another removal.\n\n##### Parameters\n\n* `variationId`: ID of a variation on the flag\n* `userKey`: The user key for the user to remove from individual targeting\n\n</details>\n",
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
      instructions: {
        type: 'array',
        description: 'The instructions to perform when updating',
        items: {
          type: 'object',
        },
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the change',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.flags.expiringUserTargets.update(environmentKey, body));
};

export default { metadata, tool, handler };
