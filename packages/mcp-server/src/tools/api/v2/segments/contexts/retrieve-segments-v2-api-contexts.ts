// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.contexts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey}',
  operationId: 'getSegmentMembershipForContext',
};

export const tool: Tool = {
  name: 'retrieve_segments_v2_api_contexts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the membership status (included/excluded) for a given context in this big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/big_segment_target',\n  $defs: {\n    big_segment_target: {\n      type: 'object',\n      properties: {\n        excluded: {\n          type: 'boolean',\n          description: 'Indicates whether the target is excluded.<br />Segment rules bypass excluded targets, so they will never be included based on rules. Excluded targets may still be included explicitly.'\n        },\n        included: {\n          type: 'boolean',\n          description: 'Indicates whether the target is included.<br />Included targets are always segment members, regardless of segment rules.'\n        },\n        userKey: {\n          type: 'string',\n          description: 'The target key'\n        }\n      },\n      required: [        'excluded',\n        'included',\n        'userKey'\n      ]\n    }\n  }\n}\n```",
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
      contextKey: {
        type: 'string',
        description: 'The context key',
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
  const { contextKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.segments.contexts.retrieve(contextKey, body)),
  );
};

export default { metadata, tool, handler };
