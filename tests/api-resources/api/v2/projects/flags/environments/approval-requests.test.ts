// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource approvalRequests', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.approvalRequests.retrieve('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
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
    const response = await client.api.v2.projects.flags.environments.approvalRequests.retrieve('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.approvalRequests.update('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
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
    const response = await client.api.v2.projects.flags.environments.approvalRequests.update('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.approvalRequests.delete('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
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
    const response = await client.api.v2.projects.flags.environments.approvalRequests.delete('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('apply: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.approvalRequests.apply('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
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
  test.skip('apply: required and optional params', async () => {
    const response = await client.api.v2.projects.flags.environments.approvalRequests.apply('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
      comment: 'Looks good, thanks for updating',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('approvalRequests: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.approvalRequests.approvalRequests(
      'environmentKey',
      {
        projectKey: 'projectKey',
        featureFlagKey: 'featureFlagKey',
        description: 'Requesting to update targeting',
        instructions: [{ foo: 'bar' }],
      },
    );
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
    const response = await client.api.v2.projects.flags.environments.approvalRequests.approvalRequests(
      'environmentKey',
      {
        projectKey: 'projectKey',
        featureFlagKey: 'featureFlagKey',
        description: 'Requesting to update targeting',
        instructions: [{ foo: 'bar' }],
        comment: 'optional comment',
        executionDate: 0,
        integrationConfig: { foo: 'bar' },
        notifyMemberIds: ['1234a56b7c89d012345e678f'],
        notifyTeamKeys: ['example-reviewer-team'],
        operatingOnId: '6297ed79dee7dc14e1f9a80c',
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveApprovalRequests: only required params', async () => {
    const responsePromise =
      client.api.v2.projects.flags.environments.approvalRequests.retrieveApprovalRequests('environmentKey', {
        projectKey: 'projectKey',
        featureFlagKey: 'featureFlagKey',
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
  test.skip('retrieveApprovalRequests: required and optional params', async () => {
    const response =
      await client.api.v2.projects.flags.environments.approvalRequests.retrieveApprovalRequests(
        'environmentKey',
        { projectKey: 'projectKey', featureFlagKey: 'featureFlagKey' },
      );
  });

  // skipped: tests are disabled for the time being
  test.skip('reviews: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.approvalRequests.reviews('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
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
  test.skip('reviews: required and optional params', async () => {
    const response = await client.api.v2.projects.flags.environments.approvalRequests.reviews('id', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
      comment: 'Looks good, thanks for updating',
      kind: 'approve',
    });
  });
});
