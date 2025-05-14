// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.release_pipelines',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_projects_v2_api_release_pipelines',
  description:
    'Deletes a release pipeline.\n\nYou cannot delete the default release pipeline.\n\nIf you want to delete a release pipeline that is currently the default, create a second release pipeline and set it as the default. Then delete the first release pipeline. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`.\n',
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
  return client.api.v2.projects.releasePipelines.delete(pipelineKey, body);
};

export default { metadata, tool, handler };
