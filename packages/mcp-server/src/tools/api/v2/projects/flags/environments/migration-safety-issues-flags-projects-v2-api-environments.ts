// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/migration-safety-issues',
  operationId: 'postMigrationSafetyIssues',
};

export const tool: Tool = {
  name: 'migration_safety_issues_flags_projects_v2_api_environments',
  description:
    'Returns the migration safety issues that are associated with the POSTed flag patch. The patch must use the semantic patch format for updating feature flags.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      flagKey: {
        type: 'string',
        description: 'The migration flag key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      instructions: {
        type: 'array',
        description: 'Semantic patch instructions. The same ones that are valid for flags are valid here.',
        items: {
          type: 'object',
        },
      },
      comment: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.flags.environments.migrationSafetyIssues(environmentKey, body);
};

export default { metadata, tool, handler };
