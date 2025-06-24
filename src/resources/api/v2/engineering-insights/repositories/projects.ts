// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as StatisticsAPI from '../../code-refs/statistics';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Projects extends APIResource {
  /**
   * Associate repositories with projects
   *
   * @example
   * ```ts
   * const project =
   *   await client.api.v2.engineeringInsights.repositories.projects.create(
   *     {
   *       mappings: [
   *         {
   *           projectKey: 'default',
   *           repositoryKey: 'launchdarkly/LaunchDarkly-Docs',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectCreateResponse> {
    return this._client.put('/api/v2/engineering-insights/repositories/projects', { body, ...options });
  }

  /**
   * Remove repository project association
   *
   * @example
   * ```ts
   * await client.api.v2.engineeringInsights.repositories.projects.delete(
   *   'projectKey',
   *   { repositoryKey: 'repositoryKey' },
   * );
   * ```
   */
  delete(projectKey: string, params: ProjectDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { repositoryKey } = params;
    return this._client.delete(
      path`/api/v2/engineering-insights/repositories/${repositoryKey}/projects/${projectKey}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface InsightsRepositoryProject {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The repository key
   */
  repositoryKey: string;
}

export interface ProjectCreateResponse {
  /**
   * List of repository project associations
   */
  items: Array<InsightsRepositoryProject>;

  /**
   * Total number of repository project associations
   */
  totalCount: number;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export interface ProjectCreateParams {
  mappings: Array<InsightsRepositoryProject>;
}

export interface ProjectDeleteParams {
  /**
   * The repository key
   */
  repositoryKey: string;
}

export declare namespace Projects {
  export {
    type InsightsRepositoryProject as InsightsRepositoryProject,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectDeleteParams as ProjectDeleteParams,
  };
}
