// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.holdouts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts',
  operationId: 'getAllHoldouts',
};

export const tool: Tool = {
  name: 'list_environments_projects_v2_api_holdouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all holdouts\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          _id: {\n            type: 'string'\n          },\n          createdAt: {\n            type: 'integer'\n          },\n          experiments: {\n            type: 'array',\n            items: {\n              $ref: '#/$defs/related_experiment_rep'\n            }\n          },\n          key: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          },\n          status: {\n            type: 'string'\n          },\n          updatedAt: {\n            type: 'integer'\n          }\n        },\n        required: []\n      }\n    },\n    total_count: {\n      type: 'integer',\n      description: 'The total number of holdouts in this project and environment.'\n    }\n  },\n  required: [],\n  $defs: {\n    related_experiment_rep: {\n      type: 'object',\n      properties: {\n        environment: {\n          type: 'string'\n        },\n        key: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      limit: {
        type: 'integer',
        description: 'The number of holdouts to return in the response. Defaults to 20',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an `offset` of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
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
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.environments.holdouts.list(environmentKey, body)),
  );
};

export default { metadata, tool, handler };
