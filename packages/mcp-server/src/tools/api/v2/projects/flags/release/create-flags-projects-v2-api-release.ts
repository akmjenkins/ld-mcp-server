// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.release',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_flags_projects_v2_api_release',
  description: 'Creates a release by adding a flag to a release pipeline',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      flagKey: {
        type: 'string',
        description: 'The flag key',
      },
      releasePipelineKey: {
        type: 'string',
        description: 'The key of the release pipeline to attach the flag to',
      },
      releaseVariationId: {
        type: 'string',
        description: 'The variation id to release to across all phases',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { flagKey, ...body } = args as any;
  return client.api.v2.projects.flags.release.create(flagKey, body);
};

export default { metadata, tool, handler };
