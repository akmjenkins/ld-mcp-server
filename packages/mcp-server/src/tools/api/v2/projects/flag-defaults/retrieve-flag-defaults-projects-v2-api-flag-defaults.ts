// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flag_defaults',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/flag-defaults',
  operationId: 'getFlagDefaultsByProject',
};

export const tool: Tool = {
  name: 'retrieve_flag_defaults_projects_v2_api_flag_defaults',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the flag defaults for a specific project.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    booleanDefaults: {\n      type: 'object',\n      description: 'Defaults for boolean flags within this project',\n      properties: {\n        falseDescription: {\n          type: 'string',\n          description: 'The description for the false variation'\n        },\n        falseDisplayName: {\n          type: 'string',\n          description: 'The display name for the false variation, displayed in the LaunchDarkly user interface'\n        },\n        offVariation: {\n          type: 'integer',\n          description: 'The variation index of the flag variation to use for the default targeting behavior when a flag\\'s targeting is off'\n        },\n        onVariation: {\n          type: 'integer',\n          description: 'The variation index of the flag variation to use for the default targeting behavior when a flag\\'s targeting is on and the target did not match any rules'\n        },\n        trueDescription: {\n          type: 'string',\n          description: 'The description for the true variation'\n        },\n        trueDisplayName: {\n          type: 'string',\n          description: 'The display name for the true variation, displayed in the LaunchDarkly user interface'\n        }\n      },\n      required: []\n    },\n    defaultClientSideAvailability: {\n      $ref: '#/$defs/client_side_availability'\n    },\n    key: {\n      type: 'string',\n      description: 'A unique key for the flag default'\n    },\n    tags: {\n      type: 'array',\n      description: 'A list of default tags for each flag',\n      items: {\n        type: 'string'\n      }\n    },\n    temporary: {\n      type: 'boolean',\n      description: 'Whether the flag should be temporary by default'\n    }\n  },\n  required: [],\n  $defs: {\n    client_side_availability: {\n      type: 'object',\n      properties: {\n        usingEnvironmentId: {\n          type: 'boolean'\n        },\n        usingMobileKey: {\n          type: 'boolean'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
    await maybeFilter(args, await client.api.v2.projects.flagDefaults.retrieveFlagDefaults(projectKey)),
  );
};

export default { metadata, tool, handler };
