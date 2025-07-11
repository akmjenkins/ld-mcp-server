// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as ApprovalRequestsAPI from '../../../approval-requests';
import * as EnvironmentsApprovalRequestsAPI from './approval-requests';
import {
  ApprovalRequestApplyParams,
  ApprovalRequestApprovalRequestsParams,
  ApprovalRequestDeleteParams,
  ApprovalRequestRetrieveApprovalRequestsParams,
  ApprovalRequestRetrieveApprovalRequestsResponse,
  ApprovalRequestRetrieveParams,
  ApprovalRequestReviewsParams,
  ApprovalRequestUpdateParams,
  ApprovalRequests,
} from './approval-requests';
import * as FollowersAPI from './followers';
import {
  FollowFlagMember,
  FollowerDeleteParams,
  FollowerListParams,
  FollowerListResponse,
  FollowerUpdateParams,
  Followers,
} from './followers';
import * as ScheduledChangesAPI from './scheduled-changes';
import {
  FeatureFlagScheduledChange,
  ScheduledChangeDeleteParams,
  ScheduledChangeRetrieveParams,
  ScheduledChangeRetrieveScheduledChangesParams,
  ScheduledChangeRetrieveScheduledChangesResponse,
  ScheduledChangeScheduledChangesParams,
  ScheduledChangeUpdateParams,
  ScheduledChanges,
} from './scheduled-changes';
import * as WorkflowsAPI from './workflows';
import {
  CustomWorkflowOutput,
  ExecutionOutput,
  StageInput,
  StageOutput,
  WorkflowCreateParams,
  WorkflowDeleteParams,
  WorkflowListParams,
  WorkflowListResponse,
  WorkflowRetrieveParams,
  Workflows,
} from './workflows';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Environments extends APIResource {
  approvalRequests: EnvironmentsApprovalRequestsAPI.ApprovalRequests =
    new EnvironmentsApprovalRequestsAPI.ApprovalRequests(this._client);
  followers: FollowersAPI.Followers = new FollowersAPI.Followers(this._client);
  scheduledChanges: ScheduledChangesAPI.ScheduledChanges = new ScheduledChangesAPI.ScheduledChanges(
    this._client,
  );
  workflows: WorkflowsAPI.Workflows = new WorkflowsAPI.Workflows(this._client);

  /**
   * Create an approval request to copy a feature flag's configuration across
   * environments.
   *
   * @example
   * ```ts
   * const flagConfigApprovalRequestResponse =
   *   await client.api.v2.projects.flags.environments.approvalRequestsFlagCopy(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       description:
   *         'copy flag settings to another environment',
   *       source: { key: 'environment-key-123abc' },
   *     },
   *   );
   * ```
   */
  approvalRequestsFlagCopy(
    environmentKey: string,
    params: EnvironmentApprovalRequestsFlagCopyParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestsAPI.FlagConfigApprovalRequestResponse> {
    const { projectKey, featureFlagKey, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/approval-requests-flag-copy`,
      { body, ...options },
    );
  }

  /**
   * Returns the migration safety issues that are associated with the POSTed flag
   * patch. The patch must use the semantic patch format for updating feature flags.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.flags.environments.migrationSafetyIssues(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       flagKey: 'flagKey',
   *       instructions: [{ foo: 'bar' }],
   *     },
   *   );
   * ```
   */
  migrationSafetyIssues(
    environmentKey: string,
    params: EnvironmentMigrationSafetyIssuesParams,
    options?: RequestOptions,
  ): APIPromise<EnvironmentMigrationSafetyIssuesResponse> {
    const { projectKey, flagKey, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/flags/${flagKey}/environments/${environmentKey}/migration-safety-issues`,
      { body, ...options },
    );
  }
}

export type EnvironmentMigrationSafetyIssuesResponse =
  Array<EnvironmentMigrationSafetyIssuesResponse.EnvironmentMigrationSafetyIssuesResponseItem>;

export namespace EnvironmentMigrationSafetyIssuesResponse {
  export interface EnvironmentMigrationSafetyIssuesResponseItem {
    /**
     * A list of the IDs of the rules which are affected by this issue.
     * <code>fallthrough</code> is a sentinel value for the default rule.
     */
    affectedRuleIds?: Array<string>;

    /**
     * The ID of the rule which caused this issue
     */
    causingRuleId?: string;

    /**
     * A description of the issue that <code>causingRuleId</code> has caused for
     * <code>affectedRuleIds</code>.
     */
    issue?: string;

    /**
     * Whether the changes caused by <code>causingRuleId</code> bring inconsistency to
     * the old system
     */
    oldSystemAffected?: boolean;
  }
}

export interface EnvironmentApprovalRequestsFlagCopyParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Body param: A brief description of your changes
   */
  description: string;

  /**
   * Body param: The flag to copy
   */
  source: EnvironmentApprovalRequestsFlagCopyParams.Source;

  /**
   * Body param: Optional comment describing the approval request
   */
  comment?: string;

  /**
   * Body param: Optional list of the flag changes NOT to copy from the source
   * environment to the target environment. You may include either
   * <code>includedActions</code> or <code>excludedActions</code>, but not both. If
   * neither are included, then all flag changes will be copied.
   */
  excludedActions?: Array<
    | 'updateOn'
    | 'updateFallthrough'
    | 'updateOffVariation'
    | 'updateRules'
    | 'updateTargets'
    | 'updatePrerequisites'
  >;

  /**
   * Body param: Optional list of the flag changes to copy from the source
   * environment to the target environment. You may include either
   * <code>includedActions</code> or <code>excludedActions</code>, but not both. If
   * neither are included, then all flag changes will be copied.
   */
  includedActions?: Array<
    | 'updateOn'
    | 'updateFallthrough'
    | 'updateOffVariation'
    | 'updateRules'
    | 'updateTargets'
    | 'updatePrerequisites'
  >;

  /**
   * Body param: An array of member IDs. These members are notified to review the
   * approval request.
   */
  notifyMemberIds?: Array<string>;

  /**
   * Body param: An array of team keys. The members of these teams are notified to
   * review the approval request.
   */
  notifyTeamKeys?: Array<string>;
}

export namespace EnvironmentApprovalRequestsFlagCopyParams {
  /**
   * The flag to copy
   */
  export interface Source {
    /**
     * The environment key for the source environment
     */
    key: string;

    /**
     * The version of the source flag from which to copy
     */
    version?: number;
  }
}

export interface EnvironmentMigrationSafetyIssuesParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The migration flag key
   */
  flagKey: string;

  /**
   * Body param: Semantic patch instructions. The same ones that are valid for flags
   * are valid here.
   */
  instructions: Array<{ [key: string]: unknown }>;

  /**
   * Body param:
   */
  comment?: string;
}

Environments.ApprovalRequests = ApprovalRequests;
Environments.Followers = Followers;
Environments.ScheduledChanges = ScheduledChanges;
Environments.Workflows = Workflows;

export declare namespace Environments {
  export {
    type EnvironmentMigrationSafetyIssuesResponse as EnvironmentMigrationSafetyIssuesResponse,
    type EnvironmentApprovalRequestsFlagCopyParams as EnvironmentApprovalRequestsFlagCopyParams,
    type EnvironmentMigrationSafetyIssuesParams as EnvironmentMigrationSafetyIssuesParams,
  };

  export {
    ApprovalRequests as ApprovalRequests,
    type ApprovalRequestRetrieveApprovalRequestsResponse as ApprovalRequestRetrieveApprovalRequestsResponse,
    type ApprovalRequestRetrieveParams as ApprovalRequestRetrieveParams,
    type ApprovalRequestUpdateParams as ApprovalRequestUpdateParams,
    type ApprovalRequestDeleteParams as ApprovalRequestDeleteParams,
    type ApprovalRequestApplyParams as ApprovalRequestApplyParams,
    type ApprovalRequestApprovalRequestsParams as ApprovalRequestApprovalRequestsParams,
    type ApprovalRequestRetrieveApprovalRequestsParams as ApprovalRequestRetrieveApprovalRequestsParams,
    type ApprovalRequestReviewsParams as ApprovalRequestReviewsParams,
  };

  export {
    Followers as Followers,
    type FollowFlagMember as FollowFlagMember,
    type FollowerListResponse as FollowerListResponse,
    type FollowerUpdateParams as FollowerUpdateParams,
    type FollowerListParams as FollowerListParams,
    type FollowerDeleteParams as FollowerDeleteParams,
  };

  export {
    ScheduledChanges as ScheduledChanges,
    type FeatureFlagScheduledChange as FeatureFlagScheduledChange,
    type ScheduledChangeRetrieveScheduledChangesResponse as ScheduledChangeRetrieveScheduledChangesResponse,
    type ScheduledChangeRetrieveParams as ScheduledChangeRetrieveParams,
    type ScheduledChangeUpdateParams as ScheduledChangeUpdateParams,
    type ScheduledChangeDeleteParams as ScheduledChangeDeleteParams,
    type ScheduledChangeRetrieveScheduledChangesParams as ScheduledChangeRetrieveScheduledChangesParams,
    type ScheduledChangeScheduledChangesParams as ScheduledChangeScheduledChangesParams,
  };

  export {
    Workflows as Workflows,
    type CustomWorkflowOutput as CustomWorkflowOutput,
    type ExecutionOutput as ExecutionOutput,
    type StageInput as StageInput,
    type StageOutput as StageOutput,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowCreateParams as WorkflowCreateParams,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowDeleteParams as WorkflowDeleteParams,
  };
}
