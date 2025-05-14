// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ContextsAPI from './contexts';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Update user context targets included or excluded in a big segment. Big segments
   * include larger list-based segments and synced segments. This operation does not
   * support standard segments.
   *
   * @example
   * ```ts
   * await client.api.v2.segments.users.create('segmentKey', {
   *   projectKey: 'projectKey',
   *   environmentKey: 'environmentKey',
   * });
   * ```
   */
  create(segmentKey: string, params: UserCreateParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey, ...body } = params;
    return this._client.post(path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}/users`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * > ### Contexts are now available
   * >
   * > After you have upgraded your LaunchDarkly SDK to use contexts instead of
   * > users, you should use
   * > [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment)
   * > instead of this endpoint. To learn more, read
   * > [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Get the membership status (included/excluded) for a given user in this big
   * segment. This operation does not support standard segments.
   *
   * @example
   * ```ts
   * const bigSegmentTarget =
   *   await client.api.v2.segments.users.retrieve('userKey', {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *     segmentKey: 'segmentKey',
   *   });
   * ```
   */
  retrieve(
    userKey: string,
    params: UserRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ContextsAPI.BigSegmentTarget> {
    const { projectKey, environmentKey, segmentKey } = params;
    return this._client.get(
      path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}/users/${userKey}`,
      options,
    );
  }
}

export interface UserCreateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Body param:
   */
  excluded?: ContextsAPI.SegmentUserList;

  /**
   * Body param:
   */
  included?: ContextsAPI.SegmentUserList;
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

  /**
   * The segment key
   */
  segmentKey: string;
}

export declare namespace Users {
  export { type UserCreateParams as UserCreateParams, type UserRetrieveParams as UserRetrieveParams };
}
