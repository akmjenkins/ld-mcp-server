// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as RelayAutoConfigsAPI from '../../account/relay-auto-configs';
import * as StatisticsAPI from '../../code-refs/statistics';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Contexts extends APIResource {
  /**
   * Get contexts based on kind and key.
   *
   * @example
   * ```ts
   * const contexts =
   *   await client.api.v2.projects.environments.contexts.retrieve(
   *     'key',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       kind: 'kind',
   *     },
   *   );
   * ```
   */
  retrieve(key: string, params: ContextRetrieveParams, options?: RequestOptions): APIPromise<Contexts> {
    const { projectKey, environmentKey, kind, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/contexts/${kind}/${key}`,
      { query, ...options },
    );
  }

  /**
   * Enable or disable a feature flag for a context based on its context kind and
   * key.
   *
   * Omitting the `setting` attribute from the request body, or including a `setting`
   * of `null`, erases the current setting for a context.
   *
   * If you previously patched the flag, and the patch included the context's data,
   * LaunchDarkly continues to use that data. If LaunchDarkly has never encountered
   * the combination of the context's key and kind before, it calculates the flag
   * values based on the context kind and key.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.environments.contexts.update(
   *   'featureFlagKey',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *     contextKind: 'contextKind',
   *     contextKey: 'contextKey',
   *   },
   * );
   * ```
   */
  update(featureFlagKey: string, params: ContextUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey, contextKind, contextKey, ...body } = params;
    return this._client.put(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/contexts/${contextKind}/${contextKey}/flags/${featureFlagKey}`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Search for contexts.
   *
   * You can use either the query parameters or the request body parameters. If both
   * are provided, there is an error.
   *
   * To learn more about the filter syntax, read
   * [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
   * To learn more about contexts, read
   * [Contexts and context kinds](https://launchdarkly.com/docs/home/observability/contexts#contexts-and-context-kinds).
   *
   * @example
   * ```ts
   * const contexts =
   *   await client.api.v2.projects.environments.contexts.search(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  search(
    environmentKey: string,
    params: ContextSearchParams,
    options?: RequestOptions,
  ): APIPromise<Contexts> {
    const {
      projectKey,
      query_continuationToken,
      query_filter,
      includeTotalCount,
      query_limit,
      query_sort,
      ...body
    } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/contexts/search`,
      {
        query: {
          continuationToken: query_continuationToken,
          filter: query_filter,
          includeTotalCount,
          limit: query_limit,
          sort: query_sort,
        },
        body,
        ...options,
      },
    );
  }
}

export interface Contexts {
  /**
   * The environment ID where the context was evaluated
   */
  _environmentId: string;

  /**
   * A collection of contexts. Can include multiple versions of contexts that have
   * the same <code>kind</code> and <code>key</code>, but different
   * <code>applicationId</code>s.
   */
  items: Array<Contexts.Item>;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * An obfuscated string that references the last context instance on the previous
   * page of results. You can use this for pagination, however, we recommend using
   * the <code>next</code> link instead.
   */
  continuationToken?: string;

  /**
   * The number of contexts
   */
  totalCount?: number;
}

export namespace Contexts {
  export interface Item {
    /**
     * The context, including its kind and attributes
     */
    context: unknown;

    /**
     * Details on the allowed and denied actions for this context instance
     */
    _access?: RelayAutoConfigsAPI.Access;

    /**
     * The location and content type of related resources
     */
    _links?: Record<string, StatisticsAPI.Link>;

    /**
     * An identifier representing the application where the LaunchDarkly SDK is running
     */
    applicationId?: string;

    /**
     * The total number of associated contexts. Associated contexts are contexts that
     * have appeared in the same context instance, that is, they were part of the same
     * flag evaluation.
     */
    associatedContexts?: number;

    /**
     * Timestamp of the last time an evaluation occurred for this context
     */
    lastSeen?: string;
  }
}

export interface ValuePut {
  /**
   * Optional comment describing the change
   */
  comment?: string;

  /**
   * The variation value to set for the context. Must match the flag's variation
   * type.
   */
  setting?: unknown;
}

export interface ContextRetrieveParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Path param: The context kind
   */
  kind: string;

  /**
   * Query param: Limits results to contexts with sort values after the value
   * specified. You can use this for pagination, however, we recommend using the
   * `next` link we provide instead.
   */
  continuationToken?: string;

  /**
   * Query param: A comma-separated list of context filters. This endpoint only
   * accepts an `applicationId` filter. To learn more about the filter syntax, read
   * [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
   */
  filter?: string;

  /**
   * Query param: Specifies whether to include or omit the total count of matching
   * contexts. Defaults to true.
   */
  includeTotalCount?: boolean;

  /**
   * Query param: Specifies the maximum number of items in the collection to return
   * (max: 50, default: 20)
   */
  limit?: number;

  /**
   * Query param: Specifies a field by which to sort. LaunchDarkly supports sorting
   * by timestamp in ascending order by specifying `ts` for this value, or descending
   * order by specifying `-ts`.
   */
  sort?: string;
}

export interface ContextUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Path param: The context kind
   */
  contextKind: string;

  /**
   * Path param: The context key
   */
  contextKey: string;

  /**
   * Body param: Optional comment describing the change
   */
  comment?: string;

  /**
   * Body param: The variation value to set for the context. Must match the flag's
   * variation type.
   */
  setting?: unknown;
}

export interface ContextSearchParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: Limits results to contexts with sort values after the value
   * specified. You can use this for pagination, however, we recommend using the
   * `next` link we provide instead.
   */
  query_continuationToken?: string;

  /**
   * Query param: A comma-separated list of context filters. To learn more about the
   * filter syntax, read
   * [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
   */
  query_filter?: string;

  /**
   * Query param: Specifies whether to include or omit the total count of matching
   * contexts. Defaults to true.
   */
  includeTotalCount?: boolean;

  /**
   * Query param: Specifies the maximum number of items in the collection to return
   * (max: 50, default: 20)
   */
  query_limit?: number;

  /**
   * Query param: Specifies a field by which to sort. LaunchDarkly supports sorting
   * by timestamp in ascending order by specifying `ts` for this value, or descending
   * order by specifying `-ts`.
   */
  query_sort?: string;

  /**
   * Body param: Limits results to contexts with sort values after the value
   * specified. You can use this for pagination, however, we recommend using the
   * <code>next</code> link instead, because this value is an obfuscated string.
   */
  body_continuationToken?: string;

  /**
   * Body param: A collection of context filters
   */
  body_filter?: string;

  /**
   * Body param: Specifies the maximum number of items in the collection to return
   * (max: 50, default: 20)
   */
  body_limit?: number;

  /**
   * Body param: Specifies a field by which to sort. LaunchDarkly supports sorting by
   * timestamp in ascending order by specifying <code>ts</code> for this value, or
   * descending order by specifying <code>-ts</code>.
   */
  body_sort?: string;
}

export declare namespace Contexts {
  export {
    type Contexts as Contexts,
    type ValuePut as ValuePut,
    type ContextRetrieveParams as ContextRetrieveParams,
    type ContextUpdateParams as ContextUpdateParams,
    type ContextSearchParams as ContextSearchParams,
  };
}
