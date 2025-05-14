// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RelayAutoConfigsAPI from './relay-auto-configs';
import {
  Access,
  MemberSummary,
  PatchWithComment,
  RelayAutoConfigRelayAutoConfigsParams,
  RelayAutoConfigRep,
  RelayAutoConfigResetParams,
  RelayAutoConfigRetrieveRelayAutoConfigsResponse,
  RelayAutoConfigUpdateParams,
  RelayAutoConfigs,
  Statement,
} from './relay-auto-configs';

export class Account extends APIResource {
  relayAutoConfigs: RelayAutoConfigsAPI.RelayAutoConfigs = new RelayAutoConfigsAPI.RelayAutoConfigs(
    this._client,
  );
}

Account.RelayAutoConfigs = RelayAutoConfigs;

export declare namespace Account {
  export {
    RelayAutoConfigs as RelayAutoConfigs,
    type Access as Access,
    type MemberSummary as MemberSummary,
    type PatchWithComment as PatchWithComment,
    type RelayAutoConfigRep as RelayAutoConfigRep,
    type Statement as Statement,
    type RelayAutoConfigRetrieveRelayAutoConfigsResponse as RelayAutoConfigRetrieveRelayAutoConfigsResponse,
    type RelayAutoConfigUpdateParams as RelayAutoConfigUpdateParams,
    type RelayAutoConfigRelayAutoConfigsParams as RelayAutoConfigRelayAutoConfigsParams,
    type RelayAutoConfigResetParams as RelayAutoConfigResetParams,
  };
}
