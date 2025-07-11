// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users.flags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags',
  operationId: 'getUserFlagSettings',
};

export const tool: Tool = {
  name: 'list_users_v2_api_flags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the current flag settings for a given user. <br /><br />The `_value` is the flag variation that the user receives. The `setting` indicates whether you've explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled and the `alternate.page` flag disabled, and that the user has not been explicitly targeted to receive a particular variation.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    items: {\n      type: 'object',\n      description: 'An array of flag settings for the user'\n    }\n  },\n  required: [    '_links',\n    'items'\n  ]\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.users.flags.list(userKey, body)));
};

export default { metadata, tool, handler };
