// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/tags',
  operationId: 'getTags',
};

export const tool: Tool = {
  name: 'retrieve_tags_api_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of tags.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object'\n    },\n    items: {\n      type: 'array',\n      description: 'List of tags',\n      items: {\n        type: 'string'\n      }\n    },\n    totalCount: {\n      type: 'integer',\n      description: 'The total number of tags'\n    }\n  },\n  required: [    '_links',\n    'items'\n  ]\n}\n```",
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.retrieveTags(body)));
};

export default { metadata, tool, handler };
