// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource branches', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.codeRefs.repositories.branches.retrieve('branch', { repo: 'repo' });
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
    const response = await client.api.v2.codeRefs.repositories.branches.retrieve('branch', {
      repo: 'repo',
      flagKey: 'flagKey',
      projKey: 'projKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.codeRefs.repositories.branches.update('branch', {
      repo: 'repo',
      head: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3',
      name: 'main',
      syncTime: 0,
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
    const response = await client.api.v2.codeRefs.repositories.branches.update('branch', {
      repo: 'repo',
      head: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3',
      name: 'main',
      syncTime: 0,
      commitTime: 0,
      references: [
        {
          hunks: [
            {
              startingLineNumber: 45,
              aliases: ['enableFeature', 'EnableFeature'],
              flagKey: 'enable-feature',
              lines: "var enableFeature = 'enable-feature';",
              projKey: 'default',
            },
          ],
          path: '/main/index.js',
          hint: 'javascript',
        },
      ],
      updateSequenceId: 25,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v2.codeRefs.repositories.branches.list('repo');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('extinctionEvents: only required params', async () => {
    const responsePromise = client.api.v2.codeRefs.repositories.branches.extinctionEvents('branch', {
      repo: 'repo',
      body: [
        {
          flagKey: 'enable-feature',
          message: 'Remove flag for launched feature',
          projKey: 'default',
          revision: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3',
          time: 0,
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
  test.skip('extinctionEvents: required and optional params', async () => {
    const response = await client.api.v2.codeRefs.repositories.branches.extinctionEvents('branch', {
      repo: 'repo',
      body: [
        {
          flagKey: 'enable-feature',
          message: 'Remove flag for launched feature',
          projKey: 'default',
          revision: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3',
          time: 0,
        },
      ],
    });
  });
});
