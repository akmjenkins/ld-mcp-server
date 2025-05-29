// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.contexts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts',
  operationId: 'updateBigSegmentContextTargets',
};

export const tool: Tool = {
  name: 'create_segments_v2_api_contexts',
  description:
    'Update context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { segmentKey, ...body } = args as any;
  return client.api.v2.segments.contexts.create(segmentKey, body);
};

export default { metadata, tool, handler };
