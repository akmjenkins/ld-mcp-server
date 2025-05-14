// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.contexts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_environments_projects_v2_api_contexts',
  description: 'Get contexts based on kind and key.',
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
      kind: {
        type: 'string',
        description: 'The context kind',
      },
      key: {
        type: 'string',
        description: 'The context key',
      },
      continuationToken: {
        type: 'string',
        description:
          'Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead.',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).',
      },
      includeTotalCount: {
        type: 'boolean',
        description:
          'Specifies whether to include or omit the total count of matching contexts. Defaults to true.',
      },
      limit: {
        type: 'integer',
        description:
          'Specifies the maximum number of items in the collection to return (max: 50, default: 20)',
      },
      sort: {
        type: 'string',
        description:
          'Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { key, ...body } = args as any;
  return client.api.v2.projects.environments.contexts.retrieve(key, body);
};

export default { metadata, tool, handler };
