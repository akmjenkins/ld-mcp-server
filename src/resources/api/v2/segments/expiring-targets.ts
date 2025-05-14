// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ExpiringTargetsAPI from '../flags/expiring-targets';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ExpiringTargets extends APIResource {
  /**
   * Get a list of a segment's context targets that are scheduled for removal.
   *
   * @example
   * ```ts
   * const expiringTargetGetResponse =
   *   await client.api.v2.segments.expiringTargets.retrieve(
   *     'environmentKey',
   *     { projectKey: 'projectKey', segmentKey: 'segmentKey' },
   *   );
   * ```
   */
  retrieve(
    environmentKey: string,
    params: ExpiringTargetRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ExpiringTargetsAPI.ExpiringTargetGetResponse> {
    const { projectKey, segmentKey } = params;
    return this._client.get(
      path`/api/v2/segments/${projectKey}/${segmentKey}/expiring-targets/${environmentKey}`,
      options,
    );
  }

  /**
   * Update expiring context targets for a segment. Updating a context target
   * expiration uses the semantic patch format.
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
   * expiring context targets.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating expiring context targets</strong></summary>
   *
   * #### addExpiringTarget
   *
   * Schedules a date and time when LaunchDarkly will remove a context from segment
   * targeting. The segment must already have the context as an individual target.
   *
   * ##### Parameters
   *
   * - `targetType`: The type of individual target for this context. Must be either
   *   `included` or `excluded`.
   * - `contextKey`: The context key.
   * - `contextKind`: The kind of context being targeted.
   * - `value`: The date when the context should expire from the segment targeting,
   *   in Unix milliseconds.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addExpiringTarget",
   *       "targetType": "included",
   *       "contextKey": "user-key-123abc",
   *       "contextKind": "user",
   *       "value": 1754092860000
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateExpiringTarget
   *
   * Updates the date and time when LaunchDarkly will remove a context from segment
   * targeting.
   *
   * ##### Parameters
   *
   * - `targetType`: The type of individual target for this context. Must be either
   *   `included` or `excluded`.
   * - `contextKey`: The context key.
   * - `contextKind`: The kind of context being targeted.
   * - `value`: The new date when the context should expire from the segment
   *   targeting, in Unix milliseconds.
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
   *       "targetType": "included",
   *       "contextKey": "user-key-123abc",
   *       "contextKind": "user",
   *       "value": 1754179260000
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeExpiringTarget
   *
   * Removes the scheduled expiration for the context in the segment.
   *
   * ##### Parameters
   *
   * - `targetType`: The type of individual target for this context. Must be either
   *   `included` or `excluded`.
   * - `contextKey`: The context key.
   * - `contextKind`: The kind of context being targeted.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeExpiringTarget",
   *       "targetType": "included",
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
   *   await client.api.v2.segments.expiringTargets.update(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       segmentKey: 'segmentKey',
   *       instructions: [
   *         {
   *           contextKey: 'user@email.com',
   *           contextKind: 'user',
   *           kind: 'updateExpiringTarget',
   *           targetType: 'included',
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
  ): APIPromise<ExpiringTargetsAPI.ExpiringTargetPatchResponse> {
    const { projectKey, segmentKey, ...body } = params;
    return this._client.patch(
      path`/api/v2/segments/${projectKey}/${segmentKey}/expiring-targets/${environmentKey}`,
      { body, ...options },
    );
  }
}

export interface ExpiringTargetRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The segment key
   */
  segmentKey: string;
}

export interface ExpiringTargetUpdateParams {
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
  instructions: Array<ExpiringTargetUpdateParams.Instruction>;

  /**
   * Body param: Optional description of changes
   */
  comment?: string;
}

export namespace ExpiringTargetUpdateParams {
  export interface Instruction {
    /**
     * A unique key used to represent the context
     */
    contextKey: string;

    /**
     * The kind of context
     */
    contextKind: string;

    /**
     * The type of change to make to the context's removal date from this segment
     */
    kind: 'addExpiringTarget' | 'updateExpiringTarget' | 'removeExpiringTarget';

    /**
     * The segment's target type
     */
    targetType: 'included' | 'excluded';

    /**
     * The time, in Unix milliseconds, when the context should be removed from this
     * segment. Required if <code>kind</code> is <code>addExpiringTarget</code> or
     * <code>updateExpiringTarget</code>.
     */
    value?: number;

    /**
     * The version of the expiring target to update. Optional and only used if
     * <code>kind</code> is <code>updateExpiringTarget</code>. If included, update will
     * fail if version doesn't match current version of the expiring target.
     */
    version?: number;
  }
}

export declare namespace ExpiringTargets {
  export {
    type ExpiringTargetRetrieveParams as ExpiringTargetRetrieveParams,
    type ExpiringTargetUpdateParams as ExpiringTargetUpdateParams,
  };
}
