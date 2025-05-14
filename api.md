# API

## V2

Types:

- <code><a href="./src/resources/api/v2/v2.ts">V2RetrieveResponse</a></code>
- <code><a href="./src/resources/api/v2/v2.ts">V2ListResponse</a></code>
- <code><a href="./src/resources/api/v2/v2.ts">V2RetrieveCallerIdentityResponse</a></code>
- <code><a href="./src/resources/api/v2/v2.ts">V2RetrievePublicIPListResponse</a></code>
- <code><a href="./src/resources/api/v2/v2.ts">V2RetrieveTagsResponse</a></code>
- <code><a href="./src/resources/api/v2/v2.ts">V2RetrieveVersionsResponse</a></code>

Methods:

- <code title="get /api/v2/user-search/{projectKey}/{environmentKey}">client.api.v2.<a href="./src/resources/api/v2/v2.ts">retrieve</a>(environmentKey, { ...params }) -> V2RetrieveResponse</code>
- <code title="get /api/v2">client.api.v2.<a href="./src/resources/api/v2/v2.ts">list</a>() -> V2ListResponse</code>
- <code title="get /api/v2/caller-identity">client.api.v2.<a href="./src/resources/api/v2/v2.ts">retrieveCallerIdentity</a>() -> V2RetrieveCallerIdentityResponse</code>
- <code title="get /api/v2/openapi.json">client.api.v2.<a href="./src/resources/api/v2/v2.ts">retrieveOpenAPIJson</a>() -> void</code>
- <code title="get /api/v2/public-ip-list">client.api.v2.<a href="./src/resources/api/v2/v2.ts">retrievePublicIPList</a>() -> V2RetrievePublicIPListResponse</code>
- <code title="get /api/v2/tags">client.api.v2.<a href="./src/resources/api/v2/v2.ts">retrieveTags</a>({ ...params }) -> V2RetrieveTagsResponse</code>
- <code title="get /api/v2/versions">client.api.v2.<a href="./src/resources/api/v2/v2.ts">retrieveVersions</a>() -> V2RetrieveVersionsResponse</code>

### Account

#### RelayAutoConfigs

Types:

- <code><a href="./src/resources/api/v2/account/relay-auto-configs.ts">Access</a></code>
- <code><a href="./src/resources/api/v2/account/relay-auto-configs.ts">MemberSummary</a></code>
- <code><a href="./src/resources/api/v2/account/relay-auto-configs.ts">PatchWithComment</a></code>
- <code><a href="./src/resources/api/v2/account/relay-auto-configs.ts">RelayAutoConfigRep</a></code>
- <code><a href="./src/resources/api/v2/account/relay-auto-configs.ts">Statement</a></code>
- <code><a href="./src/resources/api/v2/account/relay-auto-configs.ts">RelayAutoConfigRetrieveRelayAutoConfigsResponse</a></code>

Methods:

- <code title="get /api/v2/account/relay-auto-configs/{id}">client.api.v2.account.relayAutoConfigs.<a href="./src/resources/api/v2/account/relay-auto-configs.ts">retrieve</a>(id) -> RelayAutoConfigRep</code>
- <code title="patch /api/v2/account/relay-auto-configs/{id}">client.api.v2.account.relayAutoConfigs.<a href="./src/resources/api/v2/account/relay-auto-configs.ts">update</a>(id, { ...params }) -> RelayAutoConfigRep</code>
- <code title="delete /api/v2/account/relay-auto-configs/{id}">client.api.v2.account.relayAutoConfigs.<a href="./src/resources/api/v2/account/relay-auto-configs.ts">delete</a>(id) -> void</code>
- <code title="post /api/v2/account/relay-auto-configs">client.api.v2.account.relayAutoConfigs.<a href="./src/resources/api/v2/account/relay-auto-configs.ts">relayAutoConfigs</a>({ ...params }) -> RelayAutoConfigRep</code>
- <code title="post /api/v2/account/relay-auto-configs/{id}/reset">client.api.v2.account.relayAutoConfigs.<a href="./src/resources/api/v2/account/relay-auto-configs.ts">reset</a>(id, { ...params }) -> RelayAutoConfigRep</code>
- <code title="get /api/v2/account/relay-auto-configs">client.api.v2.account.relayAutoConfigs.<a href="./src/resources/api/v2/account/relay-auto-configs.ts">retrieveRelayAutoConfigs</a>() -> RelayAutoConfigRetrieveRelayAutoConfigsResponse</code>

### Applications

Types:

- <code><a href="./src/resources/api/v2/applications/applications.ts">ApplicationRep</a></code>
- <code><a href="./src/resources/api/v2/applications/applications.ts">MaintainerRep</a></code>
- <code><a href="./src/resources/api/v2/applications/applications.ts">PatchOperation</a></code>
- <code><a href="./src/resources/api/v2/applications/applications.ts">ApplicationListResponse</a></code>

Methods:

- <code title="get /api/v2/applications/{applicationKey}">client.api.v2.applications.<a href="./src/resources/api/v2/applications/applications.ts">retrieve</a>(applicationKey, { ...params }) -> ApplicationRep</code>
- <code title="patch /api/v2/applications/{applicationKey}">client.api.v2.applications.<a href="./src/resources/api/v2/applications/applications.ts">update</a>(applicationKey, [ ...body ]) -> ApplicationRep</code>
- <code title="get /api/v2/applications">client.api.v2.applications.<a href="./src/resources/api/v2/applications/applications.ts">list</a>({ ...params }) -> ApplicationListResponse</code>
- <code title="delete /api/v2/applications/{applicationKey}">client.api.v2.applications.<a href="./src/resources/api/v2/applications/applications.ts">delete</a>(applicationKey) -> void</code>

#### Versions

Types:

- <code><a href="./src/resources/api/v2/applications/versions.ts">ApplicationVersionRep</a></code>
- <code><a href="./src/resources/api/v2/applications/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="patch /api/v2/applications/{applicationKey}/versions/{versionKey}">client.api.v2.applications.versions.<a href="./src/resources/api/v2/applications/versions.ts">update</a>(versionKey, [ ...body ]) -> ApplicationVersionRep</code>
- <code title="get /api/v2/applications/{applicationKey}/versions">client.api.v2.applications.versions.<a href="./src/resources/api/v2/applications/versions.ts">list</a>(applicationKey, { ...params }) -> VersionListResponse</code>
- <code title="delete /api/v2/applications/{applicationKey}/versions/{versionKey}">client.api.v2.applications.versions.<a href="./src/resources/api/v2/applications/versions.ts">delete</a>(versionKey, { ...params }) -> void</code>

### ApprovalRequests

Types:

- <code><a href="./src/resources/api/v2/approval-requests.ts">ApprovalRequestResponse</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">ApprovalSettings</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">Conflict</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">CopiedFromEnv</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">CustomWorkflowMeta</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">ExpandableApprovalRequestResponse</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">ExpandedFlagRep</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">FlagConfigApprovalRequestResponse</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">IntegrationMetadata</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">PostApprovalRequestApplyRequest</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">PostApprovalRequestReviewRequest</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">ReviewResponse</a></code>
- <code><a href="./src/resources/api/v2/approval-requests.ts">ApprovalRequestRetrieveApprovalRequestsResponse</a></code>

Methods:

- <code title="get /api/v2/approval-requests/{id}">client.api.v2.approvalRequests.<a href="./src/resources/api/v2/approval-requests.ts">retrieve</a>(id, { ...params }) -> ExpandableApprovalRequestResponse</code>
- <code title="patch /api/v2/approval-requests/{id}">client.api.v2.approvalRequests.<a href="./src/resources/api/v2/approval-requests.ts">update</a>(id) -> FlagConfigApprovalRequestResponse</code>
- <code title="delete /api/v2/approval-requests/{id}">client.api.v2.approvalRequests.<a href="./src/resources/api/v2/approval-requests.ts">delete</a>(id) -> void</code>
- <code title="post /api/v2/approval-requests/{id}/apply">client.api.v2.approvalRequests.<a href="./src/resources/api/v2/approval-requests.ts">apply</a>(id, { ...params }) -> ApprovalRequestResponse</code>
- <code title="post /api/v2/approval-requests">client.api.v2.approvalRequests.<a href="./src/resources/api/v2/approval-requests.ts">approvalRequests</a>({ ...params }) -> ApprovalRequestResponse</code>
- <code title="get /api/v2/approval-requests">client.api.v2.approvalRequests.<a href="./src/resources/api/v2/approval-requests.ts">retrieveApprovalRequests</a>({ ...params }) -> ApprovalRequestRetrieveApprovalRequestsResponse</code>
- <code title="post /api/v2/approval-requests/{id}/reviews">client.api.v2.approvalRequests.<a href="./src/resources/api/v2/approval-requests.ts">reviews</a>(id, { ...params }) -> ApprovalRequestResponse</code>

### Auditlog

Types:

- <code><a href="./src/resources/api/v2/auditlog.ts">AuditLogEntryListingRep</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">AuditLogEntryListingRepCollection</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">AuthorizedAppDataRep</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">MemberDataRep</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">ParentResourceRep</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">ResourceAccess</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">StatementPost</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">SubjectDataRep</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">TargetResourceRep</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">TokenSummary</a></code>
- <code><a href="./src/resources/api/v2/auditlog.ts">AuditlogRetrieveResponse</a></code>

Methods:

- <code title="post /api/v2/auditlog">client.api.v2.auditlog.<a href="./src/resources/api/v2/auditlog.ts">create</a>([ ...body ]) -> AuditLogEntryListingRepCollection</code>
- <code title="get /api/v2/auditlog/{id}">client.api.v2.auditlog.<a href="./src/resources/api/v2/auditlog.ts">retrieve</a>(id) -> AuditlogRetrieveResponse</code>
- <code title="get /api/v2/auditlog">client.api.v2.auditlog.<a href="./src/resources/api/v2/auditlog.ts">list</a>({ ...params }) -> AuditLogEntryListingRepCollection</code>

### CodeRefs

Types:

- <code><a href="./src/resources/api/v2/code-refs/code-refs.ts">CodeRefRetrieveExtinctionsResponse</a></code>

Methods:

- <code title="get /api/v2/code-refs/extinctions">client.api.v2.codeRefs.<a href="./src/resources/api/v2/code-refs/code-refs.ts">retrieveExtinctions</a>({ ...params }) -> CodeRefRetrieveExtinctionsResponse</code>

#### Repositories

Types:

- <code><a href="./src/resources/api/v2/code-refs/repositories/repositories.ts">RepositoryRep</a></code>
- <code><a href="./src/resources/api/v2/code-refs/repositories/repositories.ts">RepositoryListResponse</a></code>

Methods:

