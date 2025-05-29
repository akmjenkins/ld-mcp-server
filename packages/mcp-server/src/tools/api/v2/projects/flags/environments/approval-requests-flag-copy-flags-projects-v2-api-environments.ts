// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy',
  operationId: 'postFlagCopyConfigApprovalRequest',
};

export const tool: Tool = {
  name: 'approval_requests_flag_copy_flags_projects_v2_api_environments',
  description: "Create an approval request to copy a feature flag's configuration across environments.",
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
        description: 'The environment key for the target environment',
      },
      description: {
        type: 'string',
        description: 'A brief description of your changes',
      },
      source: {
        type: 'object',
        description: 'The flag to copy',
        properties: {
          key: {
            type: 'string',
            description: 'The environment key for the source environment',
          },
          version: {
            type: 'integer',
            description: 'The version of the source flag from which to copy',
          },
        },
        required: ['key'],
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the approval request',
      },
      excludedActions: {
        type: 'array',
        description:
          'Optional list of the flag changes NOT to copy from the source environment to the target environment. You may include either <code>includedActions</code> or <code>excludedActions</code>, but not both. If neither are included, then all flag changes will be copied.',
        items: {
          type: 'string',
          enum: [
            'updateOn',
            'updateFallthrough',
            'updateOffVariation',
            'updateRules',
            'updateTargets',
            'updatePrerequisites',
          ],
        },
      },
      includedActions: {
        type: 'array',
        description:
          'Optional list of the flag changes to copy from the source environment to the target environment. You may include either <code>includedActions</code> or <code>excludedActions</code>, but not both. If neither are included, then all flag changes will be copied.',
        items: {
          type: 'string',
          enum: [
            'updateOn',
            'updateFallthrough',
            'updateOffVariation',
            'updateRules',
            'updateTargets',
            'updatePrerequisites',
          ],
        },
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
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.flags.environments.approvalRequestsFlagCopy(environmentKey, body);
};

export default { metadata, tool, handler };
