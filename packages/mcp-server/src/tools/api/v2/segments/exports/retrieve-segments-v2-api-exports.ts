// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.exports',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID}',
  operationId: 'getBigSegmentExport',
};

export const tool: Tool = {
  name: 'retrieve_segments_v2_api_exports',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns information about a big segment export process. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'The export ID'\n    },\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources, including the location of the exported file'\n    },\n    creationTime: {\n      type: 'integer',\n      description: 'Timestamp of when this export was created'\n    },\n    initiator: {\n      type: 'object',\n      description: 'Details on the member who initiated the export',\n      properties: {\n        email: {\n          type: 'string',\n          description: 'The email address of the member who initiated the export'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the member who initiated the export'\n        }\n      },\n      required: []\n    },\n    segmentKey: {\n      type: 'string',\n      description: 'The segment key'\n    },\n    size: {\n      type: 'string',\n      description: 'The export size, with units'\n    },\n    sizeBytes: {\n      type: 'integer',\n      description: 'The export size, in bytes'\n    },\n    status: {\n      type: 'string',\n      description: 'The export status'\n    }\n  },\n  required: [    'id',\n    '_links',\n    'creationTime',\n    'initiator',\n    'segmentKey',\n    'size',\n    'sizeBytes',\n    'status'\n  ]\n}\n```",
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
      exportID: {
        type: 'string',
        description: 'The export ID',
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
  const { exportID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.segments.exports.retrieve(exportID, body)),
  );
};

export default { metadata, tool, handler };
