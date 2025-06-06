// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.big_segment_store',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/integration-capabilities/big-segment-store',
  operationId: 'getBigSegmentStoreIntegrations',
};

export const tool: Tool = {
  name: 'retrieve_big_segment_store_integration_capabilities_v2_api_big_segment_store',
  description: 'List all big segment store integrations.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(
    await client.api.v2.integrationCapabilities.bigSegmentStore.retrieveBigSegmentStore(),
  );
};

export default { metadata, tool, handler };
