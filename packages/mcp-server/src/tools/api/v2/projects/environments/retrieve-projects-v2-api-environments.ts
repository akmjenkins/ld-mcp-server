// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}',
  operationId: 'getEnvironment',
};

export const tool: Tool = {
  name: 'retrieve_projects_v2_api_environments',
  description:
    '> ### Approval settings\n>\n> The `approvalSettings` key is only returned when [approvals](https://launchdarkly.com/docs/home/releases/approvals) for flags or segments are enabled.\n\nGet an environment given a project and key.\n',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.environments.retrieve(environmentKey, body));
};

export default { metadata, tool, handler };
