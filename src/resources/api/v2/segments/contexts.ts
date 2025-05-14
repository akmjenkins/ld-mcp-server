// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Contexts extends APIResource {
  /**
   * Update context targets included or excluded in a big segment. Big segments
   * include larger list-based segments and synced segments. This operation does not
   * support standard segments.
   *
   * @example
   * ```ts
   * await client.api.v2.segments.contexts.create('segmentKey', {
   *   projectKey: 'projectKey',
   *   environmentKey: 'environmentKey',
   * });
   * ```
   */
  create(segmentKey: string, params: ContextCreateParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey, ...body } = params;
    return this._client.post(path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}/contexts`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the membership status (included/excluded) for a given context in this big
   * segment. Big segments include larger list-based segments and synced segments.
   * This operation does not support standard segments.
   *
   * @example
   * ```ts
   * const bigSegmentTarget =
   *   await client.api.v2.segments.contexts.retrieve(
   *     'contextKey',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       segmentKey: 'segmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    contextKey: string,
    params: ContextRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BigSegmentTarget> {
    const { projectKey, environmentKey, segmentKey } = params;
    return this._client.get(
      path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}/contexts/${contextKey}`,
      options,
    );
  }
}

export interface BigSegmentTarget {
  /**
   * Indicates whether the target is excluded.<br />Segment rules bypass excluded
   * targets, so they will never be included based on rules. Excluded targets may
   * still be included explicitly.
   */
  excluded: boolean;

  /**
   * Indicates whether the target is included.<br />Included targets are always
   * segment members, regardless of segment rules.
   */
  included: boolean;

  /**
   * The target key
   */
  userKey: string;
}

export interface SegmentUserList {
  add?: Array<string>;

  remove?: Array<string>;
}

export interface SegmentUserState {
  excluded?: SegmentUserList;

  included?: SegmentUserList;
}

export interface ContextCreateParams {
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
  excluded?: SegmentUserList;

  /**
   * Body param:
   */
  included?: SegmentUserList;
}

export interface ContextRetrieveParams {
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

export declare namespace Contexts {
  export {
    type BigSegmentTarget as BigSegmentTarget,
    type SegmentUserList as SegmentUserList,
    type SegmentUserState as SegmentUserState,
    type ContextCreateParams as ContextCreateParams,
    type ContextRetrieveParams as ContextRetrieveParams,
  };
}
