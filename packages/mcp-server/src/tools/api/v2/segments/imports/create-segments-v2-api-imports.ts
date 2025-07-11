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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nStart a new import process for a big segment. This is an import for a list-based segment that can include more than 15,000 entries.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
  const { segmentKey, ...body } = args as any;
  const response = await client.api.v2.segments.imports.create(segmentKey, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
