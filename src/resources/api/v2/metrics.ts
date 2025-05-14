// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RelayAutoConfigsAPI from './account/relay-auto-configs';
import * as ApplicationsAPI from './applications/applications';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Metrics extends APIResource {
  /**
   * Get information for a single metric from the specific project.
   *
   * ### Expanding the metric response
   *
   * LaunchDarkly supports four fields for expanding the "Get metric" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `experiments` includes all experiments from the specific project that use the
   *   metric
   * - `experimentCount` includes the number of experiments from the specific project
   *   that use the metric
   * - `metricGroups` includes all metric groups from the specific project that use
   *   the metric
   * - `metricGroupCount` includes the number of metric groups from the specific
   *   project that use the metric
   *
   * For example, `expand=experiments` includes the `experiments` field in the
   * response.
   *
   * @example
   * ```ts
   * const metricRep = await client.api.v2.metrics.retrieve(
   *   'metricKey',
   *   { projectKey: 'projectKey' },
   * );
   * ```
   */
  retrieve(metricKey: string, params: MetricRetrieveParams, options?: RequestOptions): APIPromise<MetricRep> {
    const { projectKey, ...query } = params;
    return this._client.get(path`/api/v2/metrics/${projectKey}/${metricKey}`, { query, ...options });
  }

  /**
   * Patch a metric by key. Updating a metric uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const metricRep = await client.api.v2.metrics.update(
   *   'metricKey',
   *   {
   *     projectKey: 'projectKey',
   *     body: [{ op: 'replace', path: '/name' }],
   *   },
   * );
   * ```
   */
  update(metricKey: string, params: MetricUpdateParams, options?: RequestOptions): APIPromise<MetricRep> {
    const { projectKey, body } = params;
    return this._client.patch(path`/api/v2/metrics/${projectKey}/${metricKey}`, { body: body, ...options });
  }

  /**
   * Delete a metric by key.
   *
   * @example
   * ```ts
   * await client.api.v2.metrics.delete('metricKey', {
   *   projectKey: 'projectKey',
   * });
   * ```
   */
  delete(metricKey: string, params: MetricDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey } = params;
    return this._client.delete(path`/api/v2/metrics/${projectKey}/${metricKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DependentExperimentRep {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * Timestamp of when the experiment was created
   */
  creationDate: number;

  /**
   * The environment ID
   */
  environmentId: string;

  /**
   * The environment key
   */
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
   * Timestamp of when the experiment was archived
   */
  archivedDate?: number;
}

export interface Filter {
  /**
   * If set, then take the inverse of the operator. 'in' becomes 'not in'.
   */
  negate: boolean;

  /**
   * The function to perform
   */
  op: string;

  /**
   * Filter type. One of [contextAttribute, eventProperty, group]
   */
  type: 'group' | 'contextAttribute' | 'eventProperty';

  /**
   * The context attribute / event property values or group member nodes
   */
  values: Array<unknown>;

  /**
   * If not a group node, the context attribute name or event property name to filter
   * on
   */
  attribute?: string;

  /**
   * For context attribute filters, the context kind.
   */
  contextKind?: string;
}

export interface FlagListingRep {
  /**
   * The flag key
   */
  key: string;

  /**
   * The flag name
   */
  name: string;

  _links?: Record<string, StatisticsAPI.Link>;

  _site?: StatisticsAPI.Link;
}

export interface MetricEventDefaultRep {
  /**
   * Whether to disable defaulting missing unit events when calculating results.
   * Defaults to false
   */
  disabled?: boolean;

  /**
   * The default value applied to missing unit events. Set to 0 when
   * <code>disabled</code> is false. No other values are currently supported.
   */
  value?: number;
}

export interface MetricListingRep {
  /**
   * Timestamp of when the metric was created
   */
  _creationDate: number;

  /**
   * The ID of this metric
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The version ID of the metric
   */
  _versionId: string;

  /**
   * A unique key to reference the metric
   */
  key: string;

  /**
   * The kind of event the metric tracks
   */
  kind: 'pageview' | 'click' | 'custom';

  /**
   * A human-friendly name for the metric
   */
  name: string;

  /**
   * Tags for the metric
   */
  tags: Array<string>;

  /**
   * Details on the allowed and denied actions for this metric
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * The number of feature flags currently attached to this metric
   */
  _attachedFlagCount?: number;

  /**
   * Details on the member who maintains this metric
   */
  _maintainer?: RelayAutoConfigsAPI.MemberSummary;

  /**
   * Details on how to access the metric in the LaunchDarkly UI
   */
  _site?: StatisticsAPI.Link;

  /**
   * The method for analyzing metric events
   */
  analysisType?: 'mean' | 'percentile';

  /**
   * The category of the metric
   */
  category?: string;

  /**
   * Description of the metric
   */
  description?: string;

  eventDefault?: MetricEventDefaultRep;

  /**
   * For custom metrics, the event key to use in your code
   */
  eventKey?: string;

  /**
   * The number of experiments using this metric
   */
  experimentCount?: number;

  /**
   * The filters narrowing down the audience based on context attributes or event
   * properties.
   */
  filters?: Filter;

  /**
   * For custom metrics, whether to track numeric changes in value against a baseline
   * (<code>true</code>) or to track a conversion when an end user takes an action
   * (<code>false</code>).
   */
  isNumeric?: boolean;

  lastModified?: Modification;

  /**
   * The ID of the member who maintains this metric
   */
  maintainerId?: string;

  /**
   * The number of metric groups using this metric
   */
  metricGroupCount?: number;

  /**
   * The percentile for the analysis method. An integer denoting the target
   * percentile between 0 and 100. Required when <code>analysisType</code> is
   * <code>percentile</code>.
   */
  percentileValue?: number;

  /**
   * An array of randomization units allowed for this metric
   */
  randomizationUnits?: Array<string>;

  /**
   * For custom metrics, the success criteria
   */
  successCriteria?: 'HigherThanBaseline' | 'LowerThanBaseline';

  /**
   * For numeric custom metrics, the unit of measure
   */
  unit?: string;

  /**
   * The method by which multiple unit event values are aggregated
   */
  unitAggregationType?: 'average' | 'sum';
}

export interface MetricRep {
  /**
   * Timestamp of when the metric was created
   */
  _creationDate: number;

  /**
   * The ID of this metric
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The version ID of the metric
   */
  _versionId: string;

  /**
   * A unique key to reference the metric
   */
  key: string;

  /**
   * The kind of event the metric tracks
   */
  kind: 'pageview' | 'click' | 'custom';

  /**
   * A human-friendly name for the metric
   */
  name: string;

  /**
   * Tags for the metric
   */
  tags: Array<string>;

  /**
   * Details on the allowed and denied actions for this metric
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * Details on the flags attached to this metric
   */
  _attachedFeatures?: Array<FlagListingRep>;

  /**
   * The number of feature flags currently attached to this metric
   */
  _attachedFlagCount?: number;

  /**
   * Details on the member who maintains this metric
   */
  _maintainer?: RelayAutoConfigsAPI.MemberSummary;

  /**
   * Details on how to access the metric in the LaunchDarkly UI
   */
  _site?: StatisticsAPI.Link;

  /**
   * Version of the metric
   */
  _version?: number;

  /**
   * The method for analyzing metric events
   */
  analysisType?: 'mean' | 'percentile';

  /**
   * The category of the metric
   */
  category?: string;

  /**
   * Description of the metric
   */
  description?: string;

  eventDefault?: MetricEventDefaultRep;

  /**
   * For custom metrics, the event key to use in your code
   */
  eventKey?: string;

  /**
   * The number of experiments using this metric
   */
  experimentCount?: number;

  /**
   * Experiments that use this metric, including those using a metric group that
   * contains this metric
   */
  experiments?: Array<DependentExperimentRep>;

  /**
   * The filters narrowing down the audience based on context attributes or event
   * properties.
   */
  filters?: Filter;

  /**
   * Whether the metric is active
   */
  isActive?: boolean;

  /**
   * For custom metrics, whether to track numeric changes in value against a baseline
   * (<code>true</code>) or to track a conversion when an end user takes an action
   * (<code>false</code>).
   */
  isNumeric?: boolean;

  lastModified?: Modification;

  /**
   * The ID of the member who maintains this metric
   */
  maintainerId?: string;

  /**
   * The number of metric groups using this metric
   */
  metricGroupCount?: number;

  /**
   * Metric groups that use this metric
   */
  metricGroups?: Array<MetricRep.MetricGroup>;

  /**
   * The percentile for the analysis method. An integer denoting the target
   * percentile between 0 and 100. Required when <code>analysisType</code> is
   * <code>percentile</code>.
   */
  percentileValue?: number;

  /**
   * An array of randomization units allowed for this metric
   */
  randomizationUnits?: Array<string>;

  /**
   * For click metrics, the CSS selectors
   */
  selector?: string;

  /**
   * For custom metrics, the success criteria
   */
  successCriteria?: 'HigherThanBaseline' | 'LowerThanBaseline';

  /**
   * For numeric custom metrics, the unit of measure
   */
  unit?: string;

  /**
   * The method by which multiple unit event values are aggregated
   */
  unitAggregationType?: 'average' | 'sum';

  /**
   * For click and pageview metrics, the target URLs
   */
  urls?: Array<Record<string, unknown>>;
}

export namespace MetricRep {
  export interface MetricGroup {
    /**
     * The location and content type of related resources
     */
    _links: Record<string, StatisticsAPI.Link>;

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
  }
}

export interface Modification {
  date?: string;
}

export interface MetricRetrieveParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: A comma-separated list of properties that can reveal additional
   * information in the response.
   */
  expand?: string;

  /**
   * Query param: The specific version ID of the metric
   */
  versionId?: string;
}

export interface MetricUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface MetricDeleteParams {
  /**
   * The project key
   */
  projectKey: string;
}

export declare namespace Metrics {
  export {
    type DependentExperimentRep as DependentExperimentRep,
    type Filter as Filter,
    type FlagListingRep as FlagListingRep,
    type MetricEventDefaultRep as MetricEventDefaultRep,
    type MetricListingRep as MetricListingRep,
    type MetricRep as MetricRep,
    type Modification as Modification,
    type MetricRetrieveParams as MetricRetrieveParams,
    type MetricUpdateParams as MetricUpdateParams,
    type MetricDeleteParams as MetricDeleteParams,
  };
}
