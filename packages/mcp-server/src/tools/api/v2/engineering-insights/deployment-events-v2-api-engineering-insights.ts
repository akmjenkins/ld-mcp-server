// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'test-language-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.engineering_insights',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/engineering-insights/deployment-events',
  operationId: 'createDeploymentEvent',
};

export const tool: Tool = {
  name: 'deployment_events_v2_api_engineering_insights',
  description: 'Create deployment event',
  inputSchema: {
    type: 'object',
    properties: {
      applicationKey: {
        type: 'string',
        description:
          'The application key. This defines the granularity at which you want to view your insights metrics. Typically it is the name of one of the GitHub repositories that you use in this project.<br/><br/>LaunchDarkly automatically creates a new application each time you send a unique application key.',
      },
      environmentKey: {
        type: 'string',
        description: 'The environment key',
      },
      eventType: {
        type: 'string',
        description: 'The event type',
        enum: ['started', 'failed', 'finished', 'custom'],
      },
      projectKey: {
        type: 'string',
        description: 'The project key',
      },
      version: {
        type: 'string',
        description:
          'The application version. You can set the application version to any string that includes only letters, numbers, periods (<code>.</code>), hyphens (<code>-</code>), or underscores (<code>_</code>).<br/><br/>We recommend setting the application version to at least the first seven characters of the SHA or to the tag of the GitHub commit for this deployment.',
      },
      applicationKind: {
        type: 'string',
        description: 'The kind of application. Default: <code>server</code>',
        enum: ['server', 'browser', 'mobile'],
      },
      applicationName: {
        type: 'string',
        description: 'The application name. This defines how the application is displayed',
      },
      deploymentMetadata: {
        type: 'object',
        description: 'A JSON object containing metadata about the deployment',
      },
      eventMetadata: {
        type: 'object',
        description: 'A JSON object containing metadata about the event',
      },
      eventTime: {
        type: 'integer',
        description:
          'The time, in Unix milliseconds, when the event occurred. If not included, the time will default to when the event is processed and stored in LaunchDarkly.',
      },
      versionName: {
        type: 'string',
        description: 'The version name. This defines how the version is displayed',
      },
    },
  },
};

export const handler = async (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.v2.engineeringInsights.deploymentEvents(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
