// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BigSegmentStore extends APIResource {
  /**
   * Get a big segment store integration by ID.
   *
   * @example
   * ```ts
   * const bigSegmentStoreIntegration =
   *   await client.api.v2.integrationCapabilities.bigSegmentStore.retrieve(
   *     'integrationId',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       integrationKey: 'integrationKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    integrationID: string,
    params: BigSegmentStoreRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BigSegmentStoreIntegration> {
    const { projectKey, environmentKey, integrationKey } = params;
    return this._client.get(
      path`/api/v2/integration-capabilities/big-segment-store/${projectKey}/${environmentKey}/${integrationKey}/${integrationID}`,
      options,
    );
  }

  /**
   * Update a big segment store integration. Updating a big segment store requires a
   * [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const bigSegmentStoreIntegration =
   *   await client.api.v2.integrationCapabilities.bigSegmentStore.update(
   *     'integrationId',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *       integrationKey: 'integrationKey',
   *       body: [{ op: 'replace', path: '/exampleField' }],
   *     },
   *   );
   * ```
   */
  update(
    integrationID: string,
    params: BigSegmentStoreUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BigSegmentStoreIntegration> {
    const { projectKey, environmentKey, integrationKey, body } = params;
    return this._client.patch(
      path`/api/v2/integration-capabilities/big-segment-store/${projectKey}/${environmentKey}/${integrationKey}/${integrationID}`,
      { body: body, ...options },
    );
  }

  /**
   * Delete a persistent store integration. Each integration uses either Redis or
   * DynamoDB.
   *
   * @example
   * ```ts
   * await client.api.v2.integrationCapabilities.bigSegmentStore.delete(
   *   'integrationId',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *     integrationKey: 'integrationKey',
   *   },
   * );
   * ```
   */
  delete(
    integrationID: string,
    params: BigSegmentStoreDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectKey, environmentKey, integrationKey } = params;
    return this._client.delete(
      path`/api/v2/integration-capabilities/big-segment-store/${projectKey}/${environmentKey}/${integrationKey}/${integrationID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * List all big segment store integrations.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.integrationCapabilities.bigSegmentStore.retrieveBigSegmentStore();
   * ```
   */
  retrieveBigSegmentStore(
    options?: RequestOptions,
  ): APIPromise<BigSegmentStoreRetrieveBigSegmentStoreResponse> {
    return this._client.get('/api/v2/integration-capabilities/big-segment-store', options);
  }
}

export interface BigSegmentStoreIntegration {
  /**
   * The integration ID
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: BigSegmentStoreIntegration._Links;

  /**
   * Details on the connection status of the persistent store integration
   */
  _status: BigSegmentStoreIntegration._Status;

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
  integrationKey: 'redis' | 'dynamodb';

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

export namespace BigSegmentStoreIntegration {
  /**
   * The location and content type of related resources
   */
  export interface _Links {
    environment: StatisticsAPI.Link;

    parent: StatisticsAPI.Link;

    project: StatisticsAPI.Link;

    self: StatisticsAPI.Link;
  }

  /**
   * Details on the connection status of the persistent store integration
   */
  export interface _Status {
    /**
     * Whether the persistent store integration is fully synchronized with the
     * LaunchDarkly environment, and the <code>lastSync</code> occurred within a few
     * minutes
     */
    available?: boolean;

    errors?: Array<_Status.Error>;

    /**
     * Timestamp of when the most recent synchronization error occurred, if any
     */
    lastError?: number;

    /**
     * Timestamp of when the most recent successful sync occurred between the
     * persistent store integration and the LaunchDarkly environment.
     */
    lastSync?: number;

    /**
     * Whether the persistent store integration may not be fully synchronized with the
     * LaunchDarkly environment. <code>true</code> if the integration could be stale.
     */
    potentiallyStale?: boolean;
  }

  export namespace _Status {
    export interface Error {
      message?: string;

      statusCode?: number;

      timestamp?: number;
    }
  }
}

export interface IntegrationDeliveryConfigurationPost {
  /**
   * The global integration settings, as specified by the <code>formVariables</code>
   * in the <code>manifest.json</code> for this integration.
   */
  config: Record<string, unknown>;

  /**
   * Name to identify the integration
   */
  name?: string;

  /**
   * Whether the integration configuration is active. Default value is false.
   */
  on?: boolean;

  /**
   * Tags to associate with the integration
   */
  tags?: Array<string>;
}

export interface BigSegmentStoreRetrieveBigSegmentStoreResponse {
  /**
   * The location and content type of related resources
   */
  _links: BigSegmentStoreRetrieveBigSegmentStoreResponse._Links;

  /**
   * An array of persistent store integration configurations
   */
  items: Array<BigSegmentStoreIntegration>;
}

export namespace BigSegmentStoreRetrieveBigSegmentStoreResponse {
  /**
   * The location and content type of related resources
   */
  export interface _Links {
    self: StatisticsAPI.Link;

    parent?: StatisticsAPI.Link;
  }
}

export interface BigSegmentStoreRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The integration key, either `redis` or `dynamodb`
   */
  integrationKey: string;
}

export interface BigSegmentStoreUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Path param: The integration key, either `redis` or `dynamodb`
   */
  integrationKey: string;

  /**
   * Body param:
   */
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface BigSegmentStoreDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The integration key, either `redis` or `dynamodb`
   */
  integrationKey: string;
}

export declare namespace BigSegmentStore {
  export {
    type BigSegmentStoreIntegration as BigSegmentStoreIntegration,
    type IntegrationDeliveryConfigurationPost as IntegrationDeliveryConfigurationPost,
    type BigSegmentStoreRetrieveBigSegmentStoreResponse as BigSegmentStoreRetrieveBigSegmentStoreResponse,
    type BigSegmentStoreRetrieveParams as BigSegmentStoreRetrieveParams,
    type BigSegmentStoreUpdateParams as BigSegmentStoreUpdateParams,
    type BigSegmentStoreDeleteParams as BigSegmentStoreDeleteParams,
  };
}
