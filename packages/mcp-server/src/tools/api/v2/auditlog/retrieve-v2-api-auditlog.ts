// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.auditlog',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v2/auditlog/{id}',
  operationId: 'getAuditLogEntry',
};

export const tool: Tool = {
  name: 'retrieve_v2_api_auditlog',
  description:
    'Fetch a detailed audit log entry representation. The detailed representation includes several fields that are not present in the summary representation, including:\n\n- `delta`: the JSON patch body that was used in the request to update the entity\n- `previousVersion`: a JSON representation of the previous version of the entity\n- `currentVersion`: a JSON representation of the current version of the entity\n',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The ID of the audit log entry',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.api.v2.auditlog.retrieve(id);
};

export default { metadata, tool, handler };
