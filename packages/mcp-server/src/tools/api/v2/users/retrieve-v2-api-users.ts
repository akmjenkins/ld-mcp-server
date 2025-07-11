// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/users/{projectKey}/{environmentKey}/{userKey}',
  operationId: 'getUser',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n> ### Use contexts instead\n>\n> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/get-context-instances) instead of this endpoint.\n\nGet a user by key. The `user` object contains all attributes sent in `variation` calls for that key.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_record',\n  $defs: {\n    user_record: {\n      type: 'object',\n      properties: {\n        _access: {\n          $ref: '#/$defs/access'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        environmentId: {\n          type: 'string',\n          description: 'The environment ID'\n        },\n        lastPing: {\n          type: 'string',\n          description: 'Timestamp of the last time this user was seen',\n          format: 'date-time'\n        },\n        ownerId: {\n          type: 'string',\n          description: 'The ID of the member who is the owner for this account'\n        },\n        sortValue: {\n          type: 'object',\n          description: 'If this record is returned as part of a list, the value used to sort the list. This is only included when the <code>sort</code> query parameter is specified. It is a time, in Unix milliseconds, if the sort is by <code>lastSeen</code>. It is a user key if the sort is by <code>userKey</code>.'\n        },\n        user: {\n          type: 'object',\n          description: 'Details on the user',\n          properties: {\n            anonymous: {\n              type: 'boolean',\n              description: 'Whether the user is anonymous. If true, this user does not appear on the Contexts list in the LaunchDarkly user interface.'\n            },\n            avatar: {\n              type: 'string',\n              description: 'An absolute URL to an avatar image.'\n            },\n            country: {\n              type: 'string',\n              description: 'The user\\'s country'\n            },\n            custom: {\n              type: 'object',\n              description: 'Any other custom attributes for this user. Custom attributes contain any other user data that you would like to use to conditionally target your users.'\n            },\n            email: {\n              type: 'string',\n              description: 'The user\\'s email'\n            },\n            firstName: {\n              type: 'string',\n              description: 'The user\\'s first name'\n            },\n            ip: {\n              type: 'string',\n              description: 'The user\\'s IP address'\n            },\n            key: {\n              type: 'string',\n              description: 'The user key. This is the only mandatory user attribute.'\n            },\n            lastName: {\n              type: 'string',\n              description: 'The user\\'s last name'\n            },\n            name: {\n              type: 'string',\n              description: 'The user\\'s full name'\n            },\n            privateAttrs: {\n              type: 'array',\n              description: 'A list of attribute names that are marked as private. You can use these attributes in targeting rules and segments. If you are using a server-side SDK, the SDK will not send the private attribute back to LaunchDarkly. If you are using a client-side SDK, the SDK will send the private attribute back to LaunchDarkly for evaluation. However, the SDK won\\'t send the attribute to LaunchDarkly in events data, LaunchDarkly won\\'t store the private attribute, and the private attribute will not appear on the Contexts list.',\n              items: {\n                type: 'string'\n              }\n            },\n            secondary: {\n              type: 'string',\n              description: 'If provided, used with the user key to generate a variation in percentage rollouts'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    access: {\n      type: 'object',\n      properties: {\n        allowed: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        },\n        denied: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        }\n      },\n      required: [        'allowed',\n        'denied'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      userKey: {
        type: 'string',
        description: 'The user key',
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
  const { userKey, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.users.retrieve(userKey, body)));
};

export default { metadata, tool, handler };
