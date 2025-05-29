// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.destinations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/destinations/generate-warehouse-destination-key-pair',
  operationId: 'postGenerateWarehouseDestinationKeyPair',
};

export const tool: Tool = {
  name: 'generate_warehouse_destination_key_pair_v2_api_destinations',
  description:
    'Generate key pair to allow Data Export to authenticate into a Snowflake warehouse destination',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return client.api.v2.destinations.generateWarehouseDestinationKeyPair();
};

export default { metadata, tool, handler };
