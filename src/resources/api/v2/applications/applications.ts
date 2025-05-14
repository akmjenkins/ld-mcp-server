// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MembersAPI from '../members';
import * as MetricsAPI from '../metrics';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as VersionsAPI from './versions';
import {
  ApplicationVersionRep,
  VersionDeleteParams,
  VersionListParams,
  VersionListResponse,
  VersionUpdateParams,
  Versions,
} from './versions';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Applications extends APIResource {
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Retrieve an application by the application key.
   *
   * ### Expanding the application response
   *
   * LaunchDarkly supports expanding the "Get application" response to include
   * additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `flags` includes details on the flags that have been evaluated by the
   *   application
   *
   * For example, use `?expand=flags` to include the `flags` field in the response.
   * By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const applicationRep =
   *   await client.api.v2.applications.retrieve(
   *     'applicationKey',
   *   );
   * ```
   */
  retrieve(
    applicationKey: string,
    query: ApplicationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApplicationRep> {
    return this._client.get(path`/api/v2/applications/${applicationKey}`, { query, ...options });
  }

  /**
   * Update an application. You can update the `description` and `kind` fields.
   * Requires a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902)
   * representation of the desired changes to the application. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const applicationRep =
   *   await client.api.v2.applications.update(
   *     'applicationKey',
   *     { body: [{ op: 'replace', path: '/description' }] },
   *   );
   * ```
   */
  update(
    applicationKey: string,
    params: ApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApplicationRep> {
    const { body } = params;
    return this._client.patch(path`/api/v2/applications/${applicationKey}`, { body: body, ...options });
  }

  /**
   * Get a list of applications.
   *
   * ### Expanding the applications response
   *
   * LaunchDarkly supports expanding the "Get applications" response to include
   * additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `flags` includes details on the flags that have been evaluated by the
   *   application
   *
   * For example, use `?expand=flags` to include the `flags` field in the response.
   * By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const applications =
   *   await client.api.v2.applications.list();
   * ```
   */
  list(
    query: ApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApplicationListResponse> {
    return this._client.get('/api/v2/applications', { query, ...options });
  }

  /**
   * Delete an application.
   *
   * @example
   * ```ts
   * await client.api.v2.applications.delete('applicationKey');
   * ```
   */
  delete(applicationKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/applications/${applicationKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ApplicationRep {
  /**
   * Whether the application was automatically created because it was included in a
   * context when a LaunchDarkly SDK evaluated a feature flag, or was created through
   * the LaunchDarkly UI or REST API.
   */
  autoAdded: boolean;

  /**
   * The unique identifier of this application
   */
  key: string;

  /**
   * To distinguish the kind of application
   */
  kind: 'browser' | 'mobile' | 'server';

  /**
   * The name of the application
   */
  name: string;

  /**
   * Details on the allowed and denied actions for this application
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * Associated maintainer member or team info for the application
   */
  _maintainer?: MaintainerRep;

  /**
   * Version of the application
   */
  _version?: number;

  /**
   * Timestamp of when the application version was created
   */
  creationDate?: number;

  /**
   * The application description
   */
  description?: string;

  /**
   * Details about the flags that have been evaluated by the application
   */
  flags?: ApplicationRep.Flags;
}

export namespace ApplicationRep {
  /**
   * Details about the flags that have been evaluated by the application
   */
  export interface Flags {
    /**
     * The location and content type of related resources
     */
    _links?: Record<string, StatisticsAPI.Link>;

    /**
     * A list of the flags that have been evaluated by the application
     */
    items?: Array<MetricsAPI.FlagListingRep>;

    /**
     * The number of flags that have been evaluated by the application
     */
    totalCount?: number;
  }
}

export interface MaintainerRep {
  /**
   * Details on the member who maintains this resource
   */
  member?: RelayAutoConfigsAPI.MemberSummary;

  /**
   * Details on the team that maintains this resource
   */
  team?: MembersAPI.MemberTeamSummaryRep;
}

export interface PatchOperation {
  /**
   * The type of operation to perform
   */
  op: string;

  /**
   * A JSON Pointer string specifying the part of the document to operate on
   */
  path: string;

  /**
   * A JSON value used in "add", "replace", and "test" operations
   */
  value?: unknown;
}

export interface ApplicationListResponse {
  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * A list of applications
   */
  items?: Array<ApplicationRep>;

  /**
   * The number of applications
   */
  totalCount?: number;
}

export interface ApplicationRetrieveParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response. Options: `flags`.
   */
  expand?: string;
}

export interface ApplicationUpdateParams {
  body: Array<PatchOperation>;
}

export interface ApplicationListParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response. Options: `flags`.
   */
  expand?: string;

  /**
   * Accepts filter by `key`, `name`, `kind`, and `autoAdded`. To learn more about
   * the filter syntax, read
   * [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions).
   */
  filter?: string;

  /**
   * The number of applications to return. Defaults to 10.
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

Applications.Versions = Versions;

export declare namespace Applications {
  export {
    type ApplicationRep as ApplicationRep,
    type MaintainerRep as MaintainerRep,
    type PatchOperation as PatchOperation,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationRetrieveParams as ApplicationRetrieveParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
  };

  export {
    Versions as Versions,
    type ApplicationVersionRep as ApplicationVersionRep,
    type VersionListResponse as VersionListResponse,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
    type VersionDeleteParams as VersionDeleteParams,
  };
}
