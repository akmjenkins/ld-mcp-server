// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TeamsAPI from './teams';
import * as RelayAutoConfigsAPI from './account/relay-auto-configs';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Teams extends APIResource {
  /**
   * Create a team. To learn more, read
   * [Creating a team](https://launchdarkly.com/docs/home/account/create-teams).
   *
   * ### Expanding the teams response
   *
   * LaunchDarkly supports four fields for expanding the "Create team" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `members` includes the total count of members that belong to the team.
   * - `roles` includes a paginated list of the custom roles that you have assigned
   *   to the team.
   * - `projects` includes a paginated list of the projects that the team has any
   *   write access to.
   * - `maintainers` includes a paginated list of the maintainers that you have
   *   assigned to the team.
   *
   * For example, `expand=members,roles` includes the `members` and `roles` fields in
   * the response.
   *
   * @example
   * ```ts
   * const team = await client.api.v2.teams.create({
   *   key: 'team-key-123abc',
   *   name: 'Example team',
   *   customRoleKeys: ['example-role1', 'example-role2'],
   *   description: 'An example team',
   *   memberIDs: ['12ab3c45de678910fgh12345'],
   * });
   * ```
   */
  create(params: TeamCreateParams, options?: RequestOptions): APIPromise<Team> {
    const { expand, ...body } = params;
    return this._client.post('/api/v2/teams', { query: { expand }, body, ...options });
  }

  /**
   * Fetch a team by key.
   *
   * ### Expanding the teams response
   *
   * LaunchDarkly supports several fields for expanding the "Get team" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `members` includes the total count of members that belong to the team.
   * - `roles` includes a paginated list of the custom roles that you have assigned
   *   to the team.
   * - `roleAttributes` includes a list of the role attributes that you have assigned
   *   to the team.
   * - `projects` includes a paginated list of the projects that the team has any
   *   write access to.
   * - `maintainers` includes a paginated list of the maintainers that you have
   *   assigned to the team.
   *
   * For example, `expand=members,roles` includes the `members` and `roles` fields in
   * the response.
   *
   * @example
   * ```ts
   * const team = await client.api.v2.teams.retrieve('teamKey');
   * ```
   */
  retrieve(
    teamKey: string,
    query: TeamRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Team> {
    return this._client.get(path`/api/v2/teams/${teamKey}`, { query, ...options });
  }

  /**
   * Perform a partial update to a team. Updating a team uses the semantic patch
   * format.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * teams. Several of the instructions require one or more member IDs as parameters.
   * The member ID is returned as part of the
   * [List account members](https://launchdarkly.com/docs/ld-docs/api/account-members/get-members)
   * response. It is the `_id` field of each element in the `items` array.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating teams</strong></summary>
   *
   * #### addCustomRoles
   *
   * Adds custom roles to the team. Team members will have these custom roles granted
   * to them.
   *
   * ##### Parameters
   *
   * - `values`: List of custom role keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addCustomRoles",
   *       "values": ["example-custom-role"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### addMembers
   *
   * Adds members to the team.
   *
   * ##### Parameters
   *
   * - `values`: List of member IDs to add.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addMembers",
   *       "values": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### addPermissionGrants
   *
   * Adds permission grants to members for the team. For example, a permission grant
   * could allow a member to act as a team maintainer. A permission grant may have
   * either an `actionSet` or a list of `actions` but not both at the same time. The
   * members do not have to be team members to have a permission grant for the team.
   *
   * ##### Parameters
   *
   * - `actionSet`: Name of the action set.
   * - `actions`: List of actions.
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addPermissionGrants",
   *       "actions": ["updateTeamName", "updateTeamDescription"],
   *       "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### addRoleAttribute
   *
   * Adds a role attribute to a team. Team members will have these role attribute
   * values scoped for all custom roles granted to them.
   *
   * ##### Parameters
   *
   * - `key`: The role attribute key to add.
   * - `values`: List of role attribute values for that key.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addRoleAttribute",
   *       "key": "testAttribute",
   *       "values": ["someNewValue", "someOtherNewValue"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeCustomRoles
   *
   * Removes custom roles from the team. The app will no longer grant these custom
   * roles to the team members.
   *
   * ##### Parameters
   *
   * - `values`: List of custom role keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeCustomRoles",
   *       "values": ["example-custom-role"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeMembers
   *
   * Removes members from the team.
   *
   * ##### Parameters
   *
   * - `values`: List of member IDs to remove.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeMembers",
   *       "values": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removePermissionGrants
   *
   * Removes permission grants from members for the team. A permission grant may have
   * either an `actionSet` or a list of `actions` but not both at the same time. The
   * `actionSet` and `actions` must match an existing permission grant.
   *
   * ##### Parameters
   *
   * - `actionSet`: Name of the action set.
   * - `actions`: List of actions.
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removePermissionGrants",
   *       "actions": ["updateTeamName", "updateTeamDescription"],
   *       "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeRoleAttribute
   *
   * Removes a role attribute from the team.
   *
   * ##### Parameters
   *
   * - `key`: The role attribute key to remove.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeRoleAttribute",
   *       "key": "testAttribute"
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceMembers
   *
   * Replaces the existing members of the team with the new members.
   *
   * ##### Parameters
   *
   * - `values`: List of member IDs of the new members.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceMembers",
   *       "values": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceRoleAttributes
   *
   * Replaces the existing role attributes for the team with new role attributes.
   *
   * ##### Parameters
   *
   * - `values`: A map of role attribute keys to lists of role attribute values
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceRoleAttributes",
   *       "values": {
   *         "testAttribute": ["someNewValue", "someOtherNewValue"],
   *         "projectRoleAttribute": ["project1", "project2"]
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the description of the team.
   *
   * ##### Parameters
   *
   * - `value`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateDescription",
   *       "value": "Updated team description"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateName
   *
   * Updates the name of the team.
   *
   * ##### Parameters
   *
   * - `value`: The new name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateName",
   *       "value": "Updated team name"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateRoleAttribute
   *
   * Updates a role attribute on the team. Any existing values for the given key will
   * be replaced with the new values. Team members will have these role attribute
   * values scoped for all custom roles granted to them.
   *
   * ##### Parameters
   *
   * - `key`: The role attribute key to update.
   * - `values`: List of role attribute values for that key.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateRoleAttribute",
   *       "key": "testAttribute",
   *       "values": ["someNewValue", "someOtherNewValue"]
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * ### Expanding the teams response
   *
   * LaunchDarkly supports four fields for expanding the "Update team" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `members` includes the total count of members that belong to the team.
   * - `roles` includes a paginated list of the custom roles that you have assigned
   *   to the team.
   * - `projects` includes a paginated list of the projects that the team has any
   *   write access to.
   * - `maintainers` includes a paginated list of the maintainers that you have
   *   assigned to the team.
   *
   * For example, `expand=members,roles` includes the `members` and `roles` fields in
   * the response.
   *
   * @example
   * ```ts
   * const team = await client.api.v2.teams.update('teamKey', {
   *   instructions: [
   *     {
   *       kind: 'updateDescription',
   *       value: 'New description for the team',
   *     },
   *   ],
   *   comment: 'Optional comment about the update',
   * });
   * ```
   */
  update(teamKey: string, params: TeamUpdateParams, options?: RequestOptions): APIPromise<Team> {
    const { expand, ...body } = params;
    return this._client.patch(path`/api/v2/teams/${teamKey}`, { query: { expand }, body, ...options });
  }

  /**
   * Return a list of teams.
   *
   * By default, this returns the first 20 teams. Page through this list with the
   * `limit` parameter and by following the `first`, `prev`, `next`, and `last` links
   * in the `_links` field that returns. If those links do not appear, the pages they
   * refer to don't exist. For example, the `first` and `prev` links will be missing
   * from the response on the first page, because there is no previous page and you
   * cannot return to the first page when you are already on the first page.
   *
   * ### Filtering teams
   *
   * LaunchDarkly supports the following fields for filters:
   *
   * - `query` is a string that matches against the teams' names and keys. It is not
   *   case-sensitive.
   *   - A request with `query:abc` returns teams with the string `abc` in their name
   *     or key.
   * - `nomembers` is a boolean that filters the list of teams who have 0 members
   *   - A request with `nomembers:true` returns teams that have 0 members
   *   - A request with `nomembers:false` returns teams that have 1 or more members
   *
   * ### Expanding the teams response
   *
   * LaunchDarkly supports expanding several fields in the "List teams" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `members` includes the total count of members that belong to the team.
   * - `roles` includes a paginated list of the custom roles that you have assigned
   *   to the team.
   * - `roleAttributes` includes a list of the role attributes that you have assigned
   *   to the team.
   * - `projects` includes a paginated list of the projects that the team has any
   *   write access to.
   * - `maintainers` includes a paginated list of the maintainers that you have
   *   assigned to the team.
   *
   * For example, `expand=members,maintainers` includes the `members` and
   * `maintainers` fields in the response.
   *
   * @example
   * ```ts
   * const teams = await client.api.v2.teams.list();
   * ```
   */
  list(
    query: TeamListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TeamListResponse> {
    return this._client.get('/api/v2/teams', { query, ...options });
  }

  /**
   * Delete a team by key. To learn more, read
   * [Deleting teams](https://launchdarkly.com/docs/home/account/delete-teams).
   *
   * @example
   * ```ts
   * await client.api.v2.teams.delete('teamKey');
   * ```
   */
  delete(teamKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/teams/${teamKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add multiple members to an existing team by uploading a CSV file of member email
   * addresses. Your CSV file must include email addresses in the first column. You
   * can include data in additional columns, but LaunchDarkly ignores all data
   * outside the first column. Headers are optional. To learn more, read
   * [Manage team members](https://launchdarkly.com/docs/home/account/manage-teams#manage-team-members).
   *
   * **Members are only added on a `201` response.** A `207` indicates the CSV file
   * contains a combination of valid and invalid entries. A `207` results in no
   * members being added to the team.
   *
   * On a `207` response, if an entry contains bad input, the `message` field
   * contains the row number as well as the reason for the error. The `message` field
   * is omitted if the entry is valid.
   *
   * Example `207` response:
   *
   * ```json
   * {
   *   "items": [
   *     {
   *       "status": "success",
   *       "value": "new-team-member@acme.com"
   *     },
   *     {
   *       "message": "Line 2: empty row",
   *       "status": "error",
   *       "value": ""
   *     },
   *     {
   *       "message": "Line 3: email already exists in the specified team",
   *       "status": "error",
   *       "value": "existing-team-member@acme.com"
   *     },
   *     {
   *       "message": "Line 4: invalid email formatting",
   *       "status": "error",
   *       "value": "invalid email format"
   *     }
   *   ]
   * }
   * ```
   *
   * | Message                                        | Resolution                                                                                                                    |
   * | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
   * | Empty row                                      | This line is blank. Add an email address and try again.                                                                       |
   * | Duplicate entry                                | This email address appears in the file twice. Remove the email from the file and try again.                                   |
   * | Email already exists in the specified team     | This member is already on your team. Remove the email from the file and try again.                                            |
   * | Invalid formatting                             | This email address is not formatted correctly. Fix the formatting and try again.                                              |
   * | Email does not belong to a LaunchDarkly member | The email address doesn't belong to a LaunchDarkly account member. Invite them to LaunchDarkly, then re-add them to the team. |
   *
   * On a `400` response, the `message` field may contain errors specific to this
   * endpoint.
   *
   * Example `400` response:
   *
   * ```json
   * {
   *   "code": "invalid_request",
   *   "message": "Unable to process file"
   * }
   * ```
   *
   * | Message                                                       | Resolution                                                                                                                                      |
   * | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
   * | Unable to process file                                        | LaunchDarkly could not process the file for an unspecified reason. Review your file for errors and try again.                                   |
   * | File exceeds 25mb                                             | Break up your file into multiple files of less than 25mbs each.                                                                                 |
   * | All emails have invalid formatting                            | None of the email addresses in the file are in the correct format. Fix the formatting and try again.                                            |
   * | All emails belong to existing team members                    | All listed members are already on this team. Populate the file with member emails that do not belong to the team and try again.                 |
   * | File is empty                                                 | The CSV file does not contain any email addresses. Populate the file and try again.                                                             |
   * | No emails belong to members of your LaunchDarkly organization | None of the email addresses belong to members of your LaunchDarkly account. Invite these members to LaunchDarkly, then re-add them to the team. |
   *
   * @example
   * ```ts
   * const response = await client.api.v2.teams.members(
   *   'teamKey',
   * );
   * ```
   */
  members(
    teamKey: string,
    body: TeamMembersParams,
    options?: RequestOptions,
  ): APIPromise<TeamMembersResponse> {
    return this._client.post(
      path`/api/v2/teams/${teamKey}/members`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Perform a partial update to multiple teams. Updating teams uses the semantic
   * patch format.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * teams.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating teams</strong></summary>
   *
   * #### addMembersToTeams
   *
   * Add the members to teams.
   *
   * ##### Parameters
   *
   * - `memberIDs`: List of member IDs to add.
   * - `teamKeys`: List of teams to update.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addMembersToTeams",
   *       "memberIDs": ["1234a56b7c89d012345e678f"],
   *       "teamKeys": ["example-team-1", "example-team-2"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### addAllMembersToTeams
   *
   * Add all members to the team. Members that match any of the filters are
   * **excluded** from the update.
   *
   * ##### Parameters
   *
   * - `teamKeys`: List of teams to update.
   * - `filterLastSeen`: (Optional) A JSON object with one of the following formats:
   *   - `{"never": true}` - Members that have never been active, such as those who
   *     have not accepted their invitation to LaunchDarkly, or have not logged in
   *     after being provisioned via SCIM.
   *   - `{"noData": true}` - Members that have not been active since LaunchDarkly
   *     began recording last seen timestamps.
   *   - `{"before": 1608672063611}` - Members that have not been active since the
   *     provided value, which should be a timestamp in Unix epoch milliseconds.
   * - `filterQuery`: (Optional) A string that matches against the members' emails
   *   and names. It is not case sensitive.
   * - `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For
   *   the purposes of this filtering, `Owner` counts as `Admin`.
   * - `filterTeamKey`: (Optional) A string that matches against the key of the team
   *   the members belong to. It is not case sensitive.
   * - `ignoredMemberIDs`: (Optional) A list of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addAllMembersToTeams",
   *       "teamKeys": ["example-team-1", "example-team-2"],
   *       "filterLastSeen": { "never": true }
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * @example
   * ```ts
   * const response = await client.api.v2.teams.patchAll({
   *   instructions: [
   *     {
   *       kind: 'addMembersToTeams',
   *       memberIDs: ['1234a56b7c89d012345e678f'],
   *       teamKeys: ['example-team-1', 'example-team-2'],
   *     },
   *   ],
   *   comment: 'Optional comment about the update',
   * });
   * ```
   */
  patchAll(body: TeamPatchAllParams, options?: RequestOptions): APIPromise<TeamPatchAllResponse> {
    return this._client.patch('/api/v2/teams', { body, ...options });
  }

  /**
   * Fetch the maintainers that have been assigned to the team. To learn more, read
   * [Managing team maintainers](https://launchdarkly.com/docs/home/account/team-maintainers).
   *
   * @example
   * ```ts
   * const teamMaintainers =
   *   await client.api.v2.teams.retrieveMaintainers('teamKey');
   * ```
   */
  retrieveMaintainers(
    teamKey: string,
    query: TeamRetrieveMaintainersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TeamMaintainers> {
    return this._client.get(path`/api/v2/teams/${teamKey}/maintainers`, { query, ...options });
  }

  /**
   * Fetch the custom roles that have been assigned to the team. To learn more, read
   * [Managing team permissions](https://launchdarkly.com/docs/home/account/team-permissions).
   *
   * @example
   * ```ts
   * const teamCustomRoles =
   *   await client.api.v2.teams.retrieveRoles('teamKey');
   * ```
   */
  retrieveRoles(
    teamKey: string,
    query: TeamRetrieveRolesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TeamCustomRoles> {
    return this._client.get(path`/api/v2/teams/${teamKey}/roles`, { query, ...options });
  }
}

export interface ProjectSummary {
  /**
   * The ID of this project
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * The project key
   */
  key: string;

  /**
   * The project name
   */
  name: string;
}

export interface Team {
  /**
   * Details on the allowed and denied actions for this team
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * Timestamp of when the team was created
   */
  _creationDate?: number;

  /**
   * Whether the team has been synced with an external identity provider (IdP). Team
   * sync is available to customers on an Enterprise plan.
   */
  _idpSynced?: boolean;

  /**
   * Timestamp of when the team was most recently updated
   */
  _lastModified?: number;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * The team version
   */
  _version?: number;

  /**
   * A description of the team
   */
  description?: string;

  /**
   * The team key
   */
  key?: string;

  /**
   * Paginated list of the maintainers assigned to this team. Only included if
   * specified in the <code>expand</code> query parameter.
   */
  maintainers?: TeamMaintainers;

  /**
   * Details on the total count of members that belong to the team. Only included if
   * specified in the <code>expand</code> query parameter.
   */
  members?: Team.Members;

  /**
   * A human-friendly name for the team
   */
  name?: string;

  /**
   * Paginated list of the projects that the team has any write access to. Only
   * included if specified in the <code>expand</code> query parameter.
   */
  projects?: TeamProjects;

  /**
   * A map of role attributes for the team
   */
  roleAttributes?: { [key: string]: Array<string> };

  /**
   * Paginated list of the custom roles assigned to this team. Only included if
   * specified in the <code>expand</code> query parameter.
   */
  roles?: TeamCustomRoles;
}

export namespace Team {
  /**
   * Details on the total count of members that belong to the team. Only included if
   * specified in the <code>expand</code> query parameter.
   */
  export interface Members {
    /**
     * The total count of members that belong to the team
     */
    totalCount?: number;
  }
}

export interface TeamCustomRoles {
  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * An array of the custom roles that have been assigned to this team
   */
  items?: Array<TeamCustomRoles.Item>;

  /**
   * The number of custom roles assigned to this team
   */
  totalCount?: number;
}

export namespace TeamCustomRoles {
  export interface Item {
    /**
     * Timestamp of when the custom role was assigned to this team
     */
    appliedOn?: number;

    /**
     * The key of the custom role
     */
    key?: string;

    /**
     * The name of the custom role
     */
    name?: string;

    /**
     * Details on the projects where team members have write privileges on at least one
     * resource type (e.g. flags)
     */
    projects?: TeamsAPI.TeamProjects;
  }
}

export interface TeamMaintainers {
  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * Details on the members that have been assigned as maintainers of the team
   */
  items?: Array<RelayAutoConfigsAPI.MemberSummary>;

  /**
   * The number of maintainers of the team
   */
  totalCount?: number;
}

export interface TeamProjects {
  /**
   * Details on each project where team members have write privileges on at least one
   * resource type (e.g. flags)
   */
  items?: Array<ProjectSummary>;

  totalCount?: number;
}

export interface TeamListResponse {
  /**
   * An array of teams
   */
  items: Array<Team>;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * The number of teams
   */
  totalCount?: number;
}

export interface TeamMembersResponse {
  /**
   * An array of details about the members requested to be added to this team
   */
  items?: Array<TeamMembersResponse.Item>;
}

export namespace TeamMembersResponse {
  export interface Item {
    /**
     * Whether this member can be successfully imported (<code>success</code>) or not
     * (<code>error</code>). Even if the status is <code>success</code>, members are
     * only added to a team on a <code>201</code> response.
     */
    status: string;

    /**
     * The email address for the member requested to be added to this team. May be
     * blank or an error, such as 'invalid email format', if the email address cannot
     * be found or parsed.
     */
    value: string;

    /**
     * An error message, including CSV line number, if the <code>status</code> is
     * <code>error</code>
     */
    message?: string;
  }
}

export interface TeamPatchAllResponse {
  /**
   * A list of team keys and errors for the teams whose updates failed.
   */
  errors?: Array<{ [key: string]: string }>;

  /**
   * A list of member IDs of the members who were added to the teams.
   */
  memberIDs?: Array<string>;

  /**
   * A list of team keys of the teams that were successfully updated.
   */
  teamKeys?: Array<string>;
}

export interface TeamCreateParams {
  /**
   * Body param: The team key
   */
  key: string;

  /**
   * Body param: A human-friendly name for the team
   */
  name: string;

  /**
   * Query param: A comma-separated list of properties that can reveal additional
   * information in the response. Supported fields are explained above.
   */
  expand?: string;

  /**
   * Body param: List of custom role keys the team will access
   */
  customRoleKeys?: Array<string>;

  /**
   * Body param: A description of the team
   */
  description?: string;

  /**
   * Body param: A list of member IDs who belong to the team
   */
  memberIDs?: Array<string>;

  /**
   * Body param: A list of permission grants. Permission grants allow access to a
   * specific action, without having to create or update a custom role.
   */
  permissionGrants?: Array<TeamCreateParams.PermissionGrant>;

  /**
   * Body param: A map of role attributes for the team
   */
  roleAttributes?: { [key: string]: Array<string> };
}

export namespace TeamCreateParams {
  export interface PermissionGrant {
    /**
     * A list of actions to allow. Specify either <code>actionSet</code> or
     * <code>actions</code>. To learn more, read
     * [Role actions](https://launchdarkly.com/docs/ld-docs/home/account/role-actions).
     */
    actions?: Array<string>;

    /**
     * A group of related actions to allow. Specify either <code>actionSet</code> or
     * <code>actions</code>. Use <code>maintainTeam</code> to add team maintainers.
     */
    actionSet?: 'maintainTeam';

    /**
     * A list of member IDs who receive the permission grant.
     */
    memberIDs?: Array<string>;
  }
}

export interface TeamRetrieveParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response.
   */
  expand?: string;
}

export interface TeamUpdateParams {
  /**
   * Body param: The instructions to perform when updating. This should be an array
   * with objects that look like <code>{"kind": "update_action"}</code>. Some
   * instructions also require additional parameters as part of this object.
   */
  instructions: Array<{ [key: string]: unknown }>;

  /**
   * Query param: A comma-separated list of properties that can reveal additional
   * information in the response. Supported fields are explained above.
   */
  expand?: string;

  /**
   * Body param: Optional comment describing the update
   */
  comment?: string;
}

export interface TeamListParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response.
   */
  expand?: string;

  /**
   * A comma-separated list of filters. Each filter is constructed as `field:value`.
   */
  filter?: string;

  /**
   * The number of teams to return in the response. Defaults to 20.
   */
  limit?: number;

  /**
   * Where to start in the list. Use this with pagination. For example, an offset of
   * 10 skips the first ten items and returns the next `limit` items.
   */
  offset?: number;
}

export interface TeamMembersParams {
  /**
   * CSV file containing email addresses
   */
  file?: Uploadable;
}

export interface TeamPatchAllParams {
  /**
   * The instructions to perform when updating. This should be an array with objects
   * that look like <code>{"kind": "update_action"}</code>. Some instructions also
   * require additional parameters as part of this object.
   */
  instructions: Array<{ [key: string]: unknown }>;

  /**
   * Optional comment describing the update
   */
  comment?: string;
}

export interface TeamRetrieveMaintainersParams {
  /**
   * The number of maintainers to return in the response. Defaults to 20.
   */
  limit?: number;

  /**
   * Where to start in the list. This is for use with pagination. For example, an
   * offset of 10 skips the first ten items and then returns the next items in the
   * list, up to the query `limit`.
   */
  offset?: number;
}

export interface TeamRetrieveRolesParams {
  /**
   * The number of roles to return in the response. Defaults to 20.
   */
  limit?: number;

  /**
   * Where to start in the list. This is for use with pagination. For example, an
   * offset of 10 skips the first ten items and then returns the next items in the
   * list, up to the query `limit`.
   */
  offset?: number;
}

export declare namespace Teams {
  export {
    type ProjectSummary as ProjectSummary,
    type Team as Team,
    type TeamCustomRoles as TeamCustomRoles,
    type TeamMaintainers as TeamMaintainers,
    type TeamProjects as TeamProjects,
    type TeamListResponse as TeamListResponse,
    type TeamMembersResponse as TeamMembersResponse,
    type TeamPatchAllResponse as TeamPatchAllResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamRetrieveParams as TeamRetrieveParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamListParams as TeamListParams,
    type TeamMembersParams as TeamMembersParams,
    type TeamPatchAllParams as TeamPatchAllParams,
    type TeamRetrieveMaintainersParams as TeamRetrieveMaintainersParams,
    type TeamRetrieveRolesParams as TeamRetrieveRolesParams,
  };
}
