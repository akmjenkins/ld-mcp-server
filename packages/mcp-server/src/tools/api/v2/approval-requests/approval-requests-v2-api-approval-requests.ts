// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.approval_requests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'approval_requests_v2_api_approval_requests',
  description:
    'Create an approval request.\n\nThis endpoint requires a list of `instructions`, in semantic patch format, that will be applied when the approval request is approved and applied.\n\nIf you are creating an approval request for a flag, you can use the following `instructions`:\n\n- `addVariation`\n- `removeVariation`\n- `updateVariation`\n- `updateDefaultVariation`\n\nFor details on using these instructions, read [Update feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag).\n\nTo create an approval for a flag specific to an environment, use [Create approval request for a flag](https://launchdarkly.com/docs/api/approvals/post-approval-request-for-flag).\n\nIf you are creating an approval request for a segment, you can use the following read [Patch segment](https://launchdarkly.com/docs/api/segments/patch-segment) for details on the available `instructions`.\n',
  inputSchema: {
    type: 'object',
    properties: {
      description: {
        type: 'string',
        description: "A brief description of the changes you're requesting",
      },
      instructions: {
        type: 'array',
        description:
          'List of instructions in semantic patch format to be applied to the feature flag. Review the [Update feature flag](https://launchdarkly.com/docs/ld-docs/api/feature-flags/patch-feature-flag) documentation for details on available instructions.',
        items: {
          type: 'object',
        },
      },
      resourceId: {
        type: 'string',
        description: 'String representation of the resource specifier',
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the approval request',
      },
      integrationConfig: {
        type: 'object',
        description:
          'Additional approval request fields for third-party integration approval systems. If you are using a third-party integration to manage approval requests, these additional fields will be described in the <code>manifest.json</code> for that integration, at https://github.com/launchdarkly/integration-framework.',
      },
      notifyMemberIds: {
        type: 'array',
        description: 'An array of member IDs. These members are notified to review the approval request.',
        items: {
          type: 'string',
        },
      },
      notifyTeamKeys: {
        type: 'array',
        description:
          'An array of team keys. The members of these teams are notified to review the approval request.',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.approvalRequests.approvalRequests(body);
};

export default { metadata, tool, handler };
