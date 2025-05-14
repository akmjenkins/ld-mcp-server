// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UsageAPI from './usage';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Streams extends APIResource {
  /**
   * Get a time-series array of the number of streaming connections to LaunchDarkly
   * in each time period. The granularity of the data depends on the age of the data
   * requested. If the requested range is within the past two hours, minutely data is
   * returned. If it is within the last two days, hourly data is returned. Otherwise,
   * daily data is returned.
   *
   * @example
   * ```ts
   * const seriesListRep =
   *   await client.api.v2.usage.streams.retrieve('source');
   * ```
   */
  retrieve(
    source: string,
    query: StreamRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageAPI.SeriesListRep> {
    return this._client.get(path`/api/v2/usage/streams/${source}`, { query, ...options });
  }

  /**
   * Get multiple series of the number of streaming connections to LaunchDarkly in
   * each time period, separated by SDK type and version. Information about each
   * series is in the metadata array. The granularity of the data depends on the age
   * of the data requested. If the requested range is within the past 2 hours,
   * minutely data is returned. If it is within the last two days, hourly data is
   * returned. Otherwise, daily data is returned.
   *
   * @example
   * ```ts
   * const seriesListRep =
   *   await client.api.v2.usage.streams.retrieveBysdkversion(
   *     'source',
   *   );
   * ```
   */
  retrieveBysdkversion(
    source: string,
    query: StreamRetrieveBysdkversionParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UsageAPI.SeriesListRep> {
    return this._client.get(path`/api/v2/usage/streams/${source}/bysdkversion`, { query, ...options });
  }

  /**
   * Get a list of SDK version objects, which contain an SDK name and version. These
   * are all of the SDKs that have connected to LaunchDarkly from your account in the
   * past 60 days.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.usage.streams.retrieveSdkversions(
   *     'source',
   *   );
   * ```
   */
  retrieveSdkversions(
    source: string,
    options?: RequestOptions,
  ): APIPromise<StreamRetrieveSdkversionsResponse> {
    return this._client.get(path`/api/v2/usage/streams/${source}/sdkversions`, options);
  }
}

export interface StreamRetrieveSdkversionsResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, unknown>;

  /**
   * The list of SDK names and versions
   */
  sdkVersions: Array<StreamRetrieveSdkversionsResponse.SDKVersion>;
}

export namespace StreamRetrieveSdkversionsResponse {
  export interface SDKVersion {
    /**
     * The SDK name, or "Unknown"
     */
    sdk: string;

    /**
     * The version number, or "Unknown"
     */
    version: string;
  }
}

export interface StreamRetrieveParams {
  /**
   * The series of data returned starts from this timestamp. Defaults to 30 days ago.
   */
  from?: string;

  /**
   * The series of data returned ends at this timestamp. Defaults to the current
   * time.
   */
  to?: string;

  /**
   * The timezone to use for breaks between days when returning daily data.
   */
  tz?: string;
}

export interface StreamRetrieveBysdkversionParams {
  /**
   * The series of data returned starts from this timestamp. Defaults to 24 hours
   * ago.
   */
  from?: string;

  /**
   * If included, this filters the returned series to only those that match this SDK
   * name.
   */
  sdk?: string;

  /**
   * The series of data returned ends at this timestamp. Defaults to the current
   * time.
   */
  to?: string;

  /**
   * The timezone to use for breaks between days when returning daily data.
   */
  tz?: string;

  /**
   * If included, this filters the returned series to only those that match this SDK
   * version.
   */
  version?: string;
}

export declare namespace Streams {
  export {
    type StreamRetrieveSdkversionsResponse as StreamRetrieveSdkversionsResponse,
    type StreamRetrieveParams as StreamRetrieveParams,
    type StreamRetrieveBysdkversionParams as StreamRetrieveBysdkversionParams,
  };
}
