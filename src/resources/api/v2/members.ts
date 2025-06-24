// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApprovalRequestsAPI from './approval-requests';
import * as ApplicationsAPI from './applications/applications';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Invite one or more new members to join an account. Each member is sent an
   * invitation. Members with "admin" or "owner" roles may create new members, as
   * well as anyone with a "createMember" permission for "member/\*". If a member
   * cannot be invited, the entire request is rejected and no members are invited
   * from that request.
   *
   * Each member _must_ have an `email` field and either a `role` or a `customRoles`
   * field. If any of the fields are not populated correctly, the request is rejected
   * with the reason specified in the "message" field of the response.
   *
   * Requests to create account members will not work if SCIM is enabled for the
   * account.
   *
   * _No more than 50 members may be created per request._
   *
   * A request may also fail because of conflicts with existing members. These
   * conflicts are reported using the additional `code` and `invalid_emails` response
   * fields with the following possible values for `code`:
   *
   * - **email_already_exists_in_account**: A member with this email address already
   *   exists in this account.
   * - **email_taken_in_different_account**: A member with this email address exists
   *   in another account.
   * - **duplicate_email**s: This request contains two or more members with the same
   *   email address.
   *
   * A request that fails for one of the above reasons returns an HTTP response code
   * of 400 (Bad Request).
   *
   * @example
   * ```ts
   * const members = await client.api.v2.members.create({
   *   body: [{ email: 'sandy@acme.com' }],
   * });
   * ```
   */
  create(params: MemberCreateParams, options?: RequestOptions): APIPromise<Members> {
    const { body } = params;
    return this._client.post('/api/v2/members', { body: body, ...options });
  }

  /**
   * Get a single account member by member ID.
   *
   * `me` is a reserved value for the `id` parameter that returns the caller's member
   * information.
   *
   * ### Expanding the member response
   *
   * LaunchDarkly supports one field for expanding the "Get member" response. By
   * default, this field is **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `roleAttributes` includes a list of the role attributes that you have assigned
   *   to the member.
   *
   * For example, `expand=roleAttributes` includes `roleAttributes` field in the
   * response.
   *
   * @example
   * ```ts
   * const member = await client.api.v2.members.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: MemberRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Member> {
    return this._client.get(path`/api/v2/members/${id}`, { query, ...options });
  }

  /**
   * Update a single account member. Updating a member uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * To update fields in the account member object that are arrays, set the `path` to
   * the name of the field and then append `/<array index>`. Use `/0` to add to the
   * beginning of the array. Use `/-` to add to the end of the array. For example, to
   * add a new custom role to a member, use the following request body:
   *
   * ```
   *   [
   *     {
   *       "op": "add",
   *       "path": "/customRoles/0",
   *       "value": "some-role-id"
   *     }
   *   ]
   * ```
   *
   * You can update only an account member's role or custom role using a JSON patch.
   * Members can update their own names and email addresses though the LaunchDarkly
   * UI.
   *
   * When SAML SSO or SCIM is enabled for the account, account members are managed in
   * the Identity Provider (IdP). Requests to update account members will succeed,
   * but the IdP will override the update shortly afterwards.
   *
   * @example
   * ```ts
   * const member = await client.api.v2.members.update('id', {
   *   body: [{ op: 'add', path: '/role' }],
   * });
   * ```
   */
  update(id: string, params: MemberUpdateParams, options?: RequestOptions): APIPromise<Member> {
    const { body } = params;
    return this._client.patch(path`/api/v2/members/${id}`, { body: body, ...options });
  }

  /**
   * Return a list of account members.
   *
   * By default, this returns the first 20 members. Page through this list with the
   * `limit` parameter and by following the `first`, `prev`, `next`, and `last` links
   * in the returned `_links` field. These links are not present if the pages they
   * refer to don't exist. For example, the `first` and `prev` links will be missing
   * from the response on the first page.
   *
   * ### Filtering members
   *
   * LaunchDarkly supports the following fields for filters:
   *
   * - `query` is a string that matches against the members' emails and names. It is
   *   not case sensitive.
   * - `role` is a `|` separated list of roles and custom roles. It filters the list
   *   to members who have any of the roles in the list. For the purposes of this
   *   filtering, `Owner` counts as `Admin`.
   * - `id` is a `|` separated list of member IDs. It filters the list to members who
   *   match any of the IDs in the list.
   * - `email` is a `|` separated list of member emails. It filters the list to
   *   members who match any of the emails in the list.
   * - `team` is a string that matches against the key of the teams the members
   *   belong to. It is not case sensitive.
   * - `noteam` is a boolean that filters the list of members who are not on a team
   *   if true and members on a team if false.
   * - `lastSeen` is a JSON object in one of the following formats:
   *   - `{"never": true}` - Members that have never been active, such as those who
   *     have not accepted their invitation to LaunchDarkly, or have not logged in
   *     after being provisioned via SCIM.
   *   - `{"noData": true}` - Members that have not been active since LaunchDarkly
   *     began recording last seen timestamps.
   *   - `{"before": 1608672063611}` - Members that have not been active since the
   *     provided value, which should be a timestamp in Unix epoch milliseconds.
   * - `accessCheck` is a string that represents a specific action on a specific
   *   resource and is in the format `<ActionSpecifier>:<ResourceSpecifier>`. It
   *   filters the list to members who have the ability to perform that action on
   *   that resource. Note: `accessCheck` is only supported in API version `20220603`
   *   and earlier. To learn more, read
   *   [Versioning](https://launchdarkly.com/docs/api#versioning).
   *   - For example, the filter
   *     `accessCheck:createApprovalRequest:proj/default:env/test:flag/alternate-page`
   *     matches members with the ability to create an approval request for the
   *     `alternate-page` flag in the `test` environment of the `default` project.
   *   - Wildcard and tag filters are not supported when filtering for access.
   *
   * For example, the filter `query:abc,role:admin|customrole` matches members with
   * the string `abc` in their email or name, ignoring case, who also are either an
   * `Owner` or `Admin` or have the custom role `customrole`.
   *
   * ### Sorting members
   *
   * LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:
   *
   * - `displayName` sorts by first + last name, using the member's email if no name
   *   is set.
   * - `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members
   *   that have never been seen or have no data the oldest.
   *
   * ### Expanding the members response
   *
   * LaunchDarkly supports two fields for expanding the "List members" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `customRoles` includes a list of the roles that you have assigned to the
   *   member.
   * - `roleAttributes` includes a list of the role attributes that you have assigned
   *   to the member.
   *
   * For example, `expand=roleAttributes` includes `roleAttributes` field in the
   * response.
   *
   * @example
   * ```ts
   * const members = await client.api.v2.members.list();
   * ```
   */
  list(query: MemberListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Members> {
    return this._client.get('/api/v2/members', { query, ...options });
  }

  /**
   * Delete a single account member by ID. Requests to delete account members will
   * not work if SCIM is enabled for the account.
   *
   * @example
   * ```ts
   * await client.api.v2.members.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/members/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * > ### Full use of this API resource is an Enterprise feature
   * >
   * > The ability to perform a partial update to multiple members is available to
   * > customers on an Enterprise plan. If you are on another plan, you can update
   * > members individually. To learn more,
   * > [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your
   * > plan, [contact Sales](https://launchdarkly.com/contact-sales/).
   *
   * Perform a partial update to multiple members. Updating members uses the semantic
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
   * members.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating members</strong></summary>
   *
   * #### replaceMembersRoles
   *
   * Replaces the roles of the specified members. This also removes all custom roles
   * assigned to the specified members.
   *
   * ##### Parameters
   *
   * - `value`: The new role. Must be a valid built-in role. To learn more about
   *   built-in roles, read
   *   [LaunchDarkly's built-in roles](https://launchdarkly.com/docs/home/account/built-in-roles).
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceMemberRoles",
   *       "value": "reader",
   *       "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceAllMembersRoles
   *
   * Replaces the roles of all members. This also removes all custom roles assigned
   * to the specified members.
   *
   * Members that match any of the filters are **excluded** from the update.
   *
   * ##### Parameters
   *
   * - `value`: The new role. Must be a valid built-in role. To learn more about
   *   built-in roles, read
   *   [LaunchDarkly's built-in roles](https://launchdarkly.com/docs/home/account/built-in-roles).
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
   *       "kind": "replaceAllMembersRoles",
   *       "value": "reader",
   *       "filterLastSeen": { "never": true }
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceMembersCustomRoles
   *
   * Replaces the custom roles of the specified members.
   *
   * ##### Parameters
   *
   * - `values`: List of new custom roles. Must be a valid custom role key or ID.
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceMembersCustomRoles",
   *       "values": ["example-custom-role"],
   *       "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceAllMembersCustomRoles
   *
   * Replaces the custom roles of all members. Members that match any of the filters
   * are **excluded** from the update.
   *
   * ##### Parameters
   *
   * - `values`: List of new roles. Must be a valid custom role key or ID.
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
   *       "kind": "replaceAllMembersCustomRoles",
   *       "values": ["example-custom-role"],
   *       "filterLastSeen": { "never": true }
   *     }
   *   ]
   * }
   * ```
   *
   * #### replaceMembersRoleAttributes
   *
   * Replaces the role attributes of the specified members.
   *
   * ##### Parameters
   *
   * - `value`: Map of role attribute keys to lists of values.
   * - `memberIDs`: List of member IDs.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceMembersRoleAttributes",
   *       "value": {
   *         "myRoleProjectKey": ["mobile", "web"],
   *         "myRoleEnvironmentKey": ["production"]
   *       },
   *       "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * @example
   * ```ts
   * const response = await client.api.v2.members.patchAll({
   *   instructions: [
   *     {
   *       kind: 'replaceMembersRoles',
   *       memberIDs: [
   *         '1234a56b7c89d012345e678f',
   *         '507f1f77bcf86cd799439011',
   *       ],
   *       value: 'reader',
   *     },
   *   ],
   *   comment: 'Optional comment about the update',
   * });
   * ```
   */
  patchAll(body: MemberPatchAllParams, options?: RequestOptions): APIPromise<MemberPatchAllResponse> {
    return this._client.patch('/api/v2/members', { body, ...options });
  }

  /**
   * Add one member to one or more teams.
   *
   * @example
   * ```ts
   * const member = await client.api.v2.members.teams('id', {
   *   teamKeys: ['team1', 'team2'],
   * });
   * ```
   */
  teams(id: string, body: MemberTeamsParams, options?: RequestOptions): APIPromise<Member> {
    return this._client.post(path`/api/v2/members/${id}/teams`, { body, ...options });
  }
}

