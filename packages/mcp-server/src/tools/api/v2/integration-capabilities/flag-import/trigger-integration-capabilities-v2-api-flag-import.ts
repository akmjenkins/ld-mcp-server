// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nTrigger a single flag import run for an existing flag import configuration. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationId, ...body } = args as any;
  const response = await client.api.v2.integrationCapabilities.flagImport
    .trigger(integrationId, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
