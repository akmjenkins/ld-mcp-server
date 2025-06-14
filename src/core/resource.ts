// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TestLanguage } from '../client';

export abstract class APIResource {
  protected _client: TestLanguage;

  constructor(client: TestLanguage) {
    this._client = client;
  }
}
