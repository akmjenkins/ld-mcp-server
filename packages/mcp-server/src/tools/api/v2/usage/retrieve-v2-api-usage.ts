// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.usage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/usage/events/{type}',
  operationId: 'getEventsUsage',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_usage',
  description:
    'Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.',
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
        description: 'The type of event to retrieve. Must be either `received` or `published`.',
      },
      from: {
        type: 'string',
        description: 'The series of data returned starts from this timestamp. Defaults to 24 hours ago.',
      },
      to: {
        type: 'string',
        description: 'The series of data returned ends at this timestamp. Defaults to the current time.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { type, ...body } = args as any;
  return client.api.v2.usage.retrieve(type, body);
};

export default { metadata, tool, handler };
