// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource environments', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.create('projectKey', {
      color: 'DADBEE',
      key: 'environment-key-123abc',
      name: 'My Environment',
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
    const response = await client.api.v2.projects.environments.create('projectKey', {
      color: 'DADBEE',
      key: 'environment-key-123abc',
      name: 'My Environment',
      confirmChanges: false,
      critical: true,
      defaultTrackEvents: false,
      defaultTtl: 5,
      requireComments: false,
      secureMode: true,
      source: { key: 'key', version: 0 },
      tags: ['ops'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.retrieve('environmentKey', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.retrieve('environmentKey', {
      projectKey: 'projectKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.update('environmentKey', {
      projectKey: 'projectKey',
      body: [{ op: 'replace', path: '/requireComments' }],
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
    const response = await client.api.v2.projects.environments.update('environmentKey', {
      projectKey: 'projectKey',
      body: [{ op: 'replace', path: '/requireComments', value: true }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v2.projects.environments.list('projectKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.projects.environments.list(
        'projectKey',
        { filter: 'filter', limit: 0, offset: 0, sort: 'sort' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.delete('environmentKey', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.delete('environmentKey', {
      projectKey: 'projectKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('apiKey: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.apiKey('environmentKey', {
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
  test.skip('apiKey: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.apiKey('environmentKey', {
      projectKey: 'projectKey',
      expiry: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('mobileKey: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.mobileKey('environmentKey', {
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
  test.skip('mobileKey: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.mobileKey('environmentKey', {
      projectKey: 'projectKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFollowers: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.retrieveFollowers('environmentKey', {
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
  test.skip('retrieveFollowers: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.retrieveFollowers('environmentKey', {
      projectKey: 'projectKey',
    });
  });
});
