// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.environments.contexts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath:
    '/api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey}',
  operationId: 'putContextFlagSetting',
};

export const tool: Tool = {
  name: 'update_environments_projects_v2_api_contexts',
  description:
    "\nEnable or disable a feature flag for a context based on its context kind and key.\n\nOmitting the `setting` attribute from the request body, or including a `setting` of `null`, erases the current setting for a context.\n\nIf you previously patched the flag, and the patch included the context's data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the combination of the context's key and kind before, it calculates the flag values based on the context kind and key.\n",
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
      contextKind: {
        type: 'string',
        description: 'The context kind',
      },
      contextKey: {
        type: 'string',
        description: 'The context key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the change',
      },
      setting: {
        type: 'object',
        description: "The variation value to set for the context. Must match the flag's variation type.",
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { featureFlagKey, ...body } = args as any;
  const response = await client.api.v2.projects.environments.contexts
    .update(featureFlagKey, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
