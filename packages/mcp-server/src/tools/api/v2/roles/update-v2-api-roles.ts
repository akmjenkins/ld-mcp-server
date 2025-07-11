// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/roles/{customRoleKey}',
  operationId: 'patchCustomRole',
};

export const tool: Tool = {
  name: 'update_v2_api_roles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a single custom role. Updating a custom role uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the `policy` array, set the `path` to `/policy` and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/custom_role',\n  $defs: {\n    custom_role: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of the custom role'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        key: {\n          type: 'string',\n          description: 'The key of the custom role'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the custom role'\n        },\n        policy: {\n          type: 'array',\n          description: 'An array of the policies that comprise this custom role',\n          items: {\n            $ref: '#/$defs/statement'\n          }\n        },\n        _access: {\n          $ref: '#/$defs/access'\n        },\n        _presetBundleVersion: {\n          type: 'integer',\n          description: 'If created from a preset, the preset bundle version'\n        },\n        _presetStatements: {\n          type: 'array',\n          description: 'If created from a preset, the read-only statements copied from the preset',\n          items: {\n            $ref: '#/$defs/statement'\n          }\n        },\n        assignedTo: {\n          type: 'object',\n          description: 'The number of teams and members this role is assigned to',\n          properties: {\n            membersCount: {\n              type: 'integer',\n              description: 'The number of individual members this role is assigned to'\n            },\n            teamsCount: {\n              type: 'integer',\n              description: 'The number of teams this role is assigned to'\n            }\n          },\n          required: []\n        },\n        basePermissions: {\n          type: 'string',\n          description: 'Base permissions to use for this role. Only applicable to roles created prior to October 2024.'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the custom role'\n        },\n        resourceCategory: {\n          type: 'string',\n          description: 'The category of resources this role is intended to manage. Can be <code>organization</code>, <code>project</code>, or <code>any</code>. Once set, this field cannot be changed.'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'key',\n        'name',\n        'policy'\n      ]\n    },\n    statement: {\n      type: 'object',\n      properties: {\n        effect: {\n          type: 'string',\n          description: 'Whether this statement should allow or deny actions on the resources.',\n          enum: [            'allow',\n            'deny'\n          ]\n        },\n        actions: {\n          type: 'array',\n          description: 'Actions to perform on a resource',\n          items: {\n            type: 'string'\n          }\n        },\n        notActions: {\n          type: 'array',\n          description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n          items: {\n            type: 'string'\n          }\n        },\n        notResources: {\n          type: 'array',\n          description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n          items: {\n            type: 'string'\n          }\n        },\n        resources: {\n          type: 'array',\n          description: 'Resource specifier strings',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: [        'effect'\n      ]\n    },\n    access: {\n      type: 'object',\n      properties: {\n        allowed: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        },\n        denied: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        }\n      },\n      required: [        'allowed',\n        'denied'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customRoleKey: {
        type: 'string',
        description: 'The custom role key',
      },
      patch: {
        type: 'array',
        description: 'A JSON patch representation of the change to make',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
      comment: {
        type: 'string',
        description: 'Optional comment',
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
  const { customRoleKey, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.roles.update(customRoleKey, body)));
};

export default { metadata, tool, handler };
