// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.usage.mau',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_usage_v2_api_mau',
  description:
    'Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).',
  inputSchema: {
    type: 'object',
    properties: {
      aggregationType: {
        type: 'string',
        description:
          'If specified, queries for rolling 30-day, month-to-date, or daily incremental counts. Default is rolling 30-day. Valid values: rolling_30d, month_to_date, daily_incremental',
      },
      anonymous: {
        type: 'string',
        description: 'If specified, filters results to either anonymous or nonanonymous users.',
      },
      contextKind: {
        type: 'string',
        description:
          'Filters results to the specified context kinds. Can be specified multiple times, one query parameter per context kind. If not set, queries for the user context kind.',
      },
      environment: {
        type: 'string',
        description:
          'An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project.',
      },
      from: {
        type: 'string',
        description: 'The series of data returned starts from this timestamp. Defaults to 30 days ago.',
      },
      groupby: {
        type: 'string',
        description:
          'If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous, contextKind, sdkAppId',
      },
      project: {
        type: 'string',
        description:
          'A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects.',
      },
      sdk: {
        type: 'string',
        description:
          'An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK.',
      },
      sdktype: {
        type: 'string',
        description:
          'An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server',
      },
      to: {
        type: 'string',
        description: 'The series of data returned ends at this timestamp. Defaults to the current time.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.usage.mau.list(body);
};

export default { metadata, tool, handler };
