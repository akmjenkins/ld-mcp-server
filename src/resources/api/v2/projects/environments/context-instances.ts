// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as RelayAutoConfigsAPI from '../../account/relay-auto-configs';
import * as StatisticsAPI from '../../code-refs/statistics';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class ContextInstances extends APIResource {
  /**
   * Get context instances by ID.
   *
   * @example
   * ```ts
   * const contextInstances =
   *   await client.api.v2.projects.environments.contextInstances.retrieve(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ContextInstanceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ContextInstances> {
    const { projectKey, environmentKey, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/context-instances/${id}`,
      { query, ...options },
    );
  }

  /**
   * Delete context instances by ID.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.environments.contextInstances.delete(
   *   'id',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *   },
   * );
   * ```
   */
  delete(id: string, params: ContextInstanceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey } = params;
    return this._client.delete(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/context-instances/${id}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Search for context instances.
   *
   * You can use either the query parameters or the request body parameters. If both
   * are provided, there is an error.
   *
   * To learn more about the filter syntax, read
   * [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
   * To learn more about context instances, read
   * [Context instances](https://launchdarkly.com/docs/home/observability/multi-contexts#context-instances).
   *
   * @example
   * ```ts
   * const contextInstances =
   *   await client.api.v2.projects.environments.contextInstances.search(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  search(
    environmentKey: string,
    params: ContextInstanceSearchParams,
    options?: RequestOptions,
  ): APIPromise<ContextInstances> {
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
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/context-instances/search`,
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

export interface ContextInstances {
  /**
   * The environment ID
   */
  _environmentId: string;

  /**
   * A collection of context instances. Can include multiple versions of context
   * instances that have the same <code>id</code>, but different
   * <code>applicationId</code>s.
   */
  items: Array<ContextInstances.Item>;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * An obfuscated string that references the last context instance on the previous
   * page of results. You can use this for pagination, however, we recommend using
   * the <code>next</code> link instead.
   */
  continuationToken?: string;

  /**
   * The number of unique context instances
   */
  totalCount?: number;
}

export namespace ContextInstances {
  export interface Item {
    /**
     * The context instance ID
     */
    id: string;

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
    _links?: { [key: string]: StatisticsAPI.Link };

    /**
     * A list of the context kinds this context was associated with that the SDK
     * removed because they were marked as anonymous at flag evaluation
     */
    anonymousKinds?: Array<string>;

    /**
     * An identifier representing the application where the LaunchDarkly SDK is running
     */
    applicationId?: string;

    /**
     * Timestamp of the last time an evaluation occurred for this context instance
     */
    lastSeen?: string;
  }
}

export interface ContextInstanceRetrieveParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Query param: Limits results to context instances with sort values after the
   * value specified. You can use this for pagination, however, we recommend using
   * the `next` link we provide instead.
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
   * context instances. Defaults to true.
   */
  includeTotalCount?: boolean;

  /**
   * Query param: Specifies the maximum number of context instances to return (max:
   * 50, default: 20)
   */
  limit?: number;

  /**
   * Query param: Specifies a field by which to sort. LaunchDarkly supports sorting
   * by timestamp in ascending order by specifying `ts` for this value, or descending
   * order by specifying `-ts`.
   */
  sort?: string;
}

export interface ContextInstanceDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface ContextInstanceSearchParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: Limits results to context instances with sort values after the
   * value specified. You can use this for pagination, however, we recommend using
   * the `next` link we provide instead.
   */
  query_continuationToken?: string;

  /**
   * Query param: A comma-separated list of context filters. This endpoint only
   * accepts an `applicationId` filter. To learn more about the filter syntax, read
   * [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
   */
  query_filter?: string;

  /**
   * Query param: Specifies whether to include or omit the total count of matching
   * context instances. Defaults to true.
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
   * Body param: Limits results to context instances with sort values after the value
   * specified. You can use this for pagination, however, we recommend using the
   * <code>next</code> link instead, because this value is an obfuscated string.
   */
  body_continuationToken?: string;

  /**
   * Body param: A collection of context instance filters
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

export declare namespace ContextInstances {
  export {
    type ContextInstances as ContextInstances,
    type ContextInstanceRetrieveParams as ContextInstanceRetrieveParams,
    type ContextInstanceDeleteParams as ContextInstanceDeleteParams,
    type ContextInstanceSearchParams as ContextInstanceSearchParams,
  };
}
