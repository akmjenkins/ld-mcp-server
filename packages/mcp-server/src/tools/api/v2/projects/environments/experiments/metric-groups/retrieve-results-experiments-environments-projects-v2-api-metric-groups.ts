// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.experiments.metric_groups',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_results_experiments_environments_projects_v2_api_metric_groups',
  description: 'Get results from an experiment for a particular metric group.',
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
      metricGroupKey: {
        type: 'string',
        description: 'The metric group key',
      },
      iterationId: {
        type: 'string',
        description: 'The iteration ID',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { metricGroupKey, ...body } = args as any;
  return client.api.v2.projects.environments.experiments.metricGroups.retrieveResults(metricGroupKey, body);
};

export default { metadata, tool, handler };
