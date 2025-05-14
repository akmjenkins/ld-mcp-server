// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.code_refs.repositories',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_code_refs_v2_api_repositories',
  description:
    'Get a list of connected repositories. Optionally, you can include branch metadata with the `withBranches` query parameter. Embed references for the default branch with `ReferencesForDefaultBranch`. You can also filter the list of code references by project key and flag key.',
  inputSchema: {
    type: 'object',
    properties: {
      flagKey: {
        type: 'string',
        description:
          'If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch',
      },
      projKey: {
        type: 'string',
        description:
          'A LaunchDarkly project key. If provided, this filters code reference results to the specified project.',
      },
      withBranches: {
        type: 'string',
        description: 'If set to any value, the endpoint returns repositories with associated branch data',
      },
      withReferencesForDefaultBranch: {
        type: 'string',
        description:
          'If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.codeRefs.repositories.list(body);
};

export default { metadata, tool, handler };
