const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

const sharedTailwindConfig = require('../../libs/tailwind-preset/tailwind-preset.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,scss}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
