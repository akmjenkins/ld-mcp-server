// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Triggers extends APIResource {
  /**
   * Get a flag trigger by ID.
   *
   * @example
   * ```ts
   * const triggerWorkflowRep =
   *   await client.api.v2.flags.triggers.retrieve('id', {
   *     projectKey: 'projectKey',
   *     featureFlagKey: 'featureFlagKey',
   *     environmentKey: 'environmentKey',
   *   });
   * ```
   */
  retrieve(
    id: string,
    params: TriggerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<TriggerWorkflowRep> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.get(
      path`/api/v2/flags/${projectKey}/${featureFlagKey}/triggers/${environmentKey}/${id}`,
      options,
    );
  }

  /**
   * Update a flag trigger. Updating a flag trigger uses the semantic patch format.
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * flag triggers.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating flag triggers</strong></summary>
   *
   * #### replaceTriggerActionInstructions
   *
   * Removes the existing trigger action and replaces it with the new instructions.
   *
   * ##### Parameters
   *
   * - `value`: An array of the new `kind`s of actions to perform when triggering.
   *   Supported flag actions are `turnFlagOn` and `turnFlagOff`.
   *
   * Here's an example that replaces the existing action with new instructions to
   * turn flag targeting off:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "replaceTriggerActionInstructions",
   *       "value": [{ "kind": "turnFlagOff" }]
   *     }
   *   ]
   * }
   * ```
   *
   * #### cycleTriggerUrl
   *
   * Generates a new URL for this trigger. You must update any clients using the
   * trigger to use this new URL.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "cycleTriggerUrl" }]
   * }
   * ```
   *
   * #### disableTrigger
   *
   * Disables the trigger. This saves the trigger configuration, but the trigger
   * stops running. To re-enable, use `enableTrigger`.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "disableTrigger" }]
   * }
   * ```
   *
   * #### enableTrigger
   *
   * Enables the trigger. If you previously disabled the trigger, it begins running
   * again.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [{ "kind": "enableTrigger" }]
   * }
   * ```
   *
   * </details>
   *
   * @example
   * ```ts
   * const triggerWorkflowRep =
   *   await client.api.v2.flags.triggers.update('id', {
   *     projectKey: 'projectKey',
   *     featureFlagKey: 'featureFlagKey',
   *     environmentKey: 'environmentKey',
   *   });
   * ```
   */
  update(id: string, params: TriggerUpdateParams, options?: RequestOptions): APIPromise<TriggerWorkflowRep> {
    const { projectKey, featureFlagKey, environmentKey, ...body } = params;
    return this._client.patch(
      path`/api/v2/flags/${projectKey}/${featureFlagKey}/triggers/${environmentKey}/${id}`,
      { body, ...options },
    );
  }

  /**
   * Delete a flag trigger by ID.
   *
   * @example
   * ```ts
   * await client.api.v2.flags.triggers.delete('id', {
   *   projectKey: 'projectKey',
   *   featureFlagKey: 'featureFlagKey',
   *   environmentKey: 'environmentKey',
   * });
   * ```
   */
  delete(id: string, params: TriggerDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.delete(
      path`/api/v2/flags/${projectKey}/${featureFlagKey}/triggers/${environmentKey}/${id}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface TriggerWorkflowRep {
  /**
   * Timestamp of when the flag trigger was created
   */
  _creationDate?: number;

  /**
   * The ID of this flag trigger
   */
  _id?: string;

  /**
   * The unique identifier of the integration for your trigger
   */
  _integrationKey?: string;

  /**
   * Timestamp of when the trigger was most recently executed
   */
  _lastTriggeredAt?: number;

  /**
   * The location and content type of related resources
   */
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * Details on the member who maintains this flag trigger
   */
  _maintainer?: RelayAutoConfigsAPI.MemberSummary;

  /**
   * The ID of the flag trigger maintainer
   */
  _maintainerId?: string;

  /**
   * Details on recent flag trigger requests.
   */
  _recentTriggerBodies?: Array<TriggerWorkflowRep.RecentTriggerBody>;

  /**
   * Number of times the trigger has been executed
   */
  _triggerCount?: number;

  /**
   * The flag trigger version
   */
  _version?: number;

  /**
   * Whether the flag trigger is currently enabled
   */
  enabled?: boolean;

  /**
   * Details on the action to perform when triggering
   */
  instructions?: Array<Record<string, unknown>>;

  /**
   * The unguessable URL for this flag trigger
   */
  triggerURL?: string;
}

export namespace TriggerWorkflowRep {
  export interface RecentTriggerBody {
    /**
     * The marshalled JSON request body for the incoming trigger webhook. If this is
     * empty or contains invalid JSON, the timestamp is recorded but this field will be
     * empty.
     */
    jsonBody?: Record<string, unknown>;

    /**
     * Timestamp of the incoming trigger webhook
     */
    timestamp?: number;
  }
}

export interface TriggerRetrieveParams {
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

export interface TriggerUpdateParams {
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
   * Body param: Optional comment describing the update
   */
  comment?: string;

  /**
   * Body param: The instructions to perform when updating. This should be an array
   * with objects that look like <code>{"kind": "trigger_action"}</code>.
   */
  instructions?: Array<Record<string, unknown>>;
}

export interface TriggerDeleteParams {
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

export declare namespace Triggers {
  export {
    type TriggerWorkflowRep as TriggerWorkflowRep,
    type TriggerRetrieveParams as TriggerRetrieveParams,
    type TriggerUpdateParams as TriggerUpdateParams,
    type TriggerDeleteParams as TriggerDeleteParams,
  };
}
