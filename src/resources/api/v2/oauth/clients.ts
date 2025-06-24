// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Clients extends APIResource {
  /**
   * Create (register) a LaunchDarkly OAuth2 client. OAuth2 clients allow you to
   * build custom integrations using LaunchDarkly as your identity provider.
   *
   * @example
   * ```ts
   * const client = await client.api.v2.oauth.clients.create();
   * ```
   */
  create(body: ClientCreateParams, options?: RequestOptions): APIPromise<Client> {
    return this._client.post('/api/v2/oauth/clients', { body, ...options });
  }

  /**
   * Get a registered OAuth 2.0 client by unique client ID.
   *
   * @example
   * ```ts
   * const client = await client.api.v2.oauth.clients.retrieve(
   *   'clientId',
   * );
   * ```
   */
  retrieve(clientID: string, options?: RequestOptions): APIPromise<Client> {
    return this._client.get(path`/api/v2/oauth/clients/${clientID}`, options);
  }

  /**
   * Patch an existing OAuth 2.0 client by client ID. Updating an OAuth2 client uses
   * a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates). Only `name`,
   * `description`, and `redirectUri` may be patched.
   *
   * @example
   * ```ts
   * const client = await client.api.v2.oauth.clients.update(
   *   'clientId',
   *   { body: [{ op: 'replace', path: '/name' }] },
   * );
   * ```
   */
  update(clientID: string, params: ClientUpdateParams, options?: RequestOptions): APIPromise<Client> {
    const { body } = params;
    return this._client.patch(path`/api/v2/oauth/clients/${clientID}`, { body: body, ...options });
  }

  /**
   * Get all OAuth 2.0 clients registered by your account.
   *
   * @example
   * ```ts
   * const clients = await client.api.v2.oauth.clients.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ClientListResponse> {
    return this._client.get('/api/v2/oauth/clients', options);
  }

  /**
   * Delete an existing OAuth 2.0 client by unique client ID.
   *
   * @example
   * ```ts
   * await client.api.v2.oauth.clients.delete('clientId');
   * ```
   */
  delete(clientID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/oauth/clients/${clientID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Client {
  /**
   * The account ID the client is registered under
   */
  _accountId: string;

  /**
   * The client's unique ID
   */
  _clientId: string;

  /**
   * Timestamp of client creation date
   */
  _creationDate: number;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * Client name
   */
  name: string;

  /**
   * The client's redirect URI
   */
  redirectUri: string;

  /**
   * The client secret. This will only be shown upon creation.
   */
  _clientSecret?: string;

  /**
   * Client description
   */
  description?: string;
}

export interface ClientListResponse {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * List of client objects
   */
  items: Array<Client>;
}

export interface ClientCreateParams {
  /**
   * Description of your OAuth 2.0 client.
   */
  description?: string;

  /**
   * The name of your new LaunchDarkly OAuth 2.0 client.
   */
  name?: string;

  /**
   * The redirect URI for your new OAuth 2.0 application. This should be an absolute
   * URL conforming with the standard HTTPS protocol.
   */
  redirectUri?: string;
}

export interface ClientUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

export declare namespace Clients {
  export {
    type Client as Client,
    type ClientListResponse as ClientListResponse,
    type ClientCreateParams as ClientCreateParams,
    type ClientUpdateParams as ClientUpdateParams,
  };
}
