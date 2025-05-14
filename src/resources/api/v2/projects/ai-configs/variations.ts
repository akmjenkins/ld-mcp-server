// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AIConfigsAPI from './ai-configs';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Variations extends APIResource {
  /**
   * Create a new variation for a given AI Config.
   *
   * The <code>model</code> in the request body requires a <code>modelName</code> and
   * <code>parameters</code>, for example:
   *
   * ```
   *   "model": {
   *     "modelName": "claude-3-opus-20240229",
   *     "parameters": {
   *       "max_tokens": 1024
   *     }
   *   }
   * ```
   *
   * @example
   * ```ts
   * const aiConfigVariation =
   *   await client.api.v2.projects.aiConfigs.variations.create(
   *     'configKey',
   *     {
   *       projectKey: 'projectKey',
   *       key: 'key',
   *       messages: [
   *         { content: 'content', role: 'role' },
   *         { content: 'content', role: 'role' },
   *       ],
   *       model: '{}',
   *       name: 'name',
   *       'LD-API-Version': 'beta',
   *     },
   *   );
   * ```
   */
  create(
    configKey: string,
    params: VariationCreateParams,
    options?: RequestOptions,
  ): APIPromise<AIConfigVariation> {
    const { projectKey, 'LD-API-Version': ldAPIVersion, ...body } = params;
    return this._client.post(path`/api/v2/projects/${projectKey}/ai-configs/${configKey}/variations`, {
      body,
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Get an AI Config variation by key. The response includes all variation versions
   * for the given variation key.
   *
   * @example
   * ```ts
   * const variation =
   *   await client.api.v2.projects.aiConfigs.variations.retrieve(
   *     'default',
   *     {
   *       projectKey: 'default',
   *       configKey: 'default',
   *       'LD-API-Version': 'beta',
   *     },
   *   );
   * ```
   */
  retrieve(
    variationKey: string,
    params: VariationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VariationRetrieveResponse> {
    const { projectKey, configKey, 'LD-API-Version': ldAPIVersion } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/ai-configs/${configKey}/variations/${variationKey}`,
      {
        ...options,
        headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
      },
    );
  }

  /**
   * Edit an existing variation of an AI Config. This creates a new version of the
   * variation.
   *
   * The request body must be a JSON object of the fields to update. The values you
   * include replace the existing values for the fields.
   *
   * Here's an example:
   *
   * ```
   *   {
   *     "messages": [
   *       {
   *         "role": "system",
   *         "content": "The new message"
   *       }
   *     ]
   *   }
   * ```
   *
   * @example
   * ```ts
   * const aiConfigVariation =
   *   await client.api.v2.projects.aiConfigs.variations.update(
   *     'variationKey',
   *     {
   *       projectKey: 'projectKey',
   *       configKey: 'configKey',
   *       'LD-API-Version': 'beta',
   *     },
   *   );
   * ```
   */
  update(
    variationKey: string,
    params: VariationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AIConfigVariation> {
    const { projectKey, configKey, 'LD-API-Version': ldAPIVersion, ...body } = params;
    return this._client.patch(
      path`/api/v2/projects/${projectKey}/ai-configs/${configKey}/variations/${variationKey}`,
      {
        body,
        ...options,
        headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
      },
    );
  }

  /**
   * Delete a specific variation of an AI Config by config key and variation key.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.aiConfigs.variations.delete(
   *   'variationKey',
   *   {
   *     projectKey: 'projectKey',
   *     configKey: 'configKey',
   *     'LD-API-Version': 'beta',
   *   },
   * );
   * ```
   */
  delete(variationKey: string, params: VariationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, configKey, 'LD-API-Version': ldAPIVersion } = params;
    return this._client.delete(
      path`/api/v2/projects/${projectKey}/ai-configs/${configKey}/variations/${variationKey}`,
      {
        ...options,
        headers: buildHeaders([
          { Accept: '*/*', 'LD-API-Version': ldAPIVersion.toString() },
          options?.headers,
        ]),
      },
    );
  }
}

export interface AIConfigVariation {
  createdAt: number;

  key: string;

  messages: Array<Message>;

  model: unknown;

  name: string;

  version: number;

  _archivedAt?: number;

  _links?: AIConfigVariation._Links;

  _publishedAt?: number;

  color?: string;

  comment?: string;

  modelConfigKey?: string;

  state?: string;
}

export namespace AIConfigVariation {
  export interface _Links {
    parent: AIConfigsAPI.CoreLink;
  }
}

export interface Message {
  content: string;

  role: string;
}

export interface VariationRetrieveResponse {
  items: Array<AIConfigVariation>;

  totalCount: number;
}

export interface VariationCreateParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Body param:
   */
  key: string;

  /**
   * Body param:
   */
  messages: Array<Message>;

  /**
   * Body param:
   */
  model: unknown;

  /**
   * Body param:
   */
  name: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';

  /**
   * Body param: Human-readable description of this variation
   */
  comment?: string;

  /**
   * Body param:
   */
  modelConfigKey?: string;
}

export interface VariationRetrieveParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Path param:
   */
  configKey: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export interface VariationUpdateParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Path param:
   */
  configKey: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';

  /**
   * Body param: Human-readable description of what this patch changes
   */
  comment?: string;

  /**
   * Body param:
   */
  messages?: Array<Message>;

  /**
   * Body param:
   */
  model?: unknown;

  /**
   * Body param:
   */
  modelConfigKey?: string;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  published?: boolean;

  /**
   * Body param: One of 'archived', 'published'
   */
  state?: string;
}

export interface VariationDeleteParams {
  /**
   * Path param:
   */
  projectKey: string;

  /**
   * Path param:
   */
  configKey: string;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export declare namespace Variations {
  export {
    type AIConfigVariation as AIConfigVariation,
    type Message as Message,
    type VariationRetrieveResponse as VariationRetrieveResponse,
    type VariationCreateParams as VariationCreateParams,
    type VariationRetrieveParams as VariationRetrieveParams,
    type VariationUpdateParams as VariationUpdateParams,
    type VariationDeleteParams as VariationDeleteParams,
  };
}
