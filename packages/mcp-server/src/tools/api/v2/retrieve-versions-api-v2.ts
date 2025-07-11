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
  httpPath: '/api/v2/versions',
  operationId: 'getVersions',
};

export const tool: Tool = {
  name: 'retrieve_versions_api_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the latest API version, the list of valid API versions in ascending order, and the version being used for this request. These are all in the external, date-based format.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    currentVersion: {\n      type: 'integer',\n      description: 'The version of the API currently in use. Typically this is the API version specified for your access token. If you add the <code>LD-API-Version: beta</code> header to your request, this will be equal to the <code>latestVersion</code>.'\n    },\n    latestVersion: {\n      type: 'integer',\n      description: 'The most recently released version of the API'\n    },\n    validVersions: {\n      type: 'array',\n      description: 'A list of all valid API versions. To learn more about our versioning, read [Versioning](https://launchdarkly.com/docs/api#versioning).',\n      items: {\n        type: 'integer'\n      }\n    },\n    beta: {\n      type: 'boolean',\n      description: 'Whether the version of the API currently is use is a beta version. This is always <code>true</code> if you add the <code>LD-API-Version: beta</code> header to your request.'\n    }\n  },\n  required: [    'currentVersion',\n    'latestVersion',\n    'validVersions'\n  ]\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.retrieveVersions()));
};

export default { metadata, tool, handler };
