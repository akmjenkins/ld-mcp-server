# Test Language TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:akmjenkins/ld-mcp-server.git
cd ld-mcp-server
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export TEST_LANGUAGE_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y test-language-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "test_language_api": {
      "command": "node",
      "args": ["/path/to/local/ld-mcp-server/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "TEST_LANGUAGE_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "test-language-mcp/server";

// import a specific tool
import retrieveAPIV2 from "test-language-mcp/tools/api/v2/retrieve-api-v2";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveAPIV2, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `api.v2`:

- `retrieve_api_v2` (`read`): > ### Use contexts instead
  > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Search for context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/search-context-instances) instead of this endpoint.

Search users in LaunchDarkly based on their last active date, a user attribute filter set, or a search query.

An example user attribute filter set is `filter=firstName:Anna,activeTrial:false`. This matches users that have the user attribute `firstName` set to `Anna`, that also have the attribute `activeTrial` set to `false`.

To paginate through results, follow the `next` link in the `_links` object. To learn more, read [Representations](https://launchdarkly.com/docs/ld-docs/api#representations).

- `list_api_v2` (`read`): Get all of the resource categories the API supports. In the sandbox, click 'Play' and enter any string in the 'Authorization' field to test this endpoint.
- `retrieve_caller_identity_api_v2` (`read`): Get basic information about the identity used (session cookie, API token, SDK keys, etc.) to call the API
- `retrieve_openapi_json_api_v2` (`read`): Get the latest version of the OpenAPI specification for LaunchDarkly's API in JSON format. In the sandbox, click 'Play' and enter any string in the 'Authorization' field to test this endpoint.
- `retrieve_public_ip_list_api_v2` (`read`): Get a list of IP ranges the LaunchDarkly service uses. You can use this list to allow LaunchDarkly through your firewall. We post upcoming changes to this list in advance on our [status page](https://status.launchdarkly.com/). <br /><br />In the sandbox, click 'Play' and enter any string in the 'Authorization' field to test this endpoint.
- `retrieve_tags_api_v2` (`read`): Get a list of tags.
- `retrieve_versions_api_v2` (`read`): Get the latest API version, the list of valid API versions in ascending order, and the version being used for this request. These are all in the external, date-based format.

### Resource `api.v2.account.relay_auto_configs`:

- `retrieve_account_v2_api_relay_auto_configs` (`read`): Get a single Relay Proxy auto config by ID.
- `update_account_v2_api_relay_auto_configs` (`write`): Update a Relay Proxy configuration. Updating a configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `delete_account_v2_api_relay_auto_configs` (`write`): Delete a Relay Proxy config.
- `relay_auto_configs_account_v2_api_relay_auto_configs` (`write`): Create a Relay Proxy config.
- `reset_account_v2_api_relay_auto_configs` (`write`): Reset a Relay Proxy configuration's secret key with an optional expiry time for the old key.
- `retrieve_relay_auto_configs_account_v2_api_relay_auto_configs` (`read`): Get a list of Relay Proxy configurations in the account.

### Resource `api.v2.applications`:

- `retrieve_v2_api_applications` (`read`):
  Retrieve an application by the application key.

### Expanding the application response

LaunchDarkly supports expanding the "Get application" response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `flags` includes details on the flags that have been evaluated by the application

For example, use `?expand=flags` to include the `flags` field in the response. By default, this field is **not** included in the response.

- `update_v2_api_applications` (`write`): Update an application. You can update the `description` and `kind` fields. Requires a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to the application. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `list_v2_api_applications` (`read`):
  Get a list of applications.

### Expanding the applications response

LaunchDarkly supports expanding the "Get applications" response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `flags` includes details on the flags that have been evaluated by the application

For example, use `?expand=flags` to include the `flags` field in the response. By default, this field is **not** included in the response.

- `delete_v2_api_applications` (`write`): Delete an application.

### Resource `api.v2.applications.versions`:

- `update_applications_v2_api_versions` (`write`): Update an application version. You can update the `supported` field. Requires a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes to the application version. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `list_applications_v2_api_versions` (`read`): Get a list of versions for a specific application in an account.
- `delete_applications_v2_api_versions` (`write`): Delete an application version.

### Resource `api.v2.approval_requests`:

- `retrieve_v2_api_approval_requests` (`read`): Get an approval request by approval request ID.

### Expanding approval response

LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:

- `environments` includes the environments the approval request relates to
- `flag` includes the flag the approval request belongs to
- `project` includes the project the approval request belongs to
- `resource` includes details on the resource (flag or segment) the approval request relates to

For example, `expand=project,flag` includes the `project` and `flag` fields in the response.

- `update_v2_api_approval_requests` (`write`): Perform a partial update to an approval request. Updating an approval request uses the semantic patch format. This endpoint works with approval requests for either flag or segment changes.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instruction for updating an approval request.

#### addReviewers

Adds the specified members and teams to the existing list of reviewers. You must include at least one of `notifyMemberIds` and `notifyTeamKeys`.

##### Parameters

- `notifyMemberIds`: (Optional) List of member IDs.
- `notifyTeamKeys`: (Optional) List of team keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addReviewers",
      "notifyMemberIds": ["user-key-123abc", "user-key-456def"],
      "notifyTeamKeys": ["team-key-789abc"]
    }
  ]
}
```

- `delete_v2_api_approval_requests` (`write`): Delete an approval request.
- `apply_v2_api_approval_requests` (`write`): Apply an approval request that has been approved. This endpoint works with approval requests for either flag or segment changes.
- `approval_requests_v2_api_approval_requests` (`write`): Create an approval request.

This endpoint requires a list of `instructions`, in semantic patch format, that will be applied when the approval request is approved and applied.

If you are creating an approval request for a flag, you can use the following `instructions`:

- `addVariation`
- `removeVariation`
- `updateVariation`
- `updateDefaultVariation`

For details on using these instructions, read [Update feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag).

To create an approval for a flag specific to an environment, use [Create approval request for a flag](https://launchdarkly.com/docs/api/approvals/post-approval-request-for-flag).

If you are creating an approval request for a segment, you can use the following read [Patch segment](https://launchdarkly.com/docs/api/segments/patch-segment) for details on the available `instructions`.

- `retrieve_approval_requests_v2_api_approval_requests` (`read`): Get all approval requests.

### Filtering approvals

LaunchDarkly supports the `filter` query param for filtering, with the following fields:

- `notifyMemberIds` filters for only approvals that are assigned to a member in the specified list. For example: `filter=notifyMemberIds anyOf ["memberId1", "memberId2"]`.
- `requestorId` filters for only approvals that correspond to the ID of the member who requested the approval. For example: `filter=requestorId equals 457034721476302714390214`.
- `resourceId` filters for only approvals that correspond to the the specified resource identifier. For example: `filter=resourceId equals proj/my-project:env/my-environment:flag/my-flag`.
- `resourceKind` filters for only approvals that correspond to the specified resource kind. For example: `filter=resourceKind equals flag`. Currently, `flag` and `segment` resource kinds are supported.
- `reviewStatus` filters for only approvals which correspond to the review status in the specified list. The possible values are `approved`, `declined`, and `pending`. For example: `filter=reviewStatus anyOf ["pending", "approved"]`.
- `status` filters for only approvals which correspond to the status in the specified list. The possible values are `pending`, `scheduled`, `failed`, and `completed`. For example: `filter=status anyOf ["pending", "scheduled"]`.

You can also apply multiple filters at once. For example, setting `filter=projectKey equals my-project, reviewStatus anyOf ["pending","approved"]` matches approval requests which correspond to the `my-project` project key, and a review status of either `pending` or `approved`.

### Expanding approval response

LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:

- `flag` includes the flag the approval request belongs to
- `project` includes the project the approval request belongs to
- `environments` includes the environments the approval request relates to

For example, `expand=project,flag` includes the `project` and `flag` fields in the response.

- `reviews_v2_api_approval_requests` (`write`): Review an approval request by approving or denying changes.

### Resource `api.v2.auditlog`:

- `create_v2_api_auditlog` (`write`): Search your audit log entries. The query parameters let you restrict the results that return by date ranges, or a full-text search query. The request body lets you restrict the results that return by resource specifiers.

LaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To learn more, read [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).

- `retrieve_v2_api_auditlog` (`read`): Fetch a detailed audit log entry representation. The detailed representation includes several fields that are not present in the summary representation, including:

* `delta`: the JSON patch body that was used in the request to update the entity
* `previousVersion`: a JSON representation of the previous version of the entity
* `currentVersion`: a JSON representation of the current version of the entity

- `list_v2_api_auditlog` (`read`): Get a list of all audit log entries. The query parameters let you restrict the results that return by date ranges, resource specifiers, or a full-text search query.

LaunchDarkly uses a resource specifier syntax to name resources or collections of resources. To learn more, read [About the resource specifier syntax](https://launchdarkly.com/docs/home/account/role-resources#about-the-resource-specifier-syntax).

### Resource `api.v2.code_refs`:

- `retrieve_extinctions_v2_api_code_refs` (`read`): Get a list of all extinctions. LaunchDarkly creates an extinction event after you remove all code references to a flag. To learn more, read [About extinction events](https://launchdarkly.com/docs/home/observability/code-references#about-extinction-events).

### Resource `api.v2.code_refs.repositories`:

- `create_code_refs_v2_api_repositories` (`write`): Create a repository with the specified name.
- `retrieve_code_refs_v2_api_repositories` (`read`): Get a single repository by name.
- `update_code_refs_v2_api_repositories` (`write`): Update a repository's settings. Updating repository settings uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `list_code_refs_v2_api_repositories` (`read`): Get a list of connected repositories. Optionally, you can include branch metadata with the `withBranches` query parameter. Embed references for the default branch with `ReferencesForDefaultBranch`. You can also filter the list of code references by project key and flag key.
- `delete_code_refs_v2_api_repositories` (`write`): Delete a repository with the specified name.
- `branch_delete_tasks_code_refs_v2_api_repositories` (`write`): Asynchronously delete a number of branches.

### Resource `api.v2.code_refs.repositories.branches`:

- `retrieve_repositories_code_refs_v2_api_branches` (`read`): Get a specific branch in a repository.
- `update_repositories_code_refs_v2_api_branches` (`write`): Create a new branch if it doesn't exist, or update the branch if it already exists.
- `list_repositories_code_refs_v2_api_branches` (`read`): Get a list of branches.
- `extinction_events_repositories_code_refs_v2_api_branches` (`write`): Create a new extinction.

### Resource `api.v2.code_refs.statistics`:

- `retrieve_code_refs_v2_api_statistics` (`read`): Get statistics about all the code references across repositories for all flags in your project that have code references in the default branch, for example, `main`. Optionally, you can include the `flagKey` query parameter to limit your request to statistics about code references for a single flag. This endpoint returns the number of references to your flag keys in your repositories, as well as a link to each repository.
- `list_code_refs_v2_api_statistics` (`read`): Get links for all projects that have code references.

### Resource `api.v2.destinations`:

- `retrieve_v2_api_destinations` (`read`): Get a single Data Export destination by ID.
- `update_v2_api_destinations` (`write`): Update a Data Export destination. Updating a destination uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `list_v2_api_destinations` (`read`): Get a list of Data Export destinations configured across all projects and environments.
- `delete_v2_api_destinations` (`write`): Delete a Data Export destination by ID.
- `generate_warehouse_destination_key_pair_v2_api_destinations` (`write`): Generate key pair to allow Data Export to authenticate into a Snowflake warehouse destination

### Resource `api.v2.flag_links.projects.flags`:

- `retrieve_projects_flag_links_v2_api_flags` (`read`): Get a list of all flag links.
- `update_projects_flag_links_v2_api_flags` (`write`): Update a flag link. Updating a flag link uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `delete_projects_flag_links_v2_api_flags` (`write`): Delete a flag link by ID or key.

### Resource `api.v2.flag_statuses`:

- `retrieve_v2_api_flag_statuses` (`read`): Get the status for a particular feature flag.

### Resource `api.v2.flags`:

- `retrieve_v2_api_flags` (`read`): Get a single feature flag by key. By default, this returns the configurations for all environments. You can filter environments with the `env` query parameter. For example, setting `env=production` restricts the returned configurations to just the `production` environment.

> #### Recommended use
>
> This endpoint can return a large amount of information. Specifying one or multiple environments with the `env` parameter can decrease response time and overall payload size. We recommend using this parameter to return only the environments relevant to your query.

### Expanding response

LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:

- `evaluation` includes evaluation information within returned environments, including which context kinds the flag has been evaluated for in the past 30 days
- `migrationSettings` includes migration settings information within the flag and within returned environments. These settings are only included for migration flags, that is, where `purpose` is `migration`.

For example, `expand=evaluation` includes the `evaluation` field in the response.

- `update_v2_api_flags` (`write`): Perform a partial update to a feature flag. The request body must be a valid semantic patch, JSON patch, or JSON merge patch. To learn more the different formats, read [Updates](https://launchdarkly.com/docs/api#updates).

### Using semantic patches on a feature flag

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

The body of a semantic patch request for updating feature flags takes the following properties:

- `comment` (string): (Optional) A description of the update.
- `environmentKey` (string): (Required for some instructions only) The key of the LaunchDarkly environment.
- `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object. The body of a single semantic patch can contain many different instructions.

### Instructions

Semantic patch requests support the following `kind` instructions for updating feature flags.

<details>
<summary>Click to expand instructions for <strong>turning flags on and off</strong></summary>

These instructions require the `environmentKey` parameter.

#### turnFlagOff

Sets the flag's targeting state to **Off**.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "turnFlagOff" }]
}
```

#### turnFlagOn

Sets the flag's targeting state to **On**.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "turnFlagOn" }]
}
```

</details><br />

<details>
<summary>Click to expand instructions for <strong>working with targeting and variations</strong></summary>

These instructions require the `environmentKey` parameter.

Several of the instructions for working with targeting and variations require flag rule IDs, variation IDs, or clause IDs as parameters. Each of these are returned as part of the [Get feature flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) response. The flag rule ID is the `_id` field of each element in the `rules` array within each environment listed in the `environments` object. The variation ID is the `_id` field in each element of the `variations` array. The clause ID is the `_id` field of each element of the `clauses` array within the `rules` array within each environment listed in the `environments` object.

#### addClauses

Adds the given clauses to the rule indicated by `ruleId`.

##### Parameters

- `ruleId`: ID of a rule in the flag.
- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "addClauses",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauses": [
        {
          "contextKind": "user",
          "attribute": "country",
          "op": "in",
          "negate": false,
          "values": ["USA", "Canada"]
        }
      ]
    }
  ]
}
```

#### addPrerequisite

Adds the flag indicated by `key` with variation `variationId` as a prerequisite to the flag in the path parameter.

##### Parameters

- `key`: Flag key of the prerequisite flag.
- `variationId`: ID of a variation of the prerequisite flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "addPrerequisite",
      "key": "example-prereq-flag-key",
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
    }
  ]
}
```

#### addRule

Adds a new targeting rule to the flag. The rule may contain `clauses` and serve the variation that `variationId` indicates, or serve a percentage rollout that `rolloutWeights`, `rolloutBucketBy`, and `rolloutContextKind` indicate.

If you set `beforeRuleId`, this adds the new rule before the indicated rule. Otherwise, adds the new rule to the end of the list.

##### Parameters

- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
- `beforeRuleId`: (Optional) ID of a flag rule.
- Either

  - `variationId`: ID of a variation of the flag.

  or

  - `rolloutWeights`: (Optional) Map of `variationId` to weight, in thousandths of a percent (0-100000).
  - `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`.
  - `rolloutContextKind`: (Optional) Context kind, defaults to `user`

