// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.context_kinds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/context-kinds',
  operationId: 'getContextKindsByProjectKey',
};

export const tool: Tool = {
  name: 'retrieve_context_kinds_projects_v2_api_context_kinds',
  description: 'Get all context kinds for a given project.',
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
  return asTextContentResult(await client.api.v2.projects.contextKinds.retrieveContextKinds(projectKey));
};

export default { metadata, tool, handler };
