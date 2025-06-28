// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.followers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId}',
  operationId: 'putFlagFollower',
};

export const tool: Tool = {
  name: 'update_environments_flags_projects_v2_api_followers',
  description: 'Add a member as a follower to a flag in a project and environment',
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
          'The memberId of the member to add as a follower of the flag. Reader roles can only add themselves.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { memberId, ...body } = args as any;
  const response = await client.api.v2.projects.flags.environments.followers
    .update(memberId, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
