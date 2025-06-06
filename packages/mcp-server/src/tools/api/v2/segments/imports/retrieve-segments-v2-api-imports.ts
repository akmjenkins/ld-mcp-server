// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.imports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID}',
  operationId: 'getBigSegmentImport',
};

export const tool: Tool = {
  name: 'retrieve_segments_v2_api_imports',
  description:
    'Returns information about a big segment import process. This is the import of a list-based segment that can include more than 15,000 entries.',
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
      importID: {
        type: 'string',
        description: 'The import ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { importID, ...body } = args as any;
  return asTextContentResult(await client.api.v2.segments.imports.retrieve(importID, body));
};

export default { metadata, tool, handler };
