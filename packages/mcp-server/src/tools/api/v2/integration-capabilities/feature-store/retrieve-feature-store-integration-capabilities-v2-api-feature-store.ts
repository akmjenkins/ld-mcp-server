// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.feature_store',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_feature_store_integration_capabilities_v2_api_feature_store',
  description: 'List all delivery configurations.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return client.api.v2.integrationCapabilities.featureStore.retrieveFeatureStore();
};

export default { metadata, tool, handler };
