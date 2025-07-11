// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RelayAutoConfigsAPI from './account/relay-auto-configs';
import * as ApplicationsAPI from './applications/applications';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Destinations extends APIResource {
  /**
   * Get a single Data Export destination by ID.
   *
   * @example
   * ```ts
   * const destination =
   *   await client.api.v2.destinations.retrieve('id', {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *   });
   * ```
   */
  retrieve(id: string, params: DestinationRetrieveParams, options?: RequestOptions): APIPromise<Destination> {
    const { projectKey, environmentKey } = params;
    return this._client.get(path`/api/v2/destinations/${projectKey}/${environmentKey}/${id}`, options);
  }

  /**
   * Update a Data Export destination. Updating a destination uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or
   * [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation
   * of the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const destination = await client.api.v2.destinations.update(
   *   'id',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *     body: [{ op: 'replace', path: '/config/topic' }],
   *   },
   * );
   * ```
   */
  update(id: string, params: DestinationUpdateParams, options?: RequestOptions): APIPromise<Destination> {
    const { projectKey, environmentKey, body } = params;
    return this._client.patch(path`/api/v2/destinations/${projectKey}/${environmentKey}/${id}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Get a list of Data Export destinations configured across all projects and
   * environments.
   *
   * @example
   * ```ts
   * const destinations =
   *   await client.api.v2.destinations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<DestinationListResponse> {
    return this._client.get('/api/v2/destinations', options);
  }

  /**
   * Delete a Data Export destination by ID.
   *
   * @example
   * ```ts
   * await client.api.v2.destinations.delete('id', {
   *   projectKey: 'projectKey',
   *   environmentKey: 'environmentKey',
   * });
   * ```
   */
  delete(id: string, params: DestinationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey } = params;
    return this._client.delete(path`/api/v2/destinations/${projectKey}/${environmentKey}/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Generate key pair to allow Data Export to authenticate into a Snowflake
   * warehouse destination
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.destinations.generateWarehouseDestinationKeyPair();
   * ```
   */
  generateWarehouseDestinationKeyPair(
    options?: RequestOptions,
  ): APIPromise<DestinationGenerateWarehouseDestinationKeyPairResponse> {
    return this._client.post('/api/v2/destinations/generate-warehouse-destination-key-pair', options);
  }
}

export interface Destination {
  /**
   * Details on the allowed and denied actions for this Data Export destination
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * The ID of this Data Export destination
   */
  _id?: string;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * An object with the configuration parameters required for the destination type
   */
  config?: unknown;

  /**
   * The type of Data Export destination
   */
  kind?: 'google-pubsub' | 'kinesis' | 'mparticle' | 'segment' | 'azure-event-hubs' | 'snowflake-v2';

  /**
   * A human-readable name for your Data Export destination
   */
  name?: string;

  /**
   * Whether the export is on, that is, the status of the integration
   */
  on?: boolean;

  version?: number;
}

export interface DestinationListResponse {
  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * An array of Data Export destinations
   */
  items?: Array<Destination>;
}

export interface DestinationGenerateWarehouseDestinationKeyPairResponse {
  /**
   * The public key used by LaunchDarkly
   */
  public_key?: string;

  /**
   * The public key to assign in your Snowflake worksheet
   */
  public_key_pkcs8?: string;
}

export interface DestinationRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface DestinationUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface DestinationDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export declare namespace Destinations {
  export {
    type Destination as Destination,
    type DestinationListResponse as DestinationListResponse,
    type DestinationGenerateWarehouseDestinationKeyPairResponse as DestinationGenerateWarehouseDestinationKeyPairResponse,
    type DestinationRetrieveParams as DestinationRetrieveParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };
}
