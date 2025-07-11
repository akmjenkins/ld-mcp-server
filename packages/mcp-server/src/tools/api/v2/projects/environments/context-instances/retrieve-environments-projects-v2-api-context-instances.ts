// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.context_instances',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}',
  operationId: 'getContextInstances',
};

export const tool: Tool = {
  name: 'retrieve_environments_projects_v2_api_context_instances',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet context instances by ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/context_instances',\n  $defs: {\n    context_instances: {\n      type: 'object',\n      properties: {\n        _environmentId: {\n          type: 'string',\n          description: 'The environment ID'\n        },\n        items: {\n          type: 'array',\n          description: 'A collection of context instances. Can include multiple versions of context instances that have the same <code>id</code>, but different <code>applicationId</code>s.',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The context instance ID'\n              },\n              context: {\n                type: 'object',\n                description: 'The context, including its kind and attributes'\n              },\n              _access: {\n                $ref: '#/$defs/access'\n              },\n              _links: {\n                type: 'object',\n                description: 'The location and content type of related resources'\n              },\n              anonymousKinds: {\n                type: 'array',\n                description: 'A list of the context kinds this context was associated with that the SDK removed because they were marked as anonymous at flag evaluation',\n                items: {\n                  type: 'string'\n                }\n              },\n              applicationId: {\n                type: 'string',\n                description: 'An identifier representing the application where the LaunchDarkly SDK is running'\n              },\n              lastSeen: {\n                type: 'string',\n                description: 'Timestamp of the last time an evaluation occurred for this context instance',\n                format: 'date-time'\n              }\n            },\n            required: [              'id',\n              'context'\n            ]\n          }\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        continuationToken: {\n          type: 'string',\n          description: 'An obfuscated string that references the last context instance on the previous page of results. You can use this for pagination, however, we recommend using the <code>next</code> link instead.'\n        },\n        totalCount: {\n          type: 'integer',\n          description: 'The number of unique context instances'\n        }\n      },\n      required: [        '_environmentId',\n        'items'\n      ]\n    },\n    access: {\n      type: 'object',\n      properties: {\n        allowed: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        },\n        denied: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              action: {\n                type: 'string'\n              },\n              reason: {\n                type: 'object',\n                properties: {\n                  effect: {\n                    type: 'string',\n                    description: 'Whether this statement should allow or deny actions on the resources.',\n                    enum: [                      'allow',\n                      'deny'\n                    ]\n                  },\n                  actions: {\n                    type: 'array',\n                    description: 'Actions to perform on a resource',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notActions: {\n                    type: 'array',\n                    description: 'Targeted actions are the actions NOT in this list. The <code>actions</code> and <code>notResources</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  notResources: {\n                    type: 'array',\n                    description: 'Targeted resources are the resources NOT in this list. The <code>resources</code> and <code>notActions</code> fields must be empty to use this field.',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  resources: {\n                    type: 'array',\n                    description: 'Resource specifier strings',\n                    items: {\n                      type: 'string'\n                    }\n                  },\n                  role_name: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'effect'\n                ]\n              }\n            },\n            required: [              'action',\n              'reason'\n            ]\n          }\n        }\n      },\n      required: [        'allowed',\n        'denied'\n      ]\n    }\n  }\n}\n```",
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
      id: {
        type: 'string',
        description: 'The context instance ID',
      },
      continuationToken: {
        type: 'string',
        description:
          'Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead.',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).',
      },
      includeTotalCount: {
        type: 'boolean',
        description:
          'Specifies whether to include or omit the total count of matching context instances. Defaults to true.',
      },
      limit: {
        type: 'integer',
        description: 'Specifies the maximum number of context instances to return (max: 50, default: 20)',
      },
      sort: {
        type: 'string',
        description:
          'Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`.',
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
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.environments.contextInstances.retrieve(id, body)),
  );
};

export default { metadata, tool, handler };
