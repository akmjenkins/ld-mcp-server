// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.account.relay_auto_configs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/account/relay-auto-configs/{id}',
  operationId: 'deleteRelayAutoConfig',
};

export const tool: Tool = {
  name: 'delete_account_v2_api_relay_auto_configs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a Relay Proxy config.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The relay auto config id',
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
  const { id, ...body } = args as any;
  const response = await client.api.v2.account.relayAutoConfigs.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
