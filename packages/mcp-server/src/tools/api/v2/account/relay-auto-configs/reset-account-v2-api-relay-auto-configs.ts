// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.account.relay_auto_configs',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'reset_account_v2_api_relay_auto_configs',
  description: "Reset a Relay Proxy configuration's secret key with an optional expiry time for the old key.",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The Relay Proxy configuration ID',
      },
      expiry: {
        type: 'integer',
        description:
          'An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.account.relayAutoConfigs.reset(id, body);
};

export default { metadata, tool, handler };
