// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.templates',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v2_api_templates',
  description: 'Create a template for a feature flag workflow',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      environmentKey: {
        type: 'string',
      },
      flagKey: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      projectKey: {
        type: 'string',
      },
      stages: {
        type: 'array',
        items: {
          $ref: '#/$defs/stage_input',
        },
      },
      workflowId: {
        type: 'string',
      },
    },
    $defs: {
      stage_input: {
        type: 'object',
        properties: {
          action: {
            type: 'object',
            description:
              'An <code>instructions</code> field containing an array of instructions for the stage. Each object in the array uses the semantic patch format for updating a feature flag.',
            properties: {
              instructions: {
                type: 'object',
                description:
                  'An array of instructions for the stage. Each object in the array uses the semantic patch format for updating a feature flag.',
              },
            },
            required: [],
          },
          conditions: {
            type: 'array',
            description: 'An array of conditions for the stage',
            items: {
              type: 'object',
              properties: {
                description: {
                  type: 'string',
                  description: 'A description of the approval required for this stage',
                },
                executeNow: {
                  type: 'boolean',
                  description: 'Whether the workflow stage should be executed immediately',
                },
                executionDate: {
                  type: 'integer',
                  description:
                    'For workflow stages whose scheduled execution is absolute, the time, in Unix milliseconds, when the stage should start.',
                },
                kind: {
                  type: 'string',
                  description:
                    'The type of condition to meet before executing this stage of the workflow. Use <code>schedule</code> to schedule a workflow stage. Use <code>ld-approval</code> to add an approval request to a workflow stage.',
                },
                notifyMemberIds: {
                  type: 'array',
                  description: 'A list of member IDs for the members to request approval from for this stage',
                  items: {
                    type: 'string',
                  },
                },
                notifyTeamKeys: {
                  type: 'array',
                  description: 'A list of team keys for the teams to request approval from for this stage',
                  items: {
                    type: 'string',
                  },
                },
                scheduleKind: {
                  type: 'string',
                  description:
                    'Whether the scheduled execution of the workflow stage is relative or absolute. If relative, the <code>waitDuration</code> and <code>waitDurationUnit</code> specify when the execution occurs. If absolute, the <code>executionDate</code> specifies when the execution occurs.',
                  enum: ['absolute', 'relative'],
                },
                waitDuration: {
                  type: 'integer',
                  description:
                    'For workflow stages whose scheduled execution is relative, how far in the future the stage should start.',
                },
                waitDurationUnit: {
                  type: 'string',
                  description:
                    'For workflow stages whose scheduled execution is relative, the unit of measure for the <code>waitDuration</code>.',
                  enum: ['minute', 'hour', 'calendarDay', 'calendarWeek'],
                },
              },
              required: [],
            },
          },
          executeConditionsInSequence: {
            type: 'boolean',
            description: 'Whether to execute the conditions in sequence for the given stage',
          },
          name: {
            type: 'string',
            description: 'The stage name',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.templates.create(body);
};

export default { metadata, tool, handler };
