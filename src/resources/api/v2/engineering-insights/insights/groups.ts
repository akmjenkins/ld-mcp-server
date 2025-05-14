// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ApplicationsAPI from '../../applications/applications';
import * as StatisticsAPI from '../../code-refs/statistics';
import * as InsightsAPI from './insights';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Groups extends APIResource {
  /**
   * Get insight group
   *
   * ### Expanding the insight group response
   *
   * LaunchDarkly supports expanding the insight group response to include additional
   * fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `scores` includes details on all of the scores used in the engineering
   *   insights metrics views for this group
   * - `environment` includes details on each environment associated with this group
   *
   * For example, use `?expand=scores` to include the `scores` field in the response.
   * By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const insightGroup =
   *   await client.api.v2.engineeringInsights.insights.groups.retrieve(
   *     'insightGroupKey',
   *   );
   * ```
   */
  retrieve(
    insightGroupKey: string,
    query: GroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsightsAPI.InsightGroup> {
    return this._client.get(path`/api/v2/engineering-insights/insights/groups/${insightGroupKey}`, {
      query,
      ...options,
    });
  }

  /**
   * Update an insight group. Updating an insight group uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const insightGroup =
   *   await client.api.v2.engineeringInsights.insights.groups.update(
   *     'insightGroupKey',
   *     { body: [{ op: 'replace', path: '/name' }] },
   *   );
   * ```
   */
  update(
    insightGroupKey: string,
    params: GroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InsightsAPI.InsightGroup> {
    const { body } = params;
    return this._client.patch(path`/api/v2/engineering-insights/insights/groups/${insightGroupKey}`, {
      body: body,
      ...options,
    });
  }

  /**
   * List groups for which you are collecting insights
   *
   * ### Expanding the insight groups collection response
   *
   * LaunchDarkly supports expanding the insight groups collection response to
   * include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `scores` includes details on all of the scores used in the engineering
   *   insights metrics views for each group
   * - `environment` includes details on each environment associated with each group
   * - `metadata` includes counts of the number of insight groups with particular
   *   indicators, such as "excellent," "good," "fair," and so on.
   *
   * For example, use `?expand=scores` to include the `scores` field in the response.
   * By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const groups =
   *   await client.api.v2.engineeringInsights.insights.groups.list();
   * ```
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get('/api/v2/engineering-insights/insights/groups', { query, ...options });
  }

  /**
   * Delete insight group
   *
   * @example
   * ```ts
   * await client.api.v2.engineeringInsights.insights.groups.delete(
   *   'insightGroupKey',
   * );
   * ```
   */
  delete(insightGroupKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/engineering-insights/insights/groups/${insightGroupKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GroupListResponse {
  /**
   * A list of insight groups
   */
  items: Array<InsightsAPI.InsightGroup>;

  /**
   * The total number of insight groups
   */
  totalCount: number;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * Metadata about the insight groups
   */
  metadata?: GroupListResponse.Metadata;

  /**
   * Metadata about the insight scores, when expanded
   */
  scoreMetadata?: InsightsAPI.InsightGroupCollectionScoreMetadata;
}

export namespace GroupListResponse {
  /**
   * Metadata about the insight groups
   */
  export interface Metadata {
    countByIndicator: Metadata.CountByIndicator;
  }

  export namespace Metadata {
    export interface CountByIndicator {
      /**
       * The number of insight groups with an excellent indicator
       */
      excellent: number;

      /**
       * The number of insight groups with a fair indicator
       */
      fair: number;

      /**
       * The number of insight groups with a good indicator
       */
      good: number;

      /**
       * The number of insight groups with a needs attention indicator
       */
      needsAttention: number;

      /**
       * The number of insight groups with a not calculated indicator
       */
      notCalculated: number;

      /**
       * The total number of insight groups
       */
      total: number;

      /**
       * The number of insight groups with an unknown indicator
       */
      unknown: number;
    }
  }
}

export interface GroupRetrieveParams {
  /**
   * Options: `scores`, `environment`
   */
  expand?: string;
}

export interface GroupUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface GroupListParams {
  /**
   * Options: `scores`, `environment`, `metadata`
   */
  expand?: string;

  /**
   * The number of insight groups to return. Default is 20. Must be between 1 and 20
   * inclusive.
   */
  limit?: number;

  /**
   * Where to start in the list. Use this with pagination. For example, an offset of
   * 10 skips the first ten items and then returns the next items in the list, up to
   * the query `limit`.
   */
  offset?: number;

  /**
   * Filter list of insights groups by name.
   */
  query?: string;

  /**
   * Sort flag list by field. Prefix field with <code>-</code> to sort in descending
   * order. Allowed fields: name
   */
  sort?: string;
}

export declare namespace Groups {
  export {
    type GroupListResponse as GroupListResponse,
    type GroupRetrieveParams as GroupRetrieveParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };
}
