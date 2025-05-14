// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as StatisticsAPI from '../../../code-refs/statistics';
import { APIPromise } from '../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Followers extends APIResource {
  /**
   * Add a member as a follower to a flag in a project and environment
   *
   * @example
   * ```ts
   * await client.api.v2.projects.flags.environments.followers.update(
   *   'memberId',
   *   {
   *     projectKey: 'projectKey',
   *     featureFlagKey: 'featureFlagKey',
   *     environmentKey: 'environmentKey',
   *   },
   * );
   * ```
   */
  update(memberID: string, params: FollowerUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.put(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/followers/${memberID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Get a list of members following a flag in a project and environment
   *
   * @example
   * ```ts
   * const followers =
   *   await client.api.v2.projects.flags.environments.followers.list(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *     },
   *   );
   * ```
   */
  list(
    environmentKey: string,
    params: FollowerListParams,
    options?: RequestOptions,
  ): APIPromise<FollowerListResponse> {
    const { projectKey, featureFlagKey } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/followers`,
      options,
    );
  }

  /**
   * Remove a member as a follower to a flag in a project and environment
   *
   * @example
   * ```ts
   * await client.api.v2.projects.flags.environments.followers.delete(
   *   'memberId',
   *   {
   *     projectKey: 'projectKey',
   *     featureFlagKey: 'featureFlagKey',
   *     environmentKey: 'environmentKey',
   *   },
   * );
   * ```
   */
  delete(memberID: string, params: FollowerDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.delete(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/followers/${memberID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface FollowFlagMember {
  /**
   * The member's ID
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The member's email address
   */
  email: string;

  /**
   * The member's built-in role. If the member has no custom roles, this role will be
   * in effect.
   */
  role: string;

  /**
   * The member's first name
   */
  firstName?: string;

  /**
   * The member's last name
   */
  lastName?: string;
}

export interface FollowerListResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of members who are following this flag
   */
  items: Array<FollowFlagMember>;
}

export interface FollowerUpdateParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface FollowerListParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;
}

export interface FollowerDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export declare namespace Followers {
  export {
    type FollowFlagMember as FollowFlagMember,
    type FollowerListResponse as FollowerListResponse,
    type FollowerUpdateParams as FollowerUpdateParams,
    type FollowerListParams as FollowerListParams,
    type FollowerDeleteParams as FollowerDeleteParams,
  };
}
