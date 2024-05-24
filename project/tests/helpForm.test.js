const { test, expect } = require('@playwright/test');
const FormSteps = require('../steps/formSteps');
const testData = require('../testData/testData.json');
const logger = require('../../logger');

test('Help form', async ({ page }) => {
    const formSteps = new FormSteps(page);
    logger.info('Starting Help form test');

    // Navigate to the main page
    await formSteps.navigateToMainPage(testData.url);
    logger.info('Navigated to main page');

    // Verify that the "Here" link is visible to confirm the main page is open
    const isHereLinkVisible = await formSteps.mainPage.hereLink.isVisible();
    expect(isHereLinkVisible).toBeTruthy();
    logger.info('Verified "Here" link is visible');

    await formSteps.clickHereLink();
    logger.info('Clicked on "Here" link');

    // Verify that the game page is open by checking the visibility of the "Next" button
    const isGamePageOpen = await formSteps.isGamePageOpen();
    expect(isGamePageOpen).toBeTruthy();
    logger.info('Verified game page is open');

    await formSteps.clickHelpButton();
    logger.info('Clicked on "Help" button');

    // Verify that the help response is displayed
    const helpResponseVisible = await formSteps.isHelpResponseVisible();
    expect(helpResponseVisible).toBeTruthy();
    logger.info('Help response is displayed');
});
