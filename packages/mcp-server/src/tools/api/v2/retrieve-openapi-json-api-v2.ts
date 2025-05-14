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
  name: 'retrieve_openapi_json_api_v2',
  description:
    "Get the latest version of the OpenAPI specification for LaunchDarkly's API in JSON format. In the sandbox, click 'Play' and enter any string in the 'Authorization' field to test this endpoint.",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return client.api.v2.retrieveOpenAPIJson();
};

export default { metadata, tool, handler };
