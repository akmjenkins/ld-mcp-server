// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource environments', () => {
  // skipped: tests are disabled for the time being
  test.skip('approvalRequestsFlagCopy: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.approvalRequestsFlagCopy(
      'environmentKey',
      {
        projectKey: 'projectKey',
        featureFlagKey: 'featureFlagKey',
        description: 'copy flag settings to another environment',
        source: { key: 'environment-key-123abc' },
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
  test.skip('approvalRequestsFlagCopy: required and optional params', async () => {
    const response = await client.api.v2.projects.flags.environments.approvalRequestsFlagCopy(
      'environmentKey',
      {
        projectKey: 'projectKey',
        featureFlagKey: 'featureFlagKey',
        description: 'copy flag settings to another environment',
        source: { key: 'environment-key-123abc', version: 1 },
        comment: 'optional comment',
        excludedActions: ['updateOn'],
        includedActions: ['updateOn'],
        notifyMemberIds: ['1234a56b7c89d012345e678f'],
        notifyTeamKeys: ['example-reviewer-team'],
      },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('migrationSafetyIssues: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.migrationSafetyIssues(
      'environmentKey',
      { projectKey: 'projectKey', flagKey: 'flagKey', instructions: [{ foo: 'bar' }] },
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
  test.skip('migrationSafetyIssues: required and optional params', async () => {
    const response = await client.api.v2.projects.flags.environments.migrationSafetyIssues('environmentKey', {
      projectKey: 'projectKey',
      flagKey: 'flagKey',
      instructions: [{ foo: 'bar' }],
      comment: 'comment',
    });
  });
});
