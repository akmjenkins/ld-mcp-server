// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatisticsAPI from '../code-refs/statistics';
import * as DeploymentsAPI from './deployments';
import {
  DeploymentCollectionRep,
  DeploymentListParams,
  DeploymentRep,
  DeploymentRetrieveParams,
  DeploymentUpdateParams,
  Deployments,
} from './deployments';
import * as ChartsAPI from './charts/charts';
import { ChartRetrieveLeadTimeParams, Charts } from './charts/charts';
import * as InsightsAPI from './insights/insights';
import {
  InsightGroup,
  InsightGroupCollectionScoreMetadata,
  InsightGroupParams,
  InsightGroupScores,
  InsightPeriod,
  InsightRetrieveScoresParams,
  InsightRetrieveScoresResponse,
  Insights,
  InsightsMetricScore,
} from './insights/insights';
import * as RepositoriesAPI from './repositories/repositories';
import { Repositories, RepositoryListParams, RepositoryListResponse } from './repositories/repositories';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class EngineeringInsights extends APIResource {
  charts: ChartsAPI.Charts = new ChartsAPI.Charts(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
  repositories: RepositoriesAPI.Repositories = new RepositoriesAPI.Repositories(this._client);

  /**
   * Create deployment event
   *
   * @example
   * ```ts
   * await client.api.v2.engineeringInsights.deploymentEvents({
   *   applicationKey: 'billing-service',
   *   environmentKey: 'production',
   *   eventType: 'started',
   *   projectKey: 'default',
   *   version: 'a90a8a2',
   * });
   * ```
   */
  deploymentEvents(
    body: EngineeringInsightDeploymentEventsParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/api/v2/engineering-insights/deployment-events', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a list of flag events
   *
   * ### Expanding the flag event collection response
   *
   * LaunchDarkly supports expanding the flag event collection response to include
   * additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `experiments` includes details on all of the experiments run on each flag
   *
   * For example, use `?expand=experiments` to include the `experiments` field in the
   * response. By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.engineeringInsights.retrieveFlagEvents(
   *     {
   *       environmentKey: 'environmentKey',
   *       projectKey: 'projectKey',
   *     },
   *   );
   * ```
   */
  retrieveFlagEvents(
    query: EngineeringInsightRetrieveFlagEventsParams,
    options?: RequestOptions,
  ): APIPromise<EngineeringInsightRetrieveFlagEventsResponse> {
    return this._client.get('/api/v2/engineering-insights/flag-events', { query, ...options });
  }

  /**
   * Get a list of pull requests
   *
   * ### Expanding the pull request collection response
   *
   * LaunchDarkly supports expanding the pull request collection response to include
   * additional fields.
   *
   * To expand the response, append the `expand` query parameter and include the
   * following:
   *
   * - `deployments` includes details on all of the deployments associated with each
   *   pull request
   * - `flagReferences` includes details on all of the references to flags in each
   *   pull request
   * - `leadTime` includes details about the lead time of the pull request for each
   *   stage
   *
   * For example, use `?expand=deployments` to include the `deployments` field in the
   * response. By default, this field is **not** included in the response.
   *
   * @example
   * ```ts
   * const pullRequestCollectionRep =
   *   await client.api.v2.engineeringInsights.retrievePullRequests(
   *     { projectKey: 'projectKey' },
   *   );
   * ```
   */
  retrievePullRequests(
    query: EngineeringInsightRetrievePullRequestsParams,
    options?: RequestOptions,
  ): APIPromise<PullRequestCollectionRep> {
    return this._client.get('/api/v2/engineering-insights/pull-requests', { query, ...options });
  }
}

export interface PullRequestCollectionRep {
  /**
   * A list of pull requests
   */
  items: Array<PullRequestRep>;

  /**
   * The total number of pull requests
   */
  totalCount: number;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export interface PullRequestRep {
  /**
   * The pull request internal ID
   */
  id: string;

  /**
   * The pull request author
   */
  author: string;

  /**
   * The pull request base commit key
   */
  baseCommitKey: string;

  /**
   * The pull request create time
   */
  createTime: number;

  /**
   * The pull request number
   */
  externalId: string;

  /**
   * The number of files changed
   */
  filesChanged: number;

  /**
   * The pull request head commit key
   */
  headCommitKey: string;

  /**
   * The number of lines added
   */
  linesAdded: number;

  /**
   * The number of lines deleted
   */
  linesDeleted: number;

  /**
   * The pull request status
   */
  status: string;

  /**
   * The pull request title
   */
  title: string;

  /**
   * The pull request URL
   */
  url: string;

  /**
   * A list of deployments associated with the pull request
   */
  deployments?: DeploymentsAPI.DeploymentCollectionRep;

  /**
   * A list of flag references associated with the pull request
   */
  flagReferences?: PullRequestRep.FlagReferences;

  /**
   * The lead time for the pull request in a given environment
   */
  leadTime?: PullRequestRep.LeadTime;

  /**
   * The pull request merge commit key
   */
  mergeCommitKey?: string;

  /**
   * The pull request merge time
   */
  mergeTime?: number;
}

export namespace PullRequestRep {
  /**
   * A list of flag references associated with the pull request
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
   * The lead time for the pull request in a given environment
   */
  export interface LeadTime {
    /**
     * The coding duration in milliseconds
     */
    codingDurationMs: number;

    /**
     * The average deploy duration in milliseconds
     */
    avgDeployDurationMs?: number;

    /**
     * The average total lead time in milliseconds
     */
    avgTotalLeadTimeMs?: number;

    /**
     * The average wait duration between merge time and deploy start time in
     * milliseconds
     */
    avgWaitDurationMs?: number;

    /**
     * The max deploy duration in milliseconds
     */
    maxDeployDurationMs?: number;

    /**
     * The max total lead time in milliseconds
     */
    maxTotalLeadTimeMs?: number;

    /**
     * The max wait duration between merge time and deploy start time in milliseconds
     */
    maxWaitDurationMs?: number;

    /**
     * The review duration in milliseconds
     */
    reviewDurationMs?: number;
  }
}

export interface EngineeringInsightRetrieveFlagEventsResponse {
  /**
   * A list of flag events
   */
  items: Array<EngineeringInsightRetrieveFlagEventsResponse.Item>;

  /**
   * The total number of flag events
   */
  totalCount: number;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export namespace EngineeringInsightRetrieveFlagEventsResponse {
  export interface Item {
    /**
     * The flag event ID
     */
    id: string;

    /**
     * The event description
     */
    description: string;

    /**
     * A Unix timestamp in milliseconds
     */
    eventTime: number;

    /**
     * The event type
     */
    eventType: string;

    /**
     * The flag key
     */
    flagKey: string;

    /**
     * The flag event evaluation impact
     */
    impact: Item.Impact;

    /**
     * The project ID
     */
    projectId: string;

    /**
     * The project key
     */
    projectKey: string;

    /**
     * The resource actions
     */
    actions?: Array<string>;

    /**
     * The audit log entry ID
     */
    auditLogEntryId?: string;

    /**
     * The environment ID
     */
    environmentId?: string;

    /**
     * The environment key
     */
    environmentKey?: string;

    /**
     * A list of experiment iterations related to the flag event
     */
    experiments?: Item.Experiments;

    /**
     * The member data
     */
    member?: Item.Member;
  }

  export namespace Item {
    /**
     * The flag event evaluation impact
     */
    export interface Impact {
      /**
       * A summary of the change in variation evaluations after the flag event
       */
      evaluationsSummary?: Impact.EvaluationsSummary;

      /**
       * The percentage of the flag event impact
       */
      percentage?: number;

      /**
       * The reason for the flag event impact
       */
      reason?: 'evaluations' | 'global' | 'waiting';

      /**
       * The size of the flag event impact. Sizes are defined as: none (0%), small
       * (0-20%), medium (20-80%), large (>80%)
       */
      size?: 'none' | 'small' | 'medium' | 'large';
    }

    export namespace Impact {
      /**
       * A summary of the change in variation evaluations after the flag event
       */
      export interface EvaluationsSummary {
        /**
         * A list of variation evaluations
         */
        variations?: Array<EvaluationsSummary.Variation>;
      }

      export namespace EvaluationsSummary {
        export interface Variation {
          /**
           * The number of evaluations in the ten minutes after the flag event
           */
          after?: number;

          /**
           * The number of evaluations in the ten minutes before the flag event
           */
          before?: number;

          /**
           * The variation value
           */
          value?: unknown;
        }
      }
    }

    /**
     * A list of experiment iterations related to the flag event
     */
    export interface Experiments {
      /**
       * A list of experiments
       */
      items: Array<Experiments.Item>;

      /**
       * The total number of experiments
       */
      totalCount: number;
    }

    export namespace Experiments {
      export interface Item {
        /**
         * The experiment iteration
         */
        iteration: Item.Iteration;

        /**
         * The experiment key
         */
        key: string;

        /**
         * The experiment name
         */
        name: string;

        /**
         * The location and content type of related resources
         */
        _links?: { [key: string]: StatisticsAPI.Link };
      }

      export namespace Item {
        /**
         * The experiment iteration
         */
        export interface Iteration {
          /**
           * The experiment iteration ID
           */
          id: string;

          /**
           * Timestamp of when the iteration started
           */
          startedAt: number;

          /**
           * The experiment iteration status
           */
          status: 'running' | 'stopped';

          /**
           * The location and content type of related resources
           */
          _links?: { [key: string]: StatisticsAPI.Link };

          /**
           * Timestamp of when the iteration ended
           */
          endedAt?: number;
        }
      }
    }

    /**
     * The member data
     */
    export interface Member {
      /**
       * The member ID
       */
      id: string;

      /**
       * The member email
       */
      email: string;

      /**
       * The member first name
       */
      firstName: string;

      /**
       * The member last name
       */
      lastName: string;
    }
  }
}

export interface EngineeringInsightDeploymentEventsParams {
  /**
   * The application key. This defines the granularity at which you want to view your
   * insights metrics. Typically it is the name of one of the GitHub repositories
   * that you use in this project.<br/><br/>LaunchDarkly automatically creates a new
   * application each time you send a unique application key.
   */
  applicationKey: string;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The event type
   */
  eventType: 'started' | 'failed' | 'finished' | 'custom';

  /**
   * The project key
   */
  projectKey: string;

  /**
   * The application version. You can set the application version to any string that
   * includes only letters, numbers, periods (<code>.</code>), hyphens
   * (<code>-</code>), or underscores (<code>\_</code>).<br/><br/>We recommend
   * setting the application version to at least the first seven characters of the
   * SHA or to the tag of the GitHub commit for this deployment.
   */
  version: string;

  /**
   * The kind of application. Default: <code>server</code>
   */
  applicationKind?: 'server' | 'browser' | 'mobile';

  /**
   * The application name. This defines how the application is displayed
   */
  applicationName?: string;

  /**
   * A JSON object containing metadata about the deployment
   */
  deploymentMetadata?: { [key: string]: unknown };

  /**
   * A JSON object containing metadata about the event
   */
  eventMetadata?: { [key: string]: unknown };

  /**
   * The time, in Unix milliseconds, when the event occurred. If not included, the
   * time will default to when the event is processed and stored in LaunchDarkly.
   */
  eventTime?: number;

  /**
   * The version name. This defines how the version is displayed
   */
  versionName?: string;
}

export interface EngineeringInsightRetrieveFlagEventsParams {
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
   * Expand properties in response. Options: `experiments`
   */
  expand?: string;

  /**
   * Unix timestamp in milliseconds. Default value is 7 days ago.
   */
  from?: number;

  /**
   * Filter to include or exclude global events. Default value is `include`. Options:
   * `include`, `exclude`
   */
  global?: string;

  /**
   * Filter events to those associated with an experiment (`true`) or without an
   * experiment (`false`)
   */
  hasExperiments?: boolean;

  /**
   * Filter events by impact size. A small impact created a less than 20% change in
   * the proportion of end users receiving one or more flag variations. A medium
   * impact created between a 20%-80% change. A large impact created a more than 80%
   * change. Options: `none`, `small`, `medium`, `large`
   */
  impactSize?: string;

  /**
   * The number of deployments to return. Default is 20. Maximum allowed is 100.
   */
  limit?: number;

  /**
   * Filter events by flag key
   */
  query?: string;

  /**
   * Unix timestamp in milliseconds. Default value is now.
   */
  to?: number;
}

export interface EngineeringInsightRetrievePullRequestsParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * Identifier used for pagination
   */
  after?: string;

  /**
   * Filter the results to pull requests deployed to a comma separated list of
   * applications
   */
  applicationKey?: string;

  /**
   * Identifier used for pagination
   */
  before?: string;

  /**
   * Required if you are using the <code>sort</code> parameter's
   * <code>leadTime</code> option to sort pull requests.
   */
  environmentKey?: string;

  /**
   * Expand properties in response. Options: `deployments`, `flagReferences`,
   * `leadTime`.
   */
  expand?: string;

  /**
   * Unix timestamp in milliseconds. Default value is 7 days ago.
   */
  from?: string;

  /**
   * The number of pull requests to return. Default is 20. Maximum allowed is 100.
   */
  limit?: number;

  /**
   * Filter list of pull requests by title or author
   */
  query?: string;

  /**
   * Sort results. Requires the `environmentKey` to be set. Options: `leadTime` (asc)
   * and `-leadTime` (desc). When query option is excluded, default sort is by
   * created or merged date.
   */
  sort?: string;

  /**
   * Filter results to pull requests with the given status. Options: `open`,
   * `merged`, `closed`, `deployed`.
   */
  status?: string;

  /**
   * Unix timestamp in milliseconds. Default value is now.
   */
  to?: string;
}

EngineeringInsights.Charts = Charts;
EngineeringInsights.Deployments = Deployments;
EngineeringInsights.Insights = Insights;
EngineeringInsights.Repositories = Repositories;

export declare namespace EngineeringInsights {
  export {
    type PullRequestCollectionRep as PullRequestCollectionRep,
    type PullRequestRep as PullRequestRep,
    type EngineeringInsightRetrieveFlagEventsResponse as EngineeringInsightRetrieveFlagEventsResponse,
    type EngineeringInsightDeploymentEventsParams as EngineeringInsightDeploymentEventsParams,
    type EngineeringInsightRetrieveFlagEventsParams as EngineeringInsightRetrieveFlagEventsParams,
    type EngineeringInsightRetrievePullRequestsParams as EngineeringInsightRetrievePullRequestsParams,
  };

  export { Charts as Charts, type ChartRetrieveLeadTimeParams as ChartRetrieveLeadTimeParams };

  export {
    Deployments as Deployments,
    type DeploymentCollectionRep as DeploymentCollectionRep,
    type DeploymentRep as DeploymentRep,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentUpdateParams as DeploymentUpdateParams,
    type DeploymentListParams as DeploymentListParams,
  };

  export {
    Insights as Insights,
    type InsightGroup as InsightGroup,
    type InsightGroupCollectionScoreMetadata as InsightGroupCollectionScoreMetadata,
    type InsightGroupScores as InsightGroupScores,
    type InsightPeriod as InsightPeriod,
    type InsightsMetricScore as InsightsMetricScore,
    type InsightRetrieveScoresResponse as InsightRetrieveScoresResponse,
    type InsightGroupParams as InsightGroupParams,
    type InsightRetrieveScoresParams as InsightRetrieveScoresParams,
  };

  export {
    Repositories as Repositories,
    type RepositoryListResponse as RepositoryListResponse,
    type RepositoryListParams as RepositoryListParams,
  };
}