Here's an example that uses a `variationId`:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "addRule",
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
      "clauses": [
        {
          "contextKind": "organization",
          "attribute": "located_in",
          "op": "in",
          "negate": false,
          "values": ["Sweden", "Norway"]
        }
      ]
    }
  ]
}
```

Here's an example that uses a percentage rollout:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "addRule",
      "clauses": [
        {
          "contextKind": "organization",
          "attribute": "located_in",
          "op": "in",
          "negate": false,
          "values": ["Sweden", "Norway"]
        }
      ],
      "rolloutContextKind": "organization",
      "rolloutWeights": {
        "2f43f67c-3e4e-4945-a18a-26559378ca00": 15000, // serve 15% this variation
        "e5830889-1ec5-4b0c-9cc9-c48790090c43": 85000 // serve 85% this variation
      }
    }
  ]
}
```

#### addTargets

Adds context keys to the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Returns an error if this causes the flag to target the same context key in multiple variations.

##### Parameters

- `values`: List of context keys.
- `contextKind`: (Optional) Context kind to target, defaults to `user`
- `variationId`: ID of a variation on the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "addTargets",
      "values": ["context-key-123abc", "context-key-456def"],
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
    }
  ]
}
```

#### addUserTargets

Adds user keys to the individual user targets for the variation that `variationId` specifies. Returns an error if this causes the flag to target the same user key in multiple variations. If you are working with contexts, use `addTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.
- `variationId`: ID of a variation on the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "addUserTargets",
      "values": ["user-key-123abc", "user-key-456def"],
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
    }
  ]
}
```

#### addValuesToClause

Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the flag.
- `clauseId`: ID of a clause in that rule.
- `values`: Array of strings, case sensitive.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "addValuesToClause",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
      "values": ["beta_testers"]
    }
  ]
}
```

#### addVariation

Adds a variation to the flag.

##### Parameters

- `value`: The variation value.
- `name`: (Optional) The variation name.
- `description`: (Optional) A description for the variation.

Here's an example:

```json
{
  "instructions": [{ "kind": "addVariation", "value": 20, "name": "New variation" }]
}
```

#### clearTargets

Removes all individual targets from the variation that `variationId` specifies. This includes both user and non-user targets.

##### Parameters

- `variationId`: ID of a variation on the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "clearTargets", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" }]
}
```

#### clearUserTargets

Removes all individual user targets from the variation that `variationId` specifies. If you are working with contexts, use `clearTargets` instead of this instruction.

##### Parameters

- `variationId`: ID of a variation on the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "clearUserTargets", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" }]
}
```

#### removeClauses

Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.

##### Parameters

- `ruleId`: ID of a rule in the flag.
- `clauseIds`: Array of IDs of clauses in the rule.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "removeClauses",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauseIds": ["10a58772-3121-400f-846b-b8a04e8944ed", "36a461dc-235e-4b08-97b9-73ce9365873e"]
    }
  ]
}
```

#### removePrerequisite

Removes the prerequisite flag indicated by `key`. Does nothing if this prerequisite does not exist.

##### Parameters

- `key`: Flag key of an existing prerequisite flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "removePrerequisite", "key": "prereq-flag-key-123abc" }]
}
```

#### removeRule

Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.

##### Parameters

- `ruleId`: ID of a rule in the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "removeRule", "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29" }]
}
```

#### removeTargets

Removes context keys from the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Does nothing if the flag does not target the context keys.

##### Parameters

- `values`: List of context keys.
- `contextKind`: (Optional) Context kind to target, defaults to `user`
- `variationId`: ID of a flag variation.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "removeTargets",
      "values": ["context-key-123abc", "context-key-456def"],
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
    }
  ]
}
```

#### removeUserTargets

Removes user keys from the individual user targets for the variation that `variationId` specifies. Does nothing if the flag does not target the user keys. If you are working with contexts, use `removeTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.
- `variationId`: ID of a flag variation.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "removeUserTargets",
      "values": ["user-key-123abc", "user-key-456def"],
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
    }
  ]
}
```

#### removeValuesFromClause

Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the flag.
- `clauseId`: ID of a clause in that rule.
- `values`: Array of strings, case sensitive.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "removeValuesFromClause",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
      "values": ["beta_testers"]
    }
  ]
}
```

#### removeVariation

Removes a variation from the flag.

##### Parameters

- `variationId`: ID of a variation of the flag to remove.

Here's an example:

```json
{
  "instructions": [{ "kind": "removeVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" }]
}
```

#### reorderRules

Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules on the flag.

##### Parameters

- `ruleIds`: Array of IDs of all rules in the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "reorderRules",
      "ruleIds": ["a902ef4a-2faf-4eaf-88e1-ecc356708a29", "63c238d1-835d-435e-8f21-c8d5e40b2a3d"]
    }
  ]
}
```

#### replacePrerequisites

Removes all existing prerequisites and replaces them with the list you provide.

##### Parameters

- `prerequisites`: A list of prerequisites. Each item in the list must include a flag `key` and `variationId`.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "replacePrerequisites",
      "prerequisites": [
        {
          "key": "prereq-flag-key-123abc",
          "variationId": "10a58772-3121-400f-846b-b8a04e8944ed"
        },
        {
          "key": "another-prereq-flag-key-456def",
          "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43"
        }
      ]
    }
  ]
}
```

#### replaceRules

Removes all targeting rules for the flag and replaces them with the list you provide.

##### Parameters

- `rules`: A list of rules.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "replaceRules",
      "rules": [
        {
          "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
          "description": "My new rule",
          "clauses": [
            {
              "contextKind": "user",
              "attribute": "segmentMatch",
              "op": "segmentMatch",
              "values": ["test"]
            }
          ],
          "trackEvents": true
        }
      ]
    }
  ]
}
```

#### replaceTargets

Removes all existing targeting and replaces it with the list of targets you provide.

##### Parameters

- `targets`: A list of context targeting. Each item in the list includes an optional `contextKind` that defaults to `user`, a required `variationId`, and a required list of `values`.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "replaceTargets",
      "targets": [
        {
          "contextKind": "user",
          "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
          "values": ["user-key-123abc"]
        },
        {
          "contextKind": "device",
          "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43",
          "values": ["device-key-456def"]
        }
      ]
    }
  ]
}
```

#### replaceUserTargets

Removes all existing user targeting and replaces it with the list of targets you provide. In the list of targets, you must include a target for each of the flag's variations. If you are working with contexts, use `replaceTargets` instead of this instruction.

##### Parameters

- `targets`: A list of user targeting. Each item in the list must include a `variationId` and a list of `values`.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "replaceUserTargets",
      "targets": [
        {
          "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
          "values": ["user-key-123abc", "user-key-456def"]
        },
        {
          "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43",
          "values": ["user-key-789ghi"]
        }
      ]
    }
  ]
}
```

#### updateClause

Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.

##### Parameters

- `ruleId`: ID of a rule in the flag.
- `clauseId`: ID of a clause in that rule.
- `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "updateClause",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauseId": "10c7462a-2062-45ba-a8bb-dfb3de0f8af5",
      "clause": {
        "contextKind": "user",
        "attribute": "country",
        "op": "in",
        "negate": false,
        "values": ["Mexico", "Canada"]
      }
    }
  ]
}
```

#### updateDefaultVariation

Updates the default on or off variation of the flag.

##### Parameters

- `onVariationValue`: (Optional) The value of the variation of the new on variation.
- `offVariationValue`: (Optional) The value of the variation of the new off variation

Here's an example:

```json
{
  "instructions": [{ "kind": "updateDefaultVariation", "OnVariationValue": true, "OffVariationValue": false }]
}
```

#### updateFallthroughVariationOrRollout

Updates the default or "fallthrough" rule for the flag, which the flag serves when a context matches none of the targeting rules. The rule can serve either the variation that `variationId` indicates, or a percentage rollout that `rolloutWeights` and `rolloutBucketBy` indicate.

##### Parameters

- `variationId`: ID of a variation of the flag.

or

- `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000).
- `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`.
- `rolloutContextKind`: (Optional) Context kind, defaults to `user`

Here's an example that uses a `variationId`:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "updateFallthroughVariationOrRollout",
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
    }
  ]
}
```

Here's an example that uses a percentage rollout:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "updateFallthroughVariationOrRollout",
      "rolloutContextKind": "user",
      "rolloutWeights": {
        "2f43f67c-3e4e-4945-a18a-26559378ca00": 15000, // serve 15% this variation
        "e5830889-1ec5-4b0c-9cc9-c48790090c43": 85000 // serve 85% this variation
      }
    }
  ]
}
```

#### updateOffVariation

Updates the default off variation to `variationId`. The flag serves the default off variation when the flag's targeting is **Off**.

##### Parameters

- `variationId`: ID of a variation of the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "updateOffVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" }]
}
```

#### updatePrerequisite

Changes the prerequisite flag that `key` indicates to use the variation that `variationId` indicates. Returns an error if this prerequisite does not exist.

##### Parameters

- `key`: Flag key of an existing prerequisite flag.
- `variationId`: ID of a variation of the prerequisite flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "updatePrerequisite",
      "key": "example-prereq-flag-key",
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
    }
  ]
}
```

#### updateRuleDescription

Updates the description of the feature flag rule.

##### Parameters

- `description`: The new human-readable description for this rule.
- `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "updateRuleDescription",
      "description": "New rule description",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
    }
  ]
}
```

#### updateRuleTrackEvents

Updates whether or not LaunchDarkly tracks events for the feature flag associated with this rule.

##### Parameters

- `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the flag.
- `trackEvents`: Whether or not events are tracked.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "updateRuleTrackEvents",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "trackEvents": true
    }
  ]
}
```

#### updateRuleVariationOrRollout

Updates what `ruleId` serves when its clauses evaluate to true. The rule can serve either the variation that `variationId` indicates, or a percent rollout that `rolloutWeights` and `rolloutBucketBy` indicate.

##### Parameters

- `ruleId`: ID of a rule in the flag.
- `variationId`: ID of a variation of the flag.

  or

- `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000).
- `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`.
- `rolloutContextKind`: (Optional) Context kind, defaults to `user`

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "updateRuleVariationOrRollout",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
    }
  ]
}
```

#### updateTrackEvents

Updates whether or not LaunchDarkly tracks events for the feature flag, for all rules.

##### Parameters

- `trackEvents`: Whether or not events are tracked.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "updateTrackEvents", "trackEvents": true }]
}
```

#### updateTrackEventsFallthrough

Updates whether or not LaunchDarkly tracks events for the feature flag, for the default rule.

##### Parameters

- `trackEvents`: Whether or not events are tracked.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{ "kind": "updateTrackEventsFallthrough", "trackEvents": true }]
}
```

#### updateVariation

Updates a variation of the flag.

##### Parameters

- `variationId`: The ID of the variation to update.
- `name`: (Optional) The updated variation name.
- `value`: (Optional) The updated variation value.
- `description`: (Optional) The updated variation description.

Here's an example:

```json
{
  "instructions": [
    { "kind": "updateVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00", "value": 20 }
  ]
}
```

</details><br />

<details>
<summary>Click to expand instructions for <strong>updating flag settings</strong></summary>

These instructions do not require the `environmentKey` parameter. They make changes that apply to the flag across all environments.

#### addCustomProperties

Adds a new custom property to the feature flag. Custom properties are used to associate feature flags with LaunchDarkly integrations. For example, if you create an integration with an issue tracking service, you may want to associate a flag with a list of issues related to a feature's development.

##### Parameters

- `key`: The custom property key.
- `name`: The custom property name.
- `values`: A list of the associated values for the custom property.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addCustomProperties",
      "key": "example-custom-property",
      "name": "Example custom property",
      "values": ["value1", "value2"]
    }
  ]
}
```

#### addTags

Adds tags to the feature flag.

##### Parameters

- `values`: A list of tags to add.

Here's an example:

```json
{
  "instructions": [{ "kind": "addTags", "values": ["tag1", "tag2"] }]
}
```

#### makeFlagPermanent

Marks the feature flag as permanent. LaunchDarkly does not prompt you to remove permanent flags, even if one variation is rolled out to all your customers.

Here's an example:

```json
{
  "instructions": [{ "kind": "makeFlagPermanent" }]
}
```

#### makeFlagTemporary

Marks the feature flag as temporary.

Here's an example:

```json
{
  "instructions": [{ "kind": "makeFlagTemporary" }]
}
```

#### removeCustomProperties

Removes the associated values from a custom property. If all the associated values are removed, this instruction also removes the custom property.

##### Parameters

- `key`: The custom property key.
- `values`: A list of the associated values to remove from the custom property.

```json
{
  "instructions": [
    {
      "kind": "replaceCustomProperties",
      "key": "example-custom-property",
      "values": ["value1", "value2"]
    }
  ]
}
```

#### removeMaintainer

Removes the flag's maintainer. To set a new maintainer, use the `updateMaintainerMember` or `updateMaintainerTeam` instructions.

Here's an example:

```json
{
  "instructions": [{ "kind": "removeMaintainer" }]
}
```

#### removeTags

Removes tags from the feature flag.

##### Parameters

- `values`: A list of tags to remove.

Here's an example:

```json
{
  "instructions": [{ "kind": "removeTags", "values": ["tag1", "tag2"] }]
}
```

#### replaceCustomProperties

Replaces the existing associated values for a custom property with the new values.

##### Parameters

