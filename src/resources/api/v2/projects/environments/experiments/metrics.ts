// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as MetricsAPI from './metrics';
import * as StatisticsAPI from '../../../code-refs/statistics';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Metrics extends APIResource {
  /**
   * Get results from an experiment for a particular metric.
   *
   * LaunchDarkly supports one field for expanding the "Get experiment results"
   * response. By default, this field is **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter with the following
   * field:
   *
   * - `traffic` includes the total count of units for each treatment.
   *
   * For example, `expand=traffic` includes the `traffic` field for the project in
   * the response.
   *
   * @example
   * ```ts
   * const experimentBayesianResultsRep =
   *   await client.api.v2.projects.environments.experiments.metrics.retrieveResults(
   *     'metricKey',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       experimentKey: 'experimentKey',
   *     },
   *   );
   * ```
   */
  retrieveResults(
    metricKey: string,
    params: MetricRetrieveResultsParams,
    options?: RequestOptions,
  ): APIPromise<ExperimentBayesianResultsRep> {
    const { projectKey, environmentKey, experimentKey, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/experiments/${experimentKey}/metrics/${metricKey}/results`,
      { query, ...options },
    );
  }
}

export interface ExperimentBayesianResultsRep {
  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  metricSeen?: ExperimentBayesianResultsRep.MetricSeen;

  /**
   * The probability of a Sample Ratio Mismatch
   */
  probabilityOfMismatch?: number;

  /**
   * A list of attribute values and their corresponding treatment results
   */
  results?: Array<ExperimentBayesianResultsRep.Result>;

  /**
   * @deprecated Deprecated, use <code>results</code> instead. Only populated when
   * response does not contain results sliced by multiple attributes.
   */
  treatmentResults?: Array<TreatmentResultRep>;
}

export namespace ExperimentBayesianResultsRep {
  export interface MetricSeen {
    /**
     * Whether the metric has received an event for this iteration
     */
    ever?: boolean;

    /**
     * Timestamp of when the metric most recently received an event for this iteration
     */
    timestamp?: number;
  }

  export interface Result {
    /**
     * An attribute that results are sliced by
     */
    attribute?: string;

    /**
     * Attribute Value for 'attribute'
     */
    attributeValue?: string;

    /**
     * A list of the results for each treatment
     */
    treatmentResults?: Array<MetricsAPI.TreatmentResultRep>;
  }
}

export interface TreatmentResultRep {
  /**
   * The statistical parameters relevant to the Bayesian Beta-Binomial model
   */
  bayesianBeta?: TreatmentResultRep.BayesianBeta;

  /**
   * The statistical parameters relevant to the Bayesian Normal model
   */
  bayesianNormal?: TreatmentResultRep.BayesianNormal;

  /**
   * The outcome-covariate correlation
   */
  correlation?: number;

  /**
   * The imbalance between the covariate mean for the arm and the covariate mean for
   * the experiment
   */
  covariateImbalance?: number;

  /**
   * The range of the metric's values that you should have 90% confidence in.
   */
  credibleInterval?: TreatmentResultRep.CredibleInterval;

  /**
   * The mean of the data, with no priors effecting the result.
   */
  dataMean?: number;

  /**
   * The standard deviation of the data, with no priors effecting the result.
   */
  dataStdDev?: number;

  /**
   * The posterior distribution of the mean of the metric in this variation.
   */
  distribution?: TreatmentResultRep.Distribution;

  /**
   * The sum of the event values for the units exposed to this treatment.
   */
  eventValuesSum?: number;

  /**
   * The average value of the variation in this sample. It doesn’t capture the
   * uncertainty in the measurement, so it should not be the only measurement you use
   * to make decisions.
   */
  mean?: number;

  /**
   * The model used to calculate the results. Parameters specific to this model will
   * be defined under the field under the same name
   */
  model?: 'bayesianNormal' | 'bayesianBeta';

  /**
   * The likelihood that this variation has the biggest effect on the primary metric.
   * The variation with the highest probability is likely the best of the variations
   * you're testing
   */
  pBest?: number;

  /**
   * Estimates of the relative difference between this treatment's mean and the mean
   * of each other treatment
   */
  relativeDifferences?: Array<TreatmentResultRep.RelativeDifference>;

  /**
   * The ratio of the outcome SD to covariate SD
   */
  standardDeviationRatio?: number;

  /**
   * The number of units exposed to this treatment.
   */
  traffic?: number;

  /**
   * The ID of the treatment
   */
  treatmentId?: string;

  /**
   * The name of the treatment
   */
  treatmentName?: string;

  /**
   * The number of units exposed to this treatment that have event values, including
   * those that are configured to default to 0
   */
  units?: number;

  /**
   * The reduction in variance resulting from CUPED
   */
  varianceReduction?: number;
}

export namespace TreatmentResultRep {
  /**
   * The statistical parameters relevant to the Bayesian Beta-Binomial model
   */
  export interface BayesianBeta {
    /**
     * The precision weight of the data mean
     */
    dataWeight?: number;

    /**
     * Sum of converted pseudo-units for prior distribution
     */
    priorAlpha?: number;

    /**
     * Sum of non-converted pseudo-units for prior distribution
     */
    priorBeta?: number;

    /**
     * Mean of the prior distribution
     */
    priorMean?: number;
  }

  /**
   * The statistical parameters relevant to the Bayesian Normal model
   */
  export interface BayesianNormal {
    /**
     * The precision weight of the data mean
     */
    dataWeight?: number;

    /**
     * Mean of the prior distribution
     */
    priorMean?: number;
  }

  /**
   * The range of the metric's values that you should have 90% confidence in.
   */
  export interface CredibleInterval {
    /**
     * The lower bound
     */
    lower?: number;

    /**
     * The upper bound
     */
    upper?: number;
  }

  /**
   * The posterior distribution of the mean of the metric in this variation.
   */
  export interface Distribution {
    /**
     * The type of distribution.
     */
    kind?: 'normal' | 'beta';

    /**
     * The parameters of the distribution. The parameters are different for each
     * distribution type. When <code>kind</code> is <code>normal</code>, the parameters
     * of the distribution are 'mu' and 'sigma'. When <code>kind</code> is
     * <code>beta</code>, the parameters of the distribution are 'alpha' and 'beta.'
     */
    parameters?: Record<string, number>;
  }

  export interface RelativeDifference {
    /**
     * The treatment ID of the treatment against which the relative difference is
     * calculated
     */
    fromTreatmentId?: string;

    /**
     * A lower bound of the relative difference between the treatment and the
     * <code>fromTreatmentId</code>
     */
    lower?: number;

    /**
     * An upper bound of the relative difference between the treatment and the
     * <code>fromTreatmentId</code>
     */
    upper?: number;

    /**
     * Variance of the relative difference
     */
    variance?: number;

    /**
     * The reduction in variance resulting from CUPED
     */
    varianceReduction?: number;
  }
}

export interface MetricRetrieveResultsParams {
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
   * Query param: A comma-separated list of fields to expand in the response.
   * Supported fields are explained above.
   */
  expand?: string;

  /**
   * Query param: The iteration ID
   */
  iterationId?: string;
}

export declare namespace Metrics {
  export {
    type ExperimentBayesianResultsRep as ExperimentBayesianResultsRep,
    type TreatmentResultRep as TreatmentResultRep,
    type MetricRetrieveResultsParams as MetricRetrieveResultsParams,
  };
}
