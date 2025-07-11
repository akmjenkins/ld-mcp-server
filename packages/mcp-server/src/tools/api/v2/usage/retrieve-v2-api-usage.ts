// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.usage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/usage/events/{type}',
  operationId: 'getEventsUsage',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/series_list_rep',\n  $defs: {\n    series_list_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        metadata: {\n          type: 'array',\n          description: 'Metadata about each series',\n          items: {\n            type: 'object'\n          }\n        },\n        series: {\n          type: 'array',\n          description: 'An array of data points with timestamps. Each element of the array is an object with a \\'time\\' field, whose value is the timestamp, and one or more key fields. If there are multiple key fields, they are labeled \\'0\\', \\'1\\', and so on, and are explained in the <code>metadata</code>.',\n          items: {\n            type: 'object'\n          }\n        }\n      },\n      required: [        '_links',\n        'metadata',\n        'series'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: 'The type of event to retrieve. Must be either `received` or `published`.',
      },
      from: {
        type: 'string',
        description: 'The series of data returned starts from this timestamp. Defaults to 24 hours ago.',
      },
      to: {
        type: 'string',
        description: 'The series of data returned ends at this timestamp. Defaults to the current time.',
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
  const { type, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.usage.retrieve(type, body)));
};

export default { metadata, tool, handler };
