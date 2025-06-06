// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.flag_import',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}',
  operationId: 'deleteFlagImportConfiguration',
};

export const tool: Tool = {
  name: 'delete_integration_capabilities_v2_api_flag_import',
  description:
    'Delete a flag import configuration by ID. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      integrationKey: {
        type: 'string',
        description: 'The integration key',
      },
      integrationId: {
        type: 'string',
        description: 'The integration ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationId, ...body } = args as any;
  await client.api.v2.integrationCapabilities.flagImport.delete(integrationId, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
