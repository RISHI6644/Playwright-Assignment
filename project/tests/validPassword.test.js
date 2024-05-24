const { test, expect } = require('@playwright/test');
const FormSteps = require('../steps/formSteps');
const logger = require('../../logger');

test('Valid password', async ({ page }) => {
    const formSteps = new FormSteps(page);

    // Navigate to the main page
    await formSteps.navigateToMainPage('https://userinyerface.com/');
    logger.info('Navigated to main page');

    // Check if the main page is open by verifying the 'HERE' link is available
    const isHereLinkVisible = await formSteps.mainPage.hereLink.isVisible();
    expect(isHereLinkVisible).toBeTruthy();
    logger.info('Verified HERE link is visible on the main page');

    // Click on the 'HERE' link
    await formSteps.clickHereLink();
    logger.info('Clicked on the HERE link');

    // Verify that the game page is open by checking the next button is visible
    const isGamePageOpen = await formSteps.mainPage.nextButton.isVisible();
    expect(isGamePageOpen).toBeTruthy();
    logger.info('Verified game page is open');

    // Click on the email field and clear it
    await formSteps.mainPage.emailField.click();
    await formSteps.mainPage.clearEmailField();
    logger.info('Cleared email field');

    // Fill email field with a randomly generated email
    const randomEmail = await formSteps.generateRandomEmail();
    await formSteps.mainPage.emailField.fill(randomEmail);
    logger.info(`Filled email field with: ${randomEmail}`);

    // Click on the domain field and clear it
    await formSteps.mainPage.domainField.click();
    await formSteps.mainPage.clearDomainField();
    logger.info('Cleared domain field');

    // Fill domain field with a randomly generated domain
    const randomDomain = await formSteps.generateRandomDomain();
    await formSteps.mainPage.domainField.fill(randomDomain);
    logger.info(`Filled domain field with: ${randomDomain}`);

    // Interact with the dropdown list
    await formSteps.interactWithDropdownList(); // This will click the dropdown and select a random domain
    logger.info('Interacted with dropdown list and selected a random domain');

    // Click on the password field and clear it
    await formSteps.mainPage.passwordField.click();
    await formSteps.mainPage.clearPasswordField();
    logger.info('Cleared password field');

    // Generate and fill password field with a randomly generated valid password
    const randomValidPassword = await formSteps.generateRandomValidPassword(randomEmail);
    await formSteps.mainPage.passwordField.fill(randomValidPassword);
    logger.info(`Filled password field with: ${randomValidPassword}`);

    // Click on the terms & conditions checkbox
    await formSteps.mainPage.clickTermsAndConditionsCheckbox();
    logger.info('Accepted Terms & Conditions');

    // Click the next button
    await formSteps.mainPage.clickNextButton();
    logger.info('Clicked the next button');

    // Verify that the next card is open by checking the next card button is visible
    const isNextCardVisible = await formSteps.mainPage.isNextCardButtonVisible();
    expect(isNextCardVisible).toBeTruthy();
    logger.info('Next card is open');
});
