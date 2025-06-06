// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.templates',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/templates/{templateKey}',
  operationId: 'deleteWorkflowTemplate',
};

export const tool: Tool = {
  name: 'delete_v2_api_templates',
  description: 'Delete a workflow template',
  inputSchema: {
    type: 'object',
    properties: {
      templateKey: {
        type: 'string',
        description: 'The template key',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { templateKey, ...body } = args as any;
  await client.api.v2.templates.delete(templateKey);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
