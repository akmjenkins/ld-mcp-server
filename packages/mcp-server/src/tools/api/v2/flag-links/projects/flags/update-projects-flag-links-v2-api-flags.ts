// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flag_links.projects.flags',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}',
  operationId: 'updateFlagLink',
};

export const tool: Tool = {
  name: 'update_projects_flag_links_v2_api_flags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a flag link. Updating a flag link uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/flag_link_rep',\n  $defs: {\n    flag_link_rep: {\n      type: 'object',\n      properties: {\n        _createdAt: {\n          type: 'integer',\n          description: 'Timestamp of when the flag link was created'\n        },\n        _deepLink: {\n          type: 'string',\n          description: 'The URL for the external resource the flag is linked to'\n        },\n        _id: {\n          type: 'string',\n          description: 'The ID of this flag link'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        _timestamp: {\n          type: 'object',\n          description: 'The time to mark this flag link as associated with the external URL. Defaults to the creation time of the flag link, but can be set to another time during creation.',\n          properties: {\n            milliseconds: {\n              type: 'integer'\n            },\n            rfc3339: {\n              type: 'string'\n            },\n            seconds: {\n              type: 'integer'\n            },\n            simple: {\n              type: 'string'\n            }\n          },\n          required: []\n        },\n        _integrationKey: {\n          type: 'string',\n          description: 'The integration key for an integration whose <code>manifest.json</code> includes the <code>flagLink</code> capability, if this is a flag link for an existing integration'\n        },\n        _key: {\n          type: 'string',\n          description: 'The flag link key'\n        },\n        _member: {\n          type: 'object',\n          description: 'Details on the member associated with this flag link',\n          properties: {\n            _id: {\n              type: 'string'\n            },\n            _links: {\n              type: 'object'\n            },\n            firstName: {\n              type: 'string'\n            },\n            lastName: {\n              type: 'string'\n            }\n          },\n          required: [            '_id',\n            '_links'\n          ]\n        },\n        _metadata: {\n          type: 'object',\n          description: 'The metadata required by this integration in order to create a flag link, if this is a flag link for an existing integration. Defined in the integration\\'s <code>manifest.json</code> file under <code>flagLink</code>.'\n        },\n        description: {\n          type: 'string',\n          description: 'The description of the flag link'\n        },\n        title: {\n          type: 'string',\n          description: 'The title of the flag link'\n        }\n      },\n      required: [        '_createdAt',\n        '_deepLink',\n        '_id',\n        '_links',\n        '_timestamp'\n      ]\n    }\n  }\n}\n```",
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
      id: {
        type: 'string',
        description: 'The flag link ID',
      },
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      patch_operation: {
        type: 'object',
        properties: {
          op: {
            type: 'string',
            description: 'The type of operation to perform',
          },
          path: {
            type: 'string',
            description: 'A JSON Pointer string specifying the part of the document to operate on',
          },
          value: {
            type: 'object',
            description: 'A JSON value used in "add", "replace", and "test" operations',
          },
        },
        required: ['op', 'path'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.flagLinks.projects.flags.update(id, body)),
  );
};

export default { metadata, tool, handler };
