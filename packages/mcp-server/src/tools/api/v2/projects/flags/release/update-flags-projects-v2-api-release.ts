// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.release',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/projects/{projectKey}/flags/{flagKey}/release/phases/{phaseId}',
  operationId: 'updatePhaseStatus',
};

export const tool: Tool = {
  name: 'update_flags_projects_v2_api_release',
  description: 'Updates the execution status of a phase of a release',
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
      phaseId: {
        type: 'string',
        description: 'The phase ID',
      },
      audiences: {
        type: 'array',
        description: 'Extra configuration for audiences required upon phase initialization.',
        items: {
          type: 'object',
          properties: {
            audienceId: {
              type: 'string',
              description: 'UUID of the audience.',
            },
            notifyMemberIds: {
              type: 'array',
              description:
                'An array of member IDs. These members are notified to review the approval request.',
              items: {
                type: 'string',
              },
            },
            notifyTeamKeys: {
              type: 'array',
              description:
                'An array of team keys. The members of these teams are notified to review the approval request.',
              items: {
                type: 'string',
              },
            },
            releaseGuardianConfiguration: {
              type: 'object',
              description:
                "Optional configuration details for the specified audience. Will default to the release pipeline's audience configuration if omitted.",
              properties: {
                monitoringWindowMilliseconds: {
                  type: 'integer',
                  description: 'The monitoring window in milliseconds',
                },
                randomizationUnit: {
                  type: 'string',
                  description: 'The randomization unit for the measured rollout',
                },
                rollbackOnRegression: {
                  type: 'boolean',
                  description: 'Whether or not to rollback on regression',
                },
                rolloutWeight: {
                  type: 'integer',
                  description: 'The rollout weight',
                },
              },
              required: [],
            },
          },
          required: [],
        },
      },
      status: {
        type: 'string',
        description: 'Status of the phase',
        enum: ['NotStarted', 'ReadyToStart', 'Started', 'Paused', 'Complete'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { phaseId, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.flags.release.update(phaseId, body));
};

export default { metadata, tool, handler };
