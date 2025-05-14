// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource metricGroups', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.metricGroups.retrieve('metricGroupKey', {
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
    const response = await client.api.v2.projects.metricGroups.retrieve('metricGroupKey', {
      projectKey: 'projectKey',
      expand: 'expand',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.metricGroups.update('metricGroupKey', {
      projectKey: 'projectKey',
      body: [{ op: 'replace', path: '/name' }],
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
    const response = await client.api.v2.projects.metricGroups.update('metricGroupKey', {
      projectKey: 'projectKey',
      body: [{ op: 'replace', path: '/name', value: 'my-updated-metric-group' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.metricGroups.delete('metricGroupKey', {
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
    const response = await client.api.v2.projects.metricGroups.delete('metricGroupKey', {
      projectKey: 'projectKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('metricGroups: only required params', async () => {
    const responsePromise = client.api.v2.projects.metricGroups.metricGroups('projectKey', {
      key: 'metric-group-key-123abc',
      kind: 'funnel',
      maintainerId: '569fdeadbeef1644facecafe',
      metrics: [{ key: 'metric-key-123abc', nameInGroup: 'Step 1' }],
      name: 'My metric group',
      tags: ['ops'],
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
  test.skip('metricGroups: required and optional params', async () => {
    const response = await client.api.v2.projects.metricGroups.metricGroups('projectKey', {
      key: 'metric-group-key-123abc',
      kind: 'funnel',
      maintainerId: '569fdeadbeef1644facecafe',
      metrics: [{ key: 'metric-key-123abc', nameInGroup: 'Step 1' }],
      name: 'My metric group',
      tags: ['ops'],
      description: 'Description of the metric group',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMetricGroups', async () => {
    const responsePromise = client.api.v2.projects.metricGroups.retrieveMetricGroups('projectKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMetricGroups: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.projects.metricGroups.retrieveMetricGroups(
        'projectKey',
        { expand: 'expand', filter: 'filter', limit: 0, offset: 0, sort: 'sort' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });
});
