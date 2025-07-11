// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.templates',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/templates',
  operationId: 'createWorkflowTemplate',
};

export const tool: Tool = {
  name: 'create_v2_api_templates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a template for a feature flag workflow\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/workflow_template_output',\n  $defs: {\n    workflow_template_output: {\n      type: 'object',\n      properties: {\n        _creationDate: {\n          type: 'integer'\n        },\n        _id: {\n          type: 'string'\n        },\n        _key: {\n          type: 'string'\n        },\n        _links: {\n          type: 'object'\n        },\n        _maintainerId: {\n          type: 'string'\n        },\n        _ownerId: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        stages: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/stage_output'\n          }\n        }\n      },\n      required: [        '_creationDate',\n        '_id',\n        '_key',\n        '_links',\n        '_maintainerId',\n        '_ownerId'\n      ]\n    },\n    stage_output: {\n      type: 'object',\n      properties: {\n        _execution: {\n          $ref: '#/$defs/execution_output'\n        },\n        _id: {\n          type: 'string',\n          description: 'The ID of this stage'\n        },\n        action: {\n          type: 'object',\n          description: 'The type of instruction, and an array of instructions for the stage. Each object in the array uses the semantic patch format for updating a feature flag.',\n          properties: {\n            instructions: {\n              type: 'array',\n              description: 'An array of instructions for the stage. Each object in the array uses the semantic patch format for updating a feature flag.',\n              items: {\n                type: 'object'\n              }\n            },\n            kind: {\n              type: 'string',\n              description: 'The type of action for this stage'\n            }\n          },\n          required: [            'instructions',\n            'kind'\n          ]\n        },\n        conditions: {\n          type: 'array',\n          description: 'An array of conditions for the stage',\n          items: {\n            type: 'object',\n            properties: {\n              _execution: {\n                $ref: '#/$defs/execution_output'\n              },\n              _id: {\n                type: 'string'\n              },\n              allReviews: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    _id: {\n                      type: 'string'\n                    },\n                    kind: {\n                      type: 'string'\n                    },\n                    comment: {\n                      type: 'string'\n                    },\n                    creationDate: {\n                      type: 'integer'\n                    },\n                    memberId: {\n                      type: 'string'\n                    },\n                    serviceTokenId: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    '_id',\n                    'kind'\n                  ]\n                }\n              },\n              description: {\n                type: 'string'\n              },\n              notifyMemberIds: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              reviewStatus: {\n                type: 'string'\n              },\n              appliedDate: {\n                type: 'integer'\n              },\n              executionDate: {\n                type: 'integer'\n              },\n              kind: {\n                type: 'string'\n              },\n              scheduleKind: {\n                type: 'string'\n              },\n              waitDuration: {\n                type: 'integer'\n              },\n              waitDurationUnit: {\n                type: 'string'\n              }\n            },\n            required: [              '_execution',\n              '_id',\n              'allReviews',\n              'description',\n              'notifyMemberIds',\n              'reviewStatus'\n            ]\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The stage name'\n        }\n      },\n      required: [        '_execution',\n        '_id',\n        'action',\n        'conditions'\n      ]\n    },\n    execution_output: {\n      type: 'object',\n      properties: {\n        status: {\n          type: 'string',\n          description: 'The status of the execution of this workflow stage'\n        },\n        stopDate: {\n          type: 'integer',\n          description: 'Timestamp of when the workflow was completed.'\n        }\n      },\n      required: [        'status'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.templates.create(body)));
};

export default { metadata, tool, handler };
