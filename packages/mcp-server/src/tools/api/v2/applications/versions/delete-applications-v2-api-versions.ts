// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.applications.versions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/applications/{applicationKey}/versions/{versionKey}',
  operationId: 'deleteApplicationVersion',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { versionKey, ...body } = args as any;
  const response = await client.api.v2.applications.versions.delete(versionKey, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
