// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/pull-requests',
  operationId: 'getPullRequests',
};

export const tool: Tool = {
  name: 'retrieve_pull_requests_v2_api_engineering_insights',
  description:
    'Get a list of pull requests\n\n### Expanding the pull request collection response\n\nLaunchDarkly supports expanding the pull request collection response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `deployments` includes details on all of the deployments associated with each pull request\n* `flagReferences` includes details on all of the references to flags in each pull request\n* `leadTime` includes details about the lead time of the pull request for each stage\n\nFor example, use `?expand=deployments` to include the `deployments` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      after: {
        type: 'string',
        description: 'Identifier used for pagination',
      },
      applicationKey: {
        type: 'string',
        description: 'Filter the results to pull requests deployed to a comma separated list of applications',
      },
      before: {
        type: 'string',
        description: 'Identifier used for pagination',
      },
      environmentKey: {
        type: 'string',
        description:
          "Required if you are using the <code>sort</code> parameter's <code>leadTime</code> option to sort pull requests.",
      },
      expand: {
        type: 'string',
        description: 'Expand properties in response. Options: `deployments`, `flagReferences`, `leadTime`.',
      },
      from: {
        type: 'string',
        description: 'Unix timestamp in milliseconds. Default value is 7 days ago.',
        format: 'date-time',
      },
      limit: {
        type: 'integer',
        description: 'The number of pull requests to return. Default is 20. Maximum allowed is 100.',
      },
      query: {
        type: 'string',
        description: 'Filter list of pull requests by title or author',
      },
      sort: {
        type: 'string',
        description:
          'Sort results. Requires the `environmentKey` to be set. Options: `leadTime` (asc) and `-leadTime` (desc). When query option is excluded, default sort is by created or merged date.',
      },
      status: {
        type: 'string',
        description:
          'Filter results to pull requests with the given status. Options: `open`, `merged`, `closed`, `deployed`.',
      },
      to: {
        type: 'string',
        description: 'Unix timestamp in milliseconds. Default value is now.',
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.engineeringInsights.retrievePullRequests(body);
};

export default { metadata, tool, handler };
