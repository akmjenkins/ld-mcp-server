// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.approval_requests',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}',
  operationId: 'patchFlagConfigApprovalRequest',
};

export const tool: Tool = {
  name: 'update_environments_flags_projects_v2_api_approval_requests',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPerform a partial update to an approval request. Updating an approval request uses the semantic patch format. This endpoint requires a feature flag key, and can only be used for updating approval requests for flags.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instruction for updating an approval request.\n\n#### addReviewers\n\nAdds the specified members and teams to the existing list of reviewers. You must include at least one of `notifyMemberIds` and `notifyTeamKeys`.\n\n##### Parameters\n\n- `notifyMemberIds`: (Optional) List of member IDs.\n- `notifyTeamKeys`: (Optional) List of team keys.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/flag_config_approval_request_response',\n  $defs: {\n    flag_config_approval_request_response: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID of this approval request'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        _version: {\n          type: 'integer',\n          description: 'Version of the approval request'\n        },\n        allReviews: {\n          type: 'array',\n          description: 'An array of individual reviews of this approval request',\n          items: {\n            $ref: '#/$defs/review_response'\n          }\n        },\n        conflicts: {\n          type: 'array',\n          description: 'Details on any conflicting approval requests',\n          items: {\n            $ref: '#/$defs/conflict'\n          }\n        },\n        creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the approval request was created'\n        },\n        instructions: {\n          type: 'array',\n          description: 'List of instructions in semantic patch format to be applied to the feature flag',\n          items: {\n            type: 'object'\n          }\n        },\n        notifyMemberIds: {\n          type: 'array',\n          description: 'An array of member IDs. These members are notified to review the approval request.',\n          items: {\n            type: 'string'\n          }\n        },\n        reviewStatus: {\n          type: 'string',\n          description: 'Current status of the review of this approval request',\n          enum: [            'approved',\n            'declined',\n            'pending'\n          ]\n        },\n        serviceKind: {\n          type: 'string',\n          description: 'The approval service for this request. May be LaunchDarkly or an external approval service, such as ServiceNow or JIRA.'\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the approval request',\n          enum: [            'pending',\n            'completed',\n            'failed',\n            'scheduled'\n          ]\n        },\n        appliedByMemberId: {\n          type: 'string',\n          description: 'The member ID of the member who applied the approval request'\n        },\n        appliedByServiceTokenId: {\n          type: 'string',\n          description: 'The service token ID of the service token which applied the approval request'\n        },\n        appliedDate: {\n          type: 'integer',\n          description: 'Timestamp of when the approval request was applied'\n        },\n        customWorkflowMetadata: {\n          $ref: '#/$defs/custom_workflow_meta'\n        },\n        description: {\n          type: 'string',\n          description: 'A human-friendly name for the approval request'\n        },\n        executionDate: {\n          type: 'integer',\n          description: 'Timestamp for when instructions will be executed'\n        },\n        integrationMetadata: {\n          $ref: '#/$defs/integration_metadata'\n        },\n        operatingOnId: {\n          type: 'string',\n          description: 'ID of scheduled change to edit or delete'\n        },\n        requestorId: {\n          type: 'string',\n          description: 'The ID of the member who requested the approval'\n        },\n        source: {\n          $ref: '#/$defs/copied_from_env'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        '_version',\n        'allReviews',\n        'conflicts',\n        'creationDate',\n        'instructions',\n        'notifyMemberIds',\n        'reviewStatus',\n        'serviceKind',\n        'status'\n      ]\n    },\n    review_response: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The approval request ID'\n        },\n        kind: {\n          type: 'string',\n          description: 'The type of review action to take',\n          enum: [            'approve',\n            'decline',\n            'comment'\n          ]\n        },\n        comment: {\n          type: 'string',\n          description: 'A comment describing the approval response'\n        },\n        creationDate: {\n          type: 'integer',\n          description: 'Timestamp of when the request was created'\n        },\n        memberId: {\n          type: 'string',\n          description: 'ID of account member that reviewed request'\n        },\n        serviceTokenId: {\n          type: 'string',\n          description: 'ID of account service token that reviewed request'\n        }\n      },\n      required: [        '_id',\n        'kind'\n      ]\n    },\n    conflict: {\n      type: 'object',\n      properties: {\n        instruction: {\n          type: 'object',\n          description: 'Instruction in semantic patch format to be applied to the feature flag'\n        },\n        reason: {\n          type: 'string',\n          description: 'Reason why the conflict exists'\n        }\n      },\n      required: []\n    },\n    custom_workflow_meta: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'The name of the workflow stage that required this approval request'\n        },\n        stage: {\n          type: 'object',\n          description: 'Details on the stage of the workflow where this approval request is required',\n          properties: {\n            index: {\n              type: 'integer',\n              description: 'The zero-based index of the workflow stage'\n            },\n            name: {\n              type: 'string',\n              description: 'The name of the workflow stage'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    integration_metadata: {\n      type: 'object',\n      properties: {\n        externalId: {\n          type: 'string'\n        },\n        externalStatus: {\n          type: 'object',\n          properties: {\n            display: {\n              type: 'string'\n            },\n            value: {\n              type: 'string'\n            }\n          },\n          required: [            'display',\n            'value'\n          ]\n        },\n        externalUrl: {\n          type: 'string'\n        },\n        lastChecked: {\n          type: 'integer'\n        }\n      },\n      required: [        'externalId',\n        'externalStatus',\n        'externalUrl',\n        'lastChecked'\n      ]\n    },\n    copied_from_env: {\n      type: 'object',\n      properties: {\n        key: {\n          type: 'string',\n          description: 'Key of feature flag copied'\n        },\n        version: {\n          type: 'integer',\n          description: 'Version of feature flag copied'\n        }\n      },\n      required: [        'key'\n      ]\n    }\n  }\n}\n```",
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
        description: 'The approval ID',
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
    await maybeFilter(
      args,
      await client.api.v2.projects.flags.environments.approvalRequests.update(id, body),
    ),
  );
};

export default { metadata, tool, handler };
