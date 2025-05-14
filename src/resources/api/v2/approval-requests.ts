// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ApprovalRequestsAPI from './approval-requests';
import * as RelayAutoConfigsAPI from './account/relay-auto-configs';
import * as StatisticsAPI from './code-refs/statistics';
import * as FlagsAPI from './flags/flags';
import * as ProjectsAPI from './projects/projects';
import * as SegmentsAPI from './segments/segments';
import * as EnvironmentsAPI from './projects/environments/environments';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ApprovalRequests extends APIResource {
  /**
   * Get an approval request by approval request ID.
   *
   * ### Expanding approval response
   *
   * LaunchDarkly supports the `expand` query param to include additional fields in
   * the response, with the following fields:
   *
   * - `environments` includes the environments the approval request relates to
   * - `flag` includes the flag the approval request belongs to
   * - `project` includes the project the approval request belongs to
   * - `resource` includes details on the resource (flag or segment) the approval
   *   request relates to
   *
   * For example, `expand=project,flag` includes the `project` and `flag` fields in
   * the response.
   *
   * @example
   * ```ts
   * const expandableApprovalRequestResponse =
   *   await client.api.v2.approvalRequests.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ApprovalRequestRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExpandableApprovalRequestResponse> {
    return this._client.get(path`/api/v2/approval-requests/${id}`, { query, ...options });
  }

  /**
   * Perform a partial update to an approval request. Updating an approval request
   * uses the semantic patch format. This endpoint works with approval requests for
   * either flag or segment changes.
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
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addReviewers",
   *       "notifyMemberIds": ["user-key-123abc", "user-key-456def"],
   *       "notifyTeamKeys": ["team-key-789abc"]
   *     }
   *   ]
   * }
   * ```
   *
   * @example
   * ```ts
   * const flagConfigApprovalRequestResponse =
   *   await client.api.v2.approvalRequests.update('id');
   * ```
   */
  update(id: string, options?: RequestOptions): APIPromise<FlagConfigApprovalRequestResponse> {
    return this._client.patch(path`/api/v2/approval-requests/${id}`, options);
  }

  /**
   * Delete an approval request.
   *
   * @example
   * ```ts
   * await client.api.v2.approvalRequests.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/approval-requests/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Apply an approval request that has been approved. This endpoint works with
   * approval requests for either flag or segment changes.
   *
   * @example
   * ```ts
   * const approvalRequestResponse =
   *   await client.api.v2.approvalRequests.apply('id');
   * ```
   */
  apply(
    id: string,
    body: ApprovalRequestApplyParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestResponse> {
    return this._client.post(path`/api/v2/approval-requests/${id}/apply`, { body, ...options });
  }

  /**
   * Create an approval request.
   *
   * This endpoint requires a list of `instructions`, in semantic patch format, that
   * will be applied when the approval request is approved and applied.
   *
   * If you are creating an approval request for a flag, you can use the following
   * `instructions`:
   *
   * - `addVariation`
   * - `removeVariation`
   * - `updateVariation`
   * - `updateDefaultVariation`
   *
   * For details on using these instructions, read
   * [Update feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag).
   *
   * To create an approval for a flag specific to an environment, use
   * [Create approval request for a flag](https://launchdarkly.com/docs/api/approvals/post-approval-request-for-flag).
   *
   * If you are creating an approval request for a segment, you can use the following
   * read [Patch segment](https://launchdarkly.com/docs/api/segments/patch-segment)
   * for details on the available `instructions`.
   *
   * @example
   * ```ts
   * const approvalRequestResponse =
   *   await client.api.v2.approvalRequests.approvalRequests({
   *     description: 'Requesting to update targeting',
   *     instructions: [{ foo: 'bar' }],
   *     resourceId: 'proj/projKey:env/envKey:flag/flagKey',
   *   });
   * ```
   */
  approvalRequests(
    body: ApprovalRequestApprovalRequestsParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestResponse> {
    return this._client.post('/api/v2/approval-requests', { body, ...options });
  }

  /**
   * Get all approval requests.
   *
   * ### Filtering approvals
   *
   * LaunchDarkly supports the `filter` query param for filtering, with the following
   * fields:
   *
   * - `notifyMemberIds` filters for only approvals that are assigned to a member in
   *   the specified list. For example:
   *   `filter=notifyMemberIds anyOf ["memberId1", "memberId2"]`.
   * - `requestorId` filters for only approvals that correspond to the ID of the
   *   member who requested the approval. For example:
   *   `filter=requestorId equals 457034721476302714390214`.
   * - `resourceId` filters for only approvals that correspond to the the specified
   *   resource identifier. For example:
   *   `filter=resourceId equals proj/my-project:env/my-environment:flag/my-flag`.
   * - `resourceKind` filters for only approvals that correspond to the specified
   *   resource kind. For example: `filter=resourceKind equals flag`. Currently,
   *   `flag` and `segment` resource kinds are supported.
   * - `reviewStatus` filters for only approvals which correspond to the review
   *   status in the specified list. The possible values are `approved`, `declined`,
   *   and `pending`. For example:
   *   `filter=reviewStatus anyOf ["pending", "approved"]`.
   * - `status` filters for only approvals which correspond to the status in the
   *   specified list. The possible values are `pending`, `scheduled`, `failed`, and
   *   `completed`. For example: `filter=status anyOf ["pending", "scheduled"]`.
   *
   * You can also apply multiple filters at once. For example, setting
   * `filter=projectKey equals my-project, reviewStatus anyOf ["pending","approved"]`
   * matches approval requests which correspond to the `my-project` project key, and
   * a review status of either `pending` or `approved`.
   *
   * ### Expanding approval response
   *
   * LaunchDarkly supports the `expand` query param to include additional fields in
   * the response, with the following fields:
   *
   * - `flag` includes the flag the approval request belongs to
   * - `project` includes the project the approval request belongs to
   * - `environments` includes the environments the approval request relates to
   *
   * For example, `expand=project,flag` includes the `project` and `flag` fields in
   * the response.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.approvalRequests.retrieveApprovalRequests();
   * ```
   */
  retrieveApprovalRequests(
    query: ApprovalRequestRetrieveApprovalRequestsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestRetrieveApprovalRequestsResponse> {
    return this._client.get('/api/v2/approval-requests', { query, ...options });
  }

  /**
   * Review an approval request by approving or denying changes.
   *
   * @example
   * ```ts
   * const approvalRequestResponse =
   *   await client.api.v2.approvalRequests.reviews('id');
   * ```
   */
  reviews(
    id: string,
    body: ApprovalRequestReviewsParams,
    options?: RequestOptions,
  ): APIPromise<ApprovalRequestResponse> {
    return this._client.post(path`/api/v2/approval-requests/${id}/reviews`, { body, ...options });
  }
}

export interface ApprovalRequestResponse {
  /**
   * The ID of this approval request
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, unknown>;

  /**
   * Version of the approval request
   */
  _version: number;

  /**
   * An array of individual reviews of this approval request
   */
  allReviews: Array<ReviewResponse>;

  /**
   * Details on any conflicting approval requests
   */
  conflicts: Array<Conflict>;

  /**
   * Timestamp of when the approval request was created
   */
  creationDate: number;

  /**
   * List of instructions in semantic patch format to be applied to the feature flag
   */
  instructions: Array<Record<string, unknown>>;

  /**
   * An array of member IDs. These members are notified to review the approval
   * request.
   */
  notifyMemberIds: Array<string>;

  /**
   * Current status of the review of this approval request
   */
  reviewStatus: 'approved' | 'declined' | 'pending';

  /**
   * The approval service for this request. May be LaunchDarkly or an external
   * approval service, such as ServiceNow or JIRA.
   */
  serviceKind: string;

  /**
   * Current status of the approval request
   */
  status: 'pending' | 'completed' | 'failed' | 'scheduled';

  /**
   * The member ID of the member who applied the approval request
   */
  appliedByMemberId?: string;

  /**
   * The service token ID of the service token which applied the approval request
   */
  appliedByServiceTokenId?: string;

  /**
   * Timestamp of when the approval request was applied
   */
  appliedDate?: number;

  /**
   * The settings for this approval
   */
  approvalSettings?: ApprovalSettings;

  /**
   * Details about the custom workflow, if this approval request is part of a custom
   * workflow
   */
  customWorkflowMetadata?: CustomWorkflowMeta;

  /**
   * A human-friendly name for the approval request
   */
  description?: string;

  /**
   * Timestamp for when instructions will be executed
   */
  executionDate?: number;

  /**
   * Details about the object in an external service corresponding to this approval
   * request, such as a ServiceNow change request or a JIRA ticket, if an external
   * approval service is being used
   */
  integrationMetadata?: IntegrationMetadata;

  /**
   * ID of scheduled change to edit or delete
   */
  operatingOnId?: string;

  /**
   * The ID of the member who requested the approval
   */
  requestorId?: string;

  /**
   * String representation of a resource
   */
  resourceId?: string;

  /**
   * Details about the source feature flag, if copied
   */
  source?: CopiedFromEnv;
}

export interface ApprovalSettings {
  /**
   * Whether to skip approvals for pending changes
   */
  bypassApprovalsForPendingChanges: boolean;

  /**
   * Allow applying the change as long as at least one person has approved
   */
  canApplyDeclinedChanges: boolean;

  /**
   * Allow someone who makes an approval request to apply their own change
   */
  canReviewOwnRequest: boolean;

  /**
   * Sets the amount of approvals required before a member can apply a change. The
   * minimum is one and the maximum is five.
   */
  minNumApprovals: number;

  /**
   * If approvals are required for this environment
   */
  required: boolean;

  /**
   * Require approval only on flags with the provided tags. Otherwise all flags will
   * require approval.
   */
  requiredApprovalTags: Array<string>;

  serviceConfig: Record<string, unknown>;

  /**
   * Which service to use for managing approvals
   */
  serviceKind: string;

  /**
   * Automatically apply changes that have been approved by all reviewers. This field
   * is only applicable for approval services other than LaunchDarkly.
   */
  autoApplyApprovedChanges?: boolean;

  /**
   * The kind of resource for which the approval settings apply, for example, flag or
   * segment
   */
  resourceKind?: string;

  /**
   * Optional field for integration configuration ID of a custom approval
   * integration. This is an Enterprise-only feature.
   */
  serviceKindConfigurationId?: string;
}

export interface Conflict {
  /**
   * Instruction in semantic patch format to be applied to the feature flag
   */
  instruction?: Record<string, unknown>;

  /**
   * Reason why the conflict exists
   */
  reason?: string;
}

export interface CopiedFromEnv {
  /**
   * Key of feature flag copied
   */
  key: string;

  /**
   * Version of feature flag copied
   */
  version?: number;
}

export interface CustomWorkflowMeta {
  /**
   * The name of the workflow stage that required this approval request
   */
  name?: string;

  /**
   * Details on the stage of the workflow where this approval request is required
   */
  stage?: CustomWorkflowMeta.Stage;
}

export namespace CustomWorkflowMeta {
  /**
   * Details on the stage of the workflow where this approval request is required
   */
  export interface Stage {
    /**
     * The zero-based index of the workflow stage
     */
    index?: number;

    /**
     * The name of the workflow stage
     */
    name?: string;
  }
}

export interface ExpandableApprovalRequestResponse {
  /**
   * The ID of this approval request
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, unknown>;

  /**
   * Version of the approval request
   */
  _version: number;

  /**
   * An array of individual reviews of this approval request
   */
  allReviews: Array<ReviewResponse>;

  /**
   * Details on any conflicting approval requests
   */
  conflicts: Array<Conflict>;

  /**
   * Timestamp of when the approval request was created
   */
  creationDate: number;

  /**
   * List of instructions in semantic patch format to be applied to the feature flag
   */
  instructions: Array<Record<string, unknown>>;

  /**
   * An array of member IDs. These members are notified to review the approval
   * request.
   */
  notifyMemberIds: Array<string>;

  /**
   * Current status of the review of this approval request
   */
  reviewStatus: 'approved' | 'declined' | 'pending';

  /**
   * The approval service for this request. May be LaunchDarkly or an external
   * approval service, such as ServiceNow or JIRA.
   */
  serviceKind: string;

  /**
   * Current status of the approval request
   */
  status: 'pending' | 'completed' | 'failed' | 'scheduled';

  /**
   * The member ID of the member who applied the approval request
   */
  appliedByMemberId?: string;

  /**
   * The service token ID of the service token which applied the approval request
   */
  appliedByServiceTokenId?: string;

  /**
   * Timestamp of when the approval request was applied
   */
  appliedDate?: number;

  /**
   * The settings for this approval
   */
  approvalSettings?: ApprovalSettings;

  /**
   * Details about the custom workflow, if this approval request is part of a custom
   * workflow
   */
  customWorkflowMetadata?: CustomWorkflowMeta;

  /**
   * A human-friendly name for the approval request
   */
  description?: string;

  /**
   * List of environments the approval impacts
   */
  environments?: Array<EnvironmentsAPI.Environment>;

  /**
   * Timestamp for when instructions will be executed
   */
  executionDate?: number;

  /**
   * Flag the approval request belongs to
   */
  flag?: ExpandedFlagRep;

  /**
   * Details about the object in an external service corresponding to this approval
   * request, such as a ServiceNow change request or a JIRA ticket, if an external
   * approval service is being used
   */
  integrationMetadata?: IntegrationMetadata;

  /**
   * ID of scheduled change to edit or delete
   */
  operatingOnId?: string;

  /**
   * Project the approval request belongs to
   */
  project?: ProjectsAPI.Project;

  /**
   * The ID of the member who requested the approval
   */
  requestorId?: string;

  /**
   * Resource the approval request belongs to
   */
  resource?: ExpandableApprovalRequestResponse.Resource;

  /**
   * String representation of a resource
   */
  resourceId?: string;

  /**
   * Details about the source feature flag, if copied
   */
  source?: CopiedFromEnv;
}

export namespace ExpandableApprovalRequestResponse {
  /**
   * Resource the approval request belongs to
   */
  export interface Resource {
    /**
     * The type of resource
     */
    kind: string;

    aiConfig?: Resource.AIConfig;

    flag?: ApprovalRequestsAPI.ExpandedFlagRep;

    segment?: SegmentsAPI.UserSegment;
  }

  export namespace Resource {
    export interface AIConfig {
      /**
       * The key of the AI Config
       */
      key: string;

      /**
       * The name of the AI Config
       */
      name: string;
    }
  }
}

export interface ExpandedFlagRep {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * Version of the feature flag
   */
  _version: number;

  /**
   * Boolean indicating if the feature flag is archived
   */
  archived: boolean;

  /**
   * Timestamp of flag creation date
   */
  creationDate: number;

  /**
   * Metadata attached to the feature flag, in the form of the property key
   * associated with a name and array of values for the metadata to associate with
   * this flag. Typically used to store data related to an integration.
   */
  customProperties: Record<string, ExpandedFlagRep.CustomProperties>;

  /**
   * A unique key used to reference the flag in your code
   */
  key: string;

  /**
   * Kind of feature flag
   */
  kind: 'boolean' | 'multivariate';

  /**
   * A human-friendly name for the feature flag
   */
  name: string;

  /**
   * Tags for the feature flag
   */
  tags: Array<string>;

  /**
   * Whether the flag is a temporary flag
   */
  temporary: boolean;

  /**
   * An array of possible variations for the flag
   */
  variations: Array<FlagsAPI.Variation>;

  /**
   * Details on the member who maintains this feature flag
   */
  _maintainer?: RelayAutoConfigsAPI.MemberSummary;

  /**
   * If archived is true, date of archive
   */
  archivedDate?: number;

  /**
   * Which type of client-side SDKs the feature flag is available to
   */
  clientSideAvailability?: FlagsAPI.ClientSideAvailability;

  /**
   * The indices, from the array of variations, for the variations to serve by
   * default when targeting is on and when targeting is off. These variations will be
   * used for this flag in new environments. If omitted, the first and last variation
   * will be used.
   */
  defaults?: FlagsAPI.Defaults;

  /**
   * Description of the feature flag
   */
  description?: string;

  /**
   * @deprecated Deprecated, use <code>clientSideAvailability</code>. Whether this
   * flag should be made available to the client-side JavaScript SDK
   */
  includeInSnippet?: boolean;

  /**
   * The ID of the member who maintains the flag
   */
  maintainerId?: string;
}

export namespace ExpandedFlagRep {
  export interface CustomProperties {
    /**
     * The name of the custom property of this type.
     */
    name: string;

    /**
     * An array of values for the custom property data to associate with this flag.
     */
    value: Array<string>;
  }
}

export interface FlagConfigApprovalRequestResponse {
  /**
   * The ID of this approval request
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, unknown>;

  /**
   * Version of the approval request
   */
  _version: number;

  /**
   * An array of individual reviews of this approval request
   */
  allReviews: Array<ReviewResponse>;

  /**
   * Details on any conflicting approval requests
   */
  conflicts: Array<Conflict>;

  /**
   * Timestamp of when the approval request was created
   */
  creationDate: number;

  /**
   * List of instructions in semantic patch format to be applied to the feature flag
   */
  instructions: Array<Record<string, unknown>>;

  /**
   * An array of member IDs. These members are notified to review the approval
   * request.
   */
  notifyMemberIds: Array<string>;

  /**
   * Current status of the review of this approval request
   */
  reviewStatus: 'approved' | 'declined' | 'pending';

  /**
   * The approval service for this request. May be LaunchDarkly or an external
   * approval service, such as ServiceNow or JIRA.
   */
  serviceKind: string;

  /**
   * Current status of the approval request
   */
  status: 'pending' | 'completed' | 'failed' | 'scheduled';

  /**
   * The member ID of the member who applied the approval request
   */
  appliedByMemberId?: string;

  /**
   * The service token ID of the service token which applied the approval request
   */
  appliedByServiceTokenId?: string;

  /**
   * Timestamp of when the approval request was applied
   */
  appliedDate?: number;

  /**
   * Details about the custom workflow, if this approval request is part of a custom
   * workflow
   */
  customWorkflowMetadata?: CustomWorkflowMeta;

  /**
   * A human-friendly name for the approval request
   */
  description?: string;

  /**
   * Timestamp for when instructions will be executed
   */
  executionDate?: number;

  /**
   * Details about the object in an external service corresponding to this approval
   * request, such as a ServiceNow change request or a JIRA ticket, if an external
   * approval service is being used
   */
  integrationMetadata?: IntegrationMetadata;

  /**
   * ID of scheduled change to edit or delete
   */
  operatingOnId?: string;

  /**
   * The ID of the member who requested the approval
   */
  requestorId?: string;

  /**
   * Details about the source feature flag, if copied
   */
  source?: CopiedFromEnv;
}

export interface IntegrationMetadata {
  externalId: string;

  externalStatus: IntegrationMetadata.ExternalStatus;

  externalUrl: string;

  lastChecked: number;
}

export namespace IntegrationMetadata {
  export interface ExternalStatus {
    display: string;

    value: string;
  }
}

export interface PostApprovalRequestApplyRequest {
  /**
   * Optional comment about the approval request
   */
  comment?: string;
}

export interface PostApprovalRequestReviewRequest {
  /**
   * Optional comment about the approval request
   */
  comment?: string;

  /**
   * The type of review for this approval request
   */
  kind?: 'approve' | 'comment' | 'decline';
}

export interface ReviewResponse {
  /**
   * The approval request ID
   */
  _id: string;

  /**
   * The type of review action to take
   */
  kind: 'approve' | 'decline' | 'comment';

  /**
   * A comment describing the approval response
   */
  comment?: string;

  /**
   * Timestamp of when the request was created
   */
  creationDate?: number;

  /**
   * ID of account member that reviewed request
   */
  memberId?: string;

  /**
   * ID of account service token that reviewed request
   */
  serviceTokenId?: string;
}

export interface ApprovalRequestRetrieveApprovalRequestsResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of approval requests
   */
  items: Array<ExpandableApprovalRequestResponse>;

  /**
   * Total number of approval requests
   */
  totalCount: number;
}

export interface ApprovalRequestRetrieveParams {
  /**
   * A comma-separated list of fields to expand in the response. Supported fields are
   * explained above.
   */
  expand?: string;
}

export interface ApprovalRequestApplyParams {
  /**
   * Optional comment about the approval request
   */
  comment?: string;
}

export interface ApprovalRequestApprovalRequestsParams {
  /**
   * A brief description of the changes you're requesting
   */
  description: string;

  /**
   * List of instructions in semantic patch format to be applied to the feature flag.
   * Review the
   * [Update feature flag](https://launchdarkly.com/docs/ld-docs/api/feature-flags/patch-feature-flag)
   * documentation for details on available instructions.
   */
  instructions: Array<Record<string, unknown>>;

  /**
   * String representation of the resource specifier
   */
  resourceId: string;

  /**
   * Optional comment describing the approval request
   */
  comment?: string;

  /**
   * Additional approval request fields for third-party integration approval systems.
   * If you are using a third-party integration to manage approval requests, these
   * additional fields will be described in the <code>manifest.json</code> for that
   * integration, at https://github.com/launchdarkly/integration-framework.
   */
  integrationConfig?: Record<string, unknown>;

  /**
   * An array of member IDs. These members are notified to review the approval
   * request.
   */
  notifyMemberIds?: Array<string>;

  /**
   * An array of team keys. The members of these teams are notified to review the
   * approval request.
   */
  notifyTeamKeys?: Array<string>;
}

export interface ApprovalRequestRetrieveApprovalRequestsParams {
  /**
   * A comma-separated list of fields to expand in the response. Supported fields are
   * explained above.
   */
  expand?: string;

  /**
   * A comma-separated list of filters. Each filter is of the form
   * `field operator value`. Supported fields are explained above.
   */
  filter?: string;

  /**
   * The number of approvals to return. Defaults to 20. Maximum limit is 200.
   */
  limit?: number;

  /**
   * Where to start in the list. Use this with pagination. For example, an offset of
   * 10 skips the first ten items and then returns the next items in the list, up to
   * the query `limit`.
   */
  offset?: number;
}

export interface ApprovalRequestReviewsParams {
  /**
   * Optional comment about the approval request
   */
  comment?: string;

  /**
   * The type of review for this approval request
   */
  kind?: 'approve' | 'comment' | 'decline';
}

export declare namespace ApprovalRequests {
  export {
    type ApprovalRequestResponse as ApprovalRequestResponse,
    type ApprovalSettings as ApprovalSettings,
    type Conflict as Conflict,
    type CopiedFromEnv as CopiedFromEnv,
    type CustomWorkflowMeta as CustomWorkflowMeta,
    type ExpandableApprovalRequestResponse as ExpandableApprovalRequestResponse,
    type ExpandedFlagRep as ExpandedFlagRep,
    type FlagConfigApprovalRequestResponse as FlagConfigApprovalRequestResponse,
    type IntegrationMetadata as IntegrationMetadata,
    type PostApprovalRequestApplyRequest as PostApprovalRequestApplyRequest,
    type PostApprovalRequestReviewRequest as PostApprovalRequestReviewRequest,
    type ReviewResponse as ReviewResponse,
    type ApprovalRequestRetrieveApprovalRequestsResponse as ApprovalRequestRetrieveApprovalRequestsResponse,
    type ApprovalRequestRetrieveParams as ApprovalRequestRetrieveParams,
    type ApprovalRequestApplyParams as ApprovalRequestApplyParams,
    type ApprovalRequestApprovalRequestsParams as ApprovalRequestApprovalRequestsParams,
    type ApprovalRequestRetrieveApprovalRequestsParams as ApprovalRequestRetrieveApprovalRequestsParams,
    type ApprovalRequestReviewsParams as ApprovalRequestReviewsParams,
  };
}
