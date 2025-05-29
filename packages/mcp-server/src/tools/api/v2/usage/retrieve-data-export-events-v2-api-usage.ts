// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.usage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/usage/data-export-events',
  operationId: 'getDataExportEventsUsage',
};

export const tool: Tool = {
  name: 'retrieve_data_export_events_v2_api_usage',
  description:
    'Get a time-series array of the number of monthly data export events from your account. The granularity is always daily, with a maximum of 31 days.',
  inputSchema: {
    type: 'object',
    properties: {
      environmentKey: {
        type: 'string',
        description:
          'An environment key. If specified, `projectKey` is required and results apply to the corresponding environment in this project.',
      },
      from: {
        type: 'string',
        description:
          'The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month.',
      },
      projectKey: {
        type: 'string',
        description:
          'A project key. If specified, `environmentKey` is required and results apply to the corresponding environment in this project.',
      },
      to: {
        type: 'string',
        description:
          'The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.usage.retrieveDataExportEvents(body);
};

export default { metadata, tool, handler };
