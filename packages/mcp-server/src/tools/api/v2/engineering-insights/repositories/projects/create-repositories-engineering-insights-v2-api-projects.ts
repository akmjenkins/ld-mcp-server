// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.repositories.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/engineering-insights/repositories/projects',
  operationId: 'associateRepositoriesAndProjects',
};

export const tool: Tool = {
  name: 'create_repositories_engineering_insights_v2_api_projects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAssociate repositories with projects\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'List of repository project associations',\n      items: {\n        $ref: '#/$defs/insights_repository_project'\n      }\n    },\n    totalCount: {\n      type: 'integer',\n      description: 'Total number of repository project associations'\n    },\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    }\n  },\n  required: [    'items',\n    'totalCount'\n  ],\n  $defs: {\n    insights_repository_project: {\n      type: 'object',\n      properties: {\n        projectKey: {\n          type: 'string',\n          description: 'The project key'\n        },\n        repositoryKey: {\n          type: 'string',\n          description: 'The repository key'\n        }\n      },\n      required: [        'projectKey',\n        'repositoryKey'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      mappings: {
        type: 'array',
        items: {
          $ref: '#/$defs/insights_repository_project',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      insights_repository_project: {
        type: 'object',
        properties: {
          projectKey: {
            type: 'string',
            description: 'The project key',
          },
          repositoryKey: {
            type: 'string',
            description: 'The repository key',
          },
        },
        required: ['projectKey', 'repositoryKey'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.engineeringInsights.repositories.projects.create(body)),
  );
};

export default { metadata, tool, handler };
