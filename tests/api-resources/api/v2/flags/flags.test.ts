// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flags', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.flags.retrieve('featureFlagKey', { projectKey: 'projectKey' });
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
    const response = await client.api.v2.flags.retrieve('featureFlagKey', {
      projectKey: 'projectKey',
      env: 'env',
      expand: 'expand',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.flags.update('featureFlagKey', {
      projectKey: 'projectKey',
      patch: [{ op: 'replace', path: '/description' }],
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
    const response = await client.api.v2.flags.update('featureFlagKey', {
      projectKey: 'projectKey',
      patch: [{ op: 'replace', path: '/description', value: 'New description for this flag' }],
      ignoreConflicts: true,
      comment: 'comment',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.flags.delete('featureFlagKey', { projectKey: 'projectKey' });
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
    const response = await client.api.v2.flags.delete('featureFlagKey', { projectKey: 'projectKey' });
  });

  // skipped: tests are disabled for the time being
  test.skip('copy: only required params', async () => {
    const responsePromise = client.api.v2.flags.copy('featureFlagKey', {
      projectKey: 'projectKey',
      source: { key: 'source-env-key-123abc' },
      target: { key: 'target-env-key-123abc' },
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
  test.skip('copy: required and optional params', async () => {
    const response = await client.api.v2.flags.copy('featureFlagKey', {
      projectKey: 'projectKey',
      source: { key: 'source-env-key-123abc', currentVersion: 1 },
      target: { key: 'target-env-key-123abc', currentVersion: 1 },
      comment: 'optional comment',
      excludedActions: ['updateOn'],
      includedActions: ['updateOn'],
    });
  });
});
