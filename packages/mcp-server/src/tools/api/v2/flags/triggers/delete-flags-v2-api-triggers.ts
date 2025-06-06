// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.triggers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}',
  operationId: 'deleteTriggerWorkflow',
};

export const tool: Tool = {
  name: 'delete_flags_v2_api_triggers',
  description: 'Delete a flag trigger by ID.',
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
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      id: {
        type: 'string',
        description: 'The flag trigger ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  await client.api.v2.flags.triggers.delete(id, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
