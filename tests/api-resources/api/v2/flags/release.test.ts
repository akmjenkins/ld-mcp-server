// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource release', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.v2.flags.release.list('flagKey', { projectKey: 'projectKey' });
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
    const response = await client.api.v2.flags.release.list('flagKey', { projectKey: 'projectKey' });
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteAll: only required params', async () => {
    const responsePromise = client.api.v2.flags.release.deleteAll('flagKey', { projectKey: 'projectKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deleteAll: required and optional params', async () => {
    const response = await client.api.v2.flags.release.deleteAll('flagKey', { projectKey: 'projectKey' });
  });

  // skipped: tests are disabled for the time being
  test.skip('patchAll: only required params', async () => {
    const responsePromise = client.api.v2.flags.release.patchAll('flagKey', {
      projectKey: 'projectKey',
      body: [{ op: 'replace', path: '/phases/0/complete' }],
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
  test.skip('patchAll: required and optional params', async () => {
    const response = await client.api.v2.flags.release.patchAll('flagKey', {
      projectKey: 'projectKey',
      body: [{ op: 'replace', path: '/phases/0/complete', value: true }],
    });
  });
});
