// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/migration-safety-issues',
  operationId: 'postMigrationSafetyIssues',
};

export const tool: Tool = {
  name: 'migration_safety_issues_flags_projects_v2_api_environments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the migration safety issues that are associated with the POSTed flag patch. The patch must use the semantic patch format for updating feature flags.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      affectedRuleIds: {\n        type: 'array',\n        description: 'A list of the IDs of the rules which are affected by this issue. <code>fallthrough</code> is a sentinel value for the default rule.',\n        items: {\n          type: 'string'\n        }\n      },\n      causingRuleId: {\n        type: 'string',\n        description: 'The ID of the rule which caused this issue'\n      },\n      issue: {\n        type: 'string',\n        description: 'A description of the issue that <code>causingRuleId</code> has caused for <code>affectedRuleIds</code>.'\n      },\n      oldSystemAffected: {\n        type: 'boolean',\n        description: 'Whether the changes caused by <code>causingRuleId</code> bring inconsistency to the old system'\n      }\n    },\n    required: []\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      flagKey: {
        type: 'string',
        description: 'The migration flag key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      instructions: {
        type: 'array',
        description: 'Semantic patch instructions. The same ones that are valid for flags are valid here.',
        items: {
          type: 'object',
        },
      },
      comment: {
        type: 'string',
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
    await maybeFilter(
      args,
      await client.api.v2.projects.flags.environments.migrationSafetyIssues(environmentKey, body),
    ),
  );
};

export default { metadata, tool, handler };
