Project development guidelines (Next.js 15 / React 19 / Tailwind v4)

This document captures project-specific knowledge to help future contributors be productive quickly. It focuses on the actual tooling and conventions present in this repository.

1) Build and configuration

- Runtime and package versions
  - Next.js: 15.5.4 (App Router, ESM)
  - React / React DOM: 19.1.0
  - ESLint: 9 (Flat config)
  - Tailwind CSS: v4 with PostCSS plugin (@tailwindcss/postcss)
  - Node: The project is compatible with Node 18+; CI/dev here used Node 22 successfully.

- Scripts (package.json)
  - dev: next dev --turbopack
  - build: next build --turbopack
  - start: next start
  - lint: eslint

- ESM everywhere
  - The repository uses ESM modules (.mjs, import/export). Avoid CommonJS require/module.exports in new code to prevent mixed-module issues.

- Linting
  - Flat config at eslint.config.mjs extends next/core-web-vitals and ignores build artifacts (.next, out, build) and node_modules.
  - Run: npm run lint
  - For editor integration, ensure ESLint v9+ with Flat Config support.

- Styling
  - Tailwind v4 via PostCSS with plugin configured in postcss.config.mjs. No tailwind.config.js by default (v4 uses a zero-config approach). Add config only if you need to customize design tokens, presets, or content scanning.

- App Router layout
  - Source lives under app/. The entry page is app/page.js. Follow Next App Router conventions for routing, layouts, and server/client components.

- Next config
  - Minimal next.config.mjs (default). If you enable experimental features, prefer guarded feature flags and comments documenting why they were enabled.

- JS/TS configuration
  - jsconfig.json exists for path mapping/editor hints. If you migrate to TS, introduce tsconfig.json and next-env.d.ts accordingly. Keep path aliases in sync across jsconfig/tsconfig and tooling.

2) Testing

The project has no external test framework installed. To keep dependencies light, we recommend Node’s built-in test runner (node:test) for unit tests. It works out of the box with ESM and requires no additional packages.

- How to add a test
  - Create files with .test.mjs (or .test.js if you stay ESM) under test/ or colocated next to the module under test. Example structure:
    - src/utils/add.mjs
    - test/add.test.mjs
  - Example module (ESM):
    export function add(a, b) {
      if (Number.isNaN(a) || Number.isNaN(b)) throw new TypeError('Inputs must be numbers');
      return a + b;
    }
  - Example test using node:test and node:assert:
    import test from 'node:test';
    import assert from 'node:assert/strict';
    import { add } from '../src/utils/add.mjs';

    test('add adds two numbers', () => {
      assert.equal(add(2, 3), 5);
    });

    test('add throws on NaN input', () => {
      assert.throws(() => add(NaN, 1), TypeError);
    });

- How to run tests
  - Ad-hoc: node --test
  - Specific file: node --test test/add.test.mjs
  - Recommended npm script (optional): add to package.json scripts: "test": "node --test"
    Then run: npm test

- What we verified
  - A sample util and test (like the examples above) were created and executed locally using node --test and passed. They were removed afterward to keep the repository clean as per instructions.

- Adding integration or component tests later
  - If you need React component tests, consider adding Vitest + @testing-library/react or Jest + React Testing Library. Prefer Vitest for speed and ESM alignment. Document any added tooling and update scripts accordingly.

3) Additional development notes

- Code style
  - Follow ESLint next/core-web-vitals rules. Prefer functional components and React 19 patterns. Use server components by default in App Router; add 'use client' only when required by stateful/browser APIs.

- Module boundaries
  - Keep UI components under app/ or a dedicated components/ folder. Non-UI logic (formatters, utilities) should live under src/ to facilitate isolated unit testing with node:test without touching Next internals.

- Environment variables
  - For runtime config, leverage Next public/private env conventions (NEXT_PUBLIC_ prefix for client-exposed vars). When adding envs, document them in README and avoid committing .env.* files.

- Performance and builds
  - Turbopack is enabled in dev and build scripts for faster iterations. If you hit edge cases, switch temporarily to the stable bundler by removing --turbopack from scripts while debugging.

- Lint/format in CI
  - If you add CI, ensure eslint runs on changed files. Optionally add a formatter (Prettier) if you want strict formatting; keep it aligned with ESLint rules.

- TypeScript migration (optional)
  - If migrating to TS, enable strict mode, generate types with next types, and configure ESLint TypeScript rules via Flat Config. Ensure Node test files use ESM syntax or Vitest/Jest config supports TS.

- Debugging tips
  - For server components, console logs appear in the server terminal. For client components, use the browser devtools. When in doubt about module side effects under ESM, verify import paths and file extensions explicitly (.mjs vs .js) to avoid resolution ambiguity.

- Common gotchas
  - Mixing CJS and ESM causes runtime import errors; keep everything ESM.
  - Avoid importing server-only modules into client components.
  - Update both jsconfig/tsconfig and tooling if you introduce path aliases to avoid mismatch between runtime and editor.

Change management

- When adding new tools (testing, formatting, CI), prefer minimal, well-documented configuration. Update this file to reflect any new conventions so future developers have a single source of truth.
