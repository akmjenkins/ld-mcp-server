// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.approval_requests',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'approval_requests_environments_flags_projects_v2_api_approval_requests',
  description: 'Create an approval request for a feature flag.',
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
      comment: {
        type: 'string',
        description: 'Optional comment describing the approval request',
      },
      executionDate: {
        type: 'integer',
        description: 'Timestamp for when instructions will be executed',
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
      operatingOnId: {
        type: 'string',
        description:
          'The ID of a scheduled change. Include this if your <code>instructions</code> include editing or deleting a scheduled change.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.flags.environments.approvalRequests.approvalRequests(environmentKey, body);
};

export default { metadata, tool, handler };
