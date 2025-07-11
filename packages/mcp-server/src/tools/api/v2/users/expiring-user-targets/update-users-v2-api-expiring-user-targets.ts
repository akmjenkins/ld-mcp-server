// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users.expiring_user_targets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}',
  operationId: 'patchExpiringFlagsForUser',
};

export const tool: Tool = {
  name: 'update_users_v2_api_expiring_user_targets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSchedule the specified user for removal from individual targeting on one or more flags. The user must already be individually targeted for each flag.\n\nYou can add, update, or remove a scheduled removal date. You can only schedule a user for removal on a single variation per flag.\n\nUpdating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring user targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>\n\n#### addExpireUserTargetDate\n\nAdds a date and time that LaunchDarkly will remove the user from the flag's individual targeting.\n\n##### Parameters\n\n* `flagKey`: The flag key\n* `variationId`: ID of a variation on the flag\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag.\n\n#### updateExpireUserTargetDate\n\nUpdates the date and time that LaunchDarkly will remove the user from the flag's individual targeting.\n\n##### Parameters\n\n* `flagKey`: The flag key\n* `variationId`: ID of a variation on the flag\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag.\n* `version`: The version of the expiring user target to update. If included, update will fail if version doesn't match current version of the expiring user target.\n\n#### removeExpireUserTargetDate\n\nRemoves the scheduled removal of the user from the flag's individual targeting. The user will remain part of the flag's individual targeting until explicitly removed, or until another removal is scheduled.\n\n##### Parameters\n\n* `flagKey`: The flag key\n* `variationId`: ID of a variation on the flag\n\n</details>\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/expiring_user_target_patch_response',\n  $defs: {\n    expiring_user_target_patch_response: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          description: 'An array of expiring user targets',\n          items: {\n            $ref: '#/$defs/expiring_user_target_item'\n          }\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        errors: {\n          type: 'array',\n          description: 'An array of error messages for the failed instructions',\n          items: {\n            $ref: '#/$defs/expiring_target_error'\n          }\n        },\n        failedInstructions: {\n          type: 'integer',\n          description: 'The total count of the failed instructions sent in the PATCH request'\n        },\n        successfulInstructions: {\n          type: 'integer',\n          description: 'The total count of successful instructions sent in the PATCH request'\n        },\n        totalInstructions: {\n          type: 'integer',\n          description: 'The total count of instructions sent in the PATCH request'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    expiring_user_target_item: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this expiring user target'\n        },\n        _resourceId: {\n          type: 'object',\n          description: 'Details on the resource from which the user is expiring',\n          properties: {\n            environmentKey: {\n              type: 'string'\n            },\n            flagKey: {\n              type: 'string'\n            },\n            key: {\n              type: 'string'\n            },\n            kind: {\n              type: 'string'\n            },\n            projectKey: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        _version: {\n          type: 'integer',\n          description: 'The version of this expiring user target'\n        },\n        expirationDate: {\n          type: 'integer',\n          description: 'A timestamp for when the user target expires'\n        },\n        userKey: {\n          type: 'string',\n          description: 'A unique key used to represent the user'\n        },\n        targetType: {\n          type: 'string',\n          description: 'A segment\\'s target type. Included when expiring user targets are updated on a segment.'\n        },\n        variationId: {\n          type: 'string',\n          description: 'A unique key used to represent the flag variation. Included when expiring user targets are updated on a feature flag.'\n        }\n      },\n      required: [        '_id',\n        '_resourceId',\n        '_version',\n        'expirationDate',\n        'userKey'\n      ]\n    },\n    expiring_target_error: {\n      type: 'object',\n      properties: {\n        instructionIndex: {\n          type: 'integer',\n          description: 'The index of the PATCH instruction where the error occurred'\n        },\n        message: {\n          type: 'string',\n          description: 'The error message related to a failed PATCH instruction'\n        }\n      },\n      required: [        'instructionIndex',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.users.expiringUserTargets.update(environmentKey, body)),
  );
};

export default { metadata, tool, handler };
