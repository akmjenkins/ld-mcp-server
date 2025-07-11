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
  httpMethod: 'patch',
  httpPath: '/api/v2/members/{id}',
  operationId: 'patchMember',
};

export const tool: Tool = {
  name: 'update_v2_api_members',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\nUpdate a single account member. Updating a member uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).\n\nTo update fields in the account member object that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array. For example, to add a new custom role to a member, use the following request body:\n\n```\n  [\n    {\n      \"op\": \"add\",\n      \"path\": \"/customRoles/0\",\n      \"value\": \"some-role-id\"\n    }\n  ]\n```\n\nYou can update only an account member's role or custom role using a JSON patch. Members can update their own names and email addresses though the LaunchDarkly UI.\n\nWhen SAML SSO or SCIM is enabled for the account, account members are managed in the Identity Provider (IdP). Requests to update account members will succeed, but the IdP will override the update shortly afterwards.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/member',\n  $defs: {\n    member: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The member\\'s ID'\n        },\n        _lastSeen: {\n          type: 'integer',\n          description: 'The member\\'s last session date (as Unix milliseconds since epoch)'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        _pendingInvite: {\n          type: 'boolean',\n          description: 'Whether the member has a pending invitation'\n        },\n        _verified: {\n          type: 'boolean',\n          description: 'Whether the member\\'s email address has been verified'\n        },\n        creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the member was created'\n        },\n        customRoles: {\n          type: 'array',\n          description: 'The set of custom roles (as keys) assigned to the member',\n          items: {\n            type: 'string'\n          }\n        },\n        email: {\n          type: 'string',\n          description: 'The member\\'s email address'\n        },\n        mfa: {\n          type: 'string',\n          description: 'Whether multi-factor authentication is enabled for this member'\n        },\n        role: {\n          type: 'string',\n          description: 'The member\\'s built-in role. If the member has no custom roles, this role will be in effect.'\n        },\n        _integrationMetadata: {\n          $ref: '#/$defs/integration_metadata'\n        },\n        _lastSeenMetadata: {\n          type: 'object',\n          description: 'Additional metadata associated with the member\\'s last session, for example, whether a token was used',\n          properties: {\n            tokenId: {\n              type: 'string',\n              description: 'The ID of the token used in the member\\'s last session'\n            }\n          },\n          required: []\n        },\n        _pendingEmail: {\n          type: 'string',\n          description: 'The member\\'s email address before it has been verified, for accounts where email verification is required'\n        },\n        excludedDashboards: {\n          type: 'array',\n          description: 'Default dashboards that the member has chosen to ignore',\n          items: {\n            type: 'string'\n          }\n        },\n        firstName: {\n          type: 'string',\n          description: 'The member\\'s first name'\n        },\n        lastName: {\n          type: 'string',\n          description: 'The member\\'s last name'\n        },\n        oauthProviders: {\n          type: 'array',\n          description: 'A list of OAuth providers',\n          items: {\n            type: 'string'\n          }\n        },\n        permissionGrants: {\n          type: 'array',\n          description: 'A list of permission grants. Permission grants allow a member to have access to a specific action, without having to create or update a custom role.',\n          items: {\n            type: 'object',\n            properties: {\n              resource: {\n                type: 'string',\n                description: 'The resource for which the actions are allowed'\n              },\n              actions: {\n                type: 'array',\n                description: 'A list of actions to allow. A permission grant may have either an <code>actionSet</code> or a list of <code>actions</code> but not both at the same time.',\n                items: {\n                  type: 'string'\n                }\n              },\n              actionSet: {\n                type: 'string',\n                description: 'The name of the group of related actions to allow. A permission grant may have either an <code>actionSet</code> or a list of <code>actions</code> but not both at the same time.'\n              }\n            },\n            required: [              'resource'\n            ]\n          }\n        },\n        roleAttributes: {\n          type: 'object',\n          description: 'The role attributes for the member'\n        },\n        teams: {\n          type: 'array',\n          description: 'Details on the teams this member is assigned to',\n          items: {\n            $ref: '#/$defs/member_team_summary_rep'\n          }\n        },\n        version: {\n          type: 'integer',\n          description: 'Version of the current configuration'\n        }\n      },\n      required: [        '_id',\n        '_lastSeen',\n        '_links',\n        '_pendingInvite',\n        '_verified',\n        'creationDate',\n        'customRoles',\n        'email',\n        'mfa',\n        'role'\n      ]\n    },\n    integration_metadata: {\n      type: 'object',\n      properties: {\n        externalId: {\n          type: 'string'\n        },\n        externalStatus: {\n          type: 'object',\n          properties: {\n            display: {\n              type: 'string'\n            },\n            value: {\n              type: 'string'\n            }\n          },\n          required: [            'display',\n            'value'\n          ]\n        },\n        externalUrl: {\n          type: 'string'\n        },\n        lastChecked: {\n          type: 'integer'\n        }\n      },\n      required: [        'externalId',\n        'externalStatus',\n        'externalUrl',\n        'lastChecked'\n      ]\n    },\n    member_team_summary_rep: {\n      type: 'object',\n      properties: {\n        customRoleKeys: {\n          type: 'array',\n          description: 'A list of keys of the custom roles this team has access to',\n          items: {\n            type: 'string'\n          }\n        },\n        key: {\n          type: 'string',\n          description: 'The team key'\n        },\n        name: {\n          type: 'string',\n          description: 'The team name'\n        },\n        _links: {\n          type: 'object'\n        }\n      },\n      required: [        'customRoleKeys',\n        'key',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The member ID',
      },
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      patch_operation: {
        type: 'object',
        properties: {
          op: {
            type: 'string',
            description: 'The type of operation to perform',
          },
          path: {
            type: 'string',
            description: 'A JSON Pointer string specifying the part of the document to operate on',
          },
          value: {
            type: 'object',
            description: 'A JSON value used in "add", "replace", and "test" operations',
          },
        },
        required: ['op', 'path'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.members.update(id, body)));
};

export default { metadata, tool, handler };
