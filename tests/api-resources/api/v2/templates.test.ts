// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource templates', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.templates.create({ key: 'key' });
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
    const response = await client.api.v2.templates.create({
      key: 'key',
      description: 'description',
      environmentKey: 'environmentKey',
      flagKey: 'flagKey',
      name: 'name',
      projectKey: 'projectKey',
      stages: [
        {
          action: { instructions: '{"instructions": [{ "kind": "turnFlagOn"}]}' },
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
      workflowId: 'workflowId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v2.templates.list();
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
      client.api.v2.templates.list({ search: 'search', summary: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TestLanguage.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.api.v2.templates.delete('templateKey');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
