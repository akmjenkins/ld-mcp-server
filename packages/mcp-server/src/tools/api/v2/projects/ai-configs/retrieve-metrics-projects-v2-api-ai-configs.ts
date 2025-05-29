// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Retrieve usage metrics for an AI Config by config key.',
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
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { configKey, ...body } = args as any;
  return client.api.v2.projects.aiConfigs.retrieveMetrics(configKey, body);
};

export default { metadata, tool, handler };
