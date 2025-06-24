// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as StatisticsAPI from '../../code-refs/statistics';
import * as GroupsAPI from './groups';
import { GroupListParams, GroupListResponse, GroupRetrieveParams, GroupUpdateParams, Groups } from './groups';
import * as EnvironmentsAPI from '../../projects/environments/environments';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class Insights extends APIResource {
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);

  /**
   * Create insight group
   *
   * @example
   * ```ts
   * const insightGroup =
   *   await client.api.v2.engineeringInsights.insights.group({
   *     environmentKey: 'production',
   *     key: 'default-production-all-apps',
   *     name: 'Production - All Apps',
   *     projectKey: 'default',
   *   });
   * ```
   */
  group(body: InsightGroupParams, options?: RequestOptions): APIPromise<InsightGroup> {
    return this._client.post('/api/v2/engineering-insights/insights/group', { body, ...options });
  }

  /**
   * Return insights scores, based on the given parameters. This data is also used in
   * engineering insights metrics views.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.engineeringInsights.insights.retrieveScores(
   *     {
   *       environmentKey: 'environmentKey',
   *       projectKey: 'projectKey',
   *     },
   *   );
   * ```
   */
  retrieveScores(
    query: InsightRetrieveScoresParams,
    options?: RequestOptions,
  ): APIPromise<InsightRetrieveScoresResponse> {
    return this._client.get('/api/v2/engineering-insights/insights/scores', { query, ...options });
  }
}

export interface InsightGroup {
  /**
   * The time the insight group was created
   */
  createdAt: number;

  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The insight group key
   */
  key: string;

  /**
   * The insight group name
   */
  name: string;

  /**
   * The project key
   */
  projectKey: string;

  /**
   * The application keys
   */
  applicationKeys?: Array<string>;

  /**
   * Expanded details about the environment
   */
  environment?: EnvironmentsAPI.Environment;

  /**
   * Metadata about the insight scores, when expanded
   */
  scoreMetadata?: InsightGroupCollectionScoreMetadata;

  /**
   * The scores for the insight group
   */
  scores?: InsightGroupScores;
}

export interface InsightGroupCollectionScoreMetadata {
  /**
   * The time period for the score calculations in the last period
   */
  lastPeriod: InsightPeriod;

  /**
   * The time period for the score calculations
   */
  period: InsightPeriod;
}

export interface InsightGroupScores {
  /**
   * The deployment failure rate score for the insight group
   */
  deploymentFailureRate: InsightsMetricScore;

  /**
   * The deployment frequency score for the insight group
   */
  deploymentFrequency: InsightsMetricScore;

  /**
   * The efficiency score for the insight group
   */
  efficiency: InsightsMetricScore;

  /**
   * The Experimentation coverage score for the insight group
   */
  experimentationCoverage: InsightsMetricScore;

  /**
   * The flag health score for the insight group
   */
  flagHealth: InsightsMetricScore;

  /**
   * The impact size score for the insight group
   */
  impactSize: InsightsMetricScore;

  /**
   * The lead time score for the insight group
   */
  leadTime: InsightsMetricScore;

  /**
   * The overall score for the insight group
   */
  overall: InsightsMetricScore;

  /**
   * The risk score for the insight group
   */
  risk: InsightsMetricScore;

  /**
   * The velocity score for the insight group
   */
  velocity: InsightsMetricScore;

  /**
   * The creation ratio score for the insight group
   */
  creationRatio?: InsightsMetricScore;
}

export interface InsightPeriod {
  /**
   * The end time of the period
   */
  endTime: number;

  /**
   * The start time of the period
   */
  startTime: number;
}

export interface InsightsMetricScore {
  /**
   * The indicator for the score
   */
  indicator: 'excellent' | 'good' | 'fair' | 'needsAttention' | 'notCalculated' | 'unknown';

  /**
   * The indicator range for the score
   */
  indicatorRange: InsightsMetricScore.IndicatorRange;

  /**
   * The score for the metric
   */
  score: number;

  /**
   * The keys of the metrics that were aggregated to calculate this score
   */
  aggregateOf?: Array<string>;

  diffVsLastPeriod?: number;

  /**
   * The score for the metric in the last period
   */
  lastPeriod?: InsightsMetricScore;
}

export namespace InsightsMetricScore {
  /**
   * The indicator range for the score
   */
  export interface IndicatorRange {
    /**
     * The maximum value for the indicator range
     */
    max: number;

    /**
     * The minimum value for the indicator range
     */
    min: number;
  }
}

export interface InsightRetrieveScoresResponse {
  /**
   * The time period for the scores in the last period
   */
  lastPeriod: InsightPeriod;

  /**
   * The time period for the scores
   */
  period: InsightPeriod;

  /**
   * The scores for the insight groups
   */
  scores: InsightGroupScores;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export interface InsightGroupParams {
  /**
   * The environmentKey to be associated with the insight group
   */
  environmentKey: string;

  /**
   * The key of the insight group
   */
  key: string;

  /**
   * The name of the insight group
   */
  name: string;

  /**
   * The projectKey to be associated with the insight group
   */
  projectKey: string;

  /**
   * The application keys to associate with the insight group. If not provided, the
   * insight group will include data from all applications.
   */
  applicationKeys?: Array<string>;
}

export interface InsightRetrieveScoresParams {
  /**
   * The environment key
   */
  environmentKey: string;

  /**
   * The project key
   */
  projectKey: string;

  /**
   * Comma separated list of application keys
   */
  applicationKey?: string;
}

Insights.Groups = Groups;

export declare namespace Insights {
  export {
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
    Groups as Groups,
    type GroupListResponse as GroupListResponse,
    type GroupRetrieveParams as GroupRetrieveParams,
    type GroupUpdateParams as GroupUpdateParams,
    type GroupListParams as GroupListParams,
  };
}
