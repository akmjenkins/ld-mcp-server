// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    'Get a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.\n\nLaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To learn more, read [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).\n',
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
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.auditlog.list(body);
};

export default { metadata, tool, handler };
