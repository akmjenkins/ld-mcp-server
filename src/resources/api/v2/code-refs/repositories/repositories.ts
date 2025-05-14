// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as RelayAutoConfigsAPI from '../../account/relay-auto-configs';
import * as ApplicationsAPI from '../../applications/applications';
import * as StatisticsAPI from '../statistics';
import * as BranchesAPI from './branches';
import {
  BranchExtinctionEventsParams,
  BranchListResponse,
  BranchRep,
  BranchRetrieveParams,
  BranchUpdateParams,
  Branches,
  ReferenceRep,
} from './branches';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Repositories extends APIResource {
  branches: BranchesAPI.Branches = new BranchesAPI.Branches(this._client);

  /**
   * Create a repository with the specified name.
   *
   * @example
   * ```ts
   * const repositoryRep =
   *   await client.api.v2.codeRefs.repositories.create({
   *     name: 'LaunchDarkly-Docs',
   *   });
   * ```
   */
  create(body: RepositoryCreateParams, options?: RequestOptions): APIPromise<RepositoryRep> {
    return this._client.post('/api/v2/code-refs/repositories', { body, ...options });
  }

  /**
   * Get a single repository by name.
   *
   * @example
   * ```ts
   * const repositoryRep =
   *   await client.api.v2.codeRefs.repositories.retrieve(
   *     'repo',
   *   );
   * ```
   */
  retrieve(repo: string, options?: RequestOptions): APIPromise<RepositoryRep> {
    return this._client.get(path`/api/v2/code-refs/repositories/${repo}`, options);
  }

  /**
   * Update a repository's settings. Updating repository settings uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or
   * [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation
   * of the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const repositoryRep =
   *   await client.api.v2.codeRefs.repositories.update('repo', {
   *     body: [{ op: 'replace', path: '/defaultBranch' }],
   *   });
   * ```
   */
  update(repo: string, params: RepositoryUpdateParams, options?: RequestOptions): APIPromise<RepositoryRep> {
    const { body } = params;
    return this._client.patch(path`/api/v2/code-refs/repositories/${repo}`, { body: body, ...options });
  }

  /**
   * Get a list of connected repositories. Optionally, you can include branch
   * metadata with the `withBranches` query parameter. Embed references for the
   * default branch with `ReferencesForDefaultBranch`. You can also filter the list
   * of code references by project key and flag key.
   *
   * @example
   * ```ts
   * const repositories =
   *   await client.api.v2.codeRefs.repositories.list();
   * ```
   */
  list(
    query: RepositoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepositoryListResponse> {
    return this._client.get('/api/v2/code-refs/repositories', { query, ...options });
  }

  /**
   * Delete a repository with the specified name.
   *
   * @example
   * ```ts
   * await client.api.v2.codeRefs.repositories.delete('repo');
   * ```
   */
  delete(repo: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/code-refs/repositories/${repo}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Asynchronously delete a number of branches.
   *
   * @example
   * ```ts
   * await client.api.v2.codeRefs.repositories.branchDeleteTasks(
   *   'repo',
   *   {
   *     body: [
   *       'branch-to-be-deleted',
   *       'another-branch-to-be-deleted',
   *     ],
   *   },
   * );
   * ```
   */
  branchDeleteTasks(
    repo: string,
    params: RepositoryBranchDeleteTasksParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/api/v2/code-refs/repositories/${repo}/branch-delete-tasks`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RepositoryRep {
  _links: Record<string, unknown>;

  /**
   * The repository's default branch
   */
  defaultBranch: string;

  /**
   * Whether or not a repository is enabled for code reference scanning
   */
  enabled: boolean;

  /**
   * The repository name
   */
  name: string;

  /**
   * The type of repository
   */
  type: 'bitbucket' | 'custom' | 'github' | 'gitlab';

  /**
   * The version of the repository's saved information
   */
  version: number;

  _access?: RelayAutoConfigsAPI.Access;

  /**
   * An array of the repository's branches that have been scanned for code references
   */
  branches?: Array<BranchesAPI.BranchRep>;

  /**
   * A template for constructing a valid URL to view the commit
   */
  commitUrlTemplate?: string;

  /**
   * A template for constructing a valid URL to view the hunk
   */
  hunkUrlTemplate?: string;

  /**
   * A URL to access the repository
   */
  sourceLink?: string;
}

export interface RepositoryListResponse {
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of repositories
   */
  items: Array<RepositoryRep>;
}

export interface RepositoryCreateParams {
  /**
   * The repository name
   */
  name: string;

  /**
   * A template for constructing a valid URL to view the commit
   */
  commitUrlTemplate?: string;

  /**
   * The repository's default branch. If not specified, the default value is
   * <code>main</code>.
   */
  defaultBranch?: string;

  /**
   * A template for constructing a valid URL to view the hunk
   */
  hunkUrlTemplate?: string;

  /**
   * A URL to access the repository
   */
  sourceLink?: string;

  /**
   * The type of repository. If not specified, the default value is
   * <code>custom</code>.
   */
  type?: 'bitbucket' | 'custom' | 'github' | 'gitlab';
}

export interface RepositoryUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface RepositoryListParams {
  /**
   * If set to any value, the endpoint returns repositories with associated branch
   * data, as well as code references for the default git branch
   */
  flagKey?: string;

  /**
   * A LaunchDarkly project key. If provided, this filters code reference results to
   * the specified project.
   */
  projKey?: string;

  /**
   * If set to any value, the endpoint returns repositories with associated branch
   * data
   */
  withBranches?: string;

  /**
   * If set to any value, the endpoint returns repositories with associated branch
   * data, as well as code references for the default git branch
   */
  withReferencesForDefaultBranch?: string;
}

export interface RepositoryBranchDeleteTasksParams {
  body: Array<string>;
}

Repositories.Branches = Branches;

export declare namespace Repositories {
  export {
    type RepositoryRep as RepositoryRep,
    type RepositoryListResponse as RepositoryListResponse,
    type RepositoryCreateParams as RepositoryCreateParams,
    type RepositoryUpdateParams as RepositoryUpdateParams,
    type RepositoryListParams as RepositoryListParams,
    type RepositoryBranchDeleteTasksParams as RepositoryBranchDeleteTasksParams,
  };

  export {
    Branches as Branches,
    type BranchRep as BranchRep,
    type ReferenceRep as ReferenceRep,
    type BranchListResponse as BranchListResponse,
    type BranchRetrieveParams as BranchRetrieveParams,
    type BranchUpdateParams as BranchUpdateParams,
    type BranchExtinctionEventsParams as BranchExtinctionEventsParams,
  };
}
