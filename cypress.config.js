const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nybzv1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
