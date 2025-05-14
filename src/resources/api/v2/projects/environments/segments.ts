// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as StatisticsAPI from '../../code-refs/statistics';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Segments extends APIResource {
  /**
   * For a given context instance with attributes, get membership details for all
   * segments. In the request body, pass in the context instance.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.environments.segments.evaluate(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       body: {
   *         address: 'bar',
   *         jobFunction: 'bar',
   *         key: 'bar',
   *         kind: 'bar',
   *         name: 'bar',
   *       },
   *     },
   *   );
   * ```
   */
  evaluate(
    environmentKey: string,
    params: SegmentEvaluateParams,
    options?: RequestOptions,
  ): APIPromise<SegmentEvaluateResponse> {
    const { projectKey, body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/segments/evaluate`,
      { body: body, ...options },
    );
  }
}

export interface SegmentEvaluateResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  items: Array<SegmentEvaluateResponse.Item>;
}

export namespace SegmentEvaluateResponse {
  export interface Item {
    /**
     * The location and content type of related resources
     */
    _links: Record<string, StatisticsAPI.Link>;

    /**
     * A description of the segment's purpose
     */
    description: string;

    /**
     * If the segment is a synced segment, the name of the external source
     */
    external: string;

    /**
     * Whether the context is explicitly included in this segment
     */
    isIndividuallyTargeted: boolean;

    /**
     * Whether the context is a member of this segment, either by explicit inclusion or
     * by rule matching
     */
    isMember: boolean;

    /**
     * Whether the context is captured by this segment's rules. The value of this field
     * is undefined if the context is also explicitly included
     * (<code>isIndividuallyTargeted</code> is <code>true</code>).
     */
    isRuleTargeted: boolean;

    /**
     * A unique key used to reference the segment
     */
    key: string;

    /**
     * A human-friendly name for the segment
     */
    name: string;

    /**
     * Whether this is an unbounded segment. Unbounded segments, also called big
     * segments, may be list-based segments with more than 15,000 entries, or synced
     * segments.
     */
    unbounded: boolean;
  }
}

export interface SegmentEvaluateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param:
   */
  body: Record<string, unknown>;
}

export declare namespace Segments {
  export {
    type SegmentEvaluateResponse as SegmentEvaluateResponse,
    type SegmentEvaluateParams as SegmentEvaluateParams,
  };
}
