// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource modelConfigs', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.modelConfigs.retrieve('default', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.api.v2.projects.aiConfigs.modelConfigs.retrieve('default', {
      projectKey: 'default',
      'LD-API-Version': 'beta',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.modelConfigs.delete('modelConfigKey', {
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
    const response = await client.api.v2.projects.aiConfigs.modelConfigs.delete('modelConfigKey', {
      projectKey: 'default',
      'LD-API-Version': 'beta',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('modelConfigs: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.modelConfigs.modelConfigs('default', {
      id: 'id',
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
  test.skip('modelConfigs: required and optional params', async () => {
    const response = await client.api.v2.projects.aiConfigs.modelConfigs.modelConfigs('default', {
      id: 'id',
      key: 'key',
      name: 'name',
      'LD-API-Version': 'beta',
      costPerInputToken: 0.8008281904610115,
      costPerOutputToken: 6.027456183070403,
      customParams: '{}',
      icon: 'icon',
      params: '{}',
      provider: 'provider',
      tags: ['tags', 'tags'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveModelConfigs: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.modelConfigs.retrieveModelConfigs('default', {
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
  test.skip('retrieveModelConfigs: required and optional params', async () => {
    const response = await client.api.v2.projects.aiConfigs.modelConfigs.retrieveModelConfigs('default', {
      'LD-API-Version': 'beta',
      restricted: true,
    });
  });
});
