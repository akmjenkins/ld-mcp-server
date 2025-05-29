// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/code-refs/repositories',
  operationId: 'postRepository',
};

export const tool: Tool = {
  name: 'create_code_refs_v2_api_repositories',
  description: 'Create a repository with the specified name.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'The repository name',
      },
      commitUrlTemplate: {
        type: 'string',
        description: 'A template for constructing a valid URL to view the commit',
      },
      defaultBranch: {
        type: 'string',
        description:
          "The repository's default branch. If not specified, the default value is <code>main</code>.",
      },
      hunkUrlTemplate: {
        type: 'string',
        description: 'A template for constructing a valid URL to view the hunk',
      },
      sourceLink: {
        type: 'string',
        description: 'A URL to access the repository',
      },
      type: {
        type: 'string',
        description: 'The type of repository. If not specified, the default value is <code>custom</code>.',
        enum: ['bitbucket', 'custom', 'github', 'gitlab'],
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.codeRefs.repositories.create(body);
};

export default { metadata, tool, handler };
