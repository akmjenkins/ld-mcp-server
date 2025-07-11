// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights.deployments',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/engineering-insights/deployments/{deploymentID}',
  operationId: 'updateDeployment',
};

export const tool: Tool = {
  name: 'update_engineering_insights_v2_api_deployments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a deployment by ID. Updating a deployment uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>The deployment ID is returned as part of the [List deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments) response. It is the `id` field of each element in the `items` array.",
  inputSchema: {
    type: 'object',
    properties: {
      deploymentID: {
        type: 'string',
        description: 'The deployment ID',
      },
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/patch_operation',
        },
      },
    },
    $defs: {
      patch_operation: {
        type: 'object',
        properties: {
          op: {
            type: 'string',
            description: 'The type of operation to perform',
          },
          path: {
            type: 'string',
            description: 'A JSON Pointer string specifying the part of the document to operate on',
          },
          value: {
            type: 'object',
            description: 'A JSON value used in "add", "replace", and "test" operations',
          },
        },
        required: ['op', 'path'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { deploymentID, ...body } = args as any;
  return asTextContentResult(await client.api.v2.engineeringInsights.deployments.update(deploymentID, body));
};

export default { metadata, tool, handler };