- `key`: The custom property key.
- `name`: The custom property name.
- `values`: A list of the new associated values for the custom property.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "replaceCustomProperties",
      "key": "example-custom-property",
      "name": "Example custom property",
      "values": ["value1", "value2"]
    }
  ]
}
```

#### turnOffClientSideAvailability

Turns off client-side SDK availability for the flag. This is equivalent to unchecking the **SDKs using Mobile key** and/or **SDKs using Client-side ID** boxes for the flag. If you're using a client-side or mobile SDK, you must expose your feature flags in order for the client-side or mobile SDKs to evaluate them.

##### Parameters

- `value`: Use "usingMobileKey" to turn off availability for mobile SDKs. Use "usingEnvironmentId" to turn on availability for client-side SDKs.

Here's an example:

```json
{
  "instructions": [{ "kind": "turnOffClientSideAvailability", "value": "usingMobileKey" }]
}
```

#### turnOnClientSideAvailability

Turns on client-side SDK availability for the flag. This is equivalent to checking the **SDKs using Mobile key** and/or **SDKs using Client-side ID** boxes for the flag. If you're using a client-side or mobile SDK, you must expose your feature flags in order for the client-side or mobile SDKs to evaluate them.

##### Parameters

- `value`: Use "usingMobileKey" to turn on availability for mobile SDKs. Use "usingEnvironmentId" to turn on availability for client-side SDKs.

Here's an example:

```json
{
  "instructions": [{ "kind": "turnOnClientSideAvailability", "value": "usingMobileKey" }]
}
```

#### updateDescription

Updates the feature flag description.

##### Parameters

- `value`: The new description.

Here's an example:

```json
{
  "instructions": [{ "kind": "updateDescription", "value": "Updated flag description" }]
}
```

#### updateMaintainerMember

Updates the maintainer of the flag to an existing member and removes the existing maintainer.

##### Parameters

- `value`: The ID of the member.

Here's an example:

```json
{
  "instructions": [{ "kind": "updateMaintainerMember", "value": "61e9b714fd47591727db558a" }]
}
```

#### updateMaintainerTeam

Updates the maintainer of the flag to an existing team and removes the existing maintainer.

##### Parameters

- `value`: The key of the team.

Here's an example:

```json
{
  "instructions": [{ "kind": "updateMaintainerTeam", "value": "example-team-key" }]
}
```

#### updateName

Updates the feature flag name.

##### Parameters

- `value`: The new name.

Here's an example:

```json
{
  "instructions": [{ "kind": "updateName", "value": "Updated flag name" }]
}
```

</details><br />

<details>
<summary>Click to expand instructions for <strong>updating the flag lifecycle</strong></summary>

These instructions do not require the `environmentKey` parameter. They make changes that apply to the flag across all environments.

#### archiveFlag

Archives the feature flag. This retires it from LaunchDarkly without deleting it. You cannot archive a flag that is a prerequisite of other flags.

```json
{
  "instructions": [{ "kind": "archiveFlag" }]
}
```

#### deleteFlag

Deletes the feature flag and its rules. You cannot restore a deleted flag. If this flag is requested again, the flag value defined in code will be returned for all contexts.

Here's an example:

```json
{
  "instructions": [{ "kind": "deleteFlag" }]
}
```

#### deprecateFlag

Deprecates the feature flag. This hides it from the live flags list without archiving or deleting it.

Here's an example:

```json
{
  "instructions": [{ "kind": "deprecateFlag" }]
}
```

#### restoreDeprecatedFlag

Restores the feature flag if it was previously deprecated.

Here's an example:

```json
{
  "instructions": [{ "kind": "restoreDeprecatedFlag" }]
}
```

#### restoreFlag

Restores the feature flag if it was previously archived.

Here's an example:

```json
{
  "instructions": [{ "kind": "restoreFlag" }]
}
```

</details>

### Using JSON patches on a feature flag

If you do not include the semantic patch header described above, you can use a [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.

In the JSON patch representation, use a JSON pointer in the `path` element to describe what field to change. Use the [Get feature flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) endpoint to find the field you want to update.

There are a few special cases to keep in mind when determining the value of the `path` element:

- To add an individual target to a specific variation if the flag variation already has individual targets, the path for the JSON patch operation is:

```json
[
  {
    "op": "add",
    "path": "/environments/devint/targets/0/values/-",
    "value": "TestClient10"
  }
]
```

- To add an individual target to a specific variation if the flag variation does not already have individual targets, the path for the JSON patch operation is:

```json
[
  {
    "op": "add",
    "path": "/environments/devint/targets/-",
    "value": { "variation": 0, "values": ["TestClient10"] }
  }
]
```

- To add a flag to a release pipeline, the path for the JSON patch operation is:

```json
[
  {
    "op": "add",
    "path": "/releasePipelineKey",
    "value": "example-release-pipeline-key"
  }
]
```

### Required approvals

If a request attempts to alter a flag configuration in an environment where approvals are required for the flag, the request will fail with a 405. Changes to the flag configuration in that environment will require creating an [approval request](https://launchdarkly.com/docs/api/approvals) or a [workflow](https://launchdarkly.com/docs/api/workflows).

### Conflicts

If a flag configuration change made through this endpoint would cause a pending scheduled change or approval request to fail, this endpoint will return a 400. You can ignore this check by adding an `ignoreConflicts` query parameter set to `true`.

### Migration flags

For migration flags, the cohort information is included in the `rules` property of a flag's response. You can update cohorts by updating `rules`. Default cohort information is included in the `fallthrough` property of a flag's response. You can update the default cohort by updating `fallthrough`.
When you update the rollout for a cohort or the default cohort through the API, provide a rollout instead of a single `variationId`.
To learn more, read [Migration flags](https://launchdarkly.com/docs/home/flags/migration).

- `delete_v2_api_flags` (`write`): Delete a feature flag in all environments. Use with caution: only delete feature flags your application no longer uses.
- `copy_v2_api_flags` (`write`):
  > ### Copying flag settings is an Enterprise feature
  >
  > Copying flag settings is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

Copy flag settings from a source environment to a target environment.

By default, this operation copies the entire flag configuration. You can use the `includedActions` or `excludedActions` to specify that only part of the flag configuration is copied.

If you provide the optional `currentVersion` of a flag, this operation tests to ensure that the current flag version in the environment matches the version you've specified. The operation rejects attempts to copy flag settings if the environment's current version of the flag does not match the version you've specified. You can use this to enforce optimistic locking on copy attempts.

### Resource `api.v2.flags.dependent_flags`:

- `retrieve_dependent_flags_flags_v2_api_dependent_flags` (`read`): > ### Flag prerequisites is an Enterprise feature
  > Flag prerequisites is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

List dependent flags across all environments for the flag specified in the path parameters. A dependent flag is a flag that uses another flag as a prerequisite. To learn more, read [Flag prerequisites](https://launchdarkly.com/docs/home/flags/prereqs).

### Resource `api.v2.flags.expiring_targets`:

- `retrieve_flags_v2_api_expiring_targets` (`read`): Get a list of context targets on a feature flag that are scheduled for removal.
- `update_flags_v2_api_expiring_targets` (`write`): Schedule a context for removal from individual targeting on a feature flag. The flag must already individually target the context.

You can add, update, or remove a scheduled removal date. You can only schedule a context for removal on a single variation per flag.

Updating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating expiring targets.

<details>
<summary>Click to expand instructions for <strong>updating expiring targets</strong></summary>

#### addExpiringTarget

Adds a date and time that LaunchDarkly will remove the context from the flag's individual targeting.

##### Parameters

- `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the context from individual targeting for this flag
- `variationId`: ID of a variation on the flag
- `contextKey`: The context key for the context to remove from individual targeting
- `contextKind`: The kind of context represented by the `contextKey`

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addExpiringTarget",
      "value": 1754006460000,
      "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
      "contextKey": "user-key-123abc",
      "contextKind": "user"
    }
  ]
}
```

#### updateExpiringTarget

Updates the date and time that LaunchDarkly will remove the context from the flag's individual targeting

##### Parameters

- `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the context from individual targeting for this flag
- `variationId`: ID of a variation on the flag
- `contextKey`: The context key for the context to remove from individual targeting
- `contextKind`: The kind of context represented by the `contextKey`
- `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn't match current version of the expiring target.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateExpiringTarget",
      "value": 1754006460000,
      "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
      "contextKey": "user-key-123abc",
      "contextKind": "user"
    }
  ]
}
```

#### removeExpiringTarget

Removes the scheduled removal of the context from the flag's individual targeting. The context will remain part of the flag's individual targeting until you explicitly remove it, or until you schedule another removal.

##### Parameters

- `variationId`: ID of a variation on the flag
- `contextKey`: The context key for the context to remove from individual targeting
- `contextKind`: The kind of context represented by the `contextKey`

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeExpiringTarget",
      "variationId": "4254742c-71ae-411f-a992-43b18a51afe0",
      "contextKey": "user-key-123abc",
      "contextKind": "user"
    }
  ]
}
```

</details>

### Resource `api.v2.flags.expiring_user_targets`:

- `retrieve_flags_v2_api_expiring_user_targets` (`read`):
  > ### Contexts are now available
  >
  > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring context targets for feature flag](https://launchdarkly.com/docs/api/feature-flags/get-expiring-context-targets) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

Get a list of user targets on a feature flag that are scheduled for removal.

- `update_flags_v2_api_expiring_user_targets` (`write`): > ### Contexts are now available
  > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring context targets on feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-expiring-targets) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

Schedule a target for removal from individual targeting on a feature flag. The flag must already serve a variation to specific targets based on their key.

You can add, update, or remove a scheduled removal date. You can only schedule a target for removal on a single variation per flag.

Updating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating expiring user targets.

<details>
<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>

#### addExpireUserTargetDate

Adds a date and time that LaunchDarkly will remove the user from the flag's individual targeting.

##### Parameters

- `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag
- `variationId`: ID of a variation on the flag
- `userKey`: The user key for the user to remove from individual targeting

#### updateExpireUserTargetDate

Updates the date and time that LaunchDarkly will remove the user from the flag's individual targeting.

##### Parameters

- `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag
- `variationId`: ID of a variation on the flag
- `userKey`: The user key for the user to remove from individual targeting
- `version`: (Optional) The version of the expiring user target to update. If included, update will fail if version doesn't match current version of the expiring user target.

#### removeExpireUserTargetDate

Removes the scheduled removal of the user from the flag's individual targeting. The user will remain part of the flag's individual targeting until you explicitly remove them, or until you schedule another removal.

##### Parameters

- `variationId`: ID of a variation on the flag
- `userKey`: The user key for the user to remove from individual targeting

</details>

### Resource `api.v2.flags.triggers`:

- `retrieve_flags_v2_api_triggers` (`read`): Get a flag trigger by ID.
- `update_flags_v2_api_triggers` (`write`): Update a flag trigger. Updating a flag trigger uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating flag triggers.

<details>
<summary>Click to expand instructions for <strong>updating flag triggers</strong></summary>

#### replaceTriggerActionInstructions

Removes the existing trigger action and replaces it with the new instructions.

##### Parameters

- `value`: An array of the new `kind`s of actions to perform when triggering. Supported flag actions are `turnFlagOn` and `turnFlagOff`.

Here's an example that replaces the existing action with new instructions to turn flag targeting off:

```json
{
  "instructions": [
    {
      "kind": "replaceTriggerActionInstructions",
      "value": [{ "kind": "turnFlagOff" }]
    }
  ]
}
```

#### cycleTriggerUrl

Generates a new URL for this trigger. You must update any clients using the trigger to use this new URL.

Here's an example:

```json
{
  "instructions": [{ "kind": "cycleTriggerUrl" }]
}
```

#### disableTrigger

Disables the trigger. This saves the trigger configuration, but the trigger stops running. To re-enable, use `enableTrigger`.

Here's an example:

```json
{
  "instructions": [{ "kind": "disableTrigger" }]
}
```

#### enableTrigger

Enables the trigger. If you previously disabled the trigger, it begins running again.

Here's an example:

```json
{
  "instructions": [{ "kind": "enableTrigger" }]
}
```

</details>
* `delete_flags_v2_api_triggers` (`write`): Delete a flag trigger by ID.

### Resource `api.v2.flags.release`:

- `list_flags_v2_api_release` (`read`): Get currently active release for a flag
- `delete_all_flags_v2_api_release` (`write`): Deletes a release from a flag
- `patch_all_flags_v2_api_release` (`write`): This endpoint is only available for releases that are part of a legacy release pipeline. Releases for new release pipelines should use the [Update phase status for release](https://launchdarkly.com/docs/api/releases-beta/update-phase-status) endpoint. To learn more about migrating from legacy release pipelines to fully automated release pipelines, read the [Release pipeline migration guide](https://launchdarkly.com/docs/guides/flags/release-pipeline-migration).

Update currently active release for a flag. Updating releases requires the [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) format. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

You can only use this endpoint to mark a release phase complete or incomplete. To indicate which phase to update, use the array index in the `path`. For example, to mark the first phase of a release as complete, use the following request body:

```
  [
    {
      "op": "replace",
      "path": "/phase/0/complete",
      "value": true
    }
  ]
```

### Resource `api.v2.integration_capabilities.big_segment_store`:

- `retrieve_integration_capabilities_v2_api_big_segment_store` (`read`): Get a big segment store integration by ID.
- `update_integration_capabilities_v2_api_big_segment_store` (`write`): Update a big segment store integration. Updating a big segment store requires a [JSON Patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `delete_integration_capabilities_v2_api_big_segment_store` (`write`): Delete a persistent store integration. Each integration uses either Redis or DynamoDB.
- `retrieve_big_segment_store_integration_capabilities_v2_api_big_segment_store` (`read`): List all big segment store integrations.

### Resource `api.v2.integration_capabilities.feature_store`:

- `retrieve_integration_capabilities_v2_api_feature_store` (`read`): Get delivery configuration by ID.
- `update_integration_capabilities_v2_api_feature_store` (`write`): Update an integration delivery configuration. Updating an integration delivery configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `delete_integration_capabilities_v2_api_feature_store` (`write`): Delete a delivery configuration.
- `retrieve_feature_store_integration_capabilities_v2_api_feature_store` (`read`): List all delivery configurations.
- `validate_integration_capabilities_v2_api_feature_store` (`write`): Validate the saved delivery configuration, using the `validationRequest` in the integration's `manifest.json` file.

### Resource `api.v2.integration_capabilities.flag_import`:

- `retrieve_integration_capabilities_v2_api_flag_import` (`read`): Get a single flag import configuration by ID. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.
- `update_integration_capabilities_v2_api_flag_import` (`write`): Updating a flag import configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the import configuration fields that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.<br/><br/>You can update the `config`, `tags`, and `name` of the flag import configuration.
- `delete_integration_capabilities_v2_api_flag_import` (`write`): Delete a flag import configuration by ID. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.
- `retrieve_flag_import_integration_capabilities_v2_api_flag_import` (`read`): List all flag import configurations.
- `trigger_integration_capabilities_v2_api_flag_import` (`write`): Trigger a single flag import run for an existing flag import configuration. The `integrationKey` path parameter identifies the feature management system from which the import occurs, for example, `split`.

### Resource `api.v2.integration_configurations`:

- `retrieve_v2_api_integration_configurations` (`read`): Get integration configuration with the specified ID. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)
- `update_v2_api_integration_configurations` (`write`): Update an integration configuration. Updating an integration configuration uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `delete_v2_api_integration_configurations` (`write`): Delete an integration configuration by ID. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)

### Resource `api.v2.integration_configurations.keys`:

- `retrieve_integration_configurations_v2_api_keys` (`read`): Get all integration configurations with the specified integration key. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).).
- `update_integration_configurations_v2_api_keys` (`write`): Create a new integration configuration. (Excludes [persistent store](https://launchdarkly.com/docs/api/persistent-store-integrations-beta) and [flag import configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta).)

### Resource `api.v2.integrations`:

- `retrieve_v2_api_integrations` (`read`): Get an audit log subscription by ID.
- `update_v2_api_integrations` (`write`): Update an audit log subscription configuration. Updating an audit log subscription uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `delete_v2_api_integrations` (`write`): Delete an audit log subscription.

### Resource `api.v2.members`:

- `create_v2_api_members` (`write`): Invite one or more new members to join an account. Each member is sent an invitation. Members with "admin" or "owner" roles may create new members, as well as anyone with a "createMember" permission for "member/\*". If a member cannot be invited, the entire request is rejected and no members are invited from that request.

Each member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the "message" field of the response.

Requests to create account members will not work if SCIM is enabled for the account.

_No more than 50 members may be created per request._

A request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:

- **email_already_exists_in_account**: A member with this email address already exists in this account.
- **email_taken_in_different_account**: A member with this email address exists in another account.
- **duplicate_email**s: This request contains two or more members with the same email address.

A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request).

- `retrieve_v2_api_members` (`read`): Get a single account member by member ID.

`me` is a reserved value for the `id` parameter that returns the caller's member information.

### Expanding the member response

LaunchDarkly supports one field for expanding the "Get member" response. By default, this field is **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `roleAttributes` includes a list of the role attributes that you have assigned to the member.

For example, `expand=roleAttributes` includes `roleAttributes` field in the response.

- `update_v2_api_members` (`write`):
  Update a single account member. Updating a member uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

To update fields in the account member object that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array. For example, to add a new custom role to a member, use the following request body:

```
  [
    {
      "op": "add",
      "path": "/customRoles/0",
      "value": "some-role-id"
    }
  ]
