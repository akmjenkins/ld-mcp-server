// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    'Invite one or more new members to join an account. Each member is sent an invitation. Members with "admin" or "owner" roles may create new members, as well as anyone with a "createMember" permission for "member/\\*". If a member cannot be invited, the entire request is rejected and no members are invited from that request.\n\nEach member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the "message" field of the response.\n\nRequests to create account members will not work if SCIM is enabled for the account.\n\n_No more than 50 members may be created per request._\n\nA request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:\n\n- **email_already_exists_in_account**: A member with this email address already exists in this account.\n- **email_taken_in_different_account**: A member with this email address exists in another account.\n- **duplicate_email**s: This request contains two or more members with the same email address.\n\nA request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request).\n',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.members.create(body));
};

export default { metadata, tool, handler };
