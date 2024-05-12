const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    testIsolation: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {},
  },
});