- <code title="post /api/v2/code-refs/repositories">client.api.v2.codeRefs.repositories.<a href="./src/resources/api/v2/code-refs/repositories/repositories.ts">create</a>({ ...params }) -> RepositoryRep</code>
- <code title="get /api/v2/code-refs/repositories/{repo}">client.api.v2.codeRefs.repositories.<a href="./src/resources/api/v2/code-refs/repositories/repositories.ts">retrieve</a>(repo) -> RepositoryRep</code>
- <code title="patch /api/v2/code-refs/repositories/{repo}">client.api.v2.codeRefs.repositories.<a href="./src/resources/api/v2/code-refs/repositories/repositories.ts">update</a>(repo, [ ...body ]) -> RepositoryRep</code>
- <code title="get /api/v2/code-refs/repositories">client.api.v2.codeRefs.repositories.<a href="./src/resources/api/v2/code-refs/repositories/repositories.ts">list</a>({ ...params }) -> RepositoryListResponse</code>
- <code title="delete /api/v2/code-refs/repositories/{repo}">client.api.v2.codeRefs.repositories.<a href="./src/resources/api/v2/code-refs/repositories/repositories.ts">delete</a>(repo) -> void</code>
- <code title="post /api/v2/code-refs/repositories/{repo}/branch-delete-tasks">client.api.v2.codeRefs.repositories.<a href="./src/resources/api/v2/code-refs/repositories/repositories.ts">branchDeleteTasks</a>(repo, [ ...body ]) -> void</code>

##### Branches

Types:

- <code><a href="./src/resources/api/v2/code-refs/repositories/branches.ts">BranchRep</a></code>
- <code><a href="./src/resources/api/v2/code-refs/repositories/branches.ts">ReferenceRep</a></code>
- <code><a href="./src/resources/api/v2/code-refs/repositories/branches.ts">BranchListResponse</a></code>

Methods:

- <code title="get /api/v2/code-refs/repositories/{repo}/branches/{branch}">client.api.v2.codeRefs.repositories.branches.<a href="./src/resources/api/v2/code-refs/repositories/branches.ts">retrieve</a>(branch, { ...params }) -> BranchRep</code>
- <code title="put /api/v2/code-refs/repositories/{repo}/branches/{branch}">client.api.v2.codeRefs.repositories.branches.<a href="./src/resources/api/v2/code-refs/repositories/branches.ts">update</a>(branch, { ...params }) -> void</code>
- <code title="get /api/v2/code-refs/repositories/{repo}/branches">client.api.v2.codeRefs.repositories.branches.<a href="./src/resources/api/v2/code-refs/repositories/branches.ts">list</a>(repo) -> BranchListResponse</code>
- <code title="post /api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events">client.api.v2.codeRefs.repositories.branches.<a href="./src/resources/api/v2/code-refs/repositories/branches.ts">extinctionEvents</a>(branch, [ ...body ]) -> void</code>

#### Statistics

Types:

- <code><a href="./src/resources/api/v2/code-refs/statistics.ts">Link</a></code>
- <code><a href="./src/resources/api/v2/code-refs/statistics.ts">StatisticRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v2/code-refs/statistics.ts">StatisticListResponse</a></code>

Methods:

- <code title="get /api/v2/code-refs/statistics/{projectKey}">client.api.v2.codeRefs.statistics.<a href="./src/resources/api/v2/code-refs/statistics.ts">retrieve</a>(projectKey, { ...params }) -> StatisticRetrieveResponse</code>
- <code title="get /api/v2/code-refs/statistics">client.api.v2.codeRefs.statistics.<a href="./src/resources/api/v2/code-refs/statistics.ts">list</a>() -> StatisticListResponse</code>

### Destinations

Types:

- <code><a href="./src/resources/api/v2/destinations.ts">Destination</a></code>
- <code><a href="./src/resources/api/v2/destinations.ts">DestinationListResponse</a></code>
- <code><a href="./src/resources/api/v2/destinations.ts">DestinationGenerateWarehouseDestinationKeyPairResponse</a></code>

Methods:

- <code title="get /api/v2/destinations/{projectKey}/{environmentKey}/{id}">client.api.v2.destinations.<a href="./src/resources/api/v2/destinations.ts">retrieve</a>(id, { ...params }) -> Destination</code>
- <code title="patch /api/v2/destinations/{projectKey}/{environmentKey}/{id}">client.api.v2.destinations.<a href="./src/resources/api/v2/destinations.ts">update</a>(id, [ ...body ]) -> Destination</code>
- <code title="get /api/v2/destinations">client.api.v2.destinations.<a href="./src/resources/api/v2/destinations.ts">list</a>() -> DestinationListResponse</code>
- <code title="delete /api/v2/destinations/{projectKey}/{environmentKey}/{id}">client.api.v2.destinations.<a href="./src/resources/api/v2/destinations.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/v2/destinations/generate-warehouse-destination-key-pair">client.api.v2.destinations.<a href="./src/resources/api/v2/destinations.ts">generateWarehouseDestinationKeyPair</a>() -> DestinationGenerateWarehouseDestinationKeyPairResponse</code>

### FlagLinks

#### Projects

##### Flags

Types:

- <code><a href="./src/resources/api/v2/flag-links/projects/flags.ts">FlagLinkRep</a></code>
- <code><a href="./src/resources/api/v2/flag-links/projects/flags.ts">FlagRetrieveResponse</a></code>

Methods:

- <code title="get /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}">client.api.v2.flagLinks.projects.flags.<a href="./src/resources/api/v2/flag-links/projects/flags.ts">retrieve</a>(featureFlagKey, { ...params }) -> FlagRetrieveResponse</code>
- <code title="patch /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}">client.api.v2.flagLinks.projects.flags.<a href="./src/resources/api/v2/flag-links/projects/flags.ts">update</a>(id, [ ...body ]) -> FlagLinkRep</code>
- <code title="delete /api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}">client.api.v2.flagLinks.projects.flags.<a href="./src/resources/api/v2/flag-links/projects/flags.ts">delete</a>(id, { ...params }) -> void</code>

### FlagStatuses

Types:

- <code><a href="./src/resources/api/v2/flag-statuses.ts">FlagStatusRep</a></code>

Methods:

- <code title="get /api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey}">client.api.v2.flagStatuses.<a href="./src/resources/api/v2/flag-statuses.ts">retrieve</a>(featureFlagKey, { ...params }) -> FlagStatusRep</code>

### Flags

Types:

- <code><a href="./src/resources/api/v2/flags/flags.ts">ClientSideAvailability</a></code>
- <code><a href="./src/resources/api/v2/flags/flags.ts">Defaults</a></code>
- <code><a href="./src/resources/api/v2/flags/flags.ts">FeatureFlag</a></code>
- <code><a href="./src/resources/api/v2/flags/flags.ts">FlagCopyConfigEnvironment</a></code>
- <code><a href="./src/resources/api/v2/flags/flags.ts">Variation</a></code>

Methods:

- <code title="get /api/v2/flags/{projectKey}/{featureFlagKey}">client.api.v2.flags.<a href="./src/resources/api/v2/flags/flags.ts">retrieve</a>(featureFlagKey, { ...params }) -> FeatureFlag</code>
- <code title="patch /api/v2/flags/{projectKey}/{featureFlagKey}">client.api.v2.flags.<a href="./src/resources/api/v2/flags/flags.ts">update</a>(featureFlagKey, { ...params }) -> FeatureFlag</code>
- <code title="delete /api/v2/flags/{projectKey}/{featureFlagKey}">client.api.v2.flags.<a href="./src/resources/api/v2/flags/flags.ts">delete</a>(featureFlagKey, { ...params }) -> void</code>
- <code title="post /api/v2/flags/{projectKey}/{featureFlagKey}/copy">client.api.v2.flags.<a href="./src/resources/api/v2/flags/flags.ts">copy</a>(featureFlagKey, { ...params }) -> FeatureFlag</code>

#### DependentFlags

Types:

- <code><a href="./src/resources/api/v2/flags/dependent-flags.ts">DependentFlagRetrieveDependentFlagsResponse</a></code>

Methods:

- <code title="get /api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags">client.api.v2.flags.dependentFlags.<a href="./src/resources/api/v2/flags/dependent-flags.ts">retrieveDependentFlags</a>(featureFlagKey, { ...params }) -> DependentFlagRetrieveDependentFlagsResponse</code>

#### ExpiringTargets

Types:

- <code><a href="./src/resources/api/v2/flags/expiring-targets.ts">ExpiringTarget</a></code>
- <code><a href="./src/resources/api/v2/flags/expiring-targets.ts">ExpiringTargetError</a></code>
- <code><a href="./src/resources/api/v2/flags/expiring-targets.ts">ExpiringTargetGetResponse</a></code>
- <code><a href="./src/resources/api/v2/flags/expiring-targets.ts">ExpiringTargetPatchResponse</a></code>
- <code><a href="./src/resources/api/v2/flags/expiring-targets.ts">PatchFlagsRequest</a></code>

Methods:

- <code title="get /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}">client.api.v2.flags.expiringTargets.<a href="./src/resources/api/v2/flags/expiring-targets.ts">retrieve</a>(environmentKey, { ...params }) -> ExpiringTargetGetResponse</code>
- <code title="patch /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}">client.api.v2.flags.expiringTargets.<a href="./src/resources/api/v2/flags/expiring-targets.ts">update</a>(environmentKey, { ...params }) -> ExpiringTargetPatchResponse</code>

#### ExpiringUserTargets

Types:

- <code><a href="./src/resources/api/v2/flags/expiring-user-targets.ts">ExpiringUserTargetGetResponse</a></code>
- <code><a href="./src/resources/api/v2/flags/expiring-user-targets.ts">ExpiringUserTargetItem</a></code>
- <code><a href="./src/resources/api/v2/flags/expiring-user-targets.ts">ExpiringUserTargetPatchResponse</a></code>

Methods:

- <code title="get /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}">client.api.v2.flags.expiringUserTargets.<a href="./src/resources/api/v2/flags/expiring-user-targets.ts">retrieve</a>(environmentKey, { ...params }) -> ExpiringUserTargetGetResponse</code>
- <code title="patch /api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}">client.api.v2.flags.expiringUserTargets.<a href="./src/resources/api/v2/flags/expiring-user-targets.ts">update</a>(environmentKey, { ...params }) -> ExpiringUserTargetPatchResponse</code>

#### Triggers

Types:

- <code><a href="./src/resources/api/v2/flags/triggers.ts">TriggerWorkflowRep</a></code>

Methods:

