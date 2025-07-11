// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEvaluate flags for a context instance, for example, to determine the expected flag variation. **Do not use this API instead of an SDK.** The LaunchDarkly SDKs are specialized for the tasks of evaluating feature flags in your application at scale and generating analytics events based on those evaluations. This API is not designed for that use case. Any evaluations you perform with this API will not be reflected in features such as flag statuses and flag insights. Context instances evaluated by this API will not appear in the Contexts list. To learn more, read [Comparing LaunchDarkly's SDKs and REST API](https://launchdarkly.com/docs/guides/api/comparing-sdk-rest-api).\n\n### Filtering\n\nLaunchDarkly supports the `filter` query param for filtering, with the following fields:\n\n- `query` filters for a string that matches against the flags' keys and names. It is not case sensitive. For example: `filter=query equals dark-mode`.\n- `tags` filters the list to flags that have all of the tags in the list. For example: `filter=tags contains [\"beta\",\"q1\"]`.\n\nYou can also apply multiple filters at once. For example, setting `filter=query equals dark-mode, tags contains [\"beta\",\"q1\"]` matches flags which match the key or name `dark-mode` and are tagged `beta` and `q1`.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources'\n    },\n    items: {\n      type: 'array',\n      description: 'Details on the flag evaluations for this context instance',\n      items: {\n        type: 'object',\n        properties: {\n          _links: {\n            type: 'object',\n            description: 'The location and content type of related resources'\n          },\n          _value: {\n            type: 'object',\n            description: 'The value of the flag variation that the context receives. If there is no defined default rule, this is null.'\n          },\n          key: {\n            type: 'string',\n            description: 'Key of the flag.'\n          },\n          name: {\n            type: 'string',\n            description: 'Name of the flag.'\n          },\n          reason: {\n            type: 'object',\n            description: 'Contains information about why that variation was selected.',\n            properties: {\n              kind: {\n                type: 'string',\n                description: 'Describes the general reason that LaunchDarkly selected this variation.'\n              },\n              errorKind: {\n                type: 'string',\n                description: 'The specific error type if the kind is \\'ERROR\\'.'\n              },\n              inExperiment: {\n                type: 'boolean',\n                description: 'Indicates whether the context was evaluated as part of an experiment.'\n              },\n              prerequisiteKey: {\n                type: 'string',\n                description: 'The key of the flag that failed if the kind is \\'PREREQUISITE_FAILED\\'.'\n              },\n              ruleID: {\n                type: 'string',\n                description: 'The unique identifier of the matching rule if the kind is \\'RULE_MATCH\\'.'\n              },\n              ruleIndex: {\n                type: 'integer',\n                description: 'The positional index of the matching rule if the kind is \\'RULE_MATCH\\'. The index is 0-based.'\n              }\n            },\n            required: [              'kind'\n            ]\n          }\n        },\n        required: [          '_links',\n          '_value',\n          'key',\n          'name'\n        ]\n      }\n    },\n    totalCount: {\n      type: 'integer',\n      description: 'The number of flags'\n    }\n  },\n  required: [    '_links',\n    'items'\n  ]\n}\n```",
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
  const { environmentKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.environments.flags.evaluate(environmentKey, body)),
  );
};

export default { metadata, tool, handler };
