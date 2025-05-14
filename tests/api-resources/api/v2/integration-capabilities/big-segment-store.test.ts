// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource bigSegmentStore', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.bigSegmentStore.retrieve('integrationId', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      integrationKey: 'integrationKey',
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
    const response = await client.api.v2.integrationCapabilities.bigSegmentStore.retrieve('integrationId', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      integrationKey: 'integrationKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.bigSegmentStore.update('integrationId', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      integrationKey: 'integrationKey',
      body: [{ op: 'replace', path: '/exampleField' }],
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
    const response = await client.api.v2.integrationCapabilities.bigSegmentStore.update('integrationId', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      integrationKey: 'integrationKey',
      body: [{ op: 'replace', path: '/exampleField', value: 'new example value' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.bigSegmentStore.delete('integrationId', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      integrationKey: 'integrationKey',
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
    const response = await client.api.v2.integrationCapabilities.bigSegmentStore.delete('integrationId', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      integrationKey: 'integrationKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBigSegmentStore', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.bigSegmentStore.retrieveBigSegmentStore();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
