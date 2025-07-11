// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    sdkVersions: {\n      type: 'array',\n      description: 'The list of SDK names and versions',\n      items: {\n        type: 'object',\n        properties: {\n          sdk: {\n            type: 'string',\n            description: 'The SDK name, or \"Unknown\"'\n          },\n          version: {\n            type: 'string',\n            description: 'The version number, or \"Unknown\"'\n          }\n        },\n        required: [          'sdk',\n          'version'\n        ]\n      }\n    }\n  },\n  required: [    '_links',\n    'sdkVersions'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      source: {
        type: 'string',
        description: 'The source of streaming connections to describe. Must be either `client` or `server`.',
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
  const { source, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.usage.streams.retrieveSdkversions(source)),
  );
};

export default { metadata, tool, handler };
