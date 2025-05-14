// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as FlagsAPI from './flags';
import {
  FlagDeleteParams,
  FlagLinkRep,
  FlagRetrieveParams,
  FlagRetrieveResponse,
  FlagUpdateParams,
  Flags,
} from './flags';

export class Projects extends APIResource {
  flags: FlagsAPI.Flags = new FlagsAPI.Flags(this._client);
}

Projects.Flags = Flags;

export declare namespace Projects {
  export {
    Flags as Flags,
    type FlagLinkRep as FlagLinkRep,
    type FlagRetrieveResponse as FlagRetrieveResponse,
    type FlagRetrieveParams as FlagRetrieveParams,
    type FlagUpdateParams as FlagUpdateParams,
    type FlagDeleteParams as FlagDeleteParams,
  };
}
