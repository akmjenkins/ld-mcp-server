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
  httpPath: '/api/v2/usage/mau/sdks',
  operationId: 'getMauSdksByType',
};

export const tool: Tool = {
  name: 'retrieve_sdks_usage_v2_api_mau',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    sdks: {\n      type: 'array',\n      description: 'The list of SDK names',\n      items: {\n        type: 'string'\n      }\n    }\n  },\n  required: [    '_links',\n    'sdks'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description:
          'The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in Unix milliseconds, for example, 1656694800000.',
      },
      sdktype: {
        type: 'string',
        description:
          'The type of SDK with monthly active users (MAU) to list. Must be either `client` or `server`.',
      },
      to: {
        type: 'string',
        description:
          'The data returned ends at this timestamp. Defaults to the current time. The timestamp is in Unix milliseconds, for example, 1657904400000.',
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.usage.mau.retrieveSDKs(body)));
};

export default { metadata, tool, handler };
