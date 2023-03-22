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

# 02. Packages

## 01 TailwindCss Package

[Checkout This Link](https://blog.nrwl.io/set-up-tailwind-css-with-angular-in-an-nx-workspace-6f039a0f4479)

## Add TailWindCss to app

```bash
npx nx generate @nrwl/angular:setup-tailwind
```

## Add Angular Material

Install dependency

```bash
npm install @angular/material @angular/cdk --save
```

### Add Material to a project

#### @Option 01: Add Angular Material to a project by terminal

```bash
>  NX  Generating @nrwl/angular:host
✔ Which stylesheet format would you like to use? · scss
```

#### @Option 02:Add Angular Material to a project by Manually

Edit apps/store-client/src/styles.scss file and add those scss for custom theme

```ts
/* ---------------- 01. Angular Material Start -------------- */
// Custom Theming for Angular Material
// For more information: https://material.angular.io/guide/theming
@use '@angular/material' as mat;
// Plus imports for other components in your app.

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
@include mat.core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://material.io/design/color/
$store-primary: mat.define-palette(mat.$cyan-palette);
$store-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);

// The warn palette is optional (defaults to red).
$store-warn: mat.define-palette(mat.$red-palette);

// Create the theme object. A theme consists of configurations for individual
// theming systems such as "color" or "typography".
$store-theme: mat.define-light-theme(
  (
    color: (
      primary: $store-primary,
      accent: $store-accent,
      warn: $store-warn
    )
  )
);

$store-dark-theme: mat.define-dark-theme(
  (
    color: (
      primary: $store-primary,
      accent: $store-accent,
      warn: $store-warn
    )
  )
);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include mat.all-component-themes($store-theme);
.dark {
  background-color: var(--bg-color);
  color: #ffffff;
  @include mat.all-component-colors($store-dark-theme);
  .mat-drawer {
    background-color: var(--sidenav-bg-color);
    &-container {
      background-color: var(--bg-color);
    }
  }
  .mat-table {
    background-color: var(--bg-card);
  }
  .mat-select-panel,
  .mat-menu-panel,
  .mat-dialog-container {
    background-color: var(--bg-popup);
  }
}
/* ---------------- 01. Angular Material End -------------- */
```

```bash
# Checking can be add
nx g @angular/material:ng-add --project=store-client --dry-run

# Add to project
nx g @angular/material:ng-add --project=store-client
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
