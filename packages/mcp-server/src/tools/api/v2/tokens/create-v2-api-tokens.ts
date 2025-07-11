// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.tokens',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/tokens',
  operationId: 'postToken',
};

export const tool: Tool = {
  name: 'create_v2_api_tokens',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new access token.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token',\n  $defs: {\n    token: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of the access token'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the access token was created'\n        },\n        lastModified: {\n          type: 'integer',\n          description: 'Timestamp of the last modification of the access token'\n        },\n        memberId: {\n          type: 'string',\n          description: 'The ID of the member who created the access token'\n        },\n        ownerId: {\n          type: 'string',\n          description: 'The ID of the owner of the account for the access token'\n        },\n        token: {\n          type: 'string',\n          description: 'The token value. When creating or resetting, contains the entire token value. Otherwise, contains the last four characters.'\n        },\n        _member: {\n          $ref: '#/$defs/member_summary'\n        },\n        customRoleIds: {\n          type: 'array',\n          description: 'A list of custom role IDs to use as access limits for the access token',\n          items: {\n            type: 'string'\n          }\n        },\n        defaultApiVersion: {\n          type: 'integer',\n          description: 'The default API version for this token'\n        },\n        description: {\n          type: 'string',\n          description: 'A description for the access token'\n        },\n        inlineRole: {\n          type: 'array',\n          description: 'An array of policy statements, with three attributes: effect, resources, actions. May be used in place of a built-in or custom role.',\n          items: {\n            $ref: '#/$defs/statement'\n          }\n        },\n        lastUsed: {\n          type: 'integer',\n          description: 'Timestamp of when the access token was last used'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-friendly name for the access token'\n        },\n        role: {\n          type: 'string',\n          description: 'Built-in role for the token'\n        },\n        serviceToken: {\n          type: 'boolean',\n          description: 'Whether this is a service token or a personal token'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'creationDate',\n        'lastModified',\n        'memberId',\n        'ownerId'\n      ]\n    },\n    member_summary: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The member\\'s ID'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        email: {\n          type: 'string',\n          description: 'The member\\'s email address'\n        },\n        role: {\n          type: 'string',\n          description: 'The member\\'s built-in role. If the member has no custom roles, this role will be in effect.'\n        },\n        firstName: {\n          type: 'string',\n          description: 'The member\\'s first name'\n        },\n        lastName: {\n          type: 'string',\n          description: 'The member\\'s last name'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'email',\n        'role'\n      ]\n    },\n    statement: {\n      type: 'object',\n      properties: {\n        effect: {\n          type: 'string',\n          description: 'Whether this statement should allow or deny actions on the resources.',\n          enum: [            'allow',\n            'deny'\n          ]\n        },\n        actions: {\n          type: 'array',\n          description: 'Actions to perform on a resource',\n          items: {\n            type: 'string'\n          }\n        },\n        notActions: {\n          type: 'array',\n          description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n          items: {\n            type: 'string'\n          }\n        },\n        notResources: {\n          type: 'array',\n          description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n          items: {\n            type: 'string'\n          }\n        },\n        resources: {\n          type: 'array',\n          description: 'Resource specifier strings',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'effect'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customRoleIds: {
        type: 'array',
        description: 'A list of custom role IDs to use as access limits for the access token',
        items: {
          type: 'string',
        },
      },
      defaultApiVersion: {
        type: 'integer',
        description: 'The default API version for this token',
      },
      description: {
        type: 'string',
        description: 'A description for the access token',
      },
      inlineRole: {
        type: 'array',
        description:
          'A JSON array of statements represented as JSON objects with three attributes: effect, resources, actions. May be used in place of a built-in or custom role.',
        items: {
          $ref: '#/$defs/statement_post',
        },
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the access token',
      },
      role: {
        type: 'string',
        description: 'Built-in role for the token',
        enum: ['reader', 'writer', 'admin'],
      },
      serviceToken: {
        type: 'boolean',
        description: 'Whether the token is a service token',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      statement_post: {
        type: 'object',
        properties: {
          effect: {
            type: 'string',
            description: 'Whether this statement should allow or deny actions on the resources.',
            enum: ['allow', 'deny'],
          },
          actions: {
            type: 'array',
            description: 'Actions to perform on a resource',
            items: {
              type: 'string',
            },
          },
          notActions: {
            type: 'array',
            description:
              'Targeted actions are the actions NOT in this list. The <code>actions</code> field must be empty to use this field.',
            items: {
              type: 'string',
            },
          },
          notResources: {
            type: 'array',
            description:
              'Targeted resources are the resources NOT in this list. The <code>resources</code> field must be empty to use this field.',
            items: {
              type: 'string',
            },
          },
          resources: {
            type: 'array',
            description: 'Resource specifier strings',
            items: {
              type: 'string',
            },
          },
        },
        required: ['effect'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.tokens.create(body)));
};

export default { metadata, tool, handler };
