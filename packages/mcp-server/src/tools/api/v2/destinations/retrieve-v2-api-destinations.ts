// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.destinations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/destinations/{projectKey}/{environmentKey}/{id}',
  operationId: 'getDestination',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_destinations',
  description: 'Get a single Data Export destination by ID.',
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
      id: {
        type: 'string',
        description: 'The Data Export destination ID',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.destinations.retrieve(id, body);
};

export default { metadata, tool, handler };
