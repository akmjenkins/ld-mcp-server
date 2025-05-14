// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.context_attributes',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_environments_projects_v2_api_context_attributes',
  description: 'Get context attribute values.',
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
      attributeName: {
        type: 'string',
        description: 'The attribute name',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `value` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).',
      },
      limit: {
        type: 'integer',
        description:
          'Specifies the maximum number of items in the collection to return (max: 100, default: 50)',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { attributeName, ...body } = args as any;
  return client.api.v2.projects.environments.contextAttributes.retrieve(attributeName, body);
};

export default { metadata, tool, handler };
