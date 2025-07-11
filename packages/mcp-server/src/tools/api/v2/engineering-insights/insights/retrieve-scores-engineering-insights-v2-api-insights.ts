// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.insights',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/insights/scores',
  operationId: 'getInsightsScores',
};

export const tool: Tool = {
  name: 'retrieve_scores_engineering_insights_v2_api_insights',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturn insights scores, based on the given parameters. This data is also used in engineering insights metrics views.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    lastPeriod: {\n      $ref: '#/$defs/insight_period'\n    },\n    period: {\n      $ref: '#/$defs/insight_period'\n    },\n    scores: {\n      $ref: '#/$defs/insight_group_scores'\n    },\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    }\n  },\n  required: [    'lastPeriod',\n    'period',\n    'scores'\n  ],\n  $defs: {\n    insight_period: {\n      type: 'object',\n      properties: {\n        endTime: {\n          type: 'integer',\n          description: 'The end time of the period'\n        },\n        startTime: {\n          type: 'integer',\n          description: 'The start time of the period'\n        }\n      },\n      required: [        'endTime',\n        'startTime'\n      ]\n    },\n    insight_group_scores: {\n      type: 'object',\n      properties: {\n        deploymentFailureRate: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        deploymentFrequency: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        efficiency: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        experimentationCoverage: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        flagHealth: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        impactSize: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        leadTime: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        overall: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        risk: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        velocity: {\n          $ref: '#/$defs/insights_metric_score'\n        },\n        creationRatio: {\n          $ref: '#/$defs/insights_metric_score'\n        }\n      },\n      required: [        'deploymentFailureRate',\n        'deploymentFrequency',\n        'efficiency',\n        'experimentationCoverage',\n        'flagHealth',\n        'impactSize',\n        'leadTime',\n        'overall',\n        'risk',\n        'velocity'\n      ]\n    },\n    insights_metric_score: {\n      type: 'object',\n      properties: {\n        indicator: {\n          type: 'string',\n          description: 'The indicator for the score',\n          enum: [            'excellent',\n            'good',\n            'fair',\n            'needsAttention',\n            'notCalculated',\n            'unknown'\n          ]\n        },\n        indicatorRange: {\n          type: 'object',\n          description: 'The indicator range for the score',\n          properties: {\n            max: {\n              type: 'integer',\n              description: 'The maximum value for the indicator range'\n            },\n            min: {\n              type: 'integer',\n              description: 'The minimum value for the indicator range'\n            }\n          },\n          required: [            'max',\n            'min'\n          ]\n        },\n        score: {\n          type: 'integer',\n          description: 'The score for the metric'\n        },\n        aggregateOf: {\n          type: 'array',\n          description: 'The keys of the metrics that were aggregated to calculate this score',\n          items: {\n            type: 'string'\n          }\n        },\n        diffVsLastPeriod: {\n          type: 'integer'\n        },\n        lastPeriod: {\n          $ref: '#/$defs/insights_metric_score'\n        }\n      },\n      required: [        'indicator',\n        'indicatorRange',\n        'score'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      applicationKey: {
        type: 'string',
        description: 'Comma separated list of application keys',
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
  const body = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.engineeringInsights.insights.retrieveScores(body)),
  );
};

export default { metadata, tool, handler };
