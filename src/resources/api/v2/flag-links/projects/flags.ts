// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ApplicationsAPI from '../../applications/applications';
import * as StatisticsAPI from '../../code-refs/statistics';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Flags extends APIResource {
  /**
   * Get a list of all flag links.
   *
   * @example
   * ```ts
   * const flag =
   *   await client.api.v2.flagLinks.projects.flags.retrieve(
   *     'featureFlagKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieve(
    featureFlagKey: string,
    params: FlagRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FlagRetrieveResponse> {
    const { projectKey } = params;
    return this._client.get(path`/api/v2/flag-links/projects/${projectKey}/flags/${featureFlagKey}`, options);
  }

  /**
   * Update a flag link. Updating a flag link uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const flagLinkRep =
   *   await client.api.v2.flagLinks.projects.flags.update(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       body: [{ op: 'replace', path: '/title' }],
   *     },
   *   );
   * ```
   */
  update(id: string, params: FlagUpdateParams, options?: RequestOptions): APIPromise<FlagLinkRep> {
    const { projectKey, featureFlagKey, body } = params;
    return this._client.patch(path`/api/v2/flag-links/projects/${projectKey}/flags/${featureFlagKey}/${id}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Delete a flag link by ID or key.
   *
   * @example
   * ```ts
   * await client.api.v2.flagLinks.projects.flags.delete('id', {
   *   projectKey: 'projectKey',
   *   featureFlagKey: 'featureFlagKey',
   * });
   * ```
   */
  delete(id: string, params: FlagDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, featureFlagKey } = params;
    return this._client.delete(
      path`/api/v2/flag-links/projects/${projectKey}/flags/${featureFlagKey}/${id}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface FlagLinkRep {
  /**
   * Timestamp of when the flag link was created
   */
  _createdAt: number;

  /**
   * The URL for the external resource the flag is linked to
   */
  _deepLink: string;

  /**
   * The ID of this flag link
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * The time to mark this flag link as associated with the external URL. Defaults to
   * the creation time of the flag link, but can be set to another time during
   * creation.
   */
  _timestamp: FlagLinkRep._Timestamp;

  /**
   * The integration key for an integration whose <code>manifest.json</code> includes
   * the <code>flagLink</code> capability, if this is a flag link for an existing
   * integration
   */
  _integrationKey?: string;

  /**
   * The flag link key
   */
  _key?: string;

  /**
   * Details on the member associated with this flag link
   */
  _member?: FlagLinkRep._Member;

  /**
   * The metadata required by this integration in order to create a flag link, if
   * this is a flag link for an existing integration. Defined in the integration's
   * <code>manifest.json</code> file under <code>flagLink</code>.
   */
  _metadata?: { [key: string]: string };

  /**
   * The description of the flag link
   */
  description?: string;

  /**
   * The title of the flag link
   */
  title?: string;
}

export namespace FlagLinkRep {
  /**
   * The time to mark this flag link as associated with the external URL. Defaults to
   * the creation time of the flag link, but can be set to another time during
   * creation.
   */
  export interface _Timestamp {
    milliseconds?: number;

    rfc3339?: string;

    seconds?: number;

    simple?: string;
  }

  /**
   * Details on the member associated with this flag link
   */
  export interface _Member {
    _id: string;

    _links: { [key: string]: StatisticsAPI.Link };

    firstName?: string;

    lastName?: string;
  }
}

export interface FlagRetrieveResponse {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * An array of flag links
   */
  items: Array<FlagLinkRep>;
}

export interface FlagRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;
}

export interface FlagUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface FlagDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;
}

export declare namespace Flags {
  export {
    type FlagLinkRep as FlagLinkRep,
    type FlagRetrieveResponse as FlagRetrieveResponse,
    type FlagRetrieveParams as FlagRetrieveParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagDeleteParams as FlagDeleteParams,
  };
}
