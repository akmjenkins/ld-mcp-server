// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.scheduled_changes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes',
  operationId: 'postFlagConfigScheduledChanges',
};

export const tool: Tool = {
  name: 'scheduled_changes_environments_flags_projects_v2_api_scheduled_changes',
  description:
    'Create scheduled changes for a feature flag. If the `ignoreConficts` query parameter is false and there are conflicts between these instructions and existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed.',
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
      executionDate: {
        type: 'integer',
        description: 'When the scheduled changes should be executed',
      },
      instructions: {
        type: 'array',
        description:
          'The actions to perform on the execution date for these scheduled changes. This should be an array with a single object that looks like <code>{"kind": "scheduled_action"}</code>. Supported scheduled actions are <code>turnFlagOn</code> and <code>turnFlagOff</code>.',
        items: {
          type: 'object',
        },
      },
      ignoreConflicts: {
        type: 'boolean',
        description:
          'Whether to succeed (`true`) or fail (`false`) when these instructions conflict with existing scheduled changes',
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the scheduled changes',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.flags.environments.scheduledChanges.scheduledChanges(environmentKey, body);
};

export default { metadata, tool, handler };
