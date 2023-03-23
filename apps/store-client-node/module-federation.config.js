module.exports = {
  name: 'store-client-node',
  exposes: {
    './Module': 'apps/store-client-node/src/app/remote-entry/entry.module.ts',
  },
};
