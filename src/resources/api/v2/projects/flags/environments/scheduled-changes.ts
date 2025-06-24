// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as StatisticsAPI from '../../../code-refs/statistics';
import { APIPromise } from '../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class ScheduledChanges extends APIResource {
  /**
   * Get a scheduled change that will be applied to the feature flag by ID.
   *
   * @example
   * ```ts
   * const featureFlagScheduledChange =
   *   await client.api.v2.projects.flags.environments.scheduledChanges.retrieve(
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
    params: ScheduledChangeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagScheduledChange> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/scheduled-changes/${id}`,
      options,
    );
  }

  /**
   * Update a scheduled change, overriding existing instructions with the new ones.
   * Updating a scheduled change uses the semantic patch format.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * scheduled changes.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating scheduled changes</strong></summary>
   *
   * #### deleteScheduledChange
   *
   * Removes the scheduled change.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "deleteScheduledChange" }]
   * }
   * ```
   *
   * #### replaceScheduledChangesInstructions
   *
   * Removes the existing scheduled changes and replaces them with the new
   * instructions.
   *
   * ##### Parameters
   *
   * - `value`: An array of the new actions to perform when the execution date for
   *   these scheduled changes arrives. Supported scheduled actions are `turnFlagOn`
   *   and `turnFlagOff`.
   *
   * Here's an example that replaces the scheduled changes with new instructions to
   * turn flag targeting off:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceScheduledChangesInstructions",
   *       "value": [{ "kind": "turnFlagOff" }]
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateScheduledChangesExecutionDate
   *
   * Updates the execution date for the scheduled changes.
   *
   * ##### Parameters
   *
   * - `value`: the new execution date, in Unix milliseconds.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateScheduledChangesExecutionDate",
   *       "value": 1754092860000
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * @example
   * ```ts
   * const featureFlagScheduledChange =
   *   await client.api.v2.projects.flags.environments.scheduledChanges.update(
   *     'id',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       environmentKey: 'environmentKey',
   *       instructions: [
   *         {
   *           kind: 'replaceScheduledChangesInstructions',
   *           value: [{ kind: 'turnFlagOff' }],
   *         },
   *       ],
   *       comment:
   *         'Optional comment describing the update to the scheduled changes',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: ScheduledChangeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagScheduledChange> {
    const { projectKey, featureFlagKey, environmentKey, ignoreConflicts, ...body } = params;
    return this._client.patch(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/scheduled-changes/${id}`,
      { query: { ignoreConflicts }, body, ...options },
    );
  }

  /**
   * Delete a scheduled changes workflow.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.flags.environments.scheduledChanges.delete(
   *   'id',
   *   {
   *     projectKey: 'projectKey',
   *     featureFlagKey: 'featureFlagKey',
   *     environmentKey: 'environmentKey',
   *   },
   * );
   * ```
   */
  delete(id: string, params: ScheduledChangeDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.delete(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/scheduled-changes/${id}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Get a list of scheduled changes that will be applied to the feature flag.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v2.projects.flags.environments.scheduledChanges.retrieveScheduledChanges(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *     },
   *   );
   * ```
   */
  retrieveScheduledChanges(
    environmentKey: string,
    params: ScheduledChangeRetrieveScheduledChangesParams,
    options?: RequestOptions,
  ): APIPromise<ScheduledChangeRetrieveScheduledChangesResponse> {
    const { projectKey, featureFlagKey } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/scheduled-changes`,
      options,
    );
  }

  /**
   * Create scheduled changes for a feature flag. If the `ignoreConficts` query
   * parameter is false and there are conflicts between these instructions and
   * existing scheduled changes, the request will fail. If the parameter is true and
   * there are conflicts, the request will succeed.
   *
   * @example
   * ```ts
   * const featureFlagScheduledChange =
   *   await client.api.v2.projects.flags.environments.scheduledChanges.scheduledChanges(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       executionDate: 1718467200000,
   *       instructions: [{ kind: 'turnFlagOn' }],
   *       comment:
   *         'Optional comment describing the scheduled changes',
   *     },
   *   );
   * ```
   */
  scheduledChanges(
    environmentKey: string,
    params: ScheduledChangeScheduledChangesParams,
    options?: RequestOptions,
  ): APIPromise<FeatureFlagScheduledChange> {
    const { projectKey, featureFlagKey, ignoreConflicts, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/scheduled-changes`,
      { query: { ignoreConflicts }, body, ...options },
    );
  }
}

export interface FeatureFlagScheduledChange {
  /**
   * Timestamp of when the scheduled change was created
   */
  _creationDate: number;

  /**
   * The ID of this scheduled change
   */
  _id: string;

  /**
   * The ID of the scheduled change maintainer
   */
  _maintainerId: string;

  /**
   * Version of the scheduled change
   */
  _version: number;

  /**
   * When the scheduled changes should be executed
   */
  executionDate: number;

  /**
   * The actions to perform on the execution date for these scheduled changes
   */
  instructions: Array<{ [key: string]: unknown }>;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };

  /**
   * Details on any conflicting scheduled changes
   */
  conflicts?: unknown;
}

export interface ScheduledChangeRetrieveScheduledChangesResponse {
  /**
   * Array of scheduled changes
   */
  items: Array<FeatureFlagScheduledChange>;

  /**
   * The location and content type of related resources
   */
  _links?: { [key: string]: StatisticsAPI.Link };
}

export interface ScheduledChangeRetrieveParams {
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

export interface ScheduledChangeUpdateParams {
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
   * Body param: The instructions to perform when updating. This should be an array
   * with objects that look like <code>{"kind": "update_action"}</code>. Some
   * instructions also require a <code>value</code> field in the array element.
   */
  instructions: Array<{ [key: string]: unknown }>;

  /**
   * Query param: Whether to succeed (`true`) or fail (`false`) when these new
   * instructions conflict with existing scheduled changes
   */
  ignoreConflicts?: boolean;

  /**
   * Body param: Optional comment describing the update to the scheduled changes
   */
  comment?: string;
}

export interface ScheduledChangeDeleteParams {
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

export interface ScheduledChangeRetrieveScheduledChangesParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The feature flag key
   */
  featureFlagKey: string;
}

export interface ScheduledChangeScheduledChangesParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Body param: When the scheduled changes should be executed
   */
  executionDate: number;

  /**
   * Body param: The actions to perform on the execution date for these scheduled
   * changes. This should be an array with a single object that looks like
   * <code>{"kind": "scheduled_action"}</code>. Supported scheduled actions are
   * <code>turnFlagOn</code> and <code>turnFlagOff</code>.
   */
  instructions: Array<{ [key: string]: unknown }>;

  /**
   * Query param: Whether to succeed (`true`) or fail (`false`) when these
   * instructions conflict with existing scheduled changes
   */
  ignoreConflicts?: boolean;

  /**
   * Body param: Optional comment describing the scheduled changes
   */
  comment?: string;
}

export declare namespace ScheduledChanges {
  export {
    type FeatureFlagScheduledChange as FeatureFlagScheduledChange,
    type ScheduledChangeRetrieveScheduledChangesResponse as ScheduledChangeRetrieveScheduledChangesResponse,
    type ScheduledChangeRetrieveParams as ScheduledChangeRetrieveParams,
    type ScheduledChangeUpdateParams as ScheduledChangeUpdateParams,
    type ScheduledChangeDeleteParams as ScheduledChangeDeleteParams,
    type ScheduledChangeRetrieveScheduledChangesParams as ScheduledChangeRetrieveScheduledChangesParams,
    type ScheduledChangeScheduledChangesParams as ScheduledChangeScheduledChangesParams,
  };
}
