// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.imports',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports',
  operationId: 'createBigSegmentImport',
};

export const tool: Tool = {
  name: 'create_segments_v2_api_imports',
  description:
    'Start a new import process for a big segment. This is an import for a list-based segment that can include more than 15,000 entries.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      segmentKey: {
        type: 'string',
        description: 'The segment key',
      },
      file: {
        type: 'string',
        description: 'CSV file containing keys',
      },
      mode: {
        type: 'string',
        description: 'Import mode. Use either `merge` or `replace`',
      },
      waitOnApprovals: {
        type: 'boolean',
        description: 'Whether to wait for approvals before processing the import',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { segmentKey, ...body } = args as any;
  await client.api.v2.segments.imports.create(segmentKey, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
