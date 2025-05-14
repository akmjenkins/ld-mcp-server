// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BigSegmentStoreAPI from './big-segment-store';
import {
  BigSegmentStore,
  BigSegmentStoreDeleteParams,
  BigSegmentStoreIntegration,
  BigSegmentStoreRetrieveBigSegmentStoreResponse,
  BigSegmentStoreRetrieveParams,
  BigSegmentStoreUpdateParams,
  IntegrationDeliveryConfigurationPost,
} from './big-segment-store';
import * as FeatureStoreAPI from './feature-store';
import {
  FeatureStore,
  FeatureStoreDeleteParams,
  FeatureStoreRetrieveParams,
  FeatureStoreUpdateParams,
  FeatureStoreValidateParams,
  FeatureStoreValidateResponse,
  IntegrationDeliveryConfiguration,
  IntegrationDeliveryConfigurationCollection,
} from './feature-store';
import * as FlagImportAPI from './flag-import';
import {
  FlagImport,
  FlagImportDeleteParams,
  FlagImportIntegration,
  FlagImportRetrieveFlagImportResponse,
  FlagImportRetrieveParams,
  FlagImportTriggerParams,
  FlagImportUpdateParams,
} from './flag-import';

export class IntegrationCapabilities extends APIResource {
  bigSegmentStore: BigSegmentStoreAPI.BigSegmentStore = new BigSegmentStoreAPI.BigSegmentStore(this._client);
  featureStore: FeatureStoreAPI.FeatureStore = new FeatureStoreAPI.FeatureStore(this._client);
  flagImport: FlagImportAPI.FlagImport = new FlagImportAPI.FlagImport(this._client);
}

IntegrationCapabilities.BigSegmentStore = BigSegmentStore;
IntegrationCapabilities.FeatureStore = FeatureStore;
IntegrationCapabilities.FlagImport = FlagImport;

export declare namespace IntegrationCapabilities {
  export {
    BigSegmentStore as BigSegmentStore,
    type BigSegmentStoreIntegration as BigSegmentStoreIntegration,
    type IntegrationDeliveryConfigurationPost as IntegrationDeliveryConfigurationPost,
    type BigSegmentStoreRetrieveBigSegmentStoreResponse as BigSegmentStoreRetrieveBigSegmentStoreResponse,
    type BigSegmentStoreRetrieveParams as BigSegmentStoreRetrieveParams,
    type BigSegmentStoreUpdateParams as BigSegmentStoreUpdateParams,
    type BigSegmentStoreDeleteParams as BigSegmentStoreDeleteParams,
  };

  export {
    FeatureStore as FeatureStore,
    type IntegrationDeliveryConfiguration as IntegrationDeliveryConfiguration,
    type IntegrationDeliveryConfigurationCollection as IntegrationDeliveryConfigurationCollection,
    type FeatureStoreValidateResponse as FeatureStoreValidateResponse,
    type FeatureStoreRetrieveParams as FeatureStoreRetrieveParams,
    type FeatureStoreUpdateParams as FeatureStoreUpdateParams,
    type FeatureStoreDeleteParams as FeatureStoreDeleteParams,
    type FeatureStoreValidateParams as FeatureStoreValidateParams,
  };

  export {
    FlagImport as FlagImport,
    type FlagImportIntegration as FlagImportIntegration,
    type FlagImportRetrieveFlagImportResponse as FlagImportRetrieveFlagImportResponse,
    type FlagImportRetrieveParams as FlagImportRetrieveParams,
    type FlagImportUpdateParams as FlagImportUpdateParams,
    type FlagImportDeleteParams as FlagImportDeleteParams,
    type FlagImportTriggerParams as FlagImportTriggerParams,
  };
}
