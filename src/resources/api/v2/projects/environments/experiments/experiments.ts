// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as StatisticsAPI from '../../../code-refs/statistics';
import * as MetricGroupsAPI from '../../metric-groups';
import * as HoldoutsAPI from '../holdouts';
import * as ExperimentsMetricGroupsAPI from './metric-groups';
import {
  MetricGroupRetrieveResultsParams,
  MetricGroupRetrieveResultsResponse,
  MetricGroups,
} from './metric-groups';
import * as MetricsAPI from './metrics';
import {
  ExperimentBayesianResultsRep,
  MetricRetrieveResultsParams,
  Metrics,
  TreatmentResultRep,
} from './metrics';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Experiments extends APIResource {
  metricGroups: ExperimentsMetricGroupsAPI.MetricGroups = new ExperimentsMetricGroupsAPI.MetricGroups(
    this._client,
  );
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);

  /**
   * Create an experiment.
   *
   * To run this experiment, you'll need to
   * [create an iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration)
   * and then
   * [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment)
   * with the `startIteration` instruction.
   *
   * To learn more, read
   * [Creating experiments](https://launchdarkly.com/docs/home/experimentation/create).
   *
   * @example
   * ```ts
   * const experiment = await client.api.v2.projects.environments.experiments.create(
   *   'environmentKey',
   *   {
   *     projectKey: 'projectKey',
   *     iteration: {
   *       flags: { ... },
   *       hypothesis: 'Example hypothesis, the new button placement will increase conversion',
   *       metrics: [
   *         { ... },
   *       ],
   *       treatments: [
   *         { ... },
   *       ],
   *     },
   *     key: 'experiment-key-123abc',
   *     name: 'Example experiment',
   *   },
   * );
   * ```
   */
  create(
    environmentKey: string,
    params: ExperimentCreateParams,
    options?: RequestOptions,
  ): APIPromise<Experiment> {
    const { projectKey, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/experiments`,
      { body, ...options },
    );
  }

  /**
   * Get details about an experiment.
   *
   * ### Expanding the experiment response
   *
   * LaunchDarkly supports four fields for expanding the "Get experiment" response.
   * By default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `previousIterations` includes all iterations prior to the current iteration.
   *   By default only the current iteration is included in the response.
   * - `draftIteration` includes the iteration which has not been started yet, if
   *   any.
   * - `secondaryMetrics` includes secondary metrics. By default only the primary
   *   metric is included in the response.
   * - `treatments` includes all treatment and parameter details. By default
   *   treatment data is not included in the response.
   *
   * For example, `expand=draftIteration,treatments` includes the `draftIteration`
   * and `treatments` fields in the response. If fields that you request with the
   * `expand` query parameter are empty, they are not included in the response.
   *
   * @example
   * ```ts
   * const experiment =
   *   await client.api.v2.projects.environments.experiments.retrieve(
   *     'experimentKey',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    experimentKey: string,
    params: ExperimentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Experiment> {
    const { projectKey, environmentKey, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/experiments/${experimentKey}`,
      { query, ...options },
    );
  }

  /**
   * Update an experiment. Updating an experiment uses the semantic patch format.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * experiments.
   *
   * #### updateName
   *
   * Updates the experiment name.
   *
   * ##### Parameters
   *
   * - `value`: The new name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateName",
   *       "value": "Example updated experiment name"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the experiment description.
   *
   * ##### Parameters
   *
   * - `value`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateDescription",
   *       "value": "Example updated description"
   *     }
   *   ]
   * }
   * ```
   *
   * #### startIteration
   *
   * Starts a new iteration for this experiment. You must
   * [create a new iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration)
   * before calling this instruction.
   *
   * An iteration may not be started until it meets the following criteria:
   *
   * - Its associated flag is toggled on and is not archived
   * - Its `randomizationUnit` is set
   * - At least one of its `treatments` has a non-zero `allocationPercent`
   *
   * ##### Parameters
   *
   * - `changeJustification`: The reason for starting a new iteration. Required when
   *   you call `startIteration` on an already running experiment, otherwise
   *   optional.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "startIteration",
   *       "changeJustification": "It's time to start a new iteration"
   *     }
   *   ]
   * }
   * ```
   *
   * #### stopIteration
   *
   * Stops the current iteration for this experiment.
   *
   * ##### Parameters
   *
   * - `winningTreatmentId`: The ID of the winning treatment. Treatment IDs are
   *   returned as part of the
   *   [Get experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/get-experiment)
   *   response. They are the `_id` of each element in the `treatments` array.
   * - `winningReason`: The reason for the winner
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "stopIteration",
   *       "winningTreatmentId": "3a548ec2-72ac-4e59-8518-5c24f5609ccf",
   *       "winningReason": "Example reason to stop the iteration"
   *     }
   *   ]
   * }
   * ```
   *
   * #### archiveExperiment
   *
   * Archives this experiment. Archived experiments are hidden by default in the
   * LaunchDarkly user interface. You cannot start new iterations for archived
   * experiments.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "archiveExperiment" }]
   * }
   * ```
   *
   * #### restoreExperiment
   *
   * Restores an archived experiment. After restoring an experiment, you can start
   * new iterations for it again.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "restoreExperiment" }]
   * }
   * ```
   *
   * @example
   * ```ts
   * const experiment =
   *   await client.api.v2.projects.environments.experiments.update(
   *     'experimentKey',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       instructions: [
   *         {
   *           kind: 'updateName',
   *           value: 'Updated experiment name',
   *         },
   *       ],
   *       comment: 'Example comment describing the update',
   *     },
   *   );
   * ```
   */
  update(
    experimentKey: string,
    params: ExperimentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Experiment> {
    const { projectKey, environmentKey, ...body } = params;
    return this._client.patch(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/experiments/${experimentKey}`,
      { body, ...options },
    );
  }

  /**
   * Get details about all experiments in an environment.
   *
   * ### Filtering experiments
   *
   * LaunchDarkly supports the `filter` query param for filtering, with the following
   * fields:
   *
   * - `flagKey` filters for only experiments that use the flag with the given key.
   * - `metricKey` filters for only experiments that use the metric with the given
   *   key.
   * - `status` filters for only experiments with an iteration with the given status.
   *   An iteration can have the status `not_started`, `running` or `stopped`.
   *
   * For example, `filter=flagKey:my-flag,status:running,metricKey:page-load-ms`
   * filters for experiments for the given flag key and the given metric key which
   * have a currently running iteration.
   *
   * ### Expanding the experiments response
   *
   * LaunchDarkly supports four fields for expanding the "Get experiments" response.
   * By default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `previousIterations` includes all iterations prior to the current iteration.
   *   By default only the current iteration is included in the response.
   * - `draftIteration` includes the iteration which has not been started yet, if
   *   any.
   * - `secondaryMetrics` includes secondary metrics. By default only the primary
   *   metric is included in the response.
   * - `treatments` includes all treatment and parameter details. By default
   *   treatment data is not included in the response.
   *
   * For example, `expand=draftIteration,treatments` includes the `draftIteration`
   * and `treatments` fields in the response. If fields that you request with the
   * `expand` query parameter are empty, they are not included in the response.
   *
   * @example
   * ```ts
   * const experiments =
   *   await client.api.v2.projects.environments.experiments.list(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  list(
    environmentKey: string,
    params: ExperimentListParams,
    options?: RequestOptions,
  ): APIPromise<ExperimentListResponse> {
    const { projectKey, ...query } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/environments/${environmentKey}/experiments`, {
      query,
      ...options,
    });
  }

  /**
   * Create an experiment iteration.
   *
   * Experiment iterations let you record experiments in individual blocks of time.
   * Initially, iterations are created with a status of `not_started` and appear in
   * the `draftIteration` field of an experiment. To start or stop an iteration,
   * [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment)
   * with the `startIteration` or `stopIteration` instruction.
   *
   * To learn more, read
   * [Start experiment iterations](https://launchdarkly.com/docs/home/experimentation/feature#start-experiment-iterations).
   *
   * @example
   * ```ts
   * const iterationRep = await client.api.v2.projects.environments.experiments.iterations(
   *   'experimentKey',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *     flags: {
   *       '0': { ... },
   *       '1': { ... },
   *       '2': { ... },
   *       '3': { ... },
   *       '4': { ... },
   *       '5': { ... },
   *       '6': { ... },
   *       '7': { ... },
   *       '8': { ... },
   *       '9': { ... },
   *       '10': { ... },
   *       '11': { ... },
   *       '12': { ... },
   *       '13': { ... },
   *       '14': { ... },
   *       '15': { ... },
   *       '16': { ... },
   *       '17': { ... },
   *       '18': { ... },
   *       '19': { ... },
   *       '20': { ... },
   *       '21': { ... },
   *       '22': { ... },
   *       '23': { ... },
   *       '24': { ... },
   *       '25': { ... },
   *       '26': { ... },
   *       '27': { ... },
   *       '28': { ... },
   *       '29': { ... },
   *       '30': { ... },
   *       '31': { ... },
   *       '32': { ... },
   *       '33': { ... },
   *       '34': { ... },
   *       '35': { ... },
   *       '36': { ... },
   *       '37': { ... },
   *       '38': { ... },
   *       '39': { ... },
   *       '40': { ... },
   *       '41': { ... },
   *       '42': { ... },
   *       '43': { ... },
   *       '44': { ... },
   *       '45': { ... },
   *       '46': { ... },
   *       '47': { ... },
   *       '48': { ... },
   *       '49': { ... },
   *       '50': { ... },
   *       '51': { ... },
   *       '52': { ... },
   *       '53': { ... },
   *       '54': { ... },
   *       '55': { ... },
   *       '56': { ... },
   *       '57': { ... },
   *       '58': { ... },
   *       '59': { ... },
   *       '60': { ... },
   *       '61': { ... },
   *       '62': { ... },
   *       '63': { ... },
   *       '64': { ... },
   *       '65': { ... },
   *       '66': { ... },
   *       '67': { ... },
   *       '68': { ... },
   *       '69': { ... },
   *       '70': { ... },
   *       '71': { ... },
   *       '72': { ... },
   *       '73': { ... },
   *       '74': { ... },
   *       '75': { ... },
   *       '76': { ... },
   *       '77': { ... },
   *       '78': { ... },
   *       '79': { ... },
   *       '80': { ... },
   *       '81': { ... },
   *       '82': { ... },
   *       '83': { ... },
   *       '84': { ... },
   *       '85': { ... },
   *       '86': { ... },
   *       '87': { ... },
   *       '88': { ... },
   *       '89': { ... },
   *       '90': { ... },
   *       '91': { ... },
   *       '92': { ... },
   *       '93': { ... },
   *       '94': { ... },
   *       '95': { ... },
   *       '96': { ... },
   *       '97': { ... },
   *       '98': { ... },
   *       '99': { ... },
   *       '100': { ... },
   *       '101': { ... },
   *       '102': { ... },
   *       '103': { ... },
   *       '104': { ... },
   *       '105': { ... },
   *       '106': { ... },
   *       '107': { ... },
   *       '108': { ... },
   *       '109': { ... },
   *       '110': { ... },
   *       '111': { ... },
   *       '112': { ... },
   *       '113': { ... },
   *       '114': { ... },
   *       '115': { ... },
   *       '116': { ... },
   *       '117': { ... },
   *       '118': { ... },
   *       '119': { ... },
   *       '120': { ... },
   *       '121': { ... },
   *       '122': { ... },
   *       '123': { ... },
   *       '124': { ... },
   *       '125': { ... },
   *       '126': { ... },
   *       '127': { ... },
   *       '128': { ... },
   *       '129': { ... },
   *       '130': { ... },
   *       '131': { ... },
   *       '132': { ... },
   *       '133': { ... },
   *       '134': { ... },
   *       '135': { ... },
   *       '136': { ... },
   *       '137': { ... },
   *       '138': { ... },
   *       '139': { ... },
   *       '140': { ... },
   *       '141': { ... },
   *       '142': { ... },
   *       '143': { ... },
   *       '144': { ... },
   *       '145': { ... },
   *       '146': { ... },
   *       '147': { ... },
   *       '148': { ... },
   *       '149': { ... },
   *       '150': { ... },
   *       '151': { ... },
   *       '152': { ... },
   *       '153': { ... },
   *       '154': { ... },
   *       '155': { ... },
   *       '156': { ... },
   *       '157': { ... },
   *       '158': { ... },
   *       '159': { ... },
   *       '160': { ... },
   *       '161': { ... },
   *       '162': { ... },
   *       '163': { ... },
   *       '164': { ... },
   *       '165': { ... },
   *       '166': { ... },
   *       '167': { ... },
   *       '168': { ... },
   *     },
   *     hypothesis: 'Example hypothesis, the new button placement will increase conversion',
   *     metrics: [{ key: 'metric-key-123abc' }],
   *     treatments: [
   *       {
   *         allocationPercent: '10',
   *         baseline: true,
   *         name: 'Treatment 1',
   *         parameters: [
   *           { ... },
   *         ],
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  iterations(
    experimentKey: string,
    params: ExperimentIterationsParams,
    options?: RequestOptions,
  ): APIPromise<IterationRep> {
    const { projectKey, environmentKey, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/experiments/${experimentKey}/iterations`,
      { body, ...options },
    );
  }
}

export interface DependentMetricOrMetricGroupRep {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * The version ID of the metric or metric group
   */
  _versionId: string;

  /**
   * Whether this is a metric group or a metric
   */
  isGroup: boolean;

  /**
   * A unique key to reference the metric or metric group
   */
  key: string;

  /**
   * If this is a metric, then it represents the kind of event the metric tracks. If
   * this is a metric group, then it represents the group type
   */
  kind: 'pageview' | 'click' | 'custom' | 'funnel' | 'standard';

  /**
   * A human-friendly name for the metric or metric group
   */
  name: string;

  /**
   * For custom metrics, whether to track numeric changes in value against a baseline
   * (<code>true</code>) or to track a conversion when an end user takes an action
   * (<code>false</code>).
   */
  isNumeric?: boolean;

  /**
   * An ordered list of the metrics in this metric group
   */
  metrics?: Array<MetricGroupsAPI.MetricInGroupRep>;
}

export interface Experiment {
  /**
   * Timestamp of when the experiment was created
   */
  _creationDate: number;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * The ID of the member who maintains this experiment.
   */
  _maintainerId: string;

  environmentKey: string;

  /**
   * The experiment key
   */
  key: string;

  /**
   * The experiment name
   */
  name: string;

  /**
   * The experiment ID
   */
  _id?: string;

  /**
   * Timestamp of when the experiment was archived
   */
  archivedDate?: number;

  /**
   * Details on the current iteration
   */
  currentIteration?: IterationRep;

  /**
   * The experiment description
   */
  description?: string;

  /**
   * Details on the current iteration. This iteration may be already started, or may
   * still be a draft.
   */
  draftIteration?: IterationRep;

  /**
   * The holdout ID
   */
  holdoutId?: string;

  /**
   * Details on the previous iterations for this experiment.
   */
  previousIterations?: Array<IterationRep>;
}

export interface IterationInput {
  /**
   * Details on the feature flag and targeting rules for this iteration
   */
  flags: { [key: string]: IterationInput.Flags };

  /**
   * The expected outcome of this experiment
   */
  hypothesis: string;

  /**
   * Details on the metrics for this experiment
   */
  metrics: Array<HoldoutsAPI.MetricInput>;

  /**
   * Details on the variations you are testing in the experiment. You establish these
   * variations in feature flags, and then reuse them in experiments.
   */
  treatments: Array<IterationInput.Treatment>;

  /**
   * The attributes that this iteration's results can be sliced by
   */
  attributes?: Array<string>;

  /**
   * Whether to allow the experiment to reassign traffic to different variations when
   * you increase or decrease the traffic in your experiment audience (true) or keep
   * all traffic assigned to its initial variation (false). Defaults to true.
   */
  canReshuffleTraffic?: boolean;

  /**
   * The key of the primary funnel group for this experiment. Either
   * <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be
   * present.
   */
  primaryFunnelKey?: string;

  /**
   * The key of the primary metric for this experiment. Either
   * <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be
   * present.
   */
  primarySingleMetricKey?: string;

  /**
   * The unit of randomization for this iteration. Defaults to user.
   */
  randomizationUnit?: string;
}

export namespace IterationInput {
  export interface Flags {
    /**
     * The flag version
     */
    flagConfigVersion: number;

    /**
     * The ID of the variation or rollout of the flag to use. Use "fallthrough" for the
     * default targeting behavior when the flag is on.
     */
    ruleId: string;

    /**
     * The ID of the variation to route traffic not part of the experiment analysis to.
     * Defaults to variation ID of baseline treatment, if set.
     */
    notInExperimentVariationId?: string;
  }

  export interface Treatment {
    /**
     * The percentage of traffic allocated to this treatment during the iteration
     */
    allocationPercent: string;

    /**
     * Whether this treatment is the baseline to compare other treatments against
     */
    baseline: boolean;

    /**
     * The treatment name
     */
    name: string;

    /**
     * Details on the flag and variation to use for this treatment
     */
    parameters: Array<Treatment.Parameter>;
  }

  export namespace Treatment {
    export interface Parameter {
      /**
       * The flag key
       */
      flagKey: string;

      /**
       * The ID of the flag variation
       */
      variationId: string;
    }
  }
}

export interface IterationRep {
  /**
   * Timestamp of when the iteration was created
   */
  createdAt: number;

  /**
   * The expected outcome of this experiment
   */
  hypothesis: string;

  /**
   * The status of the iteration: <code>not_started</code>, <code>running</code>,
   * <code>stopped</code>
   */
  status: string;

  /**
   * The iteration ID
   */
  _id?: string;

  /**
   * The available attribute filters for this iteration
   */
  attributes?: Array<string>;

  /**
   * Whether the experiment may reassign traffic to different variations when the
   * experiment audience changes (true) or must keep all traffic assigned to its
   * initial variation (false).
   */
  canReshuffleTraffic?: boolean;

  /**
   * Timestamp of when the iteration ended
   */
  endedAt?: number;

  /**
   * Details on the flag used in this experiment
   */
  flags?: { [key: string]: IterationRep.Flags };

  /**
   * Snapshot of the layer state on iteration stop, if part of a layer. Otherwise
   * omitted.
   */
  layerSnapshot?: IterationRep.LayerSnapshot;

  /**
   * Details on the metrics for this experiment
   */
  metrics?: Array<DependentMetricOrMetricGroupRep>;

  /**
   * Details on the primary funnel group for this experiment
   */
  primaryFunnel?: IterationRep.PrimaryFunnel;

  /**
   * @deprecated Deprecated, use <code>primarySingleMetric</code> and
   * <code>primaryFunnel</code> instead. Details on the primary metric for this
   * experiment.
   */
  primaryMetric?: DependentMetricOrMetricGroupRep;

  /**
   * Details on the primary metric for this experiment
   */
  primarySingleMetric?: MetricV2Rep;

  /**
   * The unit of randomization for this iteration
   */
  randomizationUnit?: string;

  /**
   * @deprecated Deprecated, use <code>metrics</code> instead. Details on the
   * secondary metrics for this experiment.
   */
  secondaryMetrics?: Array<MetricV2Rep>;

  /**
   * Timestamp of when the iteration started
   */
  startedAt?: number;

  /**
   * Details on the variations you are testing in the experiment
   */
  treatments?: Array<IterationRep.Treatment>;

  /**
   * The reason you stopped the experiment
   */
  winningReason?: string;

  /**
   * The ID of the treatment chosen when the experiment stopped
   */
  winningTreatmentId?: string;
}

export namespace IterationRep {
  export interface Flags {
    /**
     * The location and content type of related resources
     */
    _links: { [key: string]: StatisticsAPI.Link };

    /**
     * The flag version
     */
    flagConfigVersion?: number;

    /**
     * The ID of the variation to route traffic not part of the experiment analysis to
     */
    notInExperimentVariationId?: string;

    /**
     * The targeting rule
     */
    targetingRule?: string;

    /**
     * An array of clauses used for individual targeting based on attributes
     */
    targetingRuleClauses?: Array<unknown>;

    /**
     * The rule description
     */
    targetingRuleDescription?: string;
  }

  /**
   * Snapshot of the layer state on iteration stop, if part of a layer. Otherwise
   * omitted.
   */
  export interface LayerSnapshot {
    /**
     * Key of the layer the experiment was part of
     */
    key: string;

    /**
     * Layer name at the time this experiment iteration was stopped
     */
    name: string;

    /**
     * Percent of layer traffic that was reserved for other experiments in the same
     * environment, when this experiment iteration was stopped
     */
    otherReservationPercent: number;

    /**
     * Percent of layer traffic that was reserved in the layer for this experiment
     * iteration
     */
    reservationPercent: number;
  }

  /**
   * Details on the primary funnel group for this experiment
   */
  export interface PrimaryFunnel {
    /**
     * The location and content type of related resources
     */
    _links: { [key: string]: StatisticsAPI.Link };

    /**
     * A unique key to reference the metric group
     */
    key: string;

    /**
     * The type of the metric group
     */
    kind: 'funnel' | 'standard';

    /**
     * A human-friendly name for the metric group
     */
    name: string;

    /**
     * The metrics in the metric group
     */
    metrics?: Array<MetricGroupsAPI.MetricInGroupRep>;
  }

  export interface Treatment {
    /**
     * The percentage of traffic allocated to this treatment during the iteration
     */
    allocationPercent: string;

    /**
     * The treatment name. This is the variation name from the flag.
     */
    name: string;

    /**
     * The treatment ID. This is the variation ID from the flag.
     */
    _id?: string;

    /**
     * Whether this treatment is the baseline to compare other treatments against
     */
    baseline?: boolean;

    /**
     * Details on the flag and variation used for this treatment
     */
    parameters?: Array<Treatment.Parameter>;
  }

  export namespace Treatment {
    export interface Parameter {
      flagKey?: string;

      variationId?: string;
    }
  }
}

export interface MetricV2Rep {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * The metric key
   */
  key: string;

  /**
   * The kind of event the metric tracks
   */
  kind: 'pageview' | 'click' | 'custom';

  /**
   * The metric name
   */
  name: string;

  /**
   * The version ID of the metric
   */
  _versionId?: string;

  /**
   * For custom metrics, whether to track numeric changes in value against a baseline
   * (<code>true</code>) or to track a conversion when an end user takes an action
   * (<code>false</code>).
   */
  isNumeric?: boolean;

  /**
   * The type of unit aggregation to use for the metric
   */
  unitAggregationType?: 'sum' | 'average';
}

export interface ExperimentListResponse {
  /**
   * An array of experiments
   */
  items: Array<Experiment>;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * The total number of experiments in this project and environment. Does not
   * include legacy experiments.
   */
  total_count?: number;
}

export interface ExperimentCreateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param: Details on the construction of the initial iteration
   */
  iteration: IterationInput;

  /**
   * Body param: The experiment key
   */
  key: string;

  /**
   * Body param: The experiment name
   */
  name: string;

  /**
   * Body param: The experiment description
   */
  description?: string;

  /**
   * Body param: The ID of the holdout
   */
  holdoutId?: string;

  /**
   * Body param: The ID of the member who maintains this experiment
   */
  maintainerId?: string;
}

export interface ExperimentRetrieveParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Query param: A comma-separated list of properties that can reveal additional
   * information in the response. Supported fields are explained above.
   */
  expand?: string;
}

export interface ExperimentUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Body param: The instructions to perform when updating. This should be an array
   * with objects that look like <code>{"kind": "update_action"}</code>. Some
   * instructions also require a <code>value</code> field in the array element.
   */
  instructions: Array<{ [key: string]: unknown }>;

  /**
   * Body param: Optional comment describing the update
   */
  comment?: string;
}

export interface ExperimentListParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: A comma-separated list of properties that can reveal additional
   * information in the response. Supported fields are explained above.
   */
  expand?: string;

  /**
   * Query param: A comma-separated list of filters. Each filter is of the form
   * `field:value`. Supported fields are explained above.
   */
  filter?: string;

  /**
   * Query param: A comma-separated list of experiment archived states. Supports
   * `archived`, `active`, or both. Defaults to `active` experiments.
   */
  lifecycleState?: string;

  /**
   * Query param: The maximum number of experiments to return. Defaults to 20.
   */
  limit?: number;

  /**
   * Query param: Where to start in the list. Use this with pagination. For example,
   * an offset of 10 skips the first ten items and then returns the next items in the
   * list, up to the query `limit`.
   */
  offset?: number;
}

export interface ExperimentIterationsParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Body param: Details on the feature flag and targeting rules for this iteration
   */
  flags: { [key: string]: ExperimentIterationsParams.Flags };

  /**
   * Body param: The expected outcome of this experiment
   */
  hypothesis: string;

  /**
   * Body param: Details on the metrics for this experiment
   */
  metrics: Array<HoldoutsAPI.MetricInput>;

  /**
   * Body param: Details on the variations you are testing in the experiment. You
   * establish these variations in feature flags, and then reuse them in experiments.
   */
  treatments: Array<ExperimentIterationsParams.Treatment>;

  /**
   * Body param: The attributes that this iteration's results can be sliced by
   */
  attributes?: Array<string>;

  /**
   * Body param: Whether to allow the experiment to reassign traffic to different
   * variations when you increase or decrease the traffic in your experiment audience
   * (true) or keep all traffic assigned to its initial variation (false). Defaults
   * to true.
   */
  canReshuffleTraffic?: boolean;

  /**
   * Body param: The key of the primary funnel group for this experiment. Either
   * <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be
   * present.
   */
  primaryFunnelKey?: string;

  /**
   * Body param: The key of the primary metric for this experiment. Either
   * <code>primarySingleMetricKey</code> or <code>primaryFunnelKey</code> must be
   * present.
   */
  primarySingleMetricKey?: string;

  /**
   * Body param: The unit of randomization for this iteration. Defaults to user.
   */
  randomizationUnit?: string;
}

export namespace ExperimentIterationsParams {
  export interface Flags {
    /**
     * The flag version
     */
    flagConfigVersion: number;

    /**
     * The ID of the variation or rollout of the flag to use. Use "fallthrough" for the
     * default targeting behavior when the flag is on.
     */
    ruleId: string;

    /**
     * The ID of the variation to route traffic not part of the experiment analysis to.
     * Defaults to variation ID of baseline treatment, if set.
     */
    notInExperimentVariationId?: string;
  }

  export interface Treatment {
    /**
     * The percentage of traffic allocated to this treatment during the iteration
     */
    allocationPercent: string;

    /**
     * Whether this treatment is the baseline to compare other treatments against
     */
    baseline: boolean;

    /**
     * The treatment name
     */
    name: string;

    /**
     * Details on the flag and variation to use for this treatment
     */
    parameters: Array<Treatment.Parameter>;
  }

  export namespace Treatment {
    export interface Parameter {
      /**
       * The flag key
       */
      flagKey: string;

      /**
       * The ID of the flag variation
       */
      variationId: string;
    }
  }
}

Experiments.MetricGroups = MetricGroups;
Experiments.Metrics = Metrics;

export declare namespace Experiments {
  export {
    type DependentMetricOrMetricGroupRep as DependentMetricOrMetricGroupRep,
    type Experiment as Experiment,
    type IterationInput as IterationInput,
    type IterationRep as IterationRep,
    type MetricV2Rep as MetricV2Rep,
    type ExperimentListResponse as ExperimentListResponse,
    type ExperimentCreateParams as ExperimentCreateParams,
    type ExperimentRetrieveParams as ExperimentRetrieveParams,
    type ExperimentUpdateParams as ExperimentUpdateParams,
    type ExperimentListParams as ExperimentListParams,
    type ExperimentIterationsParams as ExperimentIterationsParams,
  };

  export {
    MetricGroups as MetricGroups,
    type MetricGroupRetrieveResultsResponse as MetricGroupRetrieveResultsResponse,
    type MetricGroupRetrieveResultsParams as MetricGroupRetrieveResultsParams,
  };

  export {
    Metrics as Metrics,
    type ExperimentBayesianResultsRep as ExperimentBayesianResultsRep,
    type TreatmentResultRep as TreatmentResultRep,
    type MetricRetrieveResultsParams as MetricRetrieveResultsParams,
  };
}
