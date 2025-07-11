// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.holdouts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts',
  operationId: 'postHoldout',
};

export const tool: Tool = {
  name: 'create_environments_projects_v2_api_holdouts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new holdout in the specified project.",
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
      attributes: {
        type: 'array',
        description: "The attributes that the holdout iteration's results can be sliced by",
        items: {
          type: 'string',
        },
      },
      description: {
        type: 'string',
        description: 'Description of the holdout',
      },
      holdoutamount: {
        type: 'string',
        description: 'Audience allocation for the holdout',
      },
      key: {
        type: 'string',
        description: 'A key that identifies the holdout',
      },
      maintainerId: {
        type: 'string',
        description: 'Maintainer id',
      },
      metrics: {
        type: 'array',
        description: 'Details on the metrics for this experiment',
        items: {
          $ref: '#/$defs/metric_input',
        },
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the holdout',
      },
      prerequisiteflagkey: {
        type: 'string',
        description: 'The key of the flag that the holdout is dependent on',
      },
      primarymetrickey: {
        type: 'string',
        description: 'The key of the primary metric for this holdout',
      },
      randomizationunit: {
        type: 'string',
        description: 'The chosen randomization unit for the holdout base experiment',
      },
    },
    $defs: {
      metric_input: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            description: 'The metric key',
          },
          isGroup: {
            type: 'boolean',
            description: 'Whether this is a metric group (true) or a metric (false). Defaults to false',
          },
          primary: {
            type: 'boolean',
            description:
              'Deprecated, use <code>primarySingleMetricKey</code> and <code>primaryFunnelKey</code>. Whether this is a primary metric (true) or a secondary metric (false)',
          },
        },
        required: ['key'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.projects.environments.holdouts.create(environmentKey, body));
};

export default { metadata, tool, handler };
