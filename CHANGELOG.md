# Changelog

## 0.1.0-alpha.1 (2025-07-11)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/akmjenkins/ld-mcp-server/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([2ef3338](https://github.com/akmjenkins/ld-mcp-server/commit/2ef333859efcc94ddf19e3f739ed8c0661a62f02))
* **mcp:** fallback for void-typed methods ([84e4e0d](https://github.com/akmjenkins/ld-mcp-server/commit/84e4e0d9d8e8ae5f08dbdd013281373d8a09f431))
* **mcp:** implement support for binary responses ([f9c6d47](https://github.com/akmjenkins/ld-mcp-server/commit/f9c6d473c486d98c229aff3fca4d6244ef6620b9))
* **mcp:** include http information in tools ([3c27d47](https://github.com/akmjenkins/ld-mcp-server/commit/3c27d47151991005255141f54dc55fb283ddfb37))
* **mcp:** set X-Stainless-MCP header ([e28b81a](https://github.com/akmjenkins/ld-mcp-server/commit/e28b81aaaef8ac27e612e5f992e3675b2d7111c5))
* **mcp:** support filtering tool results by a jq expression ([f624699](https://github.com/akmjenkins/ld-mcp-server/commit/f624699562e81445dabd6c392a50e2a085e1995a))
* **mcp:** support initializing the server with an "environment" ([8c28c06](https://github.com/akmjenkins/ld-mcp-server/commit/8c28c0641417fdff1a58b6a4dae62c5240792784))


### Bug Fixes

* **client:** explicitly copy fetch in withOptions ([49f01a9](https://github.com/akmjenkins/ld-mcp-server/commit/49f01a9e31381ef1c68741f8068efba542c49e30))
* **client:** get fetchOptions type more reliably ([71ff094](https://github.com/akmjenkins/ld-mcp-server/commit/71ff09490c5507f8b3286fa70a8aeb292a4d04f0))
* compat with more runtimes ([7629d89](https://github.com/akmjenkins/ld-mcp-server/commit/7629d895d1246c1ab10143ee097261f7f36f6b91))
* **mcp:** fix cursor schema transformation issue with recursive references ([98133de](https://github.com/akmjenkins/ld-mcp-server/commit/98133de5d0f36a7bdaa9b4d9756e59e93e018839))
* **mcp:** include description in dynamic tool search ([3c817bc](https://github.com/akmjenkins/ld-mcp-server/commit/3c817bcb84cdc7e65ae474419ffa4428c05d9279))
* **mcp:** relax input type for asTextContextResult ([b902b23](https://github.com/akmjenkins/ld-mcp-server/commit/b902b237bae1dc7ddcb4784c41aa8c1b36a788b4))
* publish script — handle NPM errors correctly ([5727243](https://github.com/akmjenkins/ld-mcp-server/commit/5727243192fa7916dd36cd5739dcd20ca39d1008))


### Chores

* add docs to RequestOptions type ([a819583](https://github.com/akmjenkins/ld-mcp-server/commit/a819583659dcde165383df3b396b3ca9f37fb1cd))
* adjust eslint.config.mjs ignore pattern ([5c2e442](https://github.com/akmjenkins/ld-mcp-server/commit/5c2e442a787661c6e9607aad56c4adb5d94e09e9))
* **api:** mark some methods as deprecated ([2979a33](https://github.com/akmjenkins/ld-mcp-server/commit/2979a33137ed55a3c1ba909044524c918c2c9220))
* avoid type error in certain environments ([9e05712](https://github.com/akmjenkins/ld-mcp-server/commit/9e0571239c35538373e3e5edb9a6f7893994206b))
* change publish docs url ([2118a05](https://github.com/akmjenkins/ld-mcp-server/commit/2118a05d8a90416c2f963b4b64066842a3a6a282))
* **ci:** enable for pull requests ([9b1ca9a](https://github.com/akmjenkins/ld-mcp-server/commit/9b1ca9aece27ce4530f8726338ff15395d446d1d))
* **ci:** only run for pushes and fork pull requests ([c4c7461](https://github.com/akmjenkins/ld-mcp-server/commit/c4c746156882b3e8c8879777f8af6c5e8f0a9fd6))
* **client:** improve path param validation ([ac1eaa9](https://github.com/akmjenkins/ld-mcp-server/commit/ac1eaa946f1bfd7d669d3e204cdbfbf5ea2b09f1))
* **client:** refactor imports ([e83f84e](https://github.com/akmjenkins/ld-mcp-server/commit/e83f84e8a67ffcd919eb323b17a0b56617ce7ece))
* configure new SDK language ([f1ac3d1](https://github.com/akmjenkins/ld-mcp-server/commit/f1ac3d1b83bb61afe1771d95d425e946e951f2ee))
* **deps:** bump eslint-plugin-prettier ([b553d80](https://github.com/akmjenkins/ld-mcp-server/commit/b553d807bc63cdbc84e90d95944a259957c8791c))
* **docs:** grammar improvements ([4f3969a](https://github.com/akmjenkins/ld-mcp-server/commit/4f3969af64ac27dc2839823aa52ba11a88fa5198))
* **docs:** use top-level-await in example snippets ([69de98d](https://github.com/akmjenkins/ld-mcp-server/commit/69de98d432d7358068894a5f4ff5282e4c80bee1))
* improve docs for MCP servers ([7a909bb](https://github.com/akmjenkins/ld-mcp-server/commit/7a909bb93e7e39c927bb96d106fe033e63d2006d))
* improve publish-npm script --latest tag logic ([91cc8d4](https://github.com/akmjenkins/ld-mcp-server/commit/91cc8d4ce293bdd8098e9c591563e485ed73df20))
* **internal:** add pure annotations, make base APIResource abstract ([d842287](https://github.com/akmjenkins/ld-mcp-server/commit/d842287260872220577c2b6e790025d73750dd5a))
* **internal:** codegen related update ([dff5707](https://github.com/akmjenkins/ld-mcp-server/commit/dff57071a084c75c45762e333668ffab5e8a8bfa))
* **internal:** fix readablestream types in node 20 ([a49bcbe](https://github.com/akmjenkins/ld-mcp-server/commit/a49bcbe7d2633df7029948d1ab604b542da6597c))
* **internal:** update jest config ([02145d9](https://github.com/akmjenkins/ld-mcp-server/commit/02145d9890c3e5960307a162ab4b8ce64627ba07))
* make some internal functions async ([ebbc561](https://github.com/akmjenkins/ld-mcp-server/commit/ebbc561b6d539782c08efcf97d3dab4eecf590c3))
* **mcp:** provides high-level initMcpServer function and exports known clients ([8ec3344](https://github.com/akmjenkins/ld-mcp-server/commit/8ec334496156d5afac2c1e4f05a0a97276128494))
* **mcp:** remove duplicate assignment ([c857b56](https://github.com/akmjenkins/ld-mcp-server/commit/c857b562a8e04868a41757c4ef1ccb4b476aaf32))
* **readme:** update badges ([7a0e1ad](https://github.com/akmjenkins/ld-mcp-server/commit/7a0e1adf0fe6a10b221fea921a83745ea1a89544))
* **readme:** use better example snippet for undocumented params ([e4a9e94](https://github.com/akmjenkins/ld-mcp-server/commit/e4a9e94a8470b67800339dc0163c628960a8a1de))
* update SDK settings ([f866a6a](https://github.com/akmjenkins/ld-mcp-server/commit/f866a6aed3a050fb479fe69eb317f6e4785edf83))


### Refactors

* **types:** replace Record with mapped types ([3b1fab1](https://github.com/akmjenkins/ld-mcp-server/commit/3b1fab1a6e90fc602ca45967d61549e52e3908a4))
