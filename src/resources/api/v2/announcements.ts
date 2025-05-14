// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AnnouncementsAPI from './announcements';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Announcements extends APIResource {
  /**
   * Create an announcement
   *
   * @example
   * ```ts
   * const announcementResponse =
   *   await client.api.v2.announcements.create({
   *     isDismissible: true,
   *     message:
   *       '**Important Update:**\n\nPlease be aware of the upcoming maintenance scheduled for *October 31st, 2024*. The system will be unavailable from **12:00 AM** to **4:00 AM**.',
   *     severity: 'warning',
   *     startTime: 1731439812,
   *     title: 'System Maintenance Notice',
   *   });
   * ```
   */
  create(body: AnnouncementCreateParams, options?: RequestOptions): APIPromise<AnnouncementResponse> {
    return this._client.post('/api/v2/announcements', { body, ...options });
  }

  /**
   * Update an announcement
   *
   * @example
   * ```ts
   * const announcementResponse =
   *   await client.api.v2.announcements.update(
   *     'announcementId',
   *     { body: [{ op: 'replace', path: '/exampleField' }] },
   *   );
   * ```
   */
  update(
    announcementID: string,
    params: AnnouncementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AnnouncementResponse> {
    const { body } = params;
    return this._client.patch(path`/api/v2/announcements/${announcementID}`, { body: body, ...options });
  }

  /**
   * Get announcements
   *
   * @example
   * ```ts
   * const announcements =
   *   await client.api.v2.announcements.list();
   * ```
   */
  list(
    query: AnnouncementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnnouncementListResponse> {
    return this._client.get('/api/v2/announcements', { query, ...options });
  }

  /**
   * Delete an announcement
   *
   * @example
   * ```ts
   * await client.api.v2.announcements.delete('announcementId');
   * ```
   */
  delete(announcementID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/announcements/${announcementID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AnnouncementLink {
  href?: string;

  type?: string;
}

/**
 * Announcement response
 */
export interface AnnouncementResponse {
  /**
   * The ID of the announcement
   */
  _id: string;

  _links: AnnouncementResponse._Links;

  /**
   * The status of the announcement
   */
  _status: 'active' | 'inactive' | 'scheduled';

  /**
   * true if the announcement is dismissible
   */
  isDismissible: boolean;

  /**
   * The message of the announcement
   */
  message: string;

  /**
   * The severity of the announcement
   */
  severity: 'info' | 'warning' | 'critical';

  /**
   * The start time of the announcement. This is a Unix timestamp in milliseconds.
   */
  startTime: number;

  /**
   * The title of the announcement
   */
  title: string;

  _access?: AnnouncementResponse._Access;

  /**
   * The end time of the announcement. This is a Unix timestamp in milliseconds.
   */
  endTime?: number;
}

export namespace AnnouncementResponse {
  export interface _Links {
    parent: AnnouncementsAPI.AnnouncementLink;
  }

  export interface _Access {
    allowed: Array<_Access.Allowed>;

    denied: Array<_Access.Denied>;
  }

  export namespace _Access {
    export interface Allowed {
      action: string;

      reason: Allowed.Reason;
    }

    export namespace Allowed {
      export interface Reason {
        /**
         * Whether this statement should allow or deny actions on the resources.
         */
        effect: 'allow' | 'deny';

        /**
         * Actions to perform on a resource
         */
        actions?: Array<string>;

        /**
         * Targeted actions are the actions NOT in this list. The <code>actions</code> and
         * <code>notResources</code> fields must be empty to use this field.
         */
        notActions?: Array<string>;

        /**
         * Targeted resources are the resources NOT in this list. The
         * <code>resources</code> and <code>notActions</code> fields must be empty to use
         * this field.
         */
        notResources?: Array<string>;

        /**
         * Resource specifier strings
         */
        resources?: Array<string>;

        role_name?: string;
      }
    }

    export interface Denied {
      action: string;

      reason: Denied.Reason;
    }

    export namespace Denied {
      export interface Reason {
        /**
         * Whether this statement should allow or deny actions on the resources.
         */
        effect: 'allow' | 'deny';

        /**
         * Actions to perform on a resource
         */
        actions?: Array<string>;

        /**
         * Targeted actions are the actions NOT in this list. The <code>actions</code> and
         * <code>notResources</code> fields must be empty to use this field.
         */
        notActions?: Array<string>;

        /**
         * Targeted resources are the resources NOT in this list. The
         * <code>resources</code> and <code>notActions</code> fields must be empty to use
         * this field.
         */
        notResources?: Array<string>;

        /**
         * Resource specifier strings
         */
        resources?: Array<string>;

        role_name?: string;
      }
    }
  }
}

export interface AnnouncementListResponse {
  _links: AnnouncementListResponse._Links;

  items: Array<AnnouncementResponse>;
}

export namespace AnnouncementListResponse {
  export interface _Links {
    self: AnnouncementsAPI.AnnouncementLink;

    first?: AnnouncementsAPI.AnnouncementLink;

    last?: AnnouncementsAPI.AnnouncementLink;

    next?: AnnouncementsAPI.AnnouncementLink;

    prev?: AnnouncementsAPI.AnnouncementLink;
  }
}

export interface AnnouncementCreateParams {
  /**
   * true if the announcement is dismissible
   */
  isDismissible: boolean;

  /**
   * The message of the announcement
   */
  message: string;

  /**
   * The severity of the announcement
   */
  severity: 'info' | 'warning' | 'critical';

  /**
   * The start time of the announcement. This is a Unix timestamp in milliseconds.
   */
  startTime: number;

  /**
   * The title of the announcement
   */
  title: string;

  /**
   * The end time of the announcement. This is a Unix timestamp in milliseconds.
   */
  endTime?: number;
}

export interface AnnouncementUpdateParams {
  body: Array<AnnouncementUpdateParams.Body>;
}

export namespace AnnouncementUpdateParams {
  export interface Body {
    /**
     * The type of operation to perform
     */
    op: string;

    /**
     * A JSON Pointer string specifying the part of the document to operate on
     */
    path: string;

    /**
     * A JSON value used in "add", "replace", and "test" operations
     */
    value?: unknown;
  }
}

export interface AnnouncementListParams {
  /**
   * The number of announcements to return.
   */
  limit?: number;

  /**
   * Where to start in the list. Use this with pagination. For example, an offset of
   * 10 skips the first ten items and then returns the next items in the list, up to
   * the query `limit`.
   */
  offset?: number;

  /**
   * Filter announcements by status.
   */
  status?: 'active' | 'inactive' | 'scheduled';
}

export declare namespace Announcements {
  export {
    type AnnouncementLink as AnnouncementLink,
    type AnnouncementResponse as AnnouncementResponse,
    type AnnouncementListResponse as AnnouncementListResponse,
    type AnnouncementCreateParams as AnnouncementCreateParams,
    type AnnouncementUpdateParams as AnnouncementUpdateParams,
    type AnnouncementListParams as AnnouncementListParams,
  };
}
