// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.announcements',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/announcements/{announcementId}',
  operationId: 'deleteAnnouncementPublic',
};

export const tool: Tool = {
  name: 'delete_v2_api_announcements',
  description: 'Delete an announcement',
  inputSchema: {
    type: 'object',
    properties: {
      announcementId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { announcementId, ...body } = args as any;
  return client.api.v2.announcements.delete(announcementId);
};

export default { metadata, tool, handler };
