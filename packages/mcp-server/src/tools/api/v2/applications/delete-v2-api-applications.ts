// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.applications',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/applications/{applicationKey}',
  operationId: 'deleteApplication',
};

export const tool: Tool = {
  name: 'delete_v2_api_applications',
  description: 'Delete an application.',
  inputSchema: {
    type: 'object',
    properties: {
      applicationKey: {
        type: 'string',
        description: 'The application key',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { applicationKey, ...body } = args as any;
  const response = await client.api.v2.applications.delete(applicationKey).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
