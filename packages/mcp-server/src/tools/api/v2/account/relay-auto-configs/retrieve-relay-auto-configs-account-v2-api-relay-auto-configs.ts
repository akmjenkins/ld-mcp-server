// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.account.relay_auto_configs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_relay_auto_configs_account_v2_api_relay_auto_configs',
  description: 'Get a list of Relay Proxy configurations in the account.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return client.api.v2.account.relayAutoConfigs.retrieveRelayAutoConfigs();
};

export default { metadata, tool, handler };
