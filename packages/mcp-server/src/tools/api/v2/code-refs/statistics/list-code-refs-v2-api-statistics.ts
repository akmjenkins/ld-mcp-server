// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.statistics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/code-refs/statistics',
  operationId: 'getRootStatistic',
};

export const tool: Tool = {
  name: 'list_code_refs_v2_api_statistics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet links for all projects that have code references.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    projects: {\n      type: 'array',\n      description: 'The location and content type of all projects that have code references',\n      items: {\n        $ref: '#/$defs/link'\n      }\n    },\n    self: {\n      $ref: '#/$defs/link'\n    }\n  },\n  required: [],\n  $defs: {\n    link: {\n      type: 'object',\n      properties: {\n        href: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.codeRefs.statistics.list()));
};

export default { metadata, tool, handler };
