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
  httpPath: '/api/v2/versions',
  operationId: 'getVersions',
};

export const tool: Tool = {
  name: 'retrieve_versions_api_v2',
  description:
    'Get the latest API version, the list of valid API versions in ascending order, and the version being used for this request. These are all in the external, date-based format.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.api.v2.retrieveVersions());
};

export default { metadata, tool, handler };
