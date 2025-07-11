// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.experimentation_settings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/experimentation-settings',
  operationId: 'getExperimentationSettings',
};

export const tool: Tool = {
  name: 'retrieve_experimentation_settings_projects_v2_api_experimentation_settings',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet current experimentation settings for the given project\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/randomization_settings_rep',\n  $defs: {\n    randomization_settings_rep: {\n      type: 'object',\n      properties: {\n        _creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the experiment was created'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        _projectId: {\n          type: 'string',\n          description: 'The project ID'\n        },\n        _projectKey: {\n          type: 'string',\n          description: 'The project key'\n        },\n        randomizationUnits: {\n          type: 'array',\n          description: 'An array of the randomization units in this project',\n          items: {\n            type: 'object',\n            properties: {\n              _displayName: {\n                type: 'string',\n                description: 'The display name for the randomization unit, displayed in the LaunchDarkly user interface.'\n              },\n              _hidden: {\n                type: 'boolean'\n              },\n              default: {\n                type: 'boolean',\n                description: 'Whether this randomization unit is the default for experiments'\n              },\n              randomizationUnit: {\n                type: 'string',\n                description: 'The unit of randomization. Defaults to user.'\n              },\n              standardRandomizationUnit: {\n                type: 'string',\n                description: 'One of LaunchDarkly\\'s fixed set of standard randomization units.'\n              }\n            },\n            required: []\n          }\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
    await maybeFilter(
      args,
      await client.api.v2.projects.experimentationSettings.retrieveExperimentationSettings(projectKey),
    ),
  );
};

export default { metadata, tool, handler };
