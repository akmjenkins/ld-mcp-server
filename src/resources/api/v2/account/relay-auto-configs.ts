// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class RelayAutoConfigs extends APIResource {
  /**
   * Get a single Relay Proxy auto config by ID.
   *
   * @example
   * ```ts
   * const relayAutoConfigRep =
   *   await client.api.v2.account.relayAutoConfigs.retrieve(
   *     'id',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RelayAutoConfigRep> {
    return this._client.get(path`/api/v2/account/relay-auto-configs/${id}`, options);
  }

  /**
   * Update a Relay Proxy configuration. Updating a configuration uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or
   * [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation
   * of the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const relayAutoConfigRep =
   *   await client.api.v2.account.relayAutoConfigs.update(
   *     'id',
   *     {
   *       patch: [
   *         {
   *           op: 'replace',
   *           path: '/policy/0',
   *           value: {
   *             actions: ['*'],
   *             effect: 'allow',
   *             resources: ['proj/*:env/qa'],
   *           },
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: RelayAutoConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RelayAutoConfigRep> {
    return this._client.patch(path`/api/v2/account/relay-auto-configs/${id}`, { body, ...options });
  }

  /**
   * Delete a Relay Proxy config.
   *
   * @example
   * ```ts
   * await client.api.v2.account.relayAutoConfigs.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/account/relay-auto-configs/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a Relay Proxy config.
   *
   * @example
   * ```ts
   * const relayAutoConfigRep =
   *   await client.api.v2.account.relayAutoConfigs.relayAutoConfigs(
   *     {
   *       name: 'Sample Relay Proxy config for all proj and env',
   *       policy: [
   *         {
   *           actions: ['*'],
   *           effect: 'allow',
   *           resources: ['proj/*:env/*'],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  relayAutoConfigs(
    body: RelayAutoConfigRelayAutoConfigsParams,
    options?: RequestOptions,
  ): APIPromise<RelayAutoConfigRep> {
    return this._client.post('/api/v2/account/relay-auto-configs', { body, ...options });
  }

  /**
   * Reset a Relay Proxy configuration's secret key with an optional expiry time for
   * the old key.
   *
   * @example
   * ```ts
   * const relayAutoConfigRep =
   *   await client.api.v2.account.relayAutoConfigs.reset('id');
   * ```
   */
  reset(
    id: string,
    params: RelayAutoConfigResetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RelayAutoConfigRep> {
    const { expiry } = params ?? {};
    return this._client.post(path`/api/v2/account/relay-auto-configs/${id}/reset`, {
      query: { expiry },
      ...options,
    });
  }

  /**
   * Get a list of Relay Proxy configurations in the account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.account.relayAutoConfigs.retrieveRelayAutoConfigs();
   * ```
   */
  retrieveRelayAutoConfigs(
    options?: RequestOptions,
  ): APIPromise<RelayAutoConfigRetrieveRelayAutoConfigsResponse> {
    return this._client.get('/api/v2/account/relay-auto-configs', options);
  }
}

export interface Access {
  allowed: Array<Access.Allowed>;

  denied: Array<Access.Denied>;
}

export namespace Access {
  export interface Allowed {
    action: string;

    reason: Allowed.Reason;
  }

  export namespace Allowed {
    export interface Reason {
      /**
       * Whether this statement should allow or deny actions on the resources.
       */
      effect: 'allow' | 'deny';

      /**
       * Actions to perform on a resource
       */
      actions?: Array<string>;

      /**
       * Targeted actions are the actions NOT in this list. The <code>actions</code> and
       * <code>notResources</code> fields must be empty to use this field.
       */
      notActions?: Array<string>;

      /**
       * Targeted resources are the resources NOT in this list. The
       * <code>resources</code> and <code>notActions</code> fields must be empty to use
       * this field.
       */
      notResources?: Array<string>;

      /**
       * Resource specifier strings
       */
      resources?: Array<string>;

      role_name?: string;
    }
  }

  export interface Denied {
    action: string;

    reason: Denied.Reason;
  }

  export namespace Denied {
    export interface Reason {
      /**
       * Whether this statement should allow or deny actions on the resources.
       */
      effect: 'allow' | 'deny';

      /**
       * Actions to perform on a resource
       */
      actions?: Array<string>;

      /**
       * Targeted actions are the actions NOT in this list. The <code>actions</code> and
       * <code>notResources</code> fields must be empty to use this field.
       */
      notActions?: Array<string>;

