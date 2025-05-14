// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.workflows',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_environments_flags_projects_v2_api_workflows',
  description:
    'Create a workflow for a feature flag. You can create a workflow directly, or you can apply a template to create a new workflow.\n\n### Creating a workflow\n\nYou can use the create workflow endpoint to create a workflow directly by adding a `stages` array to the request body.\n\nFor each stage, define the `name`, `conditions` when the stage should be executed, and `action` that describes the stage.\n\n<details>\n<summary>Click to expand example</summary>\n\n_Example request body_\n```json\n{\n  "name": "Progressive rollout starting in two days",\n  "description": "Turn flag targeting on and increase feature rollout in 10% increments each day",\n  "stages": [\n    {\n      "name": "10% rollout on day 1",\n      "conditions": [\n        {\n          "kind": "schedule",\n          "scheduleKind": "relative", // or "absolute"\n              //  If "scheduleKind" is "absolute", set "executionDate";\n              // "waitDuration" and "waitDurationUnit" will be ignored\n          "waitDuration": 2,\n          "waitDurationUnit": "calendarDay"\n        },\n        {\n          "kind": "ld-approval",\n          "notifyMemberIds": [ "507f1f77bcf86cd799439011" ],\n          "notifyTeamKeys": [ "team-key-123abc" ]\n        }\n      ],\n      "action": {\n        "instructions": [\n          {\n            "kind": "turnFlagOn"\n          },\n          {\n            "kind": "updateFallthroughVariationOrRollout",\n            "rolloutWeights": {\n              "452f5fb5-7320-4ba3-81a1-8f4324f79d49": 90000,\n              "fc15f6a4-05d3-4aa4-a997-446be461345d": 10000\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n```\n</details>\n\n### Creating a workflow by applying a workflow template\n\nYou can also create a workflow by applying a workflow template. If you pass a valid workflow template key as the `templateKey` query parameter with the request, the API will attempt to create a new workflow with the stages defined in the workflow template with the corresponding key.\n\n#### Applicability of stages\nTemplates are created in the context of a particular flag in a particular environment in a particular project. However, because workflows created from a template can be applied to any project, environment, and flag, some steps of the workflow may need to be updated in order to be applicable for the target resource.\n\nYou can pass a `dryRun` query parameter to tell the API to return a report of which steps of the workflow template are applicable in the target project/environment/flag, and which will need to be updated. When the `dryRun` query parameter is present the response body includes a `meta` property that holds a list of parameters that could potentially be inapplicable for the target resource. Each of these parameters will include a `valid` field. You will need to update any invalid parameters in order to create the new workflow. You can do this using the `parameters` property, which overrides the workflow template parameters.\n\n#### Overriding template parameters\nYou can use the `parameters` property in the request body to tell the API to override the specified workflow template parameters with new values that are specific to your target project/environment/flag.\n\n<details>\n<summary>Click to expand example</summary>\n\n_Example request body_\n```json\n{\n\t"name": "workflow created from my-template",\n\t"description": "description of my workflow",\n\t"parameters": [\n\t\t{\n\t\t\t"_id": "62cf2bc4cadbeb7697943f3b",\n\t\t\t"path": "/clauses/0/values",\n\t\t\t"default": {\n\t\t\t\t"value": ["updated-segment"]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t"_id": "62cf2bc4cadbeb7697943f3d",\n\t\t\t"path": "/variationId",\n\t\t\t"default": {\n\t\t\t\t"value": "abcd1234-abcd-1234-abcd-1234abcd12"\n\t\t\t}\n\t\t}\n\t]\n}\n```\n</details>\n\nIf there are any steps in the template that are not applicable to the target resource, the workflow will not be created, and the `meta` property will be included in the response body detailing which parameters need to be updated.\n',
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
      name: {
        type: 'string',
        description: 'The workflow name',
      },
      dryRun: {
        type: 'boolean',
        description: 'Whether to call the endpoint in dry-run mode',
      },
      templateKey: {
        type: 'string',
        description: 'The template key',
      },
      description: {
        type: 'string',
        description: 'The workflow description',
      },
      maintainerId: {
        type: 'string',
        description: 'The ID of the workflow maintainer. Defaults to the workflow creator.',
      },
      stages: {
        type: 'array',
        description: 'A list of the workflow stages',
        items: {
          $ref: '#/$defs/stage_input',
        },
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
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.flags.environments.workflows.create(environmentKey, body);
};

export default { metadata, tool, handler };
