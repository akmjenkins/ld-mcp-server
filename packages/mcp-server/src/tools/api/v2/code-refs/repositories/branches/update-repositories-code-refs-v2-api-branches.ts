// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories.branches',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/code-refs/repositories/{repo}/branches/{branch}',
  operationId: 'putBranch',
};

export const tool: Tool = {
  name: 'update_repositories_code_refs_v2_api_branches',
  description: "Create a new branch if it doesn't exist, or update the branch if it already exists.",
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
      head: {
        type: 'string',
        description: 'An ID representing the branch HEAD. For example, a commit SHA.',
      },
      name: {
        type: 'string',
        description: 'The branch name',
      },
      syncTime: {
        type: 'integer',
        description: 'A timestamp indicating when the branch was last synced',
      },
      commitTime: {
        type: 'integer',
        description: 'A timestamp of the current commit',
      },
      references: {
        type: 'array',
        description: 'An array of flag references found on the branch',
        items: {
          $ref: '#/$defs/reference_rep',
        },
      },
      updateSequenceId: {
        type: 'integer',
        description:
          'An optional ID used to prevent older data from overwriting newer data. If no sequence ID is included, the newly submitted data will always be saved.',
      },
    },
    $defs: {
      reference_rep: {
        type: 'object',
        properties: {
          hunks: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                startingLineNumber: {
                  type: 'integer',
                  description: 'Line number of beginning of code reference hunk',
                },
                aliases: {
                  type: 'array',
                  description: 'An array of flag key aliases',
                  items: {
                    type: 'string',
                  },
                },
                flagKey: {
                  type: 'string',
                  description: 'The feature flag key',
                },
                lines: {
                  type: 'string',
                  description: 'Contextual lines of code that include the referenced feature flag',
                },
                projKey: {
                  type: 'string',
                  description: 'The project key',
                },
              },
              required: ['startingLineNumber'],
            },
          },
          path: {
            type: 'string',
            description: 'File path of the reference',
          },
          hint: {
            type: 'string',
            description: 'Programming language used in the file',
          },
        },
        required: ['hunks', 'path'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  await client.api.v2.codeRefs.repositories.branches.update(branch, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
