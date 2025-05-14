// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.experiments',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_environments_projects_v2_api_experiments',
  description:
    "Create an experiment.\n\nTo run this experiment, you'll need to [create an iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration) and then [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment) with the `startIteration` instruction.\n\nTo learn more, read [Creating experiments](https://launchdarkly.com/docs/home/experimentation/create).\n",
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
      iteration: {
        $ref: '#/$defs/iteration_input',
      },
      key: {
        type: 'string',
        description: 'The experiment key',
      },
      name: {
        type: 'string',
        description: 'The experiment name',
      },
      description: {
        type: 'string',
        description: 'The experiment description',
      },
      holdoutId: {
        type: 'string',
        description: 'The ID of the holdout',
      },
      maintainerId: {
        type: 'string',
        description: 'The ID of the member who maintains this experiment',
      },
    },
    $defs: {
      iteration_input: {
        type: 'object',
        properties: {
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
        required: ['flags', 'hypothesis', 'metrics', 'treatments'],
      },
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

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.environments.experiments.create(environmentKey, body);
};

export default { metadata, tool, handler };
