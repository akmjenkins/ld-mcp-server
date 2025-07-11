// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/caller-identity',
  operationId: 'getCallerIdentity',
};

export const tool: Tool = {
  name: 'retrieve_caller_identity_api_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet basic information about the identity used (session cookie, API token, SDK keys, etc.) to call the API\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    accountId: {\n      type: 'string'\n    },\n    authKind: {\n      type: 'string'\n    },\n    clientId: {\n      type: 'string'\n    },\n    environmentId: {\n      type: 'string'\n    },\n    environmentName: {\n      type: 'string'\n    },\n    memberId: {\n      type: 'string'\n    },\n    projectId: {\n      type: 'string'\n    },\n    projectName: {\n      type: 'string'\n    },\n    serviceToken: {\n      type: 'boolean'\n    },\n    tokenId: {\n      type: 'string'\n    },\n    tokenKind: {\n      type: 'string'\n    },\n    tokenName: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.retrieveCallerIdentity()));
};

export default { metadata, tool, handler };
