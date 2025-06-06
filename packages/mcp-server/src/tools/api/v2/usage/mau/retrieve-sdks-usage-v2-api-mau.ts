// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    'Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.usage.mau.retrieveSDKs(body));
};

export default { metadata, tool, handler };
