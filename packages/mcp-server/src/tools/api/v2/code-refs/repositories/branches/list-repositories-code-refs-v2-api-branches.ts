// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories.branches',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/code-refs/repositories/{repo}/branches',
  operationId: 'getBranches',
};

export const tool: Tool = {
  name: 'list_repositories_code_refs_v2_api_branches',
  description: 'Get a list of branches.',
  inputSchema: {
    type: 'object',
    properties: {
      repo: {
        type: 'string',
        description: 'The repository name',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { repo, ...body } = args as any;
  return client.api.v2.codeRefs.repositories.branches.list(repo);
};

export default { metadata, tool, handler };
