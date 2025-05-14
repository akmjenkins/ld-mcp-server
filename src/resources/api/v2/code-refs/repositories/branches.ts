// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as StatisticsAPI from '../statistics';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Branches extends APIResource {
  /**
   * Get a specific branch in a repository.
   *
   * @example
   * ```ts
   * const branchRep =
   *   await client.api.v2.codeRefs.repositories.branches.retrieve(
   *     'branch',
   *     { repo: 'repo' },
   *   );
   * ```
   */
  retrieve(branch: string, params: BranchRetrieveParams, options?: RequestOptions): APIPromise<BranchRep> {
    const { repo, ...query } = params;
    return this._client.get(path`/api/v2/code-refs/repositories/${repo}/branches/${branch}`, {
      query,
      ...options,
    });
  }

  /**
   * Create a new branch if it doesn't exist, or update the branch if it already
   * exists.
   *
   * @example
   * ```ts
   * await client.api.v2.codeRefs.repositories.branches.update(
   *   'branch',
   *   {
   *     repo: 'repo',
   *     head: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3',
   *     name: 'main',
   *     syncTime: 0,
   *   },
   * );
   * ```
   */
  update(branch: string, params: BranchUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { repo, ...body } = params;
    return this._client.put(path`/api/v2/code-refs/repositories/${repo}/branches/${branch}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a list of branches.
   *
   * @example
   * ```ts
   * const branches =
   *   await client.api.v2.codeRefs.repositories.branches.list(
   *     'repo',
   *   );
   * ```
   */
  list(repo: string, options?: RequestOptions): APIPromise<BranchListResponse> {
    return this._client.get(path`/api/v2/code-refs/repositories/${repo}/branches`, options);
  }

  /**
   * Create a new extinction.
   *
   * @example
   * ```ts
   * await client.api.v2.codeRefs.repositories.branches.extinctionEvents(
   *   'branch',
   *   {
   *     repo: 'repo',
   *     body: [
   *       {
   *         flagKey: 'enable-feature',
   *         message: 'Remove flag for launched feature',
   *         projKey: 'default',
   *         revision:
   *           'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3',
   *         time: 0,
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  extinctionEvents(
    branch: string,
    params: BranchExtinctionEventsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { repo, body } = params;
    return this._client.post(
      path`/api/v2/code-refs/repositories/${repo}/branches/${branch}/extinction-events`,
      { body: body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface BranchRep {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, unknown>;

  /**
   * An ID representing the branch HEAD. For example, a commit SHA.
   */
  head: string;

  /**
   * The branch name
   */
  name: string;

  /**
   * A timestamp indicating when the branch was last synced
   */
  syncTime: number;

  /**
   * An array of flag references found on the branch
   */
  references?: Array<ReferenceRep>;

  /**
   * An optional ID used to prevent older data from overwriting newer data
   */
  updateSequenceId?: number;
}

export interface ReferenceRep {
  hunks: Array<ReferenceRep.Hunk>;

  /**
   * File path of the reference
   */
  path: string;

  /**
   * Programming language used in the file
   */
  hint?: string;
}

export namespace ReferenceRep {
  export interface Hunk {
    /**
     * Line number of beginning of code reference hunk
     */
    startingLineNumber: number;

    /**
     * An array of flag key aliases
     */
    aliases?: Array<string>;

    /**
     * The feature flag key
     */
    flagKey?: string;

    /**
     * Contextual lines of code that include the referenced feature flag
     */
    lines?: string;

    /**
     * The project key
     */
    projKey?: string;
  }
}

export interface BranchListResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of branches
   */
  items: Array<BranchRep>;
}

export interface BranchRetrieveParams {
  /**
   * Path param: The repository name
   */
  repo: string;

  /**
   * Query param: Filter results to a specific flag key
   */
  flagKey?: string;

  /**
   * Query param: Filter results to a specific project
   */
  projKey?: string;
}

export interface BranchUpdateParams {
  /**
   * Path param: The repository name
   */
  repo: string;

  /**
   * Body param: An ID representing the branch HEAD. For example, a commit SHA.
   */
  head: string;

  /**
   * Body param: The branch name
   */
  name: string;

  /**
   * Body param: A timestamp indicating when the branch was last synced
   */
  syncTime: number;

  /**
   * Body param: A timestamp of the current commit
   */
  commitTime?: number;

  /**
   * Body param: An array of flag references found on the branch
   */
  references?: Array<ReferenceRep>;

  /**
   * Body param: An optional ID used to prevent older data from overwriting newer
   * data. If no sequence ID is included, the newly submitted data will always be
   * saved.
   */
  updateSequenceId?: number;
}

export interface BranchExtinctionEventsParams {
  /**
   * Path param: The repository name
   */
  repo: string;

  /**
   * Body param:
   */
  body: Array<BranchExtinctionEventsParams.Body>;
}

export namespace BranchExtinctionEventsParams {
  export interface Body {
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

export declare namespace Branches {
  export {
    type BranchRep as BranchRep,
    type ReferenceRep as ReferenceRep,
    type BranchListResponse as BranchListResponse,
    type BranchRetrieveParams as BranchRetrieveParams,
    type BranchUpdateParams as BranchUpdateParams,
    type BranchExtinctionEventsParams as BranchExtinctionEventsParams,
  };
}
