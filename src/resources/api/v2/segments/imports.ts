// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Imports extends APIResource {
  /**
   * Start a new import process for a big segment. This is an import for a list-based
   * segment that can include more than 15,000 entries.
   *
   * @example
   * ```ts
   * await client.api.v2.segments.imports.create('segmentKey', {
   *   projectKey: 'projectKey',
   *   environmentKey: 'environmentKey',
   * });
   * ```
   */
  create(segmentKey: string, params: ImportCreateParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey, ...body } = params;
    return this._client.post(
      path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}/imports`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }

  /**
   * Returns information about a big segment import process. This is the import of a
   * list-based segment that can include more than 15,000 entries.
   *
   * @example
   * ```ts
   * const _import =
   *   await client.api.v2.segments.imports.retrieve(
   *     'importID',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       segmentKey: 'segmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    importID: string,
    params: ImportRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ImportRetrieveResponse> {
    const { projectKey, environmentKey, segmentKey } = params;
    return this._client.get(
      path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}/imports/${importID}`,
      options,
    );
  }
}

export interface ImportRetrieveResponse {
  /**
   * The import ID
   */
  id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * Timestamp of when this import was created
   */
  creationTime: number;

  /**
   * The import mode used, either <code>merge</code> or <code>replace</code>
   */
  mode: string;

  /**
   * The segment key
   */
  segmentKey: string;

  /**
   * The import status
   */
  status: 'preparing' | 'pending_approval' | 'ready' | 'in_progress' | 'complete' | 'stopped';

  /**
   * The imported files and their status
   */
  files?: Array<ImportRetrieveResponse.File>;
}

export namespace ImportRetrieveResponse {
  export interface File {
    /**
     * The imported file name, including the extension
     */
    filename?: string;

    /**
     * The imported file status
     */
    status?: string;
  }
}

export interface ImportCreateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Body param: CSV file containing keys
   */
  file?: Uploadable;

  /**
   * Body param: Import mode. Use either `merge` or `replace`
   */
  mode?: string;

  /**
   * Body param: Whether to wait for approvals before processing the import
   */
  waitOnApprovals?: boolean;
}

export interface ImportRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The segment key
   */
  segmentKey: string;
}

export declare namespace Imports {
  export {
    type ImportRetrieveResponse as ImportRetrieveResponse,
    type ImportCreateParams as ImportCreateParams,
    type ImportRetrieveParams as ImportRetrieveParams,
  };
}
