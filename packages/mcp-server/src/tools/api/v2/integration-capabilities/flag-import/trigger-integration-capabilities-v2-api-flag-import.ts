// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.flag_import',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger',
  operationId: 'triggerFlagImportJob',
};

export const tool: Tool = {
  name: 'trigger_integration_capabilities_v2_api_flag_import',
  description:
    'Trigger a single flag import run for an existing flag import configuration. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationId, ...body } = args as any;
  return client.api.v2.integrationCapabilities.flagImport.trigger(integrationId, body);
};

export default { metadata, tool, handler };
