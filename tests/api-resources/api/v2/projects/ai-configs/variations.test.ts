// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource variations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.variations.create('configKey', {
      projectKey: 'projectKey',
      key: 'key',
      messages: [
        { content: 'content', role: 'role' },
        { content: 'content', role: 'role' },
      ],
      model: '{}',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v2.projects.aiConfigs.variations.create('configKey', {
      projectKey: 'projectKey',
      key: 'key',
      messages: [
        { content: 'content', role: 'role' },
        { content: 'content', role: 'role' },
      ],
      model: '{}',
      name: 'name',
      'LD-API-Version': 'beta',
      comment: 'comment',
      modelConfigKey: 'modelConfigKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.variations.retrieve('default', {
      projectKey: 'default',
      configKey: 'default',
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
    const response = await client.api.v2.projects.aiConfigs.variations.retrieve('default', {
      projectKey: 'default',
      configKey: 'default',
      'LD-API-Version': 'beta',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.variations.update('variationKey', {
      projectKey: 'projectKey',
      configKey: 'configKey',
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
    const response = await client.api.v2.projects.aiConfigs.variations.update('variationKey', {
      projectKey: 'projectKey',
      configKey: 'configKey',
      'LD-API-Version': 'beta',
      comment: 'comment',
      messages: [
        { content: 'content', role: 'role' },
        { content: 'content', role: 'role' },
      ],
      model: '{}',
      modelConfigKey: 'modelConfigKey',
      name: 'name',
      published: true,
      state: 'state',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.aiConfigs.variations.delete('variationKey', {
      projectKey: 'projectKey',
      configKey: 'configKey',
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
    const response = await client.api.v2.projects.aiConfigs.variations.delete('variationKey', {
      projectKey: 'projectKey',
      configKey: 'configKey',
      'LD-API-Version': 'beta',
    });
  });
});
