// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.environments.scheduled_changes',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath:
    '/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}',
  operationId: 'patchFlagConfigScheduledChange',
};

export const tool: Tool = {
  name: 'update_environments_flags_projects_v2_api_scheduled_changes',
  description:
    '\nUpdate a scheduled change, overriding existing instructions with the new ones. Updating a scheduled change uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating scheduled changes.\n\n<details>\n<summary>Click to expand instructions for <strong>updating scheduled changes</strong></summary>\n\n#### deleteScheduledChange\n\nRemoves the scheduled change.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{ "kind": "deleteScheduledChange" }]\n}\n```\n\n#### replaceScheduledChangesInstructions\n\nRemoves the existing scheduled changes and replaces them with the new instructions.\n\n##### Parameters\n\n- `value`: An array of the new actions to perform when the execution date for these scheduled changes arrives. Supported scheduled actions are `turnFlagOn` and `turnFlagOff`.\n\nHere\'s an example that replaces the scheduled changes with new instructions to turn flag targeting off:\n\n```json\n{\n  "instructions": [\n    {\n      "kind": "replaceScheduledChangesInstructions",\n      "value": [ {"kind": "turnFlagOff"} ]\n    }\n  ]\n}\n```\n\n#### updateScheduledChangesExecutionDate\n\nUpdates the execution date for the scheduled changes.\n\n##### Parameters\n\n- `value`: the new execution date, in Unix milliseconds.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [\n    {\n      "kind": "updateScheduledChangesExecutionDate",\n      "value": 1754092860000\n    }\n  ]\n}\n```\n\n</details>\n',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      featureFlagKey: {
        type: 'string',
        description: 'The feature flag key',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      id: {
        type: 'string',
        description: 'The scheduled change ID',
      },
      instructions: {
        type: 'array',
        description:
          'The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "update_action"}</code>. Some instructions also require a <code>value</code> field in the array element.',
        items: {
          type: 'object',
        },
      },
      ignoreConflicts: {
        type: 'boolean',
        description:
          'Whether to succeed (`true`) or fail (`false`) when these new instructions conflict with existing scheduled changes',
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the update to the scheduled changes',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.projects.flags.environments.scheduledChanges.update(id, body);
};

export default { metadata, tool, handler };
