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

export class Webhooks extends APIResource {
  /**
   * Create a new webhook.
   *
   * @example
   * ```ts
   * const webhook = await client.api.v2.webhooks.create({
   *   on: true,
   *   sign: false,
   *   url: 'https://example.com',
   *   name: 'apidocs test webhook',
   *   statements: [
   *     {
   *       actions: ['*'],
   *       effect: 'allow',
   *       resources: ['proj/test'],
   *     },
   *   ],
   *   tags: ['example-tag'],
   * });
   * ```
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.post('/api/v2/webhooks', { body, ...options });
  }

  /**
   * Get a single webhook by ID.
   *
   * @example
   * ```ts
   * const webhook = await client.api.v2.webhooks.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.get(path`/api/v2/webhooks/${id}`, options);
  }

  /**
   * Update a webhook's settings. Updating webhook settings uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const webhook = await client.api.v2.webhooks.update('id', {
   *   body: [{ op: 'replace', path: '/on' }],
   * });
   * ```
   */
  update(id: string, params: WebhookUpdateParams, options?: RequestOptions): APIPromise<Webhook> {
    const { body } = params;
    return this._client.patch(path`/api/v2/webhooks/${id}`, { body: body, ...options });
  }

  /**
   * Fetch a list of all webhooks.
   *
   * @example
   * ```ts
   * const webhooks = await client.api.v2.webhooks.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/api/v2/webhooks', options);
  }

  /**
   * Delete a webhook by ID.
   *
   * @example
   * ```ts
   * await client.api.v2.webhooks.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Webhook {
  /**
   * The ID of this webhook
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * Whether or not this webhook is enabled
   */
  on: boolean;

  /**
   * List of tags for this webhook
   */
  tags: Array<string>;

  /**
   * The URL to which LaunchDarkly sends an HTTP POST payload for this webhook
   */
  url: string;

  /**
   * Details on the allowed and denied actions for this webhook
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * A human-readable name for this webhook
   */
  name?: string;

  /**
   * The secret for this webhook
   */
  secret?: string;

  /**
   * Represents a Custom role policy, defining a resource kinds filter the webhook
   * responds to.
   */
  statements?: Array<RelayAutoConfigsAPI.Statement>;
}

export interface WebhookListResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of webhooks
   */
  items: Array<Webhook>;
}

export interface WebhookCreateParams {
  /**
   * Whether or not this webhook is enabled.
   */
  on: boolean;

  /**
   * If sign is false, the webhook does not include a signature header, and the
   * secret can be omitted.
   */
  sign: boolean;

  /**
   * The URL of the remote webhook
   */
  url: string;

  /**
   * A human-readable name for your webhook
   */
  name?: string;

  /**
   * If sign is true, and the secret attribute is omitted, LaunchDarkly automatically
   * generates a secret for you.
   */
  secret?: string;

  /**
   * Represents a Custom role policy, defining a resource kinds filter the webhook
   * should respond to.
   */
  statements?: Array<AuditlogAPI.StatementPost>;

  /**
   * List of tags for this webhook
   */
  tags?: Array<string>;
}

export interface WebhookUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
