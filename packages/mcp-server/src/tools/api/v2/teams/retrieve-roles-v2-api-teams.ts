// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.teams',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/teams/{teamKey}/roles',
  operationId: 'getTeamRoles',
};

export const tool: Tool = {
  name: 'retrieve_roles_v2_api_teams',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFetch the custom roles that have been assigned to the team. To learn more, read [Managing team permissions](https://launchdarkly.com/docs/home/account/team-permissions).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/team_custom_roles',\n  $defs: {\n    team_custom_roles: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        items: {\n          type: 'array',\n          description: 'An array of the custom roles that have been assigned to this team',\n          items: {\n            type: 'object',\n            properties: {\n              appliedOn: {\n                type: 'integer',\n                description: 'Timestamp of when the custom role was assigned to this team'\n              },\n              key: {\n                type: 'string',\n                description: 'The key of the custom role'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the custom role'\n              },\n              projects: {\n                $ref: '#/$defs/team_projects'\n              }\n            },\n            required: []\n          }\n        },\n        totalCount: {\n          type: 'integer',\n          description: 'The number of custom roles assigned to this team'\n        }\n      },\n      required: []\n    },\n    team_projects: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'array',\n          description: 'Details on each project where team members have write privileges on at least one resource type (e.g. flags)',\n          items: {\n            $ref: '#/$defs/project_summary'\n          }\n        },\n        totalCount: {\n          type: 'integer'\n        }\n      },\n      required: []\n    },\n    project_summary: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this project'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        key: {\n          type: 'string',\n          description: 'The project key'\n        },\n        name: {\n          type: 'string',\n          description: 'The project name'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'key',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      teamKey: {
        type: 'string',
        description: 'The team key',
      },
      limit: {
        type: 'integer',
        description: 'The number of roles to return in the response. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
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
  const { teamKey, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.teams.retrieveRoles(teamKey, body)));
};

export default { metadata, tool, handler };
