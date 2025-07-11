// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.release',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/flags/{projectKey}/{flagKey}/release',
  operationId: 'patchReleaseByFlagKey',
};

export const tool: Tool = {
  name: 'patch_all_flags_v2_api_release',
  description:
    'When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you\'re sure you don\'t need the data.\n\nThis endpoint is only available for releases that are part of a legacy release pipeline. Releases for new release pipelines should use the [Update phase status for release](https://launchdarkly.com/docs/api/releases-beta/update-phase-status) endpoint. To learn more about migrating from legacy release pipelines to fully automated release pipelines, read the [Release pipeline migration guide](https://launchdarkly.com/docs/guides/flags/release-pipeline-migration).\n\nUpdate currently active release for a flag. Updating releases requires the [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) format. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).\n\nYou can only use this endpoint to mark a release phase complete or incomplete. To indicate which phase to update, use the array index in the `path`. For example, to mark the first phase of a release as complete, use the following request body:\n\n```\n  [\n    {\n      "op": "replace",\n      "path": "/phase/0/complete",\n      "value": true\n    }\n  ]\n```\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      flagKey: {
        type: 'string',
        description: 'The flag key',
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

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { flagKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.flags.release.patchAll(flagKey, body));
};

export default { metadata, tool, handler };
