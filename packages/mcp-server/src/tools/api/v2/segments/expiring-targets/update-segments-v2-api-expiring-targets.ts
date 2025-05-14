// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.expiring_targets',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_segments_v2_api_expiring_targets',
  description:
    '\nUpdate expiring context targets for a segment. Updating a context target expiration uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\nIf the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring context targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring context targets</strong></summary>\n\n#### addExpiringTarget\n\nSchedules a date and time when LaunchDarkly will remove a context from segment targeting. The segment must already have the context as an individual target.\n\n##### Parameters\n\n- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.\n- `contextKey`: The context key.\n- `contextKind`: The kind of context being targeted.\n- `value`: The date when the context should expire from the segment targeting, in Unix milliseconds.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "addExpiringTarget",\n    "targetType": "included",\n    "contextKey": "user-key-123abc",\n    "contextKind": "user",\n    "value": 1754092860000\n  }]\n}\n```\n\n#### updateExpiringTarget\n\nUpdates the date and time when LaunchDarkly will remove a context from segment targeting.\n\n##### Parameters\n\n- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.\n- `contextKey`: The context key.\n- `contextKind`: The kind of context being targeted.\n- `value`: The new date when the context should expire from the segment targeting, in Unix milliseconds.\n- `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn\'t match current version of the expiring target.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "updateExpiringTarget",\n    "targetType": "included",\n    "contextKey": "user-key-123abc",\n    "contextKind": "user",\n    "value": 1754179260000\n  }]\n}\n```\n\n#### removeExpiringTarget\n\nRemoves the scheduled expiration for the context in the segment.\n\n##### Parameters\n\n- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.\n- `contextKey`: The context key.\n- `contextKind`: The kind of context being targeted.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "removeExpiringTarget",\n    "targetType": "included",\n    "contextKey": "user-key-123abc",\n    "contextKind": "user",\n  }]\n}\n```\n\n</details>\n',
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
            contextKey: {
              type: 'string',
              description: 'A unique key used to represent the context',
            },
            contextKind: {
              type: 'string',
              description: 'The kind of context',
            },
            kind: {
              type: 'string',
              description: "The type of change to make to the context's removal date from this segment",
              enum: ['addExpiringTarget', 'updateExpiringTarget', 'removeExpiringTarget'],
            },
            targetType: {
              type: 'string',
              description: "The segment's target type",
              enum: ['included', 'excluded'],
            },
            value: {
              type: 'integer',
              description:
                'The time, in Unix milliseconds, when the context should be removed from this segment. Required if <code>kind</code> is <code>addExpiringTarget</code> or <code>updateExpiringTarget</code>.',
            },
            version: {
              type: 'integer',
              description:
                "The version of the expiring target to update. Optional and only used if <code>kind</code> is <code>updateExpiringTarget</code>. If included, update will fail if version doesn't match current version of the expiring target.",
            },
          },
          required: ['contextKey', 'contextKind', 'kind', 'targetType'],
        },
      },
      comment: {
        type: 'string',
        description: 'Optional description of changes',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.segments.expiringTargets.update(environmentKey, body);
};

export default { metadata, tool, handler };
