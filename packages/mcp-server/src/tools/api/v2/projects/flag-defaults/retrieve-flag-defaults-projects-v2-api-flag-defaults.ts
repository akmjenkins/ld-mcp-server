// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flag_defaults',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/flag-defaults',
  operationId: 'getFlagDefaultsByProject',
};

export const tool: Tool = {
  name: 'retrieve_flag_defaults_projects_v2_api_flag_defaults',
  description: 'Get the flag defaults for a specific project.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.flagDefaults.retrieveFlagDefaults(projectKey));
};

export default { metadata, tool, handler };
