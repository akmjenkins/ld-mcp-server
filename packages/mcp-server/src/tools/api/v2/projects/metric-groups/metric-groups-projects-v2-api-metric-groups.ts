// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.metric_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/metric-groups',
  operationId: 'createMetricGroup',
};

export const tool: Tool = {
  name: 'metric_groups_projects_v2_api_metric_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new metric group in the specified project",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      key: {
        type: 'string',
        description: 'A unique key to reference the metric group',
      },
      kind: {
        type: 'string',
        description: 'The type of the metric group',
        enum: ['funnel'],
      },
      maintainerId: {
        type: 'string',
        description: 'The ID of the member who maintains this metric group',
      },
      metrics: {
        type: 'array',
        description: 'An ordered list of the metrics in this metric group',
        items: {
          type: 'object',
          properties: {
            key: {
              type: 'string',
              description: 'The metric key',
            },
            nameInGroup: {
              type: 'string',
              description:
                'Name of the metric when used within the associated metric group. Can be different from the original name of the metric',
            },
          },
          required: ['key', 'nameInGroup'],
        },
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the metric group',
      },
      tags: {
        type: 'array',
        description: 'Tags for the metric group',
        items: {
          type: 'string',
        },
      },
      description: {
        type: 'string',
        description: 'Description of the metric group',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.metricGroups.metricGroups(projectKey, body));
};

export default { metadata, tool, handler };
