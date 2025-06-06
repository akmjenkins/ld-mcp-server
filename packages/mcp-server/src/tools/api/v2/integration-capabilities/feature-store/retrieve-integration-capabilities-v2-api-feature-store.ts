// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.feature_store',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}',
  operationId: 'getIntegrationDeliveryConfigurationById',
};

export const tool: Tool = {
  name: 'retrieve_integration_capabilities_v2_api_feature_store',
  description: 'Get delivery configuration by ID.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      integrationKey: {
        type: 'string',
        description: 'The integration key',
      },
      id: {
        type: 'string',
        description: 'The configuration ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.api.v2.integrationCapabilities.featureStore.retrieve(id, body));
};

export default { metadata, tool, handler };
