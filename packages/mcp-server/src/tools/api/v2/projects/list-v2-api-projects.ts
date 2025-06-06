// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects',
  operationId: 'getProjects',
};

export const tool: Tool = {
  name: 'list_v2_api_projects',
  description:
    'Return a list of projects.\n\nBy default, this returns the first 20 projects. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.\n\n### Filtering projects\n\nLaunchDarkly supports three fields for filters:\n- `query` is a string that matches against the projects\' names and keys. It is not case sensitive.\n- `tags` is a `+`-separated list of project tags. It filters the list of projects that have all of the tags in the list.\n- `keys` is a `|` separated list of project keys. It filters the list to projects that have any of the keys in the list.\n\nFor example, the filter `filter=query:abc,tags:tag-1+tag-2` matches projects with the string `abc` in their name or key and also are tagged with `tag-1` and `tag-2`. The filter is not case-sensitive.\n\nThe documented values for `filter` query parameters are prior to URL encoding. For example, the `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.\n\n### Sorting projects\n\nLaunchDarkly supports two fields for sorting:\n- `name` sorts by project name.\n- `createdOn` sorts by the creation date of the project.\n\nFor example, `sort=name` sorts the response by project name in ascending order.\n\n### Expanding the projects response\n\nLaunchDarkly supports one field for expanding the "List projects" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with the `environments` field.\n\n* `environments` includes a paginated list of the project environments.\n\nFor example, `expand=environments` includes the `environments` field for each project in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
      filter: {
        type: 'string',
        description: 'A comma-separated list of filters. Each filter is constructed as `field:value`.',
      },
      limit: {
        type: 'integer',
        description: 'The number of projects to return in the response. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items.',
      },
      sort: {
        type: 'string',
        description:
          'A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.projects.list(body));
};

export default { metadata, tool, handler };
