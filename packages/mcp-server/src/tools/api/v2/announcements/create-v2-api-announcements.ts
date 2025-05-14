// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.announcements',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_v2_api_announcements',
  description: 'Create an announcement',
  inputSchema: {
    type: 'object',
    properties: {
      isDismissible: {
        type: 'boolean',
        description: 'true if the announcement is dismissible',
      },
      message: {
        type: 'string',
        description: 'The message of the announcement',
      },
      severity: {
        type: 'string',
        description: 'The severity of the announcement',
        enum: ['info', 'warning', 'critical'],
      },
      startTime: {
        type: 'integer',
        description: 'The start time of the announcement. This is a Unix timestamp in milliseconds.',
      },
      title: {
        type: 'string',
        description: 'The title of the announcement',
      },
      endTime: {
        type: 'integer',
        description: 'The end time of the announcement. This is a Unix timestamp in milliseconds.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.announcements.create(body);
};

export default { metadata, tool, handler };
