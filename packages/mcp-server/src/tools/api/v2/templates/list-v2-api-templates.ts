// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.templates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/templates',
  operationId: 'getWorkflowTemplates',
};

export const tool: Tool = {
  name: 'list_v2_api_templates',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet workflow templates belonging to an account, or can optionally return templates_endpoints.workflowTemplateSummariesListingOutputRep when summary query param is true\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/workflow_template_output'\n      }\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    workflow_template_output: {\n      type: 'object',\n      properties: {\n        _creationDate: {\n          type: 'integer'\n        },\n        _id: {\n          type: 'string'\n        },\n        _key: {\n          type: 'string'\n        },\n        _links: {\n          type: 'object'\n        },\n        _maintainerId: {\n          type: 'string'\n        },\n        _ownerId: {\n          type: 'string'\n        },\n        description: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        stages: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/stage_output'\n          }\n        }\n      },\n      required: [        '_creationDate',\n        '_id',\n        '_key',\n        '_links',\n        '_maintainerId',\n        '_ownerId'\n      ]\n    },\n    stage_output: {\n      type: 'object',\n      properties: {\n        _execution: {\n          $ref: '#/$defs/execution_output'\n        },\n        _id: {\n          type: 'string',\n          description: 'The ID of this stage'\n        },\n        action: {\n          type: 'object',\n          description: 'The type of instruction, and an array of instructions for the stage. Each object in the array uses the semantic patch format for updating a feature flag.',\n          properties: {\n            instructions: {\n              type: 'array',\n              description: 'An array of instructions for the stage. Each object in the array uses the semantic patch format for updating a feature flag.',\n              items: {\n                type: 'object'\n              }\n            },\n            kind: {\n              type: 'string',\n              description: 'The type of action for this stage'\n            }\n          },\n          required: [            'instructions',\n            'kind'\n          ]\n        },\n        conditions: {\n          type: 'array',\n          description: 'An array of conditions for the stage',\n          items: {\n            type: 'object',\n            properties: {\n              _execution: {\n                $ref: '#/$defs/execution_output'\n              },\n              _id: {\n                type: 'string'\n              },\n              allReviews: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    _id: {\n                      type: 'string'\n                    },\n                    kind: {\n                      type: 'string'\n                    },\n                    comment: {\n                      type: 'string'\n                    },\n                    creationDate: {\n                      type: 'integer'\n                    },\n                    memberId: {\n                      type: 'string'\n                    },\n                    serviceTokenId: {\n                      type: 'string'\n                    }\n                  },\n                  required: [                    '_id',\n                    'kind'\n                  ]\n                }\n              },\n              description: {\n                type: 'string'\n              },\n              notifyMemberIds: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              },\n              reviewStatus: {\n                type: 'string'\n              },\n              appliedDate: {\n                type: 'integer'\n              },\n              executionDate: {\n                type: 'integer'\n              },\n              kind: {\n                type: 'string'\n              },\n              scheduleKind: {\n                type: 'string'\n              },\n              waitDuration: {\n                type: 'integer'\n              },\n              waitDurationUnit: {\n                type: 'string'\n              }\n            },\n            required: [              '_execution',\n              '_id',\n              'allReviews',\n              'description',\n              'notifyMemberIds',\n              'reviewStatus'\n            ]\n          }\n        },\n        name: {\n          type: 'string',\n          description: 'The stage name'\n        }\n      },\n      required: [        '_execution',\n        '_id',\n        'action',\n        'conditions'\n      ]\n    },\n    execution_output: {\n      type: 'object',\n      properties: {\n        status: {\n          type: 'string',\n          description: 'The status of the execution of this workflow stage'\n        },\n        stopDate: {\n          type: 'integer',\n          description: 'Timestamp of when the workflow was completed.'\n        }\n      },\n      required: [        'status'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      search: {
        type: 'string',
        description: 'The substring in either the name or description of a template',
      },
      summary: {
        type: 'boolean',
        description: 'Whether the entire template object or just a summary should be returned',
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.templates.list(body)));
};

export default { metadata, tool, handler };
