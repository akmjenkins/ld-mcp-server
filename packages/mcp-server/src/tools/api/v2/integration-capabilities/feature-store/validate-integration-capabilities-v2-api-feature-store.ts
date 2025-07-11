// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_capabilities.feature_store',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate',
  operationId: 'validateIntegrationDeliveryConfiguration',
};

export const tool: Tool = {
  name: 'validate_integration_capabilities_v2_api_feature_store',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nValidate the saved delivery configuration, using the `validationRequest` in the integration's `manifest.json` file.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    error: {\n      type: 'string'\n    },\n    responseBody: {\n      type: 'string',\n      description: 'JSON response to the validation request'\n    },\n    statusCode: {\n      type: 'integer',\n      description: 'The status code returned by the validation'\n    },\n    timestamp: {\n      type: 'integer',\n      description: 'Timestamp of when the validation was performed'\n    }\n  },\n  required: []\n}\n```",
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
      integrationKey: {
        type: 'string',
        description: 'The integration key',
      },
      id: {
        type: 'string',
        description: 'The configuration ID',
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
  const { id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.integrationCapabilities.featureStore.validate(id, body)),
  );
};

export default { metadata, tool, handler };
