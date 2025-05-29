// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.flags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate',
  operationId: 'evaluateContextInstance',
};

export const tool: Tool = {
  name: 'evaluate_environments_projects_v2_api_flags',
  description:
    'Evaluate flags for a context instance, for example, to determine the expected flag variation. **Do not use this API instead of an SDK.** The LaunchDarkly SDKs are specialized for the tasks of evaluating feature flags in your application at scale and generating analytics events based on those evaluations. This API is not designed for that use case. Any evaluations you perform with this API will not be reflected in features such as flag statuses and flag insights. Context instances evaluated by this API will not appear in the Contexts list. To learn more, read [Comparing LaunchDarkly\'s SDKs and REST API](https://launchdarkly.com/docs/guides/api/comparing-sdk-rest-api).\n\n### Filtering\n\nLaunchDarkly supports the `filter` query param for filtering, with the following fields:\n\n- `query` filters for a string that matches against the flags\' keys and names. It is not case sensitive. For example: `filter=query equals dark-mode`.\n- `tags` filters the list to flags that have all of the tags in the list. For example: `filter=tags contains ["beta","q1"]`.\n\nYou can also apply multiple filters at once. For example, setting `filter=query equals dark-mode, tags contains ["beta","q1"]` matches flags which match the key or name `dark-mode` and are tagged `beta` and `q1`.\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      body: {
        type: 'object',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above.',
      },
      limit: {
        type: 'integer',
        description: 'The number of feature flags to return. Defaults to -1, which returns all flags',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      sort: {
        type: 'string',
        description:
          'A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { environmentKey, ...body } = args as any;
  return client.api.v2.projects.environments.flags.evaluate(environmentKey, body);
};

export default { metadata, tool, handler };
