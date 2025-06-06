// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.expiring_targets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}',
  operationId: 'patchExpiringTargets',
};

export const tool: Tool = {
  name: 'update_flags_v2_api_expiring_targets',
  description:
    'Schedule a context for removal from individual targeting on a feature flag. The flag must already individually target the context.\n\nYou can add, update, or remove a scheduled removal date. You can only schedule a context for removal on a single variation per flag.\n\nUpdating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring targets</strong></summary>\n\n#### addExpiringTarget\n\nAdds a date and time that LaunchDarkly will remove the context from the flag\'s individual targeting.\n\n##### Parameters\n\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the context from individual targeting for this flag\n* `variationId`: ID of a variation on the flag\n* `contextKey`: The context key for the context to remove from individual targeting\n* `contextKind`: The kind of context represented by the `contextKey`\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "addExpiringTarget",\n    "value": 1754006460000,\n    "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",\n    "contextKey": "user-key-123abc",\n    "contextKind": "user"\n  }]\n}\n```\n\n#### updateExpiringTarget\n\nUpdates the date and time that LaunchDarkly will remove the context from the flag\'s individual targeting\n\n##### Parameters\n\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the context from individual targeting for this flag\n* `variationId`: ID of a variation on the flag\n* `contextKey`: The context key for the context to remove from individual targeting\n* `contextKind`: The kind of context represented by the `contextKey`\n* `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn\'t match current version of the expiring target.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "updateExpiringTarget",\n    "value": 1754006460000,\n    "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",\n    "contextKey": "user-key-123abc",\n    "contextKind": "user"\n  }]\n}\n```\n\n#### removeExpiringTarget\n\nRemoves the scheduled removal of the context from the flag\'s individual targeting. The context will remain part of the flag\'s individual targeting until you explicitly remove it, or until you schedule another removal.\n\n##### Parameters\n\n* `variationId`: ID of a variation on the flag\n* `contextKey`: The context key for the context to remove from individual targeting\n* `contextKind`: The kind of context represented by the `contextKey`\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "removeExpiringTarget",\n    "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",\n    "contextKey": "user-key-123abc",\n    "contextKind": "user"\n  }]\n}\n```\n\n</details>\n',
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
  return asTextContentResult(await client.api.v2.flags.expiringTargets.update(environmentKey, body));
};

export default { metadata, tool, handler };
