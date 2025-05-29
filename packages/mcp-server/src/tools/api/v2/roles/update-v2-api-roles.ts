// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.roles',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/roles/{customRoleKey}',
  operationId: 'patchCustomRole',
};

export const tool: Tool = {
  name: 'update_v2_api_roles',
  description:
    'Update a single custom role. Updating a custom role uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the `policy` array, set the `path` to `/policy` and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.',
  inputSchema: {
    type: 'object',
    properties: {
      customRoleKey: {
        type: 'string',
        description: 'The custom role key',
      },
      patch: {
        type: 'array',
        description: 'A JSON patch representation of the change to make',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
      comment: {
        type: 'string',
        description: 'Optional comment',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { customRoleKey, ...body } = args as any;
  return client.api.v2.roles.update(customRoleKey, body);
};

export default { metadata, tool, handler };
