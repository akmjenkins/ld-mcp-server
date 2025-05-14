// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StatisticsAPI from './code-refs/statistics';
import * as WorkflowsAPI from './projects/flags/environments/workflows';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Templates extends APIResource {
  /**
   * Create a template for a feature flag workflow
   *
   * @example
   * ```ts
   * const workflowTemplateOutput =
   *   await client.api.v2.templates.create({ key: 'key' });
   * ```
   */
  create(body: TemplateCreateParams, options?: RequestOptions): APIPromise<WorkflowTemplateOutput> {
    return this._client.post('/api/v2/templates', { body, ...options });
  }

  /**
   * Get workflow templates belonging to an account, or can optionally return
   * templates_endpoints.workflowTemplateSummariesListingOutputRep when summary query
   * param is true
   *
   * @example
   * ```ts
   * const templates = await client.api.v2.templates.list();
   * ```
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/api/v2/templates', { query, ...options });
  }

  /**
   * Delete a workflow template
   *
   * @example
   * ```ts
   * await client.api.v2.templates.delete('templateKey');
   * ```
   */
  delete(templateKey: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/templates/${templateKey}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WorkflowTemplateOutput {
  _creationDate: number;

  _id: string;

  _key: string;

  _links: Record<string, StatisticsAPI.Link>;

  _maintainerId: string;

  _ownerId: string;

  description?: string;

  name?: string;

  stages?: Array<WorkflowsAPI.StageOutput>;
}

export interface TemplateListResponse {
  items: Array<WorkflowTemplateOutput>;
}

export interface TemplateCreateParams {
  key: string;

  description?: string;

  environmentKey?: string;

  flagKey?: string;

  name?: string;

  projectKey?: string;

  stages?: Array<WorkflowsAPI.StageInput>;

  workflowId?: string;
}

export interface TemplateListParams {
  /**
   * The substring in either the name or description of a template
   */
  search?: string;

  /**
   * Whether the entire template object or just a summary should be returned
   */
  summary?: boolean;
}

export declare namespace Templates {
  export {
    type WorkflowTemplateOutput as WorkflowTemplateOutput,
    type TemplateListResponse as TemplateListResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams,
  };
}
