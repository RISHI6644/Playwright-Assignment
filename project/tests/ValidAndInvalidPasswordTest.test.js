import { test, expect } from '@playwright/test';
import FormSteps from '../steps/formSteps';
import { info } from '../../logger';
import { url } from '../testData/testData.json'; // Load test data

test('Valid password', async ({ page }) => {
    const formSteps = new FormSteps(page);
    info('Starting validPassword test');

    // Navigate to the main page
    await formSteps.navigateToMainPage(url);
    info('Navigated to main page');

    // Check if the main page is open by verifying the 'HERE' link is available
    const isHereLinkVisible = await formSteps.mainPage.hereLink.isVisible();
    expect(isHereLinkVisible).toBeTruthy();
    info('Verified HERE link is visible on the main page');

    // Click on the 'HERE' link
    await formSteps.clickHereLink();
    info('Clicked on the HERE link');

    // Verify that the game page is open by checking the next button is visible
    const isGamePageOpen = await formSteps.mainPage.nextButton.isVisible();
    expect(isGamePageOpen).toBeTruthy();
    info('Verified game page is open');

    // Click on the email field and clear it
    await formSteps.mainPage.emailField.click();
    await formSteps.mainPage.clearEmailField();
    info('Cleared email field');

    // Fill email field with a randomly generated email
    const randomEmail = await formSteps.generateRandomEmail();
    await formSteps.mainPage.emailField.fill(randomEmail);
    info(`Filled email field with: ${randomEmail}`);

    // Click on the domain field and clear it
    await formSteps.mainPage.domainField.click();
    await formSteps.mainPage.clearDomainField();
    info('Cleared domain field');

    // Fill domain field with a randomly generated domain
    const randomDomain = await formSteps.generateRandomDomain();
    await formSteps.mainPage.domainField.fill(randomDomain);
    info(`Filled domain field with: ${randomDomain}`);

    // Interact with the dropdown list
    await formSteps.interactWithDropdownList();
    info('Interacted with dropdown list and selected a random domain');

    // Click on the password field and clear it
    await formSteps.mainPage.passwordField.click();
    await formSteps.mainPage.clearPasswordField();
    info('Cleared password field');

    // Generate and fill password field with a randomly generated valid password
    const randomValidPassword = await formSteps.generateRandomValidPassword(randomEmail);
    await formSteps.mainPage.passwordField.fill(randomValidPassword);
    info(`Filled password field with: ${randomValidPassword}`);

    // Click on the terms & conditions checkbox
    await formSteps.mainPage.clickTermsAndConditionsCheckbox();
    info('Accepted Terms & Conditions');

    // Click the next button
    await formSteps.mainPage.clickNextButton();
    info('Clicked the next button');

    // Verify that the next card is open by checking the next card button is visible
    const isNextCardVisible = await formSteps.mainPage.isNextCardButtonVisible();
    expect(isNextCardVisible).toBeTruthy();
    info('Next card is open');
});
