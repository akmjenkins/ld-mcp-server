// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_configurations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_v2_api_integration_configurations',
  description:
    'Delete an integration configuration by ID. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)',
  inputSchema: {
    type: 'object',
    properties: {
      integrationConfigurationId: {
        type: 'string',
        description: 'The ID of the integration configuration to be deleted',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationConfigurationId, ...body } = args as any;
  return client.api.v2.integrationConfigurations.delete(integrationConfigurationId);
};

export default { metadata, tool, handler };
