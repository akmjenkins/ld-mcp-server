// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'test-language-mcp/filtering';
import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.projects.flags.release',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v2/projects/{projectKey}/flags/{flagKey}/release',
  operationId: 'createReleaseForFlag',
};

export const tool: Tool = {
  name: 'create_flags_projects_v2_api_release',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a release by adding a flag to a release pipeline\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/release',\n  $defs: {\n    release: {\n      type: 'object',\n      properties: {\n        _version: {\n          type: 'integer',\n          description: 'The release version'\n        },\n        name: {\n          type: 'string',\n          description: 'The release pipeline name'\n        },\n        phases: {\n          type: 'array',\n          description: 'An ordered list of the release pipeline phases',\n          items: {\n            type: 'object',\n            properties: {\n              _audiences: {\n                type: 'array',\n                description: 'A logical grouping of one or more environments that share attributes for rolling out changes',\n                items: {\n                  type: 'object',\n                  properties: {\n                    _id: {\n                      type: 'string',\n                      description: 'The audience ID'\n                    },\n                    name: {\n                      type: 'string',\n                      description: 'The release phase name'\n                    },\n                    _links: {\n                      type: 'object',\n                      description: 'The location and content type of related resources'\n                    },\n                    _ruleIds: {\n                      type: 'array',\n                      description: 'The rules IDs added or updated by this audience',\n                      items: {\n                        type: 'string'\n                      }\n                    },\n                    configuration: {\n                      $ref: '#/$defs/audience_configuration'\n                    },\n                    environment: {\n                      $ref: '#/$defs/environment_summary'\n                    },\n                    segmentKeys: {\n                      type: 'array',\n                      description: 'A list of segment keys',\n                      items: {\n                        type: 'string'\n                      }\n                    },\n                    status: {\n                      type: 'string',\n                      description: 'The audience status'\n                    }\n                  },\n                  required: [                    '_id',\n                    'name'\n                  ]\n                }\n              },\n              _creationDate: {\n                type: 'integer',\n                description: 'Timestamp of when the release phase was created'\n              },\n              _id: {\n                type: 'string',\n                description: 'The phase ID'\n              },\n              _name: {\n                type: 'string',\n                description: 'The release phase name'\n              },\n              complete: {\n                type: 'boolean',\n                description: 'Whether this phase is complete'\n              },\n              _completedBy: {\n                type: 'object',\n                description: 'Details about how this phase was marked as complete',\n                properties: {\n                  token: {\n                    $ref: '#/$defs/token_summary'\n                  },\n                  member: {\n                    $ref: '#/$defs/member_summary'\n                  }\n                },\n                required: []\n              },\n              _completionDate: {\n                type: 'integer',\n                description: 'Timestamp of when the release phase was completed'\n              },\n              _startedDate: {\n                type: 'integer',\n                description: 'Timestamp of when the release phase was started'\n              },\n              configuration: {\n                $ref: '#/$defs/phase_configuration'\n              },\n              started: {\n                type: 'boolean',\n                description: 'Whether or not this phase has started'\n              },\n              status: {\n                type: 'string',\n                description: 'Status of the phase',\n                enum: [                  'NotStarted',\n                  'ReadyToStart',\n                  'Started',\n                  'Paused',\n                  'Complete'\n                ]\n              }\n            },\n            required: [              '_audiences',\n              '_creationDate',\n              '_id',\n              '_name',\n              'complete'\n            ]\n          }\n        },\n        releasePipelineDescription: {\n          type: 'string',\n          description: 'The release pipeline description'\n        },\n        releasePipelineKey: {\n          type: 'string',\n          description: 'The release pipeline key'\n        },\n        _canceledAt: {\n          type: 'integer',\n          description: 'Timestamp of when the release was canceled'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        _releaseVariationId: {\n          type: 'string',\n          description: 'The chosen release variation ID to use across all phases of a release'\n        }\n      },\n      required: [        '_version',\n        'name',\n        'phases',\n        'releasePipelineDescription',\n        'releasePipelineKey'\n      ]\n    },\n    audience_configuration: {\n      type: 'object',\n      properties: {\n        releaseStrategy: {\n          type: 'string',\n          description: 'The release strategy'\n        },\n        requireApproval: {\n          type: 'boolean',\n          description: 'Whether or not the audience requires approval'\n        },\n        notifyMemberIds: {\n          type: 'array',\n          description: 'An array of member IDs. These members are notified to review the approval request.',\n          items: {\n            type: 'string'\n          }\n        },\n        notifyTeamKeys: {\n          type: 'array',\n          description: 'An array of team keys. The members of these teams are notified to review the approval request.',\n          items: {\n            type: 'string'\n          }\n        },\n        releaseGuardianConfiguration: {\n          type: 'object',\n          description: 'The configuration for the release guardian.',\n          properties: {\n            monitoringWindowMilliseconds: {\n              type: 'integer',\n              description: 'The monitoring window in milliseconds'\n            },\n            rollbackOnRegression: {\n              type: 'boolean',\n              description: 'Whether or not to roll back on regression'\n            },\n            rolloutWeight: {\n              type: 'integer',\n              description: 'The rollout weight percentage'\n            },\n            randomizationUnit: {\n              type: 'string',\n              description: 'The randomization unit for the measured rollout'\n            }\n          },\n          required: [            'monitoringWindowMilliseconds',\n            'rollbackOnRegression',\n            'rolloutWeight'\n          ]\n        }\n      },\n      required: [        'releaseStrategy',\n        'requireApproval'\n      ]\n    },\n    environment_summary: {\n      type: 'object',\n      properties: {\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        color: {\n          type: 'string',\n          description: 'The color used to indicate this environment in the UI'\n        },\n        key: {\n          type: 'string',\n          description: 'A project-unique key for the environment'\n        },\n        name: {\n          type: 'string',\n          description: 'A human-friendly name for the environment'\n        }\n      },\n      required: [        '_links',\n        'color',\n        'key',\n        'name'\n      ]\n    },\n    token_summary: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string'\n        },\n        _links: {\n          type: 'object'\n        },\n        ending: {\n          type: 'string',\n          description: 'The last few characters of the token'\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the token'\n        },\n        serviceToken: {\n          type: 'boolean',\n          description: 'Whether this is a service token'\n        }\n      },\n      required: []\n    },\n    member_summary: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'The member\\'s ID'\n        },\n        _links: {\n          type: 'object',\n          description: 'The location and content type of related resources'\n        },\n        email: {\n          type: 'string',\n          description: 'The member\\'s email address'\n        },\n        role: {\n          type: 'string',\n          description: 'The member\\'s built-in role. If the member has no custom roles, this role will be in effect.'\n        },\n        firstName: {\n          type: 'string',\n          description: 'The member\\'s first name'\n        },\n        lastName: {\n          type: 'string',\n          description: 'The member\\'s last name'\n        }\n      },\n      required: [        '_id',\n        '_links',\n        'email',\n        'role'\n      ]\n    },\n    phase_configuration: {\n      type: 'object'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      flagKey: {
        type: 'string',
        description: 'The flag key',
      },
      releasePipelineKey: {
        type: 'string',
        description: 'The key of the release pipeline to attach the flag to',
      },
      releaseVariationId: {
        type: 'string',
        description: 'The variation id to release to across all phases',
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
  const { flagKey, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.api.v2.projects.flags.release.create(flagKey, body)),
  );
};

export default { metadata, tool, handler };
