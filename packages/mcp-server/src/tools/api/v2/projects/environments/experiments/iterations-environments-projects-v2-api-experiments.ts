// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.experiments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations',
  operationId: 'createIteration',
};

export const tool: Tool = {
  name: 'iterations_environments_projects_v2_api_experiments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an experiment iteration.\n\nExperiment iterations let you record experiments in individual blocks of time. Initially, iterations are created with a status of `not_started` and appear in the `draftIteration` field of an experiment. To start or stop an iteration, [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment) with the `startIteration` or `stopIteration` instruction. \n\nTo learn more, read [Start experiment iterations](https://launchdarkly.com/docs/home/experimentation/feature#start-experiment-iterations).\n",
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
      flags: {
        type: 'object',
        description: 'Details on the feature flag and targeting rules for this iteration',
      },
      hypothesis: {
        type: 'string',
        description: 'The expected outcome of this experiment',
      },
      metrics: {
        type: 'array',
        description: 'Details on the metrics for this experiment',
        items: {
          $ref: '#/$defs/metric_input',
        },
      },
      treatments: {
        type: 'array',
        description:
          'Details on the variations you are testing in the experiment. You establish these variations in feature flags, and then reuse them in experiments.',
        items: {
          type: 'object',
          properties: {
            allocationPercent: {
              type: 'string',
              description: 'The percentage of traffic allocated to this treatment during the iteration',
            },
            baseline: {
              type: 'boolean',
              description: 'Whether this treatment is the baseline to compare other treatments against',
            },
            name: {
              type: 'string',
              description: 'The treatment name',
            },
            parameters: {
              type: 'array',
              description: 'Details on the flag and variation to use for this treatment',
              items: {
                type: 'object',
                properties: {
                  flagKey: {
                    type: 'string',
                    description: 'The flag key',
                  },
                  variationId: {
                    type: 'string',
                    description: 'The ID of the flag variation',
                  },
                },
                required: ['flagKey', 'variationId'],
              },
            },
          },
          required: ['allocationPercent', 'baseline', 'name', 'parameters'],
        },
      },
      attributes: {
        type: 'array',
        description: "The attributes that this iteration's results can be sliced by",
        items: {
          type: 'string',
        },
      },
      canReshuffleTraffic: {
        type: 'boolean',
        description:
          'Whether to allow the experiment to reassign traffic to different variations when you increase or decrease the traffic in your experiment audience (true) or keep all traffic assigned to its initial variation (false). Defaults to true.',
      },
      primaryFunnelKey: {
        type: 'string',
        description:
          'The key of the primary funnel group for this experiment. Either <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be present.',
      },
      primarySingleMetricKey: {
        type: 'string',
        description:
          'The key of the primary metric for this experiment. Either <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be present.',
      },
      randomizationUnit: {
        type: 'string',
        description: 'The unit of randomization for this iteration. Defaults to user.',
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
  const { experimentKey, ...body } = args as any;
  return asTextContentResult(
    await client.api.v2.projects.environments.experiments.iterations(experimentKey, body),
  );
};

export default { metadata, tool, handler };
