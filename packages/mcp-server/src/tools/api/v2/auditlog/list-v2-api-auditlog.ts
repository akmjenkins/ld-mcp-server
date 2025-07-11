// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.auditlog',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/auditlog',
  operationId: 'getAuditLogEntries',
};

export const tool: Tool = {
  name: 'list_v2_api_auditlog',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.\n\nLaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To learn more, read [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/audit_log_entry_listing_rep_collection',\n  $defs: {\n    audit_log_entry_listing_rep_collection: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        items: {\n          type: 'array',\n          description: 'An array of audit log entries',\n          items: {\n            $ref: '#/$defs/audit_log_entry_listing_rep'\n          }\n        }\n      },\n      required: [        '_links',\n        'items'\n      ]\n    },\n    audit_log_entry_listing_rep: {\n      type: 'object',\n      properties: {\n        _accountId: {\n          type: 'string',\n          description: 'The ID of the account to which this audit log entry belongs'\n        },\n        _id: {\n          type: 'string',\n          description: 'The ID of the audit log entry'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        accesses: {\n          type: 'array',\n          description: 'Details on the actions performed and resources acted on in this audit log entry',\n          items: {\n            $ref: '#/$defs/resource_access'\n          }\n        },\n        date: {\n          type: 'integer',\n          description: 'Timestamp of the audit log entry'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the change recorded in the audit log entry'\n        },\n        kind: {\n          type: 'string',\n          description: 'The type of resource this audit log entry refers to'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the resource this audit log entry refers to'\n        },\n        shortDescription: {\n          type: 'string',\n          description: 'Shorter version of the change recorded in the audit log entry'\n        },\n        token: {\n          $ref: '#/$defs/token_summary'\n        },\n        app: {\n          $ref: '#/$defs/authorized_app_data_rep'\n        },\n        comment: {\n          type: 'string',\n          description: 'Optional comment for the audit log entry'\n        },\n        member: {\n          $ref: '#/$defs/member_data_rep'\n        },\n        parent: {\n          $ref: '#/$defs/parent_resource_rep'\n        },\n        subject: {\n          $ref: '#/$defs/subject_data_rep'\n        },\n        target: {\n          $ref: '#/$defs/target_resource_rep'\n        },\n        title: {\n          type: 'string',\n          description: 'A description of what occurred, in the format <code>member</code> <code>titleVerb</code> <code>target</code>'\n        },\n        titleVerb: {\n          type: 'string',\n          description: 'The action and resource recorded in this audit log entry'\n        }\n      },\n      required: [        '_accountId',\n        '_id',\n        '_links',\n        'accesses',\n        'date',\n        'description',\n        'kind',\n        'name',\n        'shortDescription'\n      ]\n    },\n    resource_access: {\n      type: 'object',\n      properties: {\n        action: {\n          type: 'string'\n        },\n        resource: {\n          type: 'string'\n        }\n      },\n      required: []\n    },\n    token_summary: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string'\n        },\n        _links: {\n          type: 'object'\n        },\n        ending: {\n          type: 'string',\n          description: 'The last few characters of the token'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the token'\n        },\n        serviceToken: {\n          type: 'boolean',\n          description: 'Whether this is a service token'\n        }\n      },\n      required: []\n    },\n    authorized_app_data_rep: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of the authorized application'\n        },\n        _links: {\n          type: 'object'\n        },\n        isScim: {\n          type: 'boolean',\n          description: 'Whether the application is authorized through SCIM'\n        },\n        maintainerName: {\n          type: 'string',\n          description: 'The name of the maintainer for this authorized application'\n        },\n        name: {\n          type: 'string',\n          description: 'The authorized application name'\n        }\n      },\n      required: []\n    },\n    member_data_rep: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The member ID'\n        },\n        _links: {\n          type: 'object'\n        },\n        email: {\n          type: 'string',\n          description: 'The member email'\n        },\n        firstName: {\n          type: 'string',\n          description: 'The member first name'\n        },\n        lastName: {\n          type: 'string',\n          description: 'The member last name'\n        }\n      },\n      required: []\n    },\n    parent_resource_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the parent resource'\n        },\n        resource: {\n          type: 'string',\n          description: 'The parent\\'s resource specifier'\n        }\n      },\n      required: []\n    },\n    subject_data_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object'\n        },\n        avatarUrl: {\n          type: 'string',\n          description: 'The subject\\'s avatar'\n        },\n        name: {\n          type: 'string',\n          description: 'The subject\\'s name'\n        }\n      },\n      required: []\n    },\n    target_resource_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the resource'\n        },\n        resources: {\n          type: 'array',\n          description: 'The resource specifier',\n          items: {\n            type: 'string'\n          }\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'integer',
        description:
          'A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp.',
      },
      before: {
        type: 'integer',
        description:
          'A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp.',
      },
      limit: {
        type: 'integer',
        description:
          'A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10.',
      },
      q: {
        type: 'string',
        description: 'Text to search for. You can search for the full or partial name of the resource.',
      },
      spec: {
        type: 'string',
        description: 'A resource specifier that lets you filter audit log listings by resource',
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.auditlog.list(body)));
};

export default { metadata, tool, handler };
