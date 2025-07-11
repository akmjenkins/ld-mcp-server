// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet results from an experiment for a particular metric.\n\nLaunchDarkly supports one field for expanding the \"Get experiment results\" response. By default, this field is **not** included in the response.\n\nTo expand the response, append the `expand` query parameter with the following field:\n* `traffic` includes the total count of units for each treatment.\n\nFor example, `expand=traffic` includes the `traffic` field for the project in the response.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/experiment_bayesian_results_rep',\n  $defs: {\n    experiment_bayesian_results_rep: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        metricSeen: {\n          type: 'object',\n          properties: {\n            ever: {\n              type: 'boolean',\n              description: 'Whether the metric has received an event for this iteration'\n            },\n            timestamp: {\n              type: 'integer',\n              description: 'Timestamp of when the metric most recently received an event for this iteration'\n            }\n          },\n          required: []\n        },\n        probabilityOfMismatch: {\n          type: 'number',\n          description: 'The probability of a Sample Ratio Mismatch'\n        },\n        results: {\n          type: 'array',\n          description: 'A list of attribute values and their corresponding treatment results',\n          items: {\n            type: 'object',\n            properties: {\n              attribute: {\n                type: 'string',\n                description: 'An attribute that results are sliced by'\n              },\n              attributeValue: {\n                type: 'string',\n                description: 'Attribute Value for \\'attribute\\''\n              },\n              treatmentResults: {\n                type: 'array',\n                description: 'A list of the results for each treatment',\n                items: {\n                  $ref: '#/$defs/treatment_result_rep'\n                }\n              }\n            },\n            required: []\n          }\n        },\n        treatmentResults: {\n          type: 'array',\n          description: 'Deprecated, use <code>results</code> instead. Only populated when response does not contain results sliced by multiple attributes.',\n          items: {\n            $ref: '#/$defs/treatment_result_rep'\n          }\n        }\n      },\n      required: []\n    },\n    treatment_result_rep: {\n      type: 'object',\n      properties: {\n        bayesianBeta: {\n          type: 'object',\n          description: 'The statistical parameters relevant to the Bayesian Beta-Binomial model',\n          properties: {\n            dataWeight: {\n              type: 'number',\n              description: 'The precision weight of the data mean'\n            },\n            priorAlpha: {\n              type: 'number',\n              description: 'Sum of converted pseudo-units for prior distribution'\n            },\n            priorBeta: {\n              type: 'number',\n              description: 'Sum of non-converted pseudo-units for prior distribution'\n            },\n            priorMean: {\n              type: 'number',\n              description: 'Mean of the prior distribution'\n            }\n          },\n          required: []\n        },\n        bayesianNormal: {\n          type: 'object',\n          description: 'The statistical parameters relevant to the Bayesian Normal model',\n          properties: {\n            dataWeight: {\n              type: 'number',\n              description: 'The precision weight of the data mean'\n            },\n            priorMean: {\n              type: 'number',\n              description: 'Mean of the prior distribution'\n            }\n          },\n          required: []\n        },\n        correlation: {\n          type: 'number',\n          description: 'The outcome-covariate correlation'\n        },\n        covariateImbalance: {\n          type: 'number',\n          description: 'The imbalance between the covariate mean for the arm and the covariate mean for the experiment'\n        },\n        credibleInterval: {\n          type: 'object',\n          description: 'The range of the metric\\'s values that you should have 90% confidence in.',\n          properties: {\n            lower: {\n              type: 'number',\n              description: 'The lower bound'\n            },\n            upper: {\n              type: 'number',\n              description: 'The upper bound'\n            }\n          },\n          required: []\n        },\n        dataMean: {\n          type: 'number',\n          description: 'The mean of the data, with no priors effecting the result.'\n        },\n        dataStdDev: {\n          type: 'number',\n          description: 'The standard deviation of the data, with no priors effecting the result.'\n        },\n        distribution: {\n          type: 'object',\n          description: 'The posterior distribution of the mean of the metric in this variation.',\n          properties: {\n            kind: {\n              type: 'string',\n              description: 'The type of distribution.',\n              enum: [                'normal',\n                'beta'\n              ]\n            },\n            parameters: {\n              type: 'object',\n              description: 'The parameters of the distribution. The parameters are different for each distribution type. When <code>kind</code> is <code>normal</code>, the parameters of the distribution are \\'mu\\' and \\'sigma\\'. When <code>kind</code> is <code>beta</code>, the parameters of the distribution are \\'alpha\\' and \\'beta.\\''\n            }\n          },\n          required: []\n        },\n        eventValuesSum: {\n          type: 'number',\n          description: 'The sum of the event values for the units exposed to this treatment.'\n        },\n        mean: {\n          type: 'number',\n          description: 'The average value of the variation in this sample. It doesn’t capture the uncertainty in the measurement, so it should not be the only measurement you use to make decisions.'\n        },\n        model: {\n          type: 'string',\n          description: 'The model used to calculate the results. Parameters specific to this model will be defined under the field under the same name',\n          enum: [            'bayesianNormal',\n            'bayesianBeta'\n          ]\n        },\n        pBest: {\n          type: 'number',\n          description: 'The likelihood that this variation has the biggest effect on the primary metric. The variation with the highest probability is likely the best of the variations you\\'re testing'\n        },\n        relativeDifferences: {\n          type: 'array',\n          description: 'Estimates of the relative difference between this treatment\\'s mean and the mean of each other treatment',\n          items: {\n            type: 'object',\n            properties: {\n              fromTreatmentId: {\n                type: 'string',\n                description: 'The treatment ID of the treatment against which the relative difference is calculated'\n              },\n              lower: {\n                type: 'number',\n                description: 'A lower bound of the relative difference between the treatment and the <code>fromTreatmentId</code>'\n              },\n              upper: {\n                type: 'number',\n                description: 'An upper bound of the relative difference between the treatment and the <code>fromTreatmentId</code>'\n              },\n              variance: {\n                type: 'number',\n                description: 'Variance of the relative difference'\n              },\n              varianceReduction: {\n                type: 'number',\n                description: 'The reduction in variance resulting from CUPED'\n              }\n            },\n            required: []\n          }\n        },\n        standardDeviationRatio: {\n          type: 'number',\n          description: 'The ratio of the outcome SD to covariate SD'\n        },\n        traffic: {\n          type: 'integer',\n          description: 'The number of units exposed to this treatment.'\n        },\n        treatmentId: {\n          type: 'string',\n          description: 'The ID of the treatment'\n        },\n        treatmentName: {\n          type: 'string',\n          description: 'The name of the treatment'\n        },\n        units: {\n          type: 'integer',\n          description: 'The number of units exposed to this treatment that have event values, including those that are configured to default to 0'\n        },\n        varianceReduction: {\n          type: 'number',\n          description: 'The reduction in variance resulting from CUPED'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { metricKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.api.v2.projects.environments.experiments.metrics.retrieveResults(metricKey, body),
    ),
  );
};

export default { metadata, tool, handler };