```

You can update only an account member's role or custom role using a JSON patch. Members can update their own names and email addresses though the LaunchDarkly UI.

When SAML SSO or SCIM is enabled for the account, account members are managed in the Identity Provider (IdP). Requests to update account members will succeed, but the IdP will override the update shortly afterwards.

- `list_v2_api_members` (`read`): Return a list of account members.

By default, this returns the first 20 members. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links are not present if the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page.

### Filtering members

LaunchDarkly supports the following fields for filters:

- `query` is a string that matches against the members' emails and names. It is not case sensitive.
- `role` is a `|` separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, `Owner` counts as `Admin`.
- `id` is a `|` separated list of member IDs. It filters the list to members who match any of the IDs in the list.
- `email` is a `|` separated list of member emails. It filters the list to members who match any of the emails in the list.
- `team` is a string that matches against the key of the teams the members belong to. It is not case sensitive.
- `noteam` is a boolean that filters the list of members who are not on a team if true and members on a team if false.
- `lastSeen` is a JSON object in one of the following formats:
  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.
  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.
  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.
- `accessCheck` is a string that represents a specific action on a specific resource and is in the format `<ActionSpecifier>:<ResourceSpecifier>`. It filters the list to members who have the ability to perform that action on that resource. Note: `accessCheck` is only supported in API version `20220603` and earlier. To learn more, read [Versioning](https://launchdarkly.com/docs/api#versioning).
  - For example, the filter `accessCheck:createApprovalRequest:proj/default:env/test:flag/alternate-page` matches members with the ability to create an approval request for the `alternate-page` flag in the `test` environment of the `default` project.
  - Wildcard and tag filters are not supported when filtering for access.

For example, the filter `query:abc,role:admin|customrole` matches members with the string `abc` in their email or name, ignoring case, who also are either an `Owner` or `Admin` or have the custom role `customrole`.

### Sorting members

LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:

- `displayName` sorts by first + last name, using the member's email if no name is set.
- `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never been seen or have no data the oldest.

### Expanding the members response

LaunchDarkly supports two fields for expanding the "List members" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `customRoles` includes a list of the roles that you have assigned to the member.
- `roleAttributes` includes a list of the role attributes that you have assigned to the member.

For example, `expand=roleAttributes` includes `roleAttributes` field in the response.

- `delete_v2_api_members` (`write`): Delete a single account member by ID. Requests to delete account members will not work if SCIM is enabled for the account.
- `patch_all_v2_api_members` (`write`): > ### Full use of this API resource is an Enterprise feature
  > The ability to perform a partial update to multiple members is available to customers on an Enterprise plan. If you are on another plan, you can update members individually. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

Perform a partial update to multiple members. Updating members uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating members.

<details>
<summary>Click to expand instructions for <strong>updating members</strong></summary>

#### replaceMembersRoles

Replaces the roles of the specified members. This also removes all custom roles assigned to the specified members.

##### Parameters

- `value`: The new role. Must be a valid built-in role. To learn more about built-in roles, read [LaunchDarkly's built-in roles](https://launchdarkly.com/docs/home/account/built-in-roles).
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "replaceMemberRoles",
      "value": "reader",
      "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
    }
  ]
}
```

#### replaceAllMembersRoles

Replaces the roles of all members. This also removes all custom roles assigned to the specified members.

Members that match any of the filters are **excluded** from the update.

##### Parameters

- `value`: The new role. Must be a valid built-in role. To learn more about built-in roles, read [LaunchDarkly's built-in roles](https://launchdarkly.com/docs/home/account/built-in-roles).
- `filterLastSeen`: (Optional) A JSON object with one of the following formats:
  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.
  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.
  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.
- `filterQuery`: (Optional) A string that matches against the members' emails and names. It is not case sensitive.
- `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`.
- `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive.
- `ignoredMemberIDs`: (Optional) A list of member IDs.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "replaceAllMembersRoles",
      "value": "reader",
      "filterLastSeen": { "never": true }
    }
  ]
}
```

#### replaceMembersCustomRoles

Replaces the custom roles of the specified members.

##### Parameters

- `values`: List of new custom roles. Must be a valid custom role key or ID.
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "replaceMembersCustomRoles",
      "values": ["example-custom-role"],
      "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
    }
  ]
}
```

#### replaceAllMembersCustomRoles

Replaces the custom roles of all members. Members that match any of the filters are **excluded** from the update.

##### Parameters

- `values`: List of new roles. Must be a valid custom role key or ID.
- `filterLastSeen`: (Optional) A JSON object with one of the following formats:
  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.
  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.
  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.
- `filterQuery`: (Optional) A string that matches against the members' emails and names. It is not case sensitive.
- `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`.
- `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive.
- `ignoredMemberIDs`: (Optional) A list of member IDs.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "replaceAllMembersCustomRoles",
      "values": ["example-custom-role"],
      "filterLastSeen": { "never": true }
    }
  ]
}
```

#### replaceMembersRoleAttributes

Replaces the role attributes of the specified members.

##### Parameters

- `value`: Map of role attribute keys to lists of values.
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "replaceMembersRoleAttributes",
      "value": {
        "myRoleProjectKey": ["mobile", "web"],
        "myRoleEnvironmentKey": ["production"]
      },
      "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
    }
  ]
}
```

</details>
* `teams_v2_api_members` (`write`): Add one member to one or more teams.

### Resource `api.v2.metrics`:

- `retrieve_v2_api_metrics` (`read`): Get information for a single metric from the specific project.

### Expanding the metric response

LaunchDarkly supports four fields for expanding the "Get metric" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `experiments` includes all experiments from the specific project that use the metric
- `experimentCount` includes the number of experiments from the specific project that use the metric
- `metricGroups` includes all metric groups from the specific project that use the metric
- `metricGroupCount` includes the number of metric groups from the specific project that use the metric

For example, `expand=experiments` includes the `experiments` field in the response.

- `update_v2_api_metrics` (`write`): Patch a metric by key. Updating a metric uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `delete_v2_api_metrics` (`write`): Delete a metric by key.

### Resource `api.v2.oauth.clients`:

- `create_oauth_v2_api_clients` (`write`): Create (register) a LaunchDarkly OAuth2 client. OAuth2 clients allow you to build custom integrations using LaunchDarkly as your identity provider.
- `retrieve_oauth_v2_api_clients` (`read`): Get a registered OAuth 2.0 client by unique client ID.
- `update_oauth_v2_api_clients` (`write`): Patch an existing OAuth 2.0 client by client ID. Updating an OAuth2 client uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates). Only `name`, `description`, and `redirectUri` may be patched.
- `list_oauth_v2_api_clients` (`read`): Get all OAuth 2.0 clients registered by your account.
- `delete_oauth_v2_api_clients` (`write`): Delete an existing OAuth 2.0 client by unique client ID.

### Resource `api.v2.projects`:

- `create_v2_api_projects` (`write`): Create a new project with the given key and name. Project keys must be unique within an account.
- `retrieve_v2_api_projects` (`read`): Get a single project by key.

### Expanding the project response

LaunchDarkly supports one field for expanding the "Get project" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `environments` includes a paginated list of the project environments.

For example, `expand=environments` includes the `environments` field for the project in the response.

- `update_v2_api_projects` (`write`): Update a project. Updating a project uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the project fields that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.
- `list_v2_api_projects` (`read`): Return a list of projects.

By default, this returns the first 20 projects. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.

### Filtering projects

LaunchDarkly supports three fields for filters:

- `query` is a string that matches against the projects' names and keys. It is not case sensitive.
- `tags` is a `+`-separated list of project tags. It filters the list of projects that have all of the tags in the list.
- `keys` is a `|` separated list of project keys. It filters the list to projects that have any of the keys in the list.

For example, the filter `filter=query:abc,tags:tag-1+tag-2` matches projects with the string `abc` in their name or key and also are tagged with `tag-1` and `tag-2`. The filter is not case-sensitive.

The documented values for `filter` query parameters are prior to URL encoding. For example, the `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.

### Sorting projects

LaunchDarkly supports two fields for sorting:

- `name` sorts by project name.
- `createdOn` sorts by the creation date of the project.

For example, `sort=name` sorts the response by project name in ascending order.

### Expanding the projects response

LaunchDarkly supports one field for expanding the "List projects" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with the `environments` field.

- `environments` includes a paginated list of the project environments.

For example, `expand=environments` includes the `environments` field for each project in the response.

- `delete_v2_api_projects` (`write`): Delete a project by key. Use this endpoint with caution. Deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.

### Resource `api.v2.projects.context_kinds`:

- `update_projects_v2_api_context_kinds` (`write`): Create or update a context kind by key. Only the included fields will be updated.
- `retrieve_context_kinds_projects_v2_api_context_kinds` (`read`): Get all context kinds for a given project.

### Resource `api.v2.projects.environments`:

