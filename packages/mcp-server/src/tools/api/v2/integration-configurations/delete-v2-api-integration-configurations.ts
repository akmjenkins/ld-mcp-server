// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_configurations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/integration-configurations/{integrationConfigurationId}',
  operationId: 'deleteIntegrationConfiguration',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationConfigurationId, ...body } = args as any;
  const response = await client.api.v2.integrationConfigurations
    .delete(integrationConfigurationId)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
