// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.applications.versions',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_applications_v2_api_versions',
  description:
    'Update an application version. You can update the `supported` field. Requires a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to the application version. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).',
  inputSchema: {
    type: 'object',
    properties: {
      applicationKey: {
        type: 'string',
        description: 'The application key',
      },
      versionKey: {
        type: 'string',
        description: 'The application version key',
      },
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/patch_operation',
        },
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
  const { versionKey, ...body } = args as any;
  return client.api.v2.applications.versions.update(versionKey, body);
};

export default { metadata, tool, handler };
