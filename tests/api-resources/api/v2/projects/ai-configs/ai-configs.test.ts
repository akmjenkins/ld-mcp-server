// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource aiConfigs', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.retrieve('configKey', {
      projectKey: 'projectKey',
      'LD-API-Version': 'beta',
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
    const response = await client.api.v2.projects.aiConfigs.retrieve('configKey', {
      projectKey: 'projectKey',
      'LD-API-Version': 'beta',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.update('configKey', {
      projectKey: 'projectKey',
      'LD-API-Version': 'beta',
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
    const response = await client.api.v2.projects.aiConfigs.update('configKey', {
      projectKey: 'projectKey',
      'LD-API-Version': 'beta',
      description: 'description',
      maintainerId: 'maintainerId',
      maintainerTeamKey: 'maintainerTeamKey',
      name: 'name',
      tags: ['tags', 'tags'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.delete('configKey', {
      projectKey: 'default',
      'LD-API-Version': 'beta',
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
    const response = await client.api.v2.projects.aiConfigs.delete('configKey', {
      projectKey: 'default',
      'LD-API-Version': 'beta',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('aiConfigs: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.aiConfigs('projectKey', {
      key: 'key',
      name: 'name',
      'LD-API-Version': 'beta',
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
  test.skip('aiConfigs: required and optional params', async () => {
    const response = await client.api.v2.projects.aiConfigs.aiConfigs('projectKey', {
      key: 'key',
      name: 'name',
      'LD-API-Version': 'beta',
      description: '',
      maintainerId: 'maintainerId',
      maintainerTeamKey: 'maintainerTeamKey',
      tags: ['tags', 'tags'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAIConfigs: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.retrieveAIConfigs('default', {
      'LD-API-Version': 'beta',
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
  test.skip('retrieveAIConfigs: required and optional params', async () => {
    const response = await client.api.v2.projects.aiConfigs.retrieveAIConfigs('default', {
      'LD-API-Version': 'beta',
      filter: 'filter',
      limit: 0,
      offset: 0,
      sort: 'sort',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMetrics: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.retrieveMetrics('configKey', {
      projectKey: 'projectKey',
      env: 'env',
      from: 0,
      to: 0,
      'LD-API-Version': 'beta',
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
  test.skip('retrieveMetrics: required and optional params', async () => {
    const response = await client.api.v2.projects.aiConfigs.retrieveMetrics('configKey', {
      projectKey: 'projectKey',
      env: 'env',
      from: 0,
      to: 0,
      'LD-API-Version': 'beta',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMetricsByVariation: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.retrieveMetricsByVariation('configKey', {
      projectKey: 'projectKey',
      env: 'env',
      from: 0,
      to: 0,
      'LD-API-Version': 'beta',
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
  test.skip('retrieveMetricsByVariation: required and optional params', async () => {
    const response = await client.api.v2.projects.aiConfigs.retrieveMetricsByVariation('configKey', {
      projectKey: 'projectKey',
      env: 'env',
      from: 0,
      to: 0,
      'LD-API-Version': 'beta',
    });
  });
});
