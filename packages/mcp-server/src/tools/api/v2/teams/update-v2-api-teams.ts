// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.teams',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_v2_api_teams',
  description:
    'Perform a partial update to a team. Updating a team uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating teams. Several of the instructions require one or more member IDs as parameters. The member ID is returned as part of the [List account members](https://launchdarkly.com/docs/ld-docs/api/account-members/get-members) response. It is the `_id` field of each element in the `items` array.\n\n\n<details>\n<summary>Click to expand instructions for <strong>updating teams</strong></summary>\n\n#### addCustomRoles\n\nAdds custom roles to the team. Team members will have these custom roles granted to them.\n\n##### Parameters\n\n- `values`: List of custom role keys.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "addCustomRoles",\n    "values": [ "example-custom-role" ]\n  }]\n}\n```\n\n#### addMembers\n\nAdds members to the team.\n\n##### Parameters\n\n- `values`: List of member IDs to add.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "addMembers",\n    "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]\n  }]\n}\n```\n\n#### addPermissionGrants\n\nAdds permission grants to members for the team. For example, a permission grant could allow a member to act as a team maintainer. A permission grant may have either an `actionSet` or a list of `actions` but not both at the same time. The members do not have to be team members to have a permission grant for the team.\n\n##### Parameters\n\n- `actionSet`: Name of the action set.\n- `actions`: List of actions.\n- `memberIDs`: List of member IDs.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "addPermissionGrants",\n    "actions": [ "updateTeamName", "updateTeamDescription" ],\n    "memberIDs": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]\n  }]\n}\n```\n\n#### addRoleAttribute\n\nAdds a role attribute to a team. Team members will have these role attribute values scoped for all custom roles granted to them.\n\n##### Parameters\n\n- `key`: The role attribute key to add.\n- `values`: List of role attribute values for that key.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [\n    {\n      "kind": "addRoleAttribute",\n      "key": "testAttribute",\n      "values": ["someNewValue", "someOtherNewValue"]\n    }\n  ]\n}\n```\n\n#### removeCustomRoles\n\nRemoves custom roles from the team. The app will no longer grant these custom roles to the team members.\n\n##### Parameters\n\n- `values`: List of custom role keys.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "removeCustomRoles",\n    "values": [ "example-custom-role" ]\n  }]\n}\n```\n\n#### removeMembers\n\nRemoves members from the team.\n\n##### Parameters\n\n- `values`: List of member IDs to remove.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "removeMembers",\n    "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]\n  }]\n}\n```\n\n#### removePermissionGrants\n\nRemoves permission grants from members for the team. A permission grant may have either an `actionSet` or a list of `actions` but not both at the same time. The `actionSet` and `actions` must match an existing permission grant.\n\n##### Parameters\n\n- `actionSet`: Name of the action set.\n- `actions`: List of actions.\n- `memberIDs`: List of member IDs.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "removePermissionGrants",\n    "actions": [ "updateTeamName", "updateTeamDescription" ],\n    "memberIDs": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]\n  }]\n}\n```\n\n#### removeRoleAttribute\n\nRemoves a role attribute from the team.\n\n##### Parameters\n\n- `key`: The role attribute key to remove.\n\nHere\'s an example:\n```json\n{\n  "instructions": [\n    {\n      "kind": "removeRoleAttribute",\n      "key": "testAttribute"\n    }\n  ]\n}\n```\n\n#### replaceMembers\n\nReplaces the existing members of the team with the new members.\n\n##### Parameters\n\n- `values`: List of member IDs of the new members.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "replaceMembers",\n    "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]\n  }]\n}\n```\n\n#### replaceRoleAttributes\n\nReplaces the existing role attributes for the team with new role attributes.\n\n##### Parameters\n\n- `values`: A map of role attribute keys to lists of role attribute values\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "replaceRoleAttributes",\n    "values": {\n      "testAttribute": [ "someNewValue", "someOtherNewValue" ],\n      "projectRoleAttribute": [ "project1", "project2"]\n    }\n  }]\n}\n```\n\n#### updateDescription\n\nUpdates the description of the team.\n\n##### Parameters\n\n- `value`: The new description.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "updateDescription",\n    "value": "Updated team description"\n  }]\n}\n```\n\n#### updateName\n\nUpdates the name of the team.\n\n##### Parameters\n\n- `value`: The new name.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{\n    "kind": "updateName",\n    "value": "Updated team name"\n  }]\n}\n```\n\n#### updateRoleAttribute\n\nUpdates a role attribute on the team. Any existing values for the given key will be replaced with the new values. Team members will have these role attribute values scoped for all custom roles granted to them.\n\n##### Parameters\n\n- `key`: The role attribute key to update.\n- `values`: List of role attribute values for that key.\n\nHere\'s an example:\n```json\n{\n  "instructions": [\n    {\n      "kind": "updateRoleAttribute",\n      "key": "testAttribute",\n      "values": ["someNewValue", "someOtherNewValue"]\n    }\n  ]\n}\n```\n\n</details>\n\n### Expanding the teams response\nLaunchDarkly supports four fields for expanding the "Update team" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n* `members` includes the total count of members that belong to the team.\n* `roles` includes a paginated list of the custom roles that you have assigned to the team.\n* `projects` includes a paginated list of the projects that the team has any write access to.\n* `maintainers` includes a paginated list of the maintainers that you have assigned to the team.\n\nFor example, `expand=members,roles` includes the `members` and `roles` fields in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      teamKey: {
        type: 'string',
        description: 'The team key',
      },
      instructions: {
        type: 'array',
        description:
          'The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require additional parameters as part of this object.',
        items: {
          type: 'object',
        },
      },
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above.',
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the update',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { teamKey, ...body } = args as any;
  return client.api.v2.teams.update(teamKey, body);
};

export default { metadata, tool, handler };
