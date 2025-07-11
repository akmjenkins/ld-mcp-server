// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/flags/{projectKey}/{featureFlagKey}/copy',
  operationId: 'copyFeatureFlag',
};

export const tool: Tool = {
  name: 'copy_v2_api_flags',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n> ### Copying flag settings is an Enterprise feature\n>\n> Copying flag settings is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).\n\nCopy flag settings from a source environment to a target environment.\n\nBy default, this operation copies the entire flag configuration. You can use the `includedActions` or `excludedActions` to specify that only part of the flag configuration is copied.\n\nIf you provide the optional `currentVersion` of a flag, this operation tests to ensure that the current flag version in the environment matches the version you've specified. The operation rejects attempts to copy flag settings if the environment's current version  of the flag does not match the version you've specified. You can use this to enforce optimistic locking on copy attempts.\n",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key. The key identifies the flag in your code.',
      },
      source: {
        $ref: '#/$defs/flag_copy_config_environment',
      },
      target: {
        $ref: '#/$defs/flag_copy_config_environment',
      },
      comment: {
        type: 'string',
        description: 'Optional comment',
      },
      excludedActions: {
        type: 'array',
        description:
          'Optional list of the flag changes NOT to copy from the source environment to the target environment. You may include either  <code>includedActions</code> or <code>excludedActions</code>, but not both. If you include neither, then all flag changes will be copied.',
        items: {
          type: 'string',
          enum: [
            'updateOn',
            'updateRules',
            'updateFallthrough',
            'updateOffVariation',
            'updatePrerequisites',
            'updateTargets',
            'updateFlagConfigMigrationSettings',
          ],
        },
      },
      includedActions: {
        type: 'array',
        description:
          'Optional list of the flag changes to copy from the source environment to the target environment. You may include either <code>includedActions</code> or <code>excludedActions</code>, but not both. If you include neither, then all flag changes will be copied.',
        items: {
          type: 'string',
          enum: [
            'updateOn',
            'updateRules',
            'updateFallthrough',
            'updateOffVariation',
            'updatePrerequisites',
            'updateTargets',
            'updateFlagConfigMigrationSettings',
          ],
        },
      },
    },
    $defs: {
      flag_copy_config_environment: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            description: 'The environment key',
          },
          currentVersion: {
            type: 'integer',
            description:
              'Optional flag version. If you include this, the operation only succeeds if the current flag version in the environment matches this version.',
          },
        },
        required: ['key'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  return asTextContentResult(await client.api.v2.flags.copy(featureFlagKey, body));
};

export default { metadata, tool, handler };
