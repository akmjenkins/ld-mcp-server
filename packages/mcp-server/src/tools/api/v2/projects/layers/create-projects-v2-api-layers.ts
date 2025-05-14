// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.layers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_projects_v2_api_layers',
  description:
    'Create a layer. Experiments running in the same layer are granted mutually-exclusive traffic.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      description: {
        type: 'string',
        description: 'The checkout flow for the application',
      },
      key: {
        type: 'string',
        description: 'Unique identifier for the layer',
      },
      name: {
        type: 'string',
        description: 'Layer name',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.layers.create(projectKey, body);
};

export default { metadata, tool, handler };
