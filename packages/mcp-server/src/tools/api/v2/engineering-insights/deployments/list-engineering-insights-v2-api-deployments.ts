// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.deployments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/deployments',
  operationId: 'getDeployments',
};

export const tool: Tool = {
  name: 'list_engineering_insights_v2_api_deployments',
  description:
    'Get a list of deployments\n\n### Expanding the deployment collection response\n\nLaunchDarkly supports expanding the deployment collection response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `pullRequests` includes details on all of the pull requests associated with each deployment\n* `flagReferences` includes details on all of the references to flags in each deployment\n\nFor example, use `?expand=pullRequests` to include the `pullRequests` field in the response. By default, this field is **not** included in the response.\n',
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
        description: 'Expand properties in response. Options: `pullRequests`, `flagReferences`',
      },
      from: {
        type: 'integer',
        description: 'Unix timestamp in milliseconds. Default value is 7 days ago.',
      },
      kind: {
        type: 'string',
        description: 'The deployment kind',
      },
      limit: {
        type: 'integer',
        description: 'The number of deployments to return. Default is 20. Maximum allowed is 100.',
      },
      status: {
        type: 'string',
        description: 'The deployment status',
      },
      to: {
        type: 'integer',
        description: 'Unix timestamp in milliseconds. Default value is now.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.engineeringInsights.deployments.list(body));
};

export default { metadata, tool, handler };
