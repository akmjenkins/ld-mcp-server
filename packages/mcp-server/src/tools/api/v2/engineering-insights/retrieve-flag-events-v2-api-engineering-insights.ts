// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/flag-events',
  operationId: 'getFlagEvents',
};

export const tool: Tool = {
  name: 'retrieve_flag_events_v2_api_engineering_insights',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of flag events\n\n### Expanding the flag event collection response\n\nLaunchDarkly supports expanding the flag event collection response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `experiments` includes details on all of the experiments run on each flag\n\nFor example, use `?expand=experiments` to include the `experiments` field in the response. By default, this field is **not** included in the response.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'A list of flag events',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'The flag event ID'\n          },\n          description: {\n            type: 'string',\n            description: 'The event description'\n          },\n          eventTime: {\n            type: 'integer',\n            description: 'A Unix timestamp in milliseconds'\n          },\n          eventType: {\n            type: 'string',\n            description: 'The event type'\n          },\n          flagKey: {\n            type: 'string',\n            description: 'The flag key'\n          },\n          impact: {\n            type: 'object',\n            description: 'The flag event evaluation impact',\n            properties: {\n              evaluationsSummary: {\n                type: 'object',\n                description: 'A summary of the change in variation evaluations after the flag event',\n                properties: {\n                  variations: {\n                    type: 'array',\n                    description: 'A list of variation evaluations',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        after: {\n                          type: 'integer',\n                          description: 'The number of evaluations in the ten minutes after the flag event'\n                        },\n                        before: {\n                          type: 'integer',\n                          description: 'The number of evaluations in the ten minutes before the flag event'\n                        },\n                        value: {\n                          type: 'object',\n                          description: 'The variation value'\n                        }\n                      },\n                      required: []\n                    }\n                  }\n                },\n                required: []\n              },\n              percentage: {\n                type: 'number',\n                description: 'The percentage of the flag event impact'\n              },\n              reason: {\n                type: 'string',\n                description: 'The reason for the flag event impact',\n                enum: [                  'evaluations',\n                  'global',\n                  'waiting'\n                ]\n              },\n              size: {\n                type: 'string',\n                description: 'The size of the flag event impact. Sizes are defined as: none (0%), small (0-20%), medium (20-80%), large (>80%)',\n                enum: [                  'none',\n                  'small',\n                  'medium',\n                  'large'\n                ]\n              }\n            },\n            required: []\n          },\n          projectId: {\n            type: 'string',\n            description: 'The project ID'\n          },\n          projectKey: {\n            type: 'string',\n            description: 'The project key'\n          },\n          actions: {\n            type: 'array',\n            description: 'The resource actions',\n            items: {\n              type: 'string'\n            }\n          },\n          auditLogEntryId: {\n            type: 'string',\n            description: 'The audit log entry ID'\n          },\n          environmentId: {\n            type: 'string',\n            description: 'The environment ID'\n          },\n          environmentKey: {\n            type: 'string',\n            description: 'The environment key'\n          },\n          experiments: {\n            type: 'object',\n            description: 'A list of experiment iterations related to the flag event',\n            properties: {\n              items: {\n                type: 'array',\n                description: 'A list of experiments',\n                items: {\n                  type: 'object',\n                  properties: {\n                    iteration: {\n                      type: 'object',\n                      description: 'The experiment iteration',\n                      properties: {\n                        id: {\n                          type: 'string',\n                          description: 'The experiment iteration ID'\n                        },\n                        startedAt: {\n                          type: 'integer',\n                          description: 'Timestamp of when the iteration started'\n                        },\n                        status: {\n                          type: 'string',\n                          description: 'The experiment iteration status',\n                          enum: [                            'running',\n                            'stopped'\n                          ]\n                        },\n                        _links: {\n                          type: 'object',\n                          description: 'The location and content type of related resources'\n                        },\n                        endedAt: {\n                          type: 'integer',\n                          description: 'Timestamp of when the iteration ended'\n                        }\n                      },\n                      required: [                        'id',\n                        'startedAt',\n                        'status'\n                      ]\n                    },\n                    key: {\n                      type: 'string',\n                      description: 'The experiment key'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'The experiment name'\n                    },\n                    _links: {\n                      type: 'object',\n                      description: 'The location and content type of related resources'\n                    }\n                  },\n                  required: [                    'iteration',\n                    'key',\n                    'name'\n                  ]\n                }\n              },\n              totalCount: {\n                type: 'integer',\n                description: 'The total number of experiments'\n              }\n            },\n            required: [              'items',\n              'totalCount'\n            ]\n          },\n          member: {\n            type: 'object',\n            description: 'The member data',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'The member ID'\n              },\n              email: {\n                type: 'string',\n                description: 'The member email'\n              },\n              firstName: {\n                type: 'string',\n                description: 'The member first name'\n              },\n              lastName: {\n                type: 'string',\n                description: 'The member last name'\n              }\n            },\n            required: [              'id',\n              'email',\n              'firstName',\n              'lastName'\n            ]\n          }\n        },\n        required: [          'id',\n          'description',\n          'eventTime',\n          'eventType',\n          'flagKey',\n          'impact',\n          'projectId',\n          'projectKey'\n        ]\n      }\n    },\n    totalCount: {\n      type: 'integer',\n      description: 'The total number of flag events'\n    },\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    }\n  },\n  required: [    'items',\n    'totalCount'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      after: {
        type: 'string',
        description: 'Identifier used for pagination',
      },
      applicationKey: {
        type: 'string',
        description: 'Comma separated list of application keys',
      },
      before: {
        type: 'string',
        description: 'Identifier used for pagination',
      },
      expand: {
        type: 'string',
        description: 'Expand properties in response. Options: `experiments`',
      },
      from: {
        type: 'integer',
        description: 'Unix timestamp in milliseconds. Default value is 7 days ago.',
      },
      global: {
        type: 'string',
        description:
          'Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude`',
      },
      hasExperiments: {
        type: 'boolean',
        description:
          'Filter events to those associated with an experiment (`true`) or without an experiment (`false`)',
      },
      impactSize: {
        type: 'string',
        description:
          'Filter events by impact size. A small impact created a less than 20% change in the proportion of end users receiving one or more flag variations. A medium impact created between a 20%-80% change. A large impact created a more than 80% change. Options: `none`, `small`, `medium`, `large`',
      },
      limit: {
        type: 'integer',
        description: 'The number of deployments to return. Default is 20. Maximum allowed is 100.',
      },
      query: {
        type: 'string',
        description: 'Filter events by flag key',
      },
      to: {
        type: 'integer',
        description: 'Unix timestamp in milliseconds. Default value is now.',
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
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.engineeringInsights.retrieveFlagEvents(body)),
  );
};

export default { metadata, tool, handler };
