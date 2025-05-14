// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource keys', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v2.integrationConfigurations.keys.retrieve('integrationKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.integrationConfigurations.keys.update('integrationKey', {
      configValues: { optional: 'bar', required: 'bar', url: 'bar' },
      name: 'Example integration configuration',
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
    const response = await client.api.v2.integrationConfigurations.keys.update('integrationKey', {
      configValues: { optional: 'bar', required: 'bar', url: 'bar' },
      name: 'Example integration configuration',
      capabilityConfig: {
        approvals: {
          additionalFormVariables: [
            {
              allowedValues: ['string'],
              defaultValue: {},
              description: 'description',
              dynamicOptions: {
                endpoint: {
                  headers: [{ name: 'name', value: 'value' }],
                  hmacSignature: {
                    headerName: 'headerName',
                    hmacSecretFormVariableKey: 'hmacSecretFormVariableKey',
                  },
                  method: 'method',
                  url: 'url',
                },
                parser: { optionsItems: { label: 'label', value: 'value' }, optionsPath: 'optionsPath' },
              },
              isOptional: true,
              key: 'key',
              name: 'name',
              placeholder: 'placeholder',
              type: 'type',
            },
          ],
        },
        auditLogEventsHook: {
          statements: [
            {
              effect: 'allow',
              actions: ['*'],
              notActions: ['string'],
              notResources: ['string'],
              resources: ['proj/*:env/*:flag/*;testing-tag'],
            },
          ],
        },
      },
      enabled: true,
      tags: ['ops'],
    });
  });
});
