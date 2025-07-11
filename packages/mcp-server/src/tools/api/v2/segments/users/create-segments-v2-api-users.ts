// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users',
  operationId: 'updateBigSegmentTargets',
};

export const tool: Tool = {
  name: 'create_segments_v2_api_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate user context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      segmentKey: {
        type: 'string',
        description: 'The segment key',
      },
      excluded: {
        $ref: '#/$defs/segment_user_list',
      },
      included: {
        $ref: '#/$defs/segment_user_list',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      segment_user_list: {
        type: 'object',
        properties: {
          add: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
          remove: {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { segmentKey, ...body } = args as any;
  const response = await client.api.v2.segments.users.create(segmentKey, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
