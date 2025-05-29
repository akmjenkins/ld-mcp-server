// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.flag_import',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}',
  operationId: 'patchFlagImportConfiguration',
};

export const tool: Tool = {
  name: 'update_integration_capabilities_v2_api_flag_import',
  description:
    'Updating a flag import configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the import configuration fields that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.<br/><br/>You can update the `config`, `tags`, and `name` of the flag import configuration.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      integrationKey: {
        type: 'string',
        description: 'The integration key',
      },
      integrationId: {
        type: 'string',
        description: 'The integration ID',
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
  const { integrationId, ...body } = args as any;
  return client.api.v2.integrationCapabilities.flagImport.update(integrationId, body);
};

export default { metadata, tool, handler };