export interface Member {
  /**
   * The member's ID
   */
  _id: string;

  /**
   * The member's last session date (as Unix milliseconds since epoch)
   */
  _lastSeen: number;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * Whether the member has a pending invitation
   */
  _pendingInvite: boolean;

  /**
   * Whether the member's email address has been verified
   */
  _verified: boolean;

  /**
   * Timestamp of when the member was created
   */
  creationDate: number;

  /**
   * The set of custom roles (as keys) assigned to the member
   */
  customRoles: Array<string>;

  /**
   * The member's email address
   */
  email: string;

  /**
   * Whether multi-factor authentication is enabled for this member
   */
  mfa: string;

  /**
   * The member's built-in role. If the member has no custom roles, this role will be
   * in effect.
   */
  role: string;

  /**
   * Details on the member account in an external source, if this member is
   * provisioned externally
   */
  _integrationMetadata?: ApprovalRequestsAPI.IntegrationMetadata;

  /**
   * Additional metadata associated with the member's last session, for example,
   * whether a token was used
   */
  _lastSeenMetadata?: Member._LastSeenMetadata;

  /**
   * The member's email address before it has been verified, for accounts where email
   * verification is required
   */
  _pendingEmail?: string;

  /**
   * Default dashboards that the member has chosen to ignore
   */
  excludedDashboards?: Array<string>;

