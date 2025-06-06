// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    "\n> ### Contexts are now available\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/patch-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).\n\nUpdate expiring user targets for a segment. Updating a user target expiration uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\nIf the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring user targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>\n\n#### addExpireUserTargetDate\n\nSchedules a date and time when LaunchDarkly will remove a user from segment targeting.\n\n##### Parameters\n\n- `targetType`: A segment's target type, must be either `included` or `excluded`.\n- `userKey`: The user key.\n- `value`: The date when the user should expire from the segment targeting, in Unix milliseconds.\n\n#### updateExpireUserTargetDate\n\nUpdates the date and time when LaunchDarkly will remove a user from segment targeting.\n\n##### Parameters\n\n- `targetType`: A segment's target type, must be either `included` or `excluded`.\n- `userKey`: The user key.\n- `value`: The new date when the user should expire from the segment targeting, in Unix milliseconds.\n- `version`: The segment version.\n\n#### removeExpireUserTargetDate\n\nRemoves the scheduled expiration for the user in the segment.\n\n##### Parameters\n\n- `targetType`: A segment's target type, must be either `included` or `excluded`.\n- `userKey`: The user key.\n\n</details>\n",
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.segments.expiringUserTargets.update(environmentKey, body));
};

export default { metadata, tool, handler };
