// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as ApplicationsAPI from './applications';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Versions extends APIResource {
  /**
   * Update an application version. You can update the `supported` field. Requires a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes to the application version. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const applicationVersionRep =
   *   await client.api.v2.applications.versions.update(
   *     'versionKey',
   *     {
   *       applicationKey: 'applicationKey',
   *       body: [{ op: 'replace', path: '/supported' }],
   *     },
   *   );
   * ```
   */
  update(
    versionKey: string,
    params: VersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationVersionRep> {
    const { applicationKey, body } = params;
    return this._client.patch(path`/api/v2/applications/${applicationKey}/versions/${versionKey}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Get a list of versions for a specific application in an account.
   *
   * @example
   * ```ts
   * const versions =
   *   await client.api.v2.applications.versions.list(
   *     'applicationKey',
   *   );
   * ```
   */
  list(
    applicationKey: string,
    query: VersionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    return this._client.get(path`/api/v2/applications/${applicationKey}/versions`, { query, ...options });
  }

  /**
   * Delete an application version.
   *
   * @example
   * ```ts
   * await client.api.v2.applications.versions.delete(
   *   'versionKey',
   *   { applicationKey: 'applicationKey' },
   * );
   * ```
   */
  delete(versionKey: string, params: VersionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { applicationKey } = params;
    return this._client.delete(path`/api/v2/applications/${applicationKey}/versions/${versionKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ApplicationVersionRep {
  /**
   * Whether the application version was automatically created, because it was
   * included in a context when a LaunchDarkly SDK evaluated a feature flag, or if
   * the application version was created through the LaunchDarkly UI or REST API.
   */
  autoAdded: boolean;

  /**
   * The unique identifier of this application version
   */
  key: string;

  /**
   * The name of this version
   */
  name: string;

  /**
   * Details on the allowed and denied actions for this application version
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * Version of the application version
   */
  _version?: number;

  /**
   * Timestamp of when the application version was created
   */
  creationDate?: number;

  /**
   * Whether this version is supported. Only applicable if the application
   * <code>kind</code> is <code>mobile</code>.
   */
  supported?: boolean;
}

export interface VersionListResponse {
  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * A list of the versions for this application
   */
  items?: Array<ApplicationVersionRep>;

  /**
   * The number of versions for this application
   */
  totalCount?: number;
}

export interface VersionUpdateParams {
  /**
   * Path param: The application key
   */
  applicationKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface VersionListParams {
  /**
   * Accepts filter by `key`, `name`, `supported`, and `autoAdded`. To learn more
   * about the filter syntax, read
   * [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions).
   */
  filter?: string;

  /**
   * The number of versions to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Where to start in the list. Use this with pagination. For example, an offset of
   * 10 skips the first ten items and then returns the next items in the list, up to
   * the query `limit`.
   */
  offset?: number;

  /**
   * Accepts sorting order and fields. Fields can be comma separated. Possible fields
   * are `creationDate`, `name`. Examples: `sort=name` sort by names ascending,
   * `sort=-name,creationDate` sort by names descending and creationDate ascending.
   */
  sort?: string;
}

export interface VersionDeleteParams {
  /**
   * The application key
   */
  applicationKey: string;
}

export declare namespace Versions {
  export {
    type ApplicationVersionRep as ApplicationVersionRep,
    type VersionListResponse as VersionListResponse,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
  };
}
