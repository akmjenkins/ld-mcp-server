// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ExpiringUserTargetsAPI from '../flags/expiring-user-targets';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ExpiringUserTargets extends APIResource {
  /**
   * Get a list of flags for which the given user is scheduled for removal.
   *
   * @deprecated
   */
  retrieve(
    environmentKey: string,
    params: ExpiringUserTargetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ExpiringUserTargetsAPI.ExpiringUserTargetGetResponse> {
    const { projectKey, userKey } = params;
    return this._client.get(
      path`/api/v2/users/${projectKey}/${userKey}/expiring-user-targets/${environmentKey}`,
      options,
    );
  }

  /**
   * Schedule the specified user for removal from individual targeting on one or more
   * flags. The user must already be individually targeted for each flag.
   *
   * You can add, update, or remove a scheduled removal date. You can only schedule a
   * user for removal on a single variation per flag.
   *
   * Updating an expiring target uses the semantic patch format. To make a semantic
   * patch request, you must append `domain-model=launchdarkly.semanticpatch` to your
   * `Content-Type` header. To learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
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
   * Adds a date and time that LaunchDarkly will remove the user from the flag's
   * individual targeting.
   *
   * ##### Parameters
   *
   * - `flagKey`: The flag key
   * - `variationId`: ID of a variation on the flag
   * - `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the
   *   user from individual targeting for this flag.
   *
   * #### updateExpireUserTargetDate
   *
   * Updates the date and time that LaunchDarkly will remove the user from the flag's
   * individual targeting.
   *
   * ##### Parameters
   *
   * - `flagKey`: The flag key
   * - `variationId`: ID of a variation on the flag
   * - `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the
   *   user from individual targeting for this flag.
   * - `version`: The version of the expiring user target to update. If included,
   *   update will fail if version doesn't match current version of the expiring user
   *   target.
   *
   * #### removeExpireUserTargetDate
   *
   * Removes the scheduled removal of the user from the flag's individual targeting.
   * The user will remain part of the flag's individual targeting until explicitly
   * removed, or until another removal is scheduled.
   *
   * ##### Parameters
   *
   * - `flagKey`: The flag key
   * - `variationId`: ID of a variation on the flag
   *
   * </details>
   *
   * @deprecated
   */
  update(
    environmentKey: string,
    params: ExpiringUserTargetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExpiringUserTargetsAPI.ExpiringUserTargetPatchResponse> {
    const { projectKey, userKey, ...body } = params;
    return this._client.patch(
      path`/api/v2/users/${projectKey}/${userKey}/expiring-user-targets/${environmentKey}`,
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
   * The user key
   */
  userKey: string;
}

export interface ExpiringUserTargetUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The user key
   */
  userKey: string;

  /**
   * Body param: The instructions to perform when updating
   */
  instructions: Array<ExpiringUserTargetUpdateParams.Instruction>;

  /**
   * Body param: Optional comment describing the change
   */
  comment?: string;
}

export namespace ExpiringUserTargetUpdateParams {
  export interface Instruction {
    /**
     * The flag key
     */
    flagKey: string;

    /**
     * The type of change to make to the removal date for this user from individual
     * targeting for this flag.
     */
    kind: 'addExpireUserTargetDate' | 'updateExpireUserTargetDate' | 'removeExpireUserTargetDate';

    /**
     * ID of a variation on the flag
     */
    variationId: string;

    /**
     * The time, in Unix milliseconds, when LaunchDarkly should remove the user from
     * individual targeting for this flag. Required if <code>kind</code> is
     * <code>addExpireUserTargetDate</code> or <code>updateExpireUserTargetDate</code>.
     */
    value?: number;

    /**
     * The version of the expiring user target to update. Optional and only used if
     * <code>kind</code> is <code>updateExpireUserTargetDate</code>. If included,
     * update will fail if version doesn't match current version of the expiring user
     * target.
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
