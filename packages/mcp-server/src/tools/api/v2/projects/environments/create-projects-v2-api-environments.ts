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
  httpPath: '/api/v2/projects/{projectKey}/environments',
  operationId: 'postEnvironment',
};

export const tool: Tool = {
  name: 'create_projects_v2_api_environments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n> ### Approval settings\n>\n> The `approvalSettings` key is only returned when the [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled.\n>\n> You cannot update approval settings when creating new environments. Update approval settings with the [https://launchdarkly.com/docs/api/environments/patch-environment).\n\nCreate a new environment in a specified project with a given name, key, swatch color, and default TTL.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/environment',\n  $defs: {\n    environment: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The ID for the environment. Use this as the client-side ID for authorization in some client-side SDKs, and to associate LaunchDarkly environments with CDN integrations in edge SDKs.'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        apiKey: {\n          type: 'string',\n          description: 'The SDK key for the environment. Use this for authorization in server-side SDKs.'\n        },\n        color: {\n          type: 'string',\n          description: 'The color used to indicate this environment in the UI'\n        },\n        confirmChanges: {\n          type: 'boolean',\n          description: 'Whether members who modify flags and segments through the LaunchDarkly user interface are required to confirm those changes'\n        },\n        critical: {\n          type: 'boolean',\n          description: 'Whether the environment is critical'\n        },\n        defaultTrackEvents: {\n          type: 'boolean',\n          description: 'Enables tracking detailed information for new flags by default'\n        },\n        defaultTtl: {\n          type: 'integer',\n          description: 'The default time (in minutes) that the PHP SDK can cache feature flag rules locally'\n        },\n        key: {\n          type: 'string',\n          description: 'A project-unique key for the new environment'\n        },\n        mobileKey: {\n          type: 'string',\n          description: 'The mobile key for the environment. Use this for authorization in mobile SDKs.'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-friendly name for the new environment'\n        },\n        requireComments: {\n          type: 'boolean',\n          description: 'Whether members who modify flags and segments through the LaunchDarkly user interface are required to add a comment'\n        },\n        secureMode: {\n          type: 'boolean',\n          description: 'Ensures that one end user of the client-side SDK cannot inspect the variations for another end user'\n        },\n        tags: {\n          type: 'array',\n          description: 'A list of tags for this environment',\n          items: {\n            type: 'string'\n          }\n        },\n        approvalSettings: {\n          $ref: '#/$defs/approval_settings'\n        },\n        resourceApprovalSettings: {\n          type: 'object',\n          description: 'Details on the approval settings for this environment for each resource kind'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'apiKey',\n        'color',\n        'confirmChanges',\n        'critical',\n        'defaultTrackEvents',\n        'defaultTtl',\n        'key',\n        'mobileKey',\n        'name',\n        'requireComments',\n        'secureMode',\n        'tags'\n      ]\n    },\n    approval_settings: {\n      type: 'object',\n      properties: {\n        bypassApprovalsForPendingChanges: {\n          type: 'boolean',\n          description: 'Whether to skip approvals for pending changes'\n        },\n        canApplyDeclinedChanges: {\n          type: 'boolean',\n          description: 'Allow applying the change as long as at least one person has approved'\n        },\n        canReviewOwnRequest: {\n          type: 'boolean',\n          description: 'Allow someone who makes an approval request to apply their own change'\n        },\n        minNumApprovals: {\n          type: 'integer',\n          description: 'Sets the amount of approvals required before a member can apply a change. The minimum is one and the maximum is five.'\n        },\n        required: {\n          type: 'boolean',\n          description: 'If approvals are required for this environment'\n        },\n        requiredApprovalTags: {\n          type: 'array',\n          description: 'Require approval only on flags with the provided tags. Otherwise all flags will require approval.',\n          items: {\n            type: 'string'\n          }\n        },\n        serviceConfig: {\n          type: 'object'\n        },\n        serviceKind: {\n          type: 'string',\n          description: 'Which service to use for managing approvals'\n        },\n        autoApplyApprovedChanges: {\n          type: 'boolean',\n          description: 'Automatically apply changes that have been approved by all reviewers. This field is only applicable for approval services other than LaunchDarkly.'\n        },\n        resourceKind: {\n          type: 'string',\n          description: 'The kind of resource for which the approval settings apply, for example, flag or segment'\n        },\n        serviceKindConfigurationId: {\n          type: 'string',\n          description: 'Optional field for integration configuration ID of a custom approval integration. This is an Enterprise-only feature.'\n        }\n      },\n      required: [        'bypassApprovalsForPendingChanges',\n        'canApplyDeclinedChanges',\n        'canReviewOwnRequest',\n        'minNumApprovals',\n        'required',\n        'requiredApprovalTags',\n        'serviceConfig',\n        'serviceKind'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      color: {
        type: 'string',
        description: 'A color to indicate this environment in the UI',
      },
      key: {
        type: 'string',
        description: 'A project-unique key for the new environment',
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the new environment',
      },
      confirmChanges: {
        type: 'boolean',
        description: 'Requires confirmation for all flag and segment changes via the UI in this environment',
      },
      critical: {
        type: 'boolean',
        description: 'Whether the environment is critical',
      },
      defaultTrackEvents: {
        type: 'boolean',
        description: 'Enables tracking detailed information for new flags by default',
      },
      defaultTtl: {
        type: 'integer',
        description: 'The default time (in minutes) that the PHP SDK can cache feature flag rules locally',
      },
      requireComments: {
        type: 'boolean',
        description: 'Requires comments for all flag and segment changes via the UI in this environment',
      },
      secureMode: {
        type: 'boolean',
        description:
          'Ensures that one end user of the client-side SDK cannot inspect the variations for another end user',
      },
      source: {
        type: 'object',
        description:
          'Indicates that the new environment created will be cloned from the provided source environment',
        properties: {
          key: {
            type: 'string',
            description: 'The key of the source environment to clone from',
          },
          version: {
            type: 'integer',
            description:
              '(Optional) The version number of the source environment to clone from. Used for optimistic locking',
          },
        },
        required: [],
      },
      tags: {
        type: 'array',
        description: 'Tags to apply to the new environment',
        items: {
          type: 'string',
        },
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
  const { projectKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.environments.create(projectKey, body)),
  );
};

export default { metadata, tool, handler };
