// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flag_links.projects.flags',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}',
  operationId: 'deleteFlagLink',
};

export const tool: Tool = {
  name: 'delete_projects_flag_links_v2_api_flags',
  description: 'Delete a flag link by ID or key.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
      id: {
        type: 'string',
        description: 'The flag link ID or Key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.flagLinks.projects.flags.delete(id, body);
};

export default { metadata, tool, handler };
