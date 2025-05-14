// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource release', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.release.create('flagKey', {
      projectKey: 'projectKey',
      releasePipelineKey: 'releasePipelineKey',
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
    const response = await client.api.v2.projects.flags.release.create('flagKey', {
      projectKey: 'projectKey',
      releasePipelineKey: 'releasePipelineKey',
      releaseVariationId: 'releaseVariationId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.release.update('phaseId', {
      projectKey: 'projectKey',
      flagKey: 'flagKey',
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
    const response = await client.api.v2.projects.flags.release.update('phaseId', {
      projectKey: 'projectKey',
      flagKey: 'flagKey',
      audiences: [
        {
          audienceId: 'audienceId',
          notifyMemberIds: ['1234a56b7c89d012345e678f'],
          notifyTeamKeys: ['example-reviewer-team'],
          releaseGuardianConfiguration: {
            monitoringWindowMilliseconds: 60000,
            randomizationUnit: 'user',
            rollbackOnRegression: true,
            rolloutWeight: 50,
          },
        },
      ],
      status: 'Started',
    });
  });
});
