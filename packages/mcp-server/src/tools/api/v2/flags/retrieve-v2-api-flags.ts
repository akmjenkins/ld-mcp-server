// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}',
  operationId: 'getFeatureFlag',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_flags',
  description:
    'Get a single feature flag by key. By default, this returns the configurations for all environments. You can filter environments with the `env` query parameter. For example, setting `env=production` restricts the returned configurations to just the `production` environment.\n\n> #### Recommended use\n>\n> This endpoint can return a large amount of information. Specifying one or multiple environments with the `env` parameter can decrease response time and overall payload size. We recommend using this parameter to return only the environments relevant to your query.\n\n### Expanding response\n\nLaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:\n\n- `evaluation` includes evaluation information within returned environments, including which context kinds the flag has been evaluated for in the past 30 days \n- `migrationSettings` includes migration settings information within the flag and within returned environments. These settings are only included for migration flags, that is, where `purpose` is `migration`.\n\nFor example, `expand=evaluation` includes the `evaluation` field in the response.\n',
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
      env: {
        type: 'string',
        description: 'Filter configurations by environment',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of fields to expand in the response. Supported fields are explained above.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.flags.retrieve(featureFlagKey, body));
};

export default { metadata, tool, handler };
