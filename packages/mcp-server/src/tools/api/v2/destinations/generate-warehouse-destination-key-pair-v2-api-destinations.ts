// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.destinations',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/destinations/generate-warehouse-destination-key-pair',
  operationId: 'postGenerateWarehouseDestinationKeyPair',
};

export const tool: Tool = {
  name: 'generate_warehouse_destination_key_pair_v2_api_destinations',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGenerate key pair to allow Data Export to authenticate into a Snowflake warehouse destination\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    public_key: {\n      type: 'string',\n      description: 'The public key used by LaunchDarkly'\n    },\n    public_key_pkcs8: {\n      type: 'string',\n      description: 'The public key to assign in your Snowflake worksheet'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.destinations.generateWarehouseDestinationKeyPair()),
  );
};

export default { metadata, tool, handler };
