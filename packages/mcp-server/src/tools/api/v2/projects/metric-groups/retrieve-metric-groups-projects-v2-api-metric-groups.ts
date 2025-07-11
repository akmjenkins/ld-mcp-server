// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.metric_groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/metric-groups',
  operationId: 'getMetricGroups',
};

export const tool: Tool = {
  name: 'retrieve_metric_groups_projects_v2_api_metric_groups',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a list of all metric groups for the specified project.\n\n### Expanding the metric groups response\nLaunchDarkly supports one field for expanding the \"Get metric groups\" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with the following field:\n\n- `experiments` includes all experiments from the specific project that use the metric group\n\nFor example, `expand=experiments` includes the `experiments` field in the response.\n\n### Filtering metric groups\n\nThe `filter` parameter supports the following operators: `contains`, `equals`, `anyOf`.\n\n#### Supported fields and operators\n\nYou can only filter certain fields in metrics when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.\n\nWhen you search for metrics, the `filter` parameter supports the following fields and operators:\n\n|<div style=\"width:120px\">Field</div> |Description |Supported operators |\n|---|---|---|\n| `experimentStatus` | The experiment's status. One of `not_started`, `running`, `stopped`, `started`. | `equals` |\n| `hasConnections` | Whether the metric group has connections to experiments or guarded rollouts. One of `true`, `false`. | `equals` |\n| `kind` | The metric group kind. One of `funnel`, `standard`. | `equals` |\n| `maintainerIds` | The metric maintainer IDs. | `anyOf` |\n| `maintainerTeamKey` | The metric maintainer team key. | `equals` |\n| `query` | A \"fuzzy\" search across metric group key and name. Supply a string or list of strings to the operator. | `equals` |\n\n### Sorting metric groups\n\nLaunchDarkly supports the following fields for sorting:\n\n- `name` sorts by metric group name.\n- `createdAt` sorts by the creation date of the metric group.\n- `connectionCount` sorts by the number of connections to experiments the metric group has.\n\nBy default, the sort is in ascending order. Use `-` to sort in descending order. For example, `?sort=name` sorts the response by metric group name in ascending order, and `?sort=-name` sorts in descending order.\n\n#### Sample query\n\n`filter=experimentStatus equals 'not_started' and query equals 'metric name'`\n",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
      filter: {
        type: 'string',
        description:
          "Accepts filter by `experimentStatus`, `query`, `kind`, `hasConnections`, `maintainerIds`, and `maintainerTeamKey`. Example: `filter=experimentStatus equals 'running' and query equals 'test'`.",
      },
      limit: {
        type: 'integer',
        description:
          'The number of metric groups to return in the response. Defaults to 20. Maximum limit is 50.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items.',
      },
      sort: {
        type: 'string',
        description:
          'A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. Read the endpoint description for a full list of available sort fields.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.metricGroups.retrieveMetricGroups(projectKey, body),
  );
};

export default { metadata, tool, handler };
