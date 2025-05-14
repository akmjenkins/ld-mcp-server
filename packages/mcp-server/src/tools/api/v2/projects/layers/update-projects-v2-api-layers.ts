// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.layers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_projects_v2_api_layers',
  description:
    'Update a layer by adding, changing, or removing traffic reservations for experiments, or by changing layer name or description.\nUpdating a layer uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating layers.\n\n<details>\n<summary>Click to expand instructions for <strong>updating layers</strong></summary>\n\n#### updateName\n\nUpdates the layer name.\n\n##### Parameters\n\n- `name`: The new layer name.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n      "kind": "updateName",\n      "name": "New name"\n  }]\n}\n```\n\n#### updateDescription\n\nUpdates the layer description.\n\n##### Parameters\n\n- `description`: The new description.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n      "kind": "updateDescription",\n      "description": "New description"\n  }]\n}\n```\n\n#### updateExperimentReservation\n\nAdds or updates a traffic reservation for an experiment in a layer.\n\n##### Parameters\n\n- `experimentKey`: The key of the experiment whose reservation you are adding to or updating in the layer.\n- `reservationPercent`: The amount of traffic in the layer to reserve. Must be an integer. Zero is allowed until iteration start.\n\nHere\'s an example:\n\n```json\n{\n  "environmentKey": "production",\n  "instructions": [{\n      "kind": "updateExperimentReservation",\n      "experimentKey": "exp-key",\n      "reservationPercent": 10\n  }]\n}\n```\n\n#### removeExperiment\n\nRemoves a traffic reservation for an experiment from a layer.\n\n##### Parameters\n\n- `experimentKey`: The key of the experiment whose reservation you want to remove from the layer.\n\nHere\'s an example:\n\n```json\n{\n  "environmentKey": "production",\n  "instructions": [{\n      "kind": "removeExperiment",\n      "experimentKey": "exp-key"\n  }]\n}\n```\n\n</details>\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      layerKey: {
        type: 'string',
        description: 'The layer key',
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
      environmentKey: {
        type: 'string',
        description:
          'The environment key used for making environment specific updates. For example, updating the reservation of an experiment',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { layerKey, ...body } = args as any;
  return client.api.v2.projects.layers.update(layerKey, body);
};

export default { metadata, tool, handler };
