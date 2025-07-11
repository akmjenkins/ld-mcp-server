// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ExperimentationSettings extends APIResource {
  /**
   * Get current experimentation settings for the given project
   *
   * @example
   * ```ts
   * const randomizationSettingsRep =
   *   await client.api.v2.projects.experimentationSettings.retrieveExperimentationSettings(
   *     'projectKey',
   *   );
   * ```
   */
  retrieveExperimentationSettings(
    projectKey: string,
    options?: RequestOptions,
  ): APIPromise<RandomizationSettingsRep> {
    return this._client.get(path`/api/v2/projects/${projectKey}/experimentation-settings`, options);
  }

  /**
   * Update experimentation settings for the given project
   *
   * @example
   * ```ts
   * const randomizationSettingsRep =
   *   await client.api.v2.projects.experimentationSettings.updateExperimentationSettings(
   *     'projectKey',
   *     {
   *       randomizationUnits: [
   *         {
   *           randomizationUnit: 'user',
   *           standardRandomizationUnit: 'guest',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  updateExperimentationSettings(
    projectKey: string,
    body: ExperimentationSettingUpdateExperimentationSettingsParams,
    options?: RequestOptions,
  ): APIPromise<RandomizationSettingsRep> {
    return this._client.put(path`/api/v2/projects/${projectKey}/experimentation-settings`, {
      body,
      ...options,
    });
  }
}

export interface RandomizationSettingsRep {
  /**
   * Timestamp of when the experiment was created
   */
  _creationDate?: number;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * The project ID
   */
  _projectId?: string;

  /**
   * The project key
   */
  _projectKey?: string;

  /**
   * An array of the randomization units in this project
   */
  randomizationUnits?: Array<RandomizationSettingsRep.RandomizationUnit>;
}

export namespace RandomizationSettingsRep {
  export interface RandomizationUnit {
    /**
     * The display name for the randomization unit, displayed in the LaunchDarkly user
     * interface.
     */
    _displayName?: string;

    _hidden?: boolean;

    /**
     * Whether this randomization unit is the default for experiments
     */
    default?: boolean;

    /**
     * The unit of randomization. Defaults to user.
     */
    randomizationUnit?: string;

    /**
     * One of LaunchDarkly's fixed set of standard randomization units.
     */
    standardRandomizationUnit?: string;
  }
}

export interface ExperimentationSettingUpdateExperimentationSettingsParams {
  /**
   * An array of randomization units allowed for this project.
   */
  randomizationUnits: Array<ExperimentationSettingUpdateExperimentationSettingsParams.RandomizationUnit>;
}

export namespace ExperimentationSettingUpdateExperimentationSettingsParams {
  export interface RandomizationUnit {
    /**
     * The unit of randomization. Must match the key of an existing context kind in
     * this project.
     */
    randomizationUnit: string;

    /**
     * One of LaunchDarkly's fixed set of standard randomization units.
     */
    standardRandomizationUnit: 'guest' | 'guestTime' | 'organization' | 'request' | 'user' | 'userTime';

    /**
     * If true, any experiment iterations created within this project will default to
     * using this randomization unit. A project can only have one default randomization
     * unit.
     */
    default?: boolean;
  }
}

export declare namespace ExperimentationSettings {
  export {
    type RandomizationSettingsRep as RandomizationSettingsRep,
    type ExperimentationSettingUpdateExperimentationSettingsParams as ExperimentationSettingUpdateExperimentationSettingsParams,
  };
}
