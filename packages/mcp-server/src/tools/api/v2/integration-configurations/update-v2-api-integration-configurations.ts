// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_configurations',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/integration-configurations/{integrationConfigurationId}',
  operationId: 'updateIntegrationConfiguration',
};

export const tool: Tool = {
  name: 'update_v2_api_integration_configurations',
  description:
    'Update an integration configuration. Updating an integration configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).',
  inputSchema: {
    type: 'object',
    properties: {
      integrationConfigurationId: {
        type: 'string',
        description: 'The ID of the integration configuration',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationConfigurationId, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.integrationConfigurations.update(integrationConfigurationId, body),
  );
};

export default { metadata, tool, handler };
