// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource expiringUserTargets', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.users.expiringUserTargets.retrieve('environmentKey', {
      projectKey: 'projectKey',
      userKey: 'userKey',
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
    const response = await client.api.v2.users.expiringUserTargets.retrieve('environmentKey', {
      projectKey: 'projectKey',
      userKey: 'userKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.users.expiringUserTargets.update('environmentKey', {
      projectKey: 'projectKey',
      userKey: 'userKey',
      instructions: [
        {
          flagKey: 'sample-flag-key',
          kind: 'addExpireUserTargetDate',
          variationId: 'ce12d345-a1b2-4fb5-a123-ab123d4d5f5d',
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
    const response = await client.api.v2.users.expiringUserTargets.update('environmentKey', {
      projectKey: 'projectKey',
      userKey: 'userKey',
      instructions: [
        {
          flagKey: 'sample-flag-key',
          kind: 'addExpireUserTargetDate',
          variationId: 'ce12d345-a1b2-4fb5-a123-ab123d4d5f5d',
          value: 1653469200000,
          version: 1,
        },
      ],
      comment: 'optional comment',
    });
  });
});
