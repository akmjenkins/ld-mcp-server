// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integrations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/integrations/{integrationKey}/{id}',
  operationId: 'deleteSubscription',
};

export const tool: Tool = {
  name: 'delete_v2_api_integrations',
  description: 'Delete an audit log subscription.',
  inputSchema: {
    type: 'object',
    properties: {
      integrationKey: {
        type: 'string',
        description: 'The integration key',
      },
      id: {
        type: 'string',
        description: 'The subscription ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.api.v2.integrations.delete(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
