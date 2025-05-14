// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_configurations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v2_api_integration_configurations',
  description:
    'Get integration configuration with the specified ID. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)',
  inputSchema: {
    type: 'object',
    properties: {
      integrationConfigurationId: {
        type: 'string',
        description: 'Integration configuration ID',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationConfigurationId, ...body } = args as any;
  return client.api.v2.integrationConfigurations.retrieve(integrationConfigurationId);
};

export default { metadata, tool, handler };
