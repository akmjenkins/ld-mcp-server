// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.release_pipelines',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}',
  operationId: 'putReleasePipeline',
};

export const tool: Tool = {
  name: 'update_projects_v2_api_release_pipelines',
  description: 'Updates a release pipeline.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      pipelineKey: {
        type: 'string',
        description: 'The release pipeline key',
      },
      name: {
        type: 'string',
        description: 'The name of the release pipeline',
      },
      phases: {
        type: 'array',
        description:
          'A logical grouping of one or more environments that share attributes for rolling out changes',
        items: {
          $ref: '#/$defs/create_phase_input',
        },
      },
      description: {
        type: 'string',
        description: 'The release pipeline description',
      },
      tags: {
        type: 'array',
        description: 'A list of tags for this release pipeline',
        items: {
          type: 'string',
        },
      },
    },
    $defs: {
      create_phase_input: {
        type: 'object',
        properties: {
          audiences: {
            type: 'array',
            description:
              'An ordered list of the audiences for this release phase. Each audience corresponds to a LaunchDarkly environment.',
            items: {
              type: 'object',
              properties: {
                environmentKey: {
                  type: 'string',
                  description: 'A project-unique key for the environment.',
                },
                name: {
                  type: 'string',
                  description: 'The audience name',
                },
                configuration: {
                  $ref: '#/$defs/audience_configuration',
                },
                segmentKeys: {
                  type: 'array',
                  description: 'Segments targeted by this audience.',
                  items: {
                    type: 'string',
                  },
                },
              },
              required: ['environmentKey', 'name'],
            },
          },
          name: {
            type: 'string',
            description: 'The release phase name',
          },
          configuration: {
            $ref: '#/$defs/phase_configuration',
          },
        },
        required: ['audiences', 'name'],
      },
      audience_configuration: {
        type: 'object',
        properties: {
          releaseStrategy: {
            type: 'string',
            description: 'The release strategy',
          },
          requireApproval: {
            type: 'boolean',
            description: 'Whether or not the audience requires approval',
          },
          notifyMemberIds: {
            type: 'array',
            description: 'An array of member IDs. These members are notified to review the approval request.',
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
            description: 'The configuration for the release guardian.',
            properties: {
              monitoringWindowMilliseconds: {
                type: 'integer',
                description: 'The monitoring window in milliseconds',
              },
              rollbackOnRegression: {
                type: 'boolean',
                description: 'Whether or not to roll back on regression',
              },
              rolloutWeight: {
                type: 'integer',
                description: 'The rollout weight percentage',
              },
              randomizationUnit: {
                type: 'string',
                description: 'The randomization unit for the measured rollout',
              },
            },
            required: ['monitoringWindowMilliseconds', 'rollbackOnRegression', 'rolloutWeight'],
          },
        },
        required: ['releaseStrategy', 'requireApproval'],
      },
      phase_configuration: {
        type: 'object',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { pipelineKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.releasePipelines.update(pipelineKey, body));
};

export default { metadata, tool, handler };
