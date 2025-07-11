// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.triggers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}',
  operationId: 'getTriggerWorkflowById',
};

export const tool: Tool = {
  name: 'retrieve_flags_v2_api_triggers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a flag trigger by ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/trigger_workflow_rep',\n  $defs: {\n    trigger_workflow_rep: {\n      type: 'object',\n      properties: {\n        _creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the flag trigger was created'\n        },\n        _id: {\n          type: 'string',\n          description: 'The ID of this flag trigger'\n        },\n        _integrationKey: {\n          type: 'string',\n          description: 'The unique identifier of the integration for your trigger'\n        },\n        _lastTriggeredAt: {\n          type: 'integer',\n          description: 'Timestamp of when the trigger was most recently executed'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        _maintainer: {\n          $ref: '#/$defs/member_summary'\n        },\n        _maintainerId: {\n          type: 'string',\n          description: 'The ID of the flag trigger maintainer'\n        },\n        _recentTriggerBodies: {\n          type: 'array',\n          description: 'Details on recent flag trigger requests.',\n          items: {\n            type: 'object',\n            properties: {\n              jsonBody: {\n                type: 'object',\n                description: 'The marshalled JSON request body for the incoming trigger webhook. If this is empty or contains invalid JSON, the timestamp is recorded but this field will be empty.'\n              },\n              timestamp: {\n                type: 'integer',\n                description: 'Timestamp of the incoming trigger webhook'\n              }\n            },\n            required: []\n          }\n        },\n        _triggerCount: {\n          type: 'integer',\n          description: 'Number of times the trigger has been executed'\n        },\n        _version: {\n          type: 'integer',\n          description: 'The flag trigger version'\n        },\n        enabled: {\n          type: 'boolean',\n          description: 'Whether the flag trigger is currently enabled'\n        },\n        instructions: {\n          type: 'array',\n          description: 'Details on the action to perform when triggering',\n          items: {\n            type: 'object'\n          }\n        },\n        triggerURL: {\n          type: 'string',\n          description: 'The unguessable URL for this flag trigger'\n        }\n      },\n      required: []\n    },\n    member_summary: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The member\\'s ID'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        email: {\n          type: 'string',\n          description: 'The member\\'s email address'\n        },\n        role: {\n          type: 'string',\n          description: 'The member\\'s built-in role. If the member has no custom roles, this role will be in effect.'\n        },\n        firstName: {\n          type: 'string',\n          description: 'The member\\'s first name'\n        },\n        lastName: {\n          type: 'string',\n          description: 'The member\\'s last name'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'email',\n        'role'\n      ]\n    }\n  }\n}\n```",
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
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      id: {
        type: 'string',
        description: 'The flag trigger ID',
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
  return asTextContentResult(await maybeFilter(args, await client.api.v2.flags.triggers.retrieve(id, body)));
};

export default { metadata, tool, handler };