- <code title="get /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}">client.api.v2.flags.triggers.<a href="./src/resources/api/v2/flags/triggers.ts">retrieve</a>(id, { ...params }) -> TriggerWorkflowRep</code>
- <code title="patch /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}">client.api.v2.flags.triggers.<a href="./src/resources/api/v2/flags/triggers.ts">update</a>(id, { ...params }) -> TriggerWorkflowRep</code>
- <code title="delete /api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}">client.api.v2.flags.triggers.<a href="./src/resources/api/v2/flags/triggers.ts">delete</a>(id, { ...params }) -> void</code>

#### Release

Types:

- <code><a href="./src/resources/api/v2/flags/release.ts">AudienceConfiguration</a></code>
- <code><a href="./src/resources/api/v2/flags/release.ts">EnvironmentSummary</a></code>
- <code><a href="./src/resources/api/v2/flags/release.ts">PhaseConfiguration</a></code>
- <code><a href="./src/resources/api/v2/flags/release.ts">Release</a></code>

Methods:

- <code title="get /api/v2/flags/{projectKey}/{flagKey}/release">client.api.v2.flags.release.<a href="./src/resources/api/v2/flags/release.ts">list</a>(flagKey, { ...params }) -> Release</code>
- <code title="delete /api/v2/flags/{projectKey}/{flagKey}/release">client.api.v2.flags.release.<a href="./src/resources/api/v2/flags/release.ts">deleteAll</a>(flagKey, { ...params }) -> void</code>
- <code title="patch /api/v2/flags/{projectKey}/{flagKey}/release">client.api.v2.flags.release.<a href="./src/resources/api/v2/flags/release.ts">patchAll</a>(flagKey, [ ...body ]) -> Release</code>

### IntegrationCapabilities

#### BigSegmentStore

Types:

- <code><a href="./src/resources/api/v2/integration-capabilities/big-segment-store.ts">BigSegmentStoreIntegration</a></code>
- <code><a href="./src/resources/api/v2/integration-capabilities/big-segment-store.ts">IntegrationDeliveryConfigurationPost</a></code>
- <code><a href="./src/resources/api/v2/integration-capabilities/big-segment-store.ts">BigSegmentStoreRetrieveBigSegmentStoreResponse</a></code>

Methods:

- <code title="get /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}">client.api.v2.integrationCapabilities.bigSegmentStore.<a href="./src/resources/api/v2/integration-capabilities/big-segment-store.ts">retrieve</a>(integrationID, { ...params }) -> BigSegmentStoreIntegration</code>
- <code title="patch /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}">client.api.v2.integrationCapabilities.bigSegmentStore.<a href="./src/resources/api/v2/integration-capabilities/big-segment-store.ts">update</a>(integrationID, [ ...body ]) -> BigSegmentStoreIntegration</code>
- <code title="delete /api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}">client.api.v2.integrationCapabilities.bigSegmentStore.<a href="./src/resources/api/v2/integration-capabilities/big-segment-store.ts">delete</a>(integrationID, { ...params }) -> void</code>
- <code title="get /api/v2/integration-capabilities/big-segment-store">client.api.v2.integrationCapabilities.bigSegmentStore.<a href="./src/resources/api/v2/integration-capabilities/big-segment-store.ts">retrieveBigSegmentStore</a>() -> BigSegmentStoreRetrieveBigSegmentStoreResponse</code>

#### FeatureStore

Types:

- <code><a href="./src/resources/api/v2/integration-capabilities/feature-store.ts">IntegrationDeliveryConfiguration</a></code>
- <code><a href="./src/resources/api/v2/integration-capabilities/feature-store.ts">IntegrationDeliveryConfigurationCollection</a></code>
- <code><a href="./src/resources/api/v2/integration-capabilities/feature-store.ts">FeatureStoreValidateResponse</a></code>

Methods:

- <code title="get /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}">client.api.v2.integrationCapabilities.featureStore.<a href="./src/resources/api/v2/integration-capabilities/feature-store.ts">retrieve</a>(id, { ...params }) -> IntegrationDeliveryConfiguration</code>
- <code title="patch /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}">client.api.v2.integrationCapabilities.featureStore.<a href="./src/resources/api/v2/integration-capabilities/feature-store.ts">update</a>(id, [ ...body ]) -> IntegrationDeliveryConfiguration</code>
- <code title="delete /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}">client.api.v2.integrationCapabilities.featureStore.<a href="./src/resources/api/v2/integration-capabilities/feature-store.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /api/v2/integration-capabilities/featureStore">client.api.v2.integrationCapabilities.featureStore.<a href="./src/resources/api/v2/integration-capabilities/feature-store.ts">retrieveFeatureStore</a>() -> IntegrationDeliveryConfigurationCollection</code>
- <code title="post /api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate">client.api.v2.integrationCapabilities.featureStore.<a href="./src/resources/api/v2/integration-capabilities/feature-store.ts">validate</a>(id, { ...params }) -> FeatureStoreValidateResponse</code>

#### FlagImport

Types:

- <code><a href="./src/resources/api/v2/integration-capabilities/flag-import.ts">FlagImportIntegration</a></code>
- <code><a href="./src/resources/api/v2/integration-capabilities/flag-import.ts">FlagImportRetrieveFlagImportResponse</a></code>

Methods:

- <code title="get /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}">client.api.v2.integrationCapabilities.flagImport.<a href="./src/resources/api/v2/integration-capabilities/flag-import.ts">retrieve</a>(integrationID, { ...params }) -> FlagImportIntegration</code>
- <code title="patch /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}">client.api.v2.integrationCapabilities.flagImport.<a href="./src/resources/api/v2/integration-capabilities/flag-import.ts">update</a>(integrationID, [ ...body ]) -> FlagImportIntegration</code>
- <code title="delete /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}">client.api.v2.integrationCapabilities.flagImport.<a href="./src/resources/api/v2/integration-capabilities/flag-import.ts">delete</a>(integrationID, { ...params }) -> void</code>
- <code title="get /api/v2/integration-capabilities/flag-import">client.api.v2.integrationCapabilities.flagImport.<a href="./src/resources/api/v2/integration-capabilities/flag-import.ts">retrieveFlagImport</a>() -> FlagImportRetrieveFlagImportResponse</code>
- <code title="post /api/v2/integration-capabilities/flag-import/{projectKey}/{integrationKey}/{integrationId}/trigger">client.api.v2.integrationCapabilities.flagImport.<a href="./src/resources/api/v2/integration-capabilities/flag-import.ts">trigger</a>(integrationID, { ...params }) -> void</code>

### IntegrationConfigurations

Methods:

- <code title="get /api/v2/integration-configurations/{integrationConfigurationId}">client.api.v2.integrationConfigurations.<a href="./src/resources/api/v2/integration-configurations/integration-configurations.ts">retrieve</a>(integrationConfigurationID) -> IntegrationConfigurationsRep</code>
- <code title="patch /api/v2/integration-configurations/{integrationConfigurationId}">client.api.v2.integrationConfigurations.<a href="./src/resources/api/v2/integration-configurations/integration-configurations.ts">update</a>(integrationConfigurationID, [ ...body ]) -> IntegrationConfigurationsRep</code>
- <code title="delete /api/v2/integration-configurations/{integrationConfigurationId}">client.api.v2.integrationConfigurations.<a href="./src/resources/api/v2/integration-configurations/integration-configurations.ts">delete</a>(integrationConfigurationID) -> void</code>

#### Keys

Types:

- <code><a href="./src/resources/api/v2/integration-configurations/keys.ts">ApprovalsCapabilityConfig</a></code>
- <code><a href="./src/resources/api/v2/integration-configurations/keys.ts">IntegrationConfigurationsRep</a></code>
- <code><a href="./src/resources/api/v2/integration-configurations/keys.ts">KeyRetrieveResponse</a></code>

Methods:

- <code title="get /api/v2/integration-configurations/keys/{integrationKey}">client.api.v2.integrationConfigurations.keys.<a href="./src/resources/api/v2/integration-configurations/keys.ts">retrieve</a>(integrationKey) -> KeyRetrieveResponse</code>
- <code title="post /api/v2/integration-configurations/keys/{integrationKey}">client.api.v2.integrationConfigurations.keys.<a href="./src/resources/api/v2/integration-configurations/keys.ts">update</a>(integrationKey, { ...params }) -> IntegrationConfigurationsRep</code>

### Integrations

Types:

- <code><a href="./src/resources/api/v2/integrations.ts">Integration</a></code>

Methods:

- <code title="get /api/v2/integrations/{integrationKey}/{id}">client.api.v2.integrations.<a href="./src/resources/api/v2/integrations.ts">retrieve</a>(id, { ...params }) -> Integration</code>
- <code title="patch /api/v2/integrations/{integrationKey}/{id}">client.api.v2.integrations.<a href="./src/resources/api/v2/integrations.ts">update</a>(id, [ ...body ]) -> Integration</code>
- <code title="delete /api/v2/integrations/{integrationKey}/{id}">client.api.v2.integrations.<a href="./src/resources/api/v2/integrations.ts">delete</a>(id, { ...params }) -> void</code>

### Members

Types:

- <code><a href="./src/resources/api/v2/members.ts">Member</a></code>
- <code><a href="./src/resources/api/v2/members.ts">MemberTeamSummaryRep</a></code>
- <code><a href="./src/resources/api/v2/members.ts">Members</a></code>
- <code><a href="./src/resources/api/v2/members.ts">MemberPatchAllResponse</a></code>

Methods:

- <code title="post /api/v2/members">client.api.v2.members.<a href="./src/resources/api/v2/members.ts">create</a>([ ...body ]) -> Members</code>
- <code title="get /api/v2/members/{id}">client.api.v2.members.<a href="./src/resources/api/v2/members.ts">retrieve</a>(id, { ...params }) -> Member</code>
- <code title="patch /api/v2/members/{id}">client.api.v2.members.<a href="./src/resources/api/v2/members.ts">update</a>(id, [ ...body ]) -> Member</code>
- <code title="get /api/v2/members">client.api.v2.members.<a href="./src/resources/api/v2/members.ts">list</a>({ ...params }) -> Members</code>
- <code title="delete /api/v2/members/{id}">client.api.v2.members.<a href="./src/resources/api/v2/members.ts">delete</a>(id) -> void</code>
- <code title="patch /api/v2/members">client.api.v2.members.<a href="./src/resources/api/v2/members.ts">patchAll</a>({ ...params }) -> MemberPatchAllResponse</code>
- <code title="post /api/v2/members/{id}/teams">client.api.v2.members.<a href="./src/resources/api/v2/members.ts">teams</a>(id, { ...params }) -> Member</code>

### Metrics

Types:

