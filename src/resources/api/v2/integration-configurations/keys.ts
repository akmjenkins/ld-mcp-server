// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as KeysAPI from './keys';
import * as AuditlogAPI from '../auditlog';
import * as RelayAutoConfigsAPI from '../account/relay-auto-configs';
import * as StatisticsAPI from '../code-refs/statistics';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Keys extends APIResource {
  /**
   * Get all integration configurations with the specified integration key. (Excludes
   * [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta)
   * and
   * [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).).
   *
   * @example
   * ```ts
   * const key =
   *   await client.api.v2.integrationConfigurations.keys.retrieve(
   *     'integrationKey',
   *   );
   * ```
   */
  retrieve(integrationKey: string, options?: RequestOptions): APIPromise<KeyRetrieveResponse> {
    return this._client.get(path`/api/v2/integration-configurations/keys/${integrationKey}`, options);
  }

  /**
   * Create a new integration configuration. (Excludes
   * [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta)
   * and
   * [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)
   *
   * @example
   * ```ts
   * const integrationConfigurationsRep =
   *   await client.api.v2.integrationConfigurations.keys.update(
   *     'integrationKey',
   *     {
   *       configValues: {
   *         optional: 'bar',
   *         required: 'bar',
   *         url: 'bar',
   *       },
   *       name: 'Example integration configuration',
   *     },
   *   );
   * ```
   */
  update(
    integrationKey: string,
    body: KeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<IntegrationConfigurationsRep> {
    return this._client.post(path`/api/v2/integration-configurations/keys/${integrationKey}`, {
      body,
      ...options,
    });
  }
}

export interface ApprovalsCapabilityConfig {
  /**
   * The additional form variables for the approvals capability
   */
  additionalFormVariables?: Array<ApprovalsCapabilityConfig.AdditionalFormVariable>;
}

export namespace ApprovalsCapabilityConfig {
  export interface AdditionalFormVariable {
    allowedValues?: Array<string>;

    defaultValue?: unknown;

    description?: string;

    dynamicOptions?: AdditionalFormVariable.DynamicOptions;

    isOptional?: boolean;

    key?: string;

    name?: string;

    placeholder?: string;

    type?: string;
  }

  export namespace AdditionalFormVariable {
    export interface DynamicOptions {
      endpoint?: DynamicOptions.Endpoint;

      parser?: DynamicOptions.Parser;
    }

    export namespace DynamicOptions {
      export interface Endpoint {
        headers?: Array<Endpoint.Header>;

        hmacSignature?: Endpoint.HmacSignature;

        method?: string;

        url?: string;
      }

      export namespace Endpoint {
        export interface Header {
          name?: string;

          value?: string;
        }

        export interface HmacSignature {
          headerName?: string;

          hmacSecretFormVariableKey?: string;
        }
      }

      export interface Parser {
        optionsItems?: Parser.OptionsItems;

        optionsPath?: string;
      }

      export namespace Parser {
        export interface OptionsItems {
          label?: string;

          value?: string;
        }
      }
    }
  }
}

export interface IntegrationConfigurationsRep {
  /**
   * The unique identifier for this integration configuration
   */
  _id: string;

  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * A human-friendly name for the integration
   */
  name: string;

  /**
   * Details on the allowed and denied actions for this integration configuration
   */
  _access?: RelayAutoConfigsAPI.Access;

  /**
   * The time the integration configuration was created
   */
  _createdAt?: number;

  /**
   * The type of integration
   */
  _integrationKey?: string;

  /**
   * The capability configuration for the integration
   */
  capabilityConfig?: IntegrationConfigurationsRep.CapabilityConfig;

  /**
   * Details on configuration for an integration of this type. Refer to the
   * <code>formVariables</code> field in the corresponding <code>manifest.json</code>
   * for a full list of fields for each integration.
   */
  configValues?: { [key: string]: unknown };

  /**
   * Whether the integration is currently active
   */
  enabled?: boolean;

  /**
   * An array of tags for this integration
   */
  tags?: Array<string>;
}

export namespace IntegrationConfigurationsRep {
  /**
   * The capability configuration for the integration
   */
  export interface CapabilityConfig {
    /**
     * The approvals capability configuration for this integration
     */
    approvals?: KeysAPI.ApprovalsCapabilityConfig;

    /**
     * The audit log events hook capability configuration for the integration
     */
    auditLogEventsHook?: CapabilityConfig.AuditLogEventsHook;
  }

  export namespace CapabilityConfig {
    /**
     * The audit log events hook capability configuration for the integration
     */
    export interface AuditLogEventsHook {
      /**
       * The set of resources you wish to subscribe to audit log notifications for.
       */
      statements?: Array<RelayAutoConfigsAPI.Statement>;
    }
  }
}

export interface KeyRetrieveResponse {
  /**
   * The location and content type of related resources
   */
  _links: { [key: string]: StatisticsAPI.Link };

  /**
   * An array of integration configurations
   */
  items: Array<IntegrationConfigurationsRep>;
}

export interface KeyUpdateParams {
  /**
   * The unique set of fields required to configure the integration. Refer to the
   * <code>formVariables</code> field in the corresponding <code>manifest.json</code>
   * at https://github.com/launchdarkly/integration-framework/tree/main/integrations
   * for a full list of fields for the integration you wish to configure.
   */
  configValues: { [key: string]: unknown };

  /**
   * The name of the integration configuration
   */
  name: string;

  /**
   * The capability configuration for the integration
   */
  capabilityConfig?: KeyUpdateParams.CapabilityConfig;

  /**
   * Whether the integration configuration is enabled. If omitted, defaults to true
   */
  enabled?: boolean;

  /**
   * Tags for the integration
   */
  tags?: Array<string>;
}

export namespace KeyUpdateParams {
  /**
   * The capability configuration for the integration
   */
  export interface CapabilityConfig {
    /**
     * The approvals capability configuration for this integration
     */
    approvals?: KeysAPI.ApprovalsCapabilityConfig;

    /**
     * The audit log events hook capability configuration for the integration
     */
    auditLogEventsHook?: CapabilityConfig.AuditLogEventsHook;
  }

  export namespace CapabilityConfig {
    /**
     * The audit log events hook capability configuration for the integration
     */
    export interface AuditLogEventsHook {
      /**
       * The set of resources you wish to subscribe to audit log notifications for.
       */
      statements?: Array<AuditlogAPI.StatementPost>;
    }
  }
}

export declare namespace Keys {
  export {
    type ApprovalsCapabilityConfig as ApprovalsCapabilityConfig,
    type IntegrationConfigurationsRep as IntegrationConfigurationsRep,
    type KeyRetrieveResponse as KeyRetrieveResponse,
    type KeyUpdateParams as KeyUpdateParams,
  };
}
