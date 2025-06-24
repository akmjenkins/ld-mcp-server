// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UsageAPI from './usage';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Mau extends APIResource {
  /**
   * Get a time-series array of the number of monthly active users (MAU) seen by
   * LaunchDarkly from your account. The granularity is always
   * daily.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not
   * return information about active context instances. After you have upgraded your
   * LaunchDarkly SDK to use contexts instead of users, you should not rely on this
   * endpoint. To learn more, read
   * [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).
   *
   * @example
   * ```ts
   * const seriesListRep = await client.api.v2.usage.mau.list();
   * ```
   */
  list(
    query: MauListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageAPI.SeriesListRep> {
    return this._client.get('/api/v2/usage/mau', { query, ...options });
  }

  /**
   * Get time-series arrays of the number of monthly active users (MAU) seen by
   * LaunchDarkly from your account, broken down by the category of users. The
   * category is either `browser`, `mobile`, or `backend`.<br/><br/>Endpoints for
   * retrieving monthly active users (MAU) do not return information about active
   * context instances. After you have upgraded your LaunchDarkly SDK to use contexts
   * instead of users, you should not rely on this endpoint. To learn more, read
   * [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).
   *
   * @example
   * ```ts
   * const seriesListRep =
   *   await client.api.v2.usage.mau.retrieveBycategory();
   * ```
   */
  retrieveBycategory(
    query: MauRetrieveBycategoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageAPI.SeriesListRep> {
    return this._client.get('/api/v2/usage/mau/bycategory', { query, ...options });
  }

  /**
   * Get a list of SDKs. These are all of the SDKs that have connected to
   * LaunchDarkly by monthly active users (MAU) in the requested time
   * period.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not
   * return information about active context instances. After you have upgraded your
   * LaunchDarkly SDK to use contexts instead of users, you should not rely on this
   * endpoint. To learn more, read
   * [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.usage.mau.retrieveSDKs();
   * ```
   */
  retrieveSDKs(
    query: MauRetrieveSDKsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MauRetrieveSDKsResponse> {
    return this._client.get('/api/v2/usage/mau/sdks', { query, ...options });
  }
}

export interface MauRetrieveSDKsResponse {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: unknown };

  /**
   * The list of SDK names
   */
  sdks: Array<string>;
}

export interface MauListParams {
  /**
   * If specified, queries for rolling 30-day, month-to-date, or daily incremental
   * counts. Default is rolling 30-day. Valid values: rolling_30d, month_to_date,
   * daily_incremental
   */
  aggregationType?: string;

  /**
   * If specified, filters results to either anonymous or nonanonymous users.
   */
  anonymous?: string;

  /**
   * Filters results to the specified context kinds. Can be specified multiple times,
   * one query parameter per context kind. If not set, queries for the user context
   * kind.
   */
  contextKind?: string;

  /**
   * An environment key to filter results to. When using this parameter, exactly one
   * project key must also be set. Can be specified multiple times as separate query
   * parameters to view data for multiple environments within a single project.
   */
  environment?: string;

  /**
   * The series of data returned starts from this timestamp. Defaults to 30 days ago.
   */
  from?: string;

  /**
   * If specified, returns data for each distinct value of the given field. Can be
   * specified multiple times to group data by multiple dimensions (for example, to
   * group by both project and SDK). Valid values: project, environment, sdktype,
   * sdk, anonymous, contextKind, sdkAppId
   */
  groupby?: string;

  /**
   * A project key to filter results to. Can be specified multiple times, one query
   * parameter per project key, to view data for multiple projects.
   */
  project?: string;

  /**
   * An SDK name to filter results to. Can be specified multiple times, one query
   * parameter per SDK.
   */
  sdk?: string;

  /**
   * An SDK type to filter results to. Can be specified multiple times, one query
   * parameter per SDK type. Valid values: client, server
   */
  sdktype?: string;

  /**
   * The series of data returned ends at this timestamp. Defaults to the current
   * time.
   */
  to?: string;
}

export interface MauRetrieveBycategoryParams {
  /**
   * The series of data returned starts from this timestamp. Defaults to 30 days ago.
   */
  from?: string;

  /**
   * The series of data returned ends at this timestamp. Defaults to the current
   * time.
   */
  to?: string;
}

export interface MauRetrieveSDKsParams {
  /**
   * The data returned starts from this timestamp. Defaults to seven days ago. The
   * timestamp is in Unix milliseconds, for example, 1656694800000.
   */
  from?: string;

  /**
   * The type of SDK with monthly active users (MAU) to list. Must be either `client`
   * or `server`.
   */
  sdktype?: string;

  /**
   * The data returned ends at this timestamp. Defaults to the current time. The
   * timestamp is in Unix milliseconds, for example, 1657904400000.
   */
  to?: string;
}

export declare namespace Mau {
  export {
    type MauRetrieveSDKsResponse as MauRetrieveSDKsResponse,
    type MauListParams as MauListParams,
    type MauRetrieveBycategoryParams as MauRetrieveBycategoryParams,
    type MauRetrieveSDKsParams as MauRetrieveSDKsParams,
  };
}
