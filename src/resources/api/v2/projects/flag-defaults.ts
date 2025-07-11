// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import * as FlagsAPI from '../flags/flags';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class FlagDefaults extends APIResource {
  /**
   * Get the flag defaults for a specific project.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.flagDefaults.retrieveFlagDefaults(
   *     'projectKey',
   *   );
   * ```
   */
  retrieveFlagDefaults(
    projectKey: string,
    options?: RequestOptions,
  ): APIPromise<FlagDefaultRetrieveFlagDefaultsResponse> {
    return this._client.get(path`/api/v2/projects/${projectKey}/flag-defaults`, options);
  }

  /**
   * Create or update flag defaults for a project.
   *
   * @example
   * ```ts
   * const upsertPayloadRep =
   *   await client.api.v2.projects.flagDefaults.updateFlagDefaults(
   *     'projectKey',
   *     {
   *       booleanDefaults: {
   *         falseDescription: 'serve false',
   *         falseDisplayName: 'False',
   *         offVariation: 1,
   *         onVariation: 0,
   *         trueDescription: 'serve true',
   *         trueDisplayName: 'True',
   *       },
   *       defaultClientSideAvailability: {
   *         usingEnvironmentId: true,
   *         usingMobileKey: true,
   *       },
   *       tags: ['tag-1', 'tag-2'],
   *       temporary: true,
   *     },
   *   );
   * ```
   */
  updateFlagDefaults(
    projectKey: string,
    body: FlagDefaultUpdateFlagDefaultsParams,
    options?: RequestOptions,
  ): APIPromise<UpsertPayloadRep> {
    return this._client.put(path`/api/v2/projects/${projectKey}/flag-defaults`, { body, ...options });
  }
}

export interface BooleanFlagDefaults {
  /**
   * The description for the false variation
   */
  falseDescription: string;

  /**
   * The display name for the false variation, displayed in the LaunchDarkly user
   * interface
   */
  falseDisplayName: string;

  /**
   * The variation index of the flag variation to use for the default targeting
   * behavior when a flag's targeting is off
   */
  offVariation: number;

  /**
   * The variation index of the flag variation to use for the default targeting
   * behavior when a flag's targeting is on and the target did not match any rules
   */
  onVariation: number;

  /**
   * The description for the true variation
   */
  trueDescription: string;

  /**
   * The display name for the true variation, displayed in the LaunchDarkly user
   * interface
   */
  trueDisplayName: string;
}

export interface DefaultClientSideAvailability {
  /**
   * Whether to enable availability for client-side SDKs
   */
  usingEnvironmentId: boolean;

  /**
   * Whether to enable availability for mobile SDKs
   */
  usingMobileKey: boolean;
}

export interface UpsertPayloadRep {
  booleanDefaults: BooleanFlagDefaults;

  /**
   * Which client-side SDK types can use this flag by default.
   */
  defaultClientSideAvailability: DefaultClientSideAvailability;

  /**
   * A list of default tags for each flag
   */
  tags: Array<string>;

  /**
   * Whether the flag should be temporary by default
   */
  temporary: boolean;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export interface FlagDefaultRetrieveFlagDefaultsResponse {
  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * Defaults for boolean flags within this project
   */
  booleanDefaults?: FlagDefaultRetrieveFlagDefaultsResponse.BooleanDefaults;

  /**
   * Which client-side SDK types can use this flag by default. Set
   * <code>usingMobileKey</code> to make the flag available for mobile SDKs. Set
   * <code>usingEnvironmentId</code> to make the flag available for client-side SDKs.
   */
  defaultClientSideAvailability?: FlagsAPI.ClientSideAvailability;

  /**
   * A unique key for the flag default
   */
  key?: string;

  /**
   * A list of default tags for each flag
   */
  tags?: Array<string>;

  /**
   * Whether the flag should be temporary by default
   */
  temporary?: boolean;
}

export namespace FlagDefaultRetrieveFlagDefaultsResponse {
  /**
   * Defaults for boolean flags within this project
   */
  export interface BooleanDefaults {
    /**
     * The description for the false variation
     */
    falseDescription?: string;

    /**
     * The display name for the false variation, displayed in the LaunchDarkly user
     * interface
     */
    falseDisplayName?: string;

    /**
     * The variation index of the flag variation to use for the default targeting
     * behavior when a flag's targeting is off
     */
    offVariation?: number;

    /**
     * The variation index of the flag variation to use for the default targeting
     * behavior when a flag's targeting is on and the target did not match any rules
     */
    onVariation?: number;

    /**
     * The description for the true variation
     */
    trueDescription?: string;

    /**
     * The display name for the true variation, displayed in the LaunchDarkly user
     * interface
     */
    trueDisplayName?: string;
  }
}

export interface FlagDefaultUpdateFlagDefaultsParams {
  booleanDefaults: BooleanFlagDefaults;

  /**
   * Which client-side SDK types can use this flag by default.
   */
  defaultClientSideAvailability: DefaultClientSideAvailability;

  /**
   * A list of default tags for each flag
   */
  tags: Array<string>;

  /**
   * Whether the flag should be temporary by default
   */
  temporary: boolean;
}

export declare namespace FlagDefaults {
  export {
    type BooleanFlagDefaults as BooleanFlagDefaults,
    type DefaultClientSideAvailability as DefaultClientSideAvailability,
    type UpsertPayloadRep as UpsertPayloadRep,
    type FlagDefaultRetrieveFlagDefaultsResponse as FlagDefaultRetrieveFlagDefaultsResponse,
    type FlagDefaultUpdateFlagDefaultsParams as FlagDefaultUpdateFlagDefaultsParams,
  };
}
