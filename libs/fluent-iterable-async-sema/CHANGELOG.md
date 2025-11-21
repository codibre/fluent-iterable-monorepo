# Changelog

## [0.1.1](///compare/@fluent-iterable/async-sema@0.1.0...@fluent-iterable/async-sema@0.1.1) (2025-11-21)
### Fixes:

<details>
<summary>fixing concurrency drain</summary>


> Drain wasn't been called, so,
> process could end before everything ended.
> Fixed it



[View commit `c4887cd`](https://github.com/codibre/fluent-iterable-monorepo/commit/c4887cd)


</details>

## [0.1.0](https://github.com/codibre/fluent-iterable-monorepo/compare/...@fluent-iterable/async-sema@0.1.0) (2025-11-13)
### Features:

<details>
<summary>**release:** first release</summary>


> - Add fluent-iterable monorepo scaffolding and shared tooling
>   - pnpm + turbo workspace setup
>   - Jest, ESLint, Prettier, commitlint configured
> - Add package: @fluent-iterable/async-sema
>   - Integration with async-sema that registers `runConcurrently` for fluent and fluentAsync iterables
>   - Includes unit tests verifying semaphore concurrency and behavior with variable-duration tasks
>   - README for package with usage examples and testing instructions
> - Update root README to document fluent-iterable focus, contributing guidelines and developer workflow
> - Fix package metadata and repository links for monorepo and subpackages
> - Replace placeholder keywords with repo-relevant keywords

> Notes:
> - Version bumped to 0.1.0 for initial public release candidate.
> - Releases are driven by conventional commits; follow the commit format for future automatic changelog/versioning.
> - CI should run full test and lint pipelines; ensure CI badges and publish steps are configured if you intend to publish to npm.



[View commit `313db2c`](https://github.com/codibre/fluent-iterable-monorepo/commit/313db2c)


</details>
