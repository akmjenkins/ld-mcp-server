// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/projects/{projectKey}',
  operationId: 'deleteProject',
};

export const tool: Tool = {
  name: 'delete_v2_api_projects',
  description:
    'Delete a project by key. Use this endpoint with caution. Deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.',
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
  await client.api.v2.projects.delete(projectKey);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
