// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.charts.deployments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/engineering-insights/charts/deployments/frequency',
  operationId: 'getDeploymentFrequencyChart',
};

export const tool: Tool = {
  name: 'retrieve_frequency_charts_engineering_insights_v2_api_deployments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet deployment frequency chart data. Engineering insights displays deployment frequency data in the [deployment frequency metric view](https://launchdarkly.com/docs/home/observability/deployments).\n\n### Expanding the chart response\n\nLaunchDarkly supports expanding the chart response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `metrics` includes details on the metrics related to deployment frequency\n\nFor example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/insights_chart',\n  $defs: {\n    insights_chart: {\n      type: 'object',\n      properties: {\n        metadata: {\n          type: 'object',\n          description: 'Metadata for the chart',\n          properties: {\n            summary: {\n              type: 'object',\n              description: 'Metadata values'\n            },\n            xAxis: {\n              $ref: '#/$defs/insights_chart_series_metadata_axis'\n            },\n            yAxis: {\n              $ref: '#/$defs/insights_chart_series_metadata_axis'\n            },\n            metrics: {\n              type: 'object',\n              description: 'Metrics for the given chart data, included when expanded'\n            },\n            name: {\n              type: 'string',\n              description: 'Name of the chart'\n            }\n          },\n          required: [            'summary',\n            'xAxis',\n            'yAxis'\n          ]\n        },\n        series: {\n          type: 'array',\n          description: 'Series data for the chart',\n          items: {\n            type: 'object',\n            properties: {\n              data: {\n                type: 'array',\n                description: 'Data points for the series',\n                items: {\n                  type: 'object',\n                  properties: {\n                    x: {\n                      type: 'integer',\n                      description: 'X-axis value'\n                    },\n                    y: {\n                      type: 'integer',\n                      description: 'Y-axis value'\n                    },\n                    values: {\n                      type: 'object',\n                      description: 'Additional values for the data point'\n                    }\n                  },\n                  required: [                    'x',\n                    'y'\n                  ]\n                }\n              },\n              metadata: {\n                type: 'object',\n                description: 'Metadata for the series',\n                properties: {\n                  name: {\n                    type: 'string',\n                    description: 'Name of the series'\n                  },\n                  bounds: {\n                    type: 'array',\n                    description: 'Bounds for the series data',\n                    items: {\n                      type: 'object',\n                      properties: {\n                        name: {\n                          type: 'string',\n                          description: 'Name of the bound'\n                        },\n                        value: {\n                          type: 'integer',\n                          description: 'Value of the bound'\n                        }\n                      },\n                      required: [                        'name',\n                        'value'\n                      ]\n                    }\n                  },\n                  count: {\n                    type: 'integer',\n                    description: 'Aggregate count of the series values'\n                  }\n                },\n                required: [                  'name'\n                ]\n              }\n            },\n            required: [              'data',\n              'metadata'\n            ]\n          }\n        }\n      },\n      required: [        'metadata',\n        'series'\n      ]\n    },\n    insights_chart_series_metadata_axis: {\n      type: 'object',\n      properties: {\n        unit: {\n          type: 'string',\n          description: 'Unit of the axis'\n        }\n      },\n      required: [        'unit'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      applicationKey: {
        type: 'string',
        description: 'Comma separated list of application keys',
      },
      bucketMs: {
        type: 'integer',
        description:
          'Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds).',
      },
      bucketType: {
        type: 'string',
        description: 'Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`.',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      expand: {
        type: 'string',
        description: 'Options: `metrics`',
      },
      from: {
        type: 'string',
        description: 'Unix timestamp in milliseconds. Default value is 7 days ago.',
        format: 'date-time',
      },
      groupBy: {
        type: 'string',
        description: 'Options: `application`, `kind`',
      },
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      to: {
        type: 'string',
        description: 'Unix timestamp in milliseconds. Default value is now.',
        format: 'date-time',
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
    await maybeFilter(
      args,
      await client.api.v2.engineeringInsights.charts.deployments.retrieveFrequency(body),
    ),
  );
};

export default { metadata, tool, handler };
