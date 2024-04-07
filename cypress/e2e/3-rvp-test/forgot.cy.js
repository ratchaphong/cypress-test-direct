import { performActionById, assertUrlContains } from "../../support/utils";

describe("Forgot", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("WEB_SITE") + "/login");
  });

  it("คลิกเพื่อลืมรหัสผ่าน", () => {
    performActionById("direct-path-forgot-login", "click");
    assertUrlContains(Cypress.env("WEB_SITE") + "/forgot");
  });
});
