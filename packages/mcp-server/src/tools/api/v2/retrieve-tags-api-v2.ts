// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_tags_api_v2',
  description: 'Get a list of tags.',
  inputSchema: {
    type: 'object',
    properties: {
      archived: {
        type: 'boolean',
        description: 'Whether or not to return archived flags',
      },
      asOf: {
        type: 'string',
        description: 'The time to retrieve tags as of. Default is the current time.',
      },
      kind: {
        type: 'array',
        description:
          'Fetch tags associated with the specified resource type. Options are `flag`, `project`, `environment`, `segment`, `metric`. Returns all types by default.',
        items: {
          type: 'string',
        },
      },
      limit: {
        type: 'integer',
        description: 'The number of tags to return. Maximum is 1000.',
      },
      offset: {
        type: 'integer',
        description: 'The index of the first tag to return. Default is 0.',
      },
      pre: {
        type: 'string',
        description: 'Return tags with the specified prefix',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.retrieveTags(body);
};

export default { metadata, tool, handler };
