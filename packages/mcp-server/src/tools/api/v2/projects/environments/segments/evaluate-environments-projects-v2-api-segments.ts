// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.segments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate',
  operationId: 'getContextInstanceSegmentsMembershipByEnv',
};

export const tool: Tool = {
  name: 'evaluate_environments_projects_v2_api_segments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFor a given context instance with attributes, get membership details for all segments. In the request body, pass in the context instance.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    items: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          _links: {\n            type: 'object',\n            description: 'The location and content type of related resources'\n          },\n          description: {\n            type: 'string',\n            description: 'A description of the segment\\'s purpose'\n          },\n          external: {\n            type: 'string',\n            description: 'If the segment is a synced segment, the name of the external source'\n          },\n          isIndividuallyTargeted: {\n            type: 'boolean',\n            description: 'Whether the context is explicitly included in this segment'\n          },\n          isMember: {\n            type: 'boolean',\n            description: 'Whether the context is a member of this segment, either by explicit inclusion or by rule matching'\n          },\n          isRuleTargeted: {\n            type: 'boolean',\n            description: 'Whether the context is captured by this segment\\'s rules. The value of this field is undefined if the context is also explicitly included (<code>isIndividuallyTargeted</code> is <code>true</code>).'\n          },\n          key: {\n            type: 'string',\n            description: 'A unique key used to reference the segment'\n          },\n          name: {\n            type: 'string',\n            description: 'A human-friendly name for the segment'\n          },\n          unbounded: {\n            type: 'boolean',\n            description: 'Whether this is an unbounded segment. Unbounded segments, also called big segments, may be list-based segments with more than 15,000 entries, or synced segments.'\n          }\n        },\n        required: [          '_links',\n          'description',\n          'external',\n          'isIndividuallyTargeted',\n          'isMember',\n          'isRuleTargeted',\n          'key',\n          'name',\n          'unbounded'\n        ]\n      }\n    }\n  },\n  required: [    '_links',\n    'items'\n  ]\n}\n```",
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
      body: {
        type: 'object',
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
      await client.api.v2.projects.environments.segments.evaluate(environmentKey, body),
    ),
  );
};

export default { metadata, tool, handler };
