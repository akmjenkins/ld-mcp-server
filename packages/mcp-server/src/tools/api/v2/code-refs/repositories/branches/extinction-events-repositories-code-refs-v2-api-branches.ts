// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories.branches',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'extinction_events_repositories_code_refs_v2_api_branches',
  description: 'Create a new extinction.',
  inputSchema: {
    type: 'object',
    properties: {
      repo: {
        type: 'string',
        description: 'The repository name',
      },
      branch: {
        type: 'string',
        description: 'The URL-encoded branch name',
      },
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            flagKey: {
              type: 'string',
              description: 'The feature flag key',
            },
            message: {
              type: 'string',
              description: 'Description of the extinction. For example, the commit message for the revision.',
            },
            projKey: {
              type: 'string',
              description: 'The project key',
            },
            revision: {
              type: 'string',
              description:
                'The identifier for the revision where flag became extinct. For example, a commit SHA.',
            },
            time: {
              type: 'integer',
              description: 'Time of extinction',
            },
          },
          required: ['flagKey', 'message', 'projKey', 'revision', 'time'],
        },
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return client.api.v2.codeRefs.repositories.branches.extinctionEvents(branch, body);
};

export default { metadata, tool, handler };