- `create_projects_v2_api_environments` (`write`): > ### Approval settings
  > The `approvalSettings` key is only returned when the [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled.
  >
  > You cannot update approval settings when creating new environments. Update approval settings with the [https://launchdarkly.com/docs/api/environments/patch-environment).

Create a new environment in a specified project with a given name, key, swatch color, and default TTL.

- `retrieve_projects_v2_api_environments` (`read`): > ### Approval settings
  > The `approvalSettings` key is only returned when [approvals](https://launchdarkly.com/docs/home/releases/approvals) for flags or segments are enabled.

Get an environment given a project and key.

- `update_projects_v2_api_environments` (`write`):
  Update an environment. Updating an environment uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

To update fields in the environment object that are arrays, set the `path` to the name of the field and then append `/<array index>`. Using `/0` appends to the beginning of the array.

### Approval settings

This request only returns the `approvalSettings` key if the [approvals](https://launchdarkly.com/docs/home/releases/approvals/) feature is enabled.

Only the `canReviewOwnRequest`, `canApplyDeclinedChanges`, `minNumApprovals`, `required` and `requiredApprovalTagsfields` are editable.

If you try to patch the environment by setting both `required` and `requiredApprovalTags`, the request fails and an error appears. You can specify either required approvals for all flags in an environment or those with specific tags, but not both.

- `list_projects_v2_api_environments` (`read`): Return a list of environments for the specified project.

By default, this returns the first 20 environments. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.

### Filtering environments

LaunchDarkly supports two fields for filters:

- `query` is a string that matches against the environments' names and keys. It is not case sensitive.
- `tags` is a `+`-separated list of environment tags. It filters the list of environments that have all of the tags in the list.

For example, the filter `filter=query:abc,tags:tag-1+tag-2` matches environments with the string `abc` in their name or key and also are tagged with `tag-1` and `tag-2`. The filter is not case-sensitive.

The documented values for `filter` query parameters are prior to URL encoding. For example, the `+` in `filter=tags:tag-1+tag-2` must be encoded to `%2B`.

### Sorting environments

LaunchDarkly supports the following fields for sorting:

- `createdOn` sorts by the creation date of the environment.
- `critical` sorts by whether the environments are marked as critical.
- `name` sorts by environment name.

For example, `sort=name` sorts the response by environment name in ascending order.

- `delete_projects_v2_api_environments` (`write`): Delete a environment by key.
- `api_key_projects_v2_api_environments` (`write`): Reset an environment's SDK key with an optional expiry time for the old key.
- `mobile_key_projects_v2_api_environments` (`write`): Reset an environment's mobile key. The optional expiry for the old key is deprecated for this endpoint, so the old key will always expire immediately.
- `retrieve_followers_projects_v2_api_environments` (`read`): Get followers of all flags in a given environment and project

### Resource `api.v2.projects.environments.context_attributes`:

- `retrieve_environments_projects_v2_api_context_attributes` (`read`): Get context attribute values.
- `retrieve_context_attributes_environments_projects_v2_api_context_attributes` (`read`): Get context attribute names.

### Resource `api.v2.projects.environments.context_instances`:

- `retrieve_environments_projects_v2_api_context_instances` (`read`): Get context instances by ID.
- `delete_environments_projects_v2_api_context_instances` (`write`): Delete context instances by ID.
- `search_environments_projects_v2_api_context_instances` (`write`):
  Search for context instances.

You can use either the query parameters or the request body parameters. If both are provided, there is an error.

To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). To learn more about context instances, read [Context instances](https://launchdarkly.com/docs/home/observability/multi-contexts#context-instances).

### Resource `api.v2.projects.environments.contexts`:

- `retrieve_environments_projects_v2_api_contexts` (`read`): Get contexts based on kind and key.
- `update_environments_projects_v2_api_contexts` (`write`):
  Enable or disable a feature flag for a context based on its context kind and key.

Omitting the `setting` attribute from the request body, or including a `setting` of `null`, erases the current setting for a context.

If you previously patched the flag, and the patch included the context's data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the combination of the context's key and kind before, it calculates the flag values based on the context kind and key.

- `search_environments_projects_v2_api_contexts` (`write`):
  Search for contexts.

You can use either the query parameters or the request body parameters. If both are provided, there is an error.

To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). To learn more about contexts, read [Contexts and context kinds](https://launchdarkly.com/docs/home/observability/contexts#contexts-and-context-kinds).

### Resource `api.v2.projects.environments.experiments`:

- `create_environments_projects_v2_api_experiments` (`write`): Create an experiment.

To run this experiment, you'll need to [create an iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration) and then [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment) with the `startIteration` instruction.

To learn more, read [Creating experiments](https://launchdarkly.com/docs/home/experimentation/create).

- `retrieve_environments_projects_v2_api_experiments` (`read`): Get details about an experiment.

### Expanding the experiment response

LaunchDarkly supports four fields for expanding the "Get experiment" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response.
- `draftIteration` includes the iteration which has not been started yet, if any.
- `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response.
- `treatments` includes all treatment and parameter details. By default treatment data is not included in the response.

For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.

- `update_environments_projects_v2_api_experiments` (`write`): Update an experiment. Updating an experiment uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating experiments.

#### updateName

Updates the experiment name.

##### Parameters

- `value`: The new name.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateName",
      "value": "Example updated experiment name"
    }
  ]
}
```

#### updateDescription

Updates the experiment description.

##### Parameters

- `value`: The new description.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateDescription",
      "value": "Example updated description"
    }
  ]
}
```

#### startIteration

Starts a new iteration for this experiment. You must [create a new iteration](https://launchdarkly.com/docs/ld-docs/api/experiments/create-iteration) before calling this instruction.

An iteration may not be started until it meets the following criteria:

- Its associated flag is toggled on and is not archived
- Its `randomizationUnit` is set
- At least one of its `treatments` has a non-zero `allocationPercent`

##### Parameters

- `changeJustification`: The reason for starting a new iteration. Required when you call `startIteration` on an already running experiment, otherwise optional.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "startIteration",
      "changeJustification": "It's time to start a new iteration"
    }
  ]
}
```

#### stopIteration

Stops the current iteration for this experiment.

##### Parameters

- `winningTreatmentId`: The ID of the winning treatment. Treatment IDs are returned as part of the [Get experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/get-experiment) response. They are the `_id` of each element in the `treatments` array.
- `winningReason`: The reason for the winner

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "stopIteration",
      "winningTreatmentId": "3a548ec2-72ac-4e59-8518-5c24f5609ccf",
      "winningReason": "Example reason to stop the iteration"
    }
  ]
}
```

#### archiveExperiment

Archives this experiment. Archived experiments are hidden by default in the LaunchDarkly user interface. You cannot start new iterations for archived experiments.

Here's an example:

```json
{
  "instructions": [{ "kind": "archiveExperiment" }]
}
```

#### restoreExperiment

Restores an archived experiment. After restoring an experiment, you can start new iterations for it again.

Here's an example:

```json
{
  "instructions": [{ "kind": "restoreExperiment" }]
}
```

- `list_environments_projects_v2_api_experiments` (`read`): Get details about all experiments in an environment.

### Filtering experiments

LaunchDarkly supports the `filter` query param for filtering, with the following fields:

- `flagKey` filters for only experiments that use the flag with the given key.
- `metricKey` filters for only experiments that use the metric with the given key.
- `status` filters for only experiments with an iteration with the given status. An iteration can have the status `not_started`, `running` or `stopped`.

For example, `filter=flagKey:my-flag,status:running,metricKey:page-load-ms` filters for experiments for the given flag key and the given metric key which have a currently running iteration.

### Expanding the experiments response

LaunchDarkly supports four fields for expanding the "Get experiments" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `previousIterations` includes all iterations prior to the current iteration. By default only the current iteration is included in the response.
- `draftIteration` includes the iteration which has not been started yet, if any.
- `secondaryMetrics` includes secondary metrics. By default only the primary metric is included in the response.
- `treatments` includes all treatment and parameter details. By default treatment data is not included in the response.

For example, `expand=draftIteration,treatments` includes the `draftIteration` and `treatments` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.

- `iterations_environments_projects_v2_api_experiments` (`write`): Create an experiment iteration.

Experiment iterations let you record experiments in individual blocks of time. Initially, iterations are created with a status of `not_started` and appear in the `draftIteration` field of an experiment. To start or stop an iteration, [update the experiment](https://launchdarkly.com/docs/ld-docs/api/experiments/patch-experiment) with the `startIteration` or `stopIteration` instruction.

To learn more, read [Start experiment iterations](https://launchdarkly.com/docs/home/experimentation/feature#start-experiment-iterations).

### Resource `api.v2.projects.environments.experiments.metric_groups`:

- `retrieve_results_experiments_environments_projects_v2_api_metric_groups` (`read`): Get results from an experiment for a particular metric group.

### Resource `api.v2.projects.environments.experiments.metrics`:

- `retrieve_results_experiments_environments_projects_v2_api_metrics` (`read`): Get results from an experiment for a particular metric.

LaunchDarkly supports one field for expanding the "Get experiment results" response. By default, this field is **not** included in the response.

To expand the response, append the `expand` query parameter with the following field:

- `traffic` includes the total count of units for each treatment.

For example, `expand=traffic` includes the `traffic` field for the project in the response.

### Resource `api.v2.projects.environments.flags`:

- `evaluate_environments_projects_v2_api_flags` (`write`): Evaluate flags for a context instance, for example, to determine the expected flag variation. **Do not use this API instead of an SDK.** The LaunchDarkly SDKs are specialized for the tasks of evaluating feature flags in your application at scale and generating analytics events based on those evaluations. This API is not designed for that use case. Any evaluations you perform with this API will not be reflected in features such as flag statuses and flag insights. Context instances evaluated by this API will not appear in the Contexts list. To learn more, read [Comparing LaunchDarkly's SDKs and REST API](https://launchdarkly.com/docs/guides/api/comparing-sdk-rest-api).

### Filtering

LaunchDarkly supports the `filter` query param for filtering, with the following fields:

- `query` filters for a string that matches against the flags' keys and names. It is not case sensitive. For example: `filter=query equals dark-mode`.
- `tags` filters the list to flags that have all of the tags in the list. For example: `filter=tags contains ["beta","q1"]`.

You can also apply multiple filters at once. For example, setting `filter=query equals dark-mode, tags contains ["beta","q1"]` matches flags which match the key or name `dark-mode` and are tagged `beta` and `q1`.

### Resource `api.v2.projects.environments.holdouts`:

- `create_environments_projects_v2_api_holdouts` (`write`): Create a new holdout in the specified project.
- `retrieve_environments_projects_v2_api_holdouts` (`read`): Get details about a holdout.

### Expanding the holdout response

LaunchDarkly supports the following fields for expanding the "Get holdout" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `draftIteration` includes the iteration which has not been started yet, if any, for this holdout.
- `previousIterations` includes all iterations prior to the current iteration, for this holdout. By default only the current iteration is included in the response.
- `rel-draftIteration` includes the iteration which has not been started yet, if any, for the experiments related to this holdout.
- `rel-metrics` includes metrics for experiments related to this holdout.
- `rel-previousIterations` includes all iterations prior to the current iteration, for the experiments related to this holdout.
- `rel-secondaryMetrics` includes secondary metrics for experiments related to this holdout.
- `rel-treatments` includes all treatment and parameter details for experiments related to this holdout.
- `secondaryMetrics` includes secondary metrics for this holdout. By default only the primary metric is included in the response.
- `treatments` includes all treatment and parameter details for this holdout. By default treatment data is not included in the response.

For example, `expand=draftIteration,rel-draftIteration` includes the `draftIteration` and `rel-draftIteration` fields in the response. If fields that you request with the `expand` query parameter are empty, they are not included in the response.

- `update_environments_projects_v2_api_holdouts` (`write`): Updates an existing holdout, and returns the updated holdout. Updating holdouts uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating holdouts.

<details>
<summary>Click to expand instructions for <strong>updating holdouts</strong></summary>

#### endHoldout

Ends a holdout.

##### Parameters

None.

Here's an example:

```json
{
  "comment": "Optional comment describing why the holdout is ending",
  "instructions": [
    {
      "kind": "endHoldout"
    }
  ]
}
```

#### removeExperiment

Removes an experiment from a holdout.

##### Parameters

- `value`: The key of the experiment to remove

Here's an example:

```json
{
  "comment": "Optional comment describing the change",
  "instructions": [
    {
      "kind": "removeExperiment",
      "value": "experiment-key"
    }
  ]
}
```

#### updateDescription

Updates the description of the holdout.

##### Parameters

- `value`: The new description.

Here's an example:

```json
{
  "comment": "Optional comment describing the update",
  "instructions": [
    {
      "kind": "updateDescription",
      "value": "Updated holdout description"
    }
  ]
}
```

#### updateName

Updates the name of the holdout.

##### Parameters

- `value`: The new name.

Here's an example:

```json
{
  "comment": "Optional comment describing the update",
  "instructions": [
    {
      "kind": "updateName",
      "value": "Updated holdout name"
    }
  ]
}
```

</details>
* `list_environments_projects_v2_api_holdouts` (`read`): Get all holdouts

### Resource `api.v2.projects.environments.segments`:

- `evaluate_environments_projects_v2_api_segments` (`write`): For a given context instance with attributes, get membership details for all segments. In the request body, pass in the context instance.

### Resource `api.v2.projects.experimentation_settings`:

- `retrieve_experimentation_settings_projects_v2_api_experimentation_settings` (`read`): Get current experimentation settings for the given project
- `update_experimentation_settings_projects_v2_api_experimentation_settings` (`write`): Update experimentation settings for the given project

### Resource `api.v2.projects.flag_defaults`:

- `retrieve_flag_defaults_projects_v2_api_flag_defaults` (`read`): Get the flag defaults for a specific project.
- `update_flag_defaults_projects_v2_api_flag_defaults` (`write`): Create or update flag defaults for a project.

### Resource `api.v2.projects.flags.environments`:

- `approval_requests_flag_copy_flags_projects_v2_api_environments` (`write`): Create an approval request to copy a feature flag's configuration across environments.
- `migration_safety_issues_flags_projects_v2_api_environments` (`write`): Returns the migration safety issues that are associated with the POSTed flag patch. The patch must use the semantic patch format for updating feature flags.

### Resource `api.v2.projects.flags.environments.approval_requests`:

- `retrieve_environments_flags_projects_v2_api_approval_requests` (`read`): Get a single approval request for a feature flag.
- `update_environments_flags_projects_v2_api_approval_requests` (`write`): Perform a partial update to an approval request. Updating an approval request uses the semantic patch format. This endpoint requires a feature flag key, and can only be used for updating approval requests for flags.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instruction for updating an approval request.

#### addReviewers

Adds the specified members and teams to the existing list of reviewers. You must include at least one of `notifyMemberIds` and `notifyTeamKeys`.

##### Parameters

- `notifyMemberIds`: (Optional) List of member IDs.
- `notifyTeamKeys`: (Optional) List of team keys.

* `delete_environments_flags_projects_v2_api_approval_requests` (`write`): Delete an approval request for a feature flag.
* `apply_environments_flags_projects_v2_api_approval_requests` (`write`): Apply an approval request that has been approved. This endpoint requires a feature flag key, and can only be used for applying approval requests on flags.
* `approval_requests_environments_flags_projects_v2_api_approval_requests` (`write`): Create an approval request for a feature flag.
* `retrieve_approval_requests_environments_flags_projects_v2_api_approval_requests` (`read`): Get all approval requests for a feature flag.
* `reviews_environments_flags_projects_v2_api_approval_requests` (`write`): Review an approval request by approving or denying changes.

### Resource `api.v2.projects.flags.environments.followers`:

- `update_environments_flags_projects_v2_api_followers` (`write`): Add a member as a follower to a flag in a project and environment
- `list_environments_flags_projects_v2_api_followers` (`read`): Get a list of members following a flag in a project and environment
- `delete_environments_flags_projects_v2_api_followers` (`write`): Remove a member as a follower to a flag in a project and environment

### Resource `api.v2.projects.flags.environments.scheduled_changes`:

- `retrieve_environments_flags_projects_v2_api_scheduled_changes` (`read`): Get a scheduled change that will be applied to the feature flag by ID.
- `update_environments_flags_projects_v2_api_scheduled_changes` (`write`):
  Update a scheduled change, overriding existing instructions with the new ones. Updating a scheduled change uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating scheduled changes.

<details>
<summary>Click to expand instructions for <strong>updating scheduled changes</strong></summary>

#### deleteScheduledChange

Removes the scheduled change.

Here's an example:

```json
{
  "instructions": [{ "kind": "deleteScheduledChange" }]
}
```

#### replaceScheduledChangesInstructions

Removes the existing scheduled changes and replaces them with the new instructions.

##### Parameters

- `value`: An array of the new actions to perform when the execution date for these scheduled changes arrives. Supported scheduled actions are `turnFlagOn` and `turnFlagOff`.

Here's an example that replaces the scheduled changes with new instructions to turn flag targeting off:

```json
{
  "instructions": [
    {
      "kind": "replaceScheduledChangesInstructions",
      "value": [{ "kind": "turnFlagOff" }]
    }
  ]
}
```

#### updateScheduledChangesExecutionDate

Updates the execution date for the scheduled changes.

##### Parameters

- `value`: the new execution date, in Unix milliseconds.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateScheduledChangesExecutionDate",
      "value": 1754092860000
    }
  ]
}
```

</details>
* `delete_environments_flags_projects_v2_api_scheduled_changes` (`write`): Delete a scheduled changes workflow.
* `retrieve_scheduled_changes_environments_flags_projects_v2_api_scheduled_changes` (`read`): Get a list of scheduled changes that will be applied to the feature flag.
* `scheduled_changes_environments_flags_projects_v2_api_scheduled_changes` (`write`): Create scheduled changes for a feature flag. If the `ignoreConficts` query parameter is false and there are conflicts between these instructions and existing scheduled changes, the request will fail. If the parameter is true and there are conflicts, the request will succeed.

### Resource `api.v2.projects.flags.environments.workflows`:

- `create_environments_flags_projects_v2_api_workflows` (`write`): Create a workflow for a feature flag. You can create a workflow directly, or you can apply a template to create a new workflow.

### Creating a workflow

You can use the create workflow endpoint to create a workflow directly by adding a `stages` array to the request body.

For each stage, define the `name`, `conditions` when the stage should be executed, and `action` that describes the stage.

<details>
<summary>Click to expand example</summary>

_Example request body_

```json
{
  "name": "Progressive rollout starting in two days",
  "description": "Turn flag targeting on and increase feature rollout in 10% increments each day",
  "stages": [
    {
      "name": "10% rollout on day 1",
      "conditions": [
        {
          "kind": "schedule",
          "scheduleKind": "relative", // or "absolute"
          //  If "scheduleKind" is "absolute", set "executionDate";
          // "waitDuration" and "waitDurationUnit" will be ignored
          "waitDuration": 2,
          "waitDurationUnit": "calendarDay"
        },
        {
          "kind": "ld-approval",
          "notifyMemberIds": ["507f1f77bcf86cd799439011"],
          "notifyTeamKeys": ["team-key-123abc"]
        }
      ],
      "action": {
        "instructions": [
          {
            "kind": "turnFlagOn"
          },
          {
            "kind": "updateFallthroughVariationOrRollout",
            "rolloutWeights": {
              "452f5fb5-7320-4ba3-81a1-8f4324f79d49": 90000,
              "fc15f6a4-05d3-4aa4-a997-446be461345d": 10000
            }
          }
        ]
      }
    }
  ]
}
```

</details>

### Creating a workflow by applying a workflow template

You can also create a workflow by applying a workflow template. If you pass a valid workflow template key as the `templateKey` query parameter with the request, the API will attempt to create a new workflow with the stages defined in the workflow template with the corresponding key.

#### Applicability of stages

Templates are created in the context of a particular flag in a particular environment in a particular project. However, because workflows created from a template can be applied to any project, environment, and flag, some steps of the workflow may need to be updated in order to be applicable for the target resource.

You can pass a `dryRun` query parameter to tell the API to return a report of which steps of the workflow template are applicable in the target project/environment/flag, and which will need to be updated. When the `dryRun` query parameter is present the response body includes a `meta` property that holds a list of parameters that could potentially be inapplicable for the target resource. Each of these parameters will include a `valid` field. You will need to update any invalid parameters in order to create the new workflow. You can do this using the `parameters` property, which overrides the workflow template parameters.

#### Overriding template parameters

You can use the `parameters` property in the request body to tell the API to override the specified workflow template parameters with new values that are specific to your target project/environment/flag.

<details>
<summary>Click to expand example</summary>

_Example request body_

```json
{
  "name": "workflow created from my-template",
  "description": "description of my workflow",
  "parameters": [
    {
      "_id": "62cf2bc4cadbeb7697943f3b",
      "path": "/clauses/0/values",
      "default": {
        "value": ["updated-segment"]
      }
    },
    {
      "_id": "62cf2bc4cadbeb7697943f3d",
      "path": "/variationId",
      "default": {
        "value": "abcd1234-abcd-1234-abcd-1234abcd12"
      }
    }
  ]
}
```

</details>

If there are any steps in the template that are not applicable to the target resource, the workflow will not be created, and the `meta` property will be included in the response body detailing which parameters need to be updated.

- `retrieve_environments_flags_projects_v2_api_workflows` (`read`): Get a specific workflow by ID.
- `list_environments_flags_projects_v2_api_workflows` (`read`): Display workflows associated with a feature flag.
- `delete_environments_flags_projects_v2_api_workflows` (`write`): Delete a workflow from a feature flag.

### Resource `api.v2.projects.flags.release`:

- `create_flags_projects_v2_api_release` (`write`): Creates a release by adding a flag to a release pipeline
- `update_flags_projects_v2_api_release` (`write`): Updates the execution status of a phase of a release

### Resource `api.v2.projects.layers`:

- `create_projects_v2_api_layers` (`write`): Create a layer. Experiments running in the same layer are granted mutually-exclusive traffic.
- `update_projects_v2_api_layers` (`write`): Update a layer by adding, changing, or removing traffic reservations for experiments, or by changing layer name or description.
  Updating a layer uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating layers.

<details>
<summary>Click to expand instructions for <strong>updating layers</strong></summary>

#### updateName

Updates the layer name.

##### Parameters

