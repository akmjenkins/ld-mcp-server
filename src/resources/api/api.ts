// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V2API from './v2/v2';
import {
  V2,
  V2ListResponse,
  V2RetrieveCallerIdentityResponse,
  V2RetrieveParams,
  V2RetrievePublicIPListResponse,
  V2RetrieveResponse,
  V2RetrieveTagsParams,
  V2RetrieveTagsResponse,
  V2RetrieveVersionsResponse,
} from './v2/v2';

export class API extends APIResource {
  v2: V2API.V2 = new V2API.V2(this._client);
}

API.V2 = V2;

export declare namespace API {
  export {
    V2 as V2,
    type V2RetrieveResponse as V2RetrieveResponse,
    type V2ListResponse as V2ListResponse,
    type V2RetrieveCallerIdentityResponse as V2RetrieveCallerIdentityResponse,
    type V2RetrievePublicIPListResponse as V2RetrievePublicIPListResponse,
    type V2RetrieveTagsResponse as V2RetrieveTagsResponse,
    type V2RetrieveVersionsResponse as V2RetrieveVersionsResponse,
    type V2RetrieveParams as V2RetrieveParams,
    type V2RetrieveTagsParams as V2RetrieveTagsParams,
  };
}
