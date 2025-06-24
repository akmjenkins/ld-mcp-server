// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuditlogAPI from './auditlog';
import * as RelayAutoConfigsAPI from './account/relay-auto-configs';
import * as ApplicationsAPI from './applications/applications';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Roles extends APIResource {
  /**
   * Create a new custom role
   *
   * @example
   * ```ts
   * const customRole = await client.api.v2.roles.create({
   *   key: 'role-key-123abc',
   *   name: 'Ops team',
   *   policy: [
   *     {
   *       actions: ['updateOn'],
   *       effect: 'allow',
   *       resources: ['proj/*:env/production:flag/*'],
   *     },
   *   ],
   *   basePermissions: 'reader',
   *   description:
   *     'An example role for members of the ops team',
   * });
   * ```
   */
  create(body: RoleCreateParams, options?: RequestOptions): APIPromise<CustomRole> {
    return this._client.post('/api/v2/roles', { body, ...options });
  }

  /**
   * Get a single custom role by key or ID
   *
   * @example
   * ```ts
   * const customRole = await client.api.v2.roles.retrieve(
   *   'customRoleKey',
   * );
   * ```
   */
  retrieve(customRoleKey: string, options?: RequestOptions): APIPromise<CustomRole> {
    return this._client.get(path`/api/v2/roles/${customRoleKey}`, options);
  }

  /**
   * Update a single custom role. Updating a custom role uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or
   * [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation
   * of the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element
   * to the `policy` array, set the `path` to `/policy` and then append
   * `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add
   * to the end of the array.
   *
   * @example
   * ```ts
   * const customRole = await client.api.v2.roles.update(
   *   'customRoleKey',
   *   {
   *     patch: [
   *       {
   *         op: 'add',
   *         path: '/policy/0',
   *         value: {
   *           actions: ['updateOn'],
   *           effect: 'allow',
   *           resources: ['proj/*:env/qa:flag/*'],
   *         },
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  update(customRoleKey: string, body: RoleUpdateParams, options?: RequestOptions): APIPromise<CustomRole> {
    return this._client.patch(path`/api/v2/roles/${customRoleKey}`, { body, ...options });
  }

  /**
   * Get a complete list of custom roles. Custom roles let you create flexible
   * policies providing fine-grained access control to everything in LaunchDarkly,
   * from feature flags to goals, environments, and teams. With custom roles, it's
   * possible to enforce access policies that meet your exact workflow needs. Custom
   * roles are available to customers on our enterprise plans. If you're interested
   * in learning more about our enterprise plans, contact sales@launchdarkly.com.
   *
   * @example
   * ```ts
   * const roles = await client.api.v2.roles.list();
   * ```
   */
  list(
    query: RoleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoleListResponse> {
    return this._client.get('/api/v2/roles', { query, ...options });
  }

  /**
   * Delete a custom role by key
   *
   * @example
   * ```ts
   * await client.api.v2.roles.delete('customRoleKey');
   * ```
   */
  delete(customRoleKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/roles/${customRoleKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CustomRole {
  /**
   * The ID of the custom role
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * The key of the custom role
   */
  key: string;

  /**
   * The name of the custom role
   */
  name: string;

  /**
   * An array of the policies that comprise this custom role
   */
  policy: Array<RelayAutoConfigsAPI.Statement>;

  /**
   * Details on the allowed and denied actions for this custom role
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * If created from a preset, the preset bundle version
   */
  _presetBundleVersion?: number;

  /**
   * If created from a preset, the read-only statements copied from the preset
   */
  _presetStatements?: Array<RelayAutoConfigsAPI.Statement>;

  /**
   * The number of teams and members this role is assigned to
   */
  assignedTo?: CustomRole.AssignedTo;

  /**
   * Base permissions to use for this role. Only applicable to roles created prior to
   * October 2024.
   */
  basePermissions?: string;

  /**
   * The description of the custom role
   */
  description?: string;

  /**
   * The category of resources this role is intended to manage. Can be
   * <code>organization</code>, <code>project</code>, or <code>any</code>. Once set,
   * this field cannot be changed.
   */
  resourceCategory?: string;
}

export namespace CustomRole {
  /**
   * The number of teams and members this role is assigned to
   */
  export interface AssignedTo {
    /**
     * The number of individual members this role is assigned to
     */
    membersCount?: number;

    /**
     * The number of teams this role is assigned to
     */
    teamsCount?: number;
  }
}

export interface RoleListResponse {
  /**
   * An array of custom roles
   */
  items: Array<CustomRole>;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * The total number of custom roles
   */
  totalCount?: number;
}

export interface RoleCreateParams {
  /**
   * The custom role key
   */
  key: string;

  /**
   * A human-friendly name for the custom role
   */
  name: string;

  /**
   * Resource statements for custom role
   */
  policy: Array<AuditlogAPI.StatementPost>;

  /**
   * Base permissions to use for this role. Only applicable to roles created prior to
   * October 2024.
   */
  basePermissions?: 'reader' | 'no_access';

  /**
   * Description of custom role
   */
  description?: string;

  /**
   * The category of resources this role is intended to manage. Can be
   * <code>organization</code>, <code>project</code>, or <code>any</code>. This field
   * is immutable.
   */
  resourceCategory?: string;
}

export interface RoleUpdateParams {
  /**
   * A JSON patch representation of the change to make
   */
  patch: Array<ApplicationsAPI.PatchOperation>;

  /**
   * Optional comment
   */
  comment?: string;
}

export interface RoleListParams {
  /**
   * The maximum number of custom roles to return. Defaults to 20.
   */
  limit?: number;

  /**
   * Where to start in the list. Defaults to 0. Use this with pagination. For
   * example, an offset of 10 skips the first ten items and then returns the next
   * items in the list, up to the query `limit`.
   */
  offset?: number;
}

export declare namespace Roles {
  export {
    type CustomRole as CustomRole,
    type RoleListResponse as RoleListResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };
}
