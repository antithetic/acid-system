# Acid Systems Monorepo

This repository is the monorepo for **Acid Systems**.

## Structure

This project is managed as a monorepo. Key characteristics:

- Uses **pnpm** as the package manager (`pnpm@11.3.0`).
- Managed with [Turborepo](https://turbo.build/) for running scripts across packages.
- [Prettier](https://prettier.io/) is used for code formatting.
- Includes a main application in `apps/acid.systems`.

### Scripts

You can run the following scripts from the root:

- `pnpm dev`: Start development for all packages.
- `pnpm build`: Build all packages.
- `pnpm format`: Format codebase with Prettier.
- `pnpm lint`: Lint the codebase with [oxlint](https://ota-meshi.github.io/oxlint/).

## Getting Started

1. **Install dependencies:**

   ```sh
   pnpm install
   ```

2. **Start development:**

```sh
pnpm dev
```

## Project Conventions

- Keep environment variables in `.env` files (see `.gitignore`, these are not versioned).
- All output and cache directories are ignored via `.gitignore`.

## Directory Overview

- `/apps/acid.systems` — Main application.
- `/node_modules`, `/dist`, etc. are git-ignored as per conventional monorepo setup.

## License

This project is for internal use at Acid Systems.

---
