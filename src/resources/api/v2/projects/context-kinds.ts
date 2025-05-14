// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ContextKinds extends APIResource {
  /**
   * Create or update a context kind by key. Only the included fields will be
   * updated.
   *
   * @example
   * ```ts
   * const contextKind =
   *   await client.api.v2.projects.contextKinds.update('key', {
   *     projectKey: 'projectKey',
   *     name: 'organization',
   *   });
   * ```
   */
  update(
    key: string,
    params: ContextKindUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ContextKindUpdateResponse> {
    const { projectKey, ...body } = params;
    return this._client.put(path`/api/v2/projects/${projectKey}/context-kinds/${key}`, { body, ...options });
  }

  /**
   * Get all context kinds for a given project.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.contextKinds.retrieveContextKinds(
   *     'projectKey',
   *   );
   * ```
   */
  retrieveContextKinds(
    projectKey: string,
    options?: RequestOptions,
  ): APIPromise<ContextKindRetrieveContextKindsResponse> {
    return this._client.get(path`/api/v2/projects/${projectKey}/context-kinds`, options);
  }
}

export interface ContextKindUpdateResponse {
  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * The status of the create or update operation
   */
  status?: string;
}

export interface ContextKindRetrieveContextKindsResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of context kinds
   */
  items: Array<ContextKindRetrieveContextKindsResponse.Item>;
}

export namespace ContextKindRetrieveContextKindsResponse {
  export interface Item {
    /**
     * How the context kind was created
     */
    createdFrom: 'default' | 'auto-add' | 'manual';

    /**
     * Timestamp of when the context kind was created
     */
    creationDate: number;

    /**
     * The context kind description
     */
    description: string;

    /**
     * The context kind key
     */
    key: string;

    /**
     * Timestamp of when the context kind was most recently changed
     */
    lastModified: number;

    /**
     * The context kind name
     */
    name: string;

    /**
     * The context kind version
     */
    version: number;

    /**
     * The location and content type of related resources
     */
    _links?: Record<string, StatisticsAPI.Link>;

    /**
     * Whether the context kind is archived. Archived context kinds are unavailable for
     * targeting.
     */
    archived?: boolean;

    /**
     * Alias for archived.
     */
    hideInTargeting?: boolean;

    /**
     * Timestamp of when a context of this context kind was most recently evaluated
     */
    lastSeen?: number;
  }
}

export interface ContextKindUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param: The context kind name
   */
  name: string;

  /**
   * Body param: Whether the context kind is archived. Archived context kinds are
   * unavailable for targeting.
   */
  archived?: boolean;

  /**
   * Body param: The context kind description
   */
  description?: string;

  /**
   * Body param: Alias for archived.
   */
  hideInTargeting?: boolean;

  /**
   * Body param: The context kind version. If not specified when the context kind is
   * created, defaults to 1.
   */
  version?: number;
}

export declare namespace ContextKinds {
  export {
    type ContextKindUpdateResponse as ContextKindUpdateResponse,
    type ContextKindRetrieveContextKindsResponse as ContextKindRetrieveContextKindsResponse,
    type ContextKindUpdateParams as ContextKindUpdateParams,
  };
}
