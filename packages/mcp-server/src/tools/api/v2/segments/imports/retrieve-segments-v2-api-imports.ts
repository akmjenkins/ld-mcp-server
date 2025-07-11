// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns information about a big segment import process. This is the import of a list-based segment that can include more than 15,000 entries.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'The import ID'\n    },\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    creationTime: {\n      type: 'integer',\n      description: 'Timestamp of when this import was created'\n    },\n    mode: {\n      type: 'string',\n      description: 'The import mode used, either <code>merge</code> or <code>replace</code>'\n    },\n    segmentKey: {\n      type: 'string',\n      description: 'The segment key'\n    },\n    status: {\n      type: 'string',\n      description: 'The import status',\n      enum: [        'preparing',\n        'pending_approval',\n        'ready',\n        'in_progress',\n        'complete',\n        'stopped'\n      ]\n    },\n    files: {\n      type: 'array',\n      description: 'The imported files and their status',\n      items: {\n        type: 'object',\n        properties: {\n          filename: {\n            type: 'string',\n            description: 'The imported file name, including the extension'\n          },\n          status: {\n            type: 'string',\n            description: 'The imported file status'\n          }\n        },\n        required: []\n      }\n    }\n  },\n  required: [    'id',\n    '_links',\n    'creationTime',\n    'mode',\n    'segmentKey',\n    'status'\n  ]\n}\n```",
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
  const { importID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.segments.imports.retrieve(importID, body)),
  );
};

export default { metadata, tool, handler };
