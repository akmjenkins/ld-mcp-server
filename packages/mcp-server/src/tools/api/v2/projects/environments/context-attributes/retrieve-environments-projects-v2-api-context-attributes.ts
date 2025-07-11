// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.context_attributes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName}',
  operationId: 'getContextAttributeValues',
};

export const tool: Tool = {
  name: 'retrieve_environments_projects_v2_api_context_attributes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet context attribute values.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'A collection of context attribute value data grouped by kind.',\n      items: {\n        type: 'object',\n        properties: {\n          kind: {\n            type: 'string',\n            description: 'The kind associated with this collection of context attribute values.'\n          },\n          values: {\n            type: 'array',\n            description: 'A collection of context attribute values.',\n            items: {\n              type: 'object',\n              properties: {\n                name: {\n                  type: 'object',\n                  description: 'A value for a context attribute.'\n                },\n                weight: {\n                  type: 'integer',\n                  description: 'A relative estimate of the number of contexts seen recently that have a matching value for a given attribute.'\n                }\n              },\n              required: [                'name',\n                'weight'\n              ]\n            }\n          }\n        },\n        required: [          'kind',\n          'values'\n        ]\n      }\n    }\n  },\n  required: [    'items'\n  ]\n}\n```",
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
      attributeName: {
        type: 'string',
        description: 'The attribute name',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `value` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).',
      },
      limit: {
        type: 'integer',
        description:
          'Specifies the maximum number of items in the collection to return (max: 100, default: 50)',
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
  const { attributeName, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.api.v2.projects.environments.contextAttributes.retrieve(attributeName, body),
    ),
  );
};

export default { metadata, tool, handler };
