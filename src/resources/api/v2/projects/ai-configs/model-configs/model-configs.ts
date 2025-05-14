// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as AIConfigsAPI from '../ai-configs';
import * as RestrictedAPI from './restricted';
import {
  Restricted,
  RestrictedCreateParams,
  RestrictedCreateResponse,
  RestrictedDeleteAllParams,
  RestrictedModelsRequest,
} from './restricted';
import { APIPromise } from '../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class ModelConfigs extends APIResource {
  restricted: RestrictedAPI.Restricted = new RestrictedAPI.Restricted(this._client);

  /**
   * Get an AI model config by key.
   *
   * @example
   * ```ts
   * const modelConfig =
   *   await client.api.v2.projects.aiConfigs.modelConfigs.retrieve(
   *     'default',
   *     { projectKey: 'default', 'LD-API-Version': 'beta' },
   *   );
   * ```
   */
  retrieve(
    modelConfigKey: string,
    params: ModelConfigRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ModelConfig> {
    const { projectKey, 'LD-API-Version': ldAPIVersion } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/ai-configs/model-configs/${modelConfigKey}`, {
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Delete an AI model config.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.aiConfigs.modelConfigs.delete(
   *   'modelConfigKey',
   *   { projectKey: 'default', 'LD-API-Version': 'beta' },
   * );
   * ```
   */
  delete(
    modelConfigKey: string,
    params: ModelConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { projectKey, 'LD-API-Version': ldAPIVersion } = params;
    return this._client.delete(
      path`/api/v2/projects/${projectKey}/ai-configs/model-configs/${modelConfigKey}`,
      {
        ...options,
        headers: buildHeaders([
          { Accept: '*/*', 'LD-API-Version': ldAPIVersion.toString() },
          options?.headers,
        ]),
      },
    );
  }

  /**
   * Create an AI model config. You can use this in any variation for any AI Config
   * in your project.
   *
   * @example
   * ```ts
   * const modelConfig =
   *   await client.api.v2.projects.aiConfigs.modelConfigs.modelConfigs(
   *     'default',
   *     {
   *       id: 'id',
   *       key: 'key',
   *       name: 'name',
   *       'LD-API-Version': 'beta',
   *     },
   *   );
   * ```
   */
  modelConfigs(
    projectKey: string,
    params: ModelConfigModelConfigsParams,
    options?: RequestOptions,
  ): APIPromise<ModelConfig> {
    const { 'LD-API-Version': ldAPIVersion, ...body } = params;
    return this._client.post(path`/api/v2/projects/${projectKey}/ai-configs/model-configs`, {
      body,
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Get all AI model configs for a project.
   *
   * @example
   * ```ts
   * const modelConfigs =
   *   await client.api.v2.projects.aiConfigs.modelConfigs.retrieveModelConfigs(
   *     'default',
   *     { 'LD-API-Version': 'beta' },
   *   );
   * ```
   */
  retrieveModelConfigs(
    projectKey: string,
    params: ModelConfigRetrieveModelConfigsParams,
    options?: RequestOptions,
  ): APIPromise<ModelConfigRetrieveModelConfigsResponse> {
    const { 'LD-API-Version': ldAPIVersion, ...query } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/ai-configs/model-configs`, {
      query,
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }
}

export interface ModelConfig {
  /**
   * Identifier for the model, for use with third party providers
   */
  id: string;

  /**
   * Whether the model is global
   */
  global: boolean;

  /**
   * Whether the model is restricted
   */
  isRestricted: boolean;

  /**
   * Unique key for the model
   */
  key: string;

  /**
   * Human readable name of the model
   */
  name: string;

  tags: Array<string>;

  version: number;

  _access?: AIConfigsAPI.AIConfigsAccess;

  /**
   * Cost per input token in USD
   */
  costPerInputToken?: number;

  /**
   * Cost per output token in USD
   */
  costPerOutputToken?: number;

  customParams?: unknown;

  /**
   * Icon for the model
   */
  icon?: string;

  params?: unknown;

  /**
   * Provider for the model
   */
  provider?: string;
}

export type ModelConfigRetrieveModelConfigsResponse = Array<ModelConfig>;

export interface ModelConfigRetrieveParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export interface ModelConfigDeleteParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export interface ModelConfigModelConfigsParams {
  /**
   * Body param: Identifier for the model, for use with third party providers
   */
  id: string;

  /**
   * Body param: Unique key for the model
   */
  key: string;

  /**
   * Body param: Human readable name of the model
   */
  name: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';

  /**
   * Body param: Cost per input token in USD
   */
  costPerInputToken?: number;

  /**
   * Body param: Cost per output token in USD
   */
  costPerOutputToken?: number;

  /**
   * Body param:
   */
  customParams?: unknown;

  /**
   * Body param: Icon for the model
   */
  icon?: string;

  /**
   * Body param:
   */
  params?: unknown;

  /**
   * Body param: Provider for the model
   */
  provider?: string;

  /**
   * Body param:
   */
  tags?: Array<string>;
}

export interface ModelConfigRetrieveModelConfigsParams {
  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';

  /**
   * Query param: Whether to return only restricted models
   */
  restricted?: boolean;
}

ModelConfigs.Restricted = Restricted;

export declare namespace ModelConfigs {
  export {
    type ModelConfig as ModelConfig,
    type ModelConfigRetrieveModelConfigsResponse as ModelConfigRetrieveModelConfigsResponse,
    type ModelConfigRetrieveParams as ModelConfigRetrieveParams,
    type ModelConfigDeleteParams as ModelConfigDeleteParams,
    type ModelConfigModelConfigsParams as ModelConfigModelConfigsParams,
    type ModelConfigRetrieveModelConfigsParams as ModelConfigRetrieveModelConfigsParams,
  };

  export {
    Restricted as Restricted,
    type RestrictedModelsRequest as RestrictedModelsRequest,
    type RestrictedCreateResponse as RestrictedCreateResponse,
    type RestrictedCreateParams as RestrictedCreateParams,
    type RestrictedDeleteAllParams as RestrictedDeleteAllParams,
  };
}
