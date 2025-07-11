// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.release_pipelines',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}/releases',
  operationId: 'getAllReleaseProgressionsForReleasePipeline',
};

export const tool: Tool = {
  name: 'retrieve_releases_projects_v2_api_release_pipelines',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet details on the progression of all releases, across all flags, for a release pipeline\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    activeCount: {\n      type: 'integer',\n      description: 'The number of active releases'\n    },\n    completedCount: {\n      type: 'integer',\n      description: 'The number of completed releases'\n    },\n    items: {\n      type: 'array',\n      description: 'A list of details for each release, across all flags, for this release pipeline',\n      items: {\n        type: 'object',\n        properties: {\n          _createdAt: {\n            type: 'integer',\n            description: 'Timestamp of when the release was created'\n          },\n          _links: {\n            type: 'object',\n            description: 'The location and content type of related resources'\n          },\n          flagKey: {\n            type: 'string',\n            description: 'The flag key'\n          },\n          _completedAt: {\n            type: 'integer',\n            description: 'Timestamp of when the release was completed'\n          },\n          activePhaseId: {\n            type: 'string',\n            description: 'The ID of the currently active release phase'\n          }\n        },\n        required: [          '_createdAt',\n          '_links',\n          'flagKey'\n        ]\n      }\n    },\n    phases: {\n      type: 'array',\n      description: 'A list of details for each phase, across all releases, for this release pipeline',\n      items: {\n        type: 'object',\n        properties: {\n          _id: {\n            type: 'string',\n            description: 'The phase ID'\n          },\n          name: {\n            type: 'string',\n            description: 'The release phase name'\n          },\n          releaseCount: {\n            type: 'integer',\n            description: 'The number of active releases in this phase'\n          }\n        },\n        required: [          '_id',\n          'name',\n          'releaseCount'\n        ]\n      }\n    },\n    totalCount: {\n      type: 'integer',\n      description: 'The total number of releases for this release pipeline'\n    }\n  },\n  required: [    '_links',\n    'activeCount',\n    'completedCount',\n    'items',\n    'phases',\n    'totalCount'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      pipelineKey: {
        type: 'string',
        description: 'The pipeline key',
      },
      filter: {
        type: 'string',
        description:
          'Accepts filter by `status` and `activePhaseId`. `status` can take a value of `completed` or `active`. `activePhaseId` takes a UUID and will filter results down to releases active on the specified phase. Providing `status equals completed` along with an `activePhaseId` filter will return an error as they are disjoint sets of data. The combination of `status equals active` and `activePhaseId` will return the same results as `activePhaseId` alone.',
      },
      limit: {
        type: 'integer',
        description: 'The maximum number of items to return. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { pipelineKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(
      args,
      await client.api.v2.projects.releasePipelines.retrieveReleases(pipelineKey, body),
    ),
  );
};

export default { metadata, tool, handler };
