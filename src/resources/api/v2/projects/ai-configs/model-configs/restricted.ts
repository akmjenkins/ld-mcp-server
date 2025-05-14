// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import { APIPromise } from '../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Restricted extends APIResource {
  /**
   * Add AI models, by key, to the restricted list. Keys are included in the response
   * from the
   * [List AI model configs](https://launchdarkly.com/docs/api/ai-configs-beta/list-model-configs)
   * endpoint.
   *
   * @example
   * ```ts
   * const restricted =
   *   await client.api.v2.projects.aiConfigs.modelConfigs.restricted.create(
   *     'default',
   *     { keys: ['keys', 'keys'], 'LD-API-Version': 'beta' },
   *   );
   * ```
   */
  create(
    projectKey: string,
    params: RestrictedCreateParams,
    options?: RequestOptions,
  ): APIPromise<RestrictedCreateResponse> {
    const { 'LD-API-Version': ldAPIVersion, ...body } = params;
    return this._client.post(path`/api/v2/projects/${projectKey}/ai-configs/model-configs/restricted`, {
      body,
      ...options,
      headers: buildHeaders([{ 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }

  /**
   * Remove AI models, by key, from the restricted list.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.aiConfigs.modelConfigs.restricted.deleteAll(
   *   'default',
   *   { keys: ['keys', 'keys'], 'LD-API-Version': 'beta' },
   * );
   * ```
   */
  deleteAll(
    projectKey: string,
    params: RestrictedDeleteAllParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'LD-API-Version': ldAPIVersion, ...body } = params;
    return this._client.delete(path`/api/v2/projects/${projectKey}/ai-configs/model-configs/restricted`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*', 'LD-API-Version': ldAPIVersion.toString() }, options?.headers]),
    });
  }
}

export interface RestrictedModelsRequest {
  keys: Array<string>;
}

export interface RestrictedCreateResponse {
  errors: Array<RestrictedCreateResponse.Error>;

  successes: Array<string>;
}

export namespace RestrictedCreateResponse {
  export interface Error {
    code: number;

    key: string;

    message: string;
  }
}

export interface RestrictedCreateParams {
  /**
   * Body param:
   */
  keys: Array<string>;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export interface RestrictedDeleteAllParams {
  /**
   * Body param:
   */
  keys: Array<string>;

  /**
   * Header param: Version of the endpoint.
   */
  'LD-API-Version': 'beta';
}

export declare namespace Restricted {
  export {
    type RestrictedModelsRequest as RestrictedModelsRequest,
    type RestrictedCreateResponse as RestrictedCreateResponse,
    type RestrictedCreateParams as RestrictedCreateParams,
    type RestrictedDeleteAllParams as RestrictedDeleteAllParams,
  };
}
