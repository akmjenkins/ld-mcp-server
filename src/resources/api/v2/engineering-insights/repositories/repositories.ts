// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as TeamsAPI from '../../teams';
import * as StatisticsAPI from '../../code-refs/statistics';
import * as ProjectsAPI from './projects';
import {
  InsightsRepositoryProject,
  ProjectCreateParams,
  ProjectCreateResponse,
  ProjectDeleteParams,
  Projects as ProjectsAPIProjects,
} from './projects';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Repositories extends APIResource {
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);

  /**
   * Get a list of repositories
   *
   * ### Expanding the repository collection response
   *
   * LaunchDarkly supports expanding the repository collection response to include
   * additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `projects` includes details on all of the LaunchDarkly projects associated
   *   with each repository
   *
   * For example, use `?expand=projects` to include the `projects` field in the
   * response. By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const repositories =
   *   await client.api.v2.engineeringInsights.repositories.list();
   * ```
   */
  list(
    query: RepositoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepositoryListResponse> {
    return this._client.get('/api/v2/engineering-insights/repositories', { query, ...options });
  }
}

export interface RepositoryListResponse {
  /**
   * List of repositories
   */
  items: Array<RepositoryListResponse.Item>;

  /**
   * Total number of repositories
   */
  totalCount: number;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export namespace RepositoryListResponse {
  export interface Item {
    /**
     * The repository ID
     */
    _id: string;

    /**
     * The repository key
     */
    key: string;

    /**
     * The repository main branch
     */
    mainBranch: string;

    /**
     * The repository type
     */
    type: string;

    /**
     * The repository URL
     */
    url: string;

    /**
     * The repository version
     */
    version: number;

    projects?: Item.Projects;
  }

  export namespace Item {
    export interface Projects {
      items: Array<TeamsAPI.ProjectSummary>;

      totalCount: number;

      _links?: { [key: string]: StatisticsAPI.Link };
    }
  }
}

export interface RepositoryListParams {
  /**
   * Expand properties in response. Options: `projects`
   */
  expand?: string;
}

Repositories.Projects = ProjectsAPIProjects;

export declare namespace Repositories {
  export {
    type RepositoryListResponse as RepositoryListResponse,
    type RepositoryListParams as RepositoryListParams,
  };

  export {
    ProjectsAPIProjects as Projects,
    type InsightsRepositoryProject as InsightsRepositoryProject,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectDeleteParams as ProjectDeleteParams,
  };
}
