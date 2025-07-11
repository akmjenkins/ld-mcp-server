// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/user-search/{projectKey}/{environmentKey}',
  operationId: 'getSearchUsers',
};

export const tool: Tool = {
  name: 'retrieve_api_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n> ### Use contexts instead\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Search for context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/search-context-instances) instead of this endpoint.\n\nSearch users in LaunchDarkly based on their last active date, a user attribute filter set, or a search query.\n\nAn example user attribute filter set is `filter=firstName:Anna,activeTrial:false`. This matches users that have the user attribute `firstName` set to `Anna`, that also have the attribute `activeTrial` set to `false`.\n\nTo paginate through results, follow the `next` link in the `_links` object. To learn more, read [Representations](https://launchdarkly.com/docs/ld-docs/api#representations).\n",
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
      after: {
        type: 'integer',
        description:
          'A Unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of user attribute filters. Each filter is in the form of attributeKey:attributeValue',
      },
      limit: {
        type: 'integer',
        description:
          'Specifies the maximum number of items in the collection to return (max: 50, default: 20)',
      },
      offset: {
        type: 'integer',
        description:
          'Deprecated, use `searchAfter` instead. Specifies the first item to return in the collection.',
      },
      q: {
        type: 'string',
        description:
          'Full-text search for users based on name, first name, last name, e-mail address, or key',
      },
      searchAfter: {
        type: 'string',
        description:
          'Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead.',
      },
      sort: {
        type: 'string',
        description:
          'Specifies a field by which to sort. LaunchDarkly supports the `userKey` and `lastSeen` fields. Fields prefixed by a dash ( - ) sort in descending order.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.retrieve(environmentKey, body));
};

export default { metadata, tool, handler };
