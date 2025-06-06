// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.destinations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/destinations',
  operationId: 'getDestinations',
};

export const tool: Tool = {
  name: 'list_v2_api_destinations',
  description: 'Get a list of Data Export destinations configured across all projects and environments.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.api.v2.destinations.list());
};

export default { metadata, tool, handler };
