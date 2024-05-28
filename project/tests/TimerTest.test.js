import { test, expect } from '@playwright/test';
import FormSteps from '../steps/formSteps';
import { url } from '../testData/testData.json';
import { info } from '../../logger';

test('Timer', async ({ page }) => {
    const formSteps = new FormSteps(page);
    info('Starting Timer test');

    // Navigate to the main page
    await formSteps.navigateToMainPage(url);
    info('Navigated to main page');

    // Verify that the "Here" link is visible to confirm the main page is open
    const isHereLinkVisible = await formSteps.mainPage.hereLink.isVisible();
    expect(isHereLinkVisible).toBeTruthy();
    info('Verified "Here" link is visible');

    await formSteps.clickHereLink();
    info('Clicked on "Here" link');

    // Verify that the game page is open by checking the visibility of the "Next" button
    const isGamePageOpen = await formSteps.isGamePageOpen();
    expect(isGamePageOpen).toBeTruthy();
    info('Verified game page is open');

    // Check if the timer starts from 00:00
    const timerText = await formSteps.getTimerText();
    expect(timerText).toBe('00:00:00');
    info('Timer starts from 00:00:00');
});
