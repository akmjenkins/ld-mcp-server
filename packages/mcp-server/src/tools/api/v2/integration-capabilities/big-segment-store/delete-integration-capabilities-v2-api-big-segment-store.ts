// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.big_segment_store',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath:
    '/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}',
  operationId: 'deleteBigSegmentStoreIntegration',
};

export const tool: Tool = {
  name: 'delete_integration_capabilities_v2_api_big_segment_store',
  description: 'Delete a persistent store integration. Each integration uses either Redis or DynamoDB.',
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
  return client.api.v2.integrationCapabilities.bigSegmentStore.delete(integrationId, body);
};

export default { metadata, tool, handler };
