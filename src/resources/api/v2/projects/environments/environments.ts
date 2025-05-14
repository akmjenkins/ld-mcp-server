// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ApprovalRequestsAPI from '../../approval-requests';
import * as ApplicationsAPI from '../../applications/applications';
import * as StatisticsAPI from '../../code-refs/statistics';
import * as ContextAttributesAPI from './context-attributes';
import {
  ContextAttributeRetrieveContextAttributesParams,
  ContextAttributeRetrieveContextAttributesResponse,
  ContextAttributeRetrieveParams,
  ContextAttributeRetrieveResponse,
  ContextAttributes,
} from './context-attributes';
import * as ContextInstancesAPI from './context-instances';
import {
  ContextInstanceDeleteParams,
  ContextInstanceRetrieveParams,
  ContextInstanceSearchParams,
  ContextInstances,
} from './context-instances';
import * as ContextsAPI from './contexts';
import {
  ContextRetrieveParams,
  ContextSearchParams,
  ContextUpdateParams,
  Contexts,
  ValuePut,
} from './contexts';
import * as FlagsAPI from './flags';
import { FlagEvaluateParams, FlagEvaluateResponse, Flags } from './flags';
import * as HoldoutsAPI from './holdouts';
import {
  HoldoutCreateParams,
  HoldoutListParams,
  HoldoutListResponse,
  HoldoutRep,
  HoldoutRetrieveParams,
  HoldoutRetrieveResponse,
  HoldoutUpdateParams,
  Holdouts,
  MetricInput,
  RelatedExperimentRep,
} from './holdouts';
import * as SegmentsAPI from './segments';
import { SegmentEvaluateParams, SegmentEvaluateResponse, Segments } from './segments';
import * as ExperimentsAPI from './experiments/experiments';
import {
  DependentMetricOrMetricGroupRep,
  Experiment,
  ExperimentCreateParams,
  ExperimentIterationsParams,
  ExperimentListParams,
  ExperimentListResponse,
  ExperimentRetrieveParams,
  ExperimentUpdateParams,
  Experiments,
  IterationInput,
  IterationRep,
  MetricV2Rep,
} from './experiments/experiments';
import * as FollowersAPI from '../flags/environments/followers';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Environments extends APIResource {
  contextAttributes: ContextAttributesAPI.ContextAttributes = new ContextAttributesAPI.ContextAttributes(
    this._client,
  );
  contextInstances: ContextInstancesAPI.ContextInstances = new ContextInstancesAPI.ContextInstances(
    this._client,
  );
  contexts: ContextsAPI.Contexts = new ContextsAPI.Contexts(this._client);
  experiments: ExperimentsAPI.Experiments = new ExperimentsAPI.Experiments(this._client);
  flags: FlagsAPI.Flags = new FlagsAPI.Flags(this._client);
  holdouts: HoldoutsAPI.Holdouts = new HoldoutsAPI.Holdouts(this._client);
  segments: SegmentsAPI.Segments = new SegmentsAPI.Segments(this._client);

  /**
   * > ### Approval settings
   * >
   * > The `approvalSettings` key is only returned when the
   * > [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is
   * > enabled.
   * >
   * > You cannot update approval settings when creating new environments. Update
   * > approval settings with the
   * > [https://launchdarkly.com/docs/api/environments/patch-environment).
   *
   * Create a new environment in a specified project with a given name, key, swatch
   * color, and default TTL.
   *
   * @example
   * ```ts
   * const environment =
   *   await client.api.v2.projects.environments.create(
   *     'projectKey',
   *     {
   *       color: 'DADBEE',
   *       key: 'environment-key-123abc',
   *       name: 'My Environment',
   *     },
   *   );
   * ```
   */
  create(
    projectKey: string,
    body: EnvironmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<Environment> {
    return this._client.post(path`/api/v2/projects/${projectKey}/environments`, { body, ...options });
  }

  /**
   * > ### Approval settings
   * >
   * > The `approvalSettings` key is only returned when
   * > [approvals](https://launchdarkly.com/docs/home/releases/approvals) for flags
   * > or segments are enabled.
   *
   * Get an environment given a project and key.
   *
   * @example
   * ```ts
   * const environment =
   *   await client.api.v2.projects.environments.retrieve(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieve(
    environmentKey: string,
    params: EnvironmentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Environment> {
    const { projectKey } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/environments/${environmentKey}`, options);
  }

  /**
   * Update an environment. Updating an environment uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * To update fields in the environment object that are arrays, set the `path` to
   * the name of the field and then append `/<array index>`. Using `/0` appends to
   * the beginning of the array.
   *
   * ### Approval settings
   *
   * This request only returns the `approvalSettings` key if the
   * [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is
   * enabled.
   *
   * Only the `canReviewOwnRequest`, `canApplyDeclinedChanges`, `minNumApprovals`,
   * `required` and `requiredApprovalTagsfields` are editable.
   *
   * If you try to patch the environment by setting both `required` and
   * `requiredApprovalTags`, the request fails and an error appears. You can specify
   * either required approvals for all flags in an environment or those with specific
   * tags, but not both.
   *
   * @example
   * ```ts
   * const environment =
   *   await client.api.v2.projects.environments.update(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       body: [{ op: 'replace', path: '/requireComments' }],
   *     },
   *   );
   * ```
   */
  update(
    environmentKey: string,
    params: EnvironmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Environment> {
    const { projectKey, body } = params;
    return this._client.patch(path`/api/v2/projects/${projectKey}/environments/${environmentKey}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Return a list of environments for the specified project.
   *
   * By default, this returns the first 20 environments. Page through this list with
   * the `limit` parameter and by following the `first`, `prev`, `next`, and `last`
   * links in the `_links` field that returns. If those links do not appear, the
   * pages they refer to don't exist. For example, the `first` and `prev` links will
   * be missing from the response on the first page, because there is no previous
   * page and you cannot return to the first page when you are already on the first
   * page.
   *
   * ### Filtering environments
   *
   * LaunchDarkly supports two fields for filters:
   *
   * - `query` is a string that matches against the environments' names and keys. It
   *   is not case sensitive.
   * - `tags` is a `+`-separated list of environment tags. It filters the list of
   *   environments that have all of the tags in the list.
   *
   * For example, the filter `filter=query:abc,tags:tag-1+tag-2` matches environments
   * with the string `abc` in their name or key and also are tagged with `tag-1` and
   * `tag-2`. The filter is not case-sensitive.
   *
   * The documented values for `filter` query parameters are prior to URL encoding.
   * For example, the `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.
   *
   * ### Sorting environments
   *
   * LaunchDarkly supports the following fields for sorting:
   *
   * - `createdOn` sorts by the creation date of the environment.
   * - `critical` sorts by whether the environments are marked as critical.
   * - `name` sorts by environment name.
   *
   * For example, `sort=name` sorts the response by environment name in ascending
   * order.
   *
   * @example
   * ```ts
   * const environments =
   *   await client.api.v2.projects.environments.list(
   *     'projectKey',
   *   );
   * ```
   */
  list(
    projectKey: string,
    query: EnvironmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Environments> {
    return this._client.get(path`/api/v2/projects/${projectKey}/environments`, { query, ...options });
  }

  /**
   * Delete a environment by key.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.environments.delete(
   *   'environmentKey',
   *   { projectKey: 'projectKey' },
   * );
   * ```
   */
  delete(
    environmentKey: string,
    params: EnvironmentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectKey } = params;
    return this._client.delete(path`/api/v2/projects/${projectKey}/environments/${environmentKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Reset an environment's SDK key with an optional expiry time for the old key.
   *
   * @example
   * ```ts
   * const environment =
   *   await client.api.v2.projects.environments.apiKey(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  apiKey(
    environmentKey: string,
    params: EnvironmentAPIKeyParams,
    options?: RequestOptions,
  ): APIPromise<Environment> {
    const { projectKey, expiry } = params;
    return this._client.post(path`/api/v2/projects/${projectKey}/environments/${environmentKey}/apiKey`, {
      query: { expiry },
      ...options,
    });
  }

  /**
   * Reset an environment's mobile key. The optional expiry for the old key is
   * deprecated for this endpoint, so the old key will always expire immediately.
   *
   * @example
   * ```ts
   * const environment =
   *   await client.api.v2.projects.environments.mobileKey(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  mobileKey(
    environmentKey: string,
    params: EnvironmentMobileKeyParams,
    options?: RequestOptions,
  ): APIPromise<Environment> {
    const { projectKey } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/mobileKey`,
      options,
    );
  }

  /**
   * Get followers of all flags in a given environment and project
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.environments.retrieveFollowers(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieveFollowers(
    environmentKey: string,
    params: EnvironmentRetrieveFollowersParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentRetrieveFollowersResponse> {
    const { projectKey } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/followers`,
      options,
    );
  }
}

export interface Environment {
  /**
   * The ID for the environment. Use this as the client-side ID for authorization in
   * some client-side SDKs, and to associate LaunchDarkly environments with CDN
   * integrations in edge SDKs.
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The SDK key for the environment. Use this for authorization in server-side SDKs.
   */
  apiKey: string;

  /**
   * The color used to indicate this environment in the UI
   */
  color: string;

  /**
   * Whether members who modify flags and segments through the LaunchDarkly user
   * interface are required to confirm those changes
   */
  confirmChanges: boolean;

  /**
   * Whether the environment is critical
   */
  critical: boolean;

  /**
   * Enables tracking detailed information for new flags by default
   */
  defaultTrackEvents: boolean;

  /**
   * The default time (in minutes) that the PHP SDK can cache feature flag rules
   * locally
   */
  defaultTtl: number;

  /**
   * A project-unique key for the new environment
   */
  key: string;

  /**
   * The mobile key for the environment. Use this for authorization in mobile SDKs.
   */
  mobileKey: string;

  /**
   * A human-friendly name for the new environment
   */
  name: string;

  /**
   * Whether members who modify flags and segments through the LaunchDarkly user
   * interface are required to add a comment
   */
  requireComments: boolean;

  /**
   * Ensures that one end user of the client-side SDK cannot inspect the variations
   * for another end user
   */
  secureMode: boolean;

  /**
   * A list of tags for this environment
   */
  tags: Array<string>;

  /**
   * Details on the approval settings for this environment
   */
  approvalSettings?: ApprovalRequestsAPI.ApprovalSettings;

  /**
   * Details on the approval settings for this environment for each resource kind
   */
  resourceApprovalSettings?: Record<string, ApprovalRequestsAPI.ApprovalSettings>;
}

export interface EnvironmentPost {
  /**
   * A color to indicate this environment in the UI
   */
  color: string;

  /**
   * A project-unique key for the new environment
   */
  key: string;

  /**
   * A human-friendly name for the new environment
   */
  name: string;

  /**
   * Requires confirmation for all flag and segment changes via the UI in this
   * environment
   */
  confirmChanges?: boolean;

  /**
   * Whether the environment is critical
   */
  critical?: boolean;

  /**
   * Enables tracking detailed information for new flags by default
   */
  defaultTrackEvents?: boolean;

  /**
   * The default time (in minutes) that the PHP SDK can cache feature flag rules
   * locally
   */
  defaultTtl?: number;

  /**
   * Requires comments for all flag and segment changes via the UI in this
   * environment
   */
  requireComments?: boolean;

  /**
   * Ensures that one end user of the client-side SDK cannot inspect the variations
   * for another end user
   */
  secureMode?: boolean;

  /**
   * Indicates that the new environment created will be cloned from the provided
   * source environment
   */
  source?: EnvironmentPost.Source;

  /**
   * Tags to apply to the new environment
   */
  tags?: Array<string>;
}

export namespace EnvironmentPost {
  /**
   * Indicates that the new environment created will be cloned from the provided
   * source environment
   */
  export interface Source {
    /**
     * The key of the source environment to clone from
     */
    key?: string;

    /**
     * (Optional) The version number of the source environment to clone from. Used for
     * optimistic locking
     */
    version?: number;
  }
}

export interface Environments {
  /**
   * An array of environments
   */
  items: Array<Environment>;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * The number of environments returned
   */
  totalCount?: number;
}

export interface EnvironmentRetrieveFollowersResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of flags and their followers
   */
  items?: Array<EnvironmentRetrieveFollowersResponse.Item>;
}

export namespace EnvironmentRetrieveFollowersResponse {
  export interface Item {
    /**
     * The flag key
     */
    flagKey?: string;

    /**
     * A list of members who are following this flag
     */
    followers?: Array<FollowersAPI.FollowFlagMember>;
  }
}

export interface EnvironmentCreateParams {
  /**
   * A color to indicate this environment in the UI
   */
  color: string;

  /**
   * A project-unique key for the new environment
   */
  key: string;

  /**
   * A human-friendly name for the new environment
   */
  name: string;

  /**
   * Requires confirmation for all flag and segment changes via the UI in this
   * environment
   */
  confirmChanges?: boolean;

  /**
   * Whether the environment is critical
   */
  critical?: boolean;

  /**
   * Enables tracking detailed information for new flags by default
   */
  defaultTrackEvents?: boolean;

  /**
   * The default time (in minutes) that the PHP SDK can cache feature flag rules
   * locally
   */
  defaultTtl?: number;

  /**
   * Requires comments for all flag and segment changes via the UI in this
   * environment
   */
  requireComments?: boolean;

  /**
   * Ensures that one end user of the client-side SDK cannot inspect the variations
   * for another end user
   */
  secureMode?: boolean;

  /**
   * Indicates that the new environment created will be cloned from the provided
   * source environment
   */
  source?: EnvironmentCreateParams.Source;

  /**
   * Tags to apply to the new environment
   */
  tags?: Array<string>;
}

export namespace EnvironmentCreateParams {
  /**
   * Indicates that the new environment created will be cloned from the provided
   * source environment
   */
  export interface Source {
    /**
     * The key of the source environment to clone from
     */
    key?: string;

    /**
     * (Optional) The version number of the source environment to clone from. Used for
     * optimistic locking
     */
    version?: number;
  }
}

export interface EnvironmentRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface EnvironmentUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface EnvironmentListParams {
  /**
   * A comma-separated list of filters. Each filter is of the form `field:value`.
   */
  filter?: string;

  /**
   * The number of environments to return in the response. Defaults to 20.
   */
  limit?: number;

  /**
   * Where to start in the list. This is for use with pagination. For example, an
   * offset of 10 skips the first ten items and then returns the next items in the
   * list, up to the query `limit`.
   */
  offset?: number;

  /**
   * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - )
   * sort in descending order.
   */
  sort?: string;
}

export interface EnvironmentDeleteParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface EnvironmentAPIKeyParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: The time at which you want the old SDK key to expire, in UNIX
   * milliseconds. By default, the key expires immediately. During the period between
   * this call and the time when the old SDK key expires, both the old SDK key and
   * the new SDK key will work.
   */
  expiry?: number;
}

export interface EnvironmentMobileKeyParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface EnvironmentRetrieveFollowersParams {
  /**
   * The project key
   */
  projectKey: string;
}

Environments.ContextAttributes = ContextAttributes;
Environments.Experiments = Experiments;
Environments.Flags = Flags;
Environments.Holdouts = Holdouts;
Environments.Segments = Segments;

export declare namespace Environments {
  export {
    type Environment as Environment,
    type EnvironmentPost as EnvironmentPost,
    type Environments as Environments,
    type EnvironmentRetrieveFollowersResponse as EnvironmentRetrieveFollowersResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentRetrieveParams as EnvironmentRetrieveParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentAPIKeyParams as EnvironmentAPIKeyParams,
    type EnvironmentMobileKeyParams as EnvironmentMobileKeyParams,
    type EnvironmentRetrieveFollowersParams as EnvironmentRetrieveFollowersParams,
  };

  export {
    ContextAttributes as ContextAttributes,
    type ContextAttributeRetrieveResponse as ContextAttributeRetrieveResponse,
    type ContextAttributeRetrieveContextAttributesResponse as ContextAttributeRetrieveContextAttributesResponse,
    type ContextAttributeRetrieveParams as ContextAttributeRetrieveParams,
    type ContextAttributeRetrieveContextAttributesParams as ContextAttributeRetrieveContextAttributesParams,
  };

  export {
    type ContextInstances as ContextInstances,
    type ContextInstanceRetrieveParams as ContextInstanceRetrieveParams,
    type ContextInstanceDeleteParams as ContextInstanceDeleteParams,
    type ContextInstanceSearchParams as ContextInstanceSearchParams,
  };

  export {
    type Contexts as Contexts,
    type ValuePut as ValuePut,
    type ContextRetrieveParams as ContextRetrieveParams,
    type ContextUpdateParams as ContextUpdateParams,
    type ContextSearchParams as ContextSearchParams,
  };

  export {
    Experiments as Experiments,
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
    Flags as Flags,
    type FlagEvaluateResponse as FlagEvaluateResponse,
    type FlagEvaluateParams as FlagEvaluateParams,
  };

  export {
    Holdouts as Holdouts,
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

  export {
    Segments as Segments,
    type SegmentEvaluateResponse as SegmentEvaluateResponse,
    type SegmentEvaluateParams as SegmentEvaluateParams,
  };
}
