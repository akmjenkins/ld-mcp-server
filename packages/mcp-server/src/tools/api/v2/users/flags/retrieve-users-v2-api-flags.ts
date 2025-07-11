// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.users.flags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}',
  operationId: 'getUserFlagSetting',
};

export const tool: Tool = {
  name: 'retrieve_users_v2_api_flags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a single flag setting for a user by flag key. <br /><br />The `_value` is the flag variation that the user receives. The `setting` indicates whether you've explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    _links: {\n      type: 'object',\n      description: 'The location and content type of related resources.'\n    },\n    _value: {\n      type: 'object',\n      description: 'The value of the flag variation that the user receives. If there is no defined default rule, this is null.'\n    },\n    setting: {\n      type: 'object',\n      description: 'Whether the user is explicitly targeted to receive a particular variation. The setting is false if you have turned off a feature flag for a user. It is null if you haven\\'t assigned that user to a specific variation.'\n    },\n    reason: {\n      type: 'object',\n      description: 'Contains information about why that variation was selected.',\n      properties: {\n        kind: {\n          type: 'string',\n          description: 'Describes the general reason that LaunchDarkly selected this variation.'\n        },\n        errorKind: {\n          type: 'string',\n          description: 'The specific error type if the kind is \\'ERROR\\'.'\n        },\n        inExperiment: {\n          type: 'boolean',\n          description: 'Indicates whether the evaluation occurred as part of an experiment.'\n        },\n        prerequisiteKey: {\n          type: 'string',\n          description: 'The key of the flag that failed if the kind is \\'PREREQUISITE_FAILED\\'.'\n        },\n        ruleID: {\n          type: 'string',\n          description: 'The unique identifier of the matching rule if the kind is \\'RULE_MATCH\\'.'\n        },\n        ruleIndex: {\n          type: 'integer',\n          description: 'The positional index of the matching rule if the kind is \\'RULE_MATCH\\'. The index is 0-based.'\n        }\n      },\n      required: [        'kind'\n      ]\n    }\n  },\n  required: [    '_links',\n    '_value',\n    'setting'\n  ]\n}\n```",
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
      userKey: {
        type: 'string',
        description: 'The user key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
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
  const { featureFlagKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.users.flags.retrieve(featureFlagKey, body)),
  );
};

export default { metadata, tool, handler };
