// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_extinctions_v2_api_code_refs',
  description:
    'Get a list of all extinctions. LaunchDarkly creates an extinction event after you remove all code references to a flag. To learn more, read [About extinction events](https://launchdarkly.com/docs/home/observability/code-references#about-extinction-events).',
  inputSchema: {
    type: 'object',
    properties: {
      branchName: {
        type: 'string',
        description:
          'Filter results to a specific branch. By default, only the default branch will be queried for extinctions.',
      },
      flagKey: {
        type: 'string',
        description: 'Filter results to a specific flag key',
      },
      from: {
        type: 'integer',
        description:
          'Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `to`.',
      },
      projKey: {
        type: 'string',
        description: 'Filter results to a specific project',
      },
      repoName: {
        type: 'string',
        description: 'Filter results to a specific repository',
      },
      to: {
        type: 'integer',
        description:
          'Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `from`.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.codeRefs.retrieveExtinctions(body);
};

export default { metadata, tool, handler };
