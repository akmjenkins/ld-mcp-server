// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.release_pipelines',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_projects_v2_api_release_pipelines',
  description: 'Get a release pipeline by key',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { pipelineKey, ...body } = args as any;
  return client.api.v2.projects.releasePipelines.retrieve(pipelineKey, body);
};

export default { metadata, tool, handler };
