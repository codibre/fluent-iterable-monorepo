
# fluent-iterable-monorepo

This monorepo hosts packages that extend and integrate with the `@codibre/fluent-iterable` ecosystem. It contains small, focused utilities and integrations that make working with synchronous and asynchronous iterables more productive (concurrency helpers, adapters and small runtime utilities).

## Overview

The repository is structured as a classic monorepo with lightweight packages under `libs/`. Each package is responsible for a small, well-defined area of functionality. The goal is to keep code modular, tests isolated, and developer tooling consistent across packages.

Key principles:
- Small, focused packages under `libs/`
- Shared tooling and configuration at the repository root
- Fast builds and scoped scripts using Turbo and pnpm

## Packages

Top-level packages live under `libs/`. Examples include integrations such as:

- `libs/fluent-iterable-async-sema` — `async-sema` integration that adds `runConcurrently` to fluent iterables.
- Other packages may provide helpers, adapters, or higher-level APIs that operate on iterables.

Each package should include its own `package.json`, `src/`, `test/` and a README describing package-specific usage and API.

## Monorepo tooling

This repo uses a familiar toolchain to speed up development:

- Package manager: pnpm (workspace-aware)
- Build system: Turbo (turbo.json)
- Testing: Jest
- Linting: ESLint (+ Prettier)
- Commit validation: commitlint
- CI: GitHub Actions (recommended)

Shared configuration files live in the repository root. Individual packages may extend or override configs for package-specific needs.

## Getting started

Prerequisites:

- Node.js (current LTS or >= 18 recommended)
- pnpm >= 6
- Git

Quick setup:

```bash
# clone
git clone https://github.com/codibre/fluent-iterable-monorepo.git
cd fluent-iterable-monorepo

# install dependencies
pnpm install
```

Run tests for all packages:

```bash
pnpm test
```

Build all packages:

```bash
pnpm build
```

Lint everything:

```bash
pnpm lint
pnpm lint:fix   # auto-fix common issues
```

To operate on a single package use pnpm filters. Example (run tests only for async-sema package):

```bash
pnpm --filter @fluent-iterable/async-sema test
```

## Development workflow and tips

- Keep changes focused per PR: prefer small, reviewable commits.
- Use conventional commits to allow automated changelog/versioning tools to work well (feat/fix/docs/test/chore/etc.).
- Don’t worry about formatting while coding — run `pnpm lint:fix` before committing or rely on pre-commit hooks.
- Add tests for new features and bug fixes. Follow Arrange/Act/Assert pattern in tests.

### Running a single package locally

From the repository root you can run package-specific scripts. Example:

```bash
pnpm --filter @fluent-iterable/async-sema dev
```

Check the package `package.json` for available scripts.

## Contributing

We welcome contributions. Here's a short guide to get your changes accepted quickly:

1. Fork the repository.
2. Create a descriptive branch (use a type prefix):

```bash
git checkout -b feat/your-feature-name
```

3. Install dependencies and run the test suite:

```bash
pnpm install
pnpm test
```

4. Make changes, add tests and documentation. Keep commits small and meaningful.

5. Lint and format:

```bash
pnpm lint
pnpm lint:fix
```

6. Commit using Conventional Commits format, e.g.:

```bash
git add .
git commit -m "feat(async-sema): add runConcurrently extension"
```

7. Push your branch and open a Pull Request. In the PR description include:

- what the change does
- why it's needed
- any migration or breaking-change notes
- links to related issues (if applicable)

### Pull request checklist

- [ ] Tests pass locally
- [ ] New functionality has tests
- [ ] Code is linted and formatted
- [ ] Documentation/README updated if applicable
- [ ] Commits follow conventional commit format

## Package publishing and CI

The repository is set up for automated CI and publishing. Typical CI jobs should run:

1. Install deps
2. Build packages (turbo)
3. Run tests
4. Lint
5. Publish changed packages (when merging to main)

Publishing in this repo is automated when semantic commits determine a version bump; ensure commit messages correctly reflect the change type.

## Where to look next

- Package source: `libs/fluent-iterable-async-sema/src`
- Package tests: `libs/fluent-iterable-async-sema/test`
- Shared configs: `package.json`, `pnpm-workspace.yaml`, `turbo.json`, `commitlint.config.js`

## License

This repository uses the MIT license — see the `LICENSE` file for full text.

## Questions or support

Open issues on GitHub or contact the maintainers via repository discussions.

---

Built with care for fast, consistent tooling and collaborative development.

