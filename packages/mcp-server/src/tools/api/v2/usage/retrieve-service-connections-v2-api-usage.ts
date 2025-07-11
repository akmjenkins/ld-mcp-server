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
  httpPath: '/api/v2/usage/service-connections',
  operationId: 'getServiceConnectionUsage',
};

export const tool: Tool = {
  name: 'retrieve_service_connections_v2_api_usage',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a time-series array of the number of monthly service connections from your account. The granularity is always daily, with a maximum of 31 days.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/series_intervals_rep',\n  $defs: {\n    series_intervals_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        series: {\n          type: 'array',\n          description: 'An array of timestamps and values for a given meter',\n          items: {\n            type: 'object',\n            properties: {\n              time: {\n                type: 'integer',\n                description: 'The timestamp'\n              },\n              value: {\n                type: 'number',\n                description: 'The value for the given timestamp'\n              }\n            },\n            required: [              'time',\n              'value'\n            ]\n          }\n        }\n      },\n      required: [        '_links',\n        'series'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      environmentKey: {
        type: 'string',
        description:
          'An environment key. If specified, `projectKey` is required and results apply to the corresponding environment in this project.',
      },
      from: {
        type: 'string',
        description:
          'The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month.',
      },
      projectKey: {
        type: 'string',
        description:
          'A project key. If specified, `environmentKey` is required and results apply to the corresponding environment in this project.',
      },
      to: {
        type: 'string',
        description:
          'The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time.',
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
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.usage.retrieveServiceConnections(body)),
  );
};

export default { metadata, tool, handler };
