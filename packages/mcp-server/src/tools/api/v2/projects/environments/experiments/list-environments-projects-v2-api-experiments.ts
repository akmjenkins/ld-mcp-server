// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.experiments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments',
  operationId: 'getExperiments',
};

export const tool: Tool = {
  name: 'list_environments_projects_v2_api_experiments',
  description:
    'Get details about all experiments in an environment.\n\n### Filtering experiments\n\nLaunchDarkly supports the `filter` query param for filtering, with the following fields:\n\n- `flagKey` filters for only experiments that use the flag with the given key.\n- `metricKey` filters for only experiments that use the metric with the given key.\n- `status` filters for only experiments with an iteration with the given status. An iteration can have the status `not_started`, `running` or `stopped`.\n\nFor example, `filter=flagKey:my-flag,status:running,metricKey:page-load-ms` filters for experiments for the given flag key and the given metric key which have a currently running iteration.\n\n### Expanding the experiments response\n\nLaunchDarkly supports four fields for expanding the "Get experiments" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n- `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response.\n- `draftIteration` includes the iteration which has not been started yet, if any.\n- `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response.\n- `treatments` includes all treatment and parameter details. By default treatment data is not included in the response.\n\nFor example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.\n',
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
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above.',
      },
      lifecycleState: {
        type: 'string',
        description:
          'A comma-separated list of experiment archived states. Supports `archived`, `active`, or both. Defaults to `active` experiments.',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of experiments to return. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.environments.experiments.list(environmentKey, body),
  );
};

export default { metadata, tool, handler };
