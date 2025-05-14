// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import * as ExpiringTargetsAPI from './expiring-targets';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ExpiringUserTargets extends APIResource {
  /**
   * > ### Contexts are now available
   * >
   * > After you have upgraded your LaunchDarkly SDK to use contexts instead of
   * > users, you should use
   * > [Get expiring context targets for feature flag](https://launchdarkly.com/docs/api/feature-flags/get-expiring-context-targets)
   * > instead of this endpoint. To learn more, read
   * > [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Get a list of user targets on a feature flag that are scheduled for removal.
   *
   * @example
   * ```ts
   * const expiringUserTargetGetResponse =
   *   await client.api.v2.flags.expiringUserTargets.retrieve(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    environmentKey: string,
    params: ExpiringUserTargetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ExpiringUserTargetGetResponse> {
    const { projectKey, featureFlagKey } = params;
    return this._client.get(
      path`/api/v2/flags/${projectKey}/${featureFlagKey}/expiring-user-targets/${environmentKey}`,
      options,
    );
  }

  /**
   * > ### Contexts are now available
   * >
   * > After you have upgraded your LaunchDarkly SDK to use contexts instead of
   * > users, you should use
   * > [Update expiring context targets on feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-expiring-targets)
   * > instead of this endpoint. To learn more, read
   * > [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * Schedule a target for removal from individual targeting on a feature flag. The
   * flag must already serve a variation to specific targets based on their key.
   *
   * You can add, update, or remove a scheduled removal date. You can only schedule a
   * target for removal on a single variation per flag.
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
   * - `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the
   *   user from individual targeting for this flag
   * - `variationId`: ID of a variation on the flag
   * - `userKey`: The user key for the user to remove from individual targeting
   *
   * #### updateExpireUserTargetDate
   *
   * Updates the date and time that LaunchDarkly will remove the user from the flag's
   * individual targeting.
   *
   * ##### Parameters
   *
   * - `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the
   *   user from individual targeting for this flag
   * - `variationId`: ID of a variation on the flag
   * - `userKey`: The user key for the user to remove from individual targeting
   * - `version`: (Optional) The version of the expiring user target to update. If
   *   included, update will fail if version doesn't match current version of the
   *   expiring user target.
   *
   * #### removeExpireUserTargetDate
   *
   * Removes the scheduled removal of the user from the flag's individual targeting.
   * The user will remain part of the flag's individual targeting until you
   * explicitly remove them, or until you schedule another removal.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation on the flag
   * - `userKey`: The user key for the user to remove from individual targeting
   *
   * </details>
   *
   * @example
   * ```ts
   * const expiringUserTargetPatchResponse =
   *   await client.api.v2.flags.expiringUserTargets.update(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       instructions: [
   *         {
   *           kind: 'bar',
   *           userKey: 'bar',
   *           value: 'bar',
   *           variationId: 'bar',
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
  ): APIPromise<ExpiringUserTargetPatchResponse> {
    const { projectKey, featureFlagKey, ...body } = params;
    return this._client.patch(
      path`/api/v2/flags/${projectKey}/${featureFlagKey}/expiring-user-targets/${environmentKey}`,
      { body, ...options },
    );
  }
}

export interface ExpiringUserTargetGetResponse {
  /**
   * An array of expiring user targets
   */
  items: Array<ExpiringUserTargetItem>;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;
}

export interface ExpiringUserTargetItem {
  /**
   * The ID of this expiring user target
   */
  _id: string;

  /**
   * Details on the resource from which the user is expiring
   */
  _resourceId: ExpiringUserTargetItem._ResourceID;

  /**
   * The version of this expiring user target
   */
  _version: number;

  /**
   * A timestamp for when the user target expires
   */
  expirationDate: number;

  /**
   * A unique key used to represent the user
   */
  userKey: string;

  /**
   * A segment's target type. Included when expiring user targets are updated on a
   * segment.
   */
  targetType?: string;

  /**
   * A unique key used to represent the flag variation. Included when expiring user
   * targets are updated on a feature flag.
   */
  variationId?: string;
}

export namespace ExpiringUserTargetItem {
  /**
   * Details on the resource from which the user is expiring
   */
  export interface _ResourceID {
    environmentKey?: string;

    flagKey?: string;

    key?: string;

    kind?: string;

    projectKey?: string;
  }
}

export interface ExpiringUserTargetPatchResponse {
  /**
   * An array of expiring user targets
   */
  items: Array<ExpiringUserTargetItem>;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * An array of error messages for the failed instructions
   */
  errors?: Array<ExpiringTargetsAPI.ExpiringTargetError>;

  /**
   * The total count of the failed instructions sent in the PATCH request
   */
  failedInstructions?: number;

  /**
   * The total count of successful instructions sent in the PATCH request
   */
  successfulInstructions?: number;

  /**
   * The total count of instructions sent in the PATCH request
   */
  totalInstructions?: number;
}

export interface ExpiringUserTargetRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;
}

export interface ExpiringUserTargetUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Body param: The instructions to perform when updating
   */
  instructions: Array<Record<string, unknown>>;

  /**
   * Body param: Optional comment describing the change
   */
  comment?: string;
}

export declare namespace ExpiringUserTargets {
  export {
    type ExpiringUserTargetGetResponse as ExpiringUserTargetGetResponse,
    type ExpiringUserTargetItem as ExpiringUserTargetItem,
    type ExpiringUserTargetPatchResponse as ExpiringUserTargetPatchResponse,
    type ExpiringUserTargetRetrieveParams as ExpiringUserTargetRetrieveParams,
    type ExpiringUserTargetUpdateParams as ExpiringUserTargetUpdateParams,
  };
}
