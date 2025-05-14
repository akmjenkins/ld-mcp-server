// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource teams', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.teams.create({ key: 'team-key-123abc', name: 'Example team' });
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
    const response = await client.api.v2.teams.create({
      key: 'team-key-123abc',
      name: 'Example team',
      expand: 'expand',
      customRoleKeys: ['example-role1', 'example-role2'],
      description: 'An example team',
      memberIDs: ['12ab3c45de678910fgh12345'],
      permissionGrants: [
        {
          actions: ['updateTeamMembers'],
          actionSet: 'maintainTeam',
          memberIDs: ['12ab3c45de678910fgh12345'],
        },
      ],
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
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v2.teams.retrieve('teamKey');
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
      client.api.v2.teams.retrieve('teamKey', { expand: 'expand' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.teams.update('teamKey', {
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
    const response = await client.api.v2.teams.update('teamKey', {
      instructions: [{ kind: 'bar', value: 'bar' }],
      expand: 'expand',
      comment: 'Optional comment about the update',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v2.teams.list();
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
      client.api.v2.teams.list(
        { expand: 'expand', filter: 'filter', limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.api.v2.teams.delete('teamKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('members', async () => {
    const responsePromise = client.api.v2.teams.members('teamKey', {});
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
    const responsePromise = client.api.v2.teams.patchAll({
      instructions: [{ kind: 'bar', memberIDs: 'bar', teamKeys: 'bar' }],
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
    const response = await client.api.v2.teams.patchAll({
      instructions: [{ kind: 'bar', memberIDs: 'bar', teamKeys: 'bar' }],
      comment: 'Optional comment about the update',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMaintainers', async () => {
    const responsePromise = client.api.v2.teams.retrieveMaintainers('teamKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMaintainers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.teams.retrieveMaintainers(
        'teamKey',
        { limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRoles', async () => {
    const responsePromise = client.api.v2.teams.retrieveRoles('teamKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRoles: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.teams.retrieveRoles(
        'teamKey',
        { limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });
});
