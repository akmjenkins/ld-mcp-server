// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.integration_configurations.keys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/integration-configurations/keys/{integrationKey}',
  operationId: 'createIntegrationConfiguration',
};

export const tool: Tool = {
  name: 'update_integration_configurations_v2_api_keys',
  description:
    'Create a new integration configuration. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)',
  inputSchema: {
    type: 'object',
    properties: {
      integrationKey: {
        type: 'string',
        description: 'The integration key',
      },
      configValues: {
        type: 'object',
        description:
          'The unique set of fields required to configure the integration. Refer to the <code>formVariables</code> field in the corresponding <code>manifest.json</code> at https://github.com/launchdarkly/integration-framework/tree/main/integrations for a full list of fields for the integration you wish to configure.',
      },
      name: {
        type: 'string',
        description: 'The name of the integration configuration',
      },
      capabilityConfig: {
        type: 'object',
        description: 'The capability configuration for the integration',
        properties: {
          approvals: {
            $ref: '#/$defs/approvals_capability_config',
          },
          auditLogEventsHook: {
            type: 'object',
            description: 'The audit log events hook capability configuration for the integration',
            properties: {
              statements: {
                type: 'array',
                description: 'The set of resources you wish to subscribe to audit log notifications for.',
                items: {
                  $ref: '#/$defs/statement_post',
                },
              },
            },
            required: [],
          },
        },
        required: [],
      },
      enabled: {
        type: 'boolean',
        description: 'Whether the integration configuration is enabled. If omitted, defaults to true',
      },
      tags: {
        type: 'array',
        description: 'Tags for the integration',
        items: {
          type: 'string',
        },
      },
    },
    $defs: {
      approvals_capability_config: {
        type: 'object',
        properties: {
          additionalFormVariables: {
            type: 'array',
            description: 'The additional form variables for the approvals capability',
            items: {
              type: 'object',
              properties: {
                allowedValues: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                defaultValue: {
                  type: 'object',
                },
                description: {
                  type: 'string',
                },
                dynamicOptions: {
                  type: 'object',
                  properties: {
                    endpoint: {
                      type: 'object',
                      properties: {
                        headers: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              name: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            required: [],
                          },
                        },
                        hmacSignature: {
                          type: 'object',
                          properties: {
                            headerName: {
                              type: 'string',
                            },
                            hmacSecretFormVariableKey: {
                              type: 'string',
                            },
                          },
                          required: [],
                        },
                        method: {
                          type: 'string',
                        },
                        url: {
                          type: 'string',
                        },
                      },
                      required: [],
                    },
                    parser: {
                      type: 'object',
                      properties: {
                        optionsItems: {
                          type: 'object',
                          properties: {
                            label: {
                              type: 'string',
                            },
                            value: {
                              type: 'string',
                            },
                          },
                          required: [],
                        },
                        optionsPath: {
                          type: 'string',
                        },
                      },
                      required: [],
                    },
                  },
                  required: [],
                },
                isOptional: {
                  type: 'boolean',
                },
                key: {
                  type: 'string',
                },
                name: {
                  type: 'string',
                },
                placeholder: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
              },
              required: [],
            },
          },
        },
        required: [],
      },
      statement_post: {
        type: 'object',
        properties: {
          effect: {
            type: 'string',
            description: 'Whether this statement should allow or deny actions on the resources.',
            enum: ['allow', 'deny'],
          },
          actions: {
            type: 'array',
            description: 'Actions to perform on a resource',
            items: {
              type: 'string',
            },
          },
          notActions: {
            type: 'array',
            description:
              'Targeted actions are the actions NOT in this list. The <code>actions</code> field must be empty to use this field.',
            items: {
              type: 'string',
            },
          },
          notResources: {
            type: 'array',
            description:
              'Targeted resources are the resources NOT in this list. The <code>resources</code> field must be empty to use this field.',
            items: {
              type: 'string',
            },
          },
          resources: {
            type: 'array',
            description: 'Resource specifier strings',
            items: {
              type: 'string',
            },
          },
        },
        required: ['effect'],
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { integrationKey, ...body } = args as any;
  return client.api.v2.integrationConfigurations.keys.update(integrationKey, body);
};

export default { metadata, tool, handler };
