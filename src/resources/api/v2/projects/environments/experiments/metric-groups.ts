// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as StatisticsAPI from '../../../code-refs/statistics';
import * as MetricGroupsAPI from '../../metric-groups';
import * as MetricsAPI from './metrics';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class MetricGroups extends APIResource {
  /**
   * Get results from an experiment for a particular metric group.
   *
   * @deprecated
   */
  retrieveResults(
    metricGroupKey: string,
    params: MetricGroupRetrieveResultsParams,
    options?: RequestOptions,
  ): APIPromise<MetricGroupRetrieveResultsResponse> {
    const { projectKey, environmentKey, experimentKey, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/experiments/${experimentKey}/metric-groups/${metricGroupKey}/results`,
      { query, ...options },
    );
  }
}

export interface MetricGroupRetrieveResultsResponse {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * An ordered list of the metrics in this metric group, and each of their results
   */
  metrics: Array<MetricGroupRetrieveResultsResponse.Metric>;
}

export namespace MetricGroupRetrieveResultsResponse {
  export interface Metric {
    /**
     * Metric metadata
     */
    metric: MetricGroupsAPI.MetricInGroupRep;

    /**
     * The results of this metric
     */
    results: MetricsAPI.ExperimentBayesianResultsRep;
  }
}

export interface MetricGroupRetrieveResultsParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Path param: The experiment key
   */
  experimentKey: string;

  /**
   * Query param: The iteration ID
   */
  iterationId?: string;
}

export declare namespace MetricGroups {
  export {
    type MetricGroupRetrieveResultsResponse as MetricGroupRetrieveResultsResponse,
    type MetricGroupRetrieveResultsParams as MetricGroupRetrieveResultsParams,
  };
}
