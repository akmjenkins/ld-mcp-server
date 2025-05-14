// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReleaseAPI from './release';
import * as AuditlogAPI from '../auditlog';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ReleaseResource extends APIResource {
  /**
   * Get currently active release for a flag
   *
   * @example
   * ```ts
   * const release = await client.api.v2.flags.release.list(
   *   'flagKey',
   *   { projectKey: 'projectKey' },
   * );
   * ```
   */
  list(flagKey: string, params: ReleaseListParams, options?: RequestOptions): APIPromise<Release> {
    const { projectKey } = params;
    return this._client.get(path`/api/v2/flags/${projectKey}/${flagKey}/release`, options);
  }

  /**
   * Deletes a release from a flag
   *
   * @example
   * ```ts
   * await client.api.v2.flags.release.deleteAll('flagKey', {
   *   projectKey: 'projectKey',
   * });
   * ```
   */
  deleteAll(flagKey: string, params: ReleaseDeleteAllParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey } = params;
    return this._client.delete(path`/api/v2/flags/${projectKey}/${flagKey}/release`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint is only available for releases that are part of a legacy release
   * pipeline. Releases for new release pipelines should use the
   * [Update phase status for release](https://launchdarkly.com/docs/api/releases-beta/update-phase-status)
   * endpoint. To learn more about migrating from legacy release pipelines to fully
   * automated release pipelines, read the
   * [Release pipeline migration guide](https://launchdarkly.com/docs/guides/flags/release-pipeline-migration).
   *
   * Update currently active release for a flag. Updating releases requires the
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) format. To learn
   * more, read [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * You can only use this endpoint to mark a release phase complete or incomplete.
   * To indicate which phase to update, use the array index in the `path`. For
   * example, to mark the first phase of a release as complete, use the following
   * request body:
   *
   * ```
   *   [
   *     {
   *       "op": "replace",
   *       "path": "/phase/0/complete",
   *       "value": true
   *     }
   *   ]
   * ```
   *
   * @example
   * ```ts
   * const release = await client.api.v2.flags.release.patchAll(
   *   'flagKey',
   *   {
   *     projectKey: 'projectKey',
   *     body: [{ op: 'replace', path: '/phases/0/complete' }],
   *   },
   * );
   * ```
   */
  patchAll(flagKey: string, params: ReleasePatchAllParams, options?: RequestOptions): APIPromise<Release> {
    const { projectKey, body } = params;
    return this._client.patch(path`/api/v2/flags/${projectKey}/${flagKey}/release`, {
      body: body,
      ...options,
    });
  }
}

export interface AudienceConfiguration {
  /**
   * The release strategy
   */
  releaseStrategy: string;

  /**
   * Whether or not the audience requires approval
   */
  requireApproval: boolean;

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
   * The configuration for the release guardian.
   */
  releaseGuardianConfiguration?: AudienceConfiguration.ReleaseGuardianConfiguration;
}

export namespace AudienceConfiguration {
  /**
   * The configuration for the release guardian.
   */
  export interface ReleaseGuardianConfiguration {
    /**
     * The monitoring window in milliseconds
     */
    monitoringWindowMilliseconds: number;

    /**
     * Whether or not to roll back on regression
     */
    rollbackOnRegression: boolean;

    /**
     * The rollout weight percentage
     */
    rolloutWeight: number;

    /**
     * The randomization unit for the measured rollout
     */
    randomizationUnit?: string;
  }
}

export interface EnvironmentSummary {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The color used to indicate this environment in the UI
   */
  color: string;

  /**
   * A project-unique key for the environment
   */
  key: string;

  /**
   * A human-friendly name for the environment
   */
  name: string;
}

export type PhaseConfiguration = unknown;

export interface Release {
  /**
   * The release version
   */
  _version: number;

  /**
   * The release pipeline name
   */
  name: string;

  /**
   * An ordered list of the release pipeline phases
   */
  phases: Array<Release.Phase>;

  /**
   * The release pipeline description
   */
  releasePipelineDescription: string;

  /**
   * The release pipeline key
   */
  releasePipelineKey: string;

  /**
   * Timestamp of when the release was canceled
   */
  _canceledAt?: number;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * The chosen release variation ID to use across all phases of a release
   */
  _releaseVariationId?: string;
}

export namespace Release {
  export interface Phase {
    /**
     * A logical grouping of one or more environments that share attributes for rolling
     * out changes
     */
    _audiences: Array<Phase.Audience>;

    /**
     * Timestamp of when the release phase was created
     */
    _creationDate: number;

    /**
     * The phase ID
     */
    _id: string;

    /**
     * The release phase name
     */
    _name: string;

    /**
     * Whether this phase is complete
     */
    complete: boolean;

    /**
     * Details about how this phase was marked as complete
     */
    _completedBy?: Phase._CompletedBy;

    /**
     * Timestamp of when the release phase was completed
     */
    _completionDate?: number;

    /**
     * Timestamp of when the release phase was started
     */
    _startedDate?: number;

    /**
     * The phase configuration
     */
    configuration?: ReleaseAPI.PhaseConfiguration;

    /**
     * Whether or not this phase has started
     */
    started?: boolean;

    /**
     * Status of the phase
     */
    status?: 'NotStarted' | 'ReadyToStart' | 'Started' | 'Paused' | 'Complete';
  }

  export namespace Phase {
    export interface Audience {
      /**
       * The audience ID
       */
      _id: string;

      /**
       * The release phase name
       */
      name: string;

      /**
       * The location and content type of related resources
       */
      _links?: Record<string, StatisticsAPI.Link>;

      /**
       * The rules IDs added or updated by this audience
       */
      _ruleIds?: Array<string>;

      /**
       * The audience configuration
       */
      configuration?: ReleaseAPI.AudienceConfiguration;

      /**
       * Details about the environment. If the environment is deleted, this field will be
       * omitted.
       */
      environment?: ReleaseAPI.EnvironmentSummary;

      /**
       * A list of segment keys
       */
      segmentKeys?: Array<string>;

      /**
       * The audience status
       */
      status?: string;
    }

    /**
     * Details about how this phase was marked as complete
     */
    export interface _CompletedBy {
      /**
       * The service token used to mark this phase as complete
       */
      token?: AuditlogAPI.TokenSummary;

      /**
       * The LaunchDarkly member who marked this phase as complete
       */
      member?: RelayAutoConfigsAPI.MemberSummary;
    }
  }
}

export interface ReleaseListParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface ReleaseDeleteAllParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface ReleasePatchAllParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export declare namespace ReleaseResource {
  export {
    type AudienceConfiguration as AudienceConfiguration,
    type EnvironmentSummary as EnvironmentSummary,
    type PhaseConfiguration as PhaseConfiguration,
    type Release as Release,
    type ReleaseListParams as ReleaseListParams,
    type ReleaseDeleteAllParams as ReleaseDeleteAllParams,
    type ReleasePatchAllParams as ReleasePatchAllParams,
  };
}
