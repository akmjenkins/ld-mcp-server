// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.expiring_targets',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}',
  operationId: 'patchExpiringTargetsForSegment',
};

export const tool: Tool = {
  name: 'update_segments_v2_api_expiring_targets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\nUpdate expiring context targets for a segment. Updating a context target expiration uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\nIf the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring context targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring context targets</strong></summary>\n\n#### addExpiringTarget\n\nSchedules a date and time when LaunchDarkly will remove a context from segment targeting. The segment must already have the context as an individual target.\n\n##### Parameters\n\n- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.\n- `contextKey`: The context key.\n- `contextKind`: The kind of context being targeted.\n- `value`: The date when the context should expire from the segment targeting, in Unix milliseconds.\n\nHere's an example:\n\n```json\n{\n  \"instructions\": [{\n    \"kind\": \"addExpiringTarget\",\n    \"targetType\": \"included\",\n    \"contextKey\": \"user-key-123abc\",\n    \"contextKind\": \"user\",\n    \"value\": 1754092860000\n  }]\n}\n```\n\n#### updateExpiringTarget\n\nUpdates the date and time when LaunchDarkly will remove a context from segment targeting.\n\n##### Parameters\n\n- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.\n- `contextKey`: The context key.\n- `contextKind`: The kind of context being targeted.\n- `value`: The new date when the context should expire from the segment targeting, in Unix milliseconds.\n- `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn't match current version of the expiring target.\n\nHere's an example:\n\n```json\n{\n  \"instructions\": [{\n    \"kind\": \"updateExpiringTarget\",\n    \"targetType\": \"included\",\n    \"contextKey\": \"user-key-123abc\",\n    \"contextKind\": \"user\",\n    \"value\": 1754179260000\n  }]\n}\n```\n\n#### removeExpiringTarget\n\nRemoves the scheduled expiration for the context in the segment.\n\n##### Parameters\n\n- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.\n- `contextKey`: The context key.\n- `contextKind`: The kind of context being targeted.\n\nHere's an example:\n\n```json\n{\n  \"instructions\": [{\n    \"kind\": \"removeExpiringTarget\",\n    \"targetType\": \"included\",\n    \"contextKey\": \"user-key-123abc\",\n    \"contextKind\": \"user\",\n  }]\n}\n```\n\n</details>\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/expiring_target_patch_response',\n  $defs: {\n    expiring_target_patch_response: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          description: 'A list of the results from each instruction',\n          items: {\n            $ref: '#/$defs/expiring_target'\n          }\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        errors: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/expiring_target_error'\n          }\n        },\n        failedInstructions: {\n          type: 'integer'\n        },\n        successfulInstructions: {\n          type: 'integer'\n        },\n        totalInstructions: {\n          type: 'integer'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    expiring_target: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this expiring target'\n        },\n        _resourceId: {\n          type: 'object',\n          description: 'Details on the segment or flag this expiring target belongs to, its environment, and its project',\n          properties: {\n            environmentKey: {\n              type: 'string',\n              description: 'The environment key'\n            },\n            flagKey: {\n              type: 'string',\n              description: 'Deprecated, use <code>key</code> instead'\n            },\n            key: {\n              type: 'string',\n              description: 'The key of the flag or segment'\n            },\n            kind: {\n              type: 'string',\n              description: 'The type of resource, <code>flag</code> or <code>segment</code>'\n            },\n            projectKey: {\n              type: 'string',\n              description: 'The project key'\n            }\n          },\n          required: []\n        },\n        _version: {\n          type: 'integer',\n          description: 'The version of this expiring target'\n        },\n        contextKey: {\n          type: 'string',\n          description: 'A unique key used to represent the context to be removed'\n        },\n        contextKind: {\n          type: 'string',\n          description: 'The context kind of the context to be removed'\n        },\n        expirationDate: {\n          type: 'integer',\n          description: 'A timestamp for when the target expires'\n        },\n        targetType: {\n          type: 'string',\n          description: 'A segment\\'s target type, <code>included</code> or <code>excluded</code>. Included when expiring targets are updated on a segment.'\n        },\n        variationId: {\n          type: 'string',\n          description: 'A unique ID used to represent the flag variation. Included when expiring targets are updated on a feature flag.'\n        }\n      },\n      required: [        '_id',\n        '_resourceId',\n        '_version',\n        'contextKey',\n        'contextKind',\n        'expirationDate'\n      ]\n    },\n    expiring_target_error: {\n      type: 'object',\n      properties: {\n        instructionIndex: {\n          type: 'integer',\n          description: 'The index of the PATCH instruction where the error occurred'\n        },\n        message: {\n          type: 'string',\n          description: 'The error message related to a failed PATCH instruction'\n        }\n      },\n      required: [        'instructionIndex',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
    await maybeFilter(args, await client.api.v2.segments.expiringTargets.update(environmentKey, body)),
  );
};

export default { metadata, tool, handler };
