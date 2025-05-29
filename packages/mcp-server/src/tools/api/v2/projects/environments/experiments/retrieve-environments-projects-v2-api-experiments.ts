// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.experiments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}',
  operationId: 'getExperiment',
};

export const tool: Tool = {
  name: 'retrieve_environments_projects_v2_api_experiments',
  description:
    'Get details about an experiment.\n\n### Expanding the experiment response\n\nLaunchDarkly supports four fields for expanding the "Get experiment" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n- `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response.\n- `draftIteration` includes the iteration which has not been started yet, if any.\n- `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response.\n- `treatments` includes all treatment and parameter details. By default treatment data is not included in the response.\n\nFor example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.\n',
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
      experimentKey: {
        type: 'string',
        description: 'The experiment key',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { experimentKey, ...body } = args as any;
  return client.api.v2.projects.environments.experiments.retrieve(experimentKey, body);
};

export default { metadata, tool, handler };
