// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/code-refs/extinctions',
  operationId: 'getExtinctions',
};

export const tool: Tool = {
  name: 'retrieve_extinctions_v2_api_code_refs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of all extinctions. LaunchDarkly creates an extinction event after you remove all code references to a flag. To learn more, read [About extinction events](https://launchdarkly.com/docs/home/observability/code-references#about-extinction-events).\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    items: {\n      type: 'object',\n      description: 'An array of extinction events'\n    }\n  },\n  required: [    '_links',\n    'items'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      branchName: {
        type: 'string',
        description:
          'Filter results to a specific branch. By default, only the default branch will be queried for extinctions.',
      },
      flagKey: {
        type: 'string',
        description: 'Filter results to a specific flag key',
      },
      from: {
        type: 'integer',
        description:
          'Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `to`.',
      },
      projKey: {
        type: 'string',
        description: 'Filter results to a specific project',
      },
      repoName: {
        type: 'string',
        description: 'Filter results to a specific repository',
      },
      to: {
        type: 'integer',
        description:
          'Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `from`.',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.api.v2.codeRefs.retrieveExtinctions(body)));
};

export default { metadata, tool, handler };
