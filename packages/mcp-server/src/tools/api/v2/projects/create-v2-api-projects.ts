// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/projects',
  operationId: 'postProject',
};

export const tool: Tool = {
  name: 'create_v2_api_projects',
  description:
    'Create a new project with the given key and name. Project keys must be unique within an account.',
  inputSchema: {
    type: 'object',
    properties: {
      key: {
        type: 'string',
        description: 'A unique key used to reference the project in your code.',
      },
      name: {
        type: 'string',
        description: 'A human-friendly name for the project.',
      },
      defaultClientSideAvailability: {
        type: 'object',
        description: 'Controls which client-side SDKs can use new flags by default.',
        properties: {
          usingEnvironmentId: {
            type: 'boolean',
            description: 'Whether to enable availability for client-side SDKs.',
          },
          usingMobileKey: {
            type: 'boolean',
            description: 'Whether to enable availability for mobile SDKs.',
          },
        },
        required: ['usingEnvironmentId', 'usingMobileKey'],
      },
      environments: {
        type: 'array',
        description:
          'Creates the provided environments for this project. If omitted default environments will be created instead.',
        items: {
          $ref: '#/$defs/environment_post',
        },
      },
      includeInSnippetByDefault: {
        type: 'boolean',
        description:
          'Whether or not flags created in this project are made available to the client-side JavaScript SDK by default.',
      },
      namingConvention: {
        type: 'object',
        description: 'The flag key convention for this project',
        properties: {
          case: {
            type: 'string',
            description: 'The casing convention to enforce for new flag keys in this project',
            enum: ['none', 'camelCase', 'upperCamelCase', 'snakeCase', 'kebabCase'],
          },
          prefix: {
            type: 'string',
            description: 'The prefix to enforce for new flag keys in this project',
          },
        },
        required: [],
      },
      tags: {
        type: 'array',
        description: 'Tags for the project',
        items: {
          type: 'string',
        },
      },
    },
    $defs: {
      environment_post: {
        type: 'object',
        properties: {
          color: {
            type: 'string',
            description: 'A color to indicate this environment in the UI',
          },
          key: {
            type: 'string',
            description: 'A project-unique key for the new environment',
          },
          name: {
            type: 'string',
            description: 'A human-friendly name for the new environment',
          },
          confirmChanges: {
            type: 'boolean',
            description:
              'Requires confirmation for all flag and segment changes via the UI in this environment',
          },
          critical: {
            type: 'boolean',
            description: 'Whether the environment is critical',
          },
          defaultTrackEvents: {
            type: 'boolean',
            description: 'Enables tracking detailed information for new flags by default',
          },
          defaultTtl: {
            type: 'integer',
            description:
              'The default time (in minutes) that the PHP SDK can cache feature flag rules locally',
          },
          requireComments: {
            type: 'boolean',
            description: 'Requires comments for all flag and segment changes via the UI in this environment',
          },
          secureMode: {
            type: 'boolean',
            description:
              'Ensures that one end user of the client-side SDK cannot inspect the variations for another end user',
          },
          source: {
            type: 'object',
            description:
              'Indicates that the new environment created will be cloned from the provided source environment',
            properties: {
              key: {
                type: 'string',
                description: 'The key of the source environment to clone from',
              },
              version: {
                type: 'integer',
                description:
                  '(Optional) The version number of the source environment to clone from. Used for optimistic locking',
              },
            },
            required: [],
          },
          tags: {
            type: 'array',
            description: 'Tags to apply to the new environment',
            items: {
              type: 'string',
            },
          },
        },
        required: ['color', 'key', 'name'],
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.api.v2.projects.create(body));
};

export default { metadata, tool, handler };
