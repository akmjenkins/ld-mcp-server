// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.applications.versions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_applications_v2_api_versions',
  description: 'Delete an application version.',
  inputSchema: {
    type: 'object',
    properties: {
      applicationKey: {
        type: 'string',
        description: 'The application key',
      },
      versionKey: {
        type: 'string',
        description: 'The application version key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { versionKey, ...body } = args as any;
  return client.api.v2.applications.versions.delete(versionKey, body);
};

export default { metadata, tool, handler };
