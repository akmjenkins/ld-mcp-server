// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TestLanguage from 'test-language';

const client = new TestLanguage({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource experiments', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.experiments.create('environmentKey', {
      projectKey: 'projectKey',
      iteration: {
        flags: {
          '0': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '1': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '2': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '3': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '4': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '5': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '6': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '7': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '8': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '9': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '10': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '11': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '12': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '13': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '14': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '15': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '16': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '17': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '18': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '19': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '20': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '21': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '22': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '23': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '24': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '25': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '26': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '27': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '28': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '29': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '30': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '31': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '32': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '33': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '34': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '35': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '36': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '37': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '38': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '39': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '40': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '41': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '42': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '43': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '44': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '45': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '46': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '47': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '48': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '49': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '50': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '51': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '52': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '53': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '54': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '55': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '56': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '57': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '58': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '59': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '60': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '61': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '62': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '63': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '64': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '65': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '66': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '67': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '68': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '69': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '70': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '71': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '72': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '73': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '74': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '75': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '76': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '77': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '78': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '79': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '80': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '81': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '82': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '83': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '84': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '85': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '86': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '87': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '88': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '89': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '90': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '91': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '92': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '93': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '94': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '95': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '96': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '97': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '98': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '99': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '100': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '101': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '102': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '103': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '104': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '105': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '106': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '107': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '108': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '109': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '110': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '111': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '112': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '113': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '114': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '115': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '116': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '117': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '118': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '119': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '120': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '121': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '122': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '123': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '124': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '125': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '126': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '127': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '128': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '129': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '130': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '131': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '132': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '133': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '134': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '135': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '136': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '137': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '138': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '139': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '140': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '141': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '142': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '143': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '144': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '145': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '146': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '147': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '148': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '149': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '150': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '151': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '152': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '153': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '154': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '155': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '156': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '157': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '158': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '159': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '160': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '161': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '162': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '163': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '164': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '165': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '166': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '167': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          '168': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        },
        hypothesis: 'Example hypothesis, the new button placement will increase conversion',
        metrics: [{ key: 'metric-key-123abc' }],
        treatments: [
          {
            allocationPercent: '10',
            baseline: true,
            name: 'Treatment 1',
            parameters: [
              { flagKey: 'example-flag-for-experiment', variationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
            ],
          },
        ],
      },
      key: 'experiment-key-123abc',
      name: 'Example experiment',
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
    const response = await client.api.v2.projects.environments.experiments.create('environmentKey', {
      projectKey: 'projectKey',
      iteration: {
        flags: {
          '0': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '1': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '2': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '3': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '4': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '5': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '6': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '7': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '8': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '9': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '10': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '11': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '12': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '13': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '14': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '15': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '16': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '17': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '18': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '19': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '20': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '21': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '22': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '23': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '24': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '25': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '26': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '27': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '28': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '29': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '30': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '31': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '32': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '33': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '34': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '35': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '36': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '37': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '38': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '39': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '40': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '41': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '42': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '43': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '44': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '45': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '46': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '47': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '48': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '49': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '50': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '51': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '52': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '53': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '54': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '55': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '56': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '57': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '58': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '59': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '60': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '61': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '62': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '63': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '64': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '65': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '66': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '67': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '68': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '69': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '70': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '71': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '72': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '73': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '74': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '75': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '76': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '77': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '78': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '79': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '80': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '81': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '82': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '83': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '84': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '85': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '86': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '87': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '88': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '89': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '90': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '91': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '92': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '93': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '94': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '95': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '96': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '97': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '98': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '99': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '100': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '101': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '102': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '103': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '104': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '105': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '106': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '107': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '108': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '109': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '110': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '111': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '112': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '113': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '114': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '115': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '116': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '117': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '118': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '119': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '120': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '121': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '122': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '123': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '124': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '125': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '126': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '127': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '128': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '129': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '130': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '131': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '132': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '133': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '134': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '135': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '136': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '137': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '138': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '139': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '140': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '141': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '142': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '143': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '144': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '145': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '146': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '147': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '148': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '149': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '150': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '151': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '152': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '153': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '154': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '155': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '156': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '157': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '158': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '159': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '160': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '161': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '162': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '163': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '164': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '165': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '166': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '167': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
          '168': {
            flagConfigVersion: 12,
            ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
            notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          },
        },
        hypothesis: 'Example hypothesis, the new button placement will increase conversion',
        metrics: [{ key: 'metric-key-123abc', isGroup: true, primary: true }],
        treatments: [
          {
            allocationPercent: '10',
            baseline: true,
            name: 'Treatment 1',
            parameters: [
              { flagKey: 'example-flag-for-experiment', variationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
            ],
          },
        ],
        attributes: ['country', 'device', 'os'],
        canReshuffleTraffic: true,
        primaryFunnelKey: 'metric-group-key-123abc',
        primarySingleMetricKey: 'metric-key-123abc',
        randomizationUnit: 'user',
      },
      key: 'experiment-key-123abc',
      name: 'Example experiment',
      description: 'An example experiment, used in testing',
      holdoutId: 'f3b74309-d581-44e1-8a2b-bb2933b4fe40',
      maintainerId: '12ab3c45de678910fgh12345',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.experiments.retrieve('experimentKey', {
      projectKey: 'projectKey',
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
    const response = await client.api.v2.projects.environments.experiments.retrieve('experimentKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      expand: 'expand',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.experiments.update('experimentKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
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
    const response = await client.api.v2.projects.environments.experiments.update('experimentKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      instructions: [{ kind: 'bar', value: 'bar' }],
      comment: 'Example comment describing the update',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.experiments.list('environmentKey', {
      projectKey: 'projectKey',
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
    const response = await client.api.v2.projects.environments.experiments.list('environmentKey', {
      projectKey: 'projectKey',
      expand: 'expand',
      filter: 'filter',
      lifecycleState: 'lifecycleState',
      limit: 0,
      offset: 0,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('iterations: only required params', async () => {
    const responsePromise = client.api.v2.projects.environments.experiments.iterations('experimentKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      flags: {
        '0': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '1': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '2': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '3': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '4': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '5': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '6': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '7': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '8': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '9': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '10': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '11': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '12': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '13': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '14': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '15': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '16': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '17': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '18': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '19': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '20': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '21': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '22': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '23': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '24': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '25': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '26': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '27': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '28': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '29': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '30': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '31': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '32': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '33': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '34': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '35': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '36': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '37': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '38': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '39': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '40': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '41': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '42': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '43': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '44': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '45': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '46': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '47': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '48': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '49': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '50': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '51': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '52': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '53': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '54': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '55': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '56': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '57': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '58': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '59': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '60': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '61': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '62': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '63': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '64': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '65': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '66': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '67': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '68': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '69': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '70': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '71': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '72': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '73': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '74': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '75': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '76': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '77': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '78': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '79': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '80': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '81': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '82': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '83': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '84': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '85': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '86': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '87': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '88': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '89': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '90': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '91': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '92': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '93': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '94': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '95': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '96': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '97': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '98': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '99': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '100': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '101': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '102': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '103': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '104': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '105': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '106': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '107': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '108': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '109': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '110': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '111': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '112': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '113': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '114': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '115': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '116': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '117': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '118': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '119': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '120': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '121': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '122': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '123': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '124': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '125': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '126': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '127': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '128': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '129': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '130': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '131': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '132': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '133': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '134': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '135': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '136': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '137': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '138': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '139': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '140': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '141': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '142': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '143': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '144': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '145': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '146': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '147': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '148': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '149': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '150': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '151': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '152': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '153': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '154': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '155': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '156': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '157': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '158': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '159': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '160': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '161': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '162': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '163': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '164': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '165': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '166': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '167': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
        '168': { flagConfigVersion: 12, ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
      },
      hypothesis: 'Example hypothesis, the new button placement will increase conversion',
      metrics: [{ key: 'metric-key-123abc' }],
      treatments: [
        {
          allocationPercent: '10',
          baseline: true,
          name: 'Treatment 1',
          parameters: [
            { flagKey: 'example-flag-for-experiment', variationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          ],
        },
      ],
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
  test.skip('iterations: required and optional params', async () => {
    const response = await client.api.v2.projects.environments.experiments.iterations('experimentKey', {
      projectKey: 'projectKey',
      environmentKey: 'environmentKey',
      flags: {
        '0': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '1': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '2': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '3': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '4': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '5': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '6': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '7': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '8': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '9': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '10': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '11': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '12': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '13': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '14': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '15': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '16': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '17': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '18': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '19': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '20': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '21': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '22': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '23': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '24': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '25': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '26': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '27': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '28': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '29': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '30': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '31': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '32': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '33': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '34': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '35': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '36': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '37': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '38': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '39': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '40': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '41': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '42': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '43': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '44': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '45': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '46': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '47': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '48': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '49': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '50': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '51': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '52': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '53': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '54': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '55': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '56': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '57': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '58': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '59': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '60': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '61': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '62': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '63': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '64': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '65': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '66': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '67': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '68': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '69': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '70': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '71': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '72': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '73': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '74': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '75': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '76': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '77': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '78': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '79': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '80': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '81': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '82': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '83': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '84': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '85': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '86': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '87': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '88': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '89': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '90': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '91': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '92': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '93': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '94': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '95': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '96': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '97': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '98': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '99': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '100': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '101': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '102': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '103': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '104': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '105': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '106': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '107': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '108': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '109': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '110': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '111': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '112': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '113': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '114': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '115': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '116': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '117': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '118': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '119': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '120': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '121': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '122': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '123': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '124': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '125': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '126': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '127': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '128': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '129': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '130': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '131': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '132': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '133': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '134': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '135': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '136': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '137': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '138': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '139': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '140': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '141': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '142': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '143': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '144': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '145': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '146': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '147': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '148': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '149': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '150': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '151': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '152': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '153': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '154': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '155': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '156': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '157': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '158': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '159': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '160': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '161': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '162': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '163': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '164': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '165': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '166': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '167': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
        '168': {
          flagConfigVersion: 12,
          ruleId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
          notInExperimentVariationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05',
        },
      },
      hypothesis: 'Example hypothesis, the new button placement will increase conversion',
      metrics: [{ key: 'metric-key-123abc', isGroup: true, primary: true }],
      treatments: [
        {
          allocationPercent: '10',
          baseline: true,
          name: 'Treatment 1',
          parameters: [
            { flagKey: 'example-flag-for-experiment', variationId: 'e432f62b-55f6-49dd-a02f-eb24acf39d05' },
          ],
        },
      ],
      attributes: ['country', 'device', 'os'],
      canReshuffleTraffic: true,
      primaryFunnelKey: 'metric-group-key-123abc',
      primarySingleMetricKey: 'metric-key-123abc',
      randomizationUnit: 'user',
    });
  });
});
