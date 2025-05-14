// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.deployments',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_engineering_insights_v2_api_deployments',
  description:
    'Get a deployment by ID.\n\nThe deployment ID is returned as part of the [List deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments) response. It is the `id` field of each element in the `items` array.\n\n### Expanding the deployment response\n\nLaunchDarkly supports expanding the deployment response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `pullRequests` includes details on all of the pull requests associated with each deployment\n* `flagReferences` includes details on all of the references to flags in each deployment\n\nFor example, use `?expand=pullRequests` to include the `pullRequests` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      deploymentID: {
        type: 'string',
        description: 'The deployment ID',
      },
      expand: {
        type: 'string',
        description: 'Expand properties in response. Options: `pullRequests`, `flagReferences`',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { deploymentID, ...body } = args as any;
  return client.api.v2.engineeringInsights.deployments.retrieve(deploymentID, body);
};

export default { metadata, tool, handler };
