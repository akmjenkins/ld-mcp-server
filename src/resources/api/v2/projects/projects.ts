// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import * as FlagsAPI from '../flags/flags';
import * as ContextKindsAPI from './context-kinds';
import {
  ContextKindRetrieveContextKindsResponse,
  ContextKindUpdateParams,
  ContextKindUpdateResponse,
  ContextKinds,
} from './context-kinds';
import * as ExperimentationSettingsAPI from './experimentation-settings';
import {
  ExperimentationSettingUpdateExperimentationSettingsParams,
  ExperimentationSettings,
  RandomizationSettingsRep,
} from './experimentation-settings';
import * as FlagDefaultsAPI from './flag-defaults';
import {
  BooleanFlagDefaults,
  DefaultClientSideAvailability as FlagDefaultsAPIDefaultClientSideAvailability,
  FlagDefaultRetrieveFlagDefaultsResponse,
  FlagDefaultUpdateFlagDefaultsParams,
  FlagDefaults,
  UpsertPayloadRep,
} from './flag-defaults';
import * as LayersAPI from './layers';
import {
  LayerCreateParams,
  LayerListParams,
  LayerListResponse,
  LayerRep,
  LayerUpdateParams,
  Layers,
} from './layers';
import * as MetricGroupsAPI from './metric-groups';
import {
  MetricGroupDeleteParams,
  MetricGroupMetricGroupsParams,
  MetricGroupRep,
  MetricGroupRetrieveMetricGroupsParams,
  MetricGroupRetrieveMetricGroupsResponse,
  MetricGroupRetrieveParams,
  MetricGroupUpdateParams,
  MetricGroups,
  MetricInGroupRep,
} from './metric-groups';
import * as ReleasePipelinesAPI from './release-pipelines';
import {
  CreatePhaseInput,
  ReleasePipeline,
  ReleasePipelineDeleteParams,
  ReleasePipelineReleasePipelinesParams,
  ReleasePipelineRetrieveParams,
  ReleasePipelineRetrieveReleasePipelinesParams,
  ReleasePipelineRetrieveReleasePipelinesResponse,
  ReleasePipelineRetrieveReleasesParams,
  ReleasePipelineRetrieveReleasesResponse,
  ReleasePipelineUpdateParams,
  ReleasePipelines,
} from './release-pipelines';
import * as AIConfigsAPI from './ai-configs/ai-configs';
import {
  AIConfig,
  AIConfigAIConfigsParams,
  AIConfigDeleteParams,
  AIConfigRetrieveAIConfigsParams,
  AIConfigRetrieveAIConfigsResponse,
  AIConfigRetrieveMetricsByVariationParams,
  AIConfigRetrieveMetricsByVariationResponse,
  AIConfigRetrieveMetricsParams,
  AIConfigRetrieveParams,
  AIConfigUpdateParams,
  AIConfigs,
  AIConfigsAccess,
  AIConfigsLink,
  CoreLink,
  Metrics,
} from './ai-configs/ai-configs';
import * as EnvironmentsAPI from './environments/environments';
import {
  Environment,
  EnvironmentAPIKeyParams,
  EnvironmentCreateParams,
  EnvironmentDeleteParams,
  EnvironmentListParams,
  EnvironmentMobileKeyParams,
  EnvironmentPost,
  EnvironmentRetrieveFollowersParams,
  EnvironmentRetrieveFollowersResponse,
  EnvironmentRetrieveParams,
  EnvironmentUpdateParams,
  Environments,
} from './environments/environments';
import * as FlagsFlagsAPI from './flags/flags';
import { Flags } from './flags/flags';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Projects extends APIResource {
  contextKinds: ContextKindsAPI.ContextKinds = new ContextKindsAPI.ContextKinds(this._client);
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);
  experimentationSettings: ExperimentationSettingsAPI.ExperimentationSettings =
    new ExperimentationSettingsAPI.ExperimentationSettings(this._client);
  flagDefaults: FlagDefaultsAPI.FlagDefaults = new FlagDefaultsAPI.FlagDefaults(this._client);
  flags: FlagsFlagsAPI.Flags = new FlagsFlagsAPI.Flags(this._client);
  layers: LayersAPI.Layers = new LayersAPI.Layers(this._client);
  metricGroups: MetricGroupsAPI.MetricGroups = new MetricGroupsAPI.MetricGroups(this._client);
  releasePipelines: ReleasePipelinesAPI.ReleasePipelines = new ReleasePipelinesAPI.ReleasePipelines(
    this._client,
  );
  aiConfigs: AIConfigsAPI.AIConfigs = new AIConfigsAPI.AIConfigs(this._client);

  /**
   * Create a new project with the given key and name. Project keys must be unique
   * within an account.
   *
   * @example
   * ```ts
   * const projectRep = await client.api.v2.projects.create({
   *   key: 'project-key-123abc',
   *   name: 'My Project',
   * });
   * ```
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectRep> {
    return this._client.post('/api/v2/projects', { body, ...options });
  }

  /**
   * Get a single project by key.
   *
   * ### Expanding the project response
   *
   * LaunchDarkly supports one field for expanding the "Get project" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with any of the following fields:
   *
   * - `environments` includes a paginated list of the project environments.
   *
   * For example, `expand=environments` includes the `environments` field for the
   * project in the response.
   *
   * @example
   * ```ts
   * const project = await client.api.v2.projects.retrieve(
   *   'projectKey',
   * );
   * ```
   */
  retrieve(
    projectKey: string,
    query: ProjectRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Project> {
    return this._client.get(path`/api/v2/projects/${projectKey}`, { query, ...options });
  }

  /**
   * Update a project. Updating a project uses a
   * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element
   * to the project fields that are arrays, set the `path` to the name of the field
   * and then append `/<array index>`. Use `/0` to add to the beginning of the array.
   * Use `/-` to add to the end of the array.
   *
   * @example
   * ```ts
   * const projectRep = await client.api.v2.projects.update(
   *   'projectKey',
   *   { body: [{ op: 'add', path: '/tags/0' }] },
   * );
   * ```
   */
  update(projectKey: string, params: ProjectUpdateParams, options?: RequestOptions): APIPromise<ProjectRep> {
    const { body } = params;
    return this._client.patch(path`/api/v2/projects/${projectKey}`, { body: body, ...options });
  }

  /**
   * Return a list of projects.
   *
   * By default, this returns the first 20 projects. Page through this list with the
   * `limit` parameter and by following the `first`, `prev`, `next`, and `last` links
   * in the `_links` field that returns. If those links do not appear, the pages they
   * refer to don't exist. For example, the `first` and `prev` links will be missing
   * from the response on the first page, because there is no previous page and you
   * cannot return to the first page when you are already on the first page.
   *
   * ### Filtering projects
   *
   * LaunchDarkly supports three fields for filters:
   *
   * - `query` is a string that matches against the projects' names and keys. It is
   *   not case sensitive.
   * - `tags` is a `+`-separated list of project tags. It filters the list of
   *   projects that have all of the tags in the list.
   * - `keys` is a `|` separated list of project keys. It filters the list to
   *   projects that have any of the keys in the list.
   *
   * For example, the filter `filter=query:abc,tags:tag-1+tag-2` matches projects
   * with the string `abc` in their name or key and also are tagged with `tag-1` and
   * `tag-2`. The filter is not case-sensitive.
   *
   * The documented values for `filter` query parameters are prior to URL encoding.
   * For example, the `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.
   *
   * ### Sorting projects
   *
   * LaunchDarkly supports two fields for sorting:
   *
   * - `name` sorts by project name.
   * - `createdOn` sorts by the creation date of the project.
   *
   * For example, `sort=name` sorts the response by project name in ascending order.
   *
   * ### Expanding the projects response
   *
   * LaunchDarkly supports one field for expanding the "List projects" response. By
   * default, these fields are **not** included in the response.
   *
   * To expand the response, append the `expand` query parameter and add a
   * comma-separated list with the `environments` field.
   *
   * - `environments` includes a paginated list of the project environments.
   *
   * For example, `expand=environments` includes the `environments` field for each
   * project in the response.
   *
   * @example
   * ```ts
   * const projects = await client.api.v2.projects.list();
   * ```
   */
  list(
    query: ProjectListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProjectListResponse> {
    return this._client.get('/api/v2/projects', { query, ...options });
  }

  /**
   * Delete a project by key. Use this endpoint with caution. Deleting a project will
   * delete all associated environments and feature flags. You cannot delete the last
   * project in an account.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.delete('projectKey');
   * ```
   */
  delete(projectKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/projects/${projectKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Project {
  /**
   * The ID of this project
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * Whether or not flags created in this project are made available to the
   * client-side JavaScript SDK by default
   */
  includeInSnippetByDefault: boolean;

  /**
   * The key of this project
   */
  key: string;

  /**
   * A human-friendly name for the project
   */
  name: string;

  /**
   * A list of tags for the project
   */
  tags: Array<string>;

  /**
   * Details on the allowed and denied actions for this project
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * Describes which client-side SDKs can use new flags by default
   */
  defaultClientSideAvailability?: FlagsAPI.ClientSideAvailability;

  /**
   * The key of the default release pipeline for this project
   */
  defaultReleasePipelineKey?: string;

  /**
   * A paginated list of environments for the project. By default this field is
   * omitted unless expanded by the client.
   */
  environments?: EnvironmentsAPI.Environments;
}

export interface ProjectRep {
  /**
   * The ID of this project
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * A list of environments for the project
   */
  environments: Array<EnvironmentsAPI.Environment>;

  /**
   * Whether or not flags created in this project are made available to the
   * client-side JavaScript SDK by default
   */
  includeInSnippetByDefault: boolean;

  /**
   * The key of this project
   */
  key: string;

  /**
   * A human-friendly name for the project
   */
  name: string;

  /**
   * A list of tags for the project
   */
  tags: Array<string>;

  /**
   * Details on the allowed and denied actions for this project
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * Describes which client-side SDKs can use new flags by default
   */
  defaultClientSideAvailability?: FlagsAPI.ClientSideAvailability;

  /**
   * The key of the default release pipeline for this project
   */
  defaultReleasePipelineKey?: string;
}

export interface ProjectListResponse {
  /**
   * A link to this resource.
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * List of projects.
   */
  items: Array<Project>;

  totalCount?: number;
}

export interface ProjectCreateParams {
  /**
   * A unique key used to reference the project in your code.
   */
  key: string;

  /**
   * A human-friendly name for the project.
   */
  name: string;

  /**
   * Controls which client-side SDKs can use new flags by default.
   */
  defaultClientSideAvailability?: ProjectCreateParams.DefaultClientSideAvailability;

  /**
   * Creates the provided environments for this project. If omitted default
   * environments will be created instead.
   */
  environments?: Array<EnvironmentsAPI.EnvironmentPost>;

  /**
   * Whether or not flags created in this project are made available to the
   * client-side JavaScript SDK by default.
   */
  includeInSnippetByDefault?: boolean;

  /**
   * The flag key convention for this project
   */
  namingConvention?: ProjectCreateParams.NamingConvention;

  /**
   * Tags for the project
   */
  tags?: Array<string>;
}

export namespace ProjectCreateParams {
  /**
   * Controls which client-side SDKs can use new flags by default.
   */
  export interface DefaultClientSideAvailability {
    /**
     * Whether to enable availability for client-side SDKs.
     */
    usingEnvironmentId: boolean;

    /**
     * Whether to enable availability for mobile SDKs.
     */
    usingMobileKey: boolean;
  }

  /**
   * The flag key convention for this project
   */
  export interface NamingConvention {
    /**
     * The casing convention to enforce for new flag keys in this project
     */
    case?: 'none' | 'camelCase' | 'upperCamelCase' | 'snakeCase' | 'kebabCase';

    /**
     * The prefix to enforce for new flag keys in this project
     */
    prefix?: string;
  }
}

export interface ProjectRetrieveParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response.
   */
  expand?: string;
}

export interface ProjectUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

export interface ProjectListParams {
  /**
   * A comma-separated list of properties that can reveal additional information in
   * the response.
   */
  expand?: string;

  /**
   * A comma-separated list of filters. Each filter is constructed as `field:value`.
   */
  filter?: string;

  /**
   * The number of projects to return in the response. Defaults to 20.
   */
  limit?: number;

  /**
   * Where to start in the list. Use this with pagination. For example, an offset of
   * 10 skips the first ten items and returns the next `limit` items.
   */
  offset?: number;

  /**
   * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - )
   * sort in descending order.
   */
  sort?: string;
}

Projects.ContextKinds = ContextKinds;
Projects.ExperimentationSettings = ExperimentationSettings;
Projects.FlagDefaults = FlagDefaults;
Projects.Flags = Flags;
Projects.Layers = Layers;
Projects.MetricGroups = MetricGroups;
Projects.ReleasePipelines = ReleasePipelines;
Projects.AIConfigs = AIConfigs;

export declare namespace Projects {
  export {
    type Project as Project,
    type ProjectRep as ProjectRep,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectRetrieveParams as ProjectRetrieveParams,
    type ProjectUpdateParams as ProjectUpdateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    ContextKinds as ContextKinds,
    type ContextKindUpdateResponse as ContextKindUpdateResponse,
    type ContextKindRetrieveContextKindsResponse as ContextKindRetrieveContextKindsResponse,
    type ContextKindUpdateParams as ContextKindUpdateParams,
  };

  export {
    type Environments as Environments,
    type Environment as Environment,
    type EnvironmentPost as EnvironmentPost,
    type EnvironmentRetrieveFollowersResponse as EnvironmentRetrieveFollowersResponse,
    type EnvironmentCreateParams as EnvironmentCreateParams,
    type EnvironmentRetrieveParams as EnvironmentRetrieveParams,
    type EnvironmentUpdateParams as EnvironmentUpdateParams,
    type EnvironmentListParams as EnvironmentListParams,
    type EnvironmentDeleteParams as EnvironmentDeleteParams,
    type EnvironmentAPIKeyParams as EnvironmentAPIKeyParams,
    type EnvironmentMobileKeyParams as EnvironmentMobileKeyParams,
    type EnvironmentRetrieveFollowersParams as EnvironmentRetrieveFollowersParams,
  };

  export {
    ExperimentationSettings as ExperimentationSettings,
    type RandomizationSettingsRep as RandomizationSettingsRep,
    type ExperimentationSettingUpdateExperimentationSettingsParams as ExperimentationSettingUpdateExperimentationSettingsParams,
  };

  export {
    FlagDefaults as FlagDefaults,
    type BooleanFlagDefaults as BooleanFlagDefaults,
    type FlagDefaultsAPIDefaultClientSideAvailability as DefaultClientSideAvailability,
    type UpsertPayloadRep as UpsertPayloadRep,
    type FlagDefaultRetrieveFlagDefaultsResponse as FlagDefaultRetrieveFlagDefaultsResponse,
    type FlagDefaultUpdateFlagDefaultsParams as FlagDefaultUpdateFlagDefaultsParams,
  };

  export { Flags as Flags };

  export {
    Layers as Layers,
    type LayerRep as LayerRep,
    type LayerListResponse as LayerListResponse,
    type LayerCreateParams as LayerCreateParams,
    type LayerUpdateParams as LayerUpdateParams,
    type LayerListParams as LayerListParams,
  };

  export {
    MetricGroups as MetricGroups,
    type MetricGroupRep as MetricGroupRep,
    type MetricInGroupRep as MetricInGroupRep,
    type MetricGroupRetrieveMetricGroupsResponse as MetricGroupRetrieveMetricGroupsResponse,
    type MetricGroupRetrieveParams as MetricGroupRetrieveParams,
    type MetricGroupUpdateParams as MetricGroupUpdateParams,
    type MetricGroupDeleteParams as MetricGroupDeleteParams,
    type MetricGroupMetricGroupsParams as MetricGroupMetricGroupsParams,
    type MetricGroupRetrieveMetricGroupsParams as MetricGroupRetrieveMetricGroupsParams,
  };

  export {
    ReleasePipelines as ReleasePipelines,
    type CreatePhaseInput as CreatePhaseInput,
    type ReleasePipeline as ReleasePipeline,
    type ReleasePipelineRetrieveReleasePipelinesResponse as ReleasePipelineRetrieveReleasePipelinesResponse,
    type ReleasePipelineRetrieveReleasesResponse as ReleasePipelineRetrieveReleasesResponse,
    type ReleasePipelineRetrieveParams as ReleasePipelineRetrieveParams,
    type ReleasePipelineUpdateParams as ReleasePipelineUpdateParams,
    type ReleasePipelineDeleteParams as ReleasePipelineDeleteParams,
    type ReleasePipelineReleasePipelinesParams as ReleasePipelineReleasePipelinesParams,
    type ReleasePipelineRetrieveReleasePipelinesParams as ReleasePipelineRetrieveReleasePipelinesParams,
    type ReleasePipelineRetrieveReleasesParams as ReleasePipelineRetrieveReleasesParams,
  };

  export {
    AIConfigs as AIConfigs,
    type AIConfig as AIConfig,
    type AIConfigsAccess as AIConfigsAccess,
    type AIConfigsLink as AIConfigsLink,
    type CoreLink as CoreLink,
    type Metrics as Metrics,
    type AIConfigRetrieveAIConfigsResponse as AIConfigRetrieveAIConfigsResponse,
    type AIConfigRetrieveMetricsByVariationResponse as AIConfigRetrieveMetricsByVariationResponse,
    type AIConfigRetrieveParams as AIConfigRetrieveParams,
    type AIConfigUpdateParams as AIConfigUpdateParams,
    type AIConfigDeleteParams as AIConfigDeleteParams,
    type AIConfigAIConfigsParams as AIConfigAIConfigsParams,
    type AIConfigRetrieveAIConfigsParams as AIConfigRetrieveAIConfigsParams,
    type AIConfigRetrieveMetricsParams as AIConfigRetrieveMetricsParams,
    type AIConfigRetrieveMetricsByVariationParams as AIConfigRetrieveMetricsByVariationParams,
  };
}
