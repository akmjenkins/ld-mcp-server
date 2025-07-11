// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flag_statuses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey}',
  operationId: 'getFeatureFlagStatus',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_flag_statuses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the status for a particular feature flag.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/flag_status_rep',\n  $defs: {\n    flag_status_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object'\n        },\n        name: {\n          type: 'string',\n          description: 'Status of the flag',\n          enum: [            'new',\n            'inactive',\n            'active',\n            'launched'\n          ]\n        },\n        default: {\n          type: 'object',\n          description: 'Default value seen from code'\n        },\n        lastRequested: {\n          type: 'string',\n          description: 'Timestamp of last time flag was requested',\n          format: 'date-time'\n        }\n      },\n      required: [        '_links',\n        'name'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
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
  const { featureFlagKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.flagStatuses.retrieve(featureFlagKey, body)),
  );
};

export default { metadata, tool, handler };
