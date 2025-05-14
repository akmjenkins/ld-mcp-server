// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ApplicationsAPI from '../applications/applications';
import * as KeysAPI from './keys';
import {
  ApprovalsCapabilityConfig,
  IntegrationConfigurationsRep,
  KeyRetrieveResponse,
  KeyUpdateParams,
  Keys,
} from './keys';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class IntegrationConfigurations extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);

  /**
   * Get integration configuration with the specified ID. (Excludes
   * [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta)
   * and
   * [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)
   *
   * @example
   * ```ts
   * const integrationConfigurationsRep =
   *   await client.api.v2.integrationConfigurations.retrieve(
   *     'integrationConfigurationId',
   *   );
   * ```
   */
  retrieve(
    integrationConfigurationID: string,
    options?: RequestOptions,
  ): APIPromise<KeysAPI.IntegrationConfigurationsRep> {
    return this._client.get(path`/api/v2/integration-configurations/${integrationConfigurationID}`, options);
  }

  /**
   * Update an integration configuration. Updating an integration configuration uses
   * a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of
   * the desired changes. To learn more, read
   * [Updates](https://launchdarkly.com/docs/api#updates).
   *
   * @example
   * ```ts
   * const integrationConfigurationsRep =
   *   await client.api.v2.integrationConfigurations.update(
   *     'integrationConfigurationId',
   *     { body: [{ op: 'replace', path: '/on' }] },
   *   );
   * ```
   */
  update(
    integrationConfigurationID: string,
    params: IntegrationConfigurationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<KeysAPI.IntegrationConfigurationsRep> {
    const { body } = params;
    return this._client.patch(path`/api/v2/integration-configurations/${integrationConfigurationID}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Delete an integration configuration by ID. (Excludes
   * [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta)
   * and
   * [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)
   *
   * @example
   * ```ts
   * await client.api.v2.integrationConfigurations.delete(
   *   'integrationConfigurationId',
   * );
   * ```
   */
  delete(integrationConfigurationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/api/v2/integration-configurations/${integrationConfigurationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IntegrationConfigurationUpdateParams {
  body: Array<ApplicationsAPI.PatchOperation>;
}

IntegrationConfigurations.Keys = Keys;

export declare namespace IntegrationConfigurations {
  export { type IntegrationConfigurationUpdateParams as IntegrationConfigurationUpdateParams };

  export {
    Keys as Keys,
    type ApprovalsCapabilityConfig as ApprovalsCapabilityConfig,
    type IntegrationConfigurationsRep as IntegrationConfigurationsRep,
    type KeyRetrieveResponse as KeyRetrieveResponse,
    type KeyUpdateParams as KeyUpdateParams,
  };
}
