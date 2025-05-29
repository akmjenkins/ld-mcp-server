// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/environments',
  operationId: 'getEnvironmentsByProject',
};

export const tool: Tool = {
  name: 'list_projects_v2_api_environments',
  description:
    "Return a list of environments for the specified project.\n\nBy default, this returns the first 20 environments. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.\n\n### Filtering environments\n\nLaunchDarkly supports two fields for filters:\n- `query` is a string that matches against the environments' names and keys. It is not case sensitive.\n- `tags` is a `+`-separated list of environment tags. It filters the list of environments that have all of the tags in the list.\n\nFor example, the filter `filter=query:abc,tags:tag-1+tag-2` matches environments with the string `abc` in their name or key and also are tagged with `tag-1` and `tag-2`. The filter is not case-sensitive.\n\nThe documented values for `filter` query parameters are prior to URL encoding. For example, the `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.\n\n### Sorting environments\n\nLaunchDarkly supports the following fields for sorting:\n\n- `createdOn` sorts by the creation date of the environment.\n- `critical` sorts by whether the environments are marked as critical.\n- `name` sorts by environment name.\n\nFor example, `sort=name` sorts the response by environment name in ascending order.\n",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      filter: {
        type: 'string',
        description: 'A comma-separated list of filters. Each filter is of the form `field:value`.',
      },
      limit: {
        type: 'integer',
        description: 'The number of environments to return in the response. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      sort: {
        type: 'string',
        description:
          'A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.environments.list(projectKey, body);
};

export default { metadata, tool, handler };
