// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.teams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/teams',
  operationId: 'getTeams',
};

export const tool: Tool = {
  name: 'list_v2_api_teams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn a list of teams.\n\nBy default, this returns the first 20 teams. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.\n\n### Filtering teams\n\nLaunchDarkly supports the following fields for filters:\n\n- `query` is a string that matches against the teams' names and keys. It is not case-sensitive.\n  - A request with `query:abc` returns teams with the string `abc` in their name or key.\n- `nomembers` is a boolean that filters the list of teams who have 0 members\n  - A request with `nomembers:true` returns teams that have 0 members\n  - A request with `nomembers:false` returns teams that have 1 or more members\n\n### Expanding the teams response\nLaunchDarkly supports expanding several fields in the \"List teams\" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n* `members` includes the total count of members that belong to the team.\n* `roles` includes a paginated list of the custom roles that you have assigned to the team.\n* `roleAttributes` includes a list of the role attributes that you have assigned to the team.\n* `projects` includes a paginated list of the projects that the team has any write access to.\n* `maintainers` includes a paginated list of the maintainers that you have assigned to the team.\n\nFor example, `expand=members,maintainers` includes the `members` and `maintainers` fields in the response.\n",
  inputSchema: {
    type: 'object',
    properties: {
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
      filter: {
        type: 'string',
        description: 'A comma-separated list of filters. Each filter is constructed as `field:value`.',
      },
      limit: {
        type: 'integer',
        description: 'The number of teams to return in the response. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.teams.list(body));
};

export default { metadata, tool, handler };
