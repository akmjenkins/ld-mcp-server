// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DeploymentsAPI from './deployments';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Deployments extends APIResource {
  /**
   * Get deployment frequency chart data. Engineering insights displays deployment
   * frequency data in the
   * [deployment frequency metric view](https://launchdarkly.com/docs/home/observability/deployments).
   *
   * ### Expanding the chart response
   *
   * LaunchDarkly supports expanding the chart response to include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `metrics` includes details on the metrics related to deployment frequency
   *
   * For example, use `?expand=metrics` to include the `metrics` field in the
   * response. By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const insightsChart =
   *   await client.api.v2.engineeringInsights.charts.deployments.retrieveFrequency();
   * ```
   */
  retrieveFrequency(
    query: DeploymentRetrieveFrequencyParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsightsChart> {
    return this._client.get('/api/v2/engineering-insights/charts/deployments/frequency', {
      query,
      ...options,
    });
  }
}

export interface InsightsChart {
  /**
   * Metadata for the chart
   */
  metadata: InsightsChart.Metadata;

  /**
   * Series data for the chart
   */
  series: Array<InsightsChart.Series>;
}

export namespace InsightsChart {
  /**
   * Metadata for the chart
   */
  export interface Metadata {
    /**
     * Metadata values
     */
    summary: Record<string, unknown>;

    /**
     * X-axis metadata
     */
    xAxis: DeploymentsAPI.InsightsChartSeriesMetadataAxis;

    /**
     * Y-axis metadata
     */
    yAxis: DeploymentsAPI.InsightsChartSeriesMetadataAxis;

    /**
     * Metrics for the given chart data, included when expanded
     */
    metrics?: Record<string, Metadata.Metrics>;

    /**
     * Name of the chart
     */
    name?: string;
  }

  export namespace Metadata {
    export interface Metrics {
      /**
       * Metric indicator tier
       */
      indicator: string;

      /**
       * Metric modifier
       */
      modifier: string;

      /**
       * Metric indicator tiers
       */
      tiers: Array<Metrics.Tier>;

      /**
       * Metric unit
       */
      unit: string;

      /**
       * Metric value
       */
      value: number;
    }

    export namespace Metrics {
      export interface Tier {
        /**
         * Metric indicator description
         */
        description: string;

        /**
         * Metric indicator tier
         */
        indicator: string;
      }
    }
  }

  export interface Series {
    /**
     * Data points for the series
     */
    data: Array<Series.Data>;

    /**
     * Metadata for the series
     */
    metadata: Series.Metadata;
  }

  export namespace Series {
    export interface Data {
      /**
       * X-axis value
       */
      x: number;

      /**
       * Y-axis value
       */
      y: number;

      /**
       * Additional values for the data point
       */
      values?: Record<string, unknown>;
    }

    /**
     * Metadata for the series
     */
    export interface Metadata {
      /**
       * Name of the series
       */
      name: string;

      /**
       * Bounds for the series data
       */
      bounds?: Array<Metadata.Bound>;

      /**
       * Aggregate count of the series values
       */
      count?: number;
    }

    export namespace Metadata {
      export interface Bound {
        /**
         * Name of the bound
         */
        name: string;

        /**
         * Value of the bound
         */
        value: number;
      }
    }
  }
}

export interface InsightsChartSeriesMetadataAxis {
  /**
   * Unit of the axis
   */
  unit: string;
}

export interface DeploymentRetrieveFrequencyParams {
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
   * Options: `metrics`
   */
  expand?: string;

  /**
   * Unix timestamp in milliseconds. Default value is 7 days ago.
   */
  from?: string;

  /**
   * Options: `application`, `kind`
   */
  groupBy?: string;

  /**
   * The project key
   */
  projectKey?: string;

  /**
   * Unix timestamp in milliseconds. Default value is now.
   */
  to?: string;
}

export declare namespace Deployments {
  export {
    type InsightsChart as InsightsChart,
    type InsightsChartSeriesMetadataAxis as InsightsChartSeriesMetadataAxis,
    type DeploymentRetrieveFrequencyParams as DeploymentRetrieveFrequencyParams,
  };
}
