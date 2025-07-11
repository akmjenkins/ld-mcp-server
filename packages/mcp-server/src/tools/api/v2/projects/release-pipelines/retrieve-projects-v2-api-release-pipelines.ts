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
  httpPath: '/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}',
  operationId: 'getReleasePipelineByKey',
};

export const tool: Tool = {
  name: 'retrieve_projects_v2_api_release_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a release pipeline by key",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      pipelineKey: {
        type: 'string',
        description: 'The release pipeline key',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { pipelineKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.releasePipelines.retrieve(pipelineKey, body));
};

export default { metadata, tool, handler };
