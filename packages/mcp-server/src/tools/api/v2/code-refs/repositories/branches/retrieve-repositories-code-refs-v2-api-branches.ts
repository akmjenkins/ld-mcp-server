// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories.branches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/code-refs/repositories/{repo}/branches/{branch}',
  operationId: 'getBranch',
};

export const tool: Tool = {
  name: 'retrieve_repositories_code_refs_v2_api_branches',
  description: 'Get a specific branch in a repository.',
  inputSchema: {
    type: 'object',
    properties: {
      repo: {
        type: 'string',
        description: 'The repository name',
      },
      branch: {
        type: 'string',
        description: 'The url-encoded branch name',
      },
      flagKey: {
        type: 'string',
        description: 'Filter results to a specific flag key',
      },
      projKey: {
        type: 'string',
        description: 'Filter results to a specific project',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return client.api.v2.codeRefs.repositories.branches.retrieve(branch, body);
};

export default { metadata, tool, handler };
