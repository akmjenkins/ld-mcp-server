// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as DeploymentsAPI from './deployments';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Flags extends APIResource {
  /**
   * Get stale flags chart data. Engineering insights displays stale flags data in
   * the
   * [flag health metric view](https://launchdarkly.com/docs/home/observability/flag-health).
   *
   * ### Expanding the chart response
   *
   * LaunchDarkly supports expanding the chart response to include additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `metrics` includes details on the metrics related to stale flags
   *
   * For example, use `?expand=metrics` to include the `metrics` field in the
   * response. By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const insightsChart =
   *   await client.api.v2.engineeringInsights.charts.flags.retrieveStale(
   *     {
   *       environmentKey: 'environmentKey',
   *       projectKey: 'projectKey',
   *     },
   *   );
   * ```
   */
  retrieveStale(
    query: FlagRetrieveStaleParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentsAPI.InsightsChart> {
    return this._client.get('/api/v2/engineering-insights/charts/flags/stale', { query, ...options });
  }

  /**
   * Get flag status chart data. To learn more, read
   * [Flag statuses](https://launchdarkly.com/docs/home/observability/flag-health#flag-statuses).
   *
   * @example
   * ```ts
   * const insightsChart =
   *   await client.api.v2.engineeringInsights.charts.flags.retrieveStatus(
   *     {
   *       environmentKey: 'environmentKey',
   *       projectKey: 'projectKey',
   *     },
   *   );
   * ```
   */
  retrieveStatus(
    query: FlagRetrieveStatusParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentsAPI.InsightsChart> {
    return this._client.get('/api/v2/engineering-insights/charts/flags/status', { query, ...options });
  }
}

export interface FlagRetrieveStaleParams {
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
   * Options: `metrics`
   */
  expand?: string;

  /**
   * Property to group results by. Options: `maintainer`
   */
  groupBy?: string;

  /**
   * Comma-separated list of individual maintainers to filter results.
   */
  maintainerId?: string;

  /**
   * Comma-separated list of team maintainer keys to filter results.
   */
  maintainerTeamKey?: string;
}

export interface FlagRetrieveStatusParams {
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
}

export declare namespace Flags {
  export {
    type FlagRetrieveStaleParams as FlagRetrieveStaleParams,
    type FlagRetrieveStatusParams as FlagRetrieveStatusParams,
  };
}
