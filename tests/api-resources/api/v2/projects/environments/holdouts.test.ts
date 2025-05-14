// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource holdouts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.holdouts.create('environmentKey', {
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
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.holdouts.create('environmentKey', {
      projectKey: 'projectKey',
      attributes: ['country', 'device', 'os'],
      description: 'My holdout-one description',
      holdoutamount: '10',
      key: 'holdout-key',
      maintainerId: 'maintainerId',
      metrics: [{ key: 'metric-key-123abc', isGroup: true, primary: true }],
      name: 'holdout-one-name',
      prerequisiteflagkey: 'flag-key-123abc',
      primarymetrickey: 'metric-key-123abc',
      randomizationunit: 'user',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.holdouts.retrieve('holdoutKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
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
    const response = await client.api.v2.projects.environments.holdouts.retrieve('holdoutKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      expand: 'expand',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.holdouts.update('holdoutKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      instructions: [{ kind: 'bar', value: 'bar' }],
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
    const response = await client.api.v2.projects.environments.holdouts.update('holdoutKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      instructions: [{ kind: 'bar', value: 'bar' }],
      comment: 'Optional comment describing the update',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.holdouts.list('environmentKey', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.holdouts.list('environmentKey', {
      projectKey: 'projectKey',
      limit: 0,
      offset: 0,
    });
  });
});
