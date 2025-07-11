// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs.model_configs.restricted',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/model-configs/restricted',
  operationId: 'deleteRestrictedModels',
};

export const tool: Tool = {
  name: 'delete_all_model_configs_ai_configs_projects_v2_api_restricted',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemove AI models, by key, from the restricted list.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
  const response = await client.api.v2.projects.aiConfigs.modelConfigs.restricted
    .deleteAll(projectKey, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
