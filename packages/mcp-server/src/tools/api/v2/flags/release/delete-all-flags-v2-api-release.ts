// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.release',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/flags/{projectKey}/{flagKey}/release',
  operationId: 'deleteReleaseByFlagKey',
};

export const tool: Tool = {
  name: 'delete_all_flags_v2_api_release',
  description: 'Deletes a release from a flag',
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
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { flagKey, ...body } = args as any;
  const response = await client.api.v2.flags.release.deleteAll(flagKey, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
