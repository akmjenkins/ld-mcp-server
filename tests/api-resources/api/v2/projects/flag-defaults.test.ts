// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource flagDefaults', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveFlagDefaults', async () => {
    const responsePromise = client.api.v2.projects.flagDefaults.retrieveFlagDefaults('projectKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFlagDefaults: only required params', async () => {
    const responsePromise = client.api.v2.projects.flagDefaults.updateFlagDefaults('projectKey', {
      booleanDefaults: {
        falseDescription: 'serve false',
        falseDisplayName: 'False',
        offVariation: 1,
        onVariation: 0,
        trueDescription: 'serve true',
        trueDisplayName: 'True',
      },
      defaultClientSideAvailability: { usingEnvironmentId: true, usingMobileKey: true },
      tags: ['tag-1', 'tag-2'],
      temporary: true,
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
  test.skip('updateFlagDefaults: required and optional params', async () => {
    const response = await client.api.v2.projects.flagDefaults.updateFlagDefaults('projectKey', {
      booleanDefaults: {
        falseDescription: 'serve false',
        falseDisplayName: 'False',
        offVariation: 1,
        onVariation: 0,
        trueDescription: 'serve true',
        trueDisplayName: 'True',
      },
      defaultClientSideAvailability: { usingEnvironmentId: true, usingMobileKey: true },
      tags: ['tag-1', 'tag-2'],
      temporary: true,
    });
  });
});
