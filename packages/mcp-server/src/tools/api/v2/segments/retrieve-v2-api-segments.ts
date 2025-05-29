// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}',
  operationId: 'getSegment',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_segments',
  description:
    'Get a single segment by key.<br/><br/>Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.',
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
  return client.api.v2.segments.retrieve(segmentKey, body);
};

export default { metadata, tool, handler };
