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
  httpMethod: 'patch',
  httpPath: '/api/v2/tokens/{id}',
  operationId: 'patchToken',
};

export const tool: Tool = {
  name: 'update_v2_api_tokens',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an access token's settings. Updating an access token uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/token',\n  $defs: {\n    token: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of the access token'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the access token was created'\n        },\n        lastModified: {\n          type: 'integer',\n          description: 'Timestamp of the last modification of the access token'\n        },\n        memberId: {\n          type: 'string',\n          description: 'The ID of the member who created the access token'\n        },\n        ownerId: {\n          type: 'string',\n          description: 'The ID of the owner of the account for the access token'\n        },\n        token: {\n          type: 'string',\n          description: 'The token value. When creating or resetting, contains the entire token value. Otherwise, contains the last four characters.'\n        },\n        _member: {\n          $ref: '#/$defs/member_summary'\n        },\n        customRoleIds: {\n          type: 'array',\n          description: 'A list of custom role IDs to use as access limits for the access token',\n          items: {\n            type: 'string'\n          }\n        },\n        defaultApiVersion: {\n          type: 'integer',\n          description: 'The default API version for this token'\n        },\n        description: {\n          type: 'string',\n          description: 'A description for the access token'\n        },\n        inlineRole: {\n          type: 'array',\n          description: 'An array of policy statements, with three attributes: effect, resources, actions. May be used in place of a built-in or custom role.',\n          items: {\n            $ref: '#/$defs/statement'\n          }\n        },\n        lastUsed: {\n          type: 'integer',\n          description: 'Timestamp of when the access token was last used'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-friendly name for the access token'\n        },\n        role: {\n          type: 'string',\n          description: 'Built-in role for the token'\n        },\n        serviceToken: {\n          type: 'boolean',\n          description: 'Whether this is a service token or a personal token'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'creationDate',\n        'lastModified',\n        'memberId',\n        'ownerId'\n      ]\n    },\n    member_summary: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The member\\'s ID'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        email: {\n          type: 'string',\n          description: 'The member\\'s email address'\n        },\n        role: {\n          type: 'string',\n          description: 'The member\\'s built-in role. If the member has no custom roles, this role will be in effect.'\n        },\n        firstName: {\n          type: 'string',\n          description: 'The member\\'s first name'\n        },\n        lastName: {\n          type: 'string',\n          description: 'The member\\'s last name'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'email',\n        'role'\n      ]\n    },\n    statement: {\n      type: 'object',\n      properties: {\n        effect: {\n          type: 'string',\n          description: 'Whether this statement should allow or deny actions on the resources.',\n          enum: [            'allow',\n            'deny'\n          ]\n        },\n        actions: {\n          type: 'array',\n          description: 'Actions to perform on a resource',\n          items: {\n            type: 'string'\n          }\n        },\n        notActions: {\n          type: 'array',\n          description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n          items: {\n            type: 'string'\n          }\n        },\n        notResources: {\n          type: 'array',\n          description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n          items: {\n            type: 'string'\n          }\n        },\n        resources: {\n          type: 'array',\n          description: 'Resource specifier strings',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'effect'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the access token to update',
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.tokens.update(id, body)));
};

export default { metadata, tool, handler };
