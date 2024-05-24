const { test, expect } = require('@playwright/test');
const FormSteps = require('../steps/formSteps');
const testData = require('../testData/testData.json');
const logger = require('../../logger');

test('Timer', async ({ page }) => {
    const formSteps = new FormSteps(page);
    logger.info('Starting Timer test');

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

    // Check if the timer starts from 00:00
    const timerText = await formSteps.getTimerText();
    expect(timerText).toBe('00:00:00');
    logger.info('Timer starts from 00:00:00');
});
