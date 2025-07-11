// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.expiring_user_targets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}',
  operationId: 'patchExpiringUserTargetsForSegment',
};

export const tool: Tool = {
  name: 'update_segments_v2_api_expiring_user_targets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n> ### Contexts are now available\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/patch-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).\n\nUpdate expiring user targets for a segment. Updating a user target expiration uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\nIf the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring user targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>\n\n#### addExpireUserTargetDate\n\nSchedules a date and time when LaunchDarkly will remove a user from segment targeting.\n\n##### Parameters\n\n- `targetType`: A segment's target type, must be either `included` or `excluded`.\n- `userKey`: The user key.\n- `value`: The date when the user should expire from the segment targeting, in Unix milliseconds.\n\n#### updateExpireUserTargetDate\n\nUpdates the date and time when LaunchDarkly will remove a user from segment targeting.\n\n##### Parameters\n\n- `targetType`: A segment's target type, must be either `included` or `excluded`.\n- `userKey`: The user key.\n- `value`: The new date when the user should expire from the segment targeting, in Unix milliseconds.\n- `version`: The segment version.\n\n#### removeExpireUserTargetDate\n\nRemoves the scheduled expiration for the user in the segment.\n\n##### Parameters\n\n- `targetType`: A segment's target type, must be either `included` or `excluded`.\n- `userKey`: The user key.\n\n</details>\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/expiring_user_target_patch_response',\n  $defs: {\n    expiring_user_target_patch_response: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          description: 'An array of expiring user targets',\n          items: {\n            $ref: '#/$defs/expiring_user_target_item'\n          }\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        errors: {\n          type: 'array',\n          description: 'An array of error messages for the failed instructions',\n          items: {\n            $ref: '#/$defs/expiring_target_error'\n          }\n        },\n        failedInstructions: {\n          type: 'integer',\n          description: 'The total count of the failed instructions sent in the PATCH request'\n        },\n        successfulInstructions: {\n          type: 'integer',\n          description: 'The total count of successful instructions sent in the PATCH request'\n        },\n        totalInstructions: {\n          type: 'integer',\n          description: 'The total count of instructions sent in the PATCH request'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    expiring_user_target_item: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this expiring user target'\n        },\n        _resourceId: {\n          type: 'object',\n          description: 'Details on the resource from which the user is expiring',\n          properties: {\n            environmentKey: {\n              type: 'string'\n            },\n            flagKey: {\n              type: 'string'\n            },\n            key: {\n              type: 'string'\n            },\n            kind: {\n              type: 'string'\n            },\n            projectKey: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        _version: {\n          type: 'integer',\n          description: 'The version of this expiring user target'\n        },\n        expirationDate: {\n          type: 'integer',\n          description: 'A timestamp for when the user target expires'\n        },\n        userKey: {\n          type: 'string',\n          description: 'A unique key used to represent the user'\n        },\n        targetType: {\n          type: 'string',\n          description: 'A segment\\'s target type. Included when expiring user targets are updated on a segment.'\n        },\n        variationId: {\n          type: 'string',\n          description: 'A unique key used to represent the flag variation. Included when expiring user targets are updated on a feature flag.'\n        }\n      },\n      required: [        '_id',\n        '_resourceId',\n        '_version',\n        'expirationDate',\n        'userKey'\n      ]\n    },\n    expiring_target_error: {\n      type: 'object',\n      properties: {\n        instructionIndex: {\n          type: 'integer',\n          description: 'The index of the PATCH instruction where the error occurred'\n        },\n        message: {\n          type: 'string',\n          description: 'The error message related to a failed PATCH instruction'\n        }\n      },\n      required: [        'instructionIndex',\n        'message'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      segmentKey: {
        type: 'string',
        description: 'The segment key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      instructions: {
        type: 'array',
        description: 'Semantic patch instructions for the desired changes to the resource',
        items: {
          type: 'object',
          properties: {
            kind: {
              type: 'string',
              description: "The type of change to make to the user's removal date from this segment",
              enum: ['addExpireUserTargetDate', 'updateExpireUserTargetDate', 'removeExpireUserTargetDate'],
            },
            targetType: {
              type: 'string',
              description: "The segment's target type",
              enum: ['included', 'excluded'],
            },
            userKey: {
              type: 'string',
              description: 'A unique key used to represent the user',
            },
            value: {
              type: 'integer',
              description:
                'The time, in Unix milliseconds, when the user should be removed from this segment. Required if <code>kind</code> is <code>addExpireUserTargetDate</code> or <code>updateExpireUserTargetDate</code>.',
            },
            version: {
              type: 'integer',
              description:
                'The version of the segment to update. Required if <code>kind</code> is <code>updateExpireUserTargetDate</code>.',
            },
          },
          required: ['kind', 'targetType', 'userKey'],
        },
      },
      comment: {
        type: 'string',
        description: 'Optional description of changes',
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
    await maybeFilter(args, await client.api.v2.segments.expiringUserTargets.update(environmentKey, body)),
  );
};

export default { metadata, tool, handler };
