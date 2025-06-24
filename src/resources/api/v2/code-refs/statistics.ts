// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from './statistics';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Statistics extends APIResource {
  /**
   * Get statistics about all the code references across repositories for all flags
   * in your project that have code references in the default branch, for example,
   * `main`. Optionally, you can include the `flagKey` query parameter to limit your
   * request to statistics about code references for a single flag. This endpoint
   * returns the number of references to your flag keys in your repositories, as well
   * as a link to each repository.
   *
   * @example
   * ```ts
   * const statistic =
   *   await client.api.v2.codeRefs.statistics.retrieve(
   *     'projectKey',
   *   );
   * ```
   */
  retrieve(
    projectKey: string,
    query: StatisticRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatisticRetrieveResponse> {
    return this._client.get(path`/api/v2/code-refs/statistics/${projectKey}`, { query, ...options });
  }

  /**
   * Get links for all projects that have code references.
   *
   * @example
   * ```ts
   * const statistics =
   *   await client.api.v2.codeRefs.statistics.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<StatisticListResponse> {
    return this._client.get('/api/v2/code-refs/statistics', options);
  }
}

export interface Link {
  href?: string;

  type?: string;
}

export interface StatisticRetrieveResponse {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: Link };

  /**
   * A map of flag keys to a list of code reference statistics for each code
   * repository in which the flag key appears
   */
  flags: { [key: string]: Array<StatisticRetrieveResponse.Flag> };
}

export namespace StatisticRetrieveResponse {
  export interface Flag {
    /**
     * The location and content type of related resources
     */
    _links: { [key: string]: StatisticsAPI.Link };

    /**
     * The repository's default branch
     */
    defaultBranch: string;

    /**
     * Whether or not a repository is enabled for code reference scanning
     */
    enabled: boolean;

    /**
     * The number of files in which the flag appears in this repository
     */
    fileCount: number;

    /**
     * The number of code reference hunks in which the flag appears in this repository
     */
    hunkCount: number;

    /**
     * The repository name
     */
    name: string;

    /**
     * A URL to access the repository
     */
    sourceLink: string;

    /**
     * The type of repository
     */
    type: 'bitbucket' | 'custom' | 'github' | 'gitlab';

    /**
     * The version of the repository's saved information
     */
    version: number;

    /**
     * The timestamp of the latest commit in the repository including the flag
     */
    latestCommitTime?: number;
  }
}

export interface StatisticListResponse {
  /**
   * The location and content type of all projects that have code references
   */
  projects?: Array<Link>;

  /**
   * The location and content type for accessing this resource
   */
  self?: Link;
}

export interface StatisticRetrieveParams {
  /**
   * Filter results to a specific flag key
   */
  flagKey?: string;
}

export declare namespace Statistics {
  export {
    type Link as Link,
    type StatisticRetrieveResponse as StatisticRetrieveResponse,
    type StatisticListResponse as StatisticListResponse,
    type StatisticRetrieveParams as StatisticRetrieveParams,
  };
}