- <code><a href="./src/resources/api/v2/metrics.ts">DependentExperimentRep</a></code>
- <code><a href="./src/resources/api/v2/metrics.ts">Filter</a></code>
- <code><a href="./src/resources/api/v2/metrics.ts">FlagListingRep</a></code>
- <code><a href="./src/resources/api/v2/metrics.ts">MetricEventDefaultRep</a></code>
- <code><a href="./src/resources/api/v2/metrics.ts">MetricListingRep</a></code>
- <code><a href="./src/resources/api/v2/metrics.ts">MetricRep</a></code>
- <code><a href="./src/resources/api/v2/metrics.ts">Modification</a></code>

Methods:

- <code title="get /api/v2/metrics/{projectKey}/{metricKey}">client.api.v2.metrics.<a href="./src/resources/api/v2/metrics.ts">retrieve</a>(metricKey, { ...params }) -> MetricRep</code>
- <code title="patch /api/v2/metrics/{projectKey}/{metricKey}">client.api.v2.metrics.<a href="./src/resources/api/v2/metrics.ts">update</a>(metricKey, [ ...body ]) -> MetricRep</code>
- <code title="delete /api/v2/metrics/{projectKey}/{metricKey}">client.api.v2.metrics.<a href="./src/resources/api/v2/metrics.ts">delete</a>(metricKey, { ...params }) -> void</code>

### OAuth

#### Clients

Types:

- <code><a href="./src/resources/api/v2/oauth/clients.ts">Client</a></code>
- <code><a href="./src/resources/api/v2/oauth/clients.ts">ClientListResponse</a></code>

Methods:

- <code title="post /api/v2/oauth/clients">client.api.v2.oauth.clients.<a href="./src/resources/api/v2/oauth/clients.ts">create</a>({ ...params }) -> Client</code>
- <code title="get /api/v2/oauth/clients/{clientId}">client.api.v2.oauth.clients.<a href="./src/resources/api/v2/oauth/clients.ts">retrieve</a>(clientID) -> Client</code>
- <code title="patch /api/v2/oauth/clients/{clientId}">client.api.v2.oauth.clients.<a href="./src/resources/api/v2/oauth/clients.ts">update</a>(clientID, [ ...body ]) -> Client</code>
- <code title="get /api/v2/oauth/clients">client.api.v2.oauth.clients.<a href="./src/resources/api/v2/oauth/clients.ts">list</a>() -> ClientListResponse</code>
- <code title="delete /api/v2/oauth/clients/{clientId}">client.api.v2.oauth.clients.<a href="./src/resources/api/v2/oauth/clients.ts">delete</a>(clientID) -> void</code>

### Projects

Types:

- <code><a href="./src/resources/api/v2/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/api/v2/projects/projects.ts">ProjectRep</a></code>
- <code><a href="./src/resources/api/v2/projects/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /api/v2/projects">client.api.v2.projects.<a href="./src/resources/api/v2/projects/projects.ts">create</a>({ ...params }) -> ProjectRep</code>
- <code title="get /api/v2/projects/{projectKey}">client.api.v2.projects.<a href="./src/resources/api/v2/projects/projects.ts">retrieve</a>(projectKey, { ...params }) -> Project</code>
- <code title="patch /api/v2/projects/{projectKey}">client.api.v2.projects.<a href="./src/resources/api/v2/projects/projects.ts">update</a>(projectKey, [ ...body ]) -> ProjectRep</code>
- <code title="get /api/v2/projects">client.api.v2.projects.<a href="./src/resources/api/v2/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /api/v2/projects/{projectKey}">client.api.v2.projects.<a href="./src/resources/api/v2/projects/projects.ts">delete</a>(projectKey) -> void</code>

#### ContextKinds

Types:

- <code><a href="./src/resources/api/v2/projects/context-kinds.ts">ContextKindUpdateResponse</a></code>
- <code><a href="./src/resources/api/v2/projects/context-kinds.ts">ContextKindRetrieveContextKindsResponse</a></code>

Methods:

- <code title="put /api/v2/projects/{projectKey}/context-kinds/{key}">client.api.v2.projects.contextKinds.<a href="./src/resources/api/v2/projects/context-kinds.ts">update</a>(key, { ...params }) -> ContextKindUpdateResponse</code>
- <code title="get /api/v2/projects/{projectKey}/context-kinds">client.api.v2.projects.contextKinds.<a href="./src/resources/api/v2/projects/context-kinds.ts">retrieveContextKinds</a>(projectKey) -> ContextKindRetrieveContextKindsResponse</code>

#### Environments

Types:

- <code><a href="./src/resources/api/v2/projects/environments/environments.ts">Environment</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/environments.ts">EnvironmentPost</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/environments.ts">Environments</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/environments.ts">EnvironmentRetrieveFollowersResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/environments">client.api.v2.projects.environments.<a href="./src/resources/api/v2/projects/environments/environments.ts">create</a>(projectKey, { ...params }) -> Environment</code>
- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}">client.api.v2.projects.environments.<a href="./src/resources/api/v2/projects/environments/environments.ts">retrieve</a>(environmentKey, { ...params }) -> Environment</code>
- <code title="patch /api/v2/projects/{projectKey}/environments/{environmentKey}">client.api.v2.projects.environments.<a href="./src/resources/api/v2/projects/environments/environments.ts">update</a>(environmentKey, [ ...body ]) -> Environment</code>
- <code title="get /api/v2/projects/{projectKey}/environments">client.api.v2.projects.environments.<a href="./src/resources/api/v2/projects/environments/environments.ts">list</a>(projectKey, { ...params }) -> Environments</code>
- <code title="delete /api/v2/projects/{projectKey}/environments/{environmentKey}">client.api.v2.projects.environments.<a href="./src/resources/api/v2/projects/environments/environments.ts">delete</a>(environmentKey, { ...params }) -> void</code>
- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey">client.api.v2.projects.environments.<a href="./src/resources/api/v2/projects/environments/environments.ts">apiKey</a>(environmentKey, { ...params }) -> Environment</code>
- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/mobileKey">client.api.v2.projects.environments.<a href="./src/resources/api/v2/projects/environments/environments.ts">mobileKey</a>(environmentKey, { ...params }) -> Environment</code>
- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/followers">client.api.v2.projects.environments.<a href="./src/resources/api/v2/projects/environments/environments.ts">retrieveFollowers</a>(environmentKey, { ...params }) -> EnvironmentRetrieveFollowersResponse</code>

##### ContextAttributes

Types:

- <code><a href="./src/resources/api/v2/projects/environments/context-attributes.ts">ContextAttributeRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/context-attributes.ts">ContextAttributeRetrieveContextAttributesResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName}">client.api.v2.projects.environments.contextAttributes.<a href="./src/resources/api/v2/projects/environments/context-attributes.ts">retrieve</a>(attributeName, { ...params }) -> ContextAttributeRetrieveResponse</code>
- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes">client.api.v2.projects.environments.contextAttributes.<a href="./src/resources/api/v2/projects/environments/context-attributes.ts">retrieveContextAttributes</a>(environmentKey, { ...params }) -> ContextAttributeRetrieveContextAttributesResponse</code>

##### ContextInstances

Types:

- <code><a href="./src/resources/api/v2/projects/environments/context-instances.ts">ContextInstances</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}">client.api.v2.projects.environments.contextInstances.<a href="./src/resources/api/v2/projects/environments/context-instances.ts">retrieve</a>(id, { ...params }) -> ContextInstances</code>
- <code title="delete /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}">client.api.v2.projects.environments.contextInstances.<a href="./src/resources/api/v2/projects/environments/context-instances.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search">client.api.v2.projects.environments.contextInstances.<a href="./src/resources/api/v2/projects/environments/context-instances.ts">search</a>(environmentKey, { ...params }) -> ContextInstances</code>

##### Contexts

Types:

- <code><a href="./src/resources/api/v2/projects/environments/contexts.ts">Contexts</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/contexts.ts">ValuePut</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key}">client.api.v2.projects.environments.contexts.<a href="./src/resources/api/v2/projects/environments/contexts.ts">retrieve</a>(key, { ...params }) -> Contexts</code>
- <code title="put /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey}">client.api.v2.projects.environments.contexts.<a href="./src/resources/api/v2/projects/environments/contexts.ts">update</a>(featureFlagKey, { ...params }) -> void</code>
- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search">client.api.v2.projects.environments.contexts.<a href="./src/resources/api/v2/projects/environments/contexts.ts">search</a>(environmentKey, { ...params }) -> Contexts</code>

##### Experiments

Types:

- <code><a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">DependentMetricOrMetricGroupRep</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">Experiment</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">IterationInput</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">IterationRep</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">MetricV2Rep</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">ExperimentListResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments">client.api.v2.projects.environments.experiments.<a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">create</a>(environmentKey, { ...params }) -> Experiment</code>
- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}">client.api.v2.projects.environments.experiments.<a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">retrieve</a>(experimentKey, { ...params }) -> Experiment</code>
- <code title="patch /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}">client.api.v2.projects.environments.experiments.<a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">update</a>(experimentKey, { ...params }) -> Experiment</code>
- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments">client.api.v2.projects.environments.experiments.<a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">list</a>(environmentKey, { ...params }) -> ExperimentListResponse</code>
- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations">client.api.v2.projects.environments.experiments.<a href="./src/resources/api/v2/projects/environments/experiments/experiments.ts">iterations</a>(experimentKey, { ...params }) -> IterationRep</code>

###### MetricGroups

Types:

- <code><a href="./src/resources/api/v2/projects/environments/experiments/metric-groups.ts">MetricGroupRetrieveResultsResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metric-groups/{metricGroupKey}/results">client.api.v2.projects.environments.experiments.metricGroups.<a href="./src/resources/api/v2/projects/environments/experiments/metric-groups.ts">retrieveResults</a>(metricGroupKey, { ...params }) -> MetricGroupRetrieveResultsResponse</code>

###### Metrics

Types:

- <code><a href="./src/resources/api/v2/projects/environments/experiments/metrics.ts">ExperimentBayesianResultsRep</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/experiments/metrics.ts">TreatmentResultRep</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metrics/{metricKey}/results">client.api.v2.projects.environments.experiments.metrics.<a href="./src/resources/api/v2/projects/environments/experiments/metrics.ts">retrieveResults</a>(metricKey, { ...params }) -> ExperimentBayesianResultsRep</code>

##### Flags

Types:

- <code><a href="./src/resources/api/v2/projects/environments/flags.ts">FlagEvaluateResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate">client.api.v2.projects.environments.flags.<a href="./src/resources/api/v2/projects/environments/flags.ts">evaluate</a>(environmentKey, { ...params }) -> FlagEvaluateResponse</code>

##### Holdouts

Types:

