// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource members', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.members.create({ body: [{ email: 'sandy@acme.com' }] });
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
    const response = await client.api.v2.members.create({
      body: [
        {
          email: 'sandy@acme.com',
          customRoles: ['customRole1', 'customRole2'],
          firstName: 'Ariel',
          lastName: 'Flores',
          password: '***',
          role: 'reader',
          roleAttributes: {
            '0': ['string'],
            '1': ['string'],
            '2': ['string'],
            '3': ['string'],
            '4': ['string'],
            '5': ['string'],
            '6': ['string'],
            '7': ['string'],
            '8': ['string'],
            '9': ['string'],
            '10': ['string'],
            '11': ['string'],
            '12': ['string'],
            '13': ['string'],
            '14': ['string'],
            '15': ['string'],
            '16': ['string'],
            '17': ['string'],
            '18': ['string'],
            '19': ['string'],
            '20': ['string'],
            '21': ['string'],
            '22': ['string'],
            '23': ['string'],
            '24': ['string'],
            '25': ['string'],
            '26': ['string'],
            '27': ['string'],
            '28': ['string'],
            '29': ['string'],
            '30': ['string'],
            '31': ['string'],
            '32': ['string'],
            '33': ['string'],
            '34': ['string'],
            '35': ['string'],
          },
          teamKeys: ['team-1', 'team-2'],
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v2.members.retrieve('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.members.retrieve('id', { expand: 'expand' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.members.update('id', { body: [{ op: 'add', path: '/role' }] });
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
    const response = await client.api.v2.members.update('id', {
      body: [{ op: 'add', path: '/role', value: 'writer' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v2.members.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.members.list(
        { expand: 'expand', filter: 'filter', limit: 0, offset: 0, sort: 'sort' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.api.v2.members.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('patchAll: only required params', async () => {
    const responsePromise = client.api.v2.members.patchAll({
      instructions: [{ kind: 'bar', memberIDs: 'bar', value: 'bar' }],
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
  test.skip('patchAll: required and optional params', async () => {
    const response = await client.api.v2.members.patchAll({
      instructions: [{ kind: 'bar', memberIDs: 'bar', value: 'bar' }],
      comment: 'Optional comment about the update',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('teams: only required params', async () => {
    const responsePromise = client.api.v2.members.teams('id', { teamKeys: ['team1', 'team2'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('teams: required and optional params', async () => {
    const response = await client.api.v2.members.teams('id', { teamKeys: ['team1', 'team2'] });
  });
});
