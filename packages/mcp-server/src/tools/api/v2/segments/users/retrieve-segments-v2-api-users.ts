// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.segments.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey}',
  operationId: 'getSegmentMembershipForUser',
};

export const tool: Tool = {
  name: 'retrieve_segments_v2_api_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n> ### Contexts are now available\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).\n\nGet the membership status (included/excluded) for a given user in this big segment. This operation does not support standard segments.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/big_segment_target',\n  $defs: {\n    big_segment_target: {\n      type: 'object',\n      properties: {\n        excluded: {\n          type: 'boolean',\n          description: 'Indicates whether the target is excluded.<br />Segment rules bypass excluded targets, so they will never be included based on rules. Excluded targets may still be included explicitly.'\n        },\n        included: {\n          type: 'boolean',\n          description: 'Indicates whether the target is included.<br />Included targets are always segment members, regardless of segment rules.'\n        },\n        userKey: {\n          type: 'string',\n          description: 'The target key'\n        }\n      },\n      required: [        'excluded',\n        'included',\n        'userKey'\n      ]\n    }\n  }\n}\n```",
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
      userKey: {
        type: 'string',
        description: 'The user key',
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
  const { userKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.segments.users.retrieve(userKey, body)),
  );
};

export default { metadata, tool, handler };
