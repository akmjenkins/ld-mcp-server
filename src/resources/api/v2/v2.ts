// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnnouncementsAPI from './announcements';
import {
  AnnouncementCreateParams,
  AnnouncementLink,
  AnnouncementListParams,
  AnnouncementListResponse,
  AnnouncementResponse,
  AnnouncementUpdateParams,
  Announcements,
} from './announcements';
import * as ApprovalRequestsAPI from './approval-requests';
import {
  ApprovalRequestApplyParams,
  ApprovalRequestApprovalRequestsParams,
  ApprovalRequestResponse,
  ApprovalRequestRetrieveApprovalRequestsParams,
  ApprovalRequestRetrieveApprovalRequestsResponse,
  ApprovalRequestRetrieveParams,
  ApprovalRequestReviewsParams,
  ApprovalRequests,
  ApprovalSettings,
  Conflict,
  CopiedFromEnv,
  CustomWorkflowMeta,
  ExpandableApprovalRequestResponse,
  ExpandedFlagRep,
  FlagConfigApprovalRequestResponse,
  IntegrationMetadata,
  PostApprovalRequestApplyRequest,
  PostApprovalRequestReviewRequest,
  ReviewResponse,
} from './approval-requests';
import * as AuditlogAPI from './auditlog';
import {
  AuditLogEntryListingRep,
  AuditLogEntryListingRepCollection,
  Auditlog,
  AuditlogCreateParams,
  AuditlogListParams,
  AuditlogRetrieveResponse,
  AuthorizedAppDataRep,
  MemberDataRep,
  ParentResourceRep,
  ResourceAccess,
  StatementPost,
  SubjectDataRep,
  TargetResourceRep,
  TokenSummary,
} from './auditlog';
import * as DestinationsAPI from './destinations';
import {
  Destination,
  DestinationDeleteParams,
  DestinationGenerateWarehouseDestinationKeyPairResponse,
  DestinationListResponse,
  DestinationRetrieveParams,
  DestinationUpdateParams,
  Destinations,
} from './destinations';
import * as FlagStatusesAPI from './flag-statuses';
import { FlagStatusRep, FlagStatusRetrieveParams, FlagStatuses } from './flag-statuses';
import * as IntegrationsAPI from './integrations';
import {
  Integration,
  IntegrationDeleteParams,
  IntegrationRetrieveParams,
  IntegrationUpdateParams,
  Integrations,
} from './integrations';
import * as MembersAPI from './members';
import {
  Member,
  MemberCreateParams,
  MemberListParams,
  MemberPatchAllParams,
  MemberPatchAllResponse,
  MemberRetrieveParams,
  MemberTeamSummaryRep,
  MemberTeamsParams,
  MemberUpdateParams,
  Members,
} from './members';
import * as MetricsAPI from './metrics';
import {
  DependentExperimentRep,
  Filter,
  FlagListingRep,
  MetricDeleteParams,
  MetricEventDefaultRep,
  MetricListingRep,
  MetricRep,
  MetricRetrieveParams,
  MetricUpdateParams,
  Metrics,
  Modification,
} from './metrics';
import * as RolesAPI from './roles';
import {
  CustomRole,
  RoleCreateParams,
  RoleListParams,
  RoleListResponse,
  RoleUpdateParams,
  Roles,
} from './roles';
import * as TeamsAPI from './teams';
import {
  ProjectSummary,
  Team,
  TeamCreateParams,
  TeamCustomRoles,
  TeamListParams,
  TeamListResponse,
  TeamMaintainers,
  TeamMembersParams,
  TeamMembersResponse,
  TeamPatchAllParams,
  TeamPatchAllResponse,
  TeamProjects,
  TeamRetrieveMaintainersParams,
  TeamRetrieveParams,
  TeamRetrieveRolesParams,
  TeamUpdateParams,
  Teams,
} from './teams';
import * as TemplatesAPI from './templates';
import {
  TemplateCreateParams,
  TemplateListParams,
  TemplateListResponse,
  Templates,
  WorkflowTemplateOutput,
} from './templates';
import * as TokensAPI from './tokens';
import {
  Token,
  TokenCreateParams,
  TokenListParams,
  TokenListResponse,
  TokenResetParams,
  TokenUpdateParams,
  Tokens,
} from './tokens';
import * as WebhooksAPI from './webhooks';
import { Webhook, WebhookCreateParams, WebhookListResponse, WebhookUpdateParams, Webhooks } from './webhooks';
import * as AccountAPI from './account/account';
import { Account } from './account/account';
import * as ApplicationsAPI from './applications/applications';
import {
  ApplicationListParams,
  ApplicationListResponse,
  ApplicationRep,
  ApplicationRetrieveParams,
  ApplicationUpdateParams,
  Applications,
  MaintainerRep,
  PatchOperation,
} from './applications/applications';
import * as CodeRefsAPI from './code-refs/code-refs';
import {
  CodeRefRetrieveExtinctionsParams,
  CodeRefRetrieveExtinctionsResponse,
  CodeRefs,
} from './code-refs/code-refs';
import * as StatisticsAPI from './code-refs/statistics';
import * as EngineeringInsightsAPI from './engineering-insights/engineering-insights';
import {
  EngineeringInsightDeploymentEventsParams,
  EngineeringInsightRetrieveFlagEventsParams,
  EngineeringInsightRetrieveFlagEventsResponse,
  EngineeringInsightRetrievePullRequestsParams,
  EngineeringInsights,
  PullRequestCollectionRep,
  PullRequestRep,
} from './engineering-insights/engineering-insights';
import * as FlagLinksAPI from './flag-links/flag-links';
import { FlagLinks } from './flag-links/flag-links';
import * as FlagsAPI from './flags/flags';
import {
  ClientSideAvailability,
  Defaults,
  FeatureFlag,
  FlagCopyConfigEnvironment,
  FlagCopyParams,
  FlagDeleteParams,
  FlagRetrieveParams,
  FlagUpdateParams,
  Flags,
  Variation,
} from './flags/flags';
import * as IntegrationCapabilitiesAPI from './integration-capabilities/integration-capabilities';
import { IntegrationCapabilities } from './integration-capabilities/integration-capabilities';
import * as IntegrationConfigurationsAPI from './integration-configurations/integration-configurations';
import {
  IntegrationConfigurationUpdateParams,
  IntegrationConfigurations,
} from './integration-configurations/integration-configurations';
import * as OAuthAPI from './oauth/oauth';
import { OAuth } from './oauth/oauth';
import * as ProjectsAPI from './projects/projects';
import {
  Project,
  ProjectCreateParams,
  ProjectListParams,
  ProjectListResponse,
  ProjectRep,
  ProjectRetrieveParams,
  ProjectUpdateParams,
  Projects,
} from './projects/projects';
import * as SegmentsAPI from './segments/segments';
import {
  SegmentDeleteParams,
  SegmentRetrieveParams,
  SegmentTarget,
  SegmentUpdateParams,
  Segments,
  UserSegment,
} from './segments/segments';
import * as UsageAPI from './usage/usage';
import {
  SeriesIntervalsRep,
  SeriesListRep,
  Usage,
  UsageRetrieveDataExportEventsParams,
  UsageRetrieveExperimentationKeysParams,
  UsageRetrieveExperimentationUnitsParams,
  UsageRetrieveParams,
  UsageRetrieveServiceConnectionsParams,
} from './usage/usage';
import * as UsersAPI from './users/users';
import { UserDeleteParams, UserRecord, UserRetrieveParams, Users } from './users/users';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class V2 extends APIResource {
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  approvalRequests: ApprovalRequestsAPI.ApprovalRequests = new ApprovalRequestsAPI.ApprovalRequests(
    this._client,
  );
  auditlog: AuditlogAPI.Auditlog = new AuditlogAPI.Auditlog(this._client);
  codeRefs: CodeRefsAPI.CodeRefs = new CodeRefsAPI.CodeRefs(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  flagLinks: FlagLinksAPI.FlagLinks = new FlagLinksAPI.FlagLinks(this._client);
  flagStatuses: FlagStatusesAPI.FlagStatuses = new FlagStatusesAPI.FlagStatuses(this._client);
  flags: FlagsAPI.Flags = new FlagsAPI.Flags(this._client);
  integrationCapabilities: IntegrationCapabilitiesAPI.IntegrationCapabilities =
    new IntegrationCapabilitiesAPI.IntegrationCapabilities(this._client);
  integrationConfigurations: IntegrationConfigurationsAPI.IntegrationConfigurations =
    new IntegrationConfigurationsAPI.IntegrationConfigurations(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  oauth: OAuthAPI.OAuth = new OAuthAPI.OAuth(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  segments: SegmentsAPI.Segments = new SegmentsAPI.Segments(this._client);
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);
  templates: TemplatesAPI.Templates = new TemplatesAPI.Templates(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);
  announcements: AnnouncementsAPI.Announcements = new AnnouncementsAPI.Announcements(this._client);
  engineeringInsights: EngineeringInsightsAPI.EngineeringInsights =
    new EngineeringInsightsAPI.EngineeringInsights(this._client);

  /**
   * > ### Use contexts instead
   * >
   * > After you have upgraded your LaunchDarkly SDK to use contexts instead of
   * > users, you should use
   * > [Search for context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/search-context-instances)
   * > instead of this endpoint.
   *
   * Search users in LaunchDarkly based on their last active date, a user attribute
   * filter set, or a search query.
   *
   * An example user attribute filter set is
   * `filter=firstName:Anna,activeTrial:false`. This matches users that have the user
   * attribute `firstName` set to `Anna`, that also have the attribute `activeTrial`
   * set to `false`.
   *
   * To paginate through results, follow the `next` link in the `_links` object. To
   * learn more, read
   * [Representations](https://launchdarkly.com/docs/ld-docs/api#representations).
   *
   * @deprecated
   */
  retrieve(
    environmentKey: string,
    params: V2RetrieveParams,
    options?: RequestOptions,
  ): APIPromise<V2RetrieveResponse> {
    const { projectKey, ...query } = params;
    return this._client.get(path`/api/v2/user-search/${projectKey}/${environmentKey}`, { query, ...options });
  }

  /**
   * Get all of the resource categories the API supports. In the sandbox, click
   * 'Play' and enter any string in the 'Authorization' field to test this endpoint.
   *
   * @example
   * ```ts
   * const v2s = await client.api.v2.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<V2ListResponse> {
    return this._client.get('/api/v2', options);
  }

  /**
   * Get basic information about the identity used (session cookie, API token, SDK
   * keys, etc.) to call the API
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.retrieveCallerIdentity();
   * ```
   */
  retrieveCallerIdentity(options?: RequestOptions): APIPromise<V2RetrieveCallerIdentityResponse> {
    return this._client.get('/api/v2/caller-identity', options);
  }

  /**
   * Get the latest version of the OpenAPI specification for LaunchDarkly's API in
   * JSON format. In the sandbox, click 'Play' and enter any string in the
   * 'Authorization' field to test this endpoint.
   *
   * @example
   * ```ts
   * await client.api.v2.retrieveOpenAPIJson();
   * ```
   */
  retrieveOpenAPIJson(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/api/v2/openapi.json', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a list of IP ranges the LaunchDarkly service uses. You can use this list to
   * allow LaunchDarkly through your firewall. We post upcoming changes to this list
   * in advance on our [status page](https://status.launchdarkly.com/).
   * <br /><br />In the sandbox, click 'Play' and enter any string in the
   * 'Authorization' field to test this endpoint.
   *
   * @example
   * ```ts
   * const response = await client.api.v2.retrievePublicIPList();
   * ```
   */
  retrievePublicIPList(options?: RequestOptions): APIPromise<V2RetrievePublicIPListResponse> {
    return this._client.get('/api/v2/public-ip-list', options);
  }

  /**
   * Get a list of tags.
   *
   * @example
   * ```ts
   * const response = await client.api.v2.retrieveTags();
   * ```
   */
  retrieveTags(
    query: V2RetrieveTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V2RetrieveTagsResponse> {
    return this._client.get('/api/v2/tags', { query, ...options });
  }

  /**
   * Get the latest API version, the list of valid API versions in ascending order,
   * and the version being used for this request. These are all in the external,
   * date-based format.
   *
   * @example
   * ```ts
   * const response = await client.api.v2.retrieveVersions();
   * ```
   */
  retrieveVersions(options?: RequestOptions): APIPromise<V2RetrieveVersionsResponse> {
    return this._client.get('/api/v2/versions', options);
  }
}

export interface V2RetrieveResponse {
  /**
   * Details on the users
   */
  items: Array<UsersAPI.UserRecord>;

  /**
   * The total number of users in the environment
   */
  totalCount: number;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export interface V2ListResponse {
  links: { [key: string]: StatisticsAPI.Link };
}

export interface V2RetrieveCallerIdentityResponse {
  accountId?: string;

  authKind?: string;

  clientId?: string;

  environmentId?: string;

  environmentName?: string;

  memberId?: string;

  projectId?: string;

  projectName?: string;

  serviceToken?: boolean;

  tokenId?: string;

  tokenKind?: string;

  tokenName?: string;
}

export interface V2RetrievePublicIPListResponse {
  /**
   * A list of the IP addresses LaunchDarkly's service uses
   */
  addresses: Array<string>;

  /**
   * A list of the IP addresses outgoing webhook notifications use
   */
  outboundAddresses: Array<string>;
}

export interface V2RetrieveTagsResponse {
  _links: { [key: string]: V2RetrieveTagsResponse._Links };

  /**
   * List of tags
   */
  items: Array<string>;

  /**
   * The total number of tags
   */
  totalCount?: number;
}

export namespace V2RetrieveTagsResponse {
  export interface _Links {
    href?: string;

    type?: string;
  }
}

export interface V2RetrieveVersionsResponse {
  /**
   * The version of the API currently in use. Typically this is the API version
   * specified for your access token. If you add the <code>LD-API-Version:
   * beta</code> header to your request, this will be equal to the
   * <code>latestVersion</code>.
   */
  currentVersion: number;

  /**
   * The most recently released version of the API
   */
  latestVersion: number;

  /**
   * A list of all valid API versions. To learn more about our versioning, read
   * [Versioning](https://launchdarkly.com/docs/api#versioning).
   */
  validVersions: Array<number>;

  /**
   * Whether the version of the API currently is use is a beta version. This is
   * always <code>true</code> if you add the <code>LD-API-Version: beta</code> header
   * to your request.
   */
  beta?: boolean;
}

export interface V2RetrieveParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Query param: A Unix epoch time in milliseconds specifying the maximum last time
   * a user requested a feature flag from LaunchDarkly
   */
  after?: number;

  /**
   * Query param: A comma-separated list of user attribute filters. Each filter is in
   * the form of attributeKey:attributeValue
   */
  filter?: string;

  /**
   * Query param: Specifies the maximum number of items in the collection to return
   * (max: 50, default: 20)
   */
  limit?: number;

  /**
   * Query param: Deprecated, use `searchAfter` instead. Specifies the first item to
   * return in the collection.
   */
  offset?: number;

  /**
   * Query param: Full-text search for users based on name, first name, last name,
   * e-mail address, or key
   */
  q?: string;

  /**
   * Query param: Limits results to users with sort values after the value you
   * specify. You can use this for pagination, but we recommend using the `next` link
   * we provide instead.
   */
  searchAfter?: string;

  /**
   * Query param: Specifies a field by which to sort. LaunchDarkly supports the
   * `userKey` and `lastSeen` fields. Fields prefixed by a dash ( - ) sort in
   * descending order.
   */
  sort?: string;
}

export interface V2RetrieveTagsParams {
  /**
   * Whether or not to return archived flags
   */
  archived?: boolean;

  /**
   * The time to retrieve tags as of. Default is the current time.
   */
  asOf?: string;

  /**
   * Fetch tags associated with the specified resource type. Options are `flag`,
   * `project`, `environment`, `segment`, `metric`. Returns all types by default.
   */
  kind?: Array<string>;

  /**
   * The number of tags to return. Maximum is 1000.
   */
  limit?: number;

  /**
   * The index of the first tag to return. Default is 0.
   */
  offset?: number;

  /**
   * Return tags with the specified prefix
   */
  pre?: string;
}

V2.Account = Account;
V2.Applications = Applications;
V2.ApprovalRequests = ApprovalRequests;
V2.Auditlog = Auditlog;
V2.CodeRefs = CodeRefs;
V2.Destinations = Destinations;
V2.FlagLinks = FlagLinks;
V2.FlagStatuses = FlagStatuses;
V2.Flags = Flags;
V2.IntegrationCapabilities = IntegrationCapabilities;
V2.IntegrationConfigurations = IntegrationConfigurations;
V2.Integrations = Integrations;
V2.Metrics = Metrics;
V2.OAuth = OAuth;
V2.Projects = Projects;
V2.Roles = Roles;
V2.Segments = Segments;
V2.Teams = Teams;
V2.Templates = Templates;
V2.Tokens = Tokens;
V2.Usage = Usage;
V2.Users = Users;
V2.Webhooks = Webhooks;
V2.Announcements = Announcements;
V2.EngineeringInsights = EngineeringInsights;

export declare namespace V2 {
  export {
    type V2RetrieveResponse as V2RetrieveResponse,
    type V2ListResponse as V2ListResponse,
    type V2RetrieveCallerIdentityResponse as V2RetrieveCallerIdentityResponse,
    type V2RetrievePublicIPListResponse as V2RetrievePublicIPListResponse,
    type V2RetrieveTagsResponse as V2RetrieveTagsResponse,
    type V2RetrieveVersionsResponse as V2RetrieveVersionsResponse,
    type V2RetrieveParams as V2RetrieveParams,
    type V2RetrieveTagsParams as V2RetrieveTagsParams,
  };

  export { Account as Account };

  export {
    Applications as Applications,
    type ApplicationRep as ApplicationRep,
    type MaintainerRep as MaintainerRep,
    type PatchOperation as PatchOperation,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationRetrieveParams as ApplicationRetrieveParams,
    type ApplicationUpdateParams as ApplicationUpdateParams,
    type ApplicationListParams as ApplicationListParams,
  };

  export {
    ApprovalRequests as ApprovalRequests,
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

  export {
    Auditlog as Auditlog,
    type AuditLogEntryListingRep as AuditLogEntryListingRep,
    type AuditLogEntryListingRepCollection as AuditLogEntryListingRepCollection,
    type AuthorizedAppDataRep as AuthorizedAppDataRep,
    type MemberDataRep as MemberDataRep,
    type ParentResourceRep as ParentResourceRep,
    type ResourceAccess as ResourceAccess,
    type StatementPost as StatementPost,
    type SubjectDataRep as SubjectDataRep,
    type TargetResourceRep as TargetResourceRep,
    type TokenSummary as TokenSummary,
    type AuditlogRetrieveResponse as AuditlogRetrieveResponse,
    type AuditlogCreateParams as AuditlogCreateParams,
    type AuditlogListParams as AuditlogListParams,
  };

  export {
    CodeRefs as CodeRefs,
    type CodeRefRetrieveExtinctionsResponse as CodeRefRetrieveExtinctionsResponse,
    type CodeRefRetrieveExtinctionsParams as CodeRefRetrieveExtinctionsParams,
  };

  export {
    Destinations as Destinations,
    type Destination as Destination,
    type DestinationListResponse as DestinationListResponse,
    type DestinationGenerateWarehouseDestinationKeyPairResponse as DestinationGenerateWarehouseDestinationKeyPairResponse,
    type DestinationRetrieveParams as DestinationRetrieveParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };

  export { FlagLinks as FlagLinks };

  export {
    FlagStatuses as FlagStatuses,
    type FlagStatusRep as FlagStatusRep,
    type FlagStatusRetrieveParams as FlagStatusRetrieveParams,
  };

  export {
    Flags as Flags,
    type ClientSideAvailability as ClientSideAvailability,
    type Defaults as Defaults,
    type FeatureFlag as FeatureFlag,
    type FlagCopyConfigEnvironment as FlagCopyConfigEnvironment,
    type Variation as Variation,
    type FlagRetrieveParams as FlagRetrieveParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagDeleteParams as FlagDeleteParams,
    type FlagCopyParams as FlagCopyParams,
  };

  export { IntegrationCapabilities as IntegrationCapabilities };

  export {
    IntegrationConfigurations as IntegrationConfigurations,
    type IntegrationConfigurationUpdateParams as IntegrationConfigurationUpdateParams,
  };

  export {
    Integrations as Integrations,
    type Integration as Integration,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
  };

  export {
    type Members as Members,
    type Member as Member,
    type MemberTeamSummaryRep as MemberTeamSummaryRep,
    type MemberPatchAllResponse as MemberPatchAllResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberRetrieveParams as MemberRetrieveParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberPatchAllParams as MemberPatchAllParams,
    type MemberTeamsParams as MemberTeamsParams,
  };

  export {
    Metrics as Metrics,
    type DependentExperimentRep as DependentExperimentRep,
    type Filter as Filter,
    type FlagListingRep as FlagListingRep,
    type MetricEventDefaultRep as MetricEventDefaultRep,
    type MetricListingRep as MetricListingRep,
    type MetricRep as MetricRep,
    type Modification as Modification,
    type MetricRetrieveParams as MetricRetrieveParams,
    type MetricUpdateParams as MetricUpdateParams,
    type MetricDeleteParams as MetricDeleteParams,
  };

  export { OAuth as OAuth };

  export {
    Projects as Projects,
    type Project as Project,
    type ProjectRep as ProjectRep,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Roles as Roles,
    type CustomRole as CustomRole,
    type RoleListResponse as RoleListResponse,
    type RoleCreateParams as RoleCreateParams,
    type RoleUpdateParams as RoleUpdateParams,
    type RoleListParams as RoleListParams,
  };

  export {
    Segments as Segments,
    type SegmentTarget as SegmentTarget,
    type UserSegment as UserSegment,
    type SegmentRetrieveParams as SegmentRetrieveParams,
    type SegmentUpdateParams as SegmentUpdateParams,
    type SegmentDeleteParams as SegmentDeleteParams,
  };

  export {
    Teams as Teams,
    type ProjectSummary as ProjectSummary,
    type Team as Team,
    type TeamCustomRoles as TeamCustomRoles,
    type TeamMaintainers as TeamMaintainers,
    type TeamProjects as TeamProjects,
    type TeamListResponse as TeamListResponse,
    type TeamMembersResponse as TeamMembersResponse,
    type TeamPatchAllResponse as TeamPatchAllResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamRetrieveParams as TeamRetrieveParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamListParams as TeamListParams,
    type TeamMembersParams as TeamMembersParams,
    type TeamPatchAllParams as TeamPatchAllParams,
    type TeamRetrieveMaintainersParams as TeamRetrieveMaintainersParams,
    type TeamRetrieveRolesParams as TeamRetrieveRolesParams,
  };

  export {
    Templates as Templates,
    type WorkflowTemplateOutput as WorkflowTemplateOutput,
    type TemplateListResponse as TemplateListResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams,
  };

  export {
    Tokens as Tokens,
    type Token as Token,
    type TokenListResponse as TokenListResponse,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
    type TokenResetParams as TokenResetParams,
  };

  export {
    Usage as Usage,
    type SeriesIntervalsRep as SeriesIntervalsRep,
    type SeriesListRep as SeriesListRep,
    type UsageRetrieveParams as UsageRetrieveParams,
    type UsageRetrieveDataExportEventsParams as UsageRetrieveDataExportEventsParams,
    type UsageRetrieveExperimentationKeysParams as UsageRetrieveExperimentationKeysParams,
    type UsageRetrieveExperimentationUnitsParams as UsageRetrieveExperimentationUnitsParams,
    type UsageRetrieveServiceConnectionsParams as UsageRetrieveServiceConnectionsParams,
  };

  export {
    Users as Users,
    type UserRecord as UserRecord,
    type UserRetrieveParams as UserRetrieveParams,
    type UserDeleteParams as UserDeleteParams,
  };

  export {
    Webhooks as Webhooks,
    type Webhook as Webhook,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };

  export {
    Announcements as Announcements,
    type AnnouncementLink as AnnouncementLink,
    type AnnouncementResponse as AnnouncementResponse,
    type AnnouncementListResponse as AnnouncementListResponse,
    type AnnouncementCreateParams as AnnouncementCreateParams,
    type AnnouncementUpdateParams as AnnouncementUpdateParams,
    type AnnouncementListParams as AnnouncementListParams,
  };

  export {
    EngineeringInsights as EngineeringInsights,
    type PullRequestCollectionRep as PullRequestCollectionRep,
    type PullRequestRep as PullRequestRep,
    type EngineeringInsightRetrieveFlagEventsResponse as EngineeringInsightRetrieveFlagEventsResponse,
    type EngineeringInsightDeploymentEventsParams as EngineeringInsightDeploymentEventsParams,
    type EngineeringInsightRetrieveFlagEventsParams as EngineeringInsightRetrieveFlagEventsParams,
    type EngineeringInsightRetrievePullRequestsParams as EngineeringInsightRetrievePullRequestsParams,
  };
}
