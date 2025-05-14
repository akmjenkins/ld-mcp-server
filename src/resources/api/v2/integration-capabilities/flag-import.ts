// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class FlagImport extends APIResource {
  /**
   * Get a single flag import configuration by ID. The `integrationKey` path
   * parameter identifies the feature management system from which the import occurs,
   * for example, `split`.
   *
   * @example
   * ```ts
   * const flagImportIntegration =
   *   await client.api.v2.integrationCapabilities.flagImport.retrieve(
   *     'integrationId',
   *     {
   *       projectKey: 'projectKey',
   *       integrationKey: 'integrationKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    integrationID: string,
    params: FlagImportRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FlagImportIntegration> {
    const { projectKey, integrationKey } = params;
    return this._client.get(
      path`/api/v2/integration-capabilities/flag-import/${projectKey}/${integrationKey}/${integrationID}`,
      options,
    );
  }

  /**
   * Updating a flag import configuration uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element
   * to the import configuration fields that are arrays, set the `path` to the name
   * of the field and then append `/<array index>`. Use `/0` to add to the beginning
   * of the array. Use `/-` to add to the end of the array.<br/><br/>You can update
   * the `config`, `tags`, and `name` of the flag import configuration.
   *
   * @example
   * ```ts
   * const flagImportIntegration =
   *   await client.api.v2.integrationCapabilities.flagImport.update(
   *     'integrationId',
   *     {
   *       projectKey: 'projectKey',
   *       integrationKey: 'integrationKey',
   *       body: [{ op: 'replace', path: '/exampleField' }],
   *     },
   *   );
   * ```
   */
  update(
    integrationID: string,
    params: FlagImportUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FlagImportIntegration> {
    const { projectKey, integrationKey, body } = params;
    return this._client.patch(
      path`/api/v2/integration-capabilities/flag-import/${projectKey}/${integrationKey}/${integrationID}`,
      { body: body, ...options },
    );
  }

  /**
   * Delete a flag import configuration by ID. The `integrationKey` path parameter
   * identifies the feature management system from which the import occurs, for
   * example, `split`.
   *
   * @example
   * ```ts
   * await client.api.v2.integrationCapabilities.flagImport.delete(
   *   'integrationId',
   *   {
   *     projectKey: 'projectKey',
   *     integrationKey: 'integrationKey',
   *   },
   * );
   * ```
   */
  delete(integrationID: string, params: FlagImportDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, integrationKey } = params;
    return this._client.delete(
      path`/api/v2/integration-capabilities/flag-import/${projectKey}/${integrationKey}/${integrationID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * List all flag import configurations.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.integrationCapabilities.flagImport.retrieveFlagImport();
   * ```
   */
  retrieveFlagImport(options?: RequestOptions): APIPromise<FlagImportRetrieveFlagImportResponse> {
    return this._client.get('/api/v2/integration-capabilities/flag-import', options);
  }

  /**
   * Trigger a single flag import run for an existing flag import configuration. The
   * `integrationKey` path parameter identifies the feature management system from
   * which the import occurs, for example, `split`.
   *
   * @example
   * ```ts
   * await client.api.v2.integrationCapabilities.flagImport.trigger(
   *   'integrationId',
   *   {
   *     projectKey: 'projectKey',
   *     integrationKey: 'integrationKey',
   *   },
   * );
   * ```
   */
  trigger(
    integrationID: string,
    params: FlagImportTriggerParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectKey, integrationKey } = params;
    return this._client.post(
      path`/api/v2/integration-capabilities/flag-import/${projectKey}/${integrationKey}/${integrationID}/trigger`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface FlagImportIntegration {
  /**
   * The integration ID
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: FlagImportIntegration._Links;

  /**
   * Details on the status of the import job
   */
  _status: FlagImportIntegration._Status;

  /**
   * The configuration for the given import integration. Only included when
   * requesting a single integration by ID. Refer to the <code>formVariables</code>
   * field in the corresponding <code>manifest.json</code> for a full list of fields
   * for each integration.
   */
  config: Record<string, unknown>;

  /**
   * The integration key
   */
  integrationKey: 'split' | 'unleash';

  /**
   * Name of the configuration
   */
  name: string;

  /**
   * The project key
   */
  projectKey: string;

  /**
   * List of tags for this configuration
   */
  tags: Array<string>;

  /**
   * Version of the current configuration
   */
  version: number;

  /**
   * Details on the allowed and denied actions for this configuration
   */
  _access?: RelayAutoConfigsAPI.Access;
}

export namespace FlagImportIntegration {
  /**
   * The location and content type of related resources
   */
  export interface _Links {
    parent: StatisticsAPI.Link;

    project: StatisticsAPI.Link;

    self: StatisticsAPI.Link;
  }

  /**
   * Details on the status of the import job
   */
  export interface _Status {
    errors?: Array<_Status.Error>;

    /**
     * Timestamp of when the most recent import error occurred, if any
     */
    lastError?: number;

    /**
     * Timestamp of when the most recent successful import occurred.
     */
    lastImport?: number;

    /**
     * The current status of the import integrations related import job
     */
    status?: 'complete' | 'importing' | 'pending' | 'failed' | 'partial';
  }

  export namespace _Status {
    export interface Error {
      integrationId?: string;

      message?: string;

      statusCode?: number;

      timestamp?: number;
    }
  }
}

export interface FlagImportRetrieveFlagImportResponse {
  /**
   * The location and content type of related resources
   */
  _links: FlagImportRetrieveFlagImportResponse._Links;

  /**
   * An array of flag import configurations
   */
  items: Array<FlagImportIntegration>;
}

export namespace FlagImportRetrieveFlagImportResponse {
  /**
   * The location and content type of related resources
   */
  export interface _Links {
    self: StatisticsAPI.Link;

    parent?: StatisticsAPI.Link;
  }
}

export interface FlagImportRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The integration key, for example, `split`
   */
  integrationKey: string;
}

export interface FlagImportUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The integration key
   */
  integrationKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface FlagImportDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The integration key
   */
  integrationKey: string;
}

export interface FlagImportTriggerParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The integration key
   */
  integrationKey: string;
}

export declare namespace FlagImport {
  export {
    type FlagImportIntegration as FlagImportIntegration,
    type FlagImportRetrieveFlagImportResponse as FlagImportRetrieveFlagImportResponse,
    type FlagImportRetrieveParams as FlagImportRetrieveParams,
    type FlagImportUpdateParams as FlagImportUpdateParams,
    type FlagImportDeleteParams as FlagImportDeleteParams,
    type FlagImportTriggerParams as FlagImportTriggerParams,
  };
}
