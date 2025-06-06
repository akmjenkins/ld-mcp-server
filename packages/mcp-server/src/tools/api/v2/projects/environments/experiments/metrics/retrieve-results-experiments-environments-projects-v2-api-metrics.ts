// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.experiments.metrics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath:
    '/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metrics/{metricKey}/results',
  operationId: 'getExperimentResults',
};

export const tool: Tool = {
  name: 'retrieve_results_experiments_environments_projects_v2_api_metrics',
  description:
    'Get results from an experiment for a particular metric.\n\nLaunchDarkly supports one field for expanding the "Get experiment results" response. By default, this field is **not** included in the response.\n\nTo expand the response, append the `expand` query parameter with the following field:\n* `traffic` includes the total count of units for each treatment.\n\nFor example, `expand=traffic` includes the `traffic` field for the project in the response.\n',
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
      metricKey: {
        type: 'string',
        description: 'The metric key',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of fields to expand in the response. Supported fields are explained above.',
      },
      iterationId: {
        type: 'string',
        description: 'The iteration ID',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { metricKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.environments.experiments.metrics.retrieveResults(metricKey, body),
  );
};

export default { metadata, tool, handler };