  /**
   * The member's first name
   */
  firstName?: string;

  /**
   * The member's last name
   */
  lastName?: string;

  /**
   * A list of OAuth providers
   */
  oauthProviders?: Array<string>;

  /**
   * A list of permission grants. Permission grants allow a member to have access to
   * a specific action, without having to create or update a custom role.
   */
  permissionGrants?: Array<Member.PermissionGrant>;

  /**
   * The role attributes for the member
   */
  roleAttributes?: { [key: string]: Array<string> };

  /**
   * Details on the teams this member is assigned to
   */
  teams?: Array<MemberTeamSummaryRep>;

  /**
   * Version of the current configuration
   */
  version?: number;
}

export namespace Member {
  /**
   * Additional metadata associated with the member's last session, for example,
   * whether a token was used
   */
  export interface _LastSeenMetadata {
    /**
     * The ID of the token used in the member's last session
     */
    tokenId?: string;
  }

  export interface PermissionGrant {
    /**
     * The resource for which the actions are allowed
     */
    resource: string;

    /**
     * A list of actions to allow. A permission grant may have either an
     * <code>actionSet</code> or a list of <code>actions</code> but not both at the
     * same time.
     */
    actions?: Array<string>;

    /**
     * The name of the group of related actions to allow. A permission grant may have
     * either an <code>actionSet</code> or a list of <code>actions</code> but not both
     * at the same time.
     */
    actionSet?: string;
  }
}

