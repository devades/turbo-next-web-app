# Turborepo kitchen sink starter

This Turborepo starter is maintained by the Turborepo core team.

This example also shows how to use [Workspace Configurations](https://turbo.build/docs/core-concepts/monorepos/configuring-workspaces).

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e kitchen-sink
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `storefront`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `blog`: a [Remix](https://remix.run/) blog
- `@devades/eslint-config`: (turbo-config repo) ESLint configurations used throughout the monorepo
- `@devades/jest-presets`: (turbo-config repo) Jest configurations
- `@devades/logger`: (turbo-config repo) isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains `<CounterButton>` and `<Link>` components)
- `@devades/typescript-config`: (turbo-config repo) tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting

### Notes:
## Design System @devade/design-system-ui pkg & Tailwind Safelist
Where its installed you may need to add a safelist to tailwind.config.js
Because if styles are used in imported component that weren't used on the source page tailwind won't have loaded them for performance / just-in-time reasons, the safelist ensures they're available
Possibly some of the styles in the safelist that are theme based need to be moved to tailwind-config pkg or a new config package in design system for theme

```
  safelist: [
    'bg-zinc-900',
    'border-zinc-900',
    'text-3xl',
    'lg:text-4xl',
  ],
```
