// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.auditlog',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/auditlog',
  operationId: 'postAuditLogEntries',
};

export const tool: Tool = {
  name: 'create_v2_api_auditlog',
  description:
    'Search your audit log entries. The query parameters let you restrict the results that return by date ranges, or a full-text search query. The request body lets you restrict the results that return by resource specifiers.\n\nLaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To learn more, read [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).\n',
  inputSchema: {
    type: 'object',
    properties: {
      after: {
        type: 'integer',
        description:
          'A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned occurred after the timestamp.',
      },
      before: {
        type: 'integer',
        description:
          'A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries returned occurred before the timestamp.',
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
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/statement_post',
        },
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
  return asTextContentResult(await client.api.v2.auditlog.create(body));
};

export default { metadata, tool, handler };
