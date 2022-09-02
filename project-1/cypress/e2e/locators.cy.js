/// <reference types="cypress" />

describe("Locators", () => {
	beforeEach(() => {
		cy.visit("/elements");
	});

	it("locating elements with get", () => {
		// Get all elements by tag name
		cy.get("button");

		// Get all elements by class name
		cy.get(".btn-with-class");
        
		// Get all elements with specific classes
		cy.get("[class='Elements-btn btn-with-class'");
		cy.get("[class='Elements-btn btn-with-class more-btn-classes'");

		// Get all elements by ID
		cy.get("#btn-with-id");

		// Get all elements by specific attribute
		cy.get("[type=submit]");

		// Get all elements by tag name and class
		cy.get("button.Elements-btn");

		// Get all elements by tag name and class and id
		cy.get("button.Elements-btn#btn-with-id");

		// Get all elements by tag name and class and type attribute
		cy.get("button.Elements-btn[type=submit]");

		// Get all elements with specific data test id
		cy.get("[data-cy='btn-id-1']");
		cy.getByTestId("btn-id-1")
	});

	it("locating elements with contains", () => {
		// Get all elements by unique text
		cy.contains("Unique Text");
		
		// Get all elements by by text
		cy.contains("Not Unique Text");
		
		// Get all elements by by text
		cy.contains("Text");
		
		// Get all elements by by text with selector
		cy.contains("[type='submit']", "Not Unique Text");
		
		// Get all elements by by text with selector
		cy.get("[type='submit']").contains("Not Unique Text");


	})
});

