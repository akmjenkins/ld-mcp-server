// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ExpiringTargets extends APIResource {
  /**
   * Get a list of context targets on a feature flag that are scheduled for removal.
   *
   * @example
   * ```ts
   * const expiringTargetGetResponse =
   *   await client.api.v2.flags.expiringTargets.retrieve(
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
    params: ExpiringTargetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ExpiringTargetGetResponse> {
    const { projectKey, featureFlagKey } = params;
    return this._client.get(
      path`/api/v2/flags/${projectKey}/${featureFlagKey}/expiring-targets/${environmentKey}`,
      options,
    );
  }

  /**
   * Schedule a context for removal from individual targeting on a feature flag. The
   * flag must already individually target the context.
   *
   * You can add, update, or remove a scheduled removal date. You can only schedule a
   * context for removal on a single variation per flag.
   *
   * Updating an expiring target uses the semantic patch format. To make a semantic
   * patch request, you must append `domain-model=launchdarkly.semanticpatch` to your
   * `Content-Type` header. To learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * expiring targets.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating expiring targets</strong></summary>
   *
   * #### addExpiringTarget
   *
   * Adds a date and time that LaunchDarkly will remove the context from the flag's
   * individual targeting.
   *
   * ##### Parameters
   *
   * - `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the
   *   context from individual targeting for this flag
   * - `variationId`: ID of a variation on the flag
   * - `contextKey`: The context key for the context to remove from individual
   *   targeting
   * - `contextKind`: The kind of context represented by the `contextKey`
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addExpiringTarget",
   *       "value": 1754006460000,
   *       "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
   *       "contextKey": "user-key-123abc",
   *       "contextKind": "user"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateExpiringTarget
   *
   * Updates the date and time that LaunchDarkly will remove the context from the
   * flag's individual targeting
   *
   * ##### Parameters
   *
   * - `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the
   *   context from individual targeting for this flag
   * - `variationId`: ID of a variation on the flag
   * - `contextKey`: The context key for the context to remove from individual
   *   targeting
   * - `contextKind`: The kind of context represented by the `contextKey`
   * - `version`: (Optional) The version of the expiring target to update. If
   *   included, update will fail if version doesn't match current version of the
   *   expiring target.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateExpiringTarget",
   *       "value": 1754006460000,
   *       "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
   *       "contextKey": "user-key-123abc",
   *       "contextKind": "user"
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeExpiringTarget
   *
   * Removes the scheduled removal of the context from the flag's individual
   * targeting. The context will remain part of the flag's individual targeting until
   * you explicitly remove it, or until you schedule another removal.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation on the flag
   * - `contextKey`: The context key for the context to remove from individual
   *   targeting
   * - `contextKind`: The kind of context represented by the `contextKey`
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeExpiringTarget",
   *       "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
   *       "contextKey": "user-key-123abc",
   *       "contextKind": "user"
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * @example
   * ```ts
   * const expiringTargetPatchResponse =
   *   await client.api.v2.flags.expiringTargets.update(
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
    params: ExpiringTargetUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExpiringTargetPatchResponse> {
    const { projectKey, featureFlagKey, ...body } = params;
    return this._client.patch(
      path`/api/v2/flags/${projectKey}/${featureFlagKey}/expiring-targets/${environmentKey}`,
      { body, ...options },
    );
  }
}

export interface ExpiringTarget {
  /**
   * The ID of this expiring target
   */
  _id: string;

  /**
   * Details on the segment or flag this expiring target belongs to, its environment,
   * and its project
   */
  _resourceId: ExpiringTarget._ResourceID;

  /**
   * The version of this expiring target
   */
  _version: number;

  /**
   * A unique key used to represent the context to be removed
   */
  contextKey: string;

  /**
   * The context kind of the context to be removed
   */
  contextKind: string;

  /**
   * A timestamp for when the target expires
   */
  expirationDate: number;

  /**
   * A segment's target type, <code>included</code> or <code>excluded</code>.
   * Included when expiring targets are updated on a segment.
   */
  targetType?: string;

  /**
   * A unique ID used to represent the flag variation. Included when expiring targets
   * are updated on a feature flag.
   */
  variationId?: string;
}

export namespace ExpiringTarget {
  /**
   * Details on the segment or flag this expiring target belongs to, its environment,
   * and its project
   */
  export interface _ResourceID {
    /**
     * The environment key
     */
    environmentKey?: string;

    /**
     * @deprecated Deprecated, use <code>key</code> instead
     */
    flagKey?: string;

    /**
     * The key of the flag or segment
     */
    key?: string;

    /**
     * The type of resource, <code>flag</code> or <code>segment</code>
     */
    kind?: string;

    /**
     * The project key
     */
    projectKey?: string;
  }
}

export interface ExpiringTargetError {
  /**
   * The index of the PATCH instruction where the error occurred
   */
  instructionIndex: number;

  /**
   * The error message related to a failed PATCH instruction
   */
  message: string;
}

export interface ExpiringTargetGetResponse {
  /**
   * A list of expiring targets
   */
  items: Array<ExpiringTarget>;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;
}

export interface ExpiringTargetPatchResponse {
  /**
   * A list of the results from each instruction
   */
  items: Array<ExpiringTarget>;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  errors?: Array<ExpiringTargetError>;

  failedInstructions?: number;

  successfulInstructions?: number;

  totalInstructions?: number;
}

export interface PatchFlagsRequest {
  /**
   * The instructions to perform when updating
   */
  instructions: Array<Record<string, unknown>>;

  /**
   * Optional comment describing the change
   */
  comment?: string;
}

export interface ExpiringTargetRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;
}

export interface ExpiringTargetUpdateParams {
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

export declare namespace ExpiringTargets {
  export {
    type ExpiringTarget as ExpiringTarget,
    type ExpiringTargetError as ExpiringTargetError,
    type ExpiringTargetGetResponse as ExpiringTargetGetResponse,
    type ExpiringTargetPatchResponse as ExpiringTargetPatchResponse,
    type PatchFlagsRequest as PatchFlagsRequest,
    type ExpiringTargetRetrieveParams as ExpiringTargetRetrieveParams,
    type ExpiringTargetUpdateParams as ExpiringTargetUpdateParams,
  };
}
