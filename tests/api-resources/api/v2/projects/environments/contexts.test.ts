// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contexts', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.contexts.retrieve('key', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      kind: 'kind',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.contexts.retrieve('key', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      kind: 'kind',
      continuationToken: 'continuationToken',
      filter: 'filter',
      includeTotalCount: true,
      limit: 0,
      sort: 'sort',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.contexts.update('featureFlagKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      contextKind: 'contextKind',
      contextKey: 'contextKey',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.contexts.update('featureFlagKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      contextKind: 'contextKind',
      contextKey: 'contextKey',
      comment: 'make sure this context experiences a specific variation',
      setting: 'existing_variation_value_to_use',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('search: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.contexts.search('environmentKey', {
      projectKey: 'projectKey',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('search: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.contexts.search('environmentKey', {
      projectKey: 'projectKey',
      query_continuationToken: 'continuationToken',
      query_filter: 'filter',
      includeTotalCount: true,
      query_limit: 0,
      query_sort: 'sort',
      body_continuationToken: 'QAGFKH1313KUGI2351',
      body_filter: '*.name startsWith Jo,kind anyOf ["user","organization"]',
      body_limit: 10,
      body_sort: '-ts',
    });
  });
});
