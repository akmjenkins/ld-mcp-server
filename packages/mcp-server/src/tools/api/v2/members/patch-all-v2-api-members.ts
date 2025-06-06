// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.members',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/v2/members',
  operationId: 'patchMembers',
};

export const tool: Tool = {
  name: 'patch_all_v2_api_members',
  description:
    '> ### Full use of this API resource is an Enterprise feature\n>\n> The ability to perform a partial update to multiple members is available to customers on an Enterprise plan. If you are on another plan, you can update members individually. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).\n\nPerform a partial update to multiple members. Updating members uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating members.\n\n<details>\n<summary>Click to expand instructions for <strong>updating members</strong></summary>\n\n#### replaceMembersRoles\n\nReplaces the roles of the specified members. This also removes all custom roles assigned to the specified members.\n\n##### Parameters\n\n- `value`: The new role. Must be a valid built-in role. To learn more about built-in roles, read [LaunchDarkly\'s built-in roles](https://launchdarkly.com/docs/home/account/built-in-roles).\n- `memberIDs`: List of member IDs.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "replaceMemberRoles",\n    "value": "reader",\n    "memberIDs": [\n      "1234a56b7c89d012345e678f",\n      "507f1f77bcf86cd799439011"\n    ]\n  }]\n}\n```\n\n#### replaceAllMembersRoles\n\nReplaces the roles of all members. This also removes all custom roles assigned to the specified members.\n\nMembers that match any of the filters are **excluded** from the update.\n\n##### Parameters\n\n- `value`: The new role. Must be a valid built-in role. To learn more about built-in roles, read [LaunchDarkly\'s built-in roles](https://launchdarkly.com/docs/home/account/built-in-roles).\n- `filterLastSeen`: (Optional) A JSON object with one of the following formats:\n  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.\n  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.\n  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.\n- `filterQuery`: (Optional) A string that matches against the members\' emails and names. It is not case sensitive.\n- `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`.\n- `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive.\n- `ignoredMemberIDs`: (Optional) A list of member IDs.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "replaceAllMembersRoles",\n    "value": "reader",\n    "filterLastSeen": { "never": true }\n  }]\n}\n```\n\n#### replaceMembersCustomRoles\n\nReplaces the custom roles of the specified members.\n\n##### Parameters\n\n- `values`: List of new custom roles. Must be a valid custom role key or ID.\n- `memberIDs`: List of member IDs.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "replaceMembersCustomRoles",\n    "values": [ "example-custom-role" ],\n    "memberIDs": [\n      "1234a56b7c89d012345e678f",\n      "507f1f77bcf86cd799439011"\n    ]\n  }]\n}\n```\n\n#### replaceAllMembersCustomRoles\n\nReplaces the custom roles of all members. Members that match any of the filters are **excluded** from the update.\n\n##### Parameters\n\n- `values`: List of new roles. Must be a valid custom role key or ID.\n- `filterLastSeen`: (Optional) A JSON object with one of the following formats:\n  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.\n  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.\n  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.\n- `filterQuery`: (Optional) A string that matches against the members\' emails and names. It is not case sensitive.\n- `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`.\n- `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive.\n- `ignoredMemberIDs`: (Optional) A list of member IDs.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "replaceAllMembersCustomRoles",\n    "values": [ "example-custom-role" ],\n    "filterLastSeen": { "never": true }\n  }]\n}\n```\n\n#### replaceMembersRoleAttributes\n\nReplaces the role attributes of the specified members.\n\n##### Parameters\n\n- `value`: Map of role attribute keys to lists of values.\n- `memberIDs`: List of member IDs.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "replaceMembersRoleAttributes",\n    "value": {\n      "myRoleProjectKey": ["mobile", "web"],\n      "myRoleEnvironmentKey": ["production"]\n    },\n    "memberIDs": [\n      "1234a56b7c89d012345e678f",\n      "507f1f77bcf86cd799439011"\n    ]\n  }]\n}\n```\n\n</details>\n',
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
  return asTextContentResult(await client.api.v2.members.patchAll(body));
};

export default { metadata, tool, handler };
