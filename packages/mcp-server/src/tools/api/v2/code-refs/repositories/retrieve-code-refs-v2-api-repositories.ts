// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/code-refs/repositories/{repo}',
  operationId: 'getRepository',
};

export const tool: Tool = {
  name: 'retrieve_code_refs_v2_api_repositories',
  description: 'Get a single repository by name.',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { repo, ...body } = args as any;
  return asTextContentResult(await client.api.v2.codeRefs.repositories.retrieve(repo));
};

export default { metadata, tool, handler };
