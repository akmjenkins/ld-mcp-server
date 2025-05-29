// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.big_segment_store',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath:
    '/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}',
  operationId: 'patchBigSegmentStoreIntegration',
};

export const tool: Tool = {
  name: 'update_integration_capabilities_v2_api_big_segment_store',
  description:
    'Update a big segment store integration. Updating a big segment store requires a [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).',
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
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
    },
    $defs: {
      patch_operation: {
        type: 'object',
        properties: {
          op: {
            type: 'string',
            description: 'The type of operation to perform',
          },
          path: {
            type: 'string',
            description: 'A JSON Pointer string specifying the part of the document to operate on',
          },
          value: {
            type: 'object',
            description: 'A JSON value used in "add", "replace", and "test" operations',
          },
        },
        required: ['op', 'path'],
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationId, ...body } = args as any;
  return client.api.v2.integrationCapabilities.bigSegmentStore.update(integrationId, body);
};

export default { metadata, tool, handler };
