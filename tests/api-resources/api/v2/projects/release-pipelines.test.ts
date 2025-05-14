// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource releasePipelines', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.releasePipelines.retrieve('pipelineKey', {
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
    const response = await client.api.v2.projects.releasePipelines.retrieve('pipelineKey', {
      projectKey: 'projectKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.releasePipelines.update('pipelineKey', {
      projectKey: 'projectKey',
      name: 'Standard Pipeline',
      phases: [
        { audiences: [{ environmentKey: 'environmentKey', name: 'name' }], name: 'Phase 1 - Testing' },
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
    const response = await client.api.v2.projects.releasePipelines.update('pipelineKey', {
      projectKey: 'projectKey',
      name: 'Standard Pipeline',
      phases: [
        {
          audiences: [
            {
              environmentKey: 'environmentKey',
              name: 'name',
              configuration: {
                releaseStrategy: 'monitoredRelease',
                requireApproval: true,
                notifyMemberIds: ['1234a56b7c89d012345e678f'],
                notifyTeamKeys: ['example-reviewer-team'],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rollbackOnRegression: true,
                  rolloutWeight: 50,
                  randomizationUnit: 'user',
                },
              },
              segmentKeys: ['string'],
            },
          ],
          name: 'Phase 1 - Testing',
          configuration: {},
        },
      ],
      description: 'Standard pipeline to roll out to production',
      tags: ['example-tag'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.releasePipelines.delete('pipelineKey', {
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
    const response = await client.api.v2.projects.releasePipelines.delete('pipelineKey', {
      projectKey: 'projectKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('releasePipelines: only required params', async () => {
    const responsePromise = client.api.v2.projects.releasePipelines.releasePipelines('projectKey', {
      key: 'standard-pipeline',
      name: 'Standard Pipeline',
      phases: [
        { audiences: [{ environmentKey: 'environmentKey', name: 'name' }], name: 'Phase 1 - Testing' },
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
  test.skip('releasePipelines: required and optional params', async () => {
    const response = await client.api.v2.projects.releasePipelines.releasePipelines('projectKey', {
      key: 'standard-pipeline',
      name: 'Standard Pipeline',
      phases: [
        {
          audiences: [
            {
              environmentKey: 'environmentKey',
              name: 'name',
              configuration: {
                releaseStrategy: 'monitoredRelease',
                requireApproval: true,
                notifyMemberIds: ['1234a56b7c89d012345e678f'],
                notifyTeamKeys: ['example-reviewer-team'],
                releaseGuardianConfiguration: {
                  monitoringWindowMilliseconds: 60000,
                  rollbackOnRegression: true,
                  rolloutWeight: 50,
                  randomizationUnit: 'user',
                },
              },
              segmentKeys: ['string'],
            },
          ],
          name: 'Phase 1 - Testing',
          configuration: {},
        },
      ],
      description: 'Standard pipeline to roll out to production',
      isLegacy: true,
      isProjectDefault: true,
      tags: ['example-tag'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveReleasePipelines', async () => {
    const responsePromise = client.api.v2.projects.releasePipelines.retrieveReleasePipelines('projectKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveReleasePipelines: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.projects.releasePipelines.retrieveReleasePipelines(
        'projectKey',
        { filter: 'filter', limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveReleases: only required params', async () => {
    const responsePromise = client.api.v2.projects.releasePipelines.retrieveReleases('pipelineKey', {
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
  test.skip('retrieveReleases: required and optional params', async () => {
    const response = await client.api.v2.projects.releasePipelines.retrieveReleases('pipelineKey', {
      projectKey: 'projectKey',
      filter: 'filter',
      limit: 0,
      offset: 0,
    });
  });
});
