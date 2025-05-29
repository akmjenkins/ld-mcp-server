// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flag_defaults',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/projects/{projectKey}/flag-defaults',
  operationId: 'putFlagDefaultsByProject',
};

export const tool: Tool = {
  name: 'update_flag_defaults_projects_v2_api_flag_defaults',
  description: 'Create or update flag defaults for a project.',
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      booleanDefaults: {
        $ref: '#/$defs/boolean_flag_defaults',
      },
      defaultClientSideAvailability: {
        $ref: '#/$defs/default_client_side_availability',
      },
      tags: {
        type: 'array',
        description: 'A list of default tags for each flag',
        items: {
          type: 'string',
        },
      },
      temporary: {
        type: 'boolean',
        description: 'Whether the flag should be temporary by default',
      },
    },
    $defs: {
      boolean_flag_defaults: {
        type: 'object',
        properties: {
          falseDescription: {
            type: 'string',
            description: 'The description for the false variation',
          },
          falseDisplayName: {
            type: 'string',
            description:
              'The display name for the false variation, displayed in the LaunchDarkly user interface',
          },
          offVariation: {
            type: 'integer',
            description:
              "The variation index of the flag variation to use for the default targeting behavior when a flag's targeting is off",
          },
          onVariation: {
            type: 'integer',
            description:
              "The variation index of the flag variation to use for the default targeting behavior when a flag's targeting is on and the target did not match any rules",
          },
          trueDescription: {
            type: 'string',
            description: 'The description for the true variation',
          },
          trueDisplayName: {
            type: 'string',
            description:
              'The display name for the true variation, displayed in the LaunchDarkly user interface',
          },
        },
        required: [
          'falseDescription',
          'falseDisplayName',
          'offVariation',
          'onVariation',
          'trueDescription',
          'trueDisplayName',
        ],
      },
      default_client_side_availability: {
        type: 'object',
        properties: {
          usingEnvironmentId: {
            type: 'boolean',
            description: 'Whether to enable availability for client-side SDKs',
          },
          usingMobileKey: {
            type: 'boolean',
            description: 'Whether to enable availability for mobile SDKs',
          },
        },
        required: ['usingEnvironmentId', 'usingMobileKey'],
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { projectKey, ...body } = args as any;
  return client.api.v2.projects.flagDefaults.updateFlagDefaults(projectKey, body);
};

export default { metadata, tool, handler };
