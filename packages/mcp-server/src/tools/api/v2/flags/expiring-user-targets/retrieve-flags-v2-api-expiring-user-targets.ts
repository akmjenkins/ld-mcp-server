// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.expiring_user_targets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}',
  operationId: 'getExpiringUserTargets',
};

export const tool: Tool = {
  name: 'retrieve_flags_v2_api_expiring_user_targets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n> ### Contexts are now available\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring context targets for feature flag](https://launchdarkly.com/docs/api/feature-flags/get-expiring-context-targets) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).\n\nGet a list of user targets on a feature flag that are scheduled for removal.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/expiring_user_target_get_response',\n  $defs: {\n    expiring_user_target_get_response: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          description: 'An array of expiring user targets',\n          items: {\n            $ref: '#/$defs/expiring_user_target_item'\n          }\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        }\n      },\n      required: [        'items'\n      ]\n    },\n    expiring_user_target_item: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this expiring user target'\n        },\n        _resourceId: {\n          type: 'object',\n          description: 'Details on the resource from which the user is expiring',\n          properties: {\n            environmentKey: {\n              type: 'string'\n            },\n            flagKey: {\n              type: 'string'\n            },\n            key: {\n              type: 'string'\n            },\n            kind: {\n              type: 'string'\n            },\n            projectKey: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        _version: {\n          type: 'integer',\n          description: 'The version of this expiring user target'\n        },\n        expirationDate: {\n          type: 'integer',\n          description: 'A timestamp for when the user target expires'\n        },\n        userKey: {\n          type: 'string',\n          description: 'A unique key used to represent the user'\n        },\n        targetType: {\n          type: 'string',\n          description: 'A segment\\'s target type. Included when expiring user targets are updated on a segment.'\n        },\n        variationId: {\n          type: 'string',\n          description: 'A unique key used to represent the flag variation. Included when expiring user targets are updated on a feature flag.'\n        }\n      },\n      required: [        '_id',\n        '_resourceId',\n        '_version',\n        'expirationDate',\n        'userKey'\n      ]\n    }\n  }\n}\n```",
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
    await maybeFilter(args, await client.api.v2.flags.expiringUserTargets.retrieve(environmentKey, body)),
  );
};

export default { metadata, tool, handler };
