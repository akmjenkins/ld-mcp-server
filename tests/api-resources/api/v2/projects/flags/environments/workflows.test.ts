// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.workflows.create('environmentKey', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      name: 'Progressive rollout starting in two days',
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
    const response = await client.api.v2.projects.flags.environments.workflows.create('environmentKey', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      name: 'Progressive rollout starting in two days',
      dryRun: true,
      query_templateKey: 'templateKey',
      description: 'Turn flag on for 10% of customers each day',
      maintainerId: '12ab3c45de678910abc12345',
      stages: [
        {
          action: {
            instructions: [
              { kind: 'turnFlagOn' },
              {
                kind: 'updateFallthroughVariationOrRollout',
                rolloutWeights: {
                  '452f5fb5-7320-4ba3-81a1-8f4324f79d49': 90000,
                  'fc15f6a4-05d3-4aa4-a997-446be461345d': 10000,
                },
              },
            ],
          },
          conditions: [
            {
              description: 'Require example-team approval for final stage',
              executeNow: false,
              executionDate: 0,
              kind: 'schedule',
              notifyMemberIds: ['507f1f77bcf86cd799439011'],
              notifyTeamKeys: ['example-team'],
              scheduleKind: 'relative',
              waitDuration: 2,
              waitDurationUnit: 'calendarDay',
            },
          ],
          executeConditionsInSequence: true,
          name: '10% rollout on day 1',
        },
      ],
      body_templateKey: 'templateKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.workflows.retrieve('workflowId', {
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
    const response = await client.api.v2.projects.flags.environments.workflows.retrieve('workflowId', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.workflows.list('environmentKey', {
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
  test.skip('list: required and optional params', async () => {
    const response = await client.api.v2.projects.flags.environments.workflows.list('environmentKey', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      limit: 0,
      offset: 0,
      sort: 'sort',
      status: 'status',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v2.projects.flags.environments.workflows.delete('workflowId', {
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
    const response = await client.api.v2.projects.flags.environments.workflows.delete('workflowId', {
      projectKey: 'projectKey',
      featureFlagKey: 'featureFlagKey',
      environmentKey: 'environmentKey',
    });
  });
});
