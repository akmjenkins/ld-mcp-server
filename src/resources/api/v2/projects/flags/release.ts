// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ReleaseAPI from '../../flags/release';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Release extends APIResource {
  /**
   * Creates a release by adding a flag to a release pipeline
   *
   * @example
   * ```ts
   * const release =
   *   await client.api.v2.projects.flags.release.create(
   *     'flagKey',
   *     {
   *       projectKey: 'projectKey',
   *       releasePipelineKey: 'releasePipelineKey',
   *     },
   *   );
   * ```
   */
  create(
    flagKey: string,
    params: ReleaseCreateParams,
    options?: RequestOptions,
  ): APIPromise<ReleaseAPI.Release> {
    const { projectKey, ...body } = params;
    return this._client.put(path`/api/v2/projects/${projectKey}/flags/${flagKey}/release`, {
      body,
      ...options,
    });
  }

  /**
   * Updates the execution status of a phase of a release
   *
   * @example
   * ```ts
   * const release =
   *   await client.api.v2.projects.flags.release.update(
   *     'phaseId',
   *     { projectKey: 'projectKey', flagKey: 'flagKey' },
   *   );
   * ```
   */
  update(
    phaseID: string,
    params: ReleaseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReleaseAPI.Release> {
    const { projectKey, flagKey, ...body } = params;
    return this._client.put(path`/api/v2/projects/${projectKey}/flags/${flagKey}/release/phases/${phaseID}`, {
      body,
      ...options,
    });
  }
}

export interface ReleaseCreateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param: The key of the release pipeline to attach the flag to
   */
  releasePipelineKey: string;

  /**
   * Body param: The variation id to release to across all phases
   */
  releaseVariationId?: string;
}

export interface ReleaseUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The flag key
   */
  flagKey: string;

  /**
   * Body param: Extra configuration for audiences required upon phase
   * initialization.
   */
  audiences?: Array<ReleaseUpdateParams.Audience>;

  /**
   * Body param: Status of the phase
   */
  status?: 'NotStarted' | 'ReadyToStart' | 'Started' | 'Paused' | 'Complete';
}

export namespace ReleaseUpdateParams {
  export interface Audience {
    /**
     * UUID of the audience.
     */
    audienceId?: string;

    /**
     * An array of member IDs. These members are notified to review the approval
     * request.
     */
    notifyMemberIds?: Array<string>;

    /**
     * An array of team keys. The members of these teams are notified to review the
     * approval request.
     */
    notifyTeamKeys?: Array<string>;

    /**
     * Optional configuration details for the specified audience. Will default to the
     * release pipeline's audience configuration if omitted.
     */
    releaseGuardianConfiguration?: Audience.ReleaseGuardianConfiguration;
  }

  export namespace Audience {
    /**
     * Optional configuration details for the specified audience. Will default to the
     * release pipeline's audience configuration if omitted.
     */
    export interface ReleaseGuardianConfiguration {
      /**
       * The monitoring window in milliseconds
       */
      monitoringWindowMilliseconds?: number;

      /**
       * The randomization unit for the measured rollout
       */
      randomizationUnit?: string;

      /**
       * Whether or not to rollback on regression
       */
      rollbackOnRegression?: boolean;

      /**
       * The rollout weight
       */
      rolloutWeight?: number;
    }
  }
}

export declare namespace Release {
  export { type ReleaseCreateParams as ReleaseCreateParams, type ReleaseUpdateParams as ReleaseUpdateParams };
}
