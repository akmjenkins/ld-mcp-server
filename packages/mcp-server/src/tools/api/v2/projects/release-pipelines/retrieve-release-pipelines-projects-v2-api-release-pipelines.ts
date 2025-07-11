// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.release_pipelines',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/release-pipelines',
  operationId: 'getAllReleasePipelines',
};

export const tool: Tool = {
  name: 'retrieve_release_pipelines_projects_v2_api_release_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all release pipelines for a project.\n\n### Filtering release pipelines\n\nLaunchDarkly supports the following fields for filters:\n\n- `query` is a string that matches against the release pipeline `key`, `name`, and `description`. It is not case sensitive. For example: `?filter=query:examplePipeline`.\n\n- `env` is a string that matches an environment key. For example: `?filter=env:production`.\n",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields.',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of items to return. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.releasePipelines.retrieveReleasePipelines(projectKey, body),
  );
};

export default { metadata, tool, handler };
