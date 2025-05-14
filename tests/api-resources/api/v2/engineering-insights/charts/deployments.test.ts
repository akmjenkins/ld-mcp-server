// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deployments', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveFrequency', async () => {
    const responsePromise = client.api.v2.engineeringInsights.charts.deployments.retrieveFrequency();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFrequency: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.engineeringInsights.charts.deployments.retrieveFrequency(
        {
          applicationKey: 'applicationKey',
          bucketMs: 0,
          bucketType: 'bucketType',
          environmentKey: 'environmentKey',
          expand: 'expand',
          from: '2019-12-27T18:11:19.117Z',
          groupBy: 'groupBy',
          projectKey: 'projectKey',
          to: '2019-12-27T18:11:19.117Z',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });
});
