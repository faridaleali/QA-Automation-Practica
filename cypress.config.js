const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "QA-FaridAleAli",
  e2e: {
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
