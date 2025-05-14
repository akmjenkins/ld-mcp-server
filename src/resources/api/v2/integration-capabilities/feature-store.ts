// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class FeatureStore extends APIResource {
  /**
   * Get delivery configuration by ID.
   *
   * @example
   * ```ts
   * const integrationDeliveryConfiguration =
   *   await client.api.v2.integrationCapabilities.featureStore.retrieve(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       integrationKey: 'integrationKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: FeatureStoreRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationDeliveryConfiguration> {
    const { projectKey, environmentKey, integrationKey } = params;
    return this._client.get(
      path`/api/v2/integration-capabilities/featureStore/${projectKey}/${environmentKey}/${integrationKey}/${id}`,
      options,
    );
  }

  /**
   * Update an integration delivery configuration. Updating an integration delivery
   * configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902)
   * representation of the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const integrationDeliveryConfiguration =
   *   await client.api.v2.integrationCapabilities.featureStore.update(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       integrationKey: 'integrationKey',
   *       body: [{ op: 'replace', path: '/on' }],
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: FeatureStoreUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationDeliveryConfiguration> {
    const { projectKey, environmentKey, integrationKey, body } = params;
    return this._client.patch(
      path`/api/v2/integration-capabilities/featureStore/${projectKey}/${environmentKey}/${integrationKey}/${id}`,
      { body: body, ...options },
    );
  }

  /**
   * Delete a delivery configuration.
   *
   * @example
   * ```ts
   * await client.api.v2.integrationCapabilities.featureStore.delete(
   *   'id',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *     integrationKey: 'integrationKey',
   *   },
   * );
   * ```
   */
  delete(id: string, params: FeatureStoreDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey, integrationKey } = params;
    return this._client.delete(
      path`/api/v2/integration-capabilities/featureStore/${projectKey}/${environmentKey}/${integrationKey}/${id}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * List all delivery configurations.
   *
   * @example
   * ```ts
   * const integrationDeliveryConfigurationCollection =
   *   await client.api.v2.integrationCapabilities.featureStore.retrieveFeatureStore();
   * ```
   */
  retrieveFeatureStore(options?: RequestOptions): APIPromise<IntegrationDeliveryConfigurationCollection> {
    return this._client.get('/api/v2/integration-capabilities/featureStore', options);
  }

  /**
   * Validate the saved delivery configuration, using the `validationRequest` in the
   * integration's `manifest.json` file.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.integrationCapabilities.featureStore.validate(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       integrationKey: 'integrationKey',
   *     },
   *   );
   * ```
   */
  validate(
    id: string,
    params: FeatureStoreValidateParams,
    options?: RequestOptions,
  ): APIPromise<FeatureStoreValidateResponse> {
    const { projectKey, environmentKey, integrationKey } = params;
    return this._client.post(
      path`/api/v2/integration-capabilities/featureStore/${projectKey}/${environmentKey}/${integrationKey}/${id}/validate`,
      options,
    );
  }
}

export interface IntegrationDeliveryConfiguration {
  /**
   * The integration ID
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: IntegrationDeliveryConfiguration._Links;

  /**
   * The delivery configuration for the given integration provider. Only included
   * when requesting a single integration by ID. Refer to the
   * <code>formVariables</code> field in the corresponding <code>manifest.json</code>
   * for a full list of fields for each integration.
   */
  config: Record<string, unknown>;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The integration key
   */
  integrationKey: string;

  /**
   * Name of the configuration
   */
  name: string;

  /**
   * Whether the configuration is turned on
   */
  on: boolean;

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

export namespace IntegrationDeliveryConfiguration {
  /**
   * The location and content type of related resources
   */
  export interface _Links {
    environment: StatisticsAPI.Link;

    parent: StatisticsAPI.Link;

    project: StatisticsAPI.Link;

    self: StatisticsAPI.Link;
  }
}

export interface IntegrationDeliveryConfigurationCollection {
  /**
   * The location and content type of related resources
   */
  _links: IntegrationDeliveryConfigurationCollection._Links;

  /**
   * An array of integration delivery configurations
   */
  items: Array<IntegrationDeliveryConfiguration>;
}

export namespace IntegrationDeliveryConfigurationCollection {
  /**
   * The location and content type of related resources
   */
  export interface _Links {
    self: StatisticsAPI.Link;

    parent?: StatisticsAPI.Link;
  }
}

export interface FeatureStoreValidateResponse {
  error?: string;

  /**
   * JSON response to the validation request
   */
  responseBody?: string;

  /**
   * The status code returned by the validation
   */
  statusCode?: number;

  /**
   * Timestamp of when the validation was performed
   */
  timestamp?: number;
}

export interface FeatureStoreRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The integration key
   */
  integrationKey: string;
}

export interface FeatureStoreUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Path param: The integration key
   */
  integrationKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface FeatureStoreDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The integration key
   */
  integrationKey: string;
}

export interface FeatureStoreValidateParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The integration key
   */
  integrationKey: string;
}

export declare namespace FeatureStore {
  export {
    type IntegrationDeliveryConfiguration as IntegrationDeliveryConfiguration,
    type IntegrationDeliveryConfigurationCollection as IntegrationDeliveryConfigurationCollection,
    type FeatureStoreValidateResponse as FeatureStoreValidateResponse,
    type FeatureStoreRetrieveParams as FeatureStoreRetrieveParams,
    type FeatureStoreUpdateParams as FeatureStoreUpdateParams,
    type FeatureStoreDeleteParams as FeatureStoreDeleteParams,
    type FeatureStoreValidateParams as FeatureStoreValidateParams,
  };
}
