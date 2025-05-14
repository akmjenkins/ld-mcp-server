// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DeploymentsAPI from './deployments';
import {
  DeploymentRetrieveFrequencyParams,
  Deployments,
  InsightsChart,
  InsightsChartSeriesMetadataAxis,
} from './deployments';
import * as FlagsAPI from './flags';
import { FlagRetrieveStaleParams, FlagRetrieveStatusParams, Flags } from './flags';
import * as ReleasesAPI from './releases';
import { ReleaseRetrieveFrequencyParams, Releases } from './releases';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Charts extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  flags: FlagsAPI.Flags = new FlagsAPI.Flags(this._client);
  releases: ReleasesAPI.Releases = new ReleasesAPI.Releases(this._client);

  /**
   * Get lead time chart data. The engineering insights UI displays lead time data in
   * the
   * [lead time metric view](https://launchdarkly.com/docs/home/observability/lead-time).
   *
   * @example
   * ```ts
   * const insightsChart =
   *   await client.api.v2.engineeringInsights.charts.retrieveLeadTime(
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieveLeadTime(
    query: ChartRetrieveLeadTimeParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentsAPI.InsightsChart> {
    return this._client.get('/api/v2/engineering-insights/charts/lead-time', { query, ...options });
  }
}

export interface ChartRetrieveLeadTimeParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * Comma separated list of application keys
   */
  applicationKey?: string;

  /**
   * Duration of intervals for x-axis in milliseconds. Default value is one day
   * (`86400000` milliseconds).
   */
  bucketMs?: number;

  /**
   * Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`.
   */
  bucketType?: string;

  /**
   * The environment key
   */
  environmentKey?: string;

  /**
   * Options: `metrics`, `percentiles`.
   */
  expand?: string;

  /**
   * Unix timestamp in milliseconds. Default value is 7 days ago.
   */
  from?: number;

  /**
   * Options: `application`, `stage`. Default: `stage`.
   */
  groupBy?: string;

  /**
   * Unix timestamp in milliseconds. Default value is now.
   */
  to?: number;
}

Charts.Deployments = Deployments;
Charts.Flags = Flags;
Charts.Releases = Releases;

export declare namespace Charts {
  export { type ChartRetrieveLeadTimeParams as ChartRetrieveLeadTimeParams };

  export {
    Deployments as Deployments,
    type InsightsChart as InsightsChart,
    type InsightsChartSeriesMetadataAxis as InsightsChartSeriesMetadataAxis,
    type DeploymentRetrieveFrequencyParams as DeploymentRetrieveFrequencyParams,
  };

  export {
    Flags as Flags,
    type FlagRetrieveStaleParams as FlagRetrieveStaleParams,
    type FlagRetrieveStatusParams as FlagRetrieveStatusParams,
  };

  export { Releases as Releases, type ReleaseRetrieveFrequencyParams as ReleaseRetrieveFrequencyParams };
}
