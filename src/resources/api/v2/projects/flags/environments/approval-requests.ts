// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as ApprovalRequestsAPI from '../../../approval-requests';
import * as StatisticsAPI from '../../../code-refs/statistics';
import { APIPromise } from '../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class ApprovalRequests extends APIResource {
  /**
   * Get a single approval request for a feature flag.
   *
   * @example
   * ```ts
   * const flagConfigApprovalRequestResponse =
   *   await client.api.v2.projects.flags.environments.approvalRequests.retrieve(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ApprovalRequestRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestsAPI.FlagConfigApprovalRequestResponse> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/approval-requests/${id}`,
      options,
    );
  }

  /**
   * Perform a partial update to an approval request. Updating an approval request
   * uses the semantic patch format. This endpoint requires a feature flag key, and
   * can only be used for updating approval requests for flags.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instruction for updating an
   * approval request.
   *
   * #### addReviewers
   *
   * Adds the specified members and teams to the existing list of reviewers. You must
   * include at least one of `notifyMemberIds` and `notifyTeamKeys`.
   *
   * ##### Parameters
   *
   * - `notifyMemberIds`: (Optional) List of member IDs.
   * - `notifyTeamKeys`: (Optional) List of team keys.
   *
   * @example
   * ```ts
   * const flagConfigApprovalRequestResponse =
   *   await client.api.v2.projects.flags.environments.approvalRequests.update(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ApprovalRequestUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestsAPI.FlagConfigApprovalRequestResponse> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.patch(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/approval-requests/${id}`,
      options,
    );
  }

  /**
   * Delete an approval request for a feature flag.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.flags.environments.approvalRequests.delete(
   *   'id',
   *   {
   *     projectKey: 'projectKey',
   *     featureFlagKey: 'featureFlagKey',
   *     environmentKey: 'environmentKey',
   *   },
   * );
   * ```
   */
  delete(id: string, params: ApprovalRequestDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.delete(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/approval-requests/${id}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Apply an approval request that has been approved. This endpoint requires a
   * feature flag key, and can only be used for applying approval requests on flags.
   *
   * @example
   * ```ts
   * const flagConfigApprovalRequestResponse =
   *   await client.api.v2.projects.flags.environments.approvalRequests.apply(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  apply(
    id: string,
    params: ApprovalRequestApplyParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestsAPI.FlagConfigApprovalRequestResponse> {
    const { projectKey, featureFlagKey, environmentKey, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/approval-requests/${id}/apply`,
      { body, ...options },
    );
  }

  /**
   * Create an approval request for a feature flag.
   *
   * @example
   * ```ts
   * const flagConfigApprovalRequestResponse =
   *   await client.api.v2.projects.flags.environments.approvalRequests.approvalRequests(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       description: 'Requesting to update targeting',
   *       instructions: [{ foo: 'bar' }],
   *     },
   *   );
   * ```
   */
  approvalRequests(
    environmentKey: string,
    params: ApprovalRequestApprovalRequestsParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestsAPI.FlagConfigApprovalRequestResponse> {
    const { projectKey, featureFlagKey, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/approval-requests`,
      { body, ...options },
    );
  }

  /**
   * Get all approval requests for a feature flag.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.flags.environments.approvalRequests.retrieveApprovalRequests(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *     },
   *   );
   * ```
   */
  retrieveApprovalRequests(
    environmentKey: string,
    params: ApprovalRequestRetrieveApprovalRequestsParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestRetrieveApprovalRequestsResponse> {
    const { projectKey, featureFlagKey } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/approval-requests`,
      options,
    );
  }

  /**
   * Review an approval request by approving or denying changes.
   *
   * @example
   * ```ts
   * const flagConfigApprovalRequestResponse =
   *   await client.api.v2.projects.flags.environments.approvalRequests.reviews(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  reviews(
    id: string,
    params: ApprovalRequestReviewsParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestsAPI.FlagConfigApprovalRequestResponse> {
    const { projectKey, featureFlagKey, environmentKey, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/approval-requests/${id}/reviews`,
      { body, ...options },
    );
  }
}

export interface ApprovalRequestRetrieveApprovalRequestsResponse {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * An array of approval requests
   */
  items: Array<ApprovalRequestsAPI.FlagConfigApprovalRequestResponse>;
}

export interface ApprovalRequestRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface ApprovalRequestUpdateParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface ApprovalRequestDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface ApprovalRequestApplyParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Body param: Optional comment about the approval request
   */
  comment?: string;
}

export interface ApprovalRequestApprovalRequestsParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Body param: A brief description of the changes you're requesting
   */
  description: string;

  /**
   * Body param: List of instructions in semantic patch format to be applied to the
   * feature flag. Review the
   * [Update feature flag](https://launchdarkly.com/docs/ld-docs/api/feature-flags/patch-feature-flag)
   * documentation for details on available instructions.
   */
  instructions: Array<{ [key: string]: unknown }>;

  /**
   * Body param: Optional comment describing the approval request
   */
  comment?: string;

  /**
   * Body param: Timestamp for when instructions will be executed
   */
  executionDate?: number;

  /**
   * Body param: Additional approval request fields for third-party integration
   * approval systems. If you are using a third-party integration to manage approval
   * requests, these additional fields will be described in the
   * <code>manifest.json</code> for that integration, at
   * https://github.com/launchdarkly/integration-framework.
   */
  integrationConfig?: { [key: string]: unknown };

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

  /**
   * Body param: The ID of a scheduled change. Include this if your
   * <code>instructions</code> include editing or deleting a scheduled change.
   */
  operatingOnId?: string;
}

export interface ApprovalRequestRetrieveApprovalRequestsParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;
}

export interface ApprovalRequestReviewsParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Body param: Optional comment about the approval request
   */
  comment?: string;

  /**
   * Body param: The type of review for this approval request
   */
  kind?: 'approve' | 'comment' | 'decline';
}

export declare namespace ApprovalRequests {
  export {
    type ApprovalRequestRetrieveApprovalRequestsResponse as ApprovalRequestRetrieveApprovalRequestsResponse,
    type ApprovalRequestRetrieveParams as ApprovalRequestRetrieveParams,
    type ApprovalRequestUpdateParams as ApprovalRequestUpdateParams,
    type ApprovalRequestDeleteParams as ApprovalRequestDeleteParams,
    type ApprovalRequestApplyParams as ApprovalRequestApplyParams,
    type ApprovalRequestApprovalRequestsParams as ApprovalRequestApprovalRequestsParams,
    type ApprovalRequestRetrieveApprovalRequestsParams as ApprovalRequestRetrieveApprovalRequestsParams,
    type ApprovalRequestReviewsParams as ApprovalRequestReviewsParams,
  };
}