      /**
       * Targeted resources are the resources NOT in this list. The
       * <code>resources</code> and <code>notActions</code> fields must be empty to use
       * this field.
       */
      notResources?: Array<string>;

      /**
       * Resource specifier strings
       */
      resources?: Array<string>;

      role_name?: string;
    }
  }
}

export interface MemberSummary {
  /**
   * The member's ID
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * The member's email address
   */
  email: string;

  /**
   * The member's built-in role. If the member has no custom roles, this role will be
   * in effect.
   */
  role: string;

  /**
   * The member's first name
   */
  firstName?: string;

  /**
   * The member's last name
   */
  lastName?: string;
}

export interface PatchWithComment {
  /**
   * A JSON patch representation of the change to make
   */
  patch: Array<ApplicationsAPI.PatchOperation>;

  /**
   * Optional comment
   */
  comment?: string;
}

export interface RelayAutoConfigRep {
  /**
   * The ID of the Relay Proxy configuration
   */
  _id: string;

  /**
   * Timestamp of when the Relay Proxy configuration was created
   */
  creationDate: number;

  /**
   * The last few characters of the Relay Proxy configuration key, displayed in the
   * LaunchDarkly UI
   */
  displayKey: string;

  /**
   * The Relay Proxy configuration key
   */
  fullKey: string;

  /**
   * Timestamp of when the Relay Proxy configuration was most recently modified
   */
  lastModified: number;

  /**
   * A human-friendly name for the Relay Proxy configuration
   */
  name: string;

  /**
   * A description of what environments and projects the Relay Proxy should include
   * or exclude
   */
  policy: Array<Statement>;

  /**
   * Details on the allowed and denied actions for this Relay Proxy configuration
   */
  _access?: Access;

  /**
   * Details on the member who created this Relay Proxy configuration
   */
  _creator?: MemberSummary;
}

export interface Statement {
  /**
   * Whether this statement should allow or deny actions on the resources.
   */
  effect: 'allow' | 'deny';

  /**
   * Actions to perform on a resource
   */
  actions?: Array<string>;

  /**
   * Targeted actions are the actions NOT in this list. The <code>actions</code> and
   * <code>notResources</code> fields must be empty to use this field.
   */
  notActions?: Array<string>;

  /**
   * Targeted resources are the resources NOT in this list. The
   * <code>resources</code> and <code>notActions</code> fields must be empty to use
   * this field.
   */
  notResources?: Array<string>;

  /**
   * Resource specifier strings
   */
  resources?: Array<string>;
}

export interface RelayAutoConfigRetrieveRelayAutoConfigsResponse {
  /**
   * An array of Relay Proxy configurations
   */
  items: Array<RelayAutoConfigRep>;
}

export interface RelayAutoConfigUpdateParams {
  /**
   * A JSON patch representation of the change to make
   */
  patch: Array<ApplicationsAPI.PatchOperation>;

  /**
   * Optional comment
   */
  comment?: string;
}

export interface RelayAutoConfigRelayAutoConfigsParams {
  /**
   * A human-friendly name for the Relay Proxy configuration
   */
  name: string;

  /**
   * A description of what environments and projects the Relay Proxy should include
   * or exclude. To learn more, read
   * [Write an inline policy](https://launchdarkly.com/docs/sdk/relay-proxy/automatic-configuration#write-an-inline-policy).
   */
  policy: Array<Statement>;
}

export interface RelayAutoConfigResetParams {
  /**
   * An expiration time for the old Relay Proxy configuration key, expressed as a
   * Unix epoch time in milliseconds. By default, the Relay Proxy configuration will
   * expire immediately.
   */
  expiry?: number;
}

export declare namespace RelayAutoConfigs {
  export {
    type Access as Access,
    type MemberSummary as MemberSummary,
    type PatchWithComment as PatchWithComment,
    type RelayAutoConfigRep as RelayAutoConfigRep,
    type Statement as Statement,
    type RelayAutoConfigRetrieveRelayAutoConfigsResponse as RelayAutoConfigRetrieveRelayAutoConfigsResponse,
    type RelayAutoConfigUpdateParams as RelayAutoConfigUpdateParams,
    type RelayAutoConfigRelayAutoConfigsParams as RelayAutoConfigRelayAutoConfigsParams,
    type RelayAutoConfigResetParams as RelayAutoConfigResetParams,
  };
}
