// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.scheduled_changes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes',
  operationId: 'getFlagConfigScheduledChanges',
};

export const tool: Tool = {
  name: 'retrieve_scheduled_changes_environments_flags_projects_v2_api_scheduled_changes',
  description: 'Get a list of scheduled changes that will be applied to the feature flag.',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.flags.environments.scheduledChanges.retrieveScheduledChanges(
      environmentKey,
      body,
    ),
  );
};

export default { metadata, tool, handler };
