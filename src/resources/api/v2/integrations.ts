// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RelayAutoConfigsAPI from './account/relay-auto-configs';
import * as ApplicationsAPI from './applications/applications';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Get an audit log subscription by ID.
   *
   * @example
   * ```ts
   * const integration =
   *   await client.api.v2.integrations.retrieve('id', {
   *     integrationKey: 'integrationKey',
   *   });
   * ```
   */
  retrieve(id: string, params: IntegrationRetrieveParams, options?: RequestOptions): APIPromise<Integration> {
    const { integrationKey } = params;
    return this._client.get(path`/api/v2/integrations/${integrationKey}/${id}`, options);
  }

  /**
   * Update an audit log subscription configuration. Updating an audit log
   * subscription uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902)
   * representation of the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const integration = await client.api.v2.integrations.update(
   *   'id',
   *   {
   *     integrationKey: 'integrationKey',
   *     body: [{ op: 'replace', path: '/on' }],
   *   },
   * );
   * ```
   */
  update(id: string, params: IntegrationUpdateParams, options?: RequestOptions): APIPromise<Integration> {
    const { integrationKey, body } = params;
    return this._client.patch(path`/api/v2/integrations/${integrationKey}/${id}`, { body: body, ...options });
  }

  /**
   * Delete an audit log subscription.
   *
   * @example
   * ```ts
   * await client.api.v2.integrations.delete('id', {
   *   integrationKey: 'integrationKey',
   * });
   * ```
   */
  delete(id: string, params: IntegrationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { integrationKey } = params;
    return this._client.delete(path`/api/v2/integrations/${integrationKey}/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Integration {
  /**
   * Details on the allowed and denied actions for this subscription
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * The ID for this integration audit log subscription
   */
  _id?: string;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * Details on the most recent successes and errors for this integration
   */
  _status?: Integration._Status;

  /**
   * Datadog API key. Only used for legacy Datadog webhook integrations.
   */
  apiKey?: string;

  /**
   * Details on configuration for an integration of this type. Refer to the
   * <code>formVariables</code> field in the corresponding <code>manifest.json</code>
   * for a full list of fields for each integration.
   */
  config?: Record<string, unknown>;

  /**
   * The type of integration
   */
  kind?: string;

  /**
   * A human-friendly name for the integration
   */
  name?: string;

  /**
   * Whether the integration is currently active
   */
  on?: boolean;

  /**
   * Represents a Custom role policy, defining a resource kinds filter the
   * integration audit log subscription responds to.
   */
  statements?: Array<RelayAutoConfigsAPI.Statement>;

  /**
   * An array of tags for this integration
   */
  tags?: Array<string>;

  /**
   * Slack webhook receiver URL. Only used for legacy Slack webhook integrations.
   */
  url?: string;
}

export namespace Integration {
  /**
   * Details on the most recent successes and errors for this integration
   */
  export interface _Status {
    errorCount?: number;

    errors?: Array<_Status.Error>;

    lastError?: number;

    lastSuccess?: number;

    successCount?: number;
  }

  export namespace _Status {
    export interface Error {
      responseBody?: string;

      statusCode?: number;

      timestamp?: number;
    }
  }
}

export interface IntegrationRetrieveParams {
  /**
   * The integration key
   */
  integrationKey: string;
}

export interface IntegrationUpdateParams {
  /**
   * Path param: The integration key
   */
  integrationKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface IntegrationDeleteParams {
  /**
   * The integration key
   */
  integrationKey: string;
}

export declare namespace Integrations {
  export {
    type Integration as Integration,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
  };
}