- `name`: The new layer name.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateName",
      "name": "New name"
    }
  ]
}
```

#### updateDescription

Updates the layer description.

##### Parameters

- `description`: The new description.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateDescription",
      "description": "New description"
    }
  ]
}
```

#### updateExperimentReservation

Adds or updates a traffic reservation for an experiment in a layer.

##### Parameters

- `experimentKey`: The key of the experiment whose reservation you are adding to or updating in the layer.
- `reservationPercent`: The amount of traffic in the layer to reserve. Must be an integer. Zero is allowed until iteration start.

Here's an example:

```json
{
  "environmentKey": "production",
  "instructions": [
    {
      "kind": "updateExperimentReservation",
      "experimentKey": "exp-key",
      "reservationPercent": 10
    }
  ]
}
```

#### removeExperiment

Removes a traffic reservation for an experiment from a layer.

##### Parameters

- `experimentKey`: The key of the experiment whose reservation you want to remove from the layer.

Here's an example:

```json
{
  "environmentKey": "production",
  "instructions": [
    {
      "kind": "removeExperiment",
      "experimentKey": "exp-key"
    }
  ]
}
```

</details>
* `list_projects_v2_api_layers` (`read`): Get a collection of all layers for a project

### Resource `api.v2.projects.metric_groups`:

- `retrieve_projects_v2_api_metric_groups` (`read`): Get information for a single metric group from the specific project.

### Expanding the metric group response

LaunchDarkly supports two fields for expanding the "Get metric group" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with either or both of the following fields:

- `experiments` includes all experiments from the specific project that use the metric group
- `experimentCount` includes the number of experiments from the specific project that use the metric group

For example, `expand=experiments` includes the `experiments` field in the response.

- `update_projects_v2_api_metric_groups` (`write`): Patch a metric group by key. Updating a metric group uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes.
- `delete_projects_v2_api_metric_groups` (`write`): Delete a metric group by key.
- `metric_groups_projects_v2_api_metric_groups` (`write`): Create a new metric group in the specified project
- `retrieve_metric_groups_projects_v2_api_metric_groups` (`read`): Get a list of all metric groups for the specified project.

### Expanding the metric groups response

LaunchDarkly supports one field for expanding the "Get metric groups" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with the following field:

- `experiments` includes all experiments from the specific project that use the metric group

For example, `expand=experiments` includes the `experiments` field in the response.

### Filtering metric groups

The `filter` parameter supports the following operators: `contains`, `equals`, `anyOf`.

#### Supported fields and operators

You can only filter certain fields in metrics when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.

When you search for metrics, the `filter` parameter supports the following fields and operators:

| <div style="width:120px">Field</div> | Description                                                                                            | Supported operators |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------- |
| `experimentStatus`                   | The experiment's status. One of `not_started`, `running`, `stopped`, `started`.                        | `equals`            |
| `hasConnections`                     | Whether the metric group has connections to experiments or guarded rollouts. One of `true`, `false`.   | `equals`            |
| `kind`                               | The metric group kind. One of `funnel`, `standard`.                                                    | `equals`            |
| `maintainerIds`                      | The metric maintainer IDs.                                                                             | `anyOf`             |
| `maintainerTeamKey`                  | The metric maintainer team key.                                                                        | `equals`            |
| `query`                              | A "fuzzy" search across metric group key and name. Supply a string or list of strings to the operator. | `equals`            |

### Sorting metric groups

LaunchDarkly supports the following fields for sorting:

- `name` sorts by metric group name.
- `createdAt` sorts by the creation date of the metric group.
- `connectionCount` sorts by the number of connections to experiments the metric group has.

By default, the sort is in ascending order. Use `-` to sort in descending order. For example, `?sort=name` sorts the response by metric group name in ascending order, and `?sort=-name` sorts in descending order.

#### Sample query

`filter=experimentStatus equals 'not_started' and query equals 'metric name'`

### Resource `api.v2.projects.release_pipelines`:

- `retrieve_projects_v2_api_release_pipelines` (`read`): Get a release pipeline by key
- `update_projects_v2_api_release_pipelines` (`write`): Updates a release pipeline.
- `delete_projects_v2_api_release_pipelines` (`write`): Deletes a release pipeline.

You cannot delete the default release pipeline.

If you want to delete a release pipeline that is currently the default, create a second release pipeline and set it as the default. Then delete the first release pipeline. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`.

- `release_pipelines_projects_v2_api_release_pipelines` (`write`): Creates a new release pipeline.

The first release pipeline you create is automatically set as the default release pipeline for your project. To change the default release pipeline, use the [Update project](https://launchdarkly.com/docs/ld-docs/api/projects/patch-project) API to set the `defaultReleasePipelineKey`.

You can create up to 20 release pipelines per project.

- `retrieve_release_pipelines_projects_v2_api_release_pipelines` (`read`): Get all release pipelines for a project.

### Filtering release pipelines

LaunchDarkly supports the following fields for filters:

- `query` is a string that matches against the release pipeline `key`, `name`, and `description`. It is not case sensitive. For example: `?filter=query:examplePipeline`.

- `env` is a string that matches an environment key. For example: `?filter=env:production`.

* `retrieve_releases_projects_v2_api_release_pipelines` (`read`): Get details on the progression of all releases, across all flags, for a release pipeline

### Resource `api.v2.projects.ai_configs`:

- `retrieve_projects_v2_api_ai_configs` (`read`): Retrieve a specific AI Config by its key.
- `update_projects_v2_api_ai_configs` (`write`): Edit an existing AI Config.

The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.

Here's an example:

```
  {
    "description": "Example updated description",
    "tags": ["new-tag"]
  }
```

- `delete_projects_v2_api_ai_configs` (`write`): Delete an existing AI Config.
- `ai_configs_projects_v2_api_ai_configs` (`write`): Create a new AI Config within the given project.
- `retrieve_ai_configs_projects_v2_api_ai_configs` (`read`): Get a list of all AI Configs in the given project.
- `retrieve_metrics_projects_v2_api_ai_configs` (`read`): Retrieve usage metrics for an AI Config by config key.
- `retrieve_metrics_by_variation_projects_v2_api_ai_configs` (`read`): Retrieve usage metrics for an AI Config by config key, with results split by variation.

### Resource `api.v2.projects.ai_configs.variations`:

- `create_ai_configs_projects_v2_api_variations` (`write`): Create a new variation for a given AI Config.

The <code>model</code> in the request body requires a <code>modelName</code> and <code>parameters</code>, for example:

```
  "model": {
    "modelName": "claude-3-opus-20240229",
    "parameters": {
      "max_tokens": 1024
    }
  }
```

- `retrieve_ai_configs_projects_v2_api_variations` (`read`): Get an AI Config variation by key. The response includes all variation versions for the given variation key.
- `update_ai_configs_projects_v2_api_variations` (`write`): Edit an existing variation of an AI Config. This creates a new version of the variation.

The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.

Here's an example:

```
  {
    "messages": [
      {
        "role": "system",
        "content": "The new message"
      }
    ]
  }
```

- `delete_ai_configs_projects_v2_api_variations` (`write`): Delete a specific variation of an AI Config by config key and variation key.

### Resource `api.v2.projects.ai_configs.model_configs`:

- `retrieve_ai_configs_projects_v2_api_model_configs` (`read`): Get an AI model config by key.
- `delete_ai_configs_projects_v2_api_model_configs` (`write`): Delete an AI model config.
- `model_configs_ai_configs_projects_v2_api_model_configs` (`write`): Create an AI model config. You can use this in any variation for any AI Config in your project.
- `retrieve_model_configs_ai_configs_projects_v2_api_model_configs` (`read`): Get all AI model configs for a project.

### Resource `api.v2.projects.ai_configs.model_configs.restricted`:

- `create_model_configs_ai_configs_projects_v2_api_restricted` (`write`): Add AI models, by key, to the restricted list. Keys are included in the response from the [List AI model configs](https://launchdarkly.com/docs/api/ai-configs-beta/list-model-configs) endpoint.
- `delete_all_model_configs_ai_configs_projects_v2_api_restricted` (`write`): Remove AI models, by key, from the restricted list.

### Resource `api.v2.roles`:

- `create_v2_api_roles` (`write`): Create a new custom role
- `retrieve_v2_api_roles` (`read`): Get a single custom role by key or ID
- `update_v2_api_roles` (`write`): Update a single custom role. Updating a custom role uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>To add an element to the `policy` array, set the `path` to `/policy` and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array.
- `list_v2_api_roles` (`read`): Get a complete list of custom roles. Custom roles let you create flexible policies providing fine-grained access control to everything in LaunchDarkly, from feature flags to goals, environments, and teams. With custom roles, it's possible to enforce access policies that meet your exact workflow needs. Custom roles are available to customers on our enterprise plans. If you're interested in learning more about our enterprise plans, contact sales@launchdarkly.com.
- `delete_v2_api_roles` (`write`): Delete a custom role by key

### Resource `api.v2.segments`:

- `retrieve_v2_api_segments` (`read`): Get a single segment by key.<br/><br/>Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.
- `update_v2_api_segments` (`write`): Update a segment. The request body must be a valid semantic patch, JSON patch, or JSON merge patch. To learn more the different formats, read [Updates](https://launchdarkly.com/docs/api#updates).

### Using semantic patches on a segment

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

The body of a semantic patch request for updating segments requires an `environmentKey` in addition to `instructions` and an optional `comment`. The body of the request takes the following properties:

- `comment` (string): (Optional) A description of the update.
- `environmentKey` (string): (Required) The key of the LaunchDarkly environment.
- `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object.

### Instructions

Semantic patch requests support the following `kind` instructions for updating segments.

<details>
<summary>Click to expand instructions for <strong>updating segment details and settings</strong></summary>

#### addTags

Adds tags to the segment.

##### Parameters

- `values`: A list of tags to add.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addTags",
      "values": ["tag1", "tag2"]
    }
  ]
}
```

#### removeTags

Removes tags from the segment.

##### Parameters

- `values`: A list of tags to remove.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeTags",
      "values": ["tag1", "tag2"]
    }
  ]
}
```

#### updateName

Updates the name of the segment.

##### Parameters

- `value`: Name of the segment.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateName",
      "value": "Updated segment name"
    }
  ]
}
```

</details>

<details>
<summary>Click to expand instructions for <strong>updating segment individual targets</strong></summary>

#### addExcludedTargets

Adds context keys to the individual context targets excluded from the segment for the specified `contextKind`. Returns an error if this causes the same context key to be both included and excluded.

##### Parameters

- `contextKind`: The context kind the targets should be added to.
- `values`: List of keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addExcludedTargets",
      "contextKind": "org",
      "values": ["org-key-123abc", "org-key-456def"]
    }
  ]
}
```

#### addExcludedUsers

Adds user keys to the individual user targets excluded from the segment. Returns an error if this causes the same user key to be both included and excluded. If you are working with contexts, use `addExcludedTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addExcludedUsers",
      "values": ["user-key-123abc", "user-key-456def"]
    }
  ]
}
```

#### addIncludedTargets

Adds context keys to the individual context targets included in the segment for the specified `contextKind`. Returns an error if this causes the same context key to be both included and excluded.

##### Parameters

- `contextKind`: The context kind the targets should be added to.
- `values`: List of keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addIncludedTargets",
      "contextKind": "org",
      "values": ["org-key-123abc", "org-key-456def"]
    }
  ]
}
```

#### addIncludedUsers

Adds user keys to the individual user targets included in the segment. Returns an error if this causes the same user key to be both included and excluded. If you are working with contexts, use `addIncludedTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addIncludedUsers",
      "values": ["user-key-123abc", "user-key-456def"]
    }
  ]
}
```

#### removeExcludedTargets

Removes context keys from the individual context targets excluded from the segment for the specified `contextKind`.

##### Parameters

- `contextKind`: The context kind the targets should be removed from.
- `values`: List of keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeExcludedTargets",
      "contextKind": "org",
      "values": ["org-key-123abc", "org-key-456def"]
    }
  ]
}
```

#### removeExcludedUsers

Removes user keys from the individual user targets excluded from the segment. If you are working with contexts, use `removeExcludedTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeExcludedUsers",
      "values": ["user-key-123abc", "user-key-456def"]
    }
  ]
}
```

#### removeIncludedTargets

Removes context keys from the individual context targets included in the segment for the specified `contextKind`.

##### Parameters

- `contextKind`: The context kind the targets should be removed from.
- `values`: List of keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeIncludedTargets",
      "contextKind": "org",
      "values": ["org-key-123abc", "org-key-456def"]
    }
  ]
}
```

#### removeIncludedUsers

Removes user keys from the individual user targets included in the segment. If you are working with contexts, use `removeIncludedTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeIncludedUsers",
      "values": ["user-key-123abc", "user-key-456def"]
    }
  ]
}
```

</details>

<details>
<summary>Click to expand instructions for <strong>updating segment targeting rules</strong></summary>

#### addClauses

Adds the given clauses to the rule indicated by `ruleId`.

##### Parameters

- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
- `ruleId`: ID of a rule in the segment.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addClauses",
      "clauses": [
        {
          "attribute": "email",
          "negate": false,
          "op": "contains",
          "values": ["value1"]
        }
      ],
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
    }
  ]
}
```

#### addRule

Adds a new targeting rule to the segment. The rule may contain `clauses`.

##### Parameters

- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
- `description`: A description of the rule.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addRule",
      "clauses": [
        {
          "attribute": "email",
          "op": "contains",
          "negate": false,
          "values": ["@launchdarkly.com"]
        }
      ],
      "description": "Targeting rule for LaunchDarkly employees"
    }
  ]
}
```

#### addValuesToClause

Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the segment.
- `clauseId`: ID of a clause in that rule.
- `values`: Array of strings, case sensitive.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addValuesToClause",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
      "values": ["beta_testers"]
    }
  ]
}
```

#### removeClauses

Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.

##### Parameters

- `ruleId`: ID of a rule in the segment.
- `clauseIds`: Array of IDs of clauses in the rule.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeClauses",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauseIds": ["10a58772-3121-400f-846b-b8a04e8944ed", "36a461dc-235e-4b08-97b9-73ce9365873e"]
    }
  ]
}
```

#### removeRule

Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.

##### Parameters

- `ruleId`: ID of a rule in the segment.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeRule",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
    }
  ]
}
```

#### removeValuesFromClause

Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the segment.
- `clauseId`: ID of a clause in that rule.
- `values`: Array of strings, case sensitive.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeValuesFromClause",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
      "values": ["beta_testers"]
    }
  ]
}
```

#### reorderRules

Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules in the segment.

##### Parameters

- `ruleIds`: Array of IDs of all targeting rules in the segment.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "reorderRules",
      "ruleIds": ["a902ef4a-2faf-4eaf-88e1-ecc356708a29", "63c238d1-835d-435e-8f21-c8d5e40b2a3d"]
    }
  ]
}
```

#### updateClause

Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.

##### Parameters

- `ruleId`: ID of a rule in the segment.
- `clauseId`: ID of a clause in that rule.
- `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateClause",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "clauseId": "10c7462a-2062-45ba-a8bb-dfb3de0f8af5",
      "clause": {
        "contextKind": "user",
        "attribute": "country",
        "op": "in",
        "negate": false,
        "values": ["Mexico", "Canada"]
      }
    }
  ]
}
```

#### updateRuleDescription

Updates the description of the segment targeting rule.

##### Parameters

- `description`: The new human-readable description for this rule.
- `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the segment.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateRuleDescription",
      "description": "New rule description",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
    }
  ]
}
```

#### updateRuleRolloutAndContextKind

For a rule that includes a percentage of targets, updates the percentage and the context kind of the targets to include.

##### Parameters

