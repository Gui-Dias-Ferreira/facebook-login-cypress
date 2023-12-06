const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://twitter.com/',
    defaultCommandTimeout: 6000
  },
});
