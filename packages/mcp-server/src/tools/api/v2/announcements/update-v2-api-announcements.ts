// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  description: 'Update an announcement',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { announcementId, ...body } = args as any;
  return asTextContentResult(await client.api.v2.announcements.update(announcementId, body));
};

export default { metadata, tool, handler };
