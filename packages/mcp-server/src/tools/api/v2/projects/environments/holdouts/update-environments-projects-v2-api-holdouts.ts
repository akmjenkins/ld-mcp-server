// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.holdouts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_environments_projects_v2_api_holdouts',
  description:
    'Updates an existing holdout, and returns the updated holdout. Updating holdouts uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating holdouts.\n\n<details>\n<summary>Click to expand instructions for <strong>updating holdouts</strong></summary>\n\n#### endHoldout\n\nEnds a holdout.\n\n##### Parameters\n\nNone.\n\nHere\'s an example:\n\n```json\n{\n  "comment": "Optional comment describing why the holdout is ending",\n  "instructions": [{\n    "kind": "endHoldout"\n  }]\n}\n```\n\n#### removeExperiment\n\nRemoves an experiment from a holdout.\n\n##### Parameters\n\n- `value`: The key of the experiment to remove\n\nHere\'s an example:\n\n```json\n{\n  "comment": "Optional comment describing the change",\n  "instructions": [{\n    "kind": "removeExperiment",\n    "value": "experiment-key"\n  }]\n}\n```\n\n#### updateDescription\n\nUpdates the description of the holdout.\n\n##### Parameters\n\n- `value`: The new description.\n\nHere\'s an example:\n\n```json\n{\n  "comment": "Optional comment describing the update",\n  "instructions": [{\n    "kind": "updateDescription",\n    "value": "Updated holdout description"\n  }]\n}\n```\n\n#### updateName\n\nUpdates the name of the holdout.\n\n##### Parameters\n\n- `value`: The new name.\n\nHere\'s an example:\n\n```json\n{\n  "comment": "Optional comment describing the update",\n  "instructions": [{\n    "kind": "updateName",\n    "value": "Updated holdout name"\n  }]\n}\n```\n\n</details>\n',
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
      holdoutKey: {
        type: 'string',
        description: 'The holdout key',
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
  const { holdoutKey, ...body } = args as any;
  return client.api.v2.projects.environments.holdouts.update(holdoutKey, body);
};

export default { metadata, tool, handler };
