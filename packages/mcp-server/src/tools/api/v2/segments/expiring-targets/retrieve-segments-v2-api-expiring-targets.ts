// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.expiring_targets',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_segments_v2_api_expiring_targets',
  description: "Get a list of a segment's context targets that are scheduled for removal.",
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
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.segments.expiringTargets.retrieve(environmentKey, body);
};

export default { metadata, tool, handler };
