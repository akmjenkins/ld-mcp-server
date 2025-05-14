// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Flags extends APIResource {
  /**
   * Get a single flag setting for a user by flag key. <br /><br />The `_value` is
   * the flag variation that the user receives. The `setting` indicates whether
   * you've explicitly targeted a user to receive a particular variation. For
   * example, if you have turned off a feature flag for a user, this setting will be
   * `false`. The example response indicates that the user `Abbie_Braun` has the
   * `sort.order` flag enabled.
   *
   * @example
   * ```ts
   * const flag = await client.api.v2.users.flags.retrieve(
   *   'featureFlagKey',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *     userKey: 'userKey',
   *   },
   * );
   * ```
   */
  retrieve(
    featureFlagKey: string,
    params: FlagRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FlagRetrieveResponse> {
    const { projectKey, environmentKey, userKey } = params;
    return this._client.get(
      path`/api/v2/users/${projectKey}/${environmentKey}/${userKey}/flags/${featureFlagKey}`,
      options,
    );
  }

  /**
   * Enable or disable a feature flag for a user based on their key.
   *
   * Omitting the `setting` attribute from the request body, or including a `setting`
   * of `null`, erases the current setting for a user.
   *
   * If you previously patched the flag, and the patch included the user's data,
   * LaunchDarkly continues to use that data. If LaunchDarkly has never encountered
   * the user's key before, it calculates the flag values based on the user key
   * alone.
   *
   * @example
   * ```ts
   * await client.api.v2.users.flags.update('featureFlagKey', {
   *   projectKey: 'projectKey',
   *   environmentKey: 'environmentKey',
   *   userKey: 'userKey',
   * });
   * ```
   */
  update(featureFlagKey: string, params: FlagUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey, userKey, ...body } = params;
    return this._client.put(
      path`/api/v2/users/${projectKey}/${environmentKey}/${userKey}/flags/${featureFlagKey}`,
      { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Get the current flag settings for a given user. <br /><br />The `_value` is the
   * flag variation that the user receives. The `setting` indicates whether you've
   * explicitly targeted a user to receive a particular variation. For example, if
   * you have turned off a feature flag for a user, this setting will be `false`. The
   * example response indicates that the user `Abbie_Braun` has the `sort.order` flag
   * enabled and the `alternate.page` flag disabled, and that the user has not been
   * explicitly targeted to receive a particular variation.
   *
   * @example
   * ```ts
   * const flags = await client.api.v2.users.flags.list(
   *   'userKey',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *   },
   * );
   * ```
   */
  list(userKey: string, params: FlagListParams, options?: RequestOptions): APIPromise<FlagListResponse> {
    const { projectKey, environmentKey } = params;
    return this._client.get(path`/api/v2/users/${projectKey}/${environmentKey}/${userKey}/flags`, options);
  }
}

export interface FlagRetrieveResponse {
  /**
   * The location and content type of related resources.
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The value of the flag variation that the user receives. If there is no defined
   * default rule, this is null.
   */
  _value: unknown;

  /**
   * Whether the user is explicitly targeted to receive a particular variation. The
   * setting is false if you have turned off a feature flag for a user. It is null if
   * you haven't assigned that user to a specific variation.
   */
  setting: unknown;

  /**
   * Contains information about why that variation was selected.
   */
  reason?: FlagRetrieveResponse.Reason;
}

export namespace FlagRetrieveResponse {
  /**
   * Contains information about why that variation was selected.
   */
  export interface Reason {
    /**
     * Describes the general reason that LaunchDarkly selected this variation.
     */
    kind: string;

    /**
     * The specific error type if the kind is 'ERROR'.
     */
    errorKind?: string;

    /**
     * Indicates whether the evaluation occurred as part of an experiment.
     */
    inExperiment?: boolean;

    /**
     * The key of the flag that failed if the kind is 'PREREQUISITE_FAILED'.
     */
    prerequisiteKey?: string;

    /**
     * The unique identifier of the matching rule if the kind is 'RULE_MATCH'.
     */
    ruleID?: string;

    /**
     * The positional index of the matching rule if the kind is 'RULE_MATCH'. The index
     * is 0-based.
     */
    ruleIndex?: number;
  }
}

export interface FlagListResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of flag settings for the user
   */
  items: Record<string, FlagListResponse.Items>;
}

export namespace FlagListResponse {
  export interface Items {
    /**
     * The location and content type of related resources.
     */
    _links: Record<string, StatisticsAPI.Link>;

    /**
     * The value of the flag variation that the user receives. If there is no defined
     * default rule, this is null.
     */
    _value: unknown;

    /**
     * Whether the user is explicitly targeted to receive a particular variation. The
     * setting is false if you have turned off a feature flag for a user. It is null if
     * you haven't assigned that user to a specific variation.
     */
    setting: unknown;

    /**
     * Contains information about why that variation was selected.
     */
    reason?: Items.Reason;
  }

  export namespace Items {
    /**
     * Contains information about why that variation was selected.
     */
    export interface Reason {
      /**
       * Describes the general reason that LaunchDarkly selected this variation.
       */
      kind: string;

      /**
       * The specific error type if the kind is 'ERROR'.
       */
      errorKind?: string;

      /**
       * Indicates whether the evaluation occurred as part of an experiment.
       */
      inExperiment?: boolean;

      /**
       * The key of the flag that failed if the kind is 'PREREQUISITE_FAILED'.
       */
      prerequisiteKey?: string;

      /**
       * The unique identifier of the matching rule if the kind is 'RULE_MATCH'.
       */
      ruleID?: string;

      /**
       * The positional index of the matching rule if the kind is 'RULE_MATCH'. The index
       * is 0-based.
       */
      ruleIndex?: number;
    }
  }
}

export interface FlagRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The user key
   */
  userKey: string;
}

export interface FlagUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Path param: The user key
   */
  userKey: string;

  /**
   * Body param: Optional comment describing the change
   */
  comment?: string;

  /**
   * Body param: The variation value to set for the context. Must match the flag's
   * variation type.
   */
  setting?: unknown;
}

export interface FlagListParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export declare namespace Flags {
  export {
    type FlagRetrieveResponse as FlagRetrieveResponse,
    type FlagListResponse as FlagListResponse,
    type FlagRetrieveParams as FlagRetrieveParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagListParams as FlagListParams,
  };
}