- <code><a href="./src/resources/api/v2/projects/environments/holdouts.ts">HoldoutRep</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/holdouts.ts">MetricInput</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/holdouts.ts">RelatedExperimentRep</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/holdouts.ts">HoldoutRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v2/projects/environments/holdouts.ts">HoldoutListResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts">client.api.v2.projects.environments.holdouts.<a href="./src/resources/api/v2/projects/environments/holdouts.ts">create</a>(environmentKey, { ...params }) -> HoldoutRep</code>
- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}">client.api.v2.projects.environments.holdouts.<a href="./src/resources/api/v2/projects/environments/holdouts.ts">retrieve</a>(holdoutKey, { ...params }) -> HoldoutRetrieveResponse</code>
- <code title="patch /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts/{holdoutKey}">client.api.v2.projects.environments.holdouts.<a href="./src/resources/api/v2/projects/environments/holdouts.ts">update</a>(holdoutKey, { ...params }) -> HoldoutRep</code>
- <code title="get /api/v2/projects/{projectKey}/environments/{environmentKey}/holdouts">client.api.v2.projects.environments.holdouts.<a href="./src/resources/api/v2/projects/environments/holdouts.ts">list</a>(environmentKey, { ...params }) -> HoldoutListResponse</code>

##### Segments

Types:

- <code><a href="./src/resources/api/v2/projects/environments/segments.ts">SegmentEvaluateResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate">client.api.v2.projects.environments.segments.<a href="./src/resources/api/v2/projects/environments/segments.ts">evaluate</a>(environmentKey, { ...params }) -> SegmentEvaluateResponse</code>

#### ExperimentationSettings

Types:

- <code><a href="./src/resources/api/v2/projects/experimentation-settings.ts">RandomizationSettingsRep</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/experimentation-settings">client.api.v2.projects.experimentationSettings.<a href="./src/resources/api/v2/projects/experimentation-settings.ts">retrieveExperimentationSettings</a>(projectKey) -> RandomizationSettingsRep</code>
- <code title="put /api/v2/projects/{projectKey}/experimentation-settings">client.api.v2.projects.experimentationSettings.<a href="./src/resources/api/v2/projects/experimentation-settings.ts">updateExperimentationSettings</a>(projectKey, { ...params }) -> RandomizationSettingsRep</code>

#### FlagDefaults

Types:

- <code><a href="./src/resources/api/v2/projects/flag-defaults.ts">BooleanFlagDefaults</a></code>
- <code><a href="./src/resources/api/v2/projects/flag-defaults.ts">DefaultClientSideAvailability</a></code>
- <code><a href="./src/resources/api/v2/projects/flag-defaults.ts">UpsertPayloadRep</a></code>
- <code><a href="./src/resources/api/v2/projects/flag-defaults.ts">FlagDefaultRetrieveFlagDefaultsResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/flag-defaults">client.api.v2.projects.flagDefaults.<a href="./src/resources/api/v2/projects/flag-defaults.ts">retrieveFlagDefaults</a>(projectKey) -> FlagDefaultRetrieveFlagDefaultsResponse</code>
- <code title="put /api/v2/projects/{projectKey}/flag-defaults">client.api.v2.projects.flagDefaults.<a href="./src/resources/api/v2/projects/flag-defaults.ts">updateFlagDefaults</a>(projectKey, { ...params }) -> UpsertPayloadRep</code>

#### Flags

##### Environments

Types:

- <code><a href="./src/resources/api/v2/projects/flags/environments/environments.ts">EnvironmentMigrationSafetyIssuesResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy">client.api.v2.projects.flags.environments.<a href="./src/resources/api/v2/projects/flags/environments/environments.ts">approvalRequestsFlagCopy</a>(environmentKey, { ...params }) -> FlagConfigApprovalRequestResponse</code>
- <code title="post /api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/migration-safety-issues">client.api.v2.projects.flags.environments.<a href="./src/resources/api/v2/projects/flags/environments/environments.ts">migrationSafetyIssues</a>(environmentKey, { ...params }) -> EnvironmentMigrationSafetyIssuesResponse</code>

###### ApprovalRequests

Types:

- <code><a href="./src/resources/api/v2/projects/flags/environments/approval-requests.ts">ApprovalRequestRetrieveApprovalRequestsResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}">client.api.v2.projects.flags.environments.approvalRequests.<a href="./src/resources/api/v2/projects/flags/environments/approval-requests.ts">retrieve</a>(id, { ...params }) -> FlagConfigApprovalRequestResponse</code>
- <code title="patch /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}">client.api.v2.projects.flags.environments.approvalRequests.<a href="./src/resources/api/v2/projects/flags/environments/approval-requests.ts">update</a>(id, { ...params }) -> FlagConfigApprovalRequestResponse</code>
- <code title="delete /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}">client.api.v2.projects.flags.environments.approvalRequests.<a href="./src/resources/api/v2/projects/flags/environments/approval-requests.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply">client.api.v2.projects.flags.environments.approvalRequests.<a href="./src/resources/api/v2/projects/flags/environments/approval-requests.ts">apply</a>(id, { ...params }) -> FlagConfigApprovalRequestResponse</code>
- <code title="post /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests">client.api.v2.projects.flags.environments.approvalRequests.<a href="./src/resources/api/v2/projects/flags/environments/approval-requests.ts">approvalRequests</a>(environmentKey, { ...params }) -> FlagConfigApprovalRequestResponse</code>
- <code title="get /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests">client.api.v2.projects.flags.environments.approvalRequests.<a href="./src/resources/api/v2/projects/flags/environments/approval-requests.ts">retrieveApprovalRequests</a>(environmentKey, { ...params }) -> ApprovalRequestRetrieveApprovalRequestsResponse</code>
- <code title="post /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews">client.api.v2.projects.flags.environments.approvalRequests.<a href="./src/resources/api/v2/projects/flags/environments/approval-requests.ts">reviews</a>(id, { ...params }) -> FlagConfigApprovalRequestResponse</code>

###### Followers

Types:

- <code><a href="./src/resources/api/v2/projects/flags/environments/followers.ts">FollowFlagMember</a></code>
- <code><a href="./src/resources/api/v2/projects/flags/environments/followers.ts">FollowerListResponse</a></code>

Methods:

- <code title="put /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId}">client.api.v2.projects.flags.environments.followers.<a href="./src/resources/api/v2/projects/flags/environments/followers.ts">update</a>(memberID, { ...params }) -> void</code>
- <code title="get /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers">client.api.v2.projects.flags.environments.followers.<a href="./src/resources/api/v2/projects/flags/environments/followers.ts">list</a>(environmentKey, { ...params }) -> FollowerListResponse</code>
- <code title="delete /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId}">client.api.v2.projects.flags.environments.followers.<a href="./src/resources/api/v2/projects/flags/environments/followers.ts">delete</a>(memberID, { ...params }) -> void</code>

###### ScheduledChanges

Types:

- <code><a href="./src/resources/api/v2/projects/flags/environments/scheduled-changes.ts">FeatureFlagScheduledChange</a></code>
- <code><a href="./src/resources/api/v2/projects/flags/environments/scheduled-changes.ts">ScheduledChangeRetrieveScheduledChangesResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}">client.api.v2.projects.flags.environments.scheduledChanges.<a href="./src/resources/api/v2/projects/flags/environments/scheduled-changes.ts">retrieve</a>(id, { ...params }) -> FeatureFlagScheduledChange</code>
- <code title="patch /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}">client.api.v2.projects.flags.environments.scheduledChanges.<a href="./src/resources/api/v2/projects/flags/environments/scheduled-changes.ts">update</a>(id, { ...params }) -> FeatureFlagScheduledChange</code>
- <code title="delete /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}">client.api.v2.projects.flags.environments.scheduledChanges.<a href="./src/resources/api/v2/projects/flags/environments/scheduled-changes.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes">client.api.v2.projects.flags.environments.scheduledChanges.<a href="./src/resources/api/v2/projects/flags/environments/scheduled-changes.ts">retrieveScheduledChanges</a>(environmentKey, { ...params }) -> ScheduledChangeRetrieveScheduledChangesResponse</code>
- <code title="post /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes">client.api.v2.projects.flags.environments.scheduledChanges.<a href="./src/resources/api/v2/projects/flags/environments/scheduled-changes.ts">scheduledChanges</a>(environmentKey, { ...params }) -> FeatureFlagScheduledChange</code>

###### Workflows

Types:

- <code><a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">CustomWorkflowOutput</a></code>
- <code><a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">ExecutionOutput</a></code>
- <code><a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">StageInput</a></code>
- <code><a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">StageOutput</a></code>
- <code><a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">WorkflowListResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows">client.api.v2.projects.flags.environments.workflows.<a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">create</a>(environmentKey, { ...params }) -> CustomWorkflowOutput</code>
- <code title="get /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}">client.api.v2.projects.flags.environments.workflows.<a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">retrieve</a>(workflowID, { ...params }) -> CustomWorkflowOutput</code>
- <code title="get /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows">client.api.v2.projects.flags.environments.workflows.<a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">list</a>(environmentKey, { ...params }) -> WorkflowListResponse</code>
- <code title="delete /api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}">client.api.v2.projects.flags.environments.workflows.<a href="./src/resources/api/v2/projects/flags/environments/workflows.ts">delete</a>(workflowID, { ...params }) -> void</code>

##### Release

Methods:

- <code title="put /api/v2/projects/{projectKey}/flags/{flagKey}/release">client.api.v2.projects.flags.release.<a href="./src/resources/api/v2/projects/flags/release.ts">create</a>(flagKey, { ...params }) -> Release</code>
- <code title="put /api/v2/projects/{projectKey}/flags/{flagKey}/release/phases/{phaseId}">client.api.v2.projects.flags.release.<a href="./src/resources/api/v2/projects/flags/release.ts">update</a>(phaseID, { ...params }) -> Release</code>

#### Layers

Types:

- <code><a href="./src/resources/api/v2/projects/layers.ts">LayerRep</a></code>
- <code><a href="./src/resources/api/v2/projects/layers.ts">LayerListResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/layers">client.api.v2.projects.layers.<a href="./src/resources/api/v2/projects/layers.ts">create</a>(projectKey, { ...params }) -> LayerRep</code>
- <code title="patch /api/v2/projects/{projectKey}/layers/{layerKey}">client.api.v2.projects.layers.<a href="./src/resources/api/v2/projects/layers.ts">update</a>(layerKey, { ...params }) -> LayerRep</code>
- <code title="get /api/v2/projects/{projectKey}/layers">client.api.v2.projects.layers.<a href="./src/resources/api/v2/projects/layers.ts">list</a>(projectKey, { ...params }) -> LayerListResponse</code>

