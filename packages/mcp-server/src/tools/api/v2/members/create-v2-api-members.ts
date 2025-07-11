// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.members',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/members',
  operationId: 'postMembers',
};

export const tool: Tool = {
  name: 'create_v2_api_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInvite one or more new members to join an account. Each member is sent an invitation. Members with \"admin\" or \"owner\" roles may create new members, as well as anyone with a \"createMember\" permission for \"member/\\*\". If a member cannot be invited, the entire request is rejected and no members are invited from that request.\n\nEach member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the \"message\" field of the response.\n\nRequests to create account members will not work if SCIM is enabled for the account.\n\n_No more than 50 members may be created per request._\n\nA request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:\n\n- **email_already_exists_in_account**: A member with this email address already exists in this account.\n- **email_taken_in_different_account**: A member with this email address exists in another account.\n- **duplicate_email**s: This request contains two or more members with the same email address.\n\nA request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request).\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/members',\n  $defs: {\n    members: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        items: {\n          type: 'array',\n          description: 'An array of members',\n          items: {\n            $ref: '#/$defs/member'\n          }\n        },\n        totalCount: {\n          type: 'integer',\n          description: 'The number of members returned'\n        }\n      },\n      required: [        '_links',\n        'items'\n      ]\n    },\n    member: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The member\\'s ID'\n        },\n        _lastSeen: {\n          type: 'integer',\n          description: 'The member\\'s last session date (as Unix milliseconds since epoch)'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        _pendingInvite: {\n          type: 'boolean',\n          description: 'Whether the member has a pending invitation'\n        },\n        _verified: {\n          type: 'boolean',\n          description: 'Whether the member\\'s email address has been verified'\n        },\n        creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the member was created'\n        },\n        customRoles: {\n          type: 'array',\n          description: 'The set of custom roles (as keys) assigned to the member',\n          items: {\n            type: 'string'\n          }\n        },\n        email: {\n          type: 'string',\n          description: 'The member\\'s email address'\n        },\n        mfa: {\n          type: 'string',\n          description: 'Whether multi-factor authentication is enabled for this member'\n        },\n        role: {\n          type: 'string',\n          description: 'The member\\'s built-in role. If the member has no custom roles, this role will be in effect.'\n        },\n        _integrationMetadata: {\n          $ref: '#/$defs/integration_metadata'\n        },\n        _lastSeenMetadata: {\n          type: 'object',\n          description: 'Additional metadata associated with the member\\'s last session, for example, whether a token was used',\n          properties: {\n            tokenId: {\n              type: 'string',\n              description: 'The ID of the token used in the member\\'s last session'\n            }\n          },\n          required: []\n        },\n        _pendingEmail: {\n          type: 'string',\n          description: 'The member\\'s email address before it has been verified, for accounts where email verification is required'\n        },\n        excludedDashboards: {\n          type: 'array',\n          description: 'Default dashboards that the member has chosen to ignore',\n          items: {\n            type: 'string'\n          }\n        },\n        firstName: {\n          type: 'string',\n          description: 'The member\\'s first name'\n        },\n        lastName: {\n          type: 'string',\n          description: 'The member\\'s last name'\n        },\n        oauthProviders: {\n          type: 'array',\n          description: 'A list of OAuth providers',\n          items: {\n            type: 'string'\n          }\n        },\n        permissionGrants: {\n          type: 'array',\n          description: 'A list of permission grants. Permission grants allow a member to have access to a specific action, without having to create or update a custom role.',\n          items: {\n            type: 'object',\n            properties: {\n              resource: {\n                type: 'string',\n                description: 'The resource for which the actions are allowed'\n              },\n              actions: {\n                type: 'array',\n                description: 'A list of actions to allow. A permission grant may have either an <code>actionSet</code> or a list of <code>actions</code> but not both at the same time.',\n                items: {\n                  type: 'string'\n                }\n              },\n              actionSet: {\n                type: 'string',\n                description: 'The name of the group of related actions to allow. A permission grant may have either an <code>actionSet</code> or a list of <code>actions</code> but not both at the same time.'\n              }\n            },\n            required: [              'resource'\n            ]\n          }\n        },\n        roleAttributes: {\n          type: 'object',\n          description: 'The role attributes for the member'\n        },\n        teams: {\n          type: 'array',\n          description: 'Details on the teams this member is assigned to',\n          items: {\n            $ref: '#/$defs/member_team_summary_rep'\n          }\n        },\n        version: {\n          type: 'integer',\n          description: 'Version of the current configuration'\n        }\n      },\n      required: [        '_id',\n        '_lastSeen',\n        '_links',\n        '_pendingInvite',\n        '_verified',\n        'creationDate',\n        'customRoles',\n        'email',\n        'mfa',\n        'role'\n      ]\n    },\n    integration_metadata: {\n      type: 'object',\n      properties: {\n        externalId: {\n          type: 'string'\n        },\n        externalStatus: {\n          type: 'object',\n          properties: {\n            display: {\n              type: 'string'\n            },\n            value: {\n              type: 'string'\n            }\n          },\n          required: [            'display',\n            'value'\n          ]\n        },\n        externalUrl: {\n          type: 'string'\n        },\n        lastChecked: {\n          type: 'integer'\n        }\n      },\n      required: [        'externalId',\n        'externalStatus',\n        'externalUrl',\n        'lastChecked'\n      ]\n    },\n    member_team_summary_rep: {\n      type: 'object',\n      properties: {\n        customRoleKeys: {\n          type: 'array',\n          description: 'A list of keys of the custom roles this team has access to',\n          items: {\n            type: 'string'\n          }\n        },\n        key: {\n          type: 'string',\n          description: 'The team key'\n        },\n        name: {\n          type: 'string',\n          description: 'The team name'\n        },\n        _links: {\n          type: 'object'\n        }\n      },\n      required: [        'customRoleKeys',\n        'key',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
              description: "The member's email",
            },
            customRoles: {
              type: 'array',
              description: "An array of the member's custom roles",
              items: {
                type: 'string',
              },
            },
            firstName: {
              type: 'string',
              description: "The member's first name",
            },
            lastName: {
              type: 'string',
              description: "The member's last name",
            },
            password: {
              type: 'string',
              description: "The member's password",
            },
            role: {
              type: 'string',
              description: "The member's built-in role",
              enum: ['reader', 'writer', 'admin', 'no_access'],
            },
            roleAttributes: {
              type: 'object',
              description: 'An object of role attributes for the member',
            },
            teamKeys: {
              type: 'array',
              description: "An array of the member's teams",
              items: {
                type: 'string',
              },
            },
          },
          required: ['email'],
        },
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.members.create(body)));
};

export default { metadata, tool, handler };
