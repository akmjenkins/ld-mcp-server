// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.exports',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_segments_v2_api_exports',
  description:
    'Starts a new export process for a big segment. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.',
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
  return client.api.v2.segments.exports.create(segmentKey, body);
};

export default { metadata, tool, handler };
