// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ClientsAPI from './clients';
import { Client, ClientCreateParams, ClientListResponse, ClientUpdateParams, Clients } from './clients';

export class OAuth extends APIResource {
  clients: ClientsAPI.Clients = new ClientsAPI.Clients(this._client);
}

OAuth.Clients = Clients;

export declare namespace OAuth {
  export {
    Clients as Clients,
    type Client as Client,
    type ClientListResponse as ClientListResponse,
    type ClientCreateParams as ClientCreateParams,
    type ClientUpdateParams as ClientUpdateParams,
  };
}