#### MetricGroups

Types:

- <code><a href="./src/resources/api/v2/projects/metric-groups.ts">MetricGroupRep</a></code>
- <code><a href="./src/resources/api/v2/projects/metric-groups.ts">MetricInGroupRep</a></code>
- <code><a href="./src/resources/api/v2/projects/metric-groups.ts">MetricGroupRetrieveMetricGroupsResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}">client.api.v2.projects.metricGroups.<a href="./src/resources/api/v2/projects/metric-groups.ts">retrieve</a>(metricGroupKey, { ...params }) -> MetricGroupRep</code>
- <code title="patch /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}">client.api.v2.projects.metricGroups.<a href="./src/resources/api/v2/projects/metric-groups.ts">update</a>(metricGroupKey, [ ...body ]) -> MetricGroupRep</code>
- <code title="delete /api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}">client.api.v2.projects.metricGroups.<a href="./src/resources/api/v2/projects/metric-groups.ts">delete</a>(metricGroupKey, { ...params }) -> void</code>
- <code title="post /api/v2/projects/{projectKey}/metric-groups">client.api.v2.projects.metricGroups.<a href="./src/resources/api/v2/projects/metric-groups.ts">metricGroups</a>(projectKey, { ...params }) -> MetricGroupRep</code>
- <code title="get /api/v2/projects/{projectKey}/metric-groups">client.api.v2.projects.metricGroups.<a href="./src/resources/api/v2/projects/metric-groups.ts">retrieveMetricGroups</a>(projectKey, { ...params }) -> MetricGroupRetrieveMetricGroupsResponse</code>

#### ReleasePipelines

Types:

- <code><a href="./src/resources/api/v2/projects/release-pipelines.ts">CreatePhaseInput</a></code>
- <code><a href="./src/resources/api/v2/projects/release-pipelines.ts">ReleasePipeline</a></code>
- <code><a href="./src/resources/api/v2/projects/release-pipelines.ts">ReleasePipelineRetrieveReleasePipelinesResponse</a></code>
- <code><a href="./src/resources/api/v2/projects/release-pipelines.ts">ReleasePipelineRetrieveReleasesResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}">client.api.v2.projects.releasePipelines.<a href="./src/resources/api/v2/projects/release-pipelines.ts">retrieve</a>(pipelineKey, { ...params }) -> ReleasePipeline</code>
- <code title="put /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}">client.api.v2.projects.releasePipelines.<a href="./src/resources/api/v2/projects/release-pipelines.ts">update</a>(pipelineKey, { ...params }) -> ReleasePipeline</code>
- <code title="delete /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}">client.api.v2.projects.releasePipelines.<a href="./src/resources/api/v2/projects/release-pipelines.ts">delete</a>(pipelineKey, { ...params }) -> void</code>
- <code title="post /api/v2/projects/{projectKey}/release-pipelines">client.api.v2.projects.releasePipelines.<a href="./src/resources/api/v2/projects/release-pipelines.ts">releasePipelines</a>(projectKey, { ...params }) -> ReleasePipeline</code>
- <code title="get /api/v2/projects/{projectKey}/release-pipelines">client.api.v2.projects.releasePipelines.<a href="./src/resources/api/v2/projects/release-pipelines.ts">retrieveReleasePipelines</a>(projectKey, { ...params }) -> ReleasePipelineRetrieveReleasePipelinesResponse</code>
- <code title="get /api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}/releases">client.api.v2.projects.releasePipelines.<a href="./src/resources/api/v2/projects/release-pipelines.ts">retrieveReleases</a>(pipelineKey, { ...params }) -> ReleasePipelineRetrieveReleasesResponse</code>

#### AIConfigs

Types:

- <code><a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">AIConfig</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">AIConfigsAccess</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">AIConfigsLink</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">CoreLink</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">Metrics</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">AIConfigRetrieveAIConfigsResponse</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">AIConfigRetrieveMetricsByVariationResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/ai-configs/{configKey}">client.api.v2.projects.aiConfigs.<a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">retrieve</a>(configKey, { ...params }) -> AIConfig</code>
- <code title="patch /api/v2/projects/{projectKey}/ai-configs/{configKey}">client.api.v2.projects.aiConfigs.<a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">update</a>(configKey, { ...params }) -> AIConfig</code>
- <code title="delete /api/v2/projects/{projectKey}/ai-configs/{configKey}">client.api.v2.projects.aiConfigs.<a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">delete</a>(configKey, { ...params }) -> void</code>
- <code title="post /api/v2/projects/{projectKey}/ai-configs">client.api.v2.projects.aiConfigs.<a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">aiConfigs</a>(projectKey, { ...params }) -> AIConfig</code>
- <code title="get /api/v2/projects/{projectKey}/ai-configs">client.api.v2.projects.aiConfigs.<a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">retrieveAIConfigs</a>(projectKey, { ...params }) -> AIConfigRetrieveAIConfigsResponse</code>
- <code title="get /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics">client.api.v2.projects.aiConfigs.<a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">retrieveMetrics</a>(configKey, { ...params }) -> Metrics</code>
- <code title="get /api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics-by-variation">client.api.v2.projects.aiConfigs.<a href="./src/resources/api/v2/projects/ai-configs/ai-configs.ts">retrieveMetricsByVariation</a>(configKey, { ...params }) -> AIConfigRetrieveMetricsByVariationResponse</code>

##### Variations

Types:

- <code><a href="./src/resources/api/v2/projects/ai-configs/variations.ts">AIConfigVariation</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/variations.ts">Message</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/variations.ts">VariationRetrieveResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations">client.api.v2.projects.aiConfigs.variations.<a href="./src/resources/api/v2/projects/ai-configs/variations.ts">create</a>(configKey, { ...params }) -> AIConfigVariation</code>
- <code title="get /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}">client.api.v2.projects.aiConfigs.variations.<a href="./src/resources/api/v2/projects/ai-configs/variations.ts">retrieve</a>(variationKey, { ...params }) -> VariationRetrieveResponse</code>
- <code title="patch /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}">client.api.v2.projects.aiConfigs.variations.<a href="./src/resources/api/v2/projects/ai-configs/variations.ts">update</a>(variationKey, { ...params }) -> AIConfigVariation</code>
- <code title="delete /api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}">client.api.v2.projects.aiConfigs.variations.<a href="./src/resources/api/v2/projects/ai-configs/variations.ts">delete</a>(variationKey, { ...params }) -> void</code>

##### ModelConfigs

Types:

- <code><a href="./src/resources/api/v2/projects/ai-configs/model-configs/model-configs.ts">ModelConfig</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/model-configs/model-configs.ts">ModelConfigRetrieveModelConfigsResponse</a></code>

Methods:

- <code title="get /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}">client.api.v2.projects.aiConfigs.modelConfigs.<a href="./src/resources/api/v2/projects/ai-configs/model-configs/model-configs.ts">retrieve</a>(modelConfigKey, { ...params }) -> ModelConfig</code>
- <code title="delete /api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}">client.api.v2.projects.aiConfigs.modelConfigs.<a href="./src/resources/api/v2/projects/ai-configs/model-configs/model-configs.ts">delete</a>(modelConfigKey, { ...params }) -> void</code>
- <code title="post /api/v2/projects/{projectKey}/ai-configs/model-configs">client.api.v2.projects.aiConfigs.modelConfigs.<a href="./src/resources/api/v2/projects/ai-configs/model-configs/model-configs.ts">modelConfigs</a>(projectKey, { ...params }) -> ModelConfig</code>
- <code title="get /api/v2/projects/{projectKey}/ai-configs/model-configs">client.api.v2.projects.aiConfigs.modelConfigs.<a href="./src/resources/api/v2/projects/ai-configs/model-configs/model-configs.ts">retrieveModelConfigs</a>(projectKey, { ...params }) -> ModelConfigRetrieveModelConfigsResponse</code>

###### Restricted

Types:

- <code><a href="./src/resources/api/v2/projects/ai-configs/model-configs/restricted.ts">RestrictedModelsRequest</a></code>
- <code><a href="./src/resources/api/v2/projects/ai-configs/model-configs/restricted.ts">RestrictedCreateResponse</a></code>

Methods:

- <code title="post /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted">client.api.v2.projects.aiConfigs.modelConfigs.restricted.<a href="./src/resources/api/v2/projects/ai-configs/model-configs/restricted.ts">create</a>(projectKey, { ...params }) -> RestrictedCreateResponse</code>
- <code title="delete /api/v2/projects/{projectKey}/ai-configs/model-configs/restricted">client.api.v2.projects.aiConfigs.modelConfigs.restricted.<a href="./src/resources/api/v2/projects/ai-configs/model-configs/restricted.ts">deleteAll</a>(projectKey, { ...params }) -> void</code>

### Roles

Types:

- <code><a href="./src/resources/api/v2/roles.ts">CustomRole</a></code>
- <code><a href="./src/resources/api/v2/roles.ts">RoleListResponse</a></code>

Methods:

- <code title="post /api/v2/roles">client.api.v2.roles.<a href="./src/resources/api/v2/roles.ts">create</a>({ ...params }) -> CustomRole</code>
- <code title="get /api/v2/roles/{customRoleKey}">client.api.v2.roles.<a href="./src/resources/api/v2/roles.ts">retrieve</a>(customRoleKey) -> CustomRole</code>
- <code title="patch /api/v2/roles/{customRoleKey}">client.api.v2.roles.<a href="./src/resources/api/v2/roles.ts">update</a>(customRoleKey, { ...params }) -> CustomRole</code>
- <code title="get /api/v2/roles">client.api.v2.roles.<a href="./src/resources/api/v2/roles.ts">list</a>({ ...params }) -> RoleListResponse</code>
- <code title="delete /api/v2/roles/{customRoleKey}">client.api.v2.roles.<a href="./src/resources/api/v2/roles.ts">delete</a>(customRoleKey) -> void</code>

### Segments

Types:

- <code><a href="./src/resources/api/v2/segments/segments.ts">SegmentTarget</a></code>
- <code><a href="./src/resources/api/v2/segments/segments.ts">UserSegment</a></code>

Methods:

- <code title="get /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}">client.api.v2.segments.<a href="./src/resources/api/v2/segments/segments.ts">retrieve</a>(segmentKey, { ...params }) -> UserSegment</code>
- <code title="patch /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}">client.api.v2.segments.<a href="./src/resources/api/v2/segments/segments.ts">update</a>(segmentKey, { ...params }) -> UserSegment</code>
- <code title="delete /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}">client.api.v2.segments.<a href="./src/resources/api/v2/segments/segments.ts">delete</a>(segmentKey, { ...params }) -> void</code>

#### Contexts

Types:

