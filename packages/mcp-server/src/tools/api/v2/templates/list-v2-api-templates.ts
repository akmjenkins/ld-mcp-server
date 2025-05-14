// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.templates',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v2_api_templates',
  description:
    'Get workflow templates belonging to an account, or can optionally return templates_endpoints.workflowTemplateSummariesListingOutputRep when summary query param is true',
  inputSchema: {
    type: 'object',
    properties: {
      search: {
        type: 'string',
        description: 'The substring in either the name or description of a template',
      },
      summary: {
        type: 'boolean',
        description: 'Whether the entire template object or just a summary should be returned',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.templates.list(body);
};

export default { metadata, tool, handler };
