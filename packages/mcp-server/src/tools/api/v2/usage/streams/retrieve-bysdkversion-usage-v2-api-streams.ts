// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.usage.streams',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_bysdkversion_usage_v2_api_streams',
  description:
    'Get multiple series of the number of streaming connections to LaunchDarkly in each time period, separated by SDK type and version. Information about each series is in the metadata array. The granularity of the data depends on the age of the data requested. If the requested range is within the past 2 hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.',
  inputSchema: {
    type: 'object',
    properties: {
      source: {
        type: 'string',
        description: 'The source of streaming connections to describe. Must be either `client` or `server`.',
      },
      from: {
        type: 'string',
        description: 'The series of data returned starts from this timestamp. Defaults to 24 hours ago.',
      },
      sdk: {
        type: 'string',
        description: 'If included, this filters the returned series to only those that match this SDK name.',
      },
      to: {
        type: 'string',
        description: 'The series of data returned ends at this timestamp. Defaults to the current time.',
      },
      tz: {
        type: 'string',
        description: 'The timezone to use for breaks between days when returning daily data.',
      },
      version: {
        type: 'string',
        description:
          'If included, this filters the returned series to only those that match this SDK version.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { source, ...body } = args as any;
  return client.api.v2.usage.streams.retrieveBysdkversion(source, body);
};

export default { metadata, tool, handler };