export interface MemberTeamSummaryRep {
  /**
   * A list of keys of the custom roles this team has access to
   */
  customRoleKeys: Array<string>;

  /**
   * The team key
   */
  key: string;

  /**
   * The team name
   */
  name: string;

  _links?: { [key: string]: StatisticsAPI.Link };
}

export interface Members {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * An array of members
   */
  items: Array<Member>;

  /**
   * The number of members returned
   */
  totalCount?: number;
}

export interface MemberPatchAllResponse {
  /**
   * A list of member IDs and errors for the members whose updates failed.
   */
  errors?: Array<{ [key: string]: string }>;

  /**
   * A list of members IDs of the members who were successfully updated.
   */
  members?: Array<string>;
}

export interface MemberCreateParams {
  body: Array<MemberCreateParams.Body>;
}

export namespace MemberCreateParams {
  export interface Body {
    /**
     * The member's email
     */
    email: string;

    /**
     * An array of the member's custom roles
     */
    customRoles?: Array<string>;

    /**
     * The member's first name
     */
    firstName?: string;

    /**
     * The member's last name
     */
    lastName?: string;

    /**
     * The member's password
     */
    password?: string;

    /**
     * The member's built-in role
     */
    role?: 'reader' | 'writer' | 'admin' | 'no_access';

    /**
     * An object of role attributes for the member
     */
    roleAttributes?: { [key: string]: Array<string> };

    /**
     * An array of the member's teams
     */
    teamKeys?: Array<string>;
  }
}

export interface MemberRetrieveParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response.
   */
  expand?: string;
}

export interface MemberUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface MemberListParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response.
   */
  expand?: string;

  /**
   * A comma-separated list of filters. Each filter is of the form `field:value`.
   * Supported fields are explained above.
   */
  filter?: string;

  /**
   * The number of members to return in the response. Defaults to 20.
   */
  limit?: number;

  /**
   * Where to start in the list. This is for use with pagination. For example, an
   * offset of 10 skips the first ten items and then returns the next items in the
   * list, up to the query `limit`.
   */
  offset?: number;

  /**
   * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - )
   * sort in descending order.
   */
  sort?: string;
}

export interface MemberPatchAllParams {
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

export interface MemberTeamsParams {
  /**
   * List of team keys
   */
  teamKeys: Array<string>;
}

export declare namespace Members {
  export {
    type Member as Member,
    type MemberTeamSummaryRep as MemberTeamSummaryRep,
    type Members as Members,
    type MemberPatchAllResponse as MemberPatchAllResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberRetrieveParams as MemberRetrieveParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberPatchAllParams as MemberPatchAllParams,
    type MemberTeamsParams as MemberTeamsParams,
  };
}
