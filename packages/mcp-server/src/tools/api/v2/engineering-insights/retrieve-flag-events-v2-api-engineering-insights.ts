// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_flag_events_v2_api_engineering_insights',
  description:
    'Get a list of flag events\n\n### Expanding the flag event collection response\n\nLaunchDarkly supports expanding the flag event collection response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `experiments` includes details on all of the experiments run on each flag\n\nFor example, use `?expand=experiments` to include the `experiments` field in the response. By default, this field is **not** included in the response.\n',
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
      after: {
        type: 'string',
        description: 'Identifier used for pagination',
      },
      applicationKey: {
        type: 'string',
        description: 'Comma separated list of application keys',
      },
      before: {
        type: 'string',
        description: 'Identifier used for pagination',
      },
      expand: {
        type: 'string',
        description: 'Expand properties in response. Options: `experiments`',
      },
      from: {
        type: 'integer',
        description: 'Unix timestamp in milliseconds. Default value is 7 days ago.',
      },
      global: {
        type: 'string',
        description:
          'Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude`',
      },
      hasExperiments: {
        type: 'boolean',
        description:
          'Filter events to those associated with an experiment (`true`) or without an experiment (`false`)',
      },
      impactSize: {
        type: 'string',
        description:
          'Filter events by impact size. A small impact created a less than 20% change in the proportion of end users receiving one or more flag variations. A medium impact created between a 20%-80% change. A large impact created a more than 80% change. Options: `none`, `small`, `medium`, `large`',
      },
      limit: {
        type: 'integer',
        description: 'The number of deployments to return. Default is 20. Maximum allowed is 100.',
      },
      query: {
        type: 'string',
        description: 'Filter events by flag key',
      },
      to: {
        type: 'integer',
        description: 'Unix timestamp in milliseconds. Default value is now.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.engineeringInsights.retrieveFlagEvents(body);
};

export default { metadata, tool, handler };
