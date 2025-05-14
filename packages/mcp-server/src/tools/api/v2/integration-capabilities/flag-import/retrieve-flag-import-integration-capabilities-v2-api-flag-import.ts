// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.flag_import',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_flag_import_integration_capabilities_v2_api_flag_import',
  description: 'List all flag import configurations.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return client.api.v2.integrationCapabilities.flagImport.retrieveFlagImport();
};

export default { metadata, tool, handler };
