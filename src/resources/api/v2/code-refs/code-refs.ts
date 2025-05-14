// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from './statistics';
import {
  Link,
  StatisticListResponse,
  StatisticRetrieveParams,
  StatisticRetrieveResponse,
  Statistics,
} from './statistics';
import * as RepositoriesAPI from './repositories/repositories';
import {
  Repositories,
  RepositoryBranchDeleteTasksParams,
  RepositoryCreateParams,
  RepositoryListParams,
  RepositoryListResponse,
  RepositoryRep,
  RepositoryUpdateParams,
} from './repositories/repositories';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class CodeRefs extends APIResource {
  repositories: RepositoriesAPI.Repositories = new RepositoriesAPI.Repositories(this._client);
  statistics: StatisticsAPI.Statistics = new StatisticsAPI.Statistics(this._client);

  /**
   * Get a list of all extinctions. LaunchDarkly creates an extinction event after
   * you remove all code references to a flag. To learn more, read
   * [About extinction events](https://launchdarkly.com/docs/home/observability/code-references#about-extinction-events).
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.codeRefs.retrieveExtinctions();
   * ```
   */
  retrieveExtinctions(
    query: CodeRefRetrieveExtinctionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CodeRefRetrieveExtinctionsResponse> {
    return this._client.get('/api/v2/code-refs/extinctions', { query, ...options });
  }
}

export interface CodeRefRetrieveExtinctionsResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of extinction events
   */
  items: Record<string, Array<CodeRefRetrieveExtinctionsResponse.Item>>;
}

export namespace CodeRefRetrieveExtinctionsResponse {
  export interface Item {
    /**
     * The feature flag key
     */
    flagKey: string;

    /**
     * Description of the extinction. For example, the commit message for the revision.
     */
    message: string;

    /**
     * The project key
     */
    projKey: string;

    /**
     * The identifier for the revision where flag became extinct. For example, a commit
     * SHA.
     */
    revision: string;

    /**
     * Time of extinction
     */
    time: number;
  }
}

export interface CodeRefRetrieveExtinctionsParams {
  /**
   * Filter results to a specific branch. By default, only the default branch will be
   * queried for extinctions.
   */
  branchName?: string;

  /**
   * Filter results to a specific flag key
   */
  flagKey?: string;

  /**
   * Filter results to a specific timeframe based on commit time, expressed as a Unix
   * epoch time in milliseconds. Must be used with `to`.
   */
  from?: number;

  /**
   * Filter results to a specific project
   */
  projKey?: string;

  /**
   * Filter results to a specific repository
   */
  repoName?: string;

  /**
   * Filter results to a specific timeframe based on commit time, expressed as a Unix
   * epoch time in milliseconds. Must be used with `from`.
   */
  to?: number;
}

CodeRefs.Repositories = Repositories;
CodeRefs.Statistics = Statistics;

export declare namespace CodeRefs {
  export {
    type CodeRefRetrieveExtinctionsResponse as CodeRefRetrieveExtinctionsResponse,
    type CodeRefRetrieveExtinctionsParams as CodeRefRetrieveExtinctionsParams,
  };

  export {
    Repositories as Repositories,
    type RepositoryRep as RepositoryRep,
    type RepositoryListResponse as RepositoryListResponse,
    type RepositoryCreateParams as RepositoryCreateParams,
    type RepositoryUpdateParams as RepositoryUpdateParams,
    type RepositoryListParams as RepositoryListParams,
    type RepositoryBranchDeleteTasksParams as RepositoryBranchDeleteTasksParams,
  };

  export {
    Statistics as Statistics,
    type Link as Link,
    type StatisticRetrieveResponse as StatisticRetrieveResponse,
    type StatisticListResponse as StatisticListResponse,
    type StatisticRetrieveParams as StatisticRetrieveParams,
  };
}
