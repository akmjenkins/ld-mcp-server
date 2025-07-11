// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSchedule a context for removal from individual targeting on a feature flag. The flag must already individually target the context.\n\nYou can add, update, or remove a scheduled removal date. You can only schedule a context for removal on a single variation per flag.\n\nUpdating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating expiring targets.\n\n<details>\n<summary>Click to expand instructions for <strong>updating expiring targets</strong></summary>\n\n#### addExpiringTarget\n\nAdds a date and time that LaunchDarkly will remove the context from the flag's individual targeting.\n\n##### Parameters\n\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the context from individual targeting for this flag\n* `variationId`: ID of a variation on the flag\n* `contextKey`: The context key for the context to remove from individual targeting\n* `contextKind`: The kind of context represented by the `contextKey`\n\nHere's an example:\n\n```json\n{\n  \"instructions\": [{\n    \"kind\": \"addExpiringTarget\",\n    \"value\": 1754006460000,\n    \"variationId\": \"4254742c-71ae-411f-a992-43b18a51afe0\",\n    \"contextKey\": \"user-key-123abc\",\n    \"contextKind\": \"user\"\n  }]\n}\n```\n\n#### updateExpiringTarget\n\nUpdates the date and time that LaunchDarkly will remove the context from the flag's individual targeting\n\n##### Parameters\n\n* `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the context from individual targeting for this flag\n* `variationId`: ID of a variation on the flag\n* `contextKey`: The context key for the context to remove from individual targeting\n* `contextKind`: The kind of context represented by the `contextKey`\n* `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn't match current version of the expiring target.\n\nHere's an example:\n\n```json\n{\n  \"instructions\": [{\n    \"kind\": \"updateExpiringTarget\",\n    \"value\": 1754006460000,\n    \"variationId\": \"4254742c-71ae-411f-a992-43b18a51afe0\",\n    \"contextKey\": \"user-key-123abc\",\n    \"contextKind\": \"user\"\n  }]\n}\n```\n\n#### removeExpiringTarget\n\nRemoves the scheduled removal of the context from the flag's individual targeting. The context will remain part of the flag's individual targeting until you explicitly remove it, or until you schedule another removal.\n\n##### Parameters\n\n* `variationId`: ID of a variation on the flag\n* `contextKey`: The context key for the context to remove from individual targeting\n* `contextKind`: The kind of context represented by the `contextKey`\n\nHere's an example:\n\n```json\n{\n  \"instructions\": [{\n    \"kind\": \"removeExpiringTarget\",\n    \"variationId\": \"4254742c-71ae-411f-a992-43b18a51afe0\",\n    \"contextKey\": \"user-key-123abc\",\n    \"contextKind\": \"user\"\n  }]\n}\n```\n\n</details>\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/expiring_target_patch_response',\n  $defs: {\n    expiring_target_patch_response: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          description: 'A list of the results from each instruction',\n          items: {\n            $ref: '#/$defs/expiring_target'\n          }\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        errors: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/expiring_target_error'\n          }\n        },\n        failedInstructions: {\n          type: 'integer'\n        },\n        successfulInstructions: {\n          type: 'integer'\n        },\n        totalInstructions: {\n          type: 'integer'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    expiring_target: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this expiring target'\n        },\n        _resourceId: {\n          type: 'object',\n          description: 'Details on the segment or flag this expiring target belongs to, its environment, and its project',\n          properties: {\n            environmentKey: {\n              type: 'string',\n              description: 'The environment key'\n            },\n            flagKey: {\n              type: 'string',\n              description: 'Deprecated, use <code>key</code> instead'\n            },\n            key: {\n              type: 'string',\n              description: 'The key of the flag or segment'\n            },\n            kind: {\n              type: 'string',\n              description: 'The type of resource, <code>flag</code> or <code>segment</code>'\n            },\n            projectKey: {\n              type: 'string',\n              description: 'The project key'\n            }\n          },\n          required: []\n        },\n        _version: {\n          type: 'integer',\n          description: 'The version of this expiring target'\n        },\n        contextKey: {\n          type: 'string',\n          description: 'A unique key used to represent the context to be removed'\n        },\n        contextKind: {\n          type: 'string',\n          description: 'The context kind of the context to be removed'\n        },\n        expirationDate: {\n          type: 'integer',\n          description: 'A timestamp for when the target expires'\n        },\n        targetType: {\n          type: 'string',\n          description: 'A segment\\'s target type, <code>included</code> or <code>excluded</code>. Included when expiring targets are updated on a segment.'\n        },\n        variationId: {\n          type: 'string',\n          description: 'A unique ID used to represent the flag variation. Included when expiring targets are updated on a feature flag.'\n        }\n      },\n      required: [        '_id',\n        '_resourceId',\n        '_version',\n        'contextKey',\n        'contextKind',\n        'expirationDate'\n      ]\n    },\n    expiring_target_error: {\n      type: 'object',\n      properties: {\n        instructionIndex: {\n          type: 'integer',\n          description: 'The index of the PATCH instruction where the error occurred'\n        },\n        message: {\n          type: 'string',\n          description: 'The error message related to a failed PATCH instruction'\n        }\n      },\n      required: [        'instructionIndex',\n        'message'\n      ]\n    }\n  }\n}\n```",
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
    await maybeFilter(args, await client.api.v2.flags.expiringTargets.update(environmentKey, body)),
  );
};

export default { metadata, tool, handler };
