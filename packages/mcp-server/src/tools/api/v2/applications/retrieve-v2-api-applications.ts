// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/applications/{applicationKey}',
  operationId: 'getApplication',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_applications',
  description:
    '\nRetrieve an application by the application key.\n\n### Expanding the application response\n\nLaunchDarkly supports expanding the "Get application" response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `flags` includes details on the flags that have been evaluated by the application\n\nFor example, use `?expand=flags` to include the `flags` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      applicationKey: {
        type: 'string',
        description: 'The application key',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response. Options: `flags`.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { applicationKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.applications.retrieve(applicationKey, body));
};

export default { metadata, tool, handler };
