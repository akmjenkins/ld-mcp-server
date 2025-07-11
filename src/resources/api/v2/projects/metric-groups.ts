// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MetricsAPI from '../metrics';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class MetricGroups extends APIResource {
  /**
   * Get information for a single metric group from the specific project.
   *
   * ### Expanding the metric group response
   *
   * LaunchDarkly supports two fields for expanding the "Get metric group" response.
   * By default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with either or both of the following fields:
   *
   * - `experiments` includes all experiments from the specific project that use the
   *   metric group
   * - `experimentCount` includes the number of experiments from the specific project
   *   that use the metric group
   *
   * For example, `expand=experiments` includes the `experiments` field in the
   * response.
   *
   * @example
   * ```ts
   * const metricGroupRep =
   *   await client.api.v2.projects.metricGroups.retrieve(
   *     'metricGroupKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieve(
    metricGroupKey: string,
    params: MetricGroupRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MetricGroupRep> {
    const { projectKey, ...query } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/metric-groups/${metricGroupKey}`, {
      query,
      ...options,
    });
  }

  /**
   * Patch a metric group by key. Updating a metric group uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes.
   *
   * @example
   * ```ts
   * const metricGroupRep =
   *   await client.api.v2.projects.metricGroups.update(
   *     'metricGroupKey',
   *     {
   *       projectKey: 'projectKey',
   *       body: [{ op: 'replace', path: '/name' }],
   *     },
   *   );
   * ```
   */
  update(
    metricGroupKey: string,
    params: MetricGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MetricGroupRep> {
    const { projectKey, body } = params;
    return this._client.patch(path`/api/v2/projects/${projectKey}/metric-groups/${metricGroupKey}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Delete a metric group by key.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.metricGroups.delete(
   *   'metricGroupKey',
   *   { projectKey: 'projectKey' },
   * );
   * ```
   */
  delete(
    metricGroupKey: string,
    params: MetricGroupDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectKey } = params;
    return this._client.delete(path`/api/v2/projects/${projectKey}/metric-groups/${metricGroupKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a new metric group in the specified project
   *
   * @example
   * ```ts
   * const metricGroupRep =
   *   await client.api.v2.projects.metricGroups.metricGroups(
   *     'projectKey',
   *     {
   *       key: 'metric-group-key-123abc',
   *       kind: 'funnel',
   *       maintainerId: '569fdeadbeef1644facecafe',
   *       metrics: [
   *         { key: 'metric-key-123abc', nameInGroup: 'Step 1' },
   *       ],
   *       name: 'My metric group',
   *       tags: ['ops'],
   *     },
   *   );
   * ```
   */
  metricGroups(
    projectKey: string,
    body: MetricGroupMetricGroupsParams,
    options?: RequestOptions,
  ): APIPromise<MetricGroupRep> {
    return this._client.post(path`/api/v2/projects/${projectKey}/metric-groups`, { body, ...options });
  }

  /**
   * Get a list of all metric groups for the specified project.
   *
   * ### Expanding the metric groups response
   *
   * LaunchDarkly supports one field for expanding the "Get metric groups" response.
   * By default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with the following field:
   *
   * - `experiments` includes all experiments from the specific project that use the
   *   metric group
   *
   * For example, `expand=experiments` includes the `experiments` field in the
   * response.
   *
   * ### Filtering metric groups
   *
   * The `filter` parameter supports the following operators: `contains`, `equals`,
   * `anyOf`.
   *
   * #### Supported fields and operators
   *
   * You can only filter certain fields in metrics when using the `filter` parameter.
   * Additionally, you can only filter some fields with certain operators.
   *
   * When you search for metrics, the `filter` parameter supports the following
   * fields and operators:
   *
   * | <div style="width:120px">Field</div> | Description                                                                                            | Supported operators |
   * | ------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------- |
   * | `experimentStatus`                   | The experiment's status. One of `not_started`, `running`, `stopped`, `started`.                        | `equals`            |
   * | `hasConnections`                     | Whether the metric group has connections to experiments or guarded rollouts. One of `true`, `false`.   | `equals`            |
   * | `kind`                               | The metric group kind. One of `funnel`, `standard`.                                                    | `equals`            |
   * | `maintainerIds`                      | The metric maintainer IDs.                                                                             | `anyOf`             |
   * | `maintainerTeamKey`                  | The metric maintainer team key.                                                                        | `equals`            |
   * | `query`                              | A "fuzzy" search across metric group key and name. Supply a string or list of strings to the operator. | `equals`            |
   *
   * ### Sorting metric groups
   *
   * LaunchDarkly supports the following fields for sorting:
   *
   * - `name` sorts by metric group name.
   * - `createdAt` sorts by the creation date of the metric group.
   * - `connectionCount` sorts by the number of connections to experiments the metric
   *   group has.
   *
   * By default, the sort is in ascending order. Use `-` to sort in descending order.
   * For example, `?sort=name` sorts the response by metric group name in ascending
   * order, and `?sort=-name` sorts in descending order.
   *
   * #### Sample query
   *
   * `filter=experimentStatus equals 'not_started' and query equals 'metric name'`
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.metricGroups.retrieveMetricGroups(
   *     'projectKey',
   *   );
   * ```
   */
  retrieveMetricGroups(
    projectKey: string,
    query: MetricGroupRetrieveMetricGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetricGroupRetrieveMetricGroupsResponse> {
    return this._client.get(path`/api/v2/projects/${projectKey}/metric-groups`, { query, ...options });
  }
}

export interface MetricGroupRep {
  /**
   * Timestamp of when the metric group was created
   */
  _creationDate: number;

  /**
   * The ID of this metric group
   */
  _id: string;

  /**
   * Timestamp of when the metric group was last modified
   */
  _lastModified: number;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * The version of this metric group
   */
  _version: number;

  /**
   * A unique key to reference the metric group
   */
  key: string;

  /**
   * The type of the metric group
   */
  kind: 'funnel' | 'standard';

  /**
   * The maintainer of this metric
   */
  maintainer: ApplicationsAPI.MaintainerRep;

  /**
   * An ordered list of the metrics in this metric group
   */
  metrics: Array<MetricInGroupRep>;

  /**
   * A human-friendly name for the metric group
   */
  name: string;

  /**
   * Tags for the metric group
   */
  tags: Array<string>;

  /**
   * Details on the allowed and denied actions for this metric group
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * Description of the metric group
   */
  description?: string;

  /**
   * The number of experiments using this metric group
   */
  experimentCount?: number;

  /**
   * Experiments that use this metric group. Only included if specified in the
   * <code>expand</code> query parameter in a <code>getMetricGroup</code> request.
   */
  experiments?: Array<MetricsAPI.DependentExperimentRep>;
}

export interface MetricInGroupRep {
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
   * Name of the metric when used within the associated metric group. Can be
   * different from the original name of the metric. Required if and only if the
   * metric group is a <code>funnel</code>.
   */
  nameInGroup?: string;

  /**
   * The randomization units for the metric
   */
  randomizationUnits?: Array<string>;

  /**
   * The type of unit aggregation to use for the metric
   */
  unitAggregationType?: 'sum' | 'average';
}

export interface MetricGroupRetrieveMetricGroupsResponse {
  /**
   * An array of metric groups
   */
  items: Array<MetricGroupRep>;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  totalCount?: number;
}

export interface MetricGroupRetrieveParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: A comma-separated list of properties that can reveal additional
   * information in the response.
   */
  expand?: string;
}

export interface MetricGroupUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface MetricGroupDeleteParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface MetricGroupMetricGroupsParams {
  /**
   * A unique key to reference the metric group
   */
  key: string;

  /**
   * The type of the metric group
   */
  kind: 'funnel';

  /**
   * The ID of the member who maintains this metric group
   */
  maintainerId: string;

  /**
   * An ordered list of the metrics in this metric group
   */
  metrics: Array<MetricGroupMetricGroupsParams.Metric>;

  /**
   * A human-friendly name for the metric group
   */
  name: string;

  /**
   * Tags for the metric group
   */
  tags: Array<string>;

  /**
   * Description of the metric group
   */
  description?: string;
}

export namespace MetricGroupMetricGroupsParams {
  export interface Metric {
    /**
     * The metric key
     */
    key: string;

    /**
     * Name of the metric when used within the associated metric group. Can be
     * different from the original name of the metric
     */
    nameInGroup: string;
  }
}

export interface MetricGroupRetrieveMetricGroupsParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response.
   */
  expand?: string;

  /**
   * Accepts filter by `experimentStatus`, `query`, `kind`, `hasConnections`,
   * `maintainerIds`, and `maintainerTeamKey`. Example:
   * `filter=experimentStatus equals 'running' and query equals 'test'`.
   */
  filter?: string;

  /**
   * The number of metric groups to return in the response. Defaults to 20. Maximum
   * limit is 50.
   */
  limit?: number;

  /**
   * Where to start in the list. Use this with pagination. For example, an offset of
   * 10 skips the first ten items and returns the next `limit` items.
   */
  offset?: number;

  /**
   * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - )
   * sort in descending order. Read the endpoint description for a full list of
   * available sort fields.
   */
  sort?: string;
}

export declare namespace MetricGroups {
  export {
    type MetricGroupRep as MetricGroupRep,
    type MetricInGroupRep as MetricInGroupRep,
    type MetricGroupRetrieveMetricGroupsResponse as MetricGroupRetrieveMetricGroupsResponse,
    type MetricGroupRetrieveParams as MetricGroupRetrieveParams,
    type MetricGroupUpdateParams as MetricGroupUpdateParams,
    type MetricGroupDeleteParams as MetricGroupDeleteParams,
    type MetricGroupMetricGroupsParams as MetricGroupMetricGroupsParams,
    type MetricGroupRetrieveMetricGroupsParams as MetricGroupRetrieveMetricGroupsParams,
  };
}