- `ruleId`: The ID of a targeting rule in the segment that includes a percentage of targets.
- `weight`: The weight, in thousandths of a percent (0-100000).
- `contextKind`: The context kind.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "reorderRules",
      "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
      "weight": "20000",
      "contextKind": "device"
    }
  ]
}
```

</details>

<details>
<summary>Click to expand instructions for <strong>working with Big Segments</strong></summary>

A "big segment" is a segment that is either a synced segment, or a list-based segment with more than 15,000 entries that includes only one targeted context kind. LaunchDarkly uses different implementations for different types of segments so that all of your segments have good performance.

The following semantic patch instructions apply only to these [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments).

#### addBigSegmentExcludedTargets

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Adds context keys to the context targets excluded from the segment. Returns an error if this causes the same context key to be both included and excluded.

##### Parameters

- `values`: List of context keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addBigSegmentExcludedTargets",
      "values": ["org-key-123abc", "org-key-456def"]
    }
  ]
}
```

#### addBigSegmentIncludedTargets

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Adds context keys to the context targets included in the segment. Returns an error if this causes the same context key to be both included and excluded.

##### Parameters

- `values`: List of context keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addBigSegmentIncludedTargets",
      "values": ["org-key-123abc", "org-key-456def"]
    }
  ]
}
```

#### processBigSegmentImport

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Processes a segment import.

##### Parameters

- `importId`: The ID of the import. The import ID is returned in the `Location` header as part of the [Create big segment import](https://launchdarkly.com/docs/api/segments/create-big-segment-import) request.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "processBigSegmentImport",
      "importId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
    }
  ]
}
```

#### removeBigSegmentExcludedTargets

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Removes context keys from the context targets excluded from the segment.

##### Parameters

- `values`: List of context keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeBigSegmentExcludedTargets",
      "values": ["org-key-123abc", "org-key-456def"]
    }
  ]
}
```

#### removeBigSegmentIncludedTargets

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Removes context keys from the context targets included in the segment.

##### Parameters

- `values`: List of context keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeBigSegmentIncludedTargets",
      "values": ["org-key-123abc", "org-key-456def"]
    }
  ]
}
```

</details>

### Using JSON patches on a segment

If you do not include the header described above, you can use a [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.

For example, to update the description for a segment with a JSON patch, use the following request body:

```json
{
  "patch": [
    {
      "op": "replace",
      "path": "/description",
      "value": "new description"
    }
  ]
}
```

To update fields in the segment that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add the new entry to the beginning of the array. Use `/-` to add the new entry to the end of the array.

For example, to add a rule to a segment, use the following request body:

```json
{
  "patch": [
    {
      "op": "add",
      "path": "/rules/0",
      "value": {
        "clauses": [
          {
            "contextKind": "user",
            "attribute": "email",
            "op": "endsWith",
            "values": [".edu"],
            "negate": false
          }
        ]
      }
    }
  ]
}
```

To add or remove targets from segments, we recommend using semantic patch. Semantic patch for segments includes specific instructions for adding and removing both included and excluded targets.

- `delete_v2_api_segments` (`write`): Delete a segment.

### Resource `api.v2.segments.contexts`:

- `create_segments_v2_api_contexts` (`write`): Update context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.
- `retrieve_segments_v2_api_contexts` (`read`): Get the membership status (included/excluded) for a given context in this big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

### Resource `api.v2.segments.exports`:

- `create_segments_v2_api_exports` (`write`): Starts a new export process for a big segment. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.
- `retrieve_segments_v2_api_exports` (`read`): Returns information about a big segment export process. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.

### Resource `api.v2.segments.imports`:

- `create_segments_v2_api_imports` (`write`): Start a new import process for a big segment. This is an import for a list-based segment that can include more than 15,000 entries.
- `retrieve_segments_v2_api_imports` (`read`): Returns information about a big segment import process. This is the import of a list-based segment that can include more than 15,000 entries.

### Resource `api.v2.segments.users`:

- `create_segments_v2_api_users` (`write`): Update user context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.
- `retrieve_segments_v2_api_users` (`read`): > ### Contexts are now available
  > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

Get the membership status (included/excluded) for a given user in this big segment. This operation does not support standard segments.

### Resource `api.v2.segments.expiring_targets`:

- `retrieve_segments_v2_api_expiring_targets` (`read`): Get a list of a segment's context targets that are scheduled for removal.
- `update_segments_v2_api_expiring_targets` (`write`):
  Update expiring context targets for a segment. Updating a context target expiration uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.

### Instructions

Semantic patch requests support the following `kind` instructions for updating expiring context targets.

<details>
<summary>Click to expand instructions for <strong>updating expiring context targets</strong></summary>

#### addExpiringTarget

Schedules a date and time when LaunchDarkly will remove a context from segment targeting. The segment must already have the context as an individual target.

##### Parameters

- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.
- `contextKey`: The context key.
- `contextKind`: The kind of context being targeted.
- `value`: The date when the context should expire from the segment targeting, in Unix milliseconds.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addExpiringTarget",
      "targetType": "included",
      "contextKey": "user-key-123abc",
      "contextKind": "user",
      "value": 1754092860000
    }
  ]
}
```

#### updateExpiringTarget

Updates the date and time when LaunchDarkly will remove a context from segment targeting.

##### Parameters

- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.
- `contextKey`: The context key.
- `contextKind`: The kind of context being targeted.
- `value`: The new date when the context should expire from the segment targeting, in Unix milliseconds.
- `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn't match current version of the expiring target.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateExpiringTarget",
      "targetType": "included",
      "contextKey": "user-key-123abc",
      "contextKind": "user",
      "value": 1754179260000
    }
  ]
}
```

#### removeExpiringTarget

Removes the scheduled expiration for the context in the segment.

##### Parameters

- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.
- `contextKey`: The context key.
- `contextKind`: The kind of context being targeted.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeExpiringTarget",
      "targetType": "included",
      "contextKey": "user-key-123abc",
      "contextKind": "user"
    }
  ]
}
```

</details>

### Resource `api.v2.segments.expiring_user_targets`:

- `retrieve_segments_v2_api_expiring_user_targets` (`read`): > ### Contexts are now available
  > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

Get a list of a segment's user targets that are scheduled for removal.

- `update_segments_v2_api_expiring_user_targets` (`write`):
  > ### Contexts are now available
  >
  > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/patch-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

Update expiring user targets for a segment. Updating a user target expiration uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.

### Instructions

Semantic patch requests support the following `kind` instructions for updating expiring user targets.

<details>
<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>

#### addExpireUserTargetDate

Schedules a date and time when LaunchDarkly will remove a user from segment targeting.

##### Parameters

- `targetType`: A segment's target type, must be either `included` or `excluded`.
- `userKey`: The user key.
- `value`: The date when the user should expire from the segment targeting, in Unix milliseconds.

#### updateExpireUserTargetDate

Updates the date and time when LaunchDarkly will remove a user from segment targeting.

##### Parameters

- `targetType`: A segment's target type, must be either `included` or `excluded`.
- `userKey`: The user key.
- `value`: The new date when the user should expire from the segment targeting, in Unix milliseconds.
- `version`: The segment version.

#### removeExpireUserTargetDate

Removes the scheduled expiration for the user in the segment.

##### Parameters

- `targetType`: A segment's target type, must be either `included` or `excluded`.
- `userKey`: The user key.

</details>

### Resource `api.v2.teams`:

- `create_v2_api_teams` (`write`): Create a team. To learn more, read [Creating a team](https://launchdarkly.com/docs/home/account/create-teams).

### Expanding the teams response

LaunchDarkly supports four fields for expanding the "Create team" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `members` includes the total count of members that belong to the team.
- `roles` includes a paginated list of the custom roles that you have assigned to the team.
- `projects` includes a paginated list of the projects that the team has any write access to.
- `maintainers` includes a paginated list of the maintainers that you have assigned to the team.

For example, `expand=members,roles` includes the `members` and `roles` fields in the response.

- `retrieve_v2_api_teams` (`read`): Fetch a team by key.

### Expanding the teams response

LaunchDarkly supports several fields for expanding the "Get team" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `members` includes the total count of members that belong to the team.
- `roles` includes a paginated list of the custom roles that you have assigned to the team.
- `roleAttributes` includes a list of the role attributes that you have assigned to the team.
- `projects` includes a paginated list of the projects that the team has any write access to.
- `maintainers` includes a paginated list of the maintainers that you have assigned to the team.

For example, `expand=members,roles` includes the `members` and `roles` fields in the response.

- `update_v2_api_teams` (`write`): Perform a partial update to a team. Updating a team uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating teams. Several of the instructions require one or more member IDs as parameters. The member ID is returned as part of the [List account members](https://launchdarkly.com/docs/ld-docs/api/account-members/get-members) response. It is the `_id` field of each element in the `items` array.

<details>
<summary>Click to expand instructions for <strong>updating teams</strong></summary>

#### addCustomRoles

Adds custom roles to the team. Team members will have these custom roles granted to them.

##### Parameters

- `values`: List of custom role keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addCustomRoles",
      "values": ["example-custom-role"]
    }
  ]
}
```

#### addMembers

Adds members to the team.

##### Parameters

- `values`: List of member IDs to add.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addMembers",
      "values": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
    }
  ]
}
```

#### addPermissionGrants

Adds permission grants to members for the team. For example, a permission grant could allow a member to act as a team maintainer. A permission grant may have either an `actionSet` or a list of `actions` but not both at the same time. The members do not have to be team members to have a permission grant for the team.

##### Parameters

- `actionSet`: Name of the action set.
- `actions`: List of actions.
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addPermissionGrants",
      "actions": ["updateTeamName", "updateTeamDescription"],
      "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
    }
  ]
}
```

#### addRoleAttribute

Adds a role attribute to a team. Team members will have these role attribute values scoped for all custom roles granted to them.

##### Parameters

- `key`: The role attribute key to add.
- `values`: List of role attribute values for that key.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addRoleAttribute",
      "key": "testAttribute",
      "values": ["someNewValue", "someOtherNewValue"]
    }
  ]
}
```

#### removeCustomRoles

Removes custom roles from the team. The app will no longer grant these custom roles to the team members.

##### Parameters

- `values`: List of custom role keys.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeCustomRoles",
      "values": ["example-custom-role"]
    }
  ]
}
```

#### removeMembers

Removes members from the team.

##### Parameters

- `values`: List of member IDs to remove.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeMembers",
      "values": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
    }
  ]
}
```

#### removePermissionGrants

Removes permission grants from members for the team. A permission grant may have either an `actionSet` or a list of `actions` but not both at the same time. The `actionSet` and `actions` must match an existing permission grant.

##### Parameters

- `actionSet`: Name of the action set.
- `actions`: List of actions.
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removePermissionGrants",
      "actions": ["updateTeamName", "updateTeamDescription"],
      "memberIDs": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
    }
  ]
}
```

#### removeRoleAttribute

Removes a role attribute from the team.

##### Parameters

- `key`: The role attribute key to remove.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "removeRoleAttribute",
      "key": "testAttribute"
    }
  ]
}
```

#### replaceMembers

Replaces the existing members of the team with the new members.

##### Parameters

- `values`: List of member IDs of the new members.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "replaceMembers",
      "values": ["1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011"]
    }
  ]
}
```

#### replaceRoleAttributes

Replaces the existing role attributes for the team with new role attributes.

##### Parameters

- `values`: A map of role attribute keys to lists of role attribute values

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "replaceRoleAttributes",
      "values": {
        "testAttribute": ["someNewValue", "someOtherNewValue"],
        "projectRoleAttribute": ["project1", "project2"]
      }
    }
  ]
}
```

#### updateDescription

Updates the description of the team.

##### Parameters

- `value`: The new description.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateDescription",
      "value": "Updated team description"
    }
  ]
}
```

#### updateName

Updates the name of the team.

##### Parameters

- `value`: The new name.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateName",
      "value": "Updated team name"
    }
  ]
}
```

#### updateRoleAttribute

Updates a role attribute on the team. Any existing values for the given key will be replaced with the new values. Team members will have these role attribute values scoped for all custom roles granted to them.

##### Parameters

- `key`: The role attribute key to update.
- `values`: List of role attribute values for that key.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "updateRoleAttribute",
      "key": "testAttribute",
      "values": ["someNewValue", "someOtherNewValue"]
    }
  ]
}
```

</details>

### Expanding the teams response

LaunchDarkly supports four fields for expanding the "Update team" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `members` includes the total count of members that belong to the team.
- `roles` includes a paginated list of the custom roles that you have assigned to the team.
- `projects` includes a paginated list of the projects that the team has any write access to.
- `maintainers` includes a paginated list of the maintainers that you have assigned to the team.

For example, `expand=members,roles` includes the `members` and `roles` fields in the response.

- `list_v2_api_teams` (`read`): Return a list of teams.

By default, this returns the first 20 teams. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.

### Filtering teams

LaunchDarkly supports the following fields for filters:

- `query` is a string that matches against the teams' names and keys. It is not case-sensitive.
  - A request with `query:abc` returns teams with the string `abc` in their name or key.
- `nomembers` is a boolean that filters the list of teams who have 0 members
  - A request with `nomembers:true` returns teams that have 0 members
  - A request with `nomembers:false` returns teams that have 1 or more members

### Expanding the teams response

LaunchDarkly supports expanding several fields in the "List teams" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

- `members` includes the total count of members that belong to the team.
- `roles` includes a paginated list of the custom roles that you have assigned to the team.
- `roleAttributes` includes a list of the role attributes that you have assigned to the team.
- `projects` includes a paginated list of the projects that the team has any write access to.
- `maintainers` includes a paginated list of the maintainers that you have assigned to the team.

For example, `expand=members,maintainers` includes the `members` and `maintainers` fields in the response.

- `delete_v2_api_teams` (`write`): Delete a team by key. To learn more, read [Deleting teams](https://launchdarkly.com/docs/home/account/delete-teams).
- `members_v2_api_teams` (`write`): Add multiple members to an existing team by uploading a CSV file of member email addresses. Your CSV file must include email addresses in the first column. You can include data in additional columns, but LaunchDarkly ignores all data outside the first column. Headers are optional. To learn more, read [Manage team members](https://launchdarkly.com/docs/home/account/manage-teams#manage-team-members).

**Members are only added on a `201` response.** A `207` indicates the CSV file contains a combination of valid and invalid entries. A `207` results in no members being added to the team.

On a `207` response, if an entry contains bad input, the `message` field contains the row number as well as the reason for the error. The `message` field is omitted if the entry is valid.

Example `207` response:

```json
{
  "items": [
    {
      "status": "success",
      "value": "new-team-member@acme.com"
    },
    {
      "message": "Line 2: empty row",
      "status": "error",
      "value": ""
    },
    {
      "message": "Line 3: email already exists in the specified team",
      "status": "error",
      "value": "existing-team-member@acme.com"
    },
    {
      "message": "Line 4: invalid email formatting",
      "status": "error",
      "value": "invalid email format"
    }
  ]
}
```

| Message                                        | Resolution                                                                                                                    |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Empty row                                      | This line is blank. Add an email address and try again.                                                                       |
| Duplicate entry                                | This email address appears in the file twice. Remove the email from the file and try again.                                   |
| Email already exists in the specified team     | This member is already on your team. Remove the email from the file and try again.                                            |
| Invalid formatting                             | This email address is not formatted correctly. Fix the formatting and try again.                                              |
| Email does not belong to a LaunchDarkly member | The email address doesn't belong to a LaunchDarkly account member. Invite them to LaunchDarkly, then re-add them to the team. |

On a `400` response, the `message` field may contain errors specific to this endpoint.

Example `400` response:

```json
{
  "code": "invalid_request",
  "message": "Unable to process file"
}
```

| Message                                                       | Resolution                                                                                                                                      |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Unable to process file                                        | LaunchDarkly could not process the file for an unspecified reason. Review your file for errors and try again.                                   |
| File exceeds 25mb                                             | Break up your file into multiple files of less than 25mbs each.                                                                                 |
| All emails have invalid formatting                            | None of the email addresses in the file are in the correct format. Fix the formatting and try again.                                            |
| All emails belong to existing team members                    | All listed members are already on this team. Populate the file with member emails that do not belong to the team and try again.                 |
| File is empty                                                 | The CSV file does not contain any email addresses. Populate the file and try again.                                                             |
| No emails belong to members of your LaunchDarkly organization | None of the email addresses belong to members of your LaunchDarkly account. Invite these members to LaunchDarkly, then re-add them to the team. |

- `patch_all_v2_api_teams` (`write`): Perform a partial update to multiple teams. Updating teams uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating teams.

<details>
<summary>Click to expand instructions for <strong>updating teams</strong></summary>

#### addMembersToTeams

Add the members to teams.

##### Parameters

- `memberIDs`: List of member IDs to add.
- `teamKeys`: List of teams to update.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addMembersToTeams",
      "memberIDs": ["1234a56b7c89d012345e678f"],
      "teamKeys": ["example-team-1", "example-team-2"]
    }
  ]
}
```

