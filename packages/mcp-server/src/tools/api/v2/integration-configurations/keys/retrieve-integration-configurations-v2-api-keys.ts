// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_configurations.keys',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/integration-configurations/keys/{integrationKey}',
  operationId: 'getAllIntegrationConfigurations',
};

export const tool: Tool = {
  name: 'retrieve_integration_configurations_v2_api_keys',
  description:
    'Get all integration configurations with the specified integration key. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).).',
  inputSchema: {
    type: 'object',
    properties: {
      integrationKey: {
        type: 'string',
        description: 'Integration key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationKey, ...body } = args as any;
  return client.api.v2.integrationConfigurations.keys.retrieve(integrationKey);
};

export default { metadata, tool, handler };
