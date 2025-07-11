// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories.branches',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events',
  operationId: 'postExtinction',
};

export const tool: Tool = {
  name: 'extinction_events_repositories_code_refs_v2_api_branches',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new extinction.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  const response = await client.api.v2.codeRefs.repositories.branches
    .extinctionEvents(branch, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
