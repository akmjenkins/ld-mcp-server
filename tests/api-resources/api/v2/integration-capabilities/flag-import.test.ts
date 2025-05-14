// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flagImport', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.flagImport.retrieve('integrationId', {
      projectKey: 'projectKey',
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
    const response = await client.api.v2.integrationCapabilities.flagImport.retrieve('integrationId', {
      projectKey: 'projectKey',
      integrationKey: 'integrationKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.flagImport.update('integrationId', {
      projectKey: 'projectKey',
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
    const response = await client.api.v2.integrationCapabilities.flagImport.update('integrationId', {
      projectKey: 'projectKey',
      integrationKey: 'integrationKey',
      body: [{ op: 'replace', path: '/exampleField', value: 'new example value' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.flagImport.delete('integrationId', {
      projectKey: 'projectKey',
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
    const response = await client.api.v2.integrationCapabilities.flagImport.delete('integrationId', {
      projectKey: 'projectKey',
      integrationKey: 'integrationKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFlagImport', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.flagImport.retrieveFlagImport();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('trigger: only required params', async () => {
    const responsePromise = client.api.v2.integrationCapabilities.flagImport.trigger('integrationId', {
      projectKey: 'projectKey',
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
  test.skip('trigger: required and optional params', async () => {
    const response = await client.api.v2.integrationCapabilities.flagImport.trigger('integrationId', {
      projectKey: 'projectKey',
      integrationKey: 'integrationKey',
    });
  });
});
