// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.charts.flags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/charts/flags/stale',
  operationId: 'getStaleFlagsChart',
};

export const tool: Tool = {
  name: 'retrieve_stale_charts_engineering_insights_v2_api_flags',
  description:
    'Get stale flags chart data. Engineering insights displays stale flags data in the [flag health metric view](https://launchdarkly.com/docs/home/observability/flag-health).\n\n### Expanding the chart response\n\nLaunchDarkly supports expanding the chart response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `metrics` includes details on the metrics related to stale flags\n\nFor example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      applicationKey: {
        type: 'string',
        description: 'Comma separated list of application keys',
      },
      expand: {
        type: 'string',
        description: 'Options: `metrics`',
      },
      groupBy: {
        type: 'string',
        description: 'Property to group results by. Options: `maintainer`',
      },
      maintainerId: {
        type: 'string',
        description: 'Comma-separated list of individual maintainers to filter results.',
      },
      maintainerTeamKey: {
        type: 'string',
        description: 'Comma-separated list of team maintainer keys to filter results.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.engineeringInsights.charts.flags.retrieveStale(body);
};

export default { metadata, tool, handler };
