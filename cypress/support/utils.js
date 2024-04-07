export function performActionById(id, action, inputText = null) {
  if (action === "type") {
    cy.get(`#${id}`).clear().type(inputText);
  } else if (action === "click") {
    cy.get(`#${id}`).click();
  } else {
    throw new Error(
      "Invalid action type. Please provide 'click', 'type', or 'clear'."
    );
  }
}

export function performActionByContain(text, action, inputText = null) {
  if (action === "type") {
    cy.get(text).clear().type(inputText);
  } else if (action === "click-button" || action === "click-label") {
    let tag = action.split("-")[1];
    // cy.contains(tag, text).then(($element) => {
    //   cy.wrap($element).click();
    // });
    cy.contains(tag, text).click();
  } else {
    throw new Error(
      "Invalid action type. Please provide 'click', 'type', or 'clear'."
    );
  }
}

export function assertUrlContains(path = "/") {
  cy.url().should("include", path);
}

export function assertElementVisibleById(id) {
  cy.get(`#${id}`).should("be.visible");
}

export function assertProfileUrlCorrect(path = "/profile") {
  cy.url().then((url) => {
    const profileId = url.split("/").pop();
    const expectedProfileUrl = `${path}/${profileId}`;

    cy.url().should("eq", expectedProfileUrl);
  });
}

export function replaceLanguage(url) {
  return url.replace("/direct/en", "/direct");
}

Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
});
