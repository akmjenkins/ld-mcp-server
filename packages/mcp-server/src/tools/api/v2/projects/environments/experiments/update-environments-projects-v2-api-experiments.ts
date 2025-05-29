// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.experiments',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}',
  operationId: 'patchExperiment',
};

export const tool: Tool = {
  name: 'update_environments_projects_v2_api_experiments',
  description:
    'Update an experiment. Updating an experiment uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating experiments.\n\n#### updateName\n\nUpdates the experiment name.\n\n##### Parameters\n\n- `value`: The new name.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "updateName",\n    "value": "Example updated experiment name"\n  }]\n}\n```\n\n#### updateDescription\n\nUpdates the experiment description.\n\n##### Parameters\n\n- `value`: The new description.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "updateDescription",\n    "value": "Example updated description"\n  }]\n}\n```\n\n#### startIteration\n\nStarts a new iteration for this experiment. You must [create a new iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration) before calling this instruction.\n\nAn iteration may not be started until it meets the following criteria:\n\n* Its associated flag is toggled on and is not archived\n* Its `randomizationUnit` is set\n* At least one of its `treatments` has a non-zero `allocationPercent`\n\n##### Parameters\n\n- `changeJustification`: The reason for starting a new iteration. Required when you call `startIteration` on an already running experiment, otherwise optional.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "startIteration",\n    "changeJustification": "It\'s time to start a new iteration"\n  }]\n}\n```\n\n#### stopIteration\n\nStops the current iteration for this experiment.\n\n##### Parameters\n\n- `winningTreatmentId`: The ID of the winning treatment. Treatment IDs are returned as part of the [Get experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/get-experiment) response. They are the `_id` of each element in the `treatments` array.\n- `winningReason`: The reason for the winner\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "stopIteration",\n    "winningTreatmentId": "3a548ec2-72ac-4e59-8518-5c24f5609ccf",\n    "winningReason": "Example reason to stop the iteration"\n  }]\n}\n```\n\n#### archiveExperiment\n\nArchives this experiment. Archived experiments are hidden by default in the LaunchDarkly user interface. You cannot start new iterations for archived experiments.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{ "kind": "archiveExperiment" }]\n}\n```\n\n#### restoreExperiment\n\nRestores an archived experiment. After restoring an experiment, you can start new iterations for it again.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{ "kind": "restoreExperiment" }]\n}\n```\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      experimentKey: {
        type: 'string',
        description: 'The experiment key',
      },
      instructions: {
        type: 'array',
        description:
          'The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require a <code>value</code> field in the array element.',
        items: {
          type: 'object',
        },
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the update',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { experimentKey, ...body } = args as any;
  return client.api.v2.projects.environments.experiments.update(experimentKey, body);
};

export default { metadata, tool, handler };
