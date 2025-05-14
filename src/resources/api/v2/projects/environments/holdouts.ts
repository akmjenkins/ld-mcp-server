// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as HoldoutsAPI from './holdouts';
import * as StatisticsAPI from '../../code-refs/statistics';
import * as ExperimentsAPI from './experiments/experiments';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Holdouts extends APIResource {
  /**
   * Create a new holdout in the specified project.
   *
   * @example
   * ```ts
   * const holdoutRep =
   *   await client.api.v2.projects.environments.holdouts.create(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  create(
    environmentKey: string,
    params: HoldoutCreateParams,
    options?: RequestOptions,
  ): APIPromise<HoldoutRep> {
    const { projectKey, ...body } = params;
    return this._client.post(path`/api/v2/projects/${projectKey}/environments/${environmentKey}/holdouts`, {
      body,
      ...options,
    });
  }

  /**
   * Get details about a holdout.
   *
   * ### Expanding the holdout response
   *
   * LaunchDarkly supports the following fields for expanding the "Get holdout"
   * response. By default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `draftIteration` includes the iteration which has not been started yet, if
   *   any, for this holdout.
   * - `previousIterations` includes all iterations prior to the current iteration,
   *   for this holdout. By default only the current iteration is included in the
   *   response.
   * - `rel-draftIteration` includes the iteration which has not been started yet, if
   *   any, for the experiments related to this holdout.
   * - `rel-metrics` includes metrics for experiments related to this holdout.
   * - `rel-previousIterations` includes all iterations prior to the current
   *   iteration, for the experiments related to this holdout.
   * - `rel-secondaryMetrics` includes secondary metrics for experiments related to
   *   this holdout.
   * - `rel-treatments` includes all treatment and parameter details for experiments
   *   related to this holdout.
   * - `secondaryMetrics` includes secondary metrics for this holdout. By default
   *   only the primary metric is included in the response.
   * - `treatments` includes all treatment and parameter details for this holdout. By
   *   default treatment data is not included in the response.
   *
   * For example, `expand=draftIteration,rel-draftIteration` includes the
   * `draftIteration` and `rel-draftIteration` fields in the response. If fields that
   * you request with the `expand` query parameter are empty, they are not included
   * in the response.
   *
   * @example
   * ```ts
   * const holdout =
   *   await client.api.v2.projects.environments.holdouts.retrieve(
   *     'holdoutKey',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    holdoutKey: string,
    params: HoldoutRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<HoldoutRetrieveResponse> {
    const { projectKey, environmentKey, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/holdouts/${holdoutKey}`,
      { query, ...options },
    );
  }

  /**
   * Updates an existing holdout, and returns the updated holdout. Updating holdouts
   * uses the semantic patch format.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * holdouts.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating holdouts</strong></summary>
   *
   * #### endHoldout
   *
   * Ends a holdout.
   *
   * ##### Parameters
   *
   * None.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "comment": "Optional comment describing why the holdout is ending",
   *   "instructions": [
   *     {
   *       "kind": "endHoldout"
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeExperiment
   *
   * Removes an experiment from a holdout.
   *
   * ##### Parameters
   *
   * - `value`: The key of the experiment to remove
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "comment": "Optional comment describing the change",
   *   "instructions": [
   *     {
   *       "kind": "removeExperiment",
   *       "value": "experiment-key"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the description of the holdout.
   *
   * ##### Parameters
   *
   * - `value`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "comment": "Optional comment describing the update",
   *   "instructions": [
   *     {
   *       "kind": "updateDescription",
   *       "value": "Updated holdout description"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateName
   *
   * Updates the name of the holdout.
   *
   * ##### Parameters
   *
   * - `value`: The new name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "comment": "Optional comment describing the update",
   *   "instructions": [
   *     {
   *       "kind": "updateName",
   *       "value": "Updated holdout name"
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * @example
   * ```ts
   * const holdoutRep =
   *   await client.api.v2.projects.environments.holdouts.update(
   *     'holdoutKey',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       instructions: [
   *         {
   *           kind: 'updateName',
   *           value: 'Updated holdout name',
   *         },
   *       ],
   *       comment: 'Optional comment describing the update',
   *     },
   *   );
   * ```
   */
  update(holdoutKey: string, params: HoldoutUpdateParams, options?: RequestOptions): APIPromise<HoldoutRep> {
    const { projectKey, environmentKey, ...body } = params;
    return this._client.patch(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/holdouts/${holdoutKey}`,
      { body, ...options },
    );
  }

  /**
   * Get all holdouts
   *
   * @example
   * ```ts
   * const holdouts =
   *   await client.api.v2.projects.environments.holdouts.list(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  list(
    environmentKey: string,
    params: HoldoutListParams,
    options?: RequestOptions,
  ): APIPromise<HoldoutListResponse> {
    const { projectKey, ...query } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/environments/${environmentKey}/holdouts`, {
      query,
      ...options,
    });
  }
}

export interface HoldoutRep {
  _id: string;

  baseExperiment: ExperimentsAPI.Experiment;

  createdAt: number;

  /**
   * The percentage of traffic allocated to this holdout.
   */
  holdoutAmount: string;

  status: 'created' | 'enabled' | 'running' | 'ended';

  updatedAt: number;

  description?: string;

  experiments?: Array<RelatedExperimentRep>;
}

export interface MetricInput {
  /**
   * The metric key
   */
  key: string;

  /**
   * Whether this is a metric group (true) or a metric (false). Defaults to false
   */
  isGroup?: boolean;

  /**
   * @deprecated Deprecated, use <code>primarySingleMetricKey</code> and
   * <code>primaryFunnelKey</code>. Whether this is a primary metric (true) or a
   * secondary metric (false)
   */
  primary?: boolean;
}

export interface RelatedExperimentRep {
  environment?: string;

  key?: string;

  name?: string;
}

export interface HoldoutRetrieveResponse {
  _id: string;

  baseExperiment: ExperimentsAPI.Experiment;

  createdAt: number;

  /**
   * The percentage of traffic allocated to this holdout.
   */
  holdoutAmount: string;

  status: 'created' | 'enabled' | 'running' | 'ended';

  updatedAt: number;

  description?: string;

  /**
   * Indicates if the holdout experiment is running and if any related experiments
   * are running.
   */
  isDirty?: boolean;

  relatedExperiments?: Array<ExperimentsAPI.Experiment>;
}

export interface HoldoutListResponse {
  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  items?: Array<HoldoutListResponse.Item>;

  /**
   * The total number of holdouts in this project and environment.
   */
  total_count?: number;
}

export namespace HoldoutListResponse {
  export interface Item {
    _id?: string;

    createdAt?: number;

    experiments?: Array<HoldoutsAPI.RelatedExperimentRep>;

    key?: string;

    name?: string;

    status?: string;

    updatedAt?: number;
  }
}

export interface HoldoutCreateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param: The attributes that the holdout iteration's results can be sliced by
   */
  attributes?: Array<string>;

  /**
   * Body param: Description of the holdout
   */
  description?: string;

  /**
   * Body param: Audience allocation for the holdout
   */
  holdoutamount?: string;

  /**
   * Body param: A key that identifies the holdout
   */
  key?: string;

  /**
   * Body param: Maintainer id
   */
  maintainerId?: string;

  /**
   * Body param: Details on the metrics for this experiment
   */
  metrics?: Array<MetricInput>;

  /**
   * Body param: A human-friendly name for the holdout
   */
  name?: string;

  /**
   * Body param: The key of the flag that the holdout is dependent on
   */
  prerequisiteflagkey?: string;

  /**
   * Body param: The key of the primary metric for this holdout
   */
  primarymetrickey?: string;

  /**
   * Body param: The chosen randomization unit for the holdout base experiment
   */
  randomizationunit?: string;
}

export interface HoldoutRetrieveParams {
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
   * information in the response. Supported fields are explained above. Holdout
   * experiment expansion fields have no prefix. Related experiment expansion fields
   * have `rel-` as a prefix.
   */
  expand?: string;
}

export interface HoldoutUpdateParams {
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
  instructions: Array<Record<string, unknown>>;

  /**
   * Body param: Optional comment describing the update
   */
  comment?: string;
}

export interface HoldoutListParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: The number of holdouts to return in the response. Defaults to 20
   */
  limit?: number;

  /**
   * Query param: Where to start in the list. Use this with pagination. For example,
   * an `offset` of 10 skips the first ten items and then returns the next items in
   * the list, up to the query `limit`.
   */
  offset?: number;
}

export declare namespace Holdouts {
  export {
    type HoldoutRep as HoldoutRep,
    type MetricInput as MetricInput,
    type RelatedExperimentRep as RelatedExperimentRep,
    type HoldoutRetrieveResponse as HoldoutRetrieveResponse,
    type HoldoutListResponse as HoldoutListResponse,
    type HoldoutCreateParams as HoldoutCreateParams,
    type HoldoutRetrieveParams as HoldoutRetrieveParams,
    type HoldoutUpdateParams as HoldoutUpdateParams,
    type HoldoutListParams as HoldoutListParams,
  };
}
