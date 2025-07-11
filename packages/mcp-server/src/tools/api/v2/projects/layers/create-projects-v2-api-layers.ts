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
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/layers',
  operationId: 'createLayer',
};

export const tool: Tool = {
  name: 'create_projects_v2_api_layers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a layer. Experiments running in the same layer are granted mutually-exclusive traffic.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/layer_rep',\n  $defs: {\n    layer_rep: {\n      type: 'object',\n      properties: {\n        createdAt: {\n          type: 'integer',\n          description: 'The date and time when the layer was created'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the layer'\n        },\n        key: {\n          type: 'string',\n          description: 'The key of the layer'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the layer'\n        },\n        environments: {\n          type: 'object',\n          description: 'The layer configurations for each requested environment'\n        },\n        randomizationUnit: {\n          type: 'string',\n          description: 'The unit of randomization for the layer'\n        }\n      },\n      required: [        'createdAt',\n        'description',\n        'key',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      description: {
        type: 'string',
        description: 'The checkout flow for the application',
      },
      key: {
        type: 'string',
        description: 'Unique identifier for the layer',
      },
      name: {
        type: 'string',
        description: 'Layer name',
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
  const { projectKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.layers.create(projectKey, body)),
  );
};

export default { metadata, tool, handler };
