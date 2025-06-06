// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.holdouts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}',
  operationId: 'getHoldout',
};

export const tool: Tool = {
  name: 'retrieve_environments_projects_v2_api_holdouts',
  description:
    'Get details about a holdout.\n\n### Expanding the holdout response\n\nLaunchDarkly supports the following fields for expanding the "Get holdout" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n- `draftIteration` includes the iteration which has not been started yet, if any, for this holdout.\n- `previousIterations` includes all iterations prior to the current iteration, for this holdout. By default only the current iteration is included in the response.\n- `rel-draftIteration` includes the iteration which has not been started yet, if any, for the experiments related to this holdout.\n- `rel-metrics` includes metrics for experiments related to this holdout.\n- `rel-previousIterations` includes all iterations prior to the current iteration, for the experiments related to this holdout.\n- `rel-secondaryMetrics` includes secondary metrics for experiments related to this holdout.\n- `rel-treatments` includes all treatment and parameter details for experiments related to this holdout.\n- `secondaryMetrics` includes secondary metrics for this holdout. By default only the primary metric is included in the response.\n- `treatments` includes all treatment and parameter details for this holdout. By default treatment data is not included in the response.\n\nFor example, `expand=draftIteration,rel-draftIteration` includes the `draftIteration` and `rel-draftIteration` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      holdoutKey: {
        type: 'string',
        description: 'The holdout experiment key',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above. Holdout experiment expansion fields have no prefix. Related experiment expansion fields have `rel-` as a prefix.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { holdoutKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.environments.holdouts.retrieve(holdoutKey, body));
};

export default { metadata, tool, handler };
