// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}',
  operationId: 'deleteFeatureFlag',
};

export const tool: Tool = {
  name: 'delete_v2_api_flags',
  description:
    'Delete a feature flag in all environments. Use with caution: only delete feature flags your application no longer uses.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key. The key identifies the flag in your code.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  const response = await client.api.v2.flags.delete(featureFlagKey, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
