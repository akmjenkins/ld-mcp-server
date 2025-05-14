// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'branch_delete_tasks_code_refs_v2_api_repositories',
  description: 'Asynchronously delete a number of branches.',
  inputSchema: {
    type: 'object',
    properties: {
      repo: {
        type: 'string',
        description: 'The repository name to delete branches for.',
      },
      body: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { repo, ...body } = args as any;
  return client.api.v2.codeRefs.repositories.branchDeleteTasks(repo, body);
};

export default { metadata, tool, handler };
