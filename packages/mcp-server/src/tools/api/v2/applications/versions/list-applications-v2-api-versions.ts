// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.applications.versions',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_applications_v2_api_versions',
  description: 'Get a list of versions for a specific application in an account.',
  inputSchema: {
    type: 'object',
    properties: {
      applicationKey: {
        type: 'string',
        description: 'The application key',
      },
      filter: {
        type: 'string',
        description:
          'Accepts filter by `key`, `name`, `supported`, and `autoAdded`. To learn more about the filter syntax, read [Filtering applications and application versions](https://launchdarkly.com/docs/api/applications-beta#filtering-applications-and-application-versions).',
      },
      limit: {
        type: 'integer',
        description: 'The number of versions to return. Defaults to 50.',
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
  const { applicationKey, ...body } = args as any;
  return client.api.v2.applications.versions.list(applicationKey, body);
};

export default { metadata, tool, handler };
