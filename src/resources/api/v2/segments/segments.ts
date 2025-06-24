// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as MetricsAPI from '../metrics';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as ApplicationsAPI from '../applications/applications';
import * as StatisticsAPI from '../code-refs/statistics';
import * as ContextsAPI from './contexts';
import {
  BigSegmentTarget,
  ContextCreateParams,
  ContextRetrieveParams,
  Contexts,
  SegmentUserList,
  SegmentUserState,
} from './contexts';
import * as ExpiringTargetsAPI from './expiring-targets';
import {
  ExpiringTargetRetrieveParams,
  ExpiringTargetUpdateParams,
  ExpiringTargets,
} from './expiring-targets';
import * as ExpiringUserTargetsAPI from './expiring-user-targets';
import {
  ExpiringUserTargetRetrieveParams,
  ExpiringUserTargetUpdateParams,
  ExpiringUserTargets,
} from './expiring-user-targets';
import * as ExportsAPI from './exports';
import { ExportCreateParams, ExportRetrieveParams, ExportRetrieveResponse, Exports } from './exports';
import * as ImportsAPI from './imports';
import { ImportCreateParams, ImportRetrieveParams, ImportRetrieveResponse, Imports } from './imports';
import * as UsersAPI from './users';
import { UserCreateParams, UserRetrieveParams, Users } from './users';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Segments extends APIResource {
  contexts: ContextsAPI.Contexts = new ContextsAPI.Contexts(this._client);
  exports: ExportsAPI.Exports = new ExportsAPI.Exports(this._client);
  imports: ImportsAPI.Imports = new ImportsAPI.Imports(this._client);
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  expiringTargets: ExpiringTargetsAPI.ExpiringTargets = new ExpiringTargetsAPI.ExpiringTargets(this._client);
  expiringUserTargets: ExpiringUserTargetsAPI.ExpiringUserTargets =
    new ExpiringUserTargetsAPI.ExpiringUserTargets(this._client);

  /**
   * Get a single segment by key.<br/><br/>Segments can be rule-based, list-based, or
   * synced. Big segments include larger list-based segments and synced segments.
   * Some fields in the response only apply to big segments.
   *
   * @example
   * ```ts
   * const userSegment = await client.api.v2.segments.retrieve(
   *   'segmentKey',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *   },
   * );
   * ```
   */
  retrieve(
    segmentKey: string,
    params: SegmentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UserSegment> {
    const { projectKey, environmentKey } = params;
    return this._client.get(path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}`, options);
  }

  /**
   * Update a segment. The request body must be a valid semantic patch, JSON patch,
   * or JSON merge patch. To learn more the different formats, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * ### Using semantic patches on a segment
   *
   * To make a semantic patch request, you must append
   * `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To
   * learn more, read
   * [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * The body of a semantic patch request for updating segments requires an
   * `environmentKey` in addition to `instructions` and an optional `comment`. The
   * body of the request takes the following properties:
   *
   * - `comment` (string): (Optional) A description of the update.
   * - `environmentKey` (string): (Required) The key of the LaunchDarkly environment.
   * - `instructions` (array): (Required) A list of actions the update should
   *   perform. Each action in the list must be an object with a `kind` property that
   *   indicates the instruction. If the action requires parameters, you must include
   *   those parameters as additional fields in the object.
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating
   * segments.
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating segment details and settings</strong></summary>
   *
   * #### addTags
   *
   * Adds tags to the segment.
   *
   * ##### Parameters
   *
   * - `values`: A list of tags to add.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addTags",
   *       "values": ["tag1", "tag2"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeTags
   *
   * Removes tags from the segment.
   *
   * ##### Parameters
   *
   * - `values`: A list of tags to remove.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeTags",
   *       "values": ["tag1", "tag2"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateName
   *
   * Updates the name of the segment.
   *
   * ##### Parameters
   *
   * - `value`: Name of the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateName",
   *       "value": "Updated segment name"
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating segment individual targets</strong></summary>
   *
   * #### addExcludedTargets
   *
   * Adds context keys to the individual context targets excluded from the segment
   * for the specified `contextKind`. Returns an error if this causes the same
   * context key to be both included and excluded.
   *
   * ##### Parameters
   *
   * - `contextKind`: The context kind the targets should be added to.
   * - `values`: List of keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addExcludedTargets",
   *       "contextKind": "org",
   *       "values": ["org-key-123abc", "org-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### addExcludedUsers
   *
   * Adds user keys to the individual user targets excluded from the segment. Returns
   * an error if this causes the same user key to be both included and excluded. If
   * you are working with contexts, use `addExcludedTargets` instead of this
   * instruction.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addExcludedUsers",
   *       "values": ["user-key-123abc", "user-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### addIncludedTargets
   *
   * Adds context keys to the individual context targets included in the segment for
   * the specified `contextKind`. Returns an error if this causes the same context
   * key to be both included and excluded.
   *
   * ##### Parameters
   *
   * - `contextKind`: The context kind the targets should be added to.
   * - `values`: List of keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addIncludedTargets",
   *       "contextKind": "org",
   *       "values": ["org-key-123abc", "org-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### addIncludedUsers
   *
   * Adds user keys to the individual user targets included in the segment. Returns
   * an error if this causes the same user key to be both included and excluded. If
   * you are working with contexts, use `addIncludedTargets` instead of this
   * instruction.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addIncludedUsers",
   *       "values": ["user-key-123abc", "user-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeExcludedTargets
   *
   * Removes context keys from the individual context targets excluded from the
   * segment for the specified `contextKind`.
   *
   * ##### Parameters
   *
   * - `contextKind`: The context kind the targets should be removed from.
   * - `values`: List of keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeExcludedTargets",
   *       "contextKind": "org",
   *       "values": ["org-key-123abc", "org-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeExcludedUsers
   *
   * Removes user keys from the individual user targets excluded from the segment. If
   * you are working with contexts, use `removeExcludedTargets` instead of this
   * instruction.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeExcludedUsers",
   *       "values": ["user-key-123abc", "user-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeIncludedTargets
   *
   * Removes context keys from the individual context targets included in the segment
   * for the specified `contextKind`.
   *
   * ##### Parameters
   *
   * - `contextKind`: The context kind the targets should be removed from.
   * - `values`: List of keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeIncludedTargets",
   *       "contextKind": "org",
   *       "values": ["org-key-123abc", "org-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeIncludedUsers
   *
   * Removes user keys from the individual user targets included in the segment. If
   * you are working with contexts, use `removeIncludedTargets` instead of this
   * instruction.
   *
   * ##### Parameters
   *
   * - `values`: List of user keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeIncludedUsers",
   *       "values": ["user-key-123abc", "user-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * <details>
   * <summary>Click to expand instructions for <strong>updating segment targeting rules</strong></summary>
   *
   * #### addClauses
   *
   * Adds the given clauses to the rule indicated by `ruleId`.
   *
   * ##### Parameters
   *
   * - `clauses`: Array of clause objects, with `contextKind` (string), `attribute`
   *   (string), `op` (string), `negate` (boolean), and `values` (array of strings,
   *   numbers, or dates) properties. The `contextKind`, if not provided, defaults to
   *   `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The
   *   `op` must be lower-case.
   * - `ruleId`: ID of a rule in the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addClauses",
   *       "clauses": [
   *         {
   *           "attribute": "email",
   *           "negate": false,
   *           "op": "contains",
   *           "values": ["value1"]
   *         }
   *       ],
   *       "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   *     }
   *   ]
   * }
   * ```
   *
   * #### addRule
   *
   * Adds a new targeting rule to the segment. The rule may contain `clauses`.
   *
   * ##### Parameters
   *
   * - `clauses`: Array of clause objects, with `contextKind` (string), `attribute`
   *   (string), `op` (string), `negate` (boolean), and `values` (array of strings,
   *   numbers, or dates) properties. The `contextKind`, if not provided, defaults to
   *   `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The
   *   `op` must be lower-case.
   * - `description`: A description of the rule.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addRule",
   *       "clauses": [
   *         {
   *           "attribute": "email",
   *           "op": "contains",
   *           "negate": false,
   *           "values": ["@launchdarkly.com"]
   *         }
   *       ],
   *       "description": "Targeting rule for LaunchDarkly employees"
   *     }
   *   ]
   * }
   * ```
   *
   * #### addValuesToClause
   *
   * Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate.
   * Does not update the context kind, attribute, or operator.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   * - `clauseId`: ID of a clause in that rule.
   * - `values`: Array of strings, case sensitive.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addValuesToClause",
   *       "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *       "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
   *       "values": ["beta_testers"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeClauses
   *
   * Removes the clauses specified by `clauseIds` from the rule indicated by
   * `ruleId`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   * - `clauseIds`: Array of IDs of clauses in the rule.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeClauses",
   *       "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *       "clauseIds": [
   *         "10a58772-3121-400f-846b-b8a04e8944ed",
   *         "36a461dc-235e-4b08-97b9-73ce9365873e"
   *       ]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeRule
   *
   * Removes the targeting rule specified by `ruleId`. Does nothing if the rule does
   * not exist.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeRule",
   *       "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeValuesFromClause
   *
   * Removes `values` from the values of the clause indicated by `ruleId` and
   * `clauseId`. Does not update the context kind, attribute, or operator.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   * - `clauseId`: ID of a clause in that rule.
   * - `values`: Array of strings, case sensitive.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeValuesFromClause",
   *       "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *       "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
   *       "values": ["beta_testers"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### reorderRules
   *
   * Rearranges the rules to match the order given in `ruleIds`. Returns an error if
   * `ruleIds` does not match the current set of rules in the segment.
   *
   * ##### Parameters
   *
   * - `ruleIds`: Array of IDs of all targeting rules in the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "reorderRules",
   *       "ruleIds": [
   *         "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *         "63c238d1-835d-435e-8f21-c8d5e40b2a3d"
   *       ]
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateClause
   *
   * Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the segment.
   * - `clauseId`: ID of a clause in that rule.
   * - `clause`: New `clause` object, with `contextKind` (string), `attribute`
   *   (string), `op` (string), `negate` (boolean), and `values` (array of strings,
   *   numbers, or dates) properties. The `contextKind`, if not provided, defaults to
   *   `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The
   *   `op` must be lower-case.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateClause",
   *       "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *       "clauseId": "10c7462a-2062-45ba-a8bb-dfb3de0f8af5",
   *       "clause": {
   *         "contextKind": "user",
   *         "attribute": "country",
   *         "op": "in",
   *         "negate": false,
   *         "values": ["Mexico", "Canada"]
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateRuleDescription
   *
   * Updates the description of the segment targeting rule.
   *
   * ##### Parameters
   *
   * - `description`: The new human-readable description for this rule.
   * - `ruleId`: The ID of the rule. You can retrieve this by making a GET request
   *   for the segment.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "updateRuleDescription",
   *       "description": "New rule description",
   *       "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   *     }
   *   ]
   * }
   * ```
   *
   * #### updateRuleRolloutAndContextKind
   *
   * For a rule that includes a percentage of targets, updates the percentage and the
   * context kind of the targets to include.
   *
   * ##### Parameters
   *
   * - `ruleId`: The ID of a targeting rule in the segment that includes a percentage
   *   of targets.
   * - `weight`: The weight, in thousandths of a percent (0-100000).
   * - `contextKind`: The context kind.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "reorderRules",
   *       "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *       "weight": "20000",
   *       "contextKind": "device"
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * <details>
   * <summary>Click to expand instructions for <strong>working with Big Segments</strong></summary>
   *
   * A "big segment" is a segment that is either a synced segment, or a list-based
   * segment with more than 15,000 entries that includes only one targeted context
   * kind. LaunchDarkly uses different implementations for different types of
   * segments so that all of your segments have good performance.
   *
   * The following semantic patch instructions apply only to these
   * [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments).
   *
   * #### addBigSegmentExcludedTargets
   *
   * For use with
   * [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Adds context keys to the context targets excluded from the segment.
   * Returns an error if this causes the same context key to be both included and
   * excluded.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addBigSegmentExcludedTargets",
   *       "values": ["org-key-123abc", "org-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### addBigSegmentIncludedTargets
   *
   * For use with
   * [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Adds context keys to the context targets included in the segment. Returns
   * an error if this causes the same context key to be both included and excluded.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "addBigSegmentIncludedTargets",
   *       "values": ["org-key-123abc", "org-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### processBigSegmentImport
   *
   * For use with
   * [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Processes a segment import.
   *
   * ##### Parameters
   *
   * - `importId`: The ID of the import. The import ID is returned in the `Location`
   *   header as part of the
   *   [Create big segment import](https://launchdarkly.com/docs/api/segments/create-big-segment-import)
   *   request.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "processBigSegmentImport",
   *       "importId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeBigSegmentExcludedTargets
   *
   * For use with
   * [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Removes context keys from the context targets excluded from the segment.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeBigSegmentExcludedTargets",
   *       "values": ["org-key-123abc", "org-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * #### removeBigSegmentIncludedTargets
   *
   * For use with
   * [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments)
   * ONLY. Removes context keys from the context targets included in the segment.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "instructions": [
   *     {
   *       "kind": "removeBigSegmentIncludedTargets",
   *       "values": ["org-key-123abc", "org-key-456def"]
   *     }
   *   ]
   * }
   * ```
   *
   * </details>
   *
   * ### Using JSON patches on a segment
   *
   * If you do not include the header described above, you can use a
   * [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or
   * [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation
   * of the desired changes.
   *
   * For example, to update the description for a segment with a JSON patch, use the
   * following request body:
   *
   * ```json
   * {
   *   "patch": [
   *     {
   *       "op": "replace",
   *       "path": "/description",
   *       "value": "new description"
   *     }
   *   ]
   * }
   * ```
   *
   * To update fields in the segment that are arrays, set the `path` to the name of
   * the field and then append `/<array index>`. Use `/0` to add the new entry to the
   * beginning of the array. Use `/-` to add the new entry to the end of the array.
   *
   * For example, to add a rule to a segment, use the following request body:
   *
   * ```json
   * {
   *   "patch": [
   *     {
   *       "op": "add",
   *       "path": "/rules/0",
   *       "value": {
   *         "clauses": [
   *           {
   *             "contextKind": "user",
   *             "attribute": "email",
   *             "op": "endsWith",
   *             "values": [".edu"],
   *             "negate": false
   *           }
   *         ]
   *       }
   *     }
   *   ]
   * }
   * ```
   *
   * To add or remove targets from segments, we recommend using semantic patch.
   * Semantic patch for segments includes specific instructions for adding and
   * removing both included and excluded targets.
   *
   * @example
   * ```ts
   * const userSegment = await client.api.v2.segments.update(
   *   'segmentKey',
   *   {
   *     projectKey: 'projectKey',
   *     environmentKey: 'environmentKey',
   *     patch: [
   *       {
   *         op: 'replace',
   *         path: '/description',
   *         value: 'New description for this segment',
   *       },
   *       { op: 'add', path: '/tags/0', value: 'example' },
   *     ],
   *   },
   * );
   * ```
   */
  update(segmentKey: string, params: SegmentUpdateParams, options?: RequestOptions): APIPromise<UserSegment> {
    const { projectKey, environmentKey, ...body } = params;
    return this._client.patch(path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a segment.
   *
   * @example
   * ```ts
   * await client.api.v2.segments.delete('segmentKey', {
   *   projectKey: 'projectKey',
   *   environmentKey: 'environmentKey',
   * });
   * ```
   */
  delete(segmentKey: string, params: SegmentDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { projectKey, environmentKey } = params;
    return this._client.delete(path`/api/v2/segments/${projectKey}/${environmentKey}/${segmentKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SegmentTarget {
  contextKind?: string;

  values?: Array<string>;
}

export interface UserSegment {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * Timestamp of when the segment was created
   */
  creationDate: number;

  /**
   * Whether the segment has been deleted
   */
  deleted: boolean;

  /**
   * For big segments, how many times this segment has been created.
   */
  generation: number;

  /**
   * A unique key used to reference the segment
   */
  key: string;

  /**
   * Timestamp of when the segment was last modified
   */
  lastModifiedDate: number;

  /**
   * A human-friendly name for the segment.
   */
  name: string;

  /**
   * An array of the targeting rules for this segment.
   */
  rules: Array<UserSegment.Rule>;

  /**
   * Tags for the segment. Defaults to an empty array.
   */
  tags: Array<string>;

  /**
   * Version of the segment
   */
  version: number;

  _access?: RelayAutoConfigsAPI.Access;

  /**
   * The external data store backing this segment. Only applies to synced segments.
   */
  _external?: string;

  /**
   * The URL for the external data store backing this segment. Only applies to synced
   * segments.
   */
  _externalLink?: string;

  /**
   * A list of flags targeting this segment. Only included when getting a single
   * segment, using the <code>getSegment</code> endpoint.
   */
  _flags?: Array<MetricsAPI.FlagListingRep>;

  /**
   * Whether an import is currently in progress for the specified segment. Only
   * applies to big segments.
   */
  _importInProgress?: boolean;

  /**
   * Details on the external data store backing this segment. Only applies to big
   * segments.
   */
  _unboundedMetadata?: UserSegment._UnboundedMetadata;

  /**
   * A description of the segment's purpose. Defaults to <code>null</code> and is
   * omitted in the response if not provided.
   */
  description?: string;

  /**
   * An array of keys for excluded targets. Segment rules bypass individual excluded
   * targets, so they will never be included based on rules. Excluded targets may
   * still be included explicitly. This value is omitted for list-based segments over
   * 15,000 entries, also called big segments.
   */
  excluded?: Array<string>;

  excludedContexts?: Array<SegmentTarget>;

  /**
   * An array of keys for included targets. Included individual targets are always
   * segment members, regardless of segment rules. For list-based segments over
   * 15,000 entries, also called big segments, this array is either empty or omitted.
   */
  included?: Array<string>;

  includedContexts?: Array<SegmentTarget>;

  /**
   * Whether this is a standard segment (<code>false</code>) or a big segment
   * (<code>true</code>). Standard segments include rule-based segments and smaller
   * list-based segments. Big segments include larger list-based segments and synced
   * segments. If omitted, the segment is a standard segment.
   */
  unbounded?: boolean;

  /**
   * For big segments, the targeted context kind.
   */
  unboundedContextKind?: string;
}

export namespace UserSegment {
  export interface Rule {
    clauses: Array<Rule.Clause>;

    _id?: string;

    bucketBy?: string;

    description?: string;

    rolloutContextKind?: string;

    weight?: number;
  }

  export namespace Rule {
    export interface Clause {
      attribute: string;

      negate: boolean;

      op: string;

      values: Array<unknown>;

      _id?: string;

      contextKind?: string;
    }
  }

  /**
   * Details on the external data store backing this segment. Only applies to big
   * segments.
   */
  export interface _UnboundedMetadata {
    deleted?: boolean;

    envId?: string;

    excludedCount?: number;

    includedCount?: number;

    lastModified?: number;

    segmentId?: string;

    version?: number;
  }
}

export interface SegmentRetrieveParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

export interface SegmentUpdateParams {
  /**
   * Path param: The project key
   */
  projectKey: string;

  /**
   * Path param: The environment key
   */
  environmentKey: string;

  /**
   * Body param: A JSON patch representation of the change to make
   */
  patch: Array<ApplicationsAPI.PatchOperation>;

  /**
   * Body param: Optional comment
   */
  comment?: string;
}

export interface SegmentDeleteParams {
  /**
   * The project key
   */
  projectKey: string;

  /**
   * The environment key
   */
  environmentKey: string;
}

Segments.Contexts = Contexts;
Segments.Exports = Exports;
Segments.Imports = Imports;
Segments.Users = Users;
Segments.ExpiringTargets = ExpiringTargets;
Segments.ExpiringUserTargets = ExpiringUserTargets;

export declare namespace Segments {
  export {
    type SegmentTarget as SegmentTarget,
    type UserSegment as UserSegment,
    type SegmentRetrieveParams as SegmentRetrieveParams,
    type SegmentUpdateParams as SegmentUpdateParams,
    type SegmentDeleteParams as SegmentDeleteParams,
  };

  export {
    Contexts as Contexts,
    type BigSegmentTarget as BigSegmentTarget,
    type SegmentUserList as SegmentUserList,
    type SegmentUserState as SegmentUserState,
    type ContextCreateParams as ContextCreateParams,
    type ContextRetrieveParams as ContextRetrieveParams,
  };

  export {
    Exports as Exports,
    type ExportRetrieveResponse as ExportRetrieveResponse,
    type ExportCreateParams as ExportCreateParams,
    type ExportRetrieveParams as ExportRetrieveParams,
  };

  export {
    Imports as Imports,
    type ImportRetrieveResponse as ImportRetrieveResponse,
    type ImportCreateParams as ImportCreateParams,
    type ImportRetrieveParams as ImportRetrieveParams,
  };

  export {
    Users as Users,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
  };

  export {
    ExpiringTargets as ExpiringTargets,
    type ExpiringTargetRetrieveParams as ExpiringTargetRetrieveParams,
    type ExpiringTargetUpdateParams as ExpiringTargetUpdateParams,
  };

  export {
    ExpiringUserTargets as ExpiringUserTargets,
    type ExpiringUserTargetRetrieveParams as ExpiringUserTargetRetrieveParams,
    type ExpiringUserTargetUpdateParams as ExpiringUserTargetUpdateParams,
  };
}
