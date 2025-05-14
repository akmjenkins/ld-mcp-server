// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.contexts',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'search_environments_projects_v2_api_contexts',
  description:
    '\nSearch for contexts.\n\nYou can use either the query parameters or the request body parameters. If both are provided, there is an error.\n\nTo learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). To learn more about contexts, read [Contexts and context kinds](https://launchdarkly.com/docs/home/observability/contexts#contexts-and-context-kinds).\n',
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
      continuationToken: {
        type: 'string',
        description:
          'Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the <code>next</code> link instead, because this value is an obfuscated string.',
      },
      filter: {
        type: 'string',
        description: 'A collection of context filters',
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
          'Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying <code>ts</code> for this value, or descending order by specifying <code>-ts</code>.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.environments.contexts.search(environmentKey, body);
};

export default { metadata, tool, handler };