#### addAllMembersToTeams

Add all members to the team. Members that match any of the filters are **excluded** from the update.

##### Parameters

- `teamKeys`: List of teams to update.
- `filterLastSeen`: (Optional) A JSON object with one of the following formats:
  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.
  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.
  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.
- `filterQuery`: (Optional) A string that matches against the members' emails and names. It is not case sensitive.
- `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`.
- `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive.
- `ignoredMemberIDs`: (Optional) A list of member IDs.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addAllMembersToTeams",
      "teamKeys": ["example-team-1", "example-team-2"],
      "filterLastSeen": { "never": true }
    }
  ]
}
```

</details>
* `retrieve_maintainers_v2_api_teams` (`read`): Fetch the maintainers that have been assigned to the team. To learn more, read [Managing team maintainers](https://launchdarkly.com/docs/home/account/team-maintainers).
* `retrieve_roles_v2_api_teams` (`read`): Fetch the custom roles that have been assigned to the team. To learn more, read [Managing team permissions](https://launchdarkly.com/docs/home/account/team-permissions).

### Resource `api.v2.templates`:

- `create_v2_api_templates` (`write`): Create a template for a feature flag workflow
- `list_v2_api_templates` (`read`): Get workflow templates belonging to an account, or can optionally return templates_endpoints.workflowTemplateSummariesListingOutputRep when summary query param is true
- `delete_v2_api_templates` (`write`): Delete a workflow template

### Resource `api.v2.tokens`:

- `create_v2_api_tokens` (`write`): Create a new access token.
- `retrieve_v2_api_tokens` (`read`): Get a single access token by ID.
- `update_v2_api_tokens` (`write`): Update an access token's settings. Updating an access token uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `list_v2_api_tokens` (`read`): Fetch a list of all access tokens.
- `delete_v2_api_tokens` (`write`): Delete an access token by ID.
- `reset_v2_api_tokens` (`write`): Reset an access token's secret key with an optional expiry time for the old key.

### Resource `api.v2.usage`:

- `retrieve_v2_api_usage` (`read`): Get time-series arrays of the number of times a flag is evaluated, broken down by the variation that resulted from that evaluation. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
- `retrieve_data_export_events_v2_api_usage` (`read`): Get a time-series array of the number of monthly data export events from your account. The granularity is always daily, with a maximum of 31 days.
- `retrieve_experimentation_keys_v2_api_usage` (`read`): Get a time-series array of the number of monthly experimentation keys from your account. The granularity is always daily, with a maximum of 31 days.
- `retrieve_experimentation_units_v2_api_usage` (`read`): Get a time-series array of the number of monthly experimentation units from your account. The granularity is always daily, with a maximum of 31 days.
- `retrieve_service_connections_v2_api_usage` (`read`): Get a time-series array of the number of monthly service connections from your account. The granularity is always daily, with a maximum of 31 days.

### Resource `api.v2.usage.mau`:

- `list_usage_v2_api_mau` (`read`): Get a time-series array of the number of monthly active users (MAU) seen by LaunchDarkly from your account. The granularity is always daily.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).
- `retrieve_bycategory_usage_v2_api_mau` (`read`): Get time-series arrays of the number of monthly active users (MAU) seen by LaunchDarkly from your account, broken down by the category of users. The category is either `browser`, `mobile`, or `backend`.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).
- `retrieve_sdks_usage_v2_api_mau` (`read`): Get a list of SDKs. These are all of the SDKs that have connected to LaunchDarkly by monthly active users (MAU) in the requested time period.<br/><br/>Endpoints for retrieving monthly active users (MAU) do not return information about active context instances. After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should not rely on this endpoint. To learn more, read [Account usage metrics](https://launchdarkly.com/docs/home/account/metrics).

### Resource `api.v2.usage.streams`:

- `retrieve_usage_v2_api_streams` (`read`): Get a time-series array of the number of streaming connections to LaunchDarkly in each time period. The granularity of the data depends on the age of the data requested. If the requested range is within the past two hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
- `retrieve_bysdkversion_usage_v2_api_streams` (`read`): Get multiple series of the number of streaming connections to LaunchDarkly in each time period, separated by SDK type and version. Information about each series is in the metadata array. The granularity of the data depends on the age of the data requested. If the requested range is within the past 2 hours, minutely data is returned. If it is within the last two days, hourly data is returned. Otherwise, daily data is returned.
- `retrieve_sdkversions_usage_v2_api_streams` (`read`): Get a list of SDK version objects, which contain an SDK name and version. These are all of the SDKs that have connected to LaunchDarkly from your account in the past 60 days.

### Resource `api.v2.users`:

- `retrieve_v2_api_users` (`read`): > ### Use contexts instead
  > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/get-context-instances) instead of this endpoint.

Get a user by key. The `user` object contains all attributes sent in `variation` calls for that key.

- `delete_v2_api_users` (`write`): > ### Use contexts instead
  > After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Delete context instances](https://launchdarkly.com/docs/ld-docs/api/contexts/delete-context-instances) instead of this endpoint.

Delete a user by key.

### Resource `api.v2.users.flags`:

- `retrieve_users_v2_api_flags` (`read`): Get a single flag setting for a user by flag key. <br /><br />The `_value` is the flag variation that the user receives. The `setting` indicates whether you've explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled.
- `update_users_v2_api_flags` (`write`): Enable or disable a feature flag for a user based on their key.

Omitting the `setting` attribute from the request body, or including a `setting` of `null`, erases the current setting for a user.

If you previously patched the flag, and the patch included the user's data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the user's key before, it calculates the flag values based on the user key alone.

- `list_users_v2_api_flags` (`read`): Get the current flag settings for a given user. <br /><br />The `_value` is the flag variation that the user receives. The `setting` indicates whether you've explicitly targeted a user to receive a particular variation. For example, if you have turned off a feature flag for a user, this setting will be `false`. The example response indicates that the user `Abbie_Braun` has the `sort.order` flag enabled and the `alternate.page` flag disabled, and that the user has not been explicitly targeted to receive a particular variation.

### Resource `api.v2.users.expiring_user_targets`:

- `retrieve_users_v2_api_expiring_user_targets` (`read`): Get a list of flags for which the given user is scheduled for removal.
- `update_users_v2_api_expiring_user_targets` (`write`): Schedule the specified user for removal from individual targeting on one or more flags. The user must already be individually targeted for each flag.

You can add, update, or remove a scheduled removal date. You can only schedule a user for removal on a single variation per flag.

Updating an expiring target uses the semantic patch format. To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating expiring user targets.

<details>
<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>

#### addExpireUserTargetDate

Adds a date and time that LaunchDarkly will remove the user from the flag's individual targeting.

##### Parameters

- `flagKey`: The flag key
- `variationId`: ID of a variation on the flag
- `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag.

#### updateExpireUserTargetDate

Updates the date and time that LaunchDarkly will remove the user from the flag's individual targeting.

##### Parameters

- `flagKey`: The flag key
- `variationId`: ID of a variation on the flag
- `value`: The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual targeting for this flag.
- `version`: The version of the expiring user target to update. If included, update will fail if version doesn't match current version of the expiring user target.

#### removeExpireUserTargetDate

Removes the scheduled removal of the user from the flag's individual targeting. The user will remain part of the flag's individual targeting until explicitly removed, or until another removal is scheduled.

##### Parameters

- `flagKey`: The flag key
- `variationId`: ID of a variation on the flag

</details>

### Resource `api.v2.webhooks`:

- `create_v2_api_webhooks` (`write`): Create a new webhook.
- `retrieve_v2_api_webhooks` (`read`): Get a single webhook by ID.
- `update_v2_api_webhooks` (`write`): Update a webhook's settings. Updating webhook settings uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `list_v2_api_webhooks` (`read`): Fetch a list of all webhooks.
- `delete_v2_api_webhooks` (`write`): Delete a webhook by ID.

### Resource `api.v2.announcements`:

- `create_v2_api_announcements` (`write`): Create an announcement
- `update_v2_api_announcements` (`write`): Update an announcement
- `list_v2_api_announcements` (`read`): Get announcements
- `delete_v2_api_announcements` (`write`): Delete an announcement

### Resource `api.v2.engineering_insights`:

- `deployment_events_v2_api_engineering_insights` (`write`): Create deployment event
- `retrieve_flag_events_v2_api_engineering_insights` (`read`): Get a list of flag events

### Expanding the flag event collection response

LaunchDarkly supports expanding the flag event collection response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `experiments` includes details on all of the experiments run on each flag

For example, use `?expand=experiments` to include the `experiments` field in the response. By default, this field is **not** included in the response.

- `retrieve_pull_requests_v2_api_engineering_insights` (`read`): Get a list of pull requests

### Expanding the pull request collection response

LaunchDarkly supports expanding the pull request collection response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `deployments` includes details on all of the deployments associated with each pull request
- `flagReferences` includes details on all of the references to flags in each pull request
- `leadTime` includes details about the lead time of the pull request for each stage

For example, use `?expand=deployments` to include the `deployments` field in the response. By default, this field is **not** included in the response.

### Resource `api.v2.engineering_insights.charts`:

- `retrieve_lead_time_engineering_insights_v2_api_charts` (`read`): Get lead time chart data. The engineering insights UI displays lead time data in the [lead time metric view](https://launchdarkly.com/docs/home/observability/lead-time).

### Resource `api.v2.engineering_insights.charts.deployments`:

- `retrieve_frequency_charts_engineering_insights_v2_api_deployments` (`read`): Get deployment frequency chart data. Engineering insights displays deployment frequency data in the [deployment frequency metric view](https://launchdarkly.com/docs/home/observability/deployments).

### Expanding the chart response

LaunchDarkly supports expanding the chart response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `metrics` includes details on the metrics related to deployment frequency

For example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response.

### Resource `api.v2.engineering_insights.charts.flags`:

- `retrieve_stale_charts_engineering_insights_v2_api_flags` (`read`): Get stale flags chart data. Engineering insights displays stale flags data in the [flag health metric view](https://launchdarkly.com/docs/home/observability/flag-health).

### Expanding the chart response

LaunchDarkly supports expanding the chart response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `metrics` includes details on the metrics related to stale flags

For example, use `?expand=metrics` to include the `metrics` field in the response. By default, this field is **not** included in the response.

- `retrieve_status_charts_engineering_insights_v2_api_flags` (`read`): Get flag status chart data. To learn more, read [Flag statuses](https://launchdarkly.com/docs/home/observability/flag-health#flag-statuses).

### Resource `api.v2.engineering_insights.charts.releases`:

- `retrieve_frequency_charts_engineering_insights_v2_api_releases` (`read`): Get release frequency chart data. Engineering insights displays release frequency data in the [release frequency metric view](https://launchdarkly.com/docs/home/observability/releases).

### Resource `api.v2.engineering_insights.deployments`:

- `retrieve_engineering_insights_v2_api_deployments` (`read`): Get a deployment by ID.

The deployment ID is returned as part of the [List deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments) response. It is the `id` field of each element in the `items` array.

### Expanding the deployment response

LaunchDarkly supports expanding the deployment response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `pullRequests` includes details on all of the pull requests associated with each deployment
- `flagReferences` includes details on all of the references to flags in each deployment

For example, use `?expand=pullRequests` to include the `pullRequests` field in the response. By default, this field is **not** included in the response.

- `update_engineering_insights_v2_api_deployments` (`write`): Update a deployment by ID. Updating a deployment uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).<br/><br/>The deployment ID is returned as part of the [List deployments](https://launchdarkly.com/docs/api/insights-deployments-beta/get-deployments) response. It is the `id` field of each element in the `items` array.
- `list_engineering_insights_v2_api_deployments` (`read`): Get a list of deployments

### Expanding the deployment collection response

LaunchDarkly supports expanding the deployment collection response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `pullRequests` includes details on all of the pull requests associated with each deployment
- `flagReferences` includes details on all of the references to flags in each deployment

For example, use `?expand=pullRequests` to include the `pullRequests` field in the response. By default, this field is **not** included in the response.

### Resource `api.v2.engineering_insights.insights`:

- `group_engineering_insights_v2_api_insights` (`write`): Create insight group
- `retrieve_scores_engineering_insights_v2_api_insights` (`read`): Return insights scores, based on the given parameters. This data is also used in engineering insights metrics views.

### Resource `api.v2.engineering_insights.insights.groups`:

- `retrieve_insights_engineering_insights_v2_api_groups` (`read`): Get insight group

### Expanding the insight group response

LaunchDarkly supports expanding the insight group response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `scores` includes details on all of the scores used in the engineering insights metrics views for this group
- `environment` includes details on each environment associated with this group

For example, use `?expand=scores` to include the `scores` field in the response. By default, this field is **not** included in the response.

- `update_insights_engineering_insights_v2_api_groups` (`write`): Update an insight group. Updating an insight group uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).
- `list_insights_engineering_insights_v2_api_groups` (`read`): List groups for which you are collecting insights

### Expanding the insight groups collection response

LaunchDarkly supports expanding the insight groups collection response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `scores` includes details on all of the scores used in the engineering insights metrics views for each group
- `environment` includes details on each environment associated with each group
- `metadata` includes counts of the number of insight groups with particular indicators, such as "excellent," "good," "fair," and so on.

For example, use `?expand=scores` to include the `scores` field in the response. By default, this field is **not** included in the response.

- `delete_insights_engineering_insights_v2_api_groups` (`write`): Delete insight group

### Resource `api.v2.engineering_insights.repositories`:

- `list_engineering_insights_v2_api_repositories` (`read`): Get a list of repositories

### Expanding the repository collection response

LaunchDarkly supports expanding the repository collection response to include additional fields.

To expand the response, append the `expand` query parameter and include the following:

- `projects` includes details on all of the LaunchDarkly projects associated with each repository

For example, use `?expand=projects` to include the `projects` field in the response. By default, this field is **not** included in the response.

### Resource `api.v2.engineering_insights.repositories.projects`:

- `create_repositories_engineering_insights_v2_api_projects` (`write`): Associate repositories with projects
- `delete_repositories_engineering_insights_v2_api_projects` (`write`): Remove repository project association
