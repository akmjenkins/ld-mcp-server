// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuditlogAPI from './auditlog';
import * as RelayAutoConfigsAPI from './account/relay-auto-configs';
import * as ApplicationsAPI from './applications/applications';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * Create a new access token.
   *
   * @example
   * ```ts
   * const token = await client.api.v2.tokens.create({
   *   role: 'reader',
   * });
   * ```
   */
  create(body: TokenCreateParams, options?: RequestOptions): APIPromise<Token> {
    return this._client.post('/api/v2/tokens', { body, ...options });
  }

  /**
   * Get a single access token by ID.
   *
   * @example
   * ```ts
   * const token = await client.api.v2.tokens.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Token> {
    return this._client.get(path`/api/v2/tokens/${id}`, options);
  }

  /**
   * Update an access token's settings. Updating an access token uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const token = await client.api.v2.tokens.update('id', {
   *   body: [{ op: 'replace', path: '/role' }],
   * });
   * ```
   */
  update(id: string, params: TokenUpdateParams, options?: RequestOptions): APIPromise<Token> {
    const { body } = params;
    return this._client.patch(path`/api/v2/tokens/${id}`, { body: body, ...options });
  }

  /**
   * Fetch a list of all access tokens.
   *
   * @example
   * ```ts
   * const tokens = await client.api.v2.tokens.list();
   * ```
   */
  list(
    query: TokenListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TokenListResponse> {
    return this._client.get('/api/v2/tokens', { query, ...options });
  }

  /**
   * Delete an access token by ID.
   *
   * @example
   * ```ts
   * await client.api.v2.tokens.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/tokens/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Reset an access token's secret key with an optional expiry time for the old key.
   *
   * @example
   * ```ts
   * const token = await client.api.v2.tokens.reset('id');
   * ```
   */
  reset(
    id: string,
    params: TokenResetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Token> {
    const { expiry } = params ?? {};
    return this._client.post(path`/api/v2/tokens/${id}/reset`, { query: { expiry }, ...options });
  }
}

export interface Token {
  /**
   * The ID of the access token
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * Timestamp of when the access token was created
   */
  creationDate: number;

  /**
   * Timestamp of the last modification of the access token
   */
  lastModified: number;

  /**
   * The ID of the member who created the access token
   */
  memberId: string;

  /**
   * The ID of the owner of the account for the access token
   */
  ownerId: string;

  /**
   * The token value. When creating or resetting, contains the entire token value.
   * Otherwise, contains the last four characters.
   */
  token?: string;

  /**
   * Details on the member who created the access token
   */
  _member?: RelayAutoConfigsAPI.MemberSummary;

  /**
   * A list of custom role IDs to use as access limits for the access token
   */
  customRoleIds?: Array<string>;

  /**
   * The default API version for this token
   */
  defaultApiVersion?: number;

  /**
   * A description for the access token
   */
  description?: string;

  /**
   * An array of policy statements, with three attributes: effect, resources,
   * actions. May be used in place of a built-in or custom role.
   */
  inlineRole?: Array<RelayAutoConfigsAPI.Statement>;

  /**
   * Timestamp of when the access token was last used
   */
  lastUsed?: number;

  /**
   * A human-friendly name for the access token
   */
  name?: string;

  /**
   * Built-in role for the token
   */
  role?: string;

  /**
   * Whether this is a service token or a personal token
   */
  serviceToken?: boolean;
}

export interface TokenListResponse {
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * An array of access tokens
   */
  items?: Array<Token>;

  /**
   * The number of access tokens returned
   */
  totalCount?: number;
}

export interface TokenCreateParams {
  /**
   * A list of custom role IDs to use as access limits for the access token
   */
  customRoleIds?: Array<string>;

  /**
   * The default API version for this token
   */
  defaultApiVersion?: number;

  /**
   * A description for the access token
   */
  description?: string;

  /**
   * A JSON array of statements represented as JSON objects with three attributes:
   * effect, resources, actions. May be used in place of a built-in or custom role.
   */
  inlineRole?: Array<AuditlogAPI.StatementPost>;

  /**
   * A human-friendly name for the access token
   */
  name?: string;

  /**
   * Built-in role for the token
   */
  role?: 'reader' | 'writer' | 'admin';

  /**
   * Whether the token is a service token
   */
  serviceToken?: boolean;
}

export interface TokenUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface TokenListParams {
  /**
   * The number of access tokens to return in the response. Defaults to 25.
   */
  limit?: number;

  /**
   * Where to start in the list. This is for use with pagination. For example, an
   * offset of 10 skips the first ten items and then returns the next items in the
   * list, up to the query `limit`.
   */
  offset?: number;

  /**
   * If set to true, and the authentication access token has the 'Admin' role,
   * personal access tokens for all members will be retrieved.
   */
  showAll?: boolean;
}

export interface TokenResetParams {
  /**
   * An expiration time for the old token key, expressed as a Unix epoch time in
   * milliseconds. By default, the token will expire immediately.
   */
  expiry?: number;
}

export declare namespace Tokens {
  export {
    type Token as Token,
    type TokenListResponse as TokenListResponse,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
    type TokenResetParams as TokenResetParams,
  };
}
