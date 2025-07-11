// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.context_kinds',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/context-kinds',
  operationId: 'getContextKindsByProjectKey',
};

export const tool: Tool = {
  name: 'retrieve_context_kinds_projects_v2_api_context_kinds',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all context kinds for a given project.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    items: {\n      type: 'array',\n      description: 'An array of context kinds',\n      items: {\n        type: 'object',\n        properties: {\n          createdFrom: {\n            type: 'string',\n            description: 'How the context kind was created',\n            enum: [              'default',\n              'auto-add',\n              'manual'\n            ]\n          },\n          creationDate: {\n            type: 'integer',\n            description: 'Timestamp of when the context kind was created'\n          },\n          description: {\n            type: 'string',\n            description: 'The context kind description'\n          },\n          key: {\n            type: 'string',\n            description: 'The context kind key'\n          },\n          lastModified: {\n            type: 'integer',\n            description: 'Timestamp of when the context kind was most recently changed'\n          },\n          name: {\n            type: 'string',\n            description: 'The context kind name'\n          },\n          version: {\n            type: 'integer',\n            description: 'The context kind version'\n          },\n          _links: {\n            type: 'object',\n            description: 'The location and content type of related resources'\n          },\n          archived: {\n            type: 'boolean',\n            description: 'Whether the context kind is archived. Archived context kinds are unavailable for targeting.'\n          },\n          hideInTargeting: {\n            type: 'boolean',\n            description: 'Alias for archived.'\n          },\n          lastSeen: {\n            type: 'integer',\n            description: 'Timestamp of when a context of this context kind was most recently evaluated'\n          }\n        },\n        required: [          'createdFrom',\n          'creationDate',\n          'description',\n          'key',\n          'lastModified',\n          'name',\n          'version'\n        ]\n      }\n    }\n  },\n  required: [    '_links',\n    'items'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
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
  const { projectKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.contextKinds.retrieveContextKinds(projectKey)),
  );
};

export default { metadata, tool, handler };
