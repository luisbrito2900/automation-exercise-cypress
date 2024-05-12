const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  video: false,
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    reportDir: "cypress/results",
    reportFilename: "e2e-tests-report.html",
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: "https://automationexercise.com/",
    testIsolation: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      on("before:run", async () => {
        const reportDir = path.join(
          __dirname,
          config.reporterOptions.reportDir
        );
        console.log(`Clearing report directory: ${reportDir}`);

        if (fs.existsSync(reportDir)) {
          fs.rmSync(reportDir, { recursive: true, force: true });
          console.log(`Report directory cleared: ${reportDir}`);
        }
      });
    },
  },
});
