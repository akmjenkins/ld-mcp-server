// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey',
  operationId: 'resetEnvironmentSDKKey',
};

export const tool: Tool = {
  name: 'api_key_projects_v2_api_environments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReset an environment's SDK key with an optional expiry time for the old key.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/environment',\n  $defs: {\n    environment: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID for the environment. Use this as the client-side ID for authorization in some client-side SDKs, and to associate LaunchDarkly environments with CDN integrations in edge SDKs.'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        apiKey: {\n          type: 'string',\n          description: 'The SDK key for the environment. Use this for authorization in server-side SDKs.'\n        },\n        color: {\n          type: 'string',\n          description: 'The color used to indicate this environment in the UI'\n        },\n        confirmChanges: {\n          type: 'boolean',\n          description: 'Whether members who modify flags and segments through the LaunchDarkly user interface are required to confirm those changes'\n        },\n        critical: {\n          type: 'boolean',\n          description: 'Whether the environment is critical'\n        },\n        defaultTrackEvents: {\n          type: 'boolean',\n          description: 'Enables tracking detailed information for new flags by default'\n        },\n        defaultTtl: {\n          type: 'integer',\n          description: 'The default time (in minutes) that the PHP SDK can cache feature flag rules locally'\n        },\n        key: {\n          type: 'string',\n          description: 'A project-unique key for the new environment'\n        },\n        mobileKey: {\n          type: 'string',\n          description: 'The mobile key for the environment. Use this for authorization in mobile SDKs.'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-friendly name for the new environment'\n        },\n        requireComments: {\n          type: 'boolean',\n          description: 'Whether members who modify flags and segments through the LaunchDarkly user interface are required to add a comment'\n        },\n        secureMode: {\n          type: 'boolean',\n          description: 'Ensures that one end user of the client-side SDK cannot inspect the variations for another end user'\n        },\n        tags: {\n          type: 'array',\n          description: 'A list of tags for this environment',\n          items: {\n            type: 'string'\n          }\n        },\n        approvalSettings: {\n          $ref: '#/$defs/approval_settings'\n        },\n        resourceApprovalSettings: {\n          type: 'object',\n          description: 'Details on the approval settings for this environment for each resource kind'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'apiKey',\n        'color',\n        'confirmChanges',\n        'critical',\n        'defaultTrackEvents',\n        'defaultTtl',\n        'key',\n        'mobileKey',\n        'name',\n        'requireComments',\n        'secureMode',\n        'tags'\n      ]\n    },\n    approval_settings: {\n      type: 'object',\n      properties: {\n        bypassApprovalsForPendingChanges: {\n          type: 'boolean',\n          description: 'Whether to skip approvals for pending changes'\n        },\n        canApplyDeclinedChanges: {\n          type: 'boolean',\n          description: 'Allow applying the change as long as at least one person has approved'\n        },\n        canReviewOwnRequest: {\n          type: 'boolean',\n          description: 'Allow someone who makes an approval request to apply their own change'\n        },\n        minNumApprovals: {\n          type: 'integer',\n          description: 'Sets the amount of approvals required before a member can apply a change. The minimum is one and the maximum is five.'\n        },\n        required: {\n          type: 'boolean',\n          description: 'If approvals are required for this environment'\n        },\n        requiredApprovalTags: {\n          type: 'array',\n          description: 'Require approval only on flags with the provided tags. Otherwise all flags will require approval.',\n          items: {\n            type: 'string'\n          }\n        },\n        serviceConfig: {\n          type: 'object'\n        },\n        serviceKind: {\n          type: 'string',\n          description: 'Which service to use for managing approvals'\n        },\n        autoApplyApprovedChanges: {\n          type: 'boolean',\n          description: 'Automatically apply changes that have been approved by all reviewers. This field is only applicable for approval services other than LaunchDarkly.'\n        },\n        resourceKind: {\n          type: 'string',\n          description: 'The kind of resource for which the approval settings apply, for example, flag or segment'\n        },\n        serviceKindConfigurationId: {\n          type: 'string',\n          description: 'Optional field for integration configuration ID of a custom approval integration. This is an Enterprise-only feature.'\n        }\n      },\n      required: [        'bypassApprovalsForPendingChanges',\n        'canApplyDeclinedChanges',\n        'canReviewOwnRequest',\n        'minNumApprovals',\n        'required',\n        'requiredApprovalTags',\n        'serviceConfig',\n        'serviceKind'\n      ]\n    }\n  }\n}\n```",
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
      expiry: {
        type: 'integer',
        description:
          'The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately. During the period between this call and the time when the old SDK key expires, both the old SDK key and the new SDK key will work.',
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
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.environments.apiKey(environmentKey, body)),
  );
};

export default { metadata, tool, handler };
