// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.followers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_environments_flags_projects_v2_api_followers',
  description: 'Remove a member as a follower to a flag in a project and environment',
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
      memberId: {
        type: 'string',
        description:
          'The memberId of the member to remove as a follower of the flag. Reader roles can only remove themselves.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { memberId, ...body } = args as any;
  return client.api.v2.projects.flags.environments.followers.delete(memberId, body);
};

export default { metadata, tool, handler };
