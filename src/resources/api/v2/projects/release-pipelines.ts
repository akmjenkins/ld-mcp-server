// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as StatisticsAPI from '../code-refs/statistics';
import * as ReleaseAPI from '../flags/release';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ReleasePipelines extends APIResource {
  /**
   * Get a release pipeline by key
   *
   * @example
   * ```ts
   * const releasePipeline =
   *   await client.api.v2.projects.releasePipelines.retrieve(
   *     'pipelineKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieve(
    pipelineKey: string,
    params: ReleasePipelineRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ReleasePipeline> {
    const { projectKey } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/release-pipelines/${pipelineKey}`, options);
  }

  /**
   * Updates a release pipeline.
   *
   * @example
   * ```ts
   * const releasePipeline =
   *   await client.api.v2.projects.releasePipelines.update(
   *     'pipelineKey',
   *     {
   *       projectKey: 'projectKey',
   *       name: 'Standard Pipeline',
   *       phases: [
   *         {
   *           audiences: [
   *             {
   *               environmentKey: 'environmentKey',
   *               name: 'name',
   *             },
   *           ],
   *           name: 'Phase 1 - Testing',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    pipelineKey: string,
    params: ReleasePipelineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReleasePipeline> {
    const { projectKey, ...body } = params;
    return this._client.put(path`/api/v2/projects/${projectKey}/release-pipelines/${pipelineKey}`, {
      body,
      ...options,
    });
  }

  /**
   * Deletes a release pipeline.
   *
   * You cannot delete the default release pipeline.
   *
   * If you want to delete a release pipeline that is currently the default, create a
   * second release pipeline and set it as the default. Then delete the first release
   * pipeline. To change the default release pipeline, use the
   * [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project)
   * API to set the `defaultReleasePipelineKey`.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.releasePipelines.delete(
   *   'pipelineKey',
   *   { projectKey: 'projectKey' },
   * );
   * ```
   */
  delete(
    pipelineKey: string,
    params: ReleasePipelineDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectKey } = params;
    return this._client.delete(path`/api/v2/projects/${projectKey}/release-pipelines/${pipelineKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a new release pipeline.
   *
   * The first release pipeline you create is automatically set as the default
   * release pipeline for your project. To change the default release pipeline, use
   * the
   * [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project)
   * API to set the `defaultReleasePipelineKey`.
   *
   * You can create up to 20 release pipelines per project.
   *
   * @example
   * ```ts
   * const releasePipeline =
   *   await client.api.v2.projects.releasePipelines.releasePipelines(
   *     'projectKey',
   *     {
   *       key: 'standard-pipeline',
   *       name: 'Standard Pipeline',
   *       phases: [
   *         {
   *           audiences: [
   *             {
   *               environmentKey: 'environmentKey',
   *               name: 'name',
   *             },
   *           ],
   *           name: 'Phase 1 - Testing',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  releasePipelines(
    projectKey: string,
    body: ReleasePipelineReleasePipelinesParams,
    options?: RequestOptions,
  ): APIPromise<ReleasePipeline> {
    return this._client.post(path`/api/v2/projects/${projectKey}/release-pipelines`, { body, ...options });
  }

  /**
   * Get all release pipelines for a project.
   *
   * ### Filtering release pipelines
   *
   * LaunchDarkly supports the following fields for filters:
   *
   * - `query` is a string that matches against the release pipeline `key`, `name`,
   *   and `description`. It is not case sensitive. For example:
   *   `?filter=query:examplePipeline`.
   *
   * - `env` is a string that matches an environment key. For example:
   *   `?filter=env:production`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.releasePipelines.retrieveReleasePipelines(
   *     'projectKey',
   *   );
   * ```
   */
  retrieveReleasePipelines(
    projectKey: string,
    query: ReleasePipelineRetrieveReleasePipelinesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReleasePipelineRetrieveReleasePipelinesResponse> {
    return this._client.get(path`/api/v2/projects/${projectKey}/release-pipelines`, { query, ...options });
  }

  /**
   * Get details on the progression of all releases, across all flags, for a release
   * pipeline
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.releasePipelines.retrieveReleases(
   *     'pipelineKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieveReleases(
    pipelineKey: string,
    params: ReleasePipelineRetrieveReleasesParams,
    options?: RequestOptions,
  ): APIPromise<ReleasePipelineRetrieveReleasesResponse> {
    const { projectKey, ...query } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/release-pipelines/${pipelineKey}/releases`, {
      query,
      ...options,
    });
  }
}

export interface CreatePhaseInput {
  /**
   * An ordered list of the audiences for this release phase. Each audience
   * corresponds to a LaunchDarkly environment.
   */
  audiences: Array<CreatePhaseInput.Audience>;

  /**
   * The release phase name
   */
  name: string;

  /**
   * The configuration for the phase's rollout.
   */
  configuration?: ReleaseAPI.PhaseConfiguration;
}

export namespace CreatePhaseInput {
  export interface Audience {
    /**
     * A project-unique key for the environment.
     */
    environmentKey: string;

    /**
     * The audience name
     */
    name: string;

    /**
     * The configuration for the audience's rollout.
     */
    configuration?: ReleaseAPI.AudienceConfiguration;

    /**
     * Segments targeted by this audience.
     */
    segmentKeys?: Array<string>;
  }
}

export interface ReleasePipeline {
  /**
   * Timestamp of when the release pipeline was created
   */
  createdAt: string;

  /**
   * The release pipeline key
   */
  key: string;

  /**
   * The release pipeline name
   */
  name: string;

  /**
   * An ordered list of the release pipeline phases. Each phase is a logical grouping
   * of one or more environments that share attributes for rolling out changes.
   */
  phases: Array<ReleasePipeline.Phase>;

  /**
   * Details on the allowed and denied actions for this release pipeline
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * Whether this release pipeline is a legacy pipeline
   */
  _isLegacy?: boolean;

  /**
   * The release pipeline version
   */
  _version?: number;

  /**
   * The release pipeline description
   */
  description?: string;

  /**
   * Whether this release pipeline is the default pipeline for the project
   */
  isProjectDefault?: boolean;

  /**
   * A list of the release pipeline's tags
   */
  tags?: Array<string>;
}

export namespace ReleasePipeline {
  export interface Phase {
    /**
     * The phase ID
     */
    id: string;

    /**
     * An ordered list of the audiences for this release phase. Each audience
     * corresponds to a LaunchDarkly environment.
     */
    audiences: Array<Phase.Audience>;

    /**
     * The release phase name
     */
    name: string;

    /**
     * The configuration for the phase's rollout.
     */
    configuration?: ReleaseAPI.PhaseConfiguration;
  }

  export namespace Phase {
    export interface Audience {
      /**
       * The release phase name
       */
      name: string;

      /**
       * The configuration for the audience's rollout.
       */
      configuration?: ReleaseAPI.AudienceConfiguration;

      /**
       * Details about the environment. When the environment has been deleted, this field
       * is omitted.
       */
      environment?: ReleaseAPI.EnvironmentSummary;

      /**
       * A list of segment keys
       */
      segmentKeys?: Array<string>;
    }
  }
}

export interface ReleasePipelineRetrieveReleasePipelinesResponse {
  /**
   * An array of release pipelines
   */
  items: Array<ReleasePipeline>;

  /**
   * Total number of release pipelines
   */
  totalCount: number;
}

export interface ReleasePipelineRetrieveReleasesResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The number of active releases
   */
  activeCount: number;

  /**
   * The number of completed releases
   */
  completedCount: number;

  /**
   * A list of details for each release, across all flags, for this release pipeline
   */
  items: Array<ReleasePipelineRetrieveReleasesResponse.Item>;

  /**
   * A list of details for each phase, across all releases, for this release pipeline
   */
  phases: Array<ReleasePipelineRetrieveReleasesResponse.Phase>;

  /**
   * The total number of releases for this release pipeline
   */
  totalCount: number;
}

export namespace ReleasePipelineRetrieveReleasesResponse {
  export interface Item {
    /**
     * Timestamp of when the release was created
     */
    _createdAt: number;

    /**
     * The location and content type of related resources
     */
    _links: Record<string, StatisticsAPI.Link>;

    /**
     * The flag key
     */
    flagKey: string;

    /**
     * Timestamp of when the release was completed
     */
    _completedAt?: number;

    /**
     * The ID of the currently active release phase
     */
    activePhaseId?: string;
  }

  export interface Phase {
    /**
     * The phase ID
     */
    _id: string;

    /**
     * The release phase name
     */
    name: string;

    /**
     * The number of active releases in this phase
     */
    releaseCount: number;
  }
}

export interface ReleasePipelineRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface ReleasePipelineUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param: The name of the release pipeline
   */
  name: string;

  /**
   * Body param: A logical grouping of one or more environments that share attributes
   * for rolling out changes
   */
  phases: Array<CreatePhaseInput>;

  /**
   * Body param: The release pipeline description
   */
  description?: string;

  /**
   * Body param: A list of tags for this release pipeline
   */
  tags?: Array<string>;
}

export interface ReleasePipelineDeleteParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface ReleasePipelineReleasePipelinesParams {
  /**
   * The unique identifier of this release pipeline
   */
  key: string;

  /**
   * The name of the release pipeline
   */
  name: string;

  /**
   * A logical grouping of one or more environments that share attributes for rolling
   * out changes
   */
  phases: Array<CreatePhaseInput>;

  /**
   * The release pipeline description
   */
  description?: string;

  /**
   * Whether or not the pipeline is enabled for Release Automation.
   */
  isLegacy?: boolean;

  /**
   * Whether or not the newly created pipeline should be set as the default pipeline
   * for this project
   */
  isProjectDefault?: boolean;

  /**
   * A list of tags for this release pipeline
   */
  tags?: Array<string>;
}

export interface ReleasePipelineRetrieveReleasePipelinesParams {
  /**
   * A comma-separated list of filters. Each filter is of the form field:value. Read
   * the endpoint description for a full list of available filter fields.
   */
  filter?: string;

  /**
   * The maximum number of items to return. Defaults to 20.
   */
  limit?: number;

  /**
   * Where to start in the list. Defaults to 0. Use this with pagination. For
   * example, an offset of 10 skips the first ten items and then returns the next
   * items in the list, up to the query `limit`.
   */
  offset?: number;
}

export interface ReleasePipelineRetrieveReleasesParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: Accepts filter by `status` and `activePhaseId`. `status` can take a
   * value of `completed` or `active`. `activePhaseId` takes a UUID and will filter
   * results down to releases active on the specified phase. Providing
   * `status equals completed` along with an `activePhaseId` filter will return an
   * error as they are disjoint sets of data. The combination of
   * `status equals active` and `activePhaseId` will return the same results as
   * `activePhaseId` alone.
   */
  filter?: string;

  /**
   * Query param: The maximum number of items to return. Defaults to 20.
   */
  limit?: number;

  /**
   * Query param: Where to start in the list. Defaults to 0. Use this with
   * pagination. For example, an offset of 10 skips the first ten items and then
   * returns the next items in the list, up to the query `limit`.
   */
  offset?: number;
}

export declare namespace ReleasePipelines {
  export {
    type CreatePhaseInput as CreatePhaseInput,
    type ReleasePipeline as ReleasePipeline,
    type ReleasePipelineRetrieveReleasePipelinesResponse as ReleasePipelineRetrieveReleasePipelinesResponse,
    type ReleasePipelineRetrieveReleasesResponse as ReleasePipelineRetrieveReleasesResponse,
    type ReleasePipelineRetrieveParams as ReleasePipelineRetrieveParams,
    type ReleasePipelineUpdateParams as ReleasePipelineUpdateParams,
    type ReleasePipelineDeleteParams as ReleasePipelineDeleteParams,
    type ReleasePipelineReleasePipelinesParams as ReleasePipelineReleasePipelinesParams,
    type ReleasePipelineRetrieveReleasePipelinesParams as ReleasePipelineRetrieveReleasePipelinesParams,
    type ReleasePipelineRetrieveReleasesParams as ReleasePipelineRetrieveReleasesParams,
  };
}
