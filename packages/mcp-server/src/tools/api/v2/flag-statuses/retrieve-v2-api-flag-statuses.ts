// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flag_statuses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey}',
  operationId: 'getFeatureFlagStatus',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_flag_statuses',
  description: 'Get the status for a particular feature flag.',
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
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  return client.api.v2.flagStatuses.retrieve(featureFlagKey, body);
};

export default { metadata, tool, handler };
