// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.dependent_flags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags',
  operationId: 'getDependentFlags',
};

export const tool: Tool = {
  name: 'retrieve_dependent_flags_flags_v2_api_dependent_flags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n> ### Flag prerequisites is an Enterprise feature\n>\n> Flag prerequisites is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).\n\nList dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite. To learn more, read [Flag prerequisites](https://launchdarkly.com/docs/home/flags/prereqs).\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    _site: {\n      $ref: '#/$defs/link'\n    },\n    items: {\n      type: 'array',\n      description: 'An array of dependent flags with their environment information',\n      items: {\n        type: 'object',\n        properties: {\n          environments: {\n            type: 'array',\n            description: 'A list of environments in which the dependent flag appears',\n            items: {\n              type: 'object',\n              properties: {\n                _links: {\n                  type: 'object',\n                  description: 'The location and content type of related resources'\n                },\n                _site: {\n                  $ref: '#/$defs/link'\n                },\n                key: {\n                  type: 'string',\n                  description: 'The environment key'\n                },\n                name: {\n                  type: 'string',\n                  description: 'The environment name'\n                }\n              },\n              required: [                '_links',\n                '_site',\n                'key'\n              ]\n            }\n          },\n          key: {\n            type: 'string',\n            description: 'The flag key'\n          },\n          name: {\n            type: 'string',\n            description: 'The flag name'\n          }\n        },\n        required: [          'environments',\n          'key'\n        ]\n      }\n    }\n  },\n  required: [    '_links',\n    '_site',\n    'items'\n  ],\n  $defs: {\n    link: {\n      type: 'object',\n      properties: {\n        href: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
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
    await maybeFilter(
      args,
      await client.api.v2.flags.dependentFlags.retrieveDependentFlags(featureFlagKey, body),
    ),
  );
};

export default { metadata, tool, handler };
