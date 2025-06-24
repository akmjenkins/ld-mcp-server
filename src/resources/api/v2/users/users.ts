// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as StatisticsAPI from '../code-refs/statistics';
import * as ExpiringUserTargetsAPI from './expiring-user-targets';
import {
  ExpiringUserTargetRetrieveParams,
  ExpiringUserTargetUpdateParams,
  ExpiringUserTargets,
} from './expiring-user-targets';
import * as FlagsAPI from './flags';
import {
  FlagListParams,
  FlagListResponse,
  FlagRetrieveParams,
  FlagRetrieveResponse,
  FlagUpdateParams,
  Flags,
} from './flags';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Users extends APIResource {
  flags: FlagsAPI.Flags = new FlagsAPI.Flags(this._client);
  expiringUserTargets: ExpiringUserTargetsAPI.ExpiringUserTargets =
    new ExpiringUserTargetsAPI.ExpiringUserTargets(this._client);

  /**
   * > ### Use contexts instead
   * >
   * > After you have upgraded your LaunchDarkly SDK to use contexts instead of
   * > users, you should use
   * > [Get context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/get-context-instances)
   * > instead of this endpoint.
   *
   * Get a user by key. The `user` object contains all attributes sent in `variation`
   * calls for that key.
   *
   * @deprecated
   */
  retrieve(userKey: string, params: UserRetrieveParams, options?: RequestOptions): APIPromise<UserRecord> {
    const { projectKey, environmentKey } = params;
    return this._client.get(path`/api/v2/users/${projectKey}/${environmentKey}/${userKey}`, options);
  }

  /**
   * > ### Use contexts instead
   * >
   * > After you have upgraded your LaunchDarkly SDK to use contexts instead of
   * > users, you should use
   * > [Delete context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/delete-context-instances)
   * > instead of this endpoint.
   *
   * Delete a user by key.
   *
   * @deprecated
   */
  delete(userKey: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey } = params;
    return this._client.delete(path`/api/v2/users/${projectKey}/${environmentKey}/${userKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UserRecord {
  /**
   * Details on the allowed and denied actions for this user
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * The environment ID
   */
  environmentId?: string;

  /**
   * Timestamp of the last time this user was seen
   */
  lastPing?: string;

  /**
   * The ID of the member who is the owner for this account
   */
  ownerId?: string;

  /**
   * If this record is returned as part of a list, the value used to sort the list.
   * This is only included when the <code>sort</code> query parameter is specified.
   * It is a time, in Unix milliseconds, if the sort is by <code>lastSeen</code>. It
   * is a user key if the sort is by <code>userKey</code>.
   */
  sortValue?: unknown;

  /**
   * Details on the user
   */
  user?: UserRecord.User;
}

export namespace UserRecord {
  /**
   * Details on the user
   */
  export interface User {
    /**
     * Whether the user is anonymous. If true, this user does not appear on the
     * Contexts list in the LaunchDarkly user interface.
     */
    anonymous?: boolean;

    /**
     * An absolute URL to an avatar image.
     */
    avatar?: string;

    /**
     * The user's country
     */
    country?: string;

    /**
     * Any other custom attributes for this user. Custom attributes contain any other
     * user data that you would like to use to conditionally target your users.
     */
    custom?: { [key: string]: unknown };

    /**
     * The user's email
     */
    email?: string;

    /**
     * The user's first name
     */
    firstName?: string;

    /**
     * The user's IP address
     */
    ip?: string;

    /**
     * The user key. This is the only mandatory user attribute.
     */
    key?: string;

    /**
     * The user's last name
     */
    lastName?: string;

    /**
     * The user's full name
     */
    name?: string;

    /**
     * A list of attribute names that are marked as private. You can use these
     * attributes in targeting rules and segments. If you are using a server-side SDK,
     * the SDK will not send the private attribute back to LaunchDarkly. If you are
     * using a client-side SDK, the SDK will send the private attribute back to
     * LaunchDarkly for evaluation. However, the SDK won't send the attribute to
     * LaunchDarkly in events data, LaunchDarkly won't store the private attribute, and
     * the private attribute will not appear on the Contexts list.
     */
    privateAttrs?: Array<string>;

    /**
     * If provided, used with the user key to generate a variation in percentage
     * rollouts
     */
    secondary?: string;
  }
}

export interface UserRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface UserDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

Users.Flags = Flags;
Users.ExpiringUserTargets = ExpiringUserTargets;

export declare namespace Users {
  export {
    type UserRecord as UserRecord,
    type UserRetrieveParams as UserRetrieveParams,
    type UserDeleteParams as UserDeleteParams,
  };

  export {
    Flags as Flags,
    type FlagRetrieveResponse as FlagRetrieveResponse,
    type FlagListResponse as FlagListResponse,
    type FlagRetrieveParams as FlagRetrieveParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagListParams as FlagListParams,
  };

  export {
    ExpiringUserTargets as ExpiringUserTargets,
    type ExpiringUserTargetRetrieveParams as ExpiringUserTargetRetrieveParams,
    type ExpiringUserTargetUpdateParams as ExpiringUserTargetUpdateParams,
  };
}
