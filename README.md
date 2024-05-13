# Automation Exercise with Cypress - Clothing Store

This repository contains comprehensive Cypress test scripts designed to automate and validate user flows on the web application of a fictional online clothing store.

## Tech Stack

- [Cypress](https://www.cypress.io/)
- [VS Code](https://code.visualstudio.com/)
- [Faker.js](https://fakerjs.dev/)
- [mochawesome](https://www.npmjs.com/package/mochawesome-report-generator)

## Setting Up Test Environment

### Prerequisites

Ensure your local environment is set up to work with Cypress. This includes having Node.js installed. For more details on setting up Node.js, please visit [Node.js official website](https://nodejs.org/).

Clone the repo

```bash
git clone https://github.com/luisbrito2900/automation-exercise-cypress
```

Install dependencies

```bash
npm install
```

### Running Tests

To open Cypress Test Runner

```bash
npm run test:runner
```

To run tests headlessly in the Chrome browser and generate a mochawesome HTML report in`cypress/results`

```bash
npm run test:run
```

## Automation Test Script Development and Execution

The test script are developed using Cypress with JavaScript. The complete test scripts can be found in the `cypress/e2e` directory of this repository. These scripts cover all defined user flows and test cases as specified in the project documentation.

## Analysis and Test Reports

- After test execution, the results are compiled into test reports using Mochawesome. These reports provide a detailed analysis of each test case executed, including pass/fail status, timestamps, and test steps.

- Accessing Test Reports: After running the tests, the reports can be found in the `cypress/results` directory. Open `e2e-tests-report.html` file in any web browser to view the detailed test report.
