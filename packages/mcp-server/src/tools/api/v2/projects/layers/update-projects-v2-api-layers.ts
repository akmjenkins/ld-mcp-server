// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.layers',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/projects/{projectKey}/layers/{layerKey}',
  operationId: 'updateLayer',
};

export const tool: Tool = {
  name: 'update_projects_v2_api_layers',
  description:
    'When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you\'re sure you don\'t need the data.\n\nUpdate a layer by adding, changing, or removing traffic reservations for experiments, or by changing layer name or description.\nUpdating a layer uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating layers.\n\n<details>\n<summary>Click to expand instructions for <strong>updating layers</strong></summary>\n\n#### updateName\n\nUpdates the layer name.\n\n##### Parameters\n\n- `name`: The new layer name.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n      "kind": "updateName",\n      "name": "New name"\n  }]\n}\n```\n\n#### updateDescription\n\nUpdates the layer description.\n\n##### Parameters\n\n- `description`: The new description.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n      "kind": "updateDescription",\n      "description": "New description"\n  }]\n}\n```\n\n#### updateExperimentReservation\n\nAdds or updates a traffic reservation for an experiment in a layer.\n\n##### Parameters\n\n- `experimentKey`: The key of the experiment whose reservation you are adding to or updating in the layer.\n- `reservationPercent`: The amount of traffic in the layer to reserve. Must be an integer. Zero is allowed until iteration start.\n\nHere\'s an example:\n\n```json\n{\n  "environmentKey": "production",\n  "instructions": [{\n      "kind": "updateExperimentReservation",\n      "experimentKey": "exp-key",\n      "reservationPercent": 10\n  }]\n}\n```\n\n#### removeExperiment\n\nRemoves a traffic reservation for an experiment from a layer.\n\n##### Parameters\n\n- `experimentKey`: The key of the experiment whose reservation you want to remove from the layer.\n\nHere\'s an example:\n\n```json\n{\n  "environmentKey": "production",\n  "instructions": [{\n      "kind": "removeExperiment",\n      "experimentKey": "exp-key"\n  }]\n}\n```\n\n</details>\n\n\n# Response Schema\n```json\n{\n  $ref: \'#/$defs/layer_rep\',\n  $defs: {\n    layer_rep: {\n      type: \'object\',\n      properties: {\n        createdAt: {\n          type: \'integer\',\n          description: \'The date and time when the layer was created\'\n        },\n        description: {\n          type: \'string\',\n          description: \'The description of the layer\'\n        },\n        key: {\n          type: \'string\',\n          description: \'The key of the layer\'\n        },\n        name: {\n          type: \'string\',\n          description: \'The name of the layer\'\n        },\n        environments: {\n          type: \'object\',\n          description: \'The layer configurations for each requested environment\'\n        },\n        randomizationUnit: {\n          type: \'string\',\n          description: \'The unit of randomization for the layer\'\n        }\n      },\n      required: [        \'createdAt\',\n        \'description\',\n        \'key\',\n        \'name\'\n      ]\n    }\n  }\n}\n```',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { layerKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.layers.update(layerKey, body)),
  );
};

export default { metadata, tool, handler };
