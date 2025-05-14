// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as WorkflowsAPI from './workflows';
import * as StatisticsAPI from '../../../code-refs/statistics';
import { APIPromise } from '../../../../../../core/api-promise';
import { buildHeaders } from '../../../../../../internal/headers';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Workflows extends APIResource {
  /**
   * Create a workflow for a feature flag. You can create a workflow directly, or you
   * can apply a template to create a new workflow.
   *
   * ### Creating a workflow
   *
   * You can use the create workflow endpoint to create a workflow directly by adding
   * a `stages` array to the request body.
   *
   * For each stage, define the `name`, `conditions` when the stage should be
   * executed, and `action` that describes the stage.
   *
   * <details>
   * <summary>Click to expand example</summary>
   *
   * _Example request body_
   *
   * ```json
   * {
   *   "name": "Progressive rollout starting in two days",
   *   "description": "Turn flag targeting on and increase feature rollout in 10% increments each day",
   *   "stages": [
   *     {
   *       "name": "10% rollout on day 1",
   *       "conditions": [
   *         {
   *           "kind": "schedule",
   *           "scheduleKind": "relative", // or "absolute"
   *           //  If "scheduleKind" is "absolute", set "executionDate";
   *           // "waitDuration" and "waitDurationUnit" will be ignored
   *           "waitDuration": 2,
   *           "waitDurationUnit": "calendarDay"
   *         },
   *         {
   *           "kind": "ld-approval",
   *           "notifyMemberIds": ["507f1f77bcf86cd799439011"],
   *           "notifyTeamKeys": ["team-key-123abc"]
   *         }
   *       ],
   *       "action": {
   *         "instructions": [
   *           {
   *             "kind": "turnFlagOn"
   *           },
   *           {
   *             "kind": "updateFallthroughVariationOrRollout",
   *             "rolloutWeights": {
   *               "452f5fb5-7320-4ba3-81a1-8f4324f79d49": 90000,
   *               "fc15f6a4-05d3-4aa4-a997-446be461345d": 10000
   *             }
   *           }
   *         ]
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * ### Creating a workflow by applying a workflow template
   *
   * You can also create a workflow by applying a workflow template. If you pass a
   * valid workflow template key as the `templateKey` query parameter with the
   * request, the API will attempt to create a new workflow with the stages defined
   * in the workflow template with the corresponding key.
   *
   * #### Applicability of stages
   *
   * Templates are created in the context of a particular flag in a particular
   * environment in a particular project. However, because workflows created from a
   * template can be applied to any project, environment, and flag, some steps of the
   * workflow may need to be updated in order to be applicable for the target
   * resource.
   *
   * You can pass a `dryRun` query parameter to tell the API to return a report of
   * which steps of the workflow template are applicable in the target
   * project/environment/flag, and which will need to be updated. When the `dryRun`
   * query parameter is present the response body includes a `meta` property that
   * holds a list of parameters that could potentially be inapplicable for the target
   * resource. Each of these parameters will include a `valid` field. You will need
   * to update any invalid parameters in order to create the new workflow. You can do
   * this using the `parameters` property, which overrides the workflow template
   * parameters.
   *
   * #### Overriding template parameters
   *
   * You can use the `parameters` property in the request body to tell the API to
   * override the specified workflow template parameters with new values that are
   * specific to your target project/environment/flag.
   *
   * <details>
   * <summary>Click to expand example</summary>
   *
   * _Example request body_
   *
   * ```json
   * {
   *   "name": "workflow created from my-template",
   *   "description": "description of my workflow",
   *   "parameters": [
   *     {
   *       "_id": "62cf2bc4cadbeb7697943f3b",
   *       "path": "/clauses/0/values",
   *       "default": {
   *         "value": ["updated-segment"]
   *       }
   *     },
   *     {
   *       "_id": "62cf2bc4cadbeb7697943f3d",
   *       "path": "/variationId",
   *       "default": {
   *         "value": "abcd1234-abcd-1234-abcd-1234abcd12"
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * If there are any steps in the template that are not applicable to the target
   * resource, the workflow will not be created, and the `meta` property will be
   * included in the response body detailing which parameters need to be updated.
   *
   * @example
   * ```ts
   * const customWorkflowOutput =
   *   await client.api.v2.projects.flags.environments.workflows.create('environmentKey', {
   *     projectKey: 'projectKey',
   *     featureFlagKey: 'featureFlagKey',
   *     name: 'Progressive rollout starting in two days',
   *     description: 'Turn flag on for 10% of customers each day',
   *     stages: [
   *       {
   *         action: { ... },
   *         conditions: [
   *           { ... },
   *         ],
   *         name: '10% rollout on day 1',
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    environmentKey: string,
    params: WorkflowCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomWorkflowOutput> {
    const { projectKey, featureFlagKey, dryRun, query_templateKey, ...body } = params;
    return this._client.post(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/workflows`,
      { query: { dryRun, templateKey: query_templateKey }, body, ...options },
    );
  }

  /**
   * Get a specific workflow by ID.
   *
   * @example
   * ```ts
   * const customWorkflowOutput =
   *   await client.api.v2.projects.flags.environments.workflows.retrieve(
   *     'workflowId',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *       environmentKey: 'environmentKey',
   *     },
   *   );
   * ```
   */
  retrieve(
    workflowID: string,
    params: WorkflowRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CustomWorkflowOutput> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/workflows/${workflowID}`,
      options,
    );
  }

  /**
   * Display workflows associated with a feature flag.
   *
   * @example
   * ```ts
   * const workflows =
   *   await client.api.v2.projects.flags.environments.workflows.list(
   *     'environmentKey',
   *     {
   *       projectKey: 'projectKey',
   *       featureFlagKey: 'featureFlagKey',
   *     },
   *   );
   * ```
   */
  list(
    environmentKey: string,
    params: WorkflowListParams,
    options?: RequestOptions,
  ): APIPromise<WorkflowListResponse> {
    const { projectKey, featureFlagKey, ...query } = params;
    return this._client.get(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/workflows`,
      { query, ...options },
    );
  }

  /**
   * Delete a workflow from a feature flag.
   *
   * @example
   * ```ts
   * await client.api.v2.projects.flags.environments.workflows.delete(
   *   'workflowId',
   *   {
   *     projectKey: 'projectKey',
   *     featureFlagKey: 'featureFlagKey',
   *     environmentKey: 'environmentKey',
   *   },
   * );
   * ```
   */
  delete(workflowID: string, params: WorkflowDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, featureFlagKey, environmentKey } = params;
    return this._client.delete(
      path`/api/v2/projects/${projectKey}/flags/${featureFlagKey}/environments/${environmentKey}/workflows/${workflowID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface CustomWorkflowOutput {
  /**
   * Any conflicts that are present in the workflow stages
   */
  _conflicts: Array<CustomWorkflowOutput.Conflict>;

  /**
   * Timestamp of when the workflow was created
   */
  _creationDate: number;

  /**
   * The current execution status of the workflow
   */
  _execution: ExecutionOutput;

  /**
   * The ID of the workflow
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * The member ID of the maintainer of the workflow. Defaults to the workflow
   * creator.
   */
  _maintainerId: string;

  /**
   * The version of the workflow
   */
  _version: number;

  /**
   * The name of the workflow
   */
  name: string;

  /**
   * A brief description of the workflow
   */
  description?: string;

  /**
   * The kind of workflow
   */
  kind?: string;

  /**
   * For workflows being created from a workflow template, this value holds any
   * parameters that could potentially be incompatible with the current project,
   * environment, or flag
   */
  meta?: CustomWorkflowOutput.Meta;

  /**
   * The stages that make up the workflow. Each stage contains conditions and
   * actions.
   */
  stages?: Array<StageOutput>;

  /**
   * For workflows being created from a workflow template, this value is the
   * template's key
   */
  templateKey?: string;
}

export namespace CustomWorkflowOutput {
  export interface Conflict {
    /**
     * Message about the conflict
     */
    message: string;

    /**
     * The stage ID
     */
    stageId: string;
  }

  /**
   * For workflows being created from a workflow template, this value holds any
   * parameters that could potentially be incompatible with the current project,
   * environment, or flag
   */
  export interface Meta {
    parameters?: Array<Meta.Parameter>;
  }

  export namespace Meta {
    export interface Parameter {
      /**
       * The ID of the condition or instruction referenced by this parameter
       */
      _id?: string;

      /**
       * The default value of the parameter and other relevant metadata
       */
      default?: Parameter.Default;

      /**
       * The path of the property to parameterize, relative to its parent condition or
       * instruction
       */
      path?: string;

      /**
       * Whether the default value is valid for the target flag and environment
       */
      valid?: boolean;
    }

    export namespace Parameter {
      /**
       * The default value of the parameter and other relevant metadata
       */
      export interface Default {
        /**
         * Variation value for boolean flags. Not applicable for non-boolean flags.
         */
        booleanVariationValue?: boolean;

        /**
         * Metadata related to add rule instructions
         */
        ruleClause?: Default.RuleClause;

        /**
         * The default value for the given parameter
         */
        value?: unknown;
      }

      export namespace Default {
        /**
         * Metadata related to add rule instructions
         */
        export interface RuleClause {
          /**
           * The attribute the rule applies to, for example, last name or email address
           */
          attribute?: string;

          /**
           * Whether the operator should be negated
           */
          negate?: boolean;

          /**
           * The operator to apply to the given attribute
           */
          op?:
            | 'in'
            | 'endsWith'
            | 'startsWith'
            | 'matches'
            | 'contains'
            | 'lessThan'
            | 'lessThanOrEqual'
            | 'greaterThan'
            | 'greaterThanOrEqual'
            | 'before'
            | 'after'
            | 'segmentMatch'
            | 'semVerEqual'
            | 'semVerLessThan'
            | 'semVerGreaterThan';
        }
      }
    }
  }
}

export interface ExecutionOutput {
  /**
   * The status of the execution of this workflow stage
   */
  status: string;

  /**
   * Timestamp of when the workflow was completed.
   */
  stopDate?: number;
}

export interface StageInput {
  /**
   * An <code>instructions</code> field containing an array of instructions for the
   * stage. Each object in the array uses the semantic patch format for updating a
   * feature flag.
   */
  action?: StageInput.Action;

  /**
   * An array of conditions for the stage
   */
  conditions?: Array<StageInput.Condition>;

  /**
   * Whether to execute the conditions in sequence for the given stage
   */
  executeConditionsInSequence?: boolean;

  /**
   * The stage name
   */
  name?: string;
}

export namespace StageInput {
  /**
   * An <code>instructions</code> field containing an array of instructions for the
   * stage. Each object in the array uses the semantic patch format for updating a
   * feature flag.
   */
  export interface Action {
    /**
     * An array of instructions for the stage. Each object in the array uses the
     * semantic patch format for updating a feature flag.
     */
    instructions?: unknown;
  }

  export interface Condition {
    /**
     * A description of the approval required for this stage
     */
    description?: string;

    /**
     * Whether the workflow stage should be executed immediately
     */
    executeNow?: boolean;

    /**
     * For workflow stages whose scheduled execution is absolute, the time, in Unix
     * milliseconds, when the stage should start.
     */
    executionDate?: number;

    /**
     * The type of condition to meet before executing this stage of the workflow. Use
     * <code>schedule</code> to schedule a workflow stage. Use <code>ld-approval</code>
     * to add an approval request to a workflow stage.
     */
    kind?: string;

    /**
     * A list of member IDs for the members to request approval from for this stage
     */
    notifyMemberIds?: Array<string>;

    /**
     * A list of team keys for the teams to request approval from for this stage
     */
    notifyTeamKeys?: Array<string>;

    /**
     * Whether the scheduled execution of the workflow stage is relative or absolute.
     * If relative, the <code>waitDuration</code> and <code>waitDurationUnit</code>
     * specify when the execution occurs. If absolute, the <code>executionDate</code>
     * specifies when the execution occurs.
     */
    scheduleKind?: 'absolute' | 'relative';

    /**
     * For workflow stages whose scheduled execution is relative, how far in the future
     * the stage should start.
     */
    waitDuration?: number;

    /**
     * For workflow stages whose scheduled execution is relative, the unit of measure
     * for the <code>waitDuration</code>.
     */
    waitDurationUnit?: 'minute' | 'hour' | 'calendarDay' | 'calendarWeek';
  }
}

export interface StageOutput {
  /**
   * Details on the execution of this stage
   */
  _execution: ExecutionOutput;

  /**
   * The ID of this stage
   */
  _id: string;

  /**
   * The type of instruction, and an array of instructions for the stage. Each object
   * in the array uses the semantic patch format for updating a feature flag.
   */
  action: StageOutput.Action;

  /**
   * An array of conditions for the stage
   */
  conditions: Array<StageOutput.Condition>;

  /**
   * The stage name
   */
  name?: string;
}

export namespace StageOutput {
  /**
   * The type of instruction, and an array of instructions for the stage. Each object
   * in the array uses the semantic patch format for updating a feature flag.
   */
  export interface Action {
    /**
     * An array of instructions for the stage. Each object in the array uses the
     * semantic patch format for updating a feature flag.
     */
    instructions: Array<Record<string, unknown>>;

    /**
     * The type of action for this stage
     */
    kind: string;
  }

  export interface Condition {
    _execution: WorkflowsAPI.ExecutionOutput;

    _id: string;

    allReviews: Array<Condition.AllReview>;

    description: string;

    notifyMemberIds: Array<string>;

    reviewStatus: string;

    appliedDate?: number;

    executionDate?: number;

    kind?: string;

    scheduleKind?: string;

    waitDuration?: number;

    waitDurationUnit?: string;
  }

  export namespace Condition {
    export interface AllReview {
      _id: string;

      kind: string;

      comment?: string;

      creationDate?: number;

      memberId?: string;

      serviceTokenId?: string;
    }
  }
}

export interface WorkflowListResponse {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of workflows
   */
  items: Array<CustomWorkflowOutput>;

  /**
   * Total number of workflows
   */
  totalCount: number;
}

export interface WorkflowCreateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Body param: The workflow name
   */
  name: string;

  /**
   * Query param: Whether to call the endpoint in dry-run mode
   */
  dryRun?: boolean;

  /**
   * Query param: The template key to apply as a starting point for the new workflow
   */
  query_templateKey?: string;

  /**
   * Body param: The workflow description
   */
  description?: string;

  /**
   * Body param: The ID of the workflow maintainer. Defaults to the workflow creator.
   */
  maintainerId?: string;

  /**
   * Body param: A list of the workflow stages
   */
  stages?: Array<StageInput>;

  /**
   * Body param: The template key
   */
  body_templateKey?: string;
}

export interface WorkflowRetrieveParams {
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

export interface WorkflowListParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The feature flag key
   */
  featureFlagKey: string;

  /**
   * Query param: The maximum number of workflows to return. Defaults to 20.
   */
  limit?: number;

  /**
   * Query param: Where to start in the list. Defaults to 0. Use this with
   * pagination. For example, an offset of 10 skips the first ten items and then
   * returns the next items in the list, up to the query `limit`.
   */
  offset?: number;

  /**
   * Query param: A field to sort the items by. Prefix field by a dash ( - ) to sort
   * in descending order. This endpoint supports sorting by `creationDate` or
   * `stopDate`.
   */
  sort?: string;

  /**
   * Query param: Filter results by workflow status. Valid status filters are
   * `active`, `completed`, and `failed`.
   */
  status?: string;
}

export interface WorkflowDeleteParams {
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

export declare namespace Workflows {
  export {
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
