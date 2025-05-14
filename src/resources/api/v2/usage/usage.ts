// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MauAPI from './mau';
import {
  Mau,
  MauListParams,
  MauRetrieveBycategoryParams,
  MauRetrieveSDKsParams,
  MauRetrieveSDKsResponse,
} from './mau';
import * as StreamsAPI from './streams';
import {
  StreamRetrieveBysdkversionParams,
  StreamRetrieveParams,
  StreamRetrieveSdkversionsResponse,
  Streams,
} from './streams';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Usage extends APIResource {
  mau: MauAPI.Mau = new MauAPI.Mau(this._client);
  streams: StreamsAPI.Streams = new StreamsAPI.Streams(this._client);

  /**
   * Get time-series arrays of the number of times a flag is evaluated, broken down
   * by the variation that resulted from that evaluation. The granularity of the data
   * depends on the age of the data requested. If the requested range is within the
   * past two hours, minutely data is returned. If it is within the last two days,
   * hourly data is returned. Otherwise, daily data is returned.
   *
   * @example
   * ```ts
   * const seriesListRep = await client.api.v2.usage.retrieve(
   *   'type',
   * );
   * ```
   */
  retrieve(
    type: string,
    query: UsageRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeriesListRep> {
    return this._client.get(path`/api/v2/usage/events/${type}`, { query, ...options });
  }

  /**
   * Get a time-series array of the number of monthly data export events from your
   * account. The granularity is always daily, with a maximum of 31 days.
   *
   * @example
   * ```ts
   * const seriesIntervalsRep =
   *   await client.api.v2.usage.retrieveDataExportEvents();
   * ```
   */
  retrieveDataExportEvents(
    query: UsageRetrieveDataExportEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeriesIntervalsRep> {
    return this._client.get('/api/v2/usage/data-export-events', { query, ...options });
  }

  /**
   * Get a time-series array of the number of monthly experimentation keys from your
   * account. The granularity is always daily, with a maximum of 31 days.
   *
   * @example
   * ```ts
   * const seriesIntervalsRep =
   *   await client.api.v2.usage.retrieveExperimentationKeys();
   * ```
   */
  retrieveExperimentationKeys(
    query: UsageRetrieveExperimentationKeysParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeriesIntervalsRep> {
    return this._client.get('/api/v2/usage/experimentation-keys', { query, ...options });
  }

  /**
   * Get a time-series array of the number of monthly experimentation units from your
   * account. The granularity is always daily, with a maximum of 31 days.
   *
   * @example
   * ```ts
   * const seriesIntervalsRep =
   *   await client.api.v2.usage.retrieveExperimentationUnits();
   * ```
   */
  retrieveExperimentationUnits(
    query: UsageRetrieveExperimentationUnitsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeriesIntervalsRep> {
    return this._client.get('/api/v2/usage/experimentation-units', { query, ...options });
  }

  /**
   * Get a time-series array of the number of monthly service connections from your
   * account. The granularity is always daily, with a maximum of 31 days.
   *
   * @example
   * ```ts
   * const seriesIntervalsRep =
   *   await client.api.v2.usage.retrieveServiceConnections();
   * ```
   */
  retrieveServiceConnections(
    query: UsageRetrieveServiceConnectionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeriesIntervalsRep> {
    return this._client.get('/api/v2/usage/service-connections', { query, ...options });
  }
}

export interface SeriesIntervalsRep {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, unknown>;

  /**
   * An array of timestamps and values for a given meter
   */
  series: Array<SeriesIntervalsRep.Series>;
}

export namespace SeriesIntervalsRep {
  export interface Series {
    /**
     * The timestamp
     */
    time: number;

    /**
     * The value for the given timestamp
     */
    value: number;
  }
}

export interface SeriesListRep {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, unknown>;

  /**
   * Metadata about each series
   */
  metadata: Array<Record<string, unknown>>;

  /**
   * An array of data points with timestamps. Each element of the array is an object
   * with a 'time' field, whose value is the timestamp, and one or more key fields.
   * If there are multiple key fields, they are labeled '0', '1', and so on, and are
   * explained in the <code>metadata</code>.
   */
  series: Array<Record<string, number>>;
}

export interface UsageRetrieveParams {
  /**
   * The series of data returned starts from this timestamp. Defaults to 24 hours
   * ago.
   */
  from?: string;

  /**
   * The series of data returned ends at this timestamp. Defaults to the current
   * time.
   */
  to?: string;
}

export interface UsageRetrieveDataExportEventsParams {
  /**
   * An environment key. If specified, `projectKey` is required and results apply to
   * the corresponding environment in this project.
   */
  environmentKey?: string;

  /**
   * The series of data returned starts from this timestamp (Unix seconds). Defaults
   * to the beginning of the current month.
   */
  from?: string;

  /**
   * A project key. If specified, `environmentKey` is required and results apply to
   * the corresponding environment in this project.
   */
  projectKey?: string;

  /**
   * The series of data returned ends at this timestamp (Unix seconds). Defaults to
   * the current time.
   */
  to?: string;
}

export interface UsageRetrieveExperimentationKeysParams {
  /**
   * An environment key. If specified, `projectKey` is required and results apply to
   * the corresponding environment in this project.
   */
  environmentKey?: string;

  /**
   * The series of data returned starts from this timestamp (Unix seconds). Defaults
   * to the beginning of the current month.
   */
  from?: string;

  /**
   * A project key. If specified, `environmentKey` is required and results apply to
   * the corresponding environment in this project.
   */
  projectKey?: string;

  /**
   * The series of data returned ends at this timestamp (Unix seconds). Defaults to
   * the current time.
   */
  to?: string;
}

export interface UsageRetrieveExperimentationUnitsParams {
  /**
   * An environment key. If specified, `projectKey` is required and results apply to
   * the corresponding environment in this project.
   */
  environmentKey?: string;

  /**
   * The series of data returned starts from this timestamp (Unix seconds). Defaults
   * to the beginning of the current month.
   */
  from?: string;

  /**
   * A project key. If specified, `environmentKey` is required and results apply to
   * the corresponding environment in this project.
   */
  projectKey?: string;

  /**
   * The series of data returned ends at this timestamp (Unix seconds). Defaults to
   * the current time.
   */
  to?: string;
}

export interface UsageRetrieveServiceConnectionsParams {
  /**
   * An environment key. If specified, `projectKey` is required and results apply to
   * the corresponding environment in this project.
   */
  environmentKey?: string;

  /**
   * The series of data returned starts from this timestamp (Unix seconds). Defaults
   * to the beginning of the current month.
   */
  from?: string;

  /**
   * A project key. If specified, `environmentKey` is required and results apply to
   * the corresponding environment in this project.
   */
  projectKey?: string;

  /**
   * The series of data returned ends at this timestamp (Unix seconds). Defaults to
   * the current time.
   */
  to?: string;
}

Usage.Mau = Mau;
Usage.Streams = Streams;

export declare namespace Usage {
  export {
    type SeriesIntervalsRep as SeriesIntervalsRep,
    type SeriesListRep as SeriesListRep,
    type UsageRetrieveParams as UsageRetrieveParams,
    type UsageRetrieveDataExportEventsParams as UsageRetrieveDataExportEventsParams,
    type UsageRetrieveExperimentationKeysParams as UsageRetrieveExperimentationKeysParams,
    type UsageRetrieveExperimentationUnitsParams as UsageRetrieveExperimentationUnitsParams,
    type UsageRetrieveServiceConnectionsParams as UsageRetrieveServiceConnectionsParams,
  };

  export {
    Mau as Mau,
    type MauRetrieveSDKsResponse as MauRetrieveSDKsResponse,
    type MauListParams as MauListParams,
    type MauRetrieveBycategoryParams as MauRetrieveBycategoryParams,
    type MauRetrieveSDKsParams as MauRetrieveSDKsParams,
  };

  export {
    Streams as Streams,
    type StreamRetrieveSdkversionsResponse as StreamRetrieveSdkversionsResponse,
    type StreamRetrieveParams as StreamRetrieveParams,
    type StreamRetrieveBysdkversionParams as StreamRetrieveBysdkversionParams,
  };
}