- <code><a href="./src/resources/api/v2/segments/contexts.ts">BigSegmentTarget</a></code>
- <code><a href="./src/resources/api/v2/segments/contexts.ts">SegmentUserList</a></code>
- <code><a href="./src/resources/api/v2/segments/contexts.ts">SegmentUserState</a></code>

Methods:

- <code title="post /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts">client.api.v2.segments.contexts.<a href="./src/resources/api/v2/segments/contexts.ts">create</a>(segmentKey, { ...params }) -> void</code>
- <code title="get /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey}">client.api.v2.segments.contexts.<a href="./src/resources/api/v2/segments/contexts.ts">retrieve</a>(contextKey, { ...params }) -> BigSegmentTarget</code>

#### Exports

Types:

- <code><a href="./src/resources/api/v2/segments/exports.ts">ExportRetrieveResponse</a></code>

Methods:

- <code title="post /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports">client.api.v2.segments.exports.<a href="./src/resources/api/v2/segments/exports.ts">create</a>(segmentKey, { ...params }) -> void</code>
- <code title="get /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID}">client.api.v2.segments.exports.<a href="./src/resources/api/v2/segments/exports.ts">retrieve</a>(exportID, { ...params }) -> ExportRetrieveResponse</code>

#### Imports

Types:

- <code><a href="./src/resources/api/v2/segments/imports.ts">ImportRetrieveResponse</a></code>

Methods:

- <code title="post /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports">client.api.v2.segments.imports.<a href="./src/resources/api/v2/segments/imports.ts">create</a>(segmentKey, { ...params }) -> void</code>
- <code title="get /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID}">client.api.v2.segments.imports.<a href="./src/resources/api/v2/segments/imports.ts">retrieve</a>(importID, { ...params }) -> ImportRetrieveResponse</code>

#### Users

Methods:

- <code title="post /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users">client.api.v2.segments.users.<a href="./src/resources/api/v2/segments/users.ts">create</a>(segmentKey, { ...params }) -> void</code>
- <code title="get /api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey}">client.api.v2.segments.users.<a href="./src/resources/api/v2/segments/users.ts">retrieve</a>(userKey, { ...params }) -> BigSegmentTarget</code>

#### ExpiringTargets

Methods:

- <code title="get /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}">client.api.v2.segments.expiringTargets.<a href="./src/resources/api/v2/segments/expiring-targets.ts">retrieve</a>(environmentKey, { ...params }) -> ExpiringTargetGetResponse</code>
- <code title="patch /api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}">client.api.v2.segments.expiringTargets.<a href="./src/resources/api/v2/segments/expiring-targets.ts">update</a>(environmentKey, { ...params }) -> ExpiringTargetPatchResponse</code>

#### ExpiringUserTargets

Methods:

- <code title="get /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}">client.api.v2.segments.expiringUserTargets.<a href="./src/resources/api/v2/segments/expiring-user-targets.ts">retrieve</a>(environmentKey, { ...params }) -> ExpiringUserTargetGetResponse</code>
- <code title="patch /api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}">client.api.v2.segments.expiringUserTargets.<a href="./src/resources/api/v2/segments/expiring-user-targets.ts">update</a>(environmentKey, { ...params }) -> ExpiringUserTargetPatchResponse</code>

### Teams

Types:

- <code><a href="./src/resources/api/v2/teams.ts">ProjectSummary</a></code>
- <code><a href="./src/resources/api/v2/teams.ts">Team</a></code>
- <code><a href="./src/resources/api/v2/teams.ts">TeamCustomRoles</a></code>
- <code><a href="./src/resources/api/v2/teams.ts">TeamMaintainers</a></code>
- <code><a href="./src/resources/api/v2/teams.ts">TeamProjects</a></code>
- <code><a href="./src/resources/api/v2/teams.ts">TeamListResponse</a></code>
- <code><a href="./src/resources/api/v2/teams.ts">TeamMembersResponse</a></code>
- <code><a href="./src/resources/api/v2/teams.ts">TeamPatchAllResponse</a></code>

Methods:

- <code title="post /api/v2/teams">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">create</a>({ ...params }) -> Team</code>
- <code title="get /api/v2/teams/{teamKey}">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">retrieve</a>(teamKey, { ...params }) -> Team</code>
- <code title="patch /api/v2/teams/{teamKey}">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">update</a>(teamKey, { ...params }) -> Team</code>
- <code title="get /api/v2/teams">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">list</a>({ ...params }) -> TeamListResponse</code>
- <code title="delete /api/v2/teams/{teamKey}">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">delete</a>(teamKey) -> void</code>
- <code title="post /api/v2/teams/{teamKey}/members">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">members</a>(teamKey, { ...params }) -> TeamMembersResponse</code>
- <code title="patch /api/v2/teams">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">patchAll</a>({ ...params }) -> TeamPatchAllResponse</code>
- <code title="get /api/v2/teams/{teamKey}/maintainers">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">retrieveMaintainers</a>(teamKey, { ...params }) -> TeamMaintainers</code>
- <code title="get /api/v2/teams/{teamKey}/roles">client.api.v2.teams.<a href="./src/resources/api/v2/teams.ts">retrieveRoles</a>(teamKey, { ...params }) -> TeamCustomRoles</code>

### Templates

Types:

- <code><a href="./src/resources/api/v2/templates.ts">WorkflowTemplateOutput</a></code>
- <code><a href="./src/resources/api/v2/templates.ts">TemplateListResponse</a></code>

Methods:

- <code title="post /api/v2/templates">client.api.v2.templates.<a href="./src/resources/api/v2/templates.ts">create</a>({ ...params }) -> WorkflowTemplateOutput</code>
- <code title="get /api/v2/templates">client.api.v2.templates.<a href="./src/resources/api/v2/templates.ts">list</a>({ ...params }) -> TemplateListResponse</code>
- <code title="delete /api/v2/templates/{templateKey}">client.api.v2.templates.<a href="./src/resources/api/v2/templates.ts">delete</a>(templateKey) -> void</code>

### Tokens

Types:

- <code><a href="./src/resources/api/v2/tokens.ts">Token</a></code>
- <code><a href="./src/resources/api/v2/tokens.ts">TokenListResponse</a></code>

Methods:

- <code title="post /api/v2/tokens">client.api.v2.tokens.<a href="./src/resources/api/v2/tokens.ts">create</a>({ ...params }) -> Token</code>
- <code title="get /api/v2/tokens/{id}">client.api.v2.tokens.<a href="./src/resources/api/v2/tokens.ts">retrieve</a>(id) -> Token</code>
- <code title="patch /api/v2/tokens/{id}">client.api.v2.tokens.<a href="./src/resources/api/v2/tokens.ts">update</a>(id, [ ...body ]) -> Token</code>
- <code title="get /api/v2/tokens">client.api.v2.tokens.<a href="./src/resources/api/v2/tokens.ts">list</a>({ ...params }) -> TokenListResponse</code>
- <code title="delete /api/v2/tokens/{id}">client.api.v2.tokens.<a href="./src/resources/api/v2/tokens.ts">delete</a>(id) -> void</code>
- <code title="post /api/v2/tokens/{id}/reset">client.api.v2.tokens.<a href="./src/resources/api/v2/tokens.ts">reset</a>(id, { ...params }) -> Token</code>

### Usage

Types:

- <code><a href="./src/resources/api/v2/usage/usage.ts">SeriesIntervalsRep</a></code>
- <code><a href="./src/resources/api/v2/usage/usage.ts">SeriesListRep</a></code>

Methods:

- <code title="get /api/v2/usage/events/{type}">client.api.v2.usage.<a href="./src/resources/api/v2/usage/usage.ts">retrieve</a>(type, { ...params }) -> SeriesListRep</code>
- <code title="get /api/v2/usage/data-export-events">client.api.v2.usage.<a href="./src/resources/api/v2/usage/usage.ts">retrieveDataExportEvents</a>({ ...params }) -> SeriesIntervalsRep</code>
- <code title="get /api/v2/usage/experimentation-keys">client.api.v2.usage.<a href="./src/resources/api/v2/usage/usage.ts">retrieveExperimentationKeys</a>({ ...params }) -> SeriesIntervalsRep</code>
- <code title="get /api/v2/usage/experimentation-units">client.api.v2.usage.<a href="./src/resources/api/v2/usage/usage.ts">retrieveExperimentationUnits</a>({ ...params }) -> SeriesIntervalsRep</code>
- <code title="get /api/v2/usage/service-connections">client.api.v2.usage.<a href="./src/resources/api/v2/usage/usage.ts">retrieveServiceConnections</a>({ ...params }) -> SeriesIntervalsRep</code>

#### Mau

Types:

- <code><a href="./src/resources/api/v2/usage/mau.ts">MauRetrieveSDKsResponse</a></code>

Methods:

- <code title="get /api/v2/usage/mau">client.api.v2.usage.mau.<a href="./src/resources/api/v2/usage/mau.ts">list</a>({ ...params }) -> SeriesListRep</code>
- <code title="get /api/v2/usage/mau/bycategory">client.api.v2.usage.mau.<a href="./src/resources/api/v2/usage/mau.ts">retrieveBycategory</a>({ ...params }) -> SeriesListRep</code>
- <code title="get /api/v2/usage/mau/sdks">client.api.v2.usage.mau.<a href="./src/resources/api/v2/usage/mau.ts">retrieveSDKs</a>({ ...params }) -> MauRetrieveSDKsResponse</code>

#### Streams

Types:

- <code><a href="./src/resources/api/v2/usage/streams.ts">StreamRetrieveSdkversionsResponse</a></code>

Methods:

- <code title="get /api/v2/usage/streams/{source}">client.api.v2.usage.streams.<a href="./src/resources/api/v2/usage/streams.ts">retrieve</a>(source, { ...params }) -> SeriesListRep</code>
- <code title="get /api/v2/usage/streams/{source}/bysdkversion">client.api.v2.usage.streams.<a href="./src/resources/api/v2/usage/streams.ts">retrieveBysdkversion</a>(source, { ...params }) -> SeriesListRep</code>
- <code title="get /api/v2/usage/streams/{source}/sdkversions">client.api.v2.usage.streams.<a href="./src/resources/api/v2/usage/streams.ts">retrieveSdkversions</a>(source) -> StreamRetrieveSdkversionsResponse</code>

### Users

Types:

- <code><a href="./src/resources/api/v2/users/users.ts">UserRecord</a></code>

Methods:

- <code title="get /api/v2/users/{projectKey}/{environmentKey}/{userKey}">client.api.v2.users.<a href="./src/resources/api/v2/users/users.ts">retrieve</a>(userKey, { ...params }) -> UserRecord</code>
- <code title="delete /api/v2/users/{projectKey}/{environmentKey}/{userKey}">client.api.v2.users.<a href="./src/resources/api/v2/users/users.ts">delete</a>(userKey, { ...params }) -> void</code>

