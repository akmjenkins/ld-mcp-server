// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scheduledChanges', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.scheduledChanges.retrieve('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
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
    const response = await client.api.v2.projects.flags.environments.scheduledChanges.retrieve('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.scheduledChanges.update('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
      instructions: [{ kind: 'bar', value: 'bar' }],
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
    const response = await client.api.v2.projects.flags.environments.scheduledChanges.update('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
      instructions: [{ kind: 'bar', value: 'bar' }],
      ignoreConflicts: true,
      comment: 'Optional comment describing the update to the scheduled changes',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.scheduledChanges.delete('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
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
    const response = await client.api.v2.projects.flags.environments.scheduledChanges.delete('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveScheduledChanges: only required params', async () => {
    const responsePromise =
      client.api.v2.projects.flags.environments.scheduledChanges.retrieveScheduledChanges('environmentKey', {
        projectKey: 'projectKey',
        featureFlagKey: 'featureFlagKey',
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
  test.skip('retrieveScheduledChanges: required and optional params', async () => {
    const response =
      await client.api.v2.projects.flags.environments.scheduledChanges.retrieveScheduledChanges(
        'environmentKey',
        { projectKey: 'projectKey', featureFlagKey: 'featureFlagKey' },
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('scheduledChanges: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.scheduledChanges.scheduledChanges(
      'environmentKey',
      {
        projectKey: 'projectKey',
        featureFlagKey: 'featureFlagKey',
        executionDate: 1718467200000,
        instructions: [{ kind: 'bar' }],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('scheduledChanges: required and optional params', async () => {
    const response = await client.api.v2.projects.flags.environments.scheduledChanges.scheduledChanges(
      'environmentKey',
      {
        projectKey: 'projectKey',
        featureFlagKey: 'featureFlagKey',
        executionDate: 1718467200000,
        instructions: [{ kind: 'bar' }],
        ignoreConflicts: true,
        comment: 'Optional comment describing the scheduled changes',
      },
    );
  });
});
