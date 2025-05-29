// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}',
  operationId: 'deleteSegment',
};

export const tool: Tool = {
  name: 'delete_v2_api_segments',
  description: 'Delete a segment.',
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
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { segmentKey, ...body } = args as any;
  return client.api.v2.segments.delete(segmentKey, body);
};

export default { metadata, tool, handler };
