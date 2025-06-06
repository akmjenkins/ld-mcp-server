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
  httpPath: '/api/v2/teams/{teamKey}/maintainers',
  operationId: 'getTeamMaintainers',
};

export const tool: Tool = {
  name: 'retrieve_maintainers_v2_api_teams',
  description:
    'Fetch the maintainers that have been assigned to the team. To learn more, read [Managing team maintainers](https://launchdarkly.com/docs/home/account/team-maintainers).',
  inputSchema: {
    type: 'object',
    properties: {
      teamKey: {
        type: 'string',
        description: 'The team key',
      },
      limit: {
        type: 'integer',
        description: 'The number of maintainers to return in the response. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { teamKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.teams.retrieveMaintainers(teamKey, body));
};

export default { metadata, tool, handler };
