// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import TestLanguage from 'test-language';

export const metadata: Metadata = {
  resource: 'api.v2.members',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_v2_api_members',
  description:
    'Return a list of account members.\n\nBy default, this returns the first 20 members. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links are not present if the pages they refer to don\'t exist. For example, the `first` and `prev` links will be missing from the response on the first page.\n\n### Filtering members\n\nLaunchDarkly supports the following fields for filters:\n\n- `query` is a string that matches against the members\' emails and names. It is not case sensitive.\n- `role` is a `|` separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, `Owner` counts as `Admin`.\n- `id` is a `|` separated list of member IDs. It filters the list to members who match any of the IDs in the list.\n- `email` is a `|` separated list of member emails. It filters the list to members who match any of the emails in the list.\n- `team` is a string that matches against the key of the teams the members belong to. It is not case sensitive.\n- `noteam` is a boolean that filters the list of members who are not on a team if true and members on a team if false.\n- `lastSeen` is a JSON object in one of the following formats:\n  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.\n  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.\n  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.\n- `accessCheck` is a string that represents a specific action on a specific resource and is in the format `<ActionSpecifier>:<ResourceSpecifier>`. It filters the list to members who have the ability to perform that action on that resource. Note: `accessCheck` is only supported in API version `20220603` and earlier. To learn more, read [Versioning](https://launchdarkly.com/docs/api#versioning).\n  - For example, the filter `accessCheck:createApprovalRequest:proj/default:env/test:flag/alternate-page` matches members with the ability to create an approval request for the `alternate-page` flag in the `test` environment of the `default` project.\n  - Wildcard and tag filters are not supported when filtering for access.\n\nFor example, the filter `query:abc,role:admin|customrole` matches members with the string `abc` in their email or name, ignoring case, who also are either an `Owner` or `Admin` or have the custom role `customrole`.\n\n### Sorting members\n\nLaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:\n\n- `displayName` sorts by first + last name, using the member\'s email if no name is set.\n- `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never been seen or have no data the oldest.\n\n### Expanding the members response\nLaunchDarkly supports two fields for expanding the "List members" response. By default, these fields are **not** included in the response.\n\nTo expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:\n\n* `customRoles` includes a list of the roles that you have assigned to the member.\n* `roleAttributes` includes a list of the role attributes that you have assigned to the member.\n\nFor example, `expand=roleAttributes` includes `roleAttributes` field in the response.\n',
  inputSchema: {
    type: 'object',
    properties: {
      expand: {
        type: 'string',
        description:
          'A comma-separated list of properties that can reveal additional information in the response.',
      },
      filter: {
        type: 'string',
        description:
          'A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above.',
      },
      limit: {
        type: 'integer',
        description: 'The number of members to return in the response. Defaults to 20.',
      },
      offset: {
        type: 'integer',
        description:
          'Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`.',
      },
      sort: {
        type: 'string',
        description:
          'A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order.',
      },
    },
  },
};

export const handler = (client: TestLanguage, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.api.v2.members.list(body);
};

export default { metadata, tool, handler };
