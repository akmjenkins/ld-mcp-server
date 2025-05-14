// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class DependentFlags extends APIResource {
  /**
   * > ### Flag prerequisites is an Enterprise feature
   * >
   * > Flag prerequisites is available to customers on an Enterprise plan. To learn
   * > more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade
   * > your plan, [contact Sales](https://launchdarkly.com/contact-sales/).
   *
   * List dependent flags across all environments for the flag specified in the path
   * parameters. A dependent flag is a flag that uses another flag as a prerequisite.
   * To learn more, read
   * [Flag prerequisites](https://launchdarkly.com/docs/home/flags/prereqs).
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.flags.dependentFlags.retrieveDependentFlags(
   *     'featureFlagKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieveDependentFlags(
    featureFlagKey: string,
    params: DependentFlagRetrieveDependentFlagsParams,
    options?: RequestOptions,
  ): APIPromise<DependentFlagRetrieveDependentFlagsResponse> {
    const { projectKey } = params;
    return this._client.get(path`/api/v2/flags/${projectKey}/${featureFlagKey}/dependent-flags`, options);
  }
}

export interface DependentFlagRetrieveDependentFlagsResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * Details on how to access the prerequisite flag in the LaunchDarkly UI
   */
  _site: StatisticsAPI.Link;

  /**
   * An array of dependent flags with their environment information
   */
  items: Array<DependentFlagRetrieveDependentFlagsResponse.Item>;
}

export namespace DependentFlagRetrieveDependentFlagsResponse {
  export interface Item {
    /**
     * A list of environments in which the dependent flag appears
     */
    environments: Array<Item.Environment>;

    /**
     * The flag key
     */
    key: string;

    /**
     * The flag name
     */
    name?: string;
  }

  export namespace Item {
    export interface Environment {
      /**
       * The location and content type of related resources
       */
      _links: Record<string, StatisticsAPI.Link>;

      /**
       * Details on how to access the dependent flag in this environment in the
       * LaunchDarkly UI
       */
      _site: StatisticsAPI.Link;

      /**
       * The environment key
       */
      key: string;

      /**
       * The environment name
       */
      name?: string;
    }
  }
}

export interface DependentFlagRetrieveDependentFlagsParams {
  /**
   * The project key
   */
  projectKey: string;
}

export declare namespace DependentFlags {
  export {
    type DependentFlagRetrieveDependentFlagsResponse as DependentFlagRetrieveDependentFlagsResponse,
    type DependentFlagRetrieveDependentFlagsParams as DependentFlagRetrieveDependentFlagsParams,
  };
}
