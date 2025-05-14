// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class ContextAttributes extends APIResource {
  /**
   * Get context attribute values.
   *
   * @example
   * ```ts
   * const contextAttribute =
   *   await client.api.v2.projects.environments.contextAttributes.retrieve(
   *     'attributeName',
   *     {
   *       projectKey: 'projectKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    attributeName: string,
    params: ContextAttributeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ContextAttributeRetrieveResponse> {
    const { projectKey, environmentKey, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/context-attributes/${attributeName}`,
      { query, ...options },
    );
  }

  /**
   * Get context attribute names.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.environments.contextAttributes.retrieveContextAttributes(
   *     'environmentKey',
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrieveContextAttributes(
    environmentKey: string,
    params: ContextAttributeRetrieveContextAttributesParams,
    options?: RequestOptions,
  ): APIPromise<ContextAttributeRetrieveContextAttributesResponse> {
    const { projectKey, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/context-attributes`,
      { query, ...options },
    );
  }
}

export interface ContextAttributeRetrieveResponse {
  /**
   * A collection of context attribute value data grouped by kind.
   */
  items: Array<ContextAttributeRetrieveResponse.Item>;
}

export namespace ContextAttributeRetrieveResponse {
  export interface Item {
    /**
     * The kind associated with this collection of context attribute values.
     */
    kind: string;

    /**
     * A collection of context attribute values.
     */
    values: Array<Item.Value>;
  }

  export namespace Item {
    export interface Value {
      /**
       * A value for a context attribute.
       */
      name: unknown;

      /**
       * A relative estimate of the number of contexts seen recently that have a matching
       * value for a given attribute.
       */
      weight: number;
    }
  }
}

export interface ContextAttributeRetrieveContextAttributesResponse {
  /**
   * A collection of context attribute name data grouped by kind.
   */
  items: Array<ContextAttributeRetrieveContextAttributesResponse.Item>;
}

export namespace ContextAttributeRetrieveContextAttributesResponse {
  export interface Item {
    /**
     * The kind associated with this collection of context attribute names.
     */
    kind: string;

    /**
     * A collection of context attribute names.
     */
    names: Array<Item.Name>;
  }

  export namespace Item {
    export interface Name {
      /**
       * A context attribute's name.
       */
      name: string;

      /**
       * A relative estimate of the number of contexts seen recently that have an
       * attribute with the associated name.
       */
      weight: number;

      /**
       * Whether or not the attribute has one or more redacted values.
       */
      redacted?: boolean;
    }
  }
}

export interface ContextAttributeRetrieveParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Query param: A comma-separated list of context filters. This endpoint only
   * accepts `kind` filters, with the `equals` operator, and `value` filters, with
   * the `startsWith` operator. To learn more about the filter syntax, read
   * [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
   */
  filter?: string;

  /**
   * Query param: Specifies the maximum number of items in the collection to return
   * (max: 100, default: 50)
   */
  limit?: number;
}

export interface ContextAttributeRetrieveContextAttributesParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: A comma-separated list of context filters. This endpoint only
   * accepts `kind` filters, with the `equals` operator, and `name` filters, with the
   * `startsWith` operator. To learn more about the filter syntax, read
   * [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
   */
  filter?: string;

  /**
   * Query param: Specifies the maximum number of items in the collection to return
   * (max: 100, default: 100)
   */
  limit?: number;
}

export declare namespace ContextAttributes {
  export {
    type ContextAttributeRetrieveResponse as ContextAttributeRetrieveResponse,
    type ContextAttributeRetrieveContextAttributesResponse as ContextAttributeRetrieveContextAttributesResponse,
    type ContextAttributeRetrieveParams as ContextAttributeRetrieveParams,
    type ContextAttributeRetrieveContextAttributesParams as ContextAttributeRetrieveContextAttributesParams,
  };
}
