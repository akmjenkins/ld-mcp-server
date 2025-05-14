// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_caller_identity_api_v2',
  description:
    'Get basic information about the identity used (session cookie, API token, SDK keys, etc.) to call the API',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  return client.api.v2.retrieveCallerIdentity();
};

export default { metadata, tool, handler };
