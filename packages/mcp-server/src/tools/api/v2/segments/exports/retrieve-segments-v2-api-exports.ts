// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.exports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID}',
  operationId: 'getBigSegmentExport',
};

export const tool: Tool = {
  name: 'retrieve_segments_v2_api_exports',
  description:
    'Returns information about a big segment export process. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.',
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
      exportID: {
        type: 'string',
        description: 'The export ID',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { exportID, ...body } = args as any;
  return client.api.v2.segments.exports.retrieve(exportID, body);
};

export default { metadata, tool, handler };
