// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.release',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flags/{projectKey}/{flagKey}/release',
  operationId: 'getReleaseByFlagKey',
};

export const tool: Tool = {
  name: 'list_flags_v2_api_release',
  description: 'Get currently active release for a flag',
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { flagKey, ...body } = args as any;
  return client.api.v2.flags.release.list(flagKey, body);
};

export default { metadata, tool, handler };
