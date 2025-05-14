// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StatisticsAPI from './code-refs/statistics';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Auditlog extends APIResource {
  /**
   * Search your audit log entries. The query parameters let you restrict the results
   * that return by date ranges, or a full-text search query. The request body lets
   * you restrict the results that return by resource specifiers.
   *
   * LaunchDarkly uses a resource specifier syntax to name resources or collections
   * of resources. To learn more, read
   * [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).
   *
   * @example
   * ```ts
   * const auditLogEntryListingRepCollection =
   *   await client.api.v2.auditlog.create();
   * ```
   */
  create(
    params: AuditlogCreateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<AuditLogEntryListingRepCollection> {
    const { after, before, limit, q, body } = params ?? {};
    return this._client.post('/api/v2/auditlog', {
      query: { after, before, limit, q },
      body: body,
      ...options,
    });
  }

  /**
   * Fetch a detailed audit log entry representation. The detailed representation
   * includes several fields that are not present in the summary representation,
   * including:
   *
   * - `delta`: the JSON patch body that was used in the request to update the entity
   * - `previousVersion`: a JSON representation of the previous version of the entity
   * - `currentVersion`: a JSON representation of the current version of the entity
   *
   * @example
   * ```ts
   * const auditlog = await client.api.v2.auditlog.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AuditlogRetrieveResponse> {
    return this._client.get(path`/api/v2/auditlog/${id}`, options);
  }

  /**
   * Get a list of all audit log entries. The query parameters let you restrict the
   * results that return by date ranges, resource specifiers, or a full-text search
   * query.
   *
   * LaunchDarkly uses a resource specifier syntax to name resources or collections
   * of resources. To learn more, read
   * [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).
   *
   * @example
   * ```ts
   * const auditLogEntryListingRepCollection =
   *   await client.api.v2.auditlog.list();
   * ```
   */
  list(
    query: AuditlogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AuditLogEntryListingRepCollection> {
    return this._client.get('/api/v2/auditlog', { query, ...options });
  }
}

export interface AuditLogEntryListingRep {
  /**
   * The ID of the account to which this audit log entry belongs
   */
  _accountId: string;

  /**
   * The ID of the audit log entry
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * Details on the actions performed and resources acted on in this audit log entry
   */
  accesses: Array<ResourceAccess>;

  /**
   * Timestamp of the audit log entry
   */
  date: number;

  /**
   * Description of the change recorded in the audit log entry
   */
  description: string;

  /**
   * The type of resource this audit log entry refers to
   */
  kind: string;

  /**
   * The name of the resource this audit log entry refers to
   */
  name: string;

  /**
   * Shorter version of the change recorded in the audit log entry
   */
  shortDescription: string;

  /**
   * Details of the access token that initiated the action described in the audit log
   * entry
   */
  token?: TokenSummary;

  /**
   * Details of the authorized application that initiated the action described in the
   * audit log entry
   */
  app?: AuthorizedAppDataRep;

  /**
   * Optional comment for the audit log entry
   */
  comment?: string;

  /**
   * Details of the member who initiated the action described in the audit log entry
   */
  member?: MemberDataRep;

  parent?: ParentResourceRep;

  /**
   * Details of the subject who initiated the action described in the audit log entry
   */
  subject?: SubjectDataRep;

  /**
   * Details of the resource acted upon in this audit log entry
   */
  target?: TargetResourceRep;

  /**
   * A description of what occurred, in the format <code>member</code>
   * <code>titleVerb</code> <code>target</code>
   */
  title?: string;

  /**
   * The action and resource recorded in this audit log entry
   */
  titleVerb?: string;
}

export interface AuditLogEntryListingRepCollection {
  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * An array of audit log entries
   */
  items: Array<AuditLogEntryListingRep>;
}

export interface AuthorizedAppDataRep {
  /**
   * The ID of the authorized application
   */
  _id?: string;

  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * Whether the application is authorized through SCIM
   */
  isScim?: boolean;

  /**
   * The name of the maintainer for this authorized application
   */
  maintainerName?: string;

  /**
   * The authorized application name
   */
  name?: string;
}

export interface MemberDataRep {
  /**
   * The member ID
   */
  _id?: string;

  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * The member email
   */
  email?: string;

  /**
   * The member first name
   */
  firstName?: string;

  /**
   * The member last name
   */
  lastName?: string;
}

export interface ParentResourceRep {
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * The name of the parent resource
   */
  name?: string;

  /**
   * The parent's resource specifier
   */
  resource?: string;
}

export interface ResourceAccess {
  action?: string;

  resource?: string;
}

export interface StatementPost {
  /**
   * Whether this statement should allow or deny actions on the resources.
   */
  effect: 'allow' | 'deny';

  /**
   * Actions to perform on a resource
   */
  actions?: Array<string>;

  /**
   * Targeted actions are the actions NOT in this list. The <code>actions</code>
   * field must be empty to use this field.
   */
  notActions?: Array<string>;

  /**
   * Targeted resources are the resources NOT in this list. The
   * <code>resources</code> field must be empty to use this field.
   */
  notResources?: Array<string>;

  /**
   * Resource specifier strings
   */
  resources?: Array<string>;
}

export interface SubjectDataRep {
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * The subject's avatar
   */
  avatarUrl?: string;

  /**
   * The subject's name
   */
  name?: string;
}

export interface TargetResourceRep {
  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * The name of the resource
   */
  name?: string;

  /**
   * The resource specifier
   */
  resources?: Array<string>;
}

export interface TokenSummary {
  _id?: string;

  _links?: Record<string, StatisticsAPI.Link>;

  /**
   * The last few characters of the token
   */
  ending?: string;

  /**
   * The name of the token
   */
  name?: string;

  /**
   * Whether this is a service token
   */
  serviceToken?: boolean;
}

export interface AuditlogRetrieveResponse {
  /**
   * The ID of the account to which this audit log entry belongs
   */
  _accountId: string;

  /**
   * The ID of the audit log entry
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: Record<string, StatisticsAPI.Link>;

  /**
   * Details on the actions performed and resources acted on in this audit log entry
   */
  accesses: Array<ResourceAccess>;

  /**
   * Timestamp of the audit log entry
   */
  date: number;

  /**
   * Description of the change recorded in the audit log entry
   */
  description: string;

  /**
   * The type of resource this audit log entry refers to
   */
  kind: string;

  /**
   * The name of the resource this audit log entry refers to
   */
  name: string;

  /**
   * Shorter version of the change recorded in the audit log entry
   */
  shortDescription: string;

  /**
   * Details of the access token that initiated the action described in the audit log
   * entry
   */
  token?: TokenSummary;

  /**
   * Details of the authorized application that initiated the action described in the
   * audit log entry
   */
  app?: AuthorizedAppDataRep;

  /**
   * Optional comment for the audit log entry
   */
  comment?: string;

  /**
   * If the audit log entry has been updated, this is a JSON representation of the
   * current version of the entity
   */
  currentVersion?: unknown;

  /**
   * If the audit log entry has been updated, this is the JSON patch body that was
   * used in the request to update the entity
   */
  delta?: unknown;

  /**
   * Details of the member who initiated the action described in the audit log entry
   */
  member?: MemberDataRep;

  /**
   * A JSON representation of the merge information for this audit log entry, if any
   */
  merge?: unknown;

  parent?: ParentResourceRep;

  /**
   * If the audit log entry has been updated, this is a JSON representation of the
   * previous version of the entity
   */
  previousVersion?: unknown;

  subentries?: Array<AuditLogEntryListingRep>;

  /**
   * Details of the subject who initiated the action described in the audit log entry
   */
  subject?: SubjectDataRep;

  /**
   * Details of the resource acted upon in this audit log entry
   */
  target?: TargetResourceRep;

  /**
   * A description of what occurred, in the format <code>member</code>
   * <code>titleVerb</code> <code>target</code>
   */
  title?: string;

  /**
   * The action and resource recorded in this audit log entry
   */
  titleVerb?: string;

  /**
   * A JSON representation of the external trigger for this audit log entry, if any
   */
  triggerBody?: unknown;
}

export interface AuditlogCreateParams {
  /**
   * Query param: A timestamp filter, expressed as a Unix epoch time in milliseconds.
   * All entries returned occurred after the timestamp.
   */
  after?: number;

  /**
   * Query param: A timestamp filter, expressed as a Unix epoch time in milliseconds.
   * All entries returned occurred before the timestamp.
   */
  before?: number;

  /**
   * Query param: A limit on the number of audit log entries that return. Set between
   * 1 and 20. The default is 10.
   */
  limit?: number;

  /**
   * Query param: Text to search for. You can search for the full or partial name of
   * the resource.
   */
  q?: string;

  /**
   * Body param:
   */
  body?: Array<StatementPost>;
}

export interface AuditlogListParams {
  /**
   * A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries
   * this returns occurred after the timestamp.
   */
  after?: number;

  /**
   * A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries
   * this returns occurred before the timestamp.
   */
  before?: number;

  /**
   * A limit on the number of audit log entries that return. Set between 1 and 20.
   * The default is 10.
   */
  limit?: number;

  /**
   * Text to search for. You can search for the full or partial name of the resource.
   */
  q?: string;

  /**
   * A resource specifier that lets you filter audit log listings by resource
   */
  spec?: string;
}

export declare namespace Auditlog {
  export {
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
}
