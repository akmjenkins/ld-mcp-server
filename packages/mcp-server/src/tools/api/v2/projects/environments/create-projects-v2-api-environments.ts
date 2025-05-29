// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/environments',
  operationId: 'postEnvironment',
};

export const tool: Tool = {
  name: 'create_projects_v2_api_environments',
  description:
    '> ### Approval settings\n>\n> The `approvalSettings` key is only returned when the [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled.\n>\n> You cannot update approval settings when creating new environments. Update approval settings with the [https://launchdarkly.com/docs/api/environments/patch-environment).\n\nCreate a new environment in a specified project with a given name, key, swatch color, and default TTL.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      color: {
        type: 'string',
        description: 'A color to indicate this environment in the UI',
      },
      key: {
        type: 'string',
        description: 'A project-unique key for the new environment',
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the new environment',
      },
      confirmChanges: {
        type: 'boolean',
        description: 'Requires confirmation for all flag and segment changes via the UI in this environment',
      },
      critical: {
        type: 'boolean',
        description: 'Whether the environment is critical',
      },
      defaultTrackEvents: {
        type: 'boolean',
        description: 'Enables tracking detailed information for new flags by default',
      },
      defaultTtl: {
        type: 'integer',
        description: 'The default time (in minutes) that the PHP SDK can cache feature flag rules locally',
      },
      requireComments: {
        type: 'boolean',
        description: 'Requires comments for all flag and segment changes via the UI in this environment',
      },
      secureMode: {
        type: 'boolean',
        description:
          'Ensures that one end user of the client-side SDK cannot inspect the variations for another end user',
      },
      source: {
        type: 'object',
        description:
          'Indicates that the new environment created will be cloned from the provided source environment',
        properties: {
          key: {
            type: 'string',
            description: 'The key of the source environment to clone from',
          },
          version: {
            type: 'integer',
            description:
              '(Optional) The version number of the source environment to clone from. Used for optimistic locking',
          },
        },
        required: [],
      },
      tags: {
        type: 'array',
        description: 'Tags to apply to the new environment',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.environments.create(projectKey, body);
};

export default { metadata, tool, handler };
