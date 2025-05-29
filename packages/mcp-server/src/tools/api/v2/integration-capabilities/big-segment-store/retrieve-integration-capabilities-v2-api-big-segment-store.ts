// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.big_segment_store',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}',
  operationId: 'getBigSegmentStoreIntegration',
};

export const tool: Tool = {
  name: 'retrieve_integration_capabilities_v2_api_big_segment_store',
  description: 'Get a big segment store integration by ID.',
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
        description: 'The integration key, either `redis` or `dynamodb`',
      },
      integrationId: {
        type: 'string',
        description: 'The integration ID',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationId, ...body } = args as any;
  return client.api.v2.integrationCapabilities.bigSegmentStore.retrieve(integrationId, body);
};

export default { metadata, tool, handler };
