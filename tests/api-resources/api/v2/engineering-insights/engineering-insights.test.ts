// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource engineeringInsights', () => {
  // skipped: tests are disabled for the time being
  test.skip('deploymentEvents: only required params', async () => {
    const responsePromise = client.api.v2.engineeringInsights.deploymentEvents({
      applicationKey: 'billing-service',
      environmentKey: 'production',
      eventType: 'started',
      projectKey: 'default',
      version: 'a90a8a2',
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
  test.skip('deploymentEvents: required and optional params', async () => {
    const response = await client.api.v2.engineeringInsights.deploymentEvents({
      applicationKey: 'billing-service',
      environmentKey: 'production',
      eventType: 'started',
      projectKey: 'default',
      version: 'a90a8a2',
      applicationKind: 'server',
      applicationName: 'Billing Service',
      deploymentMetadata: { buildNumber: 'bar' },
      eventMetadata: { buildSystemVersion: 'bar' },
      eventTime: 0,
      versionName: 'v1.0.0',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFlagEvents: only required params', async () => {
    const responsePromise = client.api.v2.engineeringInsights.retrieveFlagEvents({
      environmentKey: 'environmentKey',
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
  test.skip('retrieveFlagEvents: required and optional params', async () => {
    const response = await client.api.v2.engineeringInsights.retrieveFlagEvents({
      environmentKey: 'environmentKey',
      projectKey: 'projectKey',
      after: 'after',
      applicationKey: 'applicationKey',
      before: 'before',
      expand: 'expand',
      from: 0,
      global: 'global',
      hasExperiments: true,
      impactSize: 'impactSize',
      limit: 0,
      query: 'query',
      to: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrievePullRequests: only required params', async () => {
    const responsePromise = client.api.v2.engineeringInsights.retrievePullRequests({
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
  test.skip('retrievePullRequests: required and optional params', async () => {
    const response = await client.api.v2.engineeringInsights.retrievePullRequests({
      projectKey: 'projectKey',
      after: 'after',
      applicationKey: 'applicationKey',
      before: 'before',
      environmentKey: 'environmentKey',
      expand: 'expand',
      from: '2019-12-27T18:11:19.117Z',
      limit: 0,
      query: 'query',
      sort: 'sort',
      status: 'status',
      to: '2019-12-27T18:11:19.117Z',
    });
  });
});
