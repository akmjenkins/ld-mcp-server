// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.teams',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v2/teams/{teamKey}/members',
  operationId: 'postTeamMembers',
};

export const tool: Tool = {
  name: 'members_v2_api_teams',
  description:
    'Add multiple members to an existing team by uploading a CSV file of member email addresses. Your CSV file must include email addresses in the first column. You can include data in additional columns, but LaunchDarkly ignores all data outside the first column. Headers are optional. To learn more, read [Manage team members](https://launchdarkly.com/docs/home/account/manage-teams#manage-team-members).\n\n**Members are only added on a `201` response.** A `207` indicates the CSV file contains a combination of valid and invalid entries. A `207` results in no members being added to the team.\n\nOn a `207` response, if an entry contains bad input, the `message` field contains the row number as well as the reason for the error. The `message` field is omitted if the entry is valid.\n\nExample `207` response:\n```json\n{\n  "items": [\n    {\n      "status": "success",\n      "value": "new-team-member@acme.com"\n    },\n    {\n      "message": "Line 2: empty row",\n      "status": "error",\n      "value": ""\n    },\n    {\n      "message": "Line 3: email already exists in the specified team",\n      "status": "error",\n      "value": "existing-team-member@acme.com"\n    },\n    {\n      "message": "Line 4: invalid email formatting",\n      "status": "error",\n      "value": "invalid email format"\n    }\n  ]\n}\n```\n\nMessage | Resolution\n--- | ---\nEmpty row | This line is blank. Add an email address and try again.\nDuplicate entry | This email address appears in the file twice. Remove the email from the file and try again.\nEmail already exists in the specified team | This member is already on your team. Remove the email from the file and try again.\nInvalid formatting | This email address is not formatted correctly. Fix the formatting and try again.\nEmail does not belong to a LaunchDarkly member | The email address doesn\'t belong to a LaunchDarkly account member. Invite them to LaunchDarkly, then re-add them to the team.\n\nOn a `400` response, the `message` field may contain errors specific to this endpoint.\n\nExample `400` response:\n```json\n{\n  "code": "invalid_request",\n  "message": "Unable to process file"\n}\n```\n\nMessage | Resolution\n--- | ---\nUnable to process file | LaunchDarkly could not process the file for an unspecified reason. Review your file for errors and try again.\nFile exceeds 25mb | Break up your file into multiple files of less than 25mbs each.\nAll emails have invalid formatting | None of the email addresses in the file are in the correct format. Fix the formatting and try again.\nAll emails belong to existing team members | All listed members are already on this team. Populate the file with member emails that do not belong to the team and try again.\nFile is empty | The CSV file does not contain any email addresses. Populate the file and try again.\nNo emails belong to members of your LaunchDarkly organization | None of the email addresses belong to members of your LaunchDarkly account. Invite these members to LaunchDarkly, then re-add them to the team.\n',
  inputSchema: {
    type: 'object',
    properties: {
      teamKey: {
        type: 'string',
        description: 'The team key',
      },
      file: {
        type: 'string',
        description: 'CSV file containing email addresses',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const { teamKey, ...body } = args as any;
  return client.api.v2.teams.members(teamKey, body);
};

export default { metadata, tool, handler };
