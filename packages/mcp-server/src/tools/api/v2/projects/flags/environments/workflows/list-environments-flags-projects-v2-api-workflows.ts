// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.workflows',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows',
  operationId: 'getWorkflows',
};

export const tool: Tool = {
  name: 'list_environments_flags_projects_v2_api_workflows',
  description: 'Display workflows associated with a feature flag.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of workflows to return. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      sort: {
        type: 'string',
        description:
          'A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by `creationDate` or `stopDate`.',
      },
      status: {
        type: 'string',
        description:
          'Filter results by workflow status. Valid status filters are `active`, `completed`, and `failed`.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.flags.environments.workflows.list(environmentKey, body),
  );
};

export default { metadata, tool, handler };
