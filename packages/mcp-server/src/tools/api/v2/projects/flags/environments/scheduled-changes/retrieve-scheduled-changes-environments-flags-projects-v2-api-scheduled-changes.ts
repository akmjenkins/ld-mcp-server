// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.scheduled_changes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes',
  operationId: 'getFlagConfigScheduledChanges',
};

export const tool: Tool = {
  name: 'retrieve_scheduled_changes_environments_flags_projects_v2_api_scheduled_changes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of scheduled changes that will be applied to the feature flag.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    items: {\n      type: 'array',\n      description: 'Array of scheduled changes',\n      items: {\n        $ref: '#/$defs/feature_flag_scheduled_change'\n      }\n    },\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    feature_flag_scheduled_change: {\n      type: 'object',\n      properties: {\n        _creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the scheduled change was created'\n        },\n        _id: {\n          type: 'string',\n          description: 'The ID of this scheduled change'\n        },\n        _maintainerId: {\n          type: 'string',\n          description: 'The ID of the scheduled change maintainer'\n        },\n        _version: {\n          type: 'integer',\n          description: 'Version of the scheduled change'\n        },\n        executionDate: {\n          type: 'integer',\n          description: 'When the scheduled changes should be executed'\n        },\n        instructions: {\n          type: 'array',\n          description: 'The actions to perform on the execution date for these scheduled changes',\n          items: {\n            type: 'object'\n          }\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        conflicts: {\n          type: 'object',\n          description: 'Details on any conflicting scheduled changes'\n        }\n      },\n      required: [        '_creationDate',\n        '_id',\n        '_maintainerId',\n        '_version',\n        'executionDate',\n        'instructions'\n      ]\n    }\n  }\n}\n```",
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
      await client.api.v2.projects.flags.environments.scheduledChanges.retrieveScheduledChanges(
        environmentKey,
        body,
      ),
    ),
  );
};

export default { metadata, tool, handler };
