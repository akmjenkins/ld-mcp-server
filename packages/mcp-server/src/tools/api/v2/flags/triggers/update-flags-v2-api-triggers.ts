// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.flags.triggers',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_flags_v2_api_triggers',
  description:
    'Update a flag trigger. Updating a flag trigger uses the semantic patch format.\n\nTo make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).\n\n### Instructions\n\nSemantic patch requests support the following `kind` instructions for updating flag triggers.\n\n<details>\n<summary>Click to expand instructions for <strong>updating flag triggers</strong></summary>\n\n#### replaceTriggerActionInstructions\n\nRemoves the existing trigger action and replaces it with the new instructions.\n\n##### Parameters\n\n- `value`: An array of the new `kind`s of actions to perform when triggering. Supported flag actions are `turnFlagOn` and `turnFlagOff`.\n\nHere\'s an example that replaces the existing action with new instructions to turn flag targeting off:\n\n```json\n{\n  "instructions": [\n    {\n      "kind": "replaceTriggerActionInstructions",\n      "value": [ {"kind": "turnFlagOff"} ]\n    }\n  ]\n}\n```\n\n#### cycleTriggerUrl\n\nGenerates a new URL for this trigger. You must update any clients using the trigger to use this new URL.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{ "kind": "cycleTriggerUrl" }]\n}\n```\n\n#### disableTrigger\n\nDisables the trigger. This saves the trigger configuration, but the trigger stops running. To re-enable, use `enableTrigger`.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{ "kind": "disableTrigger" }]\n}\n```\n\n#### enableTrigger\n\nEnables the trigger. If you previously disabled the trigger, it begins running again.\n\nHere\'s an example:\n\n```json\n{\n  "instructions": [{ "kind": "enableTrigger" }]\n}\n```\n\n</details>\n',
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
        description: 'The flag trigger ID',
      },
      comment: {
        type: 'string',
        description: 'Optional comment describing the update',
      },
      instructions: {
        type: 'array',
        description:
          'The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "trigger_action"}</code>.',
        items: {
          type: 'object',
        },
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.flags.triggers.update(id, body);
};

export default { metadata, tool, handler };
