import {
  performActionById,
  assertUrlContains,
  assertElementVisibleById,
  replaceLanguage,
} from "../../support/utils";

describe("Login", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("WEB_SITE") + "/login");
  });

  it("ทดสอบเข้าสู่ระบบ - En", () => {
    cy.loginWithEmail("En");
  });

  it("ทดสอบเข้าสู่ระบบ - Th", () => {
    cy.loginWithEmail("Th");
  });

  it("ทดสอบเข้าสู่ระบบด้วยเบอร์โทรศัพท์ - En", () => {
    cy.loginWithPhoneNumber("En");
  });

  it("ทดสอบเข้าสู่ระบบด้วยเบอร์โทรศัพท์ - Th", () => {
    cy.loginWithPhoneNumber("Th");
  });

  it("ทดสอบเข้าสู่ระบบด้วยเบอร์โทรศัพท์แต่กรอกรหัสผิด - Th", () => {
    cy.fixture("login.json").then((data) => {
      const {
        phoneNumber,
        password,
        loginButton,
        changeUsername,
        languageSwitch,
        warningModal,
        user3: user,
      } = data;

      performActionById(languageSwitch.id, "click");
      performActionById(changeUsername.id, "click");
      performActionById(phoneNumber.id, "type", user.phoneNumber);
      performActionById(password.id, "type", user.password);
      performActionById(loginButton.id, "click");
      assertElementVisibleById(warningModal.id);
      performActionById(warningModal.confirmButton.id, "click");
      assertUrlContains(replaceLanguage(Cypress.env("WEB_SITE")) + "/login");
    });
  });
});

Cypress.Commands.add("loginWithEmail", (language) => {
  cy.fixture("login.json").then((data) => {
    const emailField = data.email;
    const passwordField = data.password;
    const loginButton = data.loginButton;
    const languageSwitch = data.languageSwitch;
    const user = data.user1;
    let expectedUrl = Cypress.env("WEB_SITE");

    if (language === "En") {
    } else {
      performActionById(languageSwitch.id, "click");
      expectedUrl = replaceLanguage(expectedUrl);
    }
    performActionById(emailField.id, "type", user.email);
    performActionById(passwordField.id, "type", user.password);
    performActionById(loginButton.id, "click");
    assertUrlContains(expectedUrl);
  });
});

Cypress.Commands.add("loginWithPhoneNumber", (language) => {
  cy.fixture("login.json").then((data) => {
    const phoneNumberField = data.phoneNumber;
    const passwordField = data.password;
    const loginButton = data.loginButton;
    const languageSwitch = data.languageSwitch;
    const changeUsername = data.changeUsername;
    const user = data.user2;
    let expectedUrl = Cypress.env("WEB_SITE");

    if (language === "En") {
    } else {
      performActionById(languageSwitch.id, "click");
      expectedUrl = replaceLanguage(expectedUrl);
    }
    performActionById(changeUsername.id, "click");
    performActionById(phoneNumberField.id, "type", user.phoneNumber);
    performActionById(passwordField.id, "type", user.password);
    performActionById(loginButton.id, "click");
    assertUrlContains(expectedUrl);
  });
});
