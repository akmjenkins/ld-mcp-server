// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource expiringTargets', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.segments.expiringTargets.retrieve('environmentKey', {
      projectKey: 'projectKey',
      segmentKey: 'segmentKey',
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
    const response = await client.api.v2.segments.expiringTargets.retrieve('environmentKey', {
      projectKey: 'projectKey',
      segmentKey: 'segmentKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.segments.expiringTargets.update('environmentKey', {
      projectKey: 'projectKey',
      segmentKey: 'segmentKey',
      instructions: [
        {
          contextKey: 'user@email.com',
          contextKind: 'user',
          kind: 'updateExpiringTarget',
          targetType: 'included',
        },
      ],
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
    const response = await client.api.v2.segments.expiringTargets.update('environmentKey', {
      projectKey: 'projectKey',
      segmentKey: 'segmentKey',
      instructions: [
        {
          contextKey: 'user@email.com',
          contextKind: 'user',
          kind: 'updateExpiringTarget',
          targetType: 'included',
          value: 1587582000000,
          version: 0,
        },
      ],
      comment: 'optional comment',
    });
  });
});
