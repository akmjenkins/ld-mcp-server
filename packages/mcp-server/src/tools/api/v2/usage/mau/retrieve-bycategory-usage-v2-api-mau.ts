// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.usage.mau',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/usage/mau/bycategory',
  operationId: 'getMauUsageByCategory',
};

export const tool: Tool = {
  name: 'retrieve_bycategory_usage_v2_api_mau',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either `browser`, `mobile`, or `backend`.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/series_list_rep',\n  $defs: {\n    series_list_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        metadata: {\n          type: 'array',\n          description: 'Metadata about each series',\n          items: {\n            type: 'object'\n          }\n        },\n        series: {\n          type: 'array',\n          description: 'An array of data points with timestamps. Each element of the array is an object with a \\'time\\' field, whose value is the timestamp, and one or more key fields. If there are multiple key fields, they are labeled \\'0\\', \\'1\\', and so on, and are explained in the <code>metadata</code>.',\n          items: {\n            type: 'object'\n          }\n        }\n      },\n      required: [        '_links',\n        'metadata',\n        'series'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description: 'The series of data returned starts from this timestamp. Defaults to 30 days ago.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.usage.mau.retrieveBycategory(body)));
};

export default { metadata, tool, handler };
