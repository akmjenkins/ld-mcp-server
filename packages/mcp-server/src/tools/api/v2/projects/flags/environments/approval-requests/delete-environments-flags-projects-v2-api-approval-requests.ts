// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.approval_requests',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}',
  operationId: 'deleteApprovalRequestForFlag',
};

export const tool: Tool = {
  name: 'delete_environments_flags_projects_v2_api_approval_requests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete an approval request for a feature flag.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      id: {
        type: 'string',
        description: 'The feature flag approval request ID',
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
  const response = await client.api.v2.projects.flags.environments.approvalRequests
    .delete(id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
