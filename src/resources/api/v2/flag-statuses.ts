// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class FlagStatuses extends APIResource {
  /**
   * Get the status for a particular feature flag.
   *
   * @example
   * ```ts
   * const flagStatusRep =
   *   await client.api.v2.flagStatuses.retrieve(
   *     'featureFlagKey',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    featureFlagKey: string,
    params: FlagStatusRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FlagStatusRep> {
    const { projectKey, environmentKey } = params;
    return this._client.get(
      path`/api/v2/flag-statuses/${projectKey}/${environmentKey}/${featureFlagKey}`,
      options,
    );
  }
}

export interface FlagStatusRep {
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * Status of the flag
   */
  name: 'new' | 'inactive' | 'active' | 'launched';

  /**
   * Default value seen from code
   */
  default?: unknown;

  /**
   * Timestamp of last time flag was requested
   */
  lastRequested?: string;
}

export interface FlagStatusRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export declare namespace FlagStatuses {
  export { type FlagStatusRep as FlagStatusRep, type FlagStatusRetrieveParams as FlagStatusRetrieveParams };
}
