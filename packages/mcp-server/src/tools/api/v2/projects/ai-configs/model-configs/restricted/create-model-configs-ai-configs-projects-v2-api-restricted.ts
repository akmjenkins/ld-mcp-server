// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.model_configs.restricted',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/model-configs/restricted',
  operationId: 'postRestrictedModels',
};

export const tool: Tool = {
  name: 'create_model_configs_ai_configs_projects_v2_api_restricted',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd AI models, by key, to the restricted list. Keys are included in the response from the [List AI model configs](https://launchdarkly.com/docs/api/ai-configs-beta/list-model-configs) endpoint.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    errors: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          code: {\n            type: 'integer'\n          },\n          key: {\n            type: 'string'\n          },\n          message: {\n            type: 'string'\n          }\n        },\n        required: [          'code',\n          'key',\n          'message'\n        ]\n      }\n    },\n    successes: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    }\n  },\n  required: [    'errors',\n    'successes'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      keys: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      'LD-API-Version': {
        type: 'string',
        enum: ['beta'],
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
    await maybeFilter(
      args,
      await client.api.v2.projects.aiConfigs.modelConfigs.restricted.create(projectKey, body),
    ),
  );
};

export default { metadata, tool, handler };
