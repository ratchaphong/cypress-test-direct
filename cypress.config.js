const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    // WEB_SITE: "https://st.rvpdplus.com/direct",
    WEB_SITE: "http://localhost:51003/direct/en",
    // VALID_EMAIL: "underwrite-customer00@test.com",
    // VALID_EMAIL_PASSWORD: "Tqd12345",
    // VALID_PHONE_NUMBER: "0972201973",
    // VALID_PHONE_NUMBER_PASSWORD: "Be220216",
  },
});
