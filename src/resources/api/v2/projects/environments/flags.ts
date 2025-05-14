// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as StatisticsAPI from '../../code-refs/statistics';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Flags extends APIResource {
  /**
   * Evaluate flags for a context instance, for example, to determine the expected
   * flag variation. **Do not use this API instead of an SDK.** The LaunchDarkly SDKs
   * are specialized for the tasks of evaluating feature flags in your application at
   * scale and generating analytics events based on those evaluations. This API is
   * not designed for that use case. Any evaluations you perform with this API will
   * not be reflected in features such as flag statuses and flag insights. Context
   * instances evaluated by this API will not appear in the Contexts list. To learn
   * more, read
   * [Comparing LaunchDarkly's SDKs and REST API](https://launchdarkly.com/docs/guides/api/comparing-sdk-rest-api).
   *
   * ### Filtering
   *
   * LaunchDarkly supports the `filter` query param for filtering, with the following
   * fields:
   *
   * - `query` filters for a string that matches against the flags' keys and names.
   *   It is not case sensitive. For example: `filter=query equals dark-mode`.
   * - `tags` filters the list to flags that have all of the tags in the list. For
   *   example: `filter=tags contains ["beta","q1"]`.
   *
   * You can also apply multiple filters at once. For example, setting
   * `filter=query equals dark-mode, tags contains ["beta","q1"]` matches flags which
   * match the key or name `dark-mode` and are tagged `beta` and `q1`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.environments.flags.evaluate(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       body: {
   *         key: 'bar',
   *         kind: 'bar',
   *         otherAttribute: 'bar',
   *       },
   *     },
   *   );
   * ```
   */
  evaluate(
    environmentKey: string,
    params: FlagEvaluateParams,
    options?: RequestOptions,
  ): APIPromise<FlagEvaluateResponse> {
    const { projectKey, body, filter, limit, offset, sort } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/environments/${environmentKey}/flags/evaluate`,
      { query: { filter, limit, offset, sort }, body: body, ...options },
    );
  }
}

export interface FlagEvaluateResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * Details on the flag evaluations for this context instance
   */
  items: Array<FlagEvaluateResponse.Item>;

  /**
   * The number of flags
   */
  totalCount?: number;
}

export namespace FlagEvaluateResponse {
  export interface Item {
    /**
     * The location and content type of related resources
     */
    _links: Record<string, StatisticsAPI.Link>;

    /**
     * The value of the flag variation that the context receives. If there is no
     * defined default rule, this is null.
     */
    _value: unknown;

    /**
     * Key of the flag.
     */
    key: string;

    /**
     * Name of the flag.
     */
    name: string;

    /**
     * Contains information about why that variation was selected.
     */
    reason?: Item.Reason;
  }

  export namespace Item {
    /**
     * Contains information about why that variation was selected.
     */
    export interface Reason {
      /**
       * Describes the general reason that LaunchDarkly selected this variation.
       */
      kind: string;

      /**
       * The specific error type if the kind is 'ERROR'.
       */
      errorKind?: string;

      /**
       * Indicates whether the context was evaluated as part of an experiment.
       */
      inExperiment?: boolean;

      /**
       * The key of the flag that failed if the kind is 'PREREQUISITE_FAILED'.
       */
      prerequisiteKey?: string;

      /**
       * The unique identifier of the matching rule if the kind is 'RULE_MATCH'.
       */
      ruleID?: string;

      /**
       * The positional index of the matching rule if the kind is 'RULE_MATCH'. The index
       * is 0-based.
       */
      ruleIndex?: number;
    }
  }
}

export interface FlagEvaluateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Body param:
   */
  body: Record<string, unknown>;

  /**
   * Query param: A comma-separated list of filters. Each filter is of the form
   * `field operator value`. Supported fields are explained above.
   */
  filter?: string;

  /**
   * Query param: The number of feature flags to return. Defaults to -1, which
   * returns all flags
   */
  limit?: number;

  /**
   * Query param: Where to start in the list. Use this with pagination. For example,
   * an offset of 10 skips the first ten items and then returns the next items in the
   * list, up to the query `limit`.
   */
  offset?: number;

  /**
   * Query param: A comma-separated list of fields to sort by. Fields prefixed by a
   * dash ( - ) sort in descending order
   */
  sort?: string;
}

export declare namespace Flags {
  export { type FlagEvaluateResponse as FlagEvaluateResponse, type FlagEvaluateParams as FlagEvaluateParams };
}