#### Flags

Types:

- <code><a href="./src/resources/api/v2/users/flags.ts">FlagRetrieveResponse</a></code>
- <code><a href="./src/resources/api/v2/users/flags.ts">FlagListResponse</a></code>

Methods:

- <code title="get /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}">client.api.v2.users.flags.<a href="./src/resources/api/v2/users/flags.ts">retrieve</a>(featureFlagKey, { ...params }) -> FlagRetrieveResponse</code>
- <code title="put /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}">client.api.v2.users.flags.<a href="./src/resources/api/v2/users/flags.ts">update</a>(featureFlagKey, { ...params }) -> void</code>
- <code title="get /api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags">client.api.v2.users.flags.<a href="./src/resources/api/v2/users/flags.ts">list</a>(userKey, { ...params }) -> FlagListResponse</code>

#### ExpiringUserTargets

Methods:

- <code title="get /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}">client.api.v2.users.expiringUserTargets.<a href="./src/resources/api/v2/users/expiring-user-targets.ts">retrieve</a>(environmentKey, { ...params }) -> ExpiringUserTargetGetResponse</code>
- <code title="patch /api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}">client.api.v2.users.expiringUserTargets.<a href="./src/resources/api/v2/users/expiring-user-targets.ts">update</a>(environmentKey, { ...params }) -> ExpiringUserTargetPatchResponse</code>

### Webhooks

Types:

- <code><a href="./src/resources/api/v2/webhooks.ts">Webhook</a></code>
- <code><a href="./src/resources/api/v2/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /api/v2/webhooks">client.api.v2.webhooks.<a href="./src/resources/api/v2/webhooks.ts">create</a>({ ...params }) -> Webhook</code>
- <code title="get /api/v2/webhooks/{id}">client.api.v2.webhooks.<a href="./src/resources/api/v2/webhooks.ts">retrieve</a>(id) -> Webhook</code>
- <code title="patch /api/v2/webhooks/{id}">client.api.v2.webhooks.<a href="./src/resources/api/v2/webhooks.ts">update</a>(id, [ ...body ]) -> Webhook</code>
- <code title="get /api/v2/webhooks">client.api.v2.webhooks.<a href="./src/resources/api/v2/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /api/v2/webhooks/{id}">client.api.v2.webhooks.<a href="./src/resources/api/v2/webhooks.ts">delete</a>(id) -> void</code>

### Announcements

Types:

- <code><a href="./src/resources/api/v2/announcements.ts">AnnouncementLink</a></code>
- <code><a href="./src/resources/api/v2/announcements.ts">AnnouncementResponse</a></code>
- <code><a href="./src/resources/api/v2/announcements.ts">AnnouncementListResponse</a></code>

Methods:

- <code title="post /api/v2/announcements">client.api.v2.announcements.<a href="./src/resources/api/v2/announcements.ts">create</a>({ ...params }) -> AnnouncementResponse</code>
- <code title="patch /api/v2/announcements/{announcementId}">client.api.v2.announcements.<a href="./src/resources/api/v2/announcements.ts">update</a>(announcementID, [ ...body ]) -> AnnouncementResponse</code>
- <code title="get /api/v2/announcements">client.api.v2.announcements.<a href="./src/resources/api/v2/announcements.ts">list</a>({ ...params }) -> AnnouncementListResponse</code>
- <code title="delete /api/v2/announcements/{announcementId}">client.api.v2.announcements.<a href="./src/resources/api/v2/announcements.ts">delete</a>(announcementID) -> void</code>

### EngineeringInsights

Types:

- <code><a href="./src/resources/api/v2/engineering-insights/engineering-insights.ts">PullRequestCollectionRep</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/engineering-insights.ts">PullRequestRep</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/engineering-insights.ts">EngineeringInsightRetrieveFlagEventsResponse</a></code>

Methods:

- <code title="post /api/v2/engineering-insights/deployment-events">client.api.v2.engineeringInsights.<a href="./src/resources/api/v2/engineering-insights/engineering-insights.ts">deploymentEvents</a>({ ...params }) -> void</code>
- <code title="get /api/v2/engineering-insights/flag-events">client.api.v2.engineeringInsights.<a href="./src/resources/api/v2/engineering-insights/engineering-insights.ts">retrieveFlagEvents</a>({ ...params }) -> EngineeringInsightRetrieveFlagEventsResponse</code>
- <code title="get /api/v2/engineering-insights/pull-requests">client.api.v2.engineeringInsights.<a href="./src/resources/api/v2/engineering-insights/engineering-insights.ts">retrievePullRequests</a>({ ...params }) -> PullRequestCollectionRep</code>

#### Charts

Methods:

- <code title="get /api/v2/engineering-insights/charts/lead-time">client.api.v2.engineeringInsights.charts.<a href="./src/resources/api/v2/engineering-insights/charts/charts.ts">retrieveLeadTime</a>({ ...params }) -> InsightsChart</code>

##### Deployments

Types:

- <code><a href="./src/resources/api/v2/engineering-insights/charts/deployments.ts">InsightsChart</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/charts/deployments.ts">InsightsChartSeriesMetadataAxis</a></code>

Methods:

- <code title="get /api/v2/engineering-insights/charts/deployments/frequency">client.api.v2.engineeringInsights.charts.deployments.<a href="./src/resources/api/v2/engineering-insights/charts/deployments.ts">retrieveFrequency</a>({ ...params }) -> InsightsChart</code>

##### Flags

Methods:

- <code title="get /api/v2/engineering-insights/charts/flags/stale">client.api.v2.engineeringInsights.charts.flags.<a href="./src/resources/api/v2/engineering-insights/charts/flags.ts">retrieveStale</a>({ ...params }) -> InsightsChart</code>
- <code title="get /api/v2/engineering-insights/charts/flags/status">client.api.v2.engineeringInsights.charts.flags.<a href="./src/resources/api/v2/engineering-insights/charts/flags.ts">retrieveStatus</a>({ ...params }) -> InsightsChart</code>

##### Releases

Methods:

- <code title="get /api/v2/engineering-insights/charts/releases/frequency">client.api.v2.engineeringInsights.charts.releases.<a href="./src/resources/api/v2/engineering-insights/charts/releases.ts">retrieveFrequency</a>({ ...params }) -> InsightsChart</code>

#### Deployments

Types:

- <code><a href="./src/resources/api/v2/engineering-insights/deployments.ts">DeploymentCollectionRep</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/deployments.ts">DeploymentRep</a></code>

Methods:

- <code title="get /api/v2/engineering-insights/deployments/{deploymentID}">client.api.v2.engineeringInsights.deployments.<a href="./src/resources/api/v2/engineering-insights/deployments.ts">retrieve</a>(deploymentID, { ...params }) -> DeploymentRep</code>
- <code title="patch /api/v2/engineering-insights/deployments/{deploymentID}">client.api.v2.engineeringInsights.deployments.<a href="./src/resources/api/v2/engineering-insights/deployments.ts">update</a>(deploymentID, [ ...body ]) -> DeploymentRep</code>
- <code title="get /api/v2/engineering-insights/deployments">client.api.v2.engineeringInsights.deployments.<a href="./src/resources/api/v2/engineering-insights/deployments.ts">list</a>({ ...params }) -> DeploymentCollectionRep</code>

#### Insights

Types:

- <code><a href="./src/resources/api/v2/engineering-insights/insights/insights.ts">InsightGroup</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/insights/insights.ts">InsightGroupCollectionScoreMetadata</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/insights/insights.ts">InsightGroupScores</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/insights/insights.ts">InsightPeriod</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/insights/insights.ts">InsightsMetricScore</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/insights/insights.ts">InsightRetrieveScoresResponse</a></code>

Methods:

- <code title="post /api/v2/engineering-insights/insights/group">client.api.v2.engineeringInsights.insights.<a href="./src/resources/api/v2/engineering-insights/insights/insights.ts">group</a>({ ...params }) -> InsightGroup</code>
- <code title="get /api/v2/engineering-insights/insights/scores">client.api.v2.engineeringInsights.insights.<a href="./src/resources/api/v2/engineering-insights/insights/insights.ts">retrieveScores</a>({ ...params }) -> InsightRetrieveScoresResponse</code>

##### Groups

Types:

- <code><a href="./src/resources/api/v2/engineering-insights/insights/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="get /api/v2/engineering-insights/insights/groups/{insightGroupKey}">client.api.v2.engineeringInsights.insights.groups.<a href="./src/resources/api/v2/engineering-insights/insights/groups.ts">retrieve</a>(insightGroupKey, { ...params }) -> InsightGroup</code>
- <code title="patch /api/v2/engineering-insights/insights/groups/{insightGroupKey}">client.api.v2.engineeringInsights.insights.groups.<a href="./src/resources/api/v2/engineering-insights/insights/groups.ts">update</a>(insightGroupKey, [ ...body ]) -> InsightGroup</code>
- <code title="get /api/v2/engineering-insights/insights/groups">client.api.v2.engineeringInsights.insights.groups.<a href="./src/resources/api/v2/engineering-insights/insights/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>
- <code title="delete /api/v2/engineering-insights/insights/groups/{insightGroupKey}">client.api.v2.engineeringInsights.insights.groups.<a href="./src/resources/api/v2/engineering-insights/insights/groups.ts">delete</a>(insightGroupKey) -> void</code>

#### Repositories

Types:

- <code><a href="./src/resources/api/v2/engineering-insights/repositories/repositories.ts">RepositoryListResponse</a></code>

Methods:

- <code title="get /api/v2/engineering-insights/repositories">client.api.v2.engineeringInsights.repositories.<a href="./src/resources/api/v2/engineering-insights/repositories/repositories.ts">list</a>({ ...params }) -> RepositoryListResponse</code>

##### Projects

Types:

- <code><a href="./src/resources/api/v2/engineering-insights/repositories/projects.ts">InsightsRepositoryProject</a></code>
- <code><a href="./src/resources/api/v2/engineering-insights/repositories/projects.ts">ProjectCreateResponse</a></code>

Methods:

- <code title="put /api/v2/engineering-insights/repositories/projects">client.api.v2.engineeringInsights.repositories.projects.<a href="./src/resources/api/v2/engineering-insights/repositories/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="delete /api/v2/engineering-insights/repositories/{repositoryKey}/projects/{projectKey}">client.api.v2.engineeringInsights.repositories.projects.<a href="./src/resources/api/v2/engineering-insights/repositories/projects.ts">delete</a>(projectKey, { ...params }) -> void</code>
