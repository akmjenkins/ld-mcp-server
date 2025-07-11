// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.metric_groups',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}',
  operationId: 'patchMetricGroup',
};

export const tool: Tool = {
  name: 'update_projects_v2_api_metric_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPatch a metric group by key. Updating a metric group uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes.",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      metricGroupKey: {
        type: 'string',
        description: 'The metric group key',
      },
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
    },
    $defs: {
      patch_operation: {
        type: 'object',
        properties: {
          op: {
            type: 'string',
            description: 'The type of operation to perform',
          },
          path: {
            type: 'string',
            description: 'A JSON Pointer string specifying the part of the document to operate on',
          },
          value: {
            type: 'object',
            description: 'A JSON value used in "add", "replace", and "test" operations',
          },
        },
        required: ['op', 'path'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { metricGroupKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.metricGroups.update(metricGroupKey, body));
};

export default { metadata, tool, handler };
