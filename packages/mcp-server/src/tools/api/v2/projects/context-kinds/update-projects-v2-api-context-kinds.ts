// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.context_kinds',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_projects_v2_api_context_kinds',
  description: 'Create or update a context kind by key. Only the included fields will be updated.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      key: {
        type: 'string',
        description: 'The context kind key',
      },
      name: {
        type: 'string',
        description: 'The context kind name',
      },
      archived: {
        type: 'boolean',
        description:
          'Whether the context kind is archived. Archived context kinds are unavailable for targeting.',
      },
      description: {
        type: 'string',
        description: 'The context kind description',
      },
      hideInTargeting: {
        type: 'boolean',
        description: 'Alias for archived.',
      },
      version: {
        type: 'integer',
        description:
          'The context kind version. If not specified when the context kind is created, defaults to 1.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { key, ...body } = args as any;
  return client.api.v2.projects.contextKinds.update(key, body);
};

export default { metadata, tool, handler };
