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
  httpPath: '/api/v2/teams/{teamKey}',
  operationId: 'getTeam',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_teams',
  description:
    'Fetch a team by key.\n\n### Expanding the teams response\nLaunchDarkly supports several fields for expanding the "Get team" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n* `members` includes the total count of members that belong to the team.\n* `roles` includes a paginated list of the custom roles that you have assigned to the team.\n* `roleAttributes` includes a list of the role attributes that you have assigned to the team.\n* `projects` includes a paginated list of the projects that the team has any write access to.\n* `maintainers` includes a paginated list of the maintainers that you have assigned to the team.\n\nFor example, `expand=members,roles` includes the `members` and `roles` fields in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      teamKey: {
        type: 'string',
        description: 'The team key.',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { teamKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.teams.retrieve(teamKey, body));
};

export default { metadata, tool, handler };
