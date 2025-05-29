// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flag_links.projects.flags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}',
  operationId: 'getFlagLinks',
};

export const tool: Tool = {
  name: 'retrieve_projects_flag_links_v2_api_flags',
  description: 'Get a list of all flag links.',
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
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  return client.api.v2.flagLinks.projects.flags.retrieve(featureFlagKey, body);
};

export default { metadata, tool, handler };
