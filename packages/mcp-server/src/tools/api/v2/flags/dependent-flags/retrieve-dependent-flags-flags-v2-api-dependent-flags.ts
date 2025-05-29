// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.dependent_flags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags',
  operationId: 'getDependentFlags',
};

export const tool: Tool = {
  name: 'retrieve_dependent_flags_flags_v2_api_dependent_flags',
  description:
    '> ### Flag prerequisites is an Enterprise feature\n>\n> Flag prerequisites is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).\n\nList dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite. To learn more, read [Flag prerequisites](https://launchdarkly.com/docs/home/flags/prereqs).\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  return client.api.v2.flags.dependentFlags.retrieveDependentFlags(featureFlagKey, body);
};

export default { metadata, tool, handler };
