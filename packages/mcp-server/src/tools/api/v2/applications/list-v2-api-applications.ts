// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.applications',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/applications',
  operationId: 'getApplications',
};

export const tool: Tool = {
  name: 'list_v2_api_applications',
  description:
    '\nGet a list of applications.\n\n### Expanding the applications response\n\nLaunchDarkly supports expanding the "Get applications" response to include additional fields.\n\nTo expand the response, append the `expand` query parameter and include the following:\n\n* `flags` includes details on the flags that have been evaluated by the application\n\nFor example, use `?expand=flags` to include the `flags` field in the response. By default, this field is **not** included in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response. Options: `flags`.',
      },
      filter: {
        type: 'string',
        description:
          'Accepts filter by `key`, `name`, `kind`, and `autoAdded`. To learn more about the filter syntax, read [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions).',
      },
      limit: {
        type: 'integer',
        description: 'The number of applications to return. Defaults to 10.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      sort: {
        type: 'string',
        description:
          'Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.applications.list(body);
};

export default { metadata, tool, handler };
