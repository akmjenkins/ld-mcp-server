// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metrics', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveResults: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.experiments.metrics.retrieveResults(
      'metricKey',
      { projectKey: 'projectKey', environmentKey: 'environmentKey', experimentKey: 'experimentKey' },
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
  test.skip('retrieveResults: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.experiments.metrics.retrieveResults(
      'metricKey',
      {
        projectKey: 'projectKey',
        environmentKey: 'environmentKey',
        experimentKey: 'experimentKey',
        expand: 'expand',
        iterationId: 'iterationId',
      },
    );
  });
});
