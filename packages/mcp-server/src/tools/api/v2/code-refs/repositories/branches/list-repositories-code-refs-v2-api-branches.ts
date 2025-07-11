// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of branches.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    items: {\n      type: 'array',\n      description: 'An array of branches',\n      items: {\n        $ref: '#/$defs/branch_rep'\n      }\n    }\n  },\n  required: [    '_links',\n    'items'\n  ],\n  $defs: {\n    branch_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        head: {\n          type: 'string',\n          description: 'An ID representing the branch HEAD. For example, a commit SHA.'\n        },\n        name: {\n          type: 'string',\n          description: 'The branch name'\n        },\n        syncTime: {\n          type: 'integer',\n          description: 'A timestamp indicating when the branch was last synced'\n        },\n        references: {\n          type: 'array',\n          description: 'An array of flag references found on the branch',\n          items: {\n            $ref: '#/$defs/reference_rep'\n          }\n        },\n        updateSequenceId: {\n          type: 'integer',\n          description: 'An optional ID used to prevent older data from overwriting newer data'\n        }\n      },\n      required: [        '_links',\n        'head',\n        'name',\n        'syncTime'\n      ]\n    },\n    reference_rep: {\n      type: 'object',\n      properties: {\n        hunks: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              startingLineNumber: {\n                type: 'integer',\n                description: 'Line number of beginning of code reference hunk'\n              },\n              aliases: {\n                type: 'array',\n                description: 'An array of flag key aliases',\n                items: {\n                  type: 'string'\n                }\n              },\n              flagKey: {\n                type: 'string',\n                description: 'The feature flag key'\n              },\n              lines: {\n                type: 'string',\n                description: 'Contextual lines of code that include the referenced feature flag'\n              },\n              projKey: {\n                type: 'string',\n                description: 'The project key'\n              }\n            },\n            required: [              'startingLineNumber'\n            ]\n          }\n        },\n        path: {\n          type: 'string',\n          description: 'File path of the reference'\n        },\n        hint: {\n          type: 'string',\n          description: 'Programming language used in the file'\n        }\n      },\n      required: [        'hunks',\n        'path'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      repo: {
        type: 'string',
        description: 'The repository name',
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
  const { repo, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.codeRefs.repositories.branches.list(repo)),
  );
};

export default { metadata, tool, handler };
