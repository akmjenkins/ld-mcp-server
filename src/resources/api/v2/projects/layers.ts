// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Layers extends APIResource {
  /**
   * Create a layer. Experiments running in the same layer are granted
   * mutually-exclusive traffic.
   *
   * @example
   * ```ts
   * const layerRep = await client.api.v2.projects.layers.create(
   *   'projectKey',
   *   {
   *     description: 'description',
   *     key: 'checkout-flow',
   *     name: 'Checkout Flow',
   *   },
   * );
   * ```
   */
  create(projectKey: string, body: LayerCreateParams, options?: RequestOptions): APIPromise<LayerRep> {
    return this._client.post(path`/api/v2/projects/${projectKey}/layers`, { body, ...options });
  }

  /**
   * Update a layer by adding, changing, or removing traffic reservations for
   * experiments, or by changing layer name or description. Updating a layer uses the
   * semantic patch format.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * layers.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating layers</strong></summary>
   *
   * #### updateName
   *
   * Updates the layer name.
   *
   * ##### Parameters
   *
   * - `name`: The new layer name.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateName",
   *       "name": "New name"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateDescription
   *
   * Updates the layer description.
   *
   * ##### Parameters
   *
   * - `description`: The new description.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateDescription",
   *       "description": "New description"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateExperimentReservation
   *
   * Adds or updates a traffic reservation for an experiment in a layer.
   *
   * ##### Parameters
   *
   * - `experimentKey`: The key of the experiment whose reservation you are adding to
   *   or updating in the layer.
   * - `reservationPercent`: The amount of traffic in the layer to reserve. Must be
   *   an integer. Zero is allowed until iteration start.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "production",
   *   "instructions": [
   *     {
   *       "kind": "updateExperimentReservation",
   *       "experimentKey": "exp-key",
   *       "reservationPercent": 10
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeExperiment
   *
   * Removes a traffic reservation for an experiment from a layer.
   *
   * ##### Parameters
   *
   * - `experimentKey`: The key of the experiment whose reservation you want to
   *   remove from the layer.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "production",
   *   "instructions": [
   *     {
   *       "kind": "removeExperiment",
   *       "experimentKey": "exp-key"
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * @example
   * ```ts
   * const layerRep = await client.api.v2.projects.layers.update(
   *   'layerKey',
   *   {
   *     projectKey: 'projectKey',
   *     instructions: [
   *       {
   *         experimentKey: 'checkout-button-color',
   *         kind: 'updateExperimentReservation',
   *         reservationPercent: 25,
   *       },
   *     ],
   *     comment: 'Example comment describing the update',
   *     environmentKey: 'production',
   *   },
   * );
   * ```
   */
  update(layerKey: string, params: LayerUpdateParams, options?: RequestOptions): APIPromise<LayerRep> {
    const { projectKey, ...body } = params;
    return this._client.patch(path`/api/v2/projects/${projectKey}/layers/${layerKey}`, { body, ...options });
  }

  /**
   * Get a collection of all layers for a project
   *
   * @example
   * ```ts
   * const layers = await client.api.v2.projects.layers.list(
   *   'projectKey',
   * );
   * ```
   */
  list(
    projectKey: string,
    query: LayerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LayerListResponse> {
    return this._client.get(path`/api/v2/projects/${projectKey}/layers`, { query, ...options });
  }
}

export interface LayerRep {
  /**
   * The date and time when the layer was created
   */
  createdAt: number;

  /**
   * The description of the layer
   */
  description: string;

  /**
   * The key of the layer
   */
  key: string;

  /**
   * The name of the layer
   */
  name: string;

  /**
   * The layer configurations for each requested environment
   */
  environments?: Record<string, LayerRep.Environments>;

  /**
   * The unit of randomization for the layer
   */
  randomizationUnit?: string;
}

export namespace LayerRep {
  export interface Environments {
    /**
     * The experiment reservations for the layer
     */
    reservations: Array<Environments.Reservation>;
  }

  export namespace Environments {
    export interface Reservation {
      /**
       * The key of the experiment
       */
      experimentKey: string;

      /**
       * The key of the flag
       */
      flagKey: string;

      /**
       * The percentage of traffic reserved for the experiment
       */
      reservationPercent: number;
    }
  }
}

export interface LayerListResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The layers in the project
   */
  items: Array<LayerRep>;

  /**
   * The total number of layers in the project
   */
  totalCount: number;
}

export interface LayerCreateParams {
  /**
   * The checkout flow for the application
   */
  description: string;

  /**
   * Unique identifier for the layer
   */
  key: string;

  /**
   * Layer name
   */
  name: string;
}

export interface LayerUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param: The instructions to perform when updating. This should be an array
   * with objects that look like <code>{"kind": "update_action"}</code>. Some
   * instructions also require a <code>value</code> field in the array element.
   */
  instructions: Array<Record<string, unknown>>;

  /**
   * Body param: Optional comment describing the update
   */
  comment?: string;

  /**
   * Body param: The environment key used for making environment specific updates.
   * For example, updating the reservation of an experiment
   */
  environmentKey?: string;
}

export interface LayerListParams {
  /**
   * A comma-separated list of filters. This endpoint only accepts filtering by
   * `experimentKey`. The filter returns layers which include that experiment for the
   * selected environment(s). For example:
   * `filter=reservations.experimentKey contains expKey`.
   */
  filter?: string;
}

export declare namespace Layers {
  export {
    type LayerRep as LayerRep,
    type LayerListResponse as LayerListResponse,
    type LayerCreateParams as LayerCreateParams,
    type LayerUpdateParams as LayerUpdateParams,
    type LayerListParams as LayerListParams,
  };
}
