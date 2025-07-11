// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.context_kinds',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/projects/{projectKey}/context-kinds/{key}',
  operationId: 'putContextKind',
};

export const tool: Tool = {
  name: 'update_projects_v2_api_context_kinds',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate or update a context kind by key. Only the included fields will be updated.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    status: {\n      type: 'string',\n      description: 'The status of the create or update operation'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      key: {
        type: 'string',
        description: 'The context kind key',
      },
      name: {
        type: 'string',
        description: 'The context kind name',
      },
      archived: {
        type: 'boolean',
        description:
          'Whether the context kind is archived. Archived context kinds are unavailable for targeting.',
      },
      description: {
        type: 'string',
        description: 'The context kind description',
      },
      hideInTargeting: {
        type: 'boolean',
        description: 'Alias for archived.',
      },
      version: {
        type: 'integer',
        description:
          'The context kind version. If not specified when the context kind is created, defaults to 1.',
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
  const { key, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.contextKinds.update(key, body)),
  );
};

export default { metadata, tool, handler };
