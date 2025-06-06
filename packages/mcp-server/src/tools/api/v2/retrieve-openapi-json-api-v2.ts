// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/openapi.json',
  operationId: 'getOpenapiSpec',
};

export const tool: Tool = {
  name: 'retrieve_openapi_json_api_v2',
  description:
    "Get the latest version of the OpenAPI specification for LaunchDarkly's API in JSON format. In the sandbox, click 'Play' and enter any string in the 'Authorization' field to test this endpoint.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  await client.api.v2.retrieveOpenAPIJson();
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
