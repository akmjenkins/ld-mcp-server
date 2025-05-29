// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}',
  operationId: 'getProject',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_projects',
  description:
    'Get a single project by key.\n\n### Expanding the project response\n\nLaunchDarkly supports one field for expanding the "Get project" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n* `environments` includes a paginated list of the project environments.\n\nFor example, `expand=environments` includes the `environments` field for the project in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key.',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.retrieve(projectKey, body);
};

export default { metadata, tool, handler };
