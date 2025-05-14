// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integrations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_v2_api_integrations',
  description: 'Get an audit log subscription by ID.',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.integrations.retrieve(id, body);
};

export default { metadata, tool, handler };
