// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AIConfigsAPI from './ai-configs';
import * as VariationsAPI from './variations';
import {
  AIConfigVariation,
  Message,
  VariationCreateParams,
  VariationDeleteParams,
  VariationRetrieveParams,
  VariationRetrieveResponse,
  VariationUpdateParams,
  Variations,
} from './variations';
import * as ModelConfigsAPI from './model-configs/model-configs';
import {
  ModelConfig,
  ModelConfigDeleteParams,
  ModelConfigModelConfigsParams,
  ModelConfigRetrieveModelConfigsParams,
  ModelConfigRetrieveModelConfigsResponse,
  ModelConfigRetrieveParams,
  ModelConfigs,
} from './model-configs/model-configs';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class AIConfigs extends APIResource {
  variations: VariationsAPI.Variations = new VariationsAPI.Variations(this._client);
  modelConfigs: ModelConfigsAPI.ModelConfigs = new ModelConfigsAPI.ModelConfigs(this._client);

  /**
   * Retrieve a specific AI Config by its key.
   *
   * @example
   * ```ts
   * const aiConfig =
   *   await client.api.v2.projects.aiConfigs.retrieve(
   *     'configKey',
   *     { projectKey: 'projectKey', 'LD-API-Version': 'beta' },
   *   );
   * ```
   */
  retrieve(
    configKey: string,
    params: AIConfigRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AIConfig> {
    const { projectKey, 'LD-API-Version': ldAPIVersion } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/ai-configs/${configKey}`, {
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Edit an existing AI Config.
   *
   * The request body must be a JSON object of the fields to update. The values you
   * include replace the existing values for the fields.
   *
   * Here's an example:
   *
   * ```
   *   {
   *     "description": "Example updated description",
   *     "tags": ["new-tag"]
   *   }
   * ```
   *
   * @example
   * ```ts
   * const aiConfig =
   *   await client.api.v2.projects.aiConfigs.update(
   *     'configKey',
   *     { projectKey: 'projectKey', 'LD-API-Version': 'beta' },
   *   );
   * ```
   */
  update(configKey: string, params: AIConfigUpdateParams, options?: RequestOptions): APIPromise<AIConfig> {
    const { projectKey, 'LD-API-Version': ldAPIVersion, ...body } = params;
    return this._client.patch(path`/api/v2/projects/${projectKey}/ai-configs/${configKey}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Delete an existing AI Config.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.aiConfigs.delete('configKey', {
   *   projectKey: 'default',
   *   'LD-API-Version': 'beta',
   * });
   * ```
   */
  delete(configKey: string, params: AIConfigDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, 'LD-API-Version': ldAPIVersion } = params;
    return this._client.delete(path`/api/v2/projects/${projectKey}/ai-configs/${configKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Create a new AI Config within the given project.
   *
   * @example
   * ```ts
   * const aiConfig =
   *   await client.api.v2.projects.aiConfigs.aiConfigs(
   *     'projectKey',
   *     { key: 'key', name: 'name', 'LD-API-Version': 'beta' },
   *   );
   * ```
   */
  aiConfigs(
    projectKey: string,
    params: AIConfigAIConfigsParams,
    options?: RequestOptions,
  ): APIPromise<AIConfig> {
    const { 'LD-API-Version': ldAPIVersion, ...body } = params;
    return this._client.post(path`/api/v2/projects/${projectKey}/ai-configs`, {
      body,
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Get a list of all AI Configs in the given project.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.aiConfigs.retrieveAIConfigs(
   *     'default',
   *     { 'LD-API-Version': 'beta' },
   *   );
   * ```
   */
  retrieveAIConfigs(
    projectKey: string,
    params: AIConfigRetrieveAIConfigsParams,
    options?: RequestOptions,
  ): APIPromise<AIConfigRetrieveAIConfigsResponse> {
    const { 'LD-API-Version': ldAPIVersion, ...query } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/ai-configs`, {
      query,
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Retrieve usage metrics for an AI Config by config key.
   *
   * @example
   * ```ts
   * const metrics =
   *   await client.api.v2.projects.aiConfigs.retrieveMetrics(
   *     'configKey',
   *     {
   *       projectKey: 'projectKey',
   *       env: 'env',
   *       from: 0,
   *       to: 0,
   *       'LD-API-Version': 'beta',
   *     },
   *   );
   * ```
   */
  retrieveMetrics(
    configKey: string,
    params: AIConfigRetrieveMetricsParams,
    options?: RequestOptions,
  ): APIPromise<Metrics> {
    const { projectKey, 'LD-API-Version': ldAPIVersion, ...query } = params;
    return this._client.get(path`/api/v2/projects/${projectKey}/ai-configs/${configKey}/metrics`, {
      query,
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Retrieve usage metrics for an AI Config by config key, with results split by
   * variation.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.aiConfigs.retrieveMetricsByVariation(
   *     'configKey',
   *     {
   *       projectKey: 'projectKey',
   *       env: 'env',
   *       from: 0,
   *       to: 0,
   *       'LD-API-Version': 'beta',
   *     },
   *   );
   * ```
   */
  retrieveMetricsByVariation(
    configKey: string,
    params: AIConfigRetrieveMetricsByVariationParams,
    options?: RequestOptions,
  ): APIPromise<AIConfigRetrieveMetricsByVariationResponse> {
    const { projectKey, 'LD-API-Version': ldAPIVersion, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/ai-configs/${configKey}/metrics-by-variation`,
      {
        query,
        ...options,
        headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
      },
    );
  }
}

export interface AIConfig {
  createdAt: number;

  description: string;

  key: string;

  name: string;

  tags: Array<string>;

  updatedAt: number;

  variations: Array<VariationsAPI.AIConfigVariation>;

  version: number;

  _access?: AIConfigsAccess;

  /**
   * The location and content type of related resources
   */
  _links?: AIConfig._Links;

  _maintainer?: AIConfig.MaintainerMember | AIConfig.AIConfigsMaintainerTeam;
}

export namespace AIConfig {
  /**
   * The location and content type of related resources
   */
  export interface _Links {
    parent: AIConfigsAPI.CoreLink;

    self: AIConfigsAPI.CoreLink;
  }

  export interface MaintainerMember {
    _id: string;

    email: string;

    role: string;

    firstName?: string;

    kind?: string;

    lastName?: string;
  }

  export interface AIConfigsMaintainerTeam {
    key: string;

    name: string;

    kind?: string;
  }
}

export interface AIConfigsAccess {
  allowed: Array<AIConfigsAccess.Allowed>;

  denied: Array<AIConfigsAccess.Denied>;
}

export namespace AIConfigsAccess {
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

export interface AIConfigsLink {
  href?: string;

  type?: string;
}

export interface CoreLink {
  href: string;

  type: string;
}

export interface Metrics {
  durationMs?: number;

  /**
   * @deprecated Number of attempted generations
   */
  generationCount?: number;

  /**
   * Number of generations with errors
   */
  generationErrorCount?: number;

  /**
   * Number of successful generations
   */
  generationSuccessCount?: number;

  /**
   * Cost of input tokens in USD
   */
  inputCost?: number;

  inputTokens?: number;

  /**
   * Cost of output tokens in USD
   */
  outputCost?: number;

  outputTokens?: number;

  /**
   * A value between 0 and 1 representing satisfaction rating
   */
  satisfactionRating?: number;

  thumbsDown?: number;

  thumbsUp?: number;

  timeToFirstTokenMs?: number;

  totalTokens?: number;
}

export interface AIConfigRetrieveAIConfigsResponse {
  items: Array<AIConfig>;

  totalCount: number;

  _links?: AIConfigRetrieveAIConfigsResponse._Links;
}

export namespace AIConfigRetrieveAIConfigsResponse {
  export interface _Links {
    self: AIConfigsAPI.AIConfigsLink;

    first?: AIConfigsAPI.AIConfigsLink;

    last?: AIConfigsAPI.AIConfigsLink;

    next?: AIConfigsAPI.AIConfigsLink;

    prev?: AIConfigsAPI.AIConfigsLink;
  }
}

export type AIConfigRetrieveMetricsByVariationResponse =
  Array<AIConfigRetrieveMetricsByVariationResponse.AIConfigRetrieveMetricsByVariationResponseItem>;

export namespace AIConfigRetrieveMetricsByVariationResponse {
  export interface AIConfigRetrieveMetricsByVariationResponseItem {
    metrics?: AIConfigsAPI.Metrics;

    variationKey?: string;
  }
}

export interface AIConfigRetrieveParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export interface AIConfigUpdateParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  maintainerId?: string;

  /**
   * Body param:
   */
  maintainerTeamKey?: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  tags?: Array<string>;
}

export interface AIConfigDeleteParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export interface AIConfigAIConfigsParams {
  /**
   * Body param:
   */
  key: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  maintainerId?: string;

  /**
   * Body param:
   */
  maintainerTeamKey?: string;

  /**
   * Body param:
   */
  tags?: Array<string>;
}

export interface AIConfigRetrieveAIConfigsParams {
  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';

  /**
   * Query param: A filter to apply to the list of AI Configs.
   */
  filter?: string;

  /**
   * Query param: The number of AI Configs to return.
   */
  limit?: number;

  /**
   * Query param: Where to start in the list. Use this with pagination. For example,
   * an offset of 10 skips the first ten items and then returns the next items in the
   * list, up to the query `limit`.
   */
  offset?: number;

  /**
   * Query param: A sort to apply to the list of AI Configs.
   */
  sort?: string;
}

export interface AIConfigRetrieveMetricsParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Query param: An environment key. Only metrics from this environment will be
   * included.
   */
  env: string;

  /**
   * Query param: The starting time, as milliseconds since epoch (inclusive).
   */
  from: number;

  /**
   * Query param: The ending time, as milliseconds since epoch (exclusive). May not
   * be more than 100 days after `from`.
   */
  to: number;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export interface AIConfigRetrieveMetricsByVariationParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Query param: An environment key. Only metrics from this environment will be
   * included.
   */
  env: string;

  /**
   * Query param: The starting time, as milliseconds since epoch (inclusive).
   */
  from: number;

  /**
   * Query param: The ending time, as milliseconds since epoch (exclusive). May not
   * be more than 100 days after `from`.
   */
  to: number;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

AIConfigs.Variations = Variations;
AIConfigs.ModelConfigs = ModelConfigs;

export declare namespace AIConfigs {
  export {
    type AIConfig as AIConfig,
    type AIConfigsAccess as AIConfigsAccess,
    type AIConfigsLink as AIConfigsLink,
    type CoreLink as CoreLink,
    type Metrics as Metrics,
    type AIConfigRetrieveAIConfigsResponse as AIConfigRetrieveAIConfigsResponse,
    type AIConfigRetrieveMetricsByVariationResponse as AIConfigRetrieveMetricsByVariationResponse,
    type AIConfigRetrieveParams as AIConfigRetrieveParams,
    type AIConfigUpdateParams as AIConfigUpdateParams,
    type AIConfigDeleteParams as AIConfigDeleteParams,
    type AIConfigAIConfigsParams as AIConfigAIConfigsParams,
    type AIConfigRetrieveAIConfigsParams as AIConfigRetrieveAIConfigsParams,
    type AIConfigRetrieveMetricsParams as AIConfigRetrieveMetricsParams,
    type AIConfigRetrieveMetricsByVariationParams as AIConfigRetrieveMetricsByVariationParams,
  };

  export {
    Variations as Variations,
    type AIConfigVariation as AIConfigVariation,
    type Message as Message,
    type VariationRetrieveResponse as VariationRetrieveResponse,
    type VariationCreateParams as VariationCreateParams,
    type VariationRetrieveParams as VariationRetrieveParams,
    type VariationUpdateParams as VariationUpdateParams,
    type VariationDeleteParams as VariationDeleteParams,
  };

  export {
    ModelConfigs as ModelConfigs,
    type ModelConfig as ModelConfig,
    type ModelConfigRetrieveModelConfigsResponse as ModelConfigRetrieveModelConfigsResponse,
    type ModelConfigRetrieveParams as ModelConfigRetrieveParams,
    type ModelConfigDeleteParams as ModelConfigDeleteParams,
    type ModelConfigModelConfigsParams as ModelConfigModelConfigsParams,
    type ModelConfigRetrieveModelConfigsParams as ModelConfigRetrieveModelConfigsParams,
  };
}
