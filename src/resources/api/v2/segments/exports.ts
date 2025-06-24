// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Exports extends APIResource {
  /**
   * Starts a new export process for a big segment. This is an export for a synced
   * segment or a list-based segment that can include more than 15,000 entries.
   *
   * @example
   * ```ts
   * await client.api.v2.segments.exports.create('segmentKey', {
   *   projectKey: 'projectKey',
   *   environmentKey: 'environmentKey',
   * });
   * ```
   */
  create(segmentKey: string, params: ExportCreateParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey } = params;
    return this._client.post(path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}/exports`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns information about a big segment export process. This is an export for a
   * synced segment or a list-based segment that can include more than 15,000
   * entries.
   *
   * @example
   * ```ts
   * const _export =
   *   await client.api.v2.segments.exports.retrieve(
   *     'exportID',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       segmentKey: 'segmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    exportID: string,
    params: ExportRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ExportRetrieveResponse> {
    const { projectKey, environmentKey, segmentKey } = params;
    return this._client.get(
      path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}/exports/${exportID}`,
      options,
    );
  }
}

export interface ExportRetrieveResponse {
  /**
   * The export ID
   */
  id: string;

  /**
   * The location and content type of related resources, including the location of
   * the exported file
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * Timestamp of when this export was created
   */
  creationTime: number;

  /**
   * Details on the member who initiated the export
   */
  initiator: ExportRetrieveResponse.Initiator;

  /**
   * The segment key
   */
  segmentKey: string;

  /**
   * The export size, with units
   */
  size: string;

  /**
   * The export size, in bytes
   */
  sizeBytes: number;

  /**
   * The export status
   */
  status: string;
}

export namespace ExportRetrieveResponse {
  /**
   * Details on the member who initiated the export
   */
  export interface Initiator {
    /**
     * The email address of the member who initiated the export
     */
    email?: string;

    /**
     * The name of the member who initiated the export
     */
    name?: string;
  }
}

export interface ExportCreateParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface ExportRetrieveParams {
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

export declare namespace Exports {
  export {
    type ExportRetrieveResponse as ExportRetrieveResponse,
    type ExportCreateParams as ExportCreateParams,
    type ExportRetrieveParams as ExportRetrieveParams,
  };
}
