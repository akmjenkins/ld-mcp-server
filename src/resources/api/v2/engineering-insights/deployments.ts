// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import * as EngineeringInsightsAPI from './engineering-insights';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Deployments extends APIResource {
  /**
   * Get a deployment by ID.
   *
   * The deployment ID is returned as part of the
   * [List deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments)
   * response. It is the `id` field of each element in the `items` array.
   *
   * ### Expanding the deployment response
   *
   * LaunchDarkly supports expanding the deployment response to include additional
   * fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `pullRequests` includes details on all of the pull requests associated with
   *   each deployment
   * - `flagReferences` includes details on all of the references to flags in each
   *   deployment
   *
   * For example, use `?expand=pullRequests` to include the `pullRequests` field in
   * the response. By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const deploymentRep =
   *   await client.api.v2.engineeringInsights.deployments.retrieve(
   *     'deploymentID',
   *   );
   * ```
   */
  retrieve(
    deploymentID: string,
    query: DeploymentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeploymentRep> {
    return this._client.get(path`/api/v2/engineering-insights/deployments/${deploymentID}`, {
      query,
      ...options,
    });
  }

  /**
   * Update a deployment by ID. Updating a deployment uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>The deployment ID
   * is returned as part of the
   * [List deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments)
   * response. It is the `id` field of each element in the `items` array.
   *
   * @example
   * ```ts
   * const deploymentRep =
   *   await client.api.v2.engineeringInsights.deployments.update(
   *     'deploymentID',
   *     { body: [{ op: 'replace', path: '/status' }] },
   *   );
   * ```
   */
  update(
    deploymentID: string,
    params: DeploymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentRep> {
    const { body } = params;
    return this._client.patch(path`/api/v2/engineering-insights/deployments/${deploymentID}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Get a list of deployments
   *
   * ### Expanding the deployment collection response
   *
   * LaunchDarkly supports expanding the deployment collection response to include
   * additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `pullRequests` includes details on all of the pull requests associated with
   *   each deployment
   * - `flagReferences` includes details on all of the references to flags in each
   *   deployment
   *
   * For example, use `?expand=pullRequests` to include the `pullRequests` field in
   * the response. By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const deploymentCollectionRep =
   *   await client.api.v2.engineeringInsights.deployments.list({
   *     environmentKey: 'environmentKey',
   *     projectKey: 'projectKey',
   *   });
   * ```
   */
  list(query: DeploymentListParams, options?: RequestOptions): APIPromise<DeploymentCollectionRep> {
    return this._client.get('/api/v2/engineering-insights/deployments', { query, ...options });
  }
}

export interface DeploymentCollectionRep {
  /**
   * A list of deployments
   */
  items: Array<DeploymentRep>;

  /**
   * The total number of deployments
   */
  totalCount: number;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export interface DeploymentRep {
  /**
   * The deployment ID
   */
  id: string;

  /**
   * Whether the deployment is active
   */
  active: boolean;

  /**
   * The application key
   */
  applicationKey: string;

  /**
   * The application version
   */
  applicationVersion: string;

  /**
   * Whether the deployment is archived
   */
  archived: boolean;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The kind of deployment
   */
  kind: string;

  /**
   * The total lead time from first commit to deployment end in milliseconds
   */
  leadTime: number;

  /**
   * The number of lines added
   */
  linesAdded: number;

  /**
   * The number of lines deleted
   */
  linesDeleted: number;

  /**
   * The number of contributors
   */
  numberOfContributors: number;

  /**
   * The number of pull requests
   */
  numberOfPullRequests: number;

  /**
   * The time the deployment started
   */
  startedAt: number;

  /**
   * The status of the deployment
   */
  status: string;

  /**
   * The duration of the deployment in milliseconds
   */
  durationMs?: number;

  /**
   * The time the deployment ended
   */
  endedAt?: number;

  /**
   * The flag references contained in the deployment
   */
  flagReferences?: DeploymentRep.FlagReferences;

  /**
   * The lead time stages for the deployment
   */
  leadTimeStages?: DeploymentRep.LeadTimeStages;

  /**
   * The metadata associated with the deployment
   */
  metadata?: { [key: string]: unknown };

  /**
   * The pull requests contained in the deployment
   */
  pullRequests?: EngineeringInsightsAPI.PullRequestCollectionRep;
}

export namespace DeploymentRep {
  /**
   * The flag references contained in the deployment
   */
  export interface FlagReferences {
    /**
     * A list of flag references
     */
    items: Array<FlagReferences.Item>;

    /**
     * The total number of flag references
     */
    totalCount: number;
  }

  export namespace FlagReferences {
    export interface Item {
      /**
       * The flag key
       */
      flagKey: string;

      /**
       * The project key
       */
      projectKey: string;

      /**
       * The number of references added
       */
      referencesAdded: number;

      /**
       * The number of references removed
       */
      referencesRemoved: number;
    }
  }

  /**
   * The lead time stages for the deployment
   */
  export interface LeadTimeStages {
    /**
     * The coding duration in milliseconds
     */
    codingDurationMs: number;

    /**
     * The deploy duration in milliseconds
     */
    deployDurationMs?: number;

    /**
     * The review duration in milliseconds
     */
    reviewDurationMs?: number;

    /**
     * The total lead time in milliseconds
     */
    totalLeadTimeMs?: number;

    /**
     * The wait duration between merge time and deploy start time in milliseconds
     */
    waitDurationMs?: number;
  }
}

export interface DeploymentRetrieveParams {
  /**
   * Expand properties in response. Options: `pullRequests`, `flagReferences`
   */
  expand?: string;
}

export interface DeploymentUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface DeploymentListParams {
  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The project key
   */
  projectKey: string;

  /**
   * Identifier used for pagination
   */
  after?: string;

  /**
   * Comma separated list of application keys
   */
  applicationKey?: string;

  /**
   * Identifier used for pagination
   */
  before?: string;

  /**
   * Expand properties in response. Options: `pullRequests`, `flagReferences`
   */
  expand?: string;

  /**
   * Unix timestamp in milliseconds. Default value is 7 days ago.
   */
  from?: number;

  /**
   * The deployment kind
   */
  kind?: string;

  /**
   * The number of deployments to return. Default is 20. Maximum allowed is 100.
   */
  limit?: number;

  /**
   * The deployment status
   */
  status?: string;

  /**
   * Unix timestamp in milliseconds. Default value is now.
   */
  to?: number;
}

export declare namespace Deployments {
  export {
    type DeploymentCollectionRep as DeploymentCollectionRep,
    type DeploymentRep as DeploymentRep,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentUpdateParams as DeploymentUpdateParams,
    type DeploymentListParams as DeploymentListParams,
  };
}
