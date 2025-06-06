// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.statistics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/code-refs/statistics',
  operationId: 'getRootStatistic',
};

export const tool: Tool = {
  name: 'list_code_refs_v2_api_statistics',
  description: 'Get links for all projects that have code references.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.api.v2.codeRefs.statistics.list());
};

export default { metadata, tool, handler };
