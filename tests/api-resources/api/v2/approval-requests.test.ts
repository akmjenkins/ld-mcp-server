// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource approvalRequests', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.api.v2.approvalRequests.retrieve('id');
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
      client.api.v2.approvalRequests.retrieve(
        'id',
        { expand: 'expand' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.api.v2.approvalRequests.update('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.api.v2.approvalRequests.delete('id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('apply', async () => {
    const responsePromise = client.api.v2.approvalRequests.apply('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('approvalRequests: only required params', async () => {
    const responsePromise = client.api.v2.approvalRequests.approvalRequests({
      description: 'Requesting to update targeting',
      instructions: [{ foo: 'bar' }],
      resourceId: 'proj/projKey:env/envKey:flag/flagKey',
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
  test.skip('approvalRequests: required and optional params', async () => {
    const response = await client.api.v2.approvalRequests.approvalRequests({
      description: 'Requesting to update targeting',
      instructions: [{ foo: 'bar' }],
      resourceId: 'proj/projKey:env/envKey:flag/flagKey',
      comment: 'optional comment',
      integrationConfig: { foo: 'bar' },
      notifyMemberIds: ['1234a56b7c89d012345e678f'],
      notifyTeamKeys: ['example-reviewer-team'],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveApprovalRequests', async () => {
    const responsePromise = client.api.v2.approvalRequests.retrieveApprovalRequests();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveApprovalRequests: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v2.approvalRequests.retrieveApprovalRequests(
        { expand: 'expand', filter: 'filter', limit: 0, offset: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('reviews', async () => {
    const responsePromise = client.api.v2.approvalRequests.reviews('id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
