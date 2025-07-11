// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.ai_configs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics',
  operationId: 'getAIConfigMetrics',
};

export const tool: Tool = {
  name: 'retrieve_metrics_projects_v2_api_ai_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve usage metrics for an AI Config by config key.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/metrics',\n  $defs: {\n    metrics: {\n      type: 'object',\n      properties: {\n        durationMs: {\n          type: 'integer'\n        },\n        generationCount: {\n          type: 'integer',\n          description: 'Number of attempted generations'\n        },\n        generationErrorCount: {\n          type: 'integer',\n          description: 'Number of generations with errors'\n        },\n        generationSuccessCount: {\n          type: 'integer',\n          description: 'Number of successful generations'\n        },\n        inputCost: {\n          type: 'number',\n          description: 'Cost of input tokens in USD'\n        },\n        inputTokens: {\n          type: 'integer'\n        },\n        outputCost: {\n          type: 'number',\n          description: 'Cost of output tokens in USD'\n        },\n        outputTokens: {\n          type: 'integer'\n        },\n        satisfactionRating: {\n          type: 'number',\n          description: 'A value between 0 and 1 representing satisfaction rating'\n        },\n        thumbsDown: {\n          type: 'integer'\n        },\n        thumbsUp: {\n          type: 'integer'\n        },\n        timeToFirstTokenMs: {\n          type: 'integer'\n        },\n        totalTokens: {\n          type: 'integer'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
      },
      configKey: {
        type: 'string',
      },
      env: {
        type: 'string',
        description: 'An environment key. Only metrics from this environment will be included.',
      },
      from: {
        type: 'integer',
        description: 'The starting time, as milliseconds since epoch (inclusive).',
      },
      to: {
        type: 'integer',
        description:
          'The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after `from`.',
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
  const { configKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.aiConfigs.retrieveMetrics(configKey, body)),
  );
};

export default { metadata, tool, handler };
