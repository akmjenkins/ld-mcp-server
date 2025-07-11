// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.repositories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/repositories',
  operationId: 'getInsightsRepositories',
};

export const tool: Tool = {
  name: 'list_engineering_insights_v2_api_repositories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of repositories\n\n### Expanding the repository collection response\n\nLaunchDarkly supports expanding the repository collection response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `projects` includes details on all of the LaunchDarkly projects associated with each repository\n\nFor example, use `?expand=projects` to include the `projects` field in the response. By default, this field is **not** included in the response.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'List of repositories',\n      items: {\n        type: 'object',\n        properties: {\n          _id: {\n            type: 'string',\n            description: 'The repository ID'\n          },\n          key: {\n            type: 'string',\n            description: 'The repository key'\n          },\n          mainBranch: {\n            type: 'string',\n            description: 'The repository main branch'\n          },\n          type: {\n            type: 'string',\n            description: 'The repository type'\n          },\n          url: {\n            type: 'string',\n            description: 'The repository URL'\n          },\n          version: {\n            type: 'integer',\n            description: 'The repository version'\n          },\n          projects: {\n            type: 'object',\n            properties: {\n              items: {\n                type: 'array',\n                items: {\n                  $ref: '#/$defs/project_summary'\n                }\n              },\n              totalCount: {\n                type: 'integer'\n              },\n              _links: {\n                type: 'object'\n              }\n            },\n            required: [              'items',\n              'totalCount'\n            ]\n          }\n        },\n        required: [          '_id',\n          'key',\n          'mainBranch',\n          'type',\n          'url',\n          'version'\n        ]\n      }\n    },\n    totalCount: {\n      type: 'integer',\n      description: 'Total number of repositories'\n    },\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    }\n  },\n  required: [    'items',\n    'totalCount'\n  ],\n  $defs: {\n    project_summary: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this project'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        key: {\n          type: 'string',\n          description: 'The project key'\n        },\n        name: {\n          type: 'string',\n          description: 'The project name'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'key',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      expand: {
        type: 'string',
        description: 'Expand properties in response. Options: `projects`',
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
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.engineeringInsights.repositories.list(body)),
  );
};

export default { metadata, tool, handler };
