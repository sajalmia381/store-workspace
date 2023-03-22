# 01. Initialize Project

Source: https://nx.dev/recipes/module-federation/dynamic-module-federation-with-angular

## 01. Create Nx Workspace

```bash
npx create-nx-workspace
```

```bash
 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Choose what to create                 · integrated
✔ What to create in the new workspace   · angular-monorepo
✔ Repository name                       · store-workspace
✔ Application name                      · store-client
✔ Default stylesheet format             · scss
✔ Enable distributed caching to make your CI faster · Yes

 >  NX   Nx is creating your v15.8.5 workspace.

   To make sure the command works reliably in all environments, and that the preset is applied correctly,
   Nx will run "npm install" several times. Please wait.

✔ Installing dependencies with npm
✔ Nx has successfully created the workspace: store-workspace.
✔ NxCloud has been set up successfully

 >  NX   Successfully initialized git.
```

Delete Existing store-client Module

## 02. Generate Host store-client

```bash
npx nx g @nrwl/angular:host store-client
```

```bash
>  NX  Generating @nrwl/angular:host
✔ Which stylesheet format would you like to use? · scss
```

# 02. Packages

## 01 TailwindCss Package

[Checkout This Link](https://blog.nrwl.io/set-up-tailwind-css-with-angular-in-an-nx-workspace-6f039a0f4479)

## Add TailWindCss to app

```bash
npx nx generate @nrwl/angular:setup-tailwind
```

## Add Angular Material

```bash

```

# 03. Generate Angular Ui Library

```bash
nx g @nrwl/angular:library ui-lib --tags=ui
```

<!-- Start Application -->

# 04. Serve Application

## Serve Dashboard as Host

```bash
nx run store-client:serve:development --devRemotes=login
```

<!-- ## Serve Login as Remote // Not Need

```bash
nx run login:serve:development
``` -->