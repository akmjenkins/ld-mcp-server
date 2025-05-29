// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.insights.groups',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/engineering-insights/insights/groups/{insightGroupKey}',
  operationId: 'patchInsightGroup',
};

export const tool: Tool = {
  name: 'update_insights_engineering_insights_v2_api_groups',
  description:
    'Update an insight group. Updating an insight group uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).',
  inputSchema: {
    type: 'object',
    properties: {
      insightGroupKey: {
        type: 'string',
        description: 'The insight group key',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { insightGroupKey, ...body } = args as any;
  return client.api.v2.engineeringInsights.insights.groups.update(insightGroupKey, body);
};

export default { metadata, tool, handler };
