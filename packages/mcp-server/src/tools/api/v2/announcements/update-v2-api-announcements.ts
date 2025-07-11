// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.announcements',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/announcements/{announcementId}',
  operationId: 'updateAnnouncementPublic',
};

export const tool: Tool = {
  name: 'update_v2_api_announcements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an announcement\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/announcement_response',\n  $defs: {\n    announcement_response: {\n      type: 'object',\n      description: 'Announcement response',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of the announcement'\n        },\n        _links: {\n          type: 'object',\n          properties: {\n            parent: {\n              $ref: '#/$defs/announcement_link'\n            }\n          },\n          required: [            'parent'\n          ]\n        },\n        _status: {\n          type: 'string',\n          description: 'The status of the announcement',\n          enum: [            'active',\n            'inactive',\n            'scheduled'\n          ]\n        },\n        isDismissible: {\n          type: 'boolean',\n          description: 'true if the announcement is dismissible'\n        },\n        message: {\n          type: 'string',\n          description: 'The message of the announcement'\n        },\n        severity: {\n          type: 'string',\n          description: 'The severity of the announcement',\n          enum: [            'info',\n            'warning',\n            'critical'\n          ]\n        },\n        startTime: {\n          type: 'integer',\n          description: 'The start time of the announcement. This is a Unix timestamp in milliseconds.'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the announcement'\n        },\n        _access: {\n          type: 'object',\n          properties: {\n            allowed: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  action: {\n                    type: 'string'\n                  },\n                  reason: {\n                    type: 'object',\n                    properties: {\n                      effect: {\n                        type: 'string',\n                        description: 'Whether this statement should allow or deny actions on the resources.',\n                        enum: [                          'allow',\n                          'deny'\n                        ]\n                      },\n                      actions: {\n                        type: 'array',\n                        description: 'Actions to perform on a resource',\n                        items: {\n                          type: 'string'\n                        }\n                      },\n                      notActions: {\n                        type: 'array',\n                        description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                        items: {\n                          type: 'string'\n                        }\n                      },\n                      notResources: {\n                        type: 'array',\n                        description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                        items: {\n                          type: 'string'\n                        }\n                      },\n                      resources: {\n                        type: 'array',\n                        description: 'Resource specifier strings',\n                        items: {\n                          type: 'string'\n                        }\n                      },\n                      role_name: {\n                        type: 'string'\n                      }\n                    },\n                    required: [                      'effect'\n                    ]\n                  }\n                },\n                required: [                  'action',\n                  'reason'\n                ]\n              }\n            },\n            denied: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  action: {\n                    type: 'string'\n                  },\n                  reason: {\n                    type: 'object',\n                    properties: {\n                      effect: {\n                        type: 'string',\n                        description: 'Whether this statement should allow or deny actions on the resources.',\n                        enum: [                          'allow',\n                          'deny'\n                        ]\n                      },\n                      actions: {\n                        type: 'array',\n                        description: 'Actions to perform on a resource',\n                        items: {\n                          type: 'string'\n                        }\n                      },\n                      notActions: {\n                        type: 'array',\n                        description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                        items: {\n                          type: 'string'\n                        }\n                      },\n                      notResources: {\n                        type: 'array',\n                        description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                        items: {\n                          type: 'string'\n                        }\n                      },\n                      resources: {\n                        type: 'array',\n                        description: 'Resource specifier strings',\n                        items: {\n                          type: 'string'\n                        }\n                      },\n                      role_name: {\n                        type: 'string'\n                      }\n                    },\n                    required: [                      'effect'\n                    ]\n                  }\n                },\n                required: [                  'action',\n                  'reason'\n                ]\n              }\n            }\n          },\n          required: [            'allowed',\n            'denied'\n          ]\n        },\n        endTime: {\n          type: 'integer',\n          description: 'The end time of the announcement. This is a Unix timestamp in milliseconds.'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        '_status',\n        'isDismissible',\n        'message',\n        'severity',\n        'startTime',\n        'title'\n      ]\n    },\n    announcement_link: {\n      type: 'object',\n      properties: {\n        href: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      announcementId: {
        type: 'string',
      },
      body: {
        type: 'array',
        items: {
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
  const { announcementId, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.announcements.update(announcementId, body)),
  );
};

export default { metadata, tool, handler };
