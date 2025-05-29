// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.teams',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/teams',
  operationId: 'postTeam',
};

export const tool: Tool = {
  name: 'create_v2_api_teams',
  description:
    'Create a team. To learn more, read [Creating a team](https://launchdarkly.com/docs/home/account/create-teams).\n\n### Expanding the teams response\nLaunchDarkly supports four fields for expanding the "Create team" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n* `members` includes the total count of members that belong to the team.\n* `roles` includes a paginated list of the custom roles that you have assigned to the team.\n* `projects` includes a paginated list of the projects that the team has any write access to.\n* `maintainers` includes a paginated list of the maintainers that you have assigned to the team.\n\nFor example, `expand=members,roles` includes the `members` and `roles` fields in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'The team key',
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the team',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.',
      },
      customRoleKeys: {
        type: 'array',
        description: 'List of custom role keys the team will access',
        items: {
          type: 'string',
        },
      },
      description: {
        type: 'string',
        description: 'A description of the team',
      },
      memberIDs: {
        type: 'array',
        description: 'A list of member IDs who belong to the team',
        items: {
          type: 'string',
        },
      },
      permissionGrants: {
        type: 'array',
        description:
          'A list of permission grants. Permission grants allow access to a specific action, without having to create or update a custom role.',
        items: {
          type: 'object',
          properties: {
            actions: {
              type: 'array',
              description:
                'A list of actions to allow. Specify either <code>actionSet</code> or <code>actions</code>. To learn more, read [Role actions](https://launchdarkly.com/docs/ld-docs/home/account/role-actions).',
              items: {
                type: 'string',
              },
            },
            actionSet: {
              type: 'string',
              description:
                'A group of related actions to allow. Specify either <code>actionSet</code> or <code>actions</code>. Use <code>maintainTeam</code> to add team maintainers.',
              enum: ['maintainTeam'],
            },
            memberIDs: {
              type: 'array',
              description: 'A list of member IDs who receive the permission grant.',
              items: {
                type: 'string',
              },
            },
          },
          required: [],
        },
      },
      roleAttributes: {
        type: 'object',
        description: 'A map of role attributes for the team',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.teams.create(body);
};

export default { metadata, tool, handler };
