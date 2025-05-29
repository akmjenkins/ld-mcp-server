// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.segments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate',
  operationId: 'getContextInstanceSegmentsMembershipByEnv',
};

export const tool: Tool = {
  name: 'evaluate_environments_projects_v2_api_segments',
  description:
    'For a given context instance with attributes, get membership details for all segments. In the request body, pass in the context instance.',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.environments.segments.evaluate(environmentKey, body);
};

export default { metadata, tool, handler };
