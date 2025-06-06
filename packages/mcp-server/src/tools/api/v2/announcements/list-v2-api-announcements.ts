// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.announcements',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/announcements',
  operationId: 'getAnnouncementsPublic',
};

export const tool: Tool = {
  name: 'list_v2_api_announcements',
  description: 'Get announcements',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: 'The number of announcements to return.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      status: {
        type: 'string',
        description: 'Filter announcements by status.',
        enum: ['active', 'inactive', 'scheduled'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.announcements.list(body));
};

export default { metadata, tool, handler };
