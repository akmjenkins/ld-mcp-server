// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ExpiringUserTargetsAPI from '../flags/expiring-user-targets';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ExpiringUserTargets extends APIResource {
  /**
   * > ### Contexts are now available
   * >
   * > After you have upgraded your LaunchDarkly SDK to use contexts instead of
   * > users, you should use
   * > [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment)
   * > instead of this endpoint. To learn more, read
   * > [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Get a list of a segment's user targets that are scheduled for removal.
   *
   * @example
   * ```ts
   * const expiringUserTargetGetResponse =
   *   await client.api.v2.segments.expiringUserTargets.retrieve(
   *     'environmentKey',
   *     { projectKey: 'projectKey', segmentKey: 'segmentKey' },
   *   );
   * ```
   */
  retrieve(
    environmentKey: string,
    params: ExpiringUserTargetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ExpiringUserTargetsAPI.ExpiringUserTargetGetResponse> {
    const { projectKey, segmentKey } = params;
    return this._client.get(
      path`/api/v2/segments/${projectKey}/${segmentKey}/expiring-user-targets/${environmentKey}`,
      options,
    );
  }

  /**
   * > ### Contexts are now available
   * >
   * > After you have upgraded your LaunchDarkly SDK to use contexts instead of
   * > users, you should use
   * > [Update expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/patch-expiring-targets-for-segment)
   * > instead of this endpoint. To learn more, read
   * > [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Update expiring user targets for a segment. Updating a user target expiration
   * uses the semantic patch format.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * If the request is well-formed but any of its instructions failed to process,
   * this operation returns status code `200`. In this case, the response `errors`
   * array will be non-empty.
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * expiring user targets.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>
   *
   * #### addExpireUserTargetDate
   *
   * Schedules a date and time when LaunchDarkly will remove a user from segment
   * targeting.
   *
   * ##### Parameters
   *
   * - `targetType`: A segment's target type, must be either `included` or
   *   `excluded`.
   * - `userKey`: The user key.
   * - `value`: The date when the user should expire from the segment targeting, in
   *   Unix milliseconds.
   *
   * #### updateExpireUserTargetDate
   *
   * Updates the date and time when LaunchDarkly will remove a user from segment
   * targeting.
   *
   * ##### Parameters
   *
   * - `targetType`: A segment's target type, must be either `included` or
   *   `excluded`.
   * - `userKey`: The user key.
   * - `value`: The new date when the user should expire from the segment targeting,
   *   in Unix milliseconds.
   * - `version`: The segment version.
   *
   * #### removeExpireUserTargetDate
   *
   * Removes the scheduled expiration for the user in the segment.
   *
   * ##### Parameters
   *
   * - `targetType`: A segment's target type, must be either `included` or
   *   `excluded`.
   * - `userKey`: The user key.
   *
   * </details>
   *
   * @example
   * ```ts
   * const expiringUserTargetPatchResponse =
   *   await client.api.v2.segments.expiringUserTargets.update(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       segmentKey: 'segmentKey',
   *       instructions: [
   *         {
   *           kind: 'addExpireUserTargetDate',
   *           targetType: 'included',
   *           userKey: 'userKey',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    environmentKey: string,
    params: ExpiringUserTargetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExpiringUserTargetsAPI.ExpiringUserTargetPatchResponse> {
    const { projectKey, segmentKey, ...body } = params;
    return this._client.patch(
      path`/api/v2/segments/${projectKey}/${segmentKey}/expiring-user-targets/${environmentKey}`,
      { body, ...options },
    );
  }
}

export interface ExpiringUserTargetRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The segment key
   */
  segmentKey: string;
}

export interface ExpiringUserTargetUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The segment key
   */
  segmentKey: string;

  /**
   * Body param: Semantic patch instructions for the desired changes to the resource
   */
  instructions: Array<ExpiringUserTargetUpdateParams.Instruction>;

  /**
   * Body param: Optional description of changes
   */
  comment?: string;
}

export namespace ExpiringUserTargetUpdateParams {
  export interface Instruction {
    /**
     * The type of change to make to the user's removal date from this segment
     */
    kind: 'addExpireUserTargetDate' | 'updateExpireUserTargetDate' | 'removeExpireUserTargetDate';

    /**
     * The segment's target type
     */
    targetType: 'included' | 'excluded';

    /**
     * A unique key used to represent the user
     */
    userKey: string;

    /**
     * The time, in Unix milliseconds, when the user should be removed from this
     * segment. Required if <code>kind</code> is <code>addExpireUserTargetDate</code>
     * or <code>updateExpireUserTargetDate</code>.
     */
    value?: number;

    /**
     * The version of the segment to update. Required if <code>kind</code> is
     * <code>updateExpireUserTargetDate</code>.
     */
    version?: number;
  }
}

export declare namespace ExpiringUserTargets {
  export {
    type ExpiringUserTargetRetrieveParams as ExpiringUserTargetRetrieveParams,
    type ExpiringUserTargetUpdateParams as ExpiringUserTargetUpdateParams,
  };
}
