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
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes',
  operationId: 'getContextAttributeNames',
};

export const tool: Tool = {
  name: 'retrieve_context_attributes_environments_projects_v2_api_context_attributes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet context attribute names.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'A collection of context attribute name data grouped by kind.',\n      items: {\n        type: 'object',\n        properties: {\n          kind: {\n            type: 'string',\n            description: 'The kind associated with this collection of context attribute names.'\n          },\n          names: {\n            type: 'array',\n            description: 'A collection of context attribute names.',\n            items: {\n              type: 'object',\n              properties: {\n                name: {\n                  type: 'string',\n                  description: 'A context attribute\\'s name.'\n                },\n                weight: {\n                  type: 'integer',\n                  description: 'A relative estimate of the number of contexts seen recently that have an attribute with the associated name.'\n                },\n                redacted: {\n                  type: 'boolean',\n                  description: 'Whether or not the attribute has one or more redacted values.'\n                }\n              },\n              required: [                'name',\n                'weight'\n              ]\n            }\n          }\n        },\n        required: [          'kind',\n          'names'\n        ]\n      }\n    }\n  },\n  required: [    'items'\n  ]\n}\n```",
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
      filter: {
        type: 'string',
        description:
          'A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `name` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).',
      },
      limit: {
        type: 'integer',
        description:
          'Specifies the maximum number of items in the collection to return (max: 100, default: 100)',
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
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.api.v2.projects.environments.contextAttributes.retrieveContextAttributes(
        environmentKey,
        body,
      ),
    ),
  );
};

export default { metadata, tool, handler };
