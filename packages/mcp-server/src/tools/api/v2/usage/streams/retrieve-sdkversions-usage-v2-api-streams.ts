// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.usage.streams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/usage/streams/{source}/sdkversions',
  operationId: 'getStreamUsageSdkversion',
};

export const tool: Tool = {
  name: 'retrieve_sdkversions_usage_v2_api_streams',
  description:
    'Get a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.',
  inputSchema: {
    type: 'object',
    properties: {
      source: {
        type: 'string',
        description: 'The source of streaming connections to describe. Must be either `client` or `server`.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { source, ...body } = args as any;
  return asTextContentResult(await client.api.v2.usage.streams.retrieveSdkversions(source));
};

export default { metadata, tool, handler };
