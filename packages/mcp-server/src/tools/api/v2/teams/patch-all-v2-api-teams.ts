// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.teams',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/teams',
  operationId: 'patchTeams',
};

export const tool: Tool = {
  name: 'patch_all_v2_api_teams',
  description:
    'Perform a partial update to multiple teams. Updating teams uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating teams.\n\n<details>\n<summary>Click to expand instructions for <strong>updating teams</strong></summary>\n\n#### addMembersToTeams\n\nAdd the members to teams.\n\n##### Parameters\n\n- `memberIDs`: List of member IDs to add.\n- `teamKeys`: List of teams to update.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "addMembersToTeams",\n    "memberIDs": [\n      "1234a56b7c89d012345e678f"\n    ],\n    "teamKeys": [\n      "example-team-1",\n      "example-team-2"\n    ]\n  }]\n}\n```\n\n#### addAllMembersToTeams\n\nAdd all members to the team. Members that match any of the filters are **excluded** from the update.\n\n##### Parameters\n\n- `teamKeys`: List of teams to update.\n- `filterLastSeen`: (Optional) A JSON object with one of the following formats:\n  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.\n  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.\n  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.\n- `filterQuery`: (Optional) A string that matches against the members\' emails and names. It is not case sensitive.\n- `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`.\n- `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive.\n- `ignoredMemberIDs`: (Optional) A list of member IDs.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "addAllMembersToTeams",\n    "teamKeys": [\n      "example-team-1",\n      "example-team-2"\n    ],\n    "filterLastSeen": { "never": true }\n  }]\n}\n```\n\n</details>\n',
  inputSchema: {
    type: 'object',
    properties: {
      instructions: {
        type: 'array',
        description:
          'The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require additional parameters as part of this object.',
        items: {
          type: 'object',
        },
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the update',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.teams.patchAll(body));
};

export default { metadata, tool, handler };
