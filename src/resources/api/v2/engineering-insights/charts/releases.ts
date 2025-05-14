// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DeploymentsAPI from './deployments';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Releases extends APIResource {
  /**
   * Get release frequency chart data. Engineering insights displays release
   * frequency data in the
   * [release frequency metric view](https://launchdarkly.com/docs/home/observability/releases).
   *
   * @example
   * ```ts
   * const insightsChart =
   *   await client.api.v2.engineeringInsights.charts.releases.retrieveFrequency(
   *     {
   *       environmentKey: 'environmentKey',
   *       projectKey: 'projectKey',
   *     },
   *   );
   * ```
   */
  retrieveFrequency(
    query: ReleaseRetrieveFrequencyParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentsAPI.InsightsChart> {
    return this._client.get('/api/v2/engineering-insights/charts/releases/frequency', { query, ...options });
  }
}

export interface ReleaseRetrieveFrequencyParams {
  /**
   * The environment key
   */
  environmentKey: string;

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
   * Options: `metrics`
   */
  expand?: string;

  /**
   * Unix timestamp in milliseconds. Default value is 7 days ago.
   */
  from?: string;

  /**
   * Filter to include or exclude global events. Default value is `include`. Options:
   * `include`, `exclude`
   */
  global?: string;

  /**
   * Property to group results by. Options: `impact`
   */
  groupBy?: string;

  /**
   * Filter events to those associated with an experiment (`true`) or without an
   * experiment (`false`)
   */
  hasExperiments?: boolean;

  /**
   * Unix timestamp in milliseconds. Default value is now.
   */
  to?: string;
}

export declare namespace Releases {
  export { type ReleaseRetrieveFrequencyParams as ReleaseRetrieveFrequencyParams };
}
